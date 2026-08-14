import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: string | number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

export default function AnimatedCounter({
  value,
  duration = 1.5,
  className = "",
  style = {},
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState<string>("0")

  useEffect(() => {
    if (!isInView) return

    // Extract numeric part, prefix, suffix, decimals
    const stringVal = String(value)
    const match = stringVal.match(/^([^0-9.-]*)([0-9.,]+)(.*)$/)

    if (!match) {
      setDisplayValue(stringVal)
      return
    }

    const prefix = match[1] || ""
    const rawNumStr = match[2].replace(/,/g, "")
    const suffix = match[3] || ""
    const targetNum = parseFloat(rawNumStr)

    if (isNaN(targetNum)) {
      setDisplayValue(stringVal)
      return
    }

    const hasCommas = match[2].includes(",")
    const decimalPlaces = match[2].includes(".") ? match[2].split(".")[1].length : 0

    let startTimestamp: number | null = null

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)

      // Ease out expo formula for smooth counting
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentNum = targetNum * easeProgress

      let formattedNum = currentNum.toFixed(decimalPlaces)
      if (hasCommas) {
        const parts = formattedNum.split(".")
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        formattedNum = parts.join(".")
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayValue(stringVal)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {displayValue}
    </span>
  )
}
