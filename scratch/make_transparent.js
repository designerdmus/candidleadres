import fs from "fs"
import zlib from "zlib"

function convertWhiteToTransparent(inputPath, outputPath) {
  const buf = fs.readFileSync(inputPath)
  
  let offset = 8
  let width = 0
  let height = 0
  let ihdrChunk = null
  let idatBuffers = []
  let chunksBefore = []
  let chunksAfter = []
  let reachedIdat = false

  while (offset < buf.length) {
    const length = buf.readUInt32BE(offset)
    const type = buf.toString("ascii", offset + 4, offset + 8)
    const chunkData = buf.subarray(offset, offset + 12 + length)
    
    if (type === "IHDR") {
      width = buf.readUInt32BE(offset + 8)
      height = buf.readUInt32BE(offset + 12)
      ihdrChunk = chunkData
      chunksBefore.push(chunkData)
    } else if (type === "IDAT") {
      reachedIdat = true
      idatBuffers.push(buf.subarray(offset + 8, offset + 8 + length))
    } else {
      if (!reachedIdat) {
        chunksBefore.push(chunkData)
      } else {
        chunksAfter.push(chunkData)
      }
    }
    
    offset += 12 + length
  }

  const compressedData = Buffer.concat(idatBuffers)
  const decompressed = zlib.inflateSync(compressedData)
  
  const stride = width * 4 + 1
  const rawData = Buffer.alloc(width * height * 4)

  // Unfilter scanlines (type 0, 1, 2, 3, 4)
  let prevScanline = Buffer.alloc(width * 4)

  for (let y = 0; y < height; y++) {
    const filterType = decompressed[y * stride]
    const scanline = decompressed.subarray(y * stride + 1, (y + 1) * stride)
    const currentScanline = Buffer.alloc(width * 4)

    for (let x = 0; x < width * 4; x++) {
      let raw = scanline[x]
      let a = x >= 4 ? currentScanline[x - 4] : 0
      let b = prevScanline[x]
      let c = x >= 4 ? prevScanline[x - 4] : 0

      if (filterType === 1) {
        raw = (raw + a) & 0xff
      } else if (filterType === 2) {
        raw = (raw + b) & 0xff
      } else if (filterType === 3) {
        raw = (raw + Math.floor((a + b) / 2)) & 0xff
      } else if (filterType === 4) {
        let p = a + b - c
        let pa = Math.abs(p - a)
        let pb = Math.abs(p - b)
        let pc = Math.abs(p - c)
        let pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c)
        raw = (raw + pr) & 0xff
      }

      currentScanline[x] = raw
      rawData[y * width * 4 + x] = raw
    }
    prevScanline = currentScanline
  }

  // Convert white background pixels to transparent alpha
  for (let i = 0; i < rawData.length; i += 4) {
    const r = rawData[i]
    const g = rawData[i + 1]
    const b = rawData[i + 2]
    const a = rawData[i + 3]

    // If near white background (RGB all > 240)
    if (r > 240 && g > 240 && b > 240) {
      // Calculate white distance for soft anti-aliased edge
      const minChan = Math.min(r, g, b)
      if (minChan > 250) {
        rawData[i + 3] = 0
      } else {
        const alphaRamp = Math.floor(((250 - minChan) / 10) * a)
        rawData[i + 3] = Math.max(0, Math.min(a, alphaRamp))
      }
    }
  }

  // Re-encode scanlines with filter type 0 (None)
  const newDecompressed = Buffer.alloc(height * (width * 4 + 1))
  for (let y = 0; y < height; y++) {
    newDecompressed[y * (width * 4 + 1)] = 0 // filter type 0
    rawData.copy(newDecompressed, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4)
  }

  const newCompressed = zlib.deflateSync(newDecompressed)

  // Construct PNG IDAT chunk with CRC32
  function makeChunk(type, data) {
    const len = data.length
    const buf = Buffer.alloc(12 + len)
    buf.writeUInt32BE(len, 0)
    buf.write(type, 4, 4, "ascii")
    data.copy(buf, 8)
    
    // Calculate CRC
    const crcTable = []
    for (let n = 0; n < 256; n++) {
      let c = n
      for (let k = 0; k < 8; k++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
      }
      crcTable[n] = c
    }

    let crc = 0xffffffff
    for (let i = 4; i < 8 + len; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff]
    }
    crc = (crc ^ 0xffffffff) >>> 0
    buf.writeUInt32BE(crc, 8 + len)
    return buf
  }

  const pngSig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
  const newIdatChunk = makeChunk("IDAT", newCompressed)
  const iendChunk = makeChunk("IEND", Buffer.alloc(0))

  const finalPng = Buffer.concat([
    pngSig,
    ...chunksBefore,
    newIdatChunk,
    iendChunk
  ])

  fs.writeFileSync(outputPath, finalPng)
  console.log(`Successfully generated transparent 3D pie chart PNG at: ${outputPath}`)
}

convertWhiteToTransparent(
  "d:/Prabha/Projects/2026/Candidleaders/Replicate landing page/src/imports/pie-chart-3d-hd.png",
  "d:/Prabha/Projects/2026/Candidleaders/Replicate landing page/src/imports/pie-chart-3d-transparent.png"
)
