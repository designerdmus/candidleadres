import fs from "fs"
import zlib from "zlib"

function convertCheckerboardToTransparent(inputPath, outputPath) {
  const buf = fs.readFileSync(inputPath)

  let offset = 8
  let width = 0
  let height = 0
  let chunksBefore = []
  let idatBuffers = []
  let reachedIdat = false

  while (offset < buf.length) {
    const length = buf.readUInt32BE(offset)
    const type = buf.toString("ascii", offset + 4, offset + 8)
    const chunkData = buf.subarray(offset, offset + 12 + length)

    if (type === "IHDR") {
      width = buf.readUInt32BE(offset + 8)
      height = buf.readUInt32BE(offset + 12)
      chunksBefore.push(chunkData)
    } else if (type === "IDAT") {
      reachedIdat = true
      idatBuffers.push(buf.subarray(offset + 8, offset + 8 + length))
    } else {
      if (!reachedIdat) {
        chunksBefore.push(chunkData)
      }
    }

    offset += 12 + length
  }

  const compressedData = Buffer.concat(idatBuffers)
  const decompressed = zlib.inflateSync(compressedData)

  const stride = width * 4 + 1
  const rawData = Buffer.alloc(width * height * 4)

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

  // Boundary Flood fill for background checkerboard pixels
  const visited = new Uint8Array(width * height)
  const queue = []

  for (let x = 0; x < width; x++) {
    queue.push(x, 0)
    queue.push(x, height - 1)
  }
  for (let y = 0; y < height; y++) {
    queue.push(0, y)
    queue.push(width - 1, y)
  }

  function isBackgroundCheckerboard(x, y) {
    const idx = (y * width + x) * 4
    const r = rawData[idx]
    const g = rawData[idx + 1]
    const b = rawData[idx + 2]
    // Checkerboard grey/white pixels are near-neutral light colors (R>200, G>200, B>200)
    return r > 210 && g > 210 && b > 210
  }

  let head = 0
  while (head < queue.length) {
    const x = queue[head++]
    const y = queue[head++]
    const pos = y * width + x

    if (visited[pos]) continue
    visited[pos] = 1

    if (isBackgroundCheckerboard(x, y)) {
      const idx = pos * 4
      rawData[idx + 3] = 0 // set transparent alpha

      if (x > 0) queue.push(x - 1, y)
      if (x < width - 1) queue.push(x + 1, y)
      if (y > 0) queue.push(x, y - 1)
      if (y < height - 1) queue.push(x, y + 1)
    }
  }

  // Re-encode PNG
  const newDecompressed = Buffer.alloc(height * (width * 4 + 1))
  for (let y = 0; y < height; y++) {
    newDecompressed[y * (width * 4 + 1)] = 0
    rawData.copy(newDecompressed, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4)
  }

  const newCompressed = zlib.deflateSync(newDecompressed)

  function makeChunk(type, data) {
    const len = data.length
    const buf = Buffer.alloc(12 + len)
    buf.writeUInt32BE(len, 0)
    buf.write(type, 4, 4, "ascii")
    data.copy(buf, 8)

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
  console.log(`Successfully generated transparent Hero 3D laptop PNG at: ${outputPath}`)
}

convertCheckerboardToTransparent(
  "C:/Users/kprabhakar/.gemini/antigravity-ide/brain/265544c2-159c-4a0d-9f0b-aae5a47e7dc6/media__1786113644276.jpg",
  "d:/Prabha/Projects/2026/Candidleaders/Replicate landing page/src/imports/hero-laptop-3d-ultra.png"
)
