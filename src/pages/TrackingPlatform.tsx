import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import targetImg from "@/imports/List Target.png"
import getStarted3dHd from "@/imports/get-started-3d-hd.png"

// ─── Animated Number Counter ────────────────────────────────────────────────

function Counter({ to, prefix = "", suffix = "", decimals = 0 }: {
  to: number; prefix?: string; suffix?: string; decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setVal(parseFloat((ease * to).toFixed(decimals)))
      if (t < 1) requestAnimationFrame(tick)
      else setVal(to)
    }
    requestAnimationFrame(tick)
  }, [inView, to, decimals])

  return (
    <span ref={ref}>
      {prefix}{decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()}{suffix}
    </span>
  )
}

// ─── Section 1: Hero ────────────────────────────────────────────────────────

// ─── Section 1: Hero (Pure React 3D Apple Glass Style) ───────────────────────

function AppleGlassDashboard() {
  const [tilt, setTilt] = useState({ x: -2, y: 4 })
  const [activePoint, setActivePoint] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setTilt({ x: -y / 25, y: x / 25 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: -2, y: 4 })
  }

  // Chart Points corresponding to labels 01, 05, 10, 15, 20, 25, 30
  const points = [
    { day: "01", val: "$10.2K", chg: "▲ 8.4%", x: 15, y: 58 },
    { day: "05", val: "$16.8K", chg: "▲ 10.1%", x: 52, y: 44 },
    { day: "10", val: "$14.1K", chg: "▲ 6.5%", x: 90, y: 52 },
    { day: "15", val: "$22.8K", chg: "▲ 12.8%", x: 128, y: 20 },
    { day: "20", val: "$24.5K", chg: "▲ 11.5%", x: 168, y: 33 }, // Highlighted in reference
    { day: "25", val: "$28.9K", chg: "▲ 14.2%", x: 205, y: 13 },
    { day: "30", val: "$25.4K", chg: "▲ 13.0%", x: 242, y: 24 },
  ]

  // Generate smooth cubic bezier SVG path string
  const svgPath = `M ${points[0].x} ${points[0].y} ` +
    points.slice(1).map((p, i) => {
      const prev = points[i]
      const cp1x = prev.x + (p.x - prev.x) / 2
      const cp2x = prev.x + (p.x - prev.x) / 2
      return `C ${cp1x} ${prev.y}, ${cp2x} ${p.y}, ${p.x} ${p.y}`
    }).join(" ")

  const svgAreaPath = `${svgPath} L ${points[points.length - 1].x} 72 L ${points[0].x} 72 Z`

  const activeP = activePoint !== null ? points[activePoint] : null

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
        background: "linear-gradient(135deg, rgba(10, 17, 40, 0.82) 0%, rgba(6, 12, 32, 0.92) 100%)",
        border: "1.5px solid rgba(147, 197, 253, 0.3)",
        borderRadius: 26,
        padding: "22px",
        width: "100%",
        maxWidth: 400,
        backdropFilter: "blur(32px) saturate(200%)",
        WebkitBackdropFilter: "blur(32px) saturate(200%)",
        boxShadow: "0 35px 100px rgba(2, 6, 20, 0.85), 0 0 35px rgba(59, 130, 246, 0.3), inset 0 1.5px 2px rgba(255, 255, 255, 0.35), inset 0 -1.5px 2px rgba(0, 0, 0, 0.6)",
      }}
      className="relative transition-shadow duration-300 group"
    >
      {/* Glossy top lighting sweep reflection */}
      <div className="absolute top-0 inset-x-0 h-14 rounded-t-[26px] pointer-events-none" style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)"
      }} />

      {/* ── Header: 3 Apple macOS traffic-light window dots ── */}
      <div className="flex items-center gap-2 mb-4.5">
        <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: "radial-gradient(circle at 35% 35%, #FF7B73 0%, #FF5F56 70%, #E0443E 100%)", boxShadow: "0 0 8px rgba(255,95,86,0.6)" }} />
        <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: "radial-gradient(circle at 35% 35%, #FFD066 0%, #FFBD2E 70%, #DEA123 100%)", boxShadow: "0 0 8px rgba(255,189,46,0.6)" }} />
        <div className="w-3.5 h-3.5 rounded-full shadow-sm" style={{ background: "radial-gradient(circle at 35% 35%, #46E35E 0%, #27C93F 70%, #1FA431 100%)", boxShadow: "0 0 8px rgba(39,201,63,0.6)" }} />
      </div>

      {/* ── Top 3 Stat Cards Row ── */}
      <div className="grid grid-cols-3 gap-2.5 mb-4.5">
        {[
          { title: "Revenue", val: "$24.5K", chg: "▲ 12.5%" },
          { title: "Clicks", val: "142K", chg: "▲ 6.7%" },
          { title: "Conversions", val: "8.7%", chg: "▲ 15.3%" },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -3, scale: 1.02 }}
            className="rounded-2xl p-2.5 transition-all duration-200 cursor-pointer relative overflow-hidden"
            style={{
              background: hoveredCard === i ? "rgba(255, 255, 255, 0.09)" : "rgba(255, 255, 255, 0.04)",
              border: hoveredCard === i ? "1px solid rgba(147, 197, 253, 0.5)" : "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: hoveredCard === i ? "0 8px 24px rgba(37, 99, 235, 0.3), inset 0 1px 1px rgba(255,255,255,0.2)" : "inset 0 1px 1px rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ fontSize: 10, color: "rgba(255, 255, 255, 0.6)", fontWeight: 600, marginBottom: 4 }}>{s.title}</div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: 3 }}>{s.val}</div>
            <div className="inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5" style={{ background: "rgba(34, 197, 94, 0.16)" }}>
              <span style={{ fontSize: 9.5, color: "#4ade80", fontWeight: 800 }}>{s.chg}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Middle: Earnings Performance Chart Card ── */}
      <div
        className="rounded-2xl p-3.5 mb-4.5 relative"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.09)",
          boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span style={{ fontSize: 12.5, fontWeight: 800, color: "white", letterSpacing: "-0.01em" }}>Earnings Performance</span>
          <motion.div
            whileHover={{ scale: 1.04, borderColor: "rgba(147, 197, 253, 0.7)" }}
            className="flex items-center gap-1 rounded-full px-2.5 py-1 cursor-pointer"
            style={{
              background: "rgba(37, 99, 235, 0.25)",
              border: "1px solid rgba(96, 165, 250, 0.4)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span style={{ fontSize: 10, color: "#93c5fd", fontWeight: 700 }}>This Month ▾</span>
          </motion.div>
        </div>

        {/* Y Axis & SVG Line Chart */}
        <div className="flex gap-2.5">
          {/* Y Axis Labels */}
          <div className="flex flex-col justify-between" style={{ height: 76, paddingBottom: 2 }}>
            {["30K", "20K", "10K", "0"].map((l) => (
              <span key={l} style={{ fontSize: 8.5, color: "rgba(255, 255, 255, 0.4)", fontWeight: 600 }}>{l}</span>
            ))}
          </div>

          {/* SVG Canvas Area */}
          <div className="flex-1 relative">
            <svg width="100%" height="76" viewBox="0 0 260 76" preserveAspectRatio="none" className="overflow-visible">
              <defs>
                <linearGradient id="appleGlassChartArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                </linearGradient>
                <filter id="glowBlue" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Area fill */}
              <path d={svgAreaPath} fill="url(#appleGlassChartArea)" />

              {/* Line graph curve */}
              <motion.path
                d={svgPath}
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glowBlue)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* Interactive Data Points */}
              {points.map((p, idx) => {
                const isActive = activePoint === idx
                return (
                  <g
                    key={p.day}
                    className="cursor-pointer"
                    onClick={() => setActivePoint(idx)}
                    onMouseEnter={() => setActivePoint(idx)}
                    onMouseLeave={() => setActivePoint(null)}
                  >
                    {/* Invisible hit box for smooth hover touch */}
                    <circle cx={p.x} cy={p.y} r="10" fill="transparent" />
                    {isActive && (
                      <circle cx={p.x} cy={p.y} r="9" fill="rgba(56, 189, 248, 0.35)" />
                    )}
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={isActive ? "5" : "3.2"}
                      fill={isActive ? "#FFFFFF" : "#38BDF8"}
                      stroke={isActive ? "#0EA5E9" : "rgba(255,255,255,0.7)"}
                      strokeWidth={isActive ? "2.5" : "1"}
                      className="transition-all duration-200"
                    />
                  </g>
                )
              })}
            </svg>

            {/* Floating Popover Card matching Image 1 */}
            {activePoint !== null && points[activePoint] && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.92 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute z-30 pointer-events-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white text-slate-900 shadow-[0_14px_36px_rgba(0,0,0,0.45),0_0_24px_rgba(56,189,248,0.6)] border border-blue-100"
                style={{
                  left: `${(points[activePoint].x / 260) * 100}%`,
                  top: `${(points[activePoint].y / 76) * 100}%`,
                  transform: activePoint > 4 ? "translate(-88%, -115%)" : "translate(-15%, -115%)",
                }}
              >
                <span className="text-sm font-extrabold tracking-tight text-slate-900">
                  {points[activePoint].val}
                </span>
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">
                  {points[activePoint].chg}
                </span>
              </motion.div>
            )}

            {/* X Axis Labels */}
            <div className="flex justify-between mt-1 px-1">
              {points.map((p, idx) => (
                <span
                  key={p.day}
                  onMouseEnter={() => setActivePoint(idx)}
                  onMouseLeave={() => setActivePoint(null)}
                  className="cursor-pointer transition-colors duration-200"
                  style={{
                    fontSize: 8.5,
                    color: activePoint === idx ? "#60a5fa" : "rgba(255, 255, 255, 0.4)",
                    fontWeight: activePoint === idx ? 800 : 500
                  }}
                >
                  {p.day}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Row 2 Cards: Conversion Rate & Active Campaigns ── */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Card 1: Conversion Rate with Donut Chart */}
        <motion.div
          whileHover={{ y: -3, borderColor: "rgba(147, 197, 253, 0.45)" }}
          className="rounded-2xl p-3 flex items-center justify-between cursor-pointer transition-all duration-200"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <div style={{ fontSize: 9.5, color: "rgba(255, 255, 255, 0.55)", fontWeight: 600, marginBottom: 3 }}>Conversion Rate</div>
            <div style={{ fontSize: 16.5, fontWeight: 900, color: "white", letterSpacing: "-0.01em" }}>12.5%</div>
            <div style={{ fontSize: 9.5, color: "#4ade80", fontWeight: 800, marginTop: 2 }}>▲ 24.4%</div>
          </div>

          {/* SVG Donut Chart matching reference image */}
          <div className="relative flex items-center justify-center">
            <svg width="44" height="44" className="-rotate-90">
              <circle cx="22" cy="22" r="16" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="6" />
              <motion.circle
                cx="22" cy="22" r="16" fill="none" stroke="#38BDF8" strokeWidth="6"
                strokeDasharray="100.5"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 100.5 }}
                animate={{ strokeDashoffset: 30 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(56, 189, 248, 0.85))" }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Card 2: Active Campaigns with 3 Vertical Mini Bars */}
        <motion.div
          whileHover={{ y: -3, borderColor: "rgba(147, 197, 253, 0.45)" }}
          className="rounded-2xl p-3 flex items-center justify-between cursor-pointer transition-all duration-200"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.09)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
          }}
        >
          <div>
            <div style={{ fontSize: 9.5, color: "rgba(255, 255, 255, 0.55)", fontWeight: 600, marginBottom: 3 }}>Active Campaigns</div>
            <div style={{ fontSize: 16.5, fontWeight: 900, color: "white", letterSpacing: "-0.01em" }}>24</div>
            <div style={{ fontSize: 9.5, color: "#4ade80", fontWeight: 800, marginTop: 2 }}>▲ 2 this week</div>
          </div>

          {/* 3 Glowing rounded mini bar chart height indicators */}
          <div className="flex items-end gap-1.5 h-7">
            {[
              { h: 14, val: "40%" },
              { h: 22, val: "65%" },
              { h: 30, val: "100%" },
            ].map((bar, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: bar.h }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
                className="w-2.5 rounded-full"
                style={{
                  background: "linear-gradient(180deg, #BAE6FD 0%, #38BDF8 50%, #1D4ED8 100%)",
                  boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Right Column: 3D Target + 3D Glass Bar Chart Pedestal ─────────────────

function GlassTargetAndPedestal() {
  const [hoverTarget, setHoverTarget] = useState(false)
  const [hoverBarIndex, setHoverBarIndex] = useState<number | null>(null)

  const bars = [
    { height: 44, label: "Clicks", val: "45K" },
    { height: 60, label: "Sales", val: "62K" },
    { height: 74, label: "Leads", val: "88K" },
    { height: 100, label: "Revenue", val: "142K" },
  ]

  return (
    <div className="hidden lg:flex flex-col items-center justify-between gap-6" style={{ width: 175 }}>
      {/* ── 3D Target Dartboard with Orbiting Spheres & Arrow (Pure JSX/SVG) ── */}
      <motion.div
        onMouseEnter={() => setHoverTarget(true)}
        onMouseLeave={() => setHoverTarget(false)}
        animate={{
          y: hoverTarget ? -8 : [0, -10, 0],
          rotateY: hoverTarget ? 15 : 0,
        }}
        transition={{
          y: hoverTarget ? { duration: 0.3 } : { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 0.4 }
        }}
        className="relative flex items-center justify-center cursor-pointer group"
        style={{ width: 155, height: 155 }}
      >
        {/* Radial Ambient Glow */}
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.65) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 70%)",
          filter: "blur(24px)",
          transform: hoverTarget ? "scale(1.35)" : "scale(1.15)",
          transition: "transform 400ms ease",
        }} />

        {/* Orbiting ring 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: hoverTarget ? 6 : 14, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border pointer-events-none"
          style={{
            width: 145,
            height: 62,
            borderColor: "rgba(147, 197, 253, 0.45)",
            transform: "rotateX(65deg) rotateY(-15deg)",
          }}
        >
          {/* Orbiting sphere 1 */}
          <div className="absolute -top-2.5 left-1/2 w-4.5 h-4.5 rounded-full" style={{
            background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #38bdf8 45%, #1d4ed8 100%)",
            boxShadow: "0 0 14px #38bdf8, inset -1px -1px 3px rgba(0,0,0,0.5)"
          }} />
        </motion.div>

        {/* Orbiting ring 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: hoverTarget ? 8 : 18, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full border pointer-events-none"
          style={{
            width: 135,
            height: 52,
            borderColor: "rgba(147, 197, 253, 0.35)",
            transform: "rotateX(55deg) rotateY(35deg)",
          }}
        >
          {/* Orbiting sphere 2 */}
          <div className="absolute -bottom-2 right-4 w-3.5 h-3.5 rounded-full" style={{
            background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #3b82f6 50%, #1e3a8a 100%)",
            boxShadow: "0 0 12px #3b82f6"
          }} />
        </motion.div>

        {/* 3D Metallic Glass Target Board & Arrow SVG */}
        <div className="relative z-10 flex items-center justify-center">
          <svg width="135" height="135" viewBox="0 0 140 140" fill="none" className="drop-shadow-[0_15px_30px_rgba(0,10,40,0.7)]">
            <defs>
              <radialGradient id="targetGrad1" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </radialGradient>
              <radialGradient id="targetGrad2" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#BAE6FD" />
                <stop offset="60%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#0F172A" />
              </radialGradient>
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>

            {/* Target Outer Base */}
            <circle cx="70" cy="70" r="62" fill="url(#targetGrad1)" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
            <circle cx="70" cy="70" r="48" fill="#0A132C" stroke="rgba(147,197,253,0.5)" strokeWidth="3" />
            <circle cx="70" cy="70" r="36" fill="url(#targetGrad2)" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
            <circle cx="70" cy="70" r="22" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.5" />
            <circle cx="70" cy="70" r="10" fill="#38BDF8" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }} />

            {/* 3D Arrow Pinned into Bullseye */}
            <g transform="rotate(-38 70 70)">
              {/* Shaft */}
              <line x1="70" y1="70" x2="135" y2="5" stroke="url(#arrowGrad)" strokeWidth="4.5" strokeLinecap="round" />
              {/* Arrowhead */}
              <polygon points="62,70 70,70 70,62" fill="#FFFFFF" />
              {/* Arrow Fletching */}
              <path d="M125 15 L135 5 L135 18 Z" fill="#38BDF8" />
              <path d="M120 20 L135 5 L122 5 Z" fill="#60A5FA" />
            </g>
          </svg>
        </div>
      </motion.div>

      {/* ── 3D Glass Bar Chart Standing Upright on Pedestal Platform ── */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative flex flex-col items-center cursor-pointer"
        style={{ width: 165 }}
      >
        {/* Hover Tooltip display for active bar */}
        <div className="h-6 flex items-center justify-center mb-1">
          {hoverBarIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-full px-2 py-0.5 text-center"
              style={{
                background: "rgba(56, 189, 248, 0.95)",
                border: "1px solid rgba(255, 255, 255, 0.7)",
                boxShadow: "0 4px 14px rgba(37, 99, 235, 0.7)",
              }}
            >
              <span style={{ fontSize: 9.5, fontWeight: 900, color: "#0F172A" }}>
                {bars[hoverBarIndex].label}: {bars[hoverBarIndex].val}
              </span>
            </motion.div>
          )}
        </div>

        {/* 4 Standing 3D Glass Bars on Pedestal */}
        <div className="relative flex items-end justify-center gap-2.5 px-3 pb-2 pt-3" style={{ height: 115 }}>
          {bars.map((bar, idx) => {
            const isHovered = hoverBarIndex === idx
            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoverBarIndex(idx)}
                onMouseLeave={() => setHoverBarIndex(null)}
                animate={{
                  y: isHovered ? -8 : 0,
                  scale: isHovered ? 1.08 : 1,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="relative rounded-t-lg transition-all duration-200"
                style={{
                  width: 24,
                  height: bar.height,
                  background: isHovered
                    ? "linear-gradient(180deg, #F0F9FF 0%, #38BDF8 40%, #1D4ED8 100%)"
                    : "linear-gradient(180deg, #BAE6FD 0%, #38BDF8 45%, #1E40AF 100%)",
                  boxShadow: isHovered
                    ? "0 0 25px rgba(56, 189, 248, 0.95), inset 0 1.5px 2px rgba(255, 255, 255, 0.9)"
                    : "0 0 12px rgba(56, 189, 248, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.75)",
                  borderTop: "1.5px solid rgba(255, 255, 255, 0.95)",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
                  borderRight: "1px solid rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* 3D Glossy top cap highlight */}
                <div
                  className="absolute -top-1 inset-x-0 h-2.5 rounded-t-lg pointer-events-none"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 0 8px #ffffff",
                  }}
                />
                {/* Specular inner shine streak */}
                <div
                  className="absolute top-1 left-1 bottom-1 w-1 rounded-full pointer-events-none opacity-70"
                  style={{ background: "linear-gradient(180deg, #ffffff 0%, transparent 80%)" }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* 3D Transparent Glass Pedestal Base Platform */}
        <div
          className="relative w-full rounded-xl pointer-events-none"
          style={{
            height: 0,
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(56, 189, 248, 0.25) 60%, rgba(10, 20, 50, 0.85) 100%)",
            border: "1.5px solid rgba(147, 197, 253, 0.6)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 12px 30px rgba(0, 8, 30, 0.85), inset 0 1.5px 2px rgba(255, 255, 255, 0.85), 0 0 20px rgba(56, 189, 248, 0.5)",
            transform: "perspective(350px) rotateX(18deg)",
          }}
        >
          {/* Specular edge shine line */}
          <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-xl" style={{ background: "rgba(255, 255, 255, 0.95)" }} />
        </div>
      </motion.div>
    </div>
  )
}

function HeroSection({ onSignup }: { onSignup: () => void }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #070e22 0%, #0a1128 40%, #0c1432 70%, #060b1c 100%)",
        minHeight: "100vh",
        paddingTop: 100,
        paddingBottom: 80,
      }}
    >
      {/* Right side Dotted Grid pattern matching Reference Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(59, 130, 246, 0.22) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px"
      }} />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute pointer-events-none" style={{ top: "5%", left: "-5%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 65%)", filter: "blur(75px)" }} />
      <div className="absolute pointer-events-none" style={{ top: "0%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 65%)", filter: "blur(75px)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-[520px]"
          >
            {/* Green pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5" style={{
              background: "rgba(34,197,94,0.12)", border: "1px solid rgba(74,222,128,0.35)"
            }}>
              <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                ⬡ TRACKING PLATFORM
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(34px, 5vw, 50px)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "white",
              marginBottom: 20,
              letterSpacing: "-0.02em"
            }}>
              Your one-stop solution for{" "}
              <span style={{ color: "#38bdf8" }}>conversion tracking</span>{" "}
              and reporting.
            </h1>

            {/* Subtitle */}
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
              Your time and money are better spent on marketing initiatives than on costly tracking software. Our easy-to-use and entirely free tracking platform ensures your focus remains on growing your brand.
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={onSignup}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 rounded-full font-semibold cursor-pointer"
              style={{
                background: "white",
                color: "#081F5C",
                padding: "13px 28px",
                fontSize: 14,
                border: "none",
                boxShadow: "0 8px 28px rgba(59,130,246,0.28)",
                transition: "box-shadow 300ms ease",
              }}
            >
              Start Advertising with Candid Leaders
              <svg className="group-hover:translate-x-1 transition-transform duration-300" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#081F5C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </motion.div>

          {/* ── Right: Pure React Apple Glass Dashboard + 3D Target + 3D Pedestal ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.94, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex items-center gap-6 justify-center lg:justify-end w-full"
          >
            <AppleGlassDashboard />
            <GlassTargetAndPedestal />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 2: Candid Leaders Tag (Light Background) ───────────────────────

function TagSection() {
  return (
    <section style={{ background: "#F8FAFF", padding: "88px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Widget Card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-[420px] w-full"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-6 relative"
              style={{
                background: "white",
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 50px rgba(37,99,235,0.1), 0 2px 12px rgba(37,99,235,0.06)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5 pb-4" style={{ borderBottom: "1px solid #F1F5F9" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)", border: "1px solid #BFDBFE" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round">
                      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A" }}>Candid Leaders Tag</div>
                    <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700 }}>v3.2.1 • Active</div>
                  </div>
                </div>
              </div>

              {/* Steps */}
              {[
                { n: "01", text: "Paste tag in <head>" },
                { n: "02", text: "Configure conversion event" },
                { n: "03", text: "Verify firing in dashboard" },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3 rounded-2xl p-3 mb-2.5 group"
                  style={{ background: "#F8FAFF", border: "1px solid #E2EBF8" }}
                >
                  <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold text-blue-600" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                    {step.n}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#334155", flex: 1 }}>{step.text}</span>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#dcfce7", border: "1px solid #86efac" }}>
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3 3 7-7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              ))}

              {/* Events today footer */}
              <div className="rounded-xl px-4 py-3 mt-4 flex items-center justify-between" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#3b82f6" }}>Events today</span>
                <span style={{ fontSize: 15, fontWeight: 900, color: "#1d4ed8" }}>24,812</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-[520px]"
          >
            {/* Tag badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#16a34a" }}>CANDID LEADERS TAG</span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, lineHeight: 1.15, color: "#0F172A", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Simple and free{" "}
              <span style={{ color: "#2563eb" }}>conversion tracking.</span>
            </h2>

            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, marginBottom: 14 }}>
              First-time setting up conversion tracking? No problem. The Candid Leaders Tag is an effortless solution for integrating with our tracking platform. Simply place the tag on your website — done! You can tag a manager of your choice.
            </p>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, marginBottom: 32 }}>
              Once the tag is placed, you will be able to easily report conversions by copy-pasting your postback URL whenever the desired action occurs.
            </p>

            {/* 3 stats row */}
            <div className="flex flex-wrap items-center gap-8">
              {[
                {
                  icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                  val: "2min", sub: "Setup time"
                },
                {
                  icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><path d="M12 2l1.7 5.3H19l-4.4 3.2 1.7 5.3-4.3-3.2-4.3 3.2 1.7-5.3L5 7.3h5.3L12 2z" /></svg>,
                  val: "Free", sub: "Forever"
                },
                {
                  icon: <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  val: "99.9%", sub: "Uptime"
                },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#0F172A" }}>{stat.val}</div>
                    <div style={{ fontSize: 11, color: "#64748B" }}>{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 3: Advertiser Dashboard (Light bg, dark table) ─────────────────

const tableRows = [
  { name: "FinanceApp Pro", clicks: "45,291", conv: "3,012", rev: "$183,216", ctr: "7.6%" },
  { name: "VPN Shield Elite", clicks: "31,044", conv: "2,250", rev: "$105,100", ctr: "7.4%" },
  { name: "FitTrack Plus", clicks: "22,310", conv: "1,644", rev: "$46,032", ctr: "7.4%" },
  { name: "TaxiHelper 2026", clicks: "18,320", conv: "1,108", rev: "$68,696", ctr: "6.0%" },
]

function DashboardSection() {
  return (
    <section style={{ background: "white", padding: "88px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-[380px]"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#16a34a" }}>ADVERTISER DASHBOARD</span>
            </div>

            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 900, lineHeight: 1.18, color: "#0F172A", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Robust reporting{" "}
              <span style={{ color: "#2563eb" }}>to optimize success.</span>
            </h2>

            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, marginBottom: 28 }}>
              Our advertiser dashboard provides granular in-depth reporting so you can examine the data behind every conversion. Measure and monitor each aspect of your campaign performance including clicks, leads, sales, and cost-per-conversion so your campaigns are presented to affiliates and consumers.
            </p>

            {[
              "Detailed reporting interface — real-time granular breakdowns",
              "Accurate conversion tracking via first-party data",
              "Easy integration — works with all major tag managers",
              "Continual customer support from dedicated account managers",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-start gap-3 mb-4 group"
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-300" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3 3 7-7" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300" />
                  </svg>
                </div>
                <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.6, fontWeight: 500 }}>{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Right: Campaign Table Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-[640px]"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative"
              style={{
                background: "rgba(10,16,44,0.95)",
                border: "1px solid rgba(96,165,250,0.2)",
                boxShadow: "0 25px 65px rgba(2,8,23,0.45)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-4 sm:px-7 py-4 sm:py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-sm sm:text-base font-extrabold text-white tracking-tight">Campaign Performance</span>
                <div className="rounded-full px-2.5 sm:px-3.5 py-1 sm:py-1.5 cursor-pointer transition-colors hover:bg-blue-600/30" style={{ background: "rgba(37,99,235,0.25)", border: "1px solid rgba(96,165,250,0.3)" }}>
                  <span className="text-[10.5px] sm:text-[11.5px] text-blue-300 font-semibold">Jan 2026 ▾</span>
                </div>
              </div>

              {/* Summary stat row - Responsive Grid for mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 px-4 sm:px-7 py-4 sm:py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  { label: "Total Clicks", val: "120,465" },
                  { label: "Conversions", val: "8,854" },
                  { label: "Revenue", val: "$378,094" },
                  { label: "CTR", val: "7.41%" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(37,99,235,0.2)" }}
                    className="rounded-2xl p-2.5 sm:p-3.5 text-center transition-all duration-200 overflow-hidden flex flex-col justify-center"
                    style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(96,165,250,0.18)" }}
                  >
                    <div className="text-[10px] sm:text-[11px] text-white/60 mb-1 font-semibold whitespace-nowrap">{s.label}</div>
                    <div className="text-xs sm:text-base font-extrabold text-white tracking-tight truncate">
                      <Counter
                        to={parseFloat(s.val.replace(/[^0-9.]/g, ""))}
                        prefix={s.val.startsWith("$") ? "$" : ""}
                        suffix={s.val.endsWith("%") ? "%" : ""}
                        decimals={s.val.includes(".") ? 2 : 0}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-b-3xl">
                <table className="w-full text-xs min-w-[440px]">
                  <thead>
                    <tr style={{ background: "rgba(37,99,235,0.12)" }}>
                      {["Campaign", "Clicks", "Conversions", "Revenue", "CTR"].map((h) => (
                        <th key={h} className="text-left px-4 sm:px-7 py-3 sm:py-4 font-bold text-white/60 text-[10.5px] sm:text-[11.5px] tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <motion.tr
                        key={row.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="hover:bg-blue-600/15 transition-colors duration-200"
                        style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.035)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                      >
                        <td className="px-4 sm:px-7 py-3 sm:py-4 font-bold text-white text-xs sm:text-sm whitespace-nowrap">{row.name}</td>
                        <td className="px-4 sm:px-7 py-3 sm:py-4 text-slate-300 font-medium text-xs sm:text-sm">{row.clicks}</td>
                        <td className="px-4 sm:px-7 py-3 sm:py-4 text-slate-300 font-medium text-xs sm:text-sm">{row.conv}</td>
                        <td className="px-4 sm:px-7 py-3 sm:py-4 font-extrabold text-blue-400 text-xs sm:text-sm">{row.rev}</td>
                        <td className="px-4 sm:px-7 py-3 sm:py-4 text-slate-300 font-medium text-xs sm:text-sm">{row.ctr}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Platform Capabilities (light) ───────────────────────────────

const caps = [
  {
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><path strokeLinecap="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Detailed Reporting Interface",
    desc: "View conversions in real-time to measure your campaign performance and marketing ROI across every dimension.",
  },
  {
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    title: "Accurate Conversion Tracking",
    desc: "The Candid Leaders Tag uses first-party data to track conversions — much more reliable than pixel-based tracking.",
  },
  {
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><path strokeLinecap="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>,
    title: "Easy Integration",
    desc: "Add the Candid Leaders Tag to your site and start reporting conversions. Already have tracking in place? We integrate with all popular trackers.",
  },
  {
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><path strokeLinecap="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    title: "Continual Customer Support",
    desc: "Dedicated account managers are there to help at every step — from setting up tracking to answering any questions about the platform.",
  },
]

function CapabilitiesSection() {
  return (
    <section style={{ background: "#F8FAFF", padding: "88px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#16a34a" }}>PLATFORM CAPABILITIES</span>
          </div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>
            Built for advertisers who mean business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caps.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(37,99,235,0.18)" }}
              className="group rounded-3xl p-6 flex flex-col gap-4 transition-all duration-300 relative overflow-hidden cursor-default"
              style={{
                background: "white",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(37,99,235,0.08)",
              }}
            >
              {/* Top shine on hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                {cap.icon}
              </div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A" }}>{cap.title}</div>
              <p style={{ fontSize: 12.5, color: "#64748B", lineHeight: 1.65 }}>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Track Every Conversion (dark) ───────────────────────────────

const leftFeatures = [
  {
    icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" strokeWidth="2"><path strokeLinecap="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: "Real-time Analytics",
    desc: "Monitor clicks, conversions and revenue as they happen with live dashboards and instant insights.",
  },
  {
    icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" strokeWidth="2"><path strokeLinecap="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    title: "Easy Integration",
    desc: "Seamlessly integrate with your favorite tools and tag managers in just a few clicks.",
  },
]

const rightFeatures = [
  {
    icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" strokeWidth="2"><path strokeLinecap="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "First-party Tracking",
    desc: "Reliable and accurate tracking using first-party data for better attribution and higher accuracy.",
  },
  {
    icon: <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#60a5fa" strokeWidth="2"><path strokeLinecap="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    title: "Smart Alerts",
    desc: "Stay updated with real-time alerts for conversion, performance drops and campaign milestones.",
  },
]

function FeatureCard({ title, desc, icon, delay = 0, direction = "left" }: {
  title: string; desc: string; icon: React.ReactNode; delay?: number; direction?: "left" | "right"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, borderColor: "rgba(96,165,250,0.45)" }}
      className="group rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 relative overflow-hidden"
      style={{
        background: "rgba(15,26,60,0.85)",
        border: "1px solid rgba(96,165,250,0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 12px 32px rgba(2,8,23,0.35)",
      }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300" style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(96,165,250,0.3)" }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 800, color: "white", marginBottom: 6 }}>{title}</div>
        <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>{desc}</p>
      </div>
    </motion.div>
  )
}

function CenterOrb() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 240, height: 240 }}>
      {/* Outer dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-dashed"
        style={{ inset: 0, borderColor: "rgba(96,165,250,0.22)" }}
      />
      {/* Inner dashed ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-dashed"
        style={{ inset: 28, borderColor: "rgba(96,165,250,0.16)" }}
      />

      {/* Orbit dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const r = 100
        return (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
            className="absolute w-7 h-7 rounded-xl flex items-center justify-center"
            style={{
              left: `calc(50% + ${Math.cos(rad) * r}px - 14px)`,
              top: `calc(50% + ${Math.sin(rad) * r}px - 14px)`,
              background: "rgba(37,99,235,0.3)",
              border: "1px solid rgba(96,165,250,0.55)",
              boxShadow: "0 0 12px rgba(96,165,250,0.35)",
            }}
          >
            <div className="w-2 h-2 rounded-full" style={{ background: "#60a5fa", boxShadow: "0 0 8px #60a5fa" }} />
          </motion.div>
        )
      })}

      {/* Center glowing card */}
      <div className="relative z-10 w-28 h-28 rounded-3xl flex flex-col items-center justify-center gap-2" style={{
        background: "linear-gradient(135deg, rgba(37,99,235,0.55) 0%, rgba(15,26,60,0.95) 100%)",
        border: "1px solid rgba(96,165,250,0.5)",
        boxShadow: "0 0 50px rgba(37,99,235,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}>
        {/* Mini bar chart in center orb */}
        <div className="flex items-end gap-1">
          {[35, 55, 48, 72, 60, 90].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${h * 0.35}px`, `${h * 0.7}px`, `${h * 0.35}px`] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
              className="w-2 rounded-t-sm"
              style={{ background: "linear-gradient(180deg, #93c5fd 0%, #2563eb 100%)", boxShadow: "0 0 6px rgba(96,165,250,0.6)" }}
            />
          ))}
        </div>
        <div style={{ fontSize: 8.5, fontWeight: 800, color: "#93c5fd", letterSpacing: "0.1em" }}>LIVE CONVERSIONS</div>
      </div>
    </div>
  )
}

function TrackSection() {
  return (
    <section style={{
      background: "linear-gradient(180deg, #070b1f 0%, #0c1536 50%, #07101f 100%)",
      padding: "96px 0"
    }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4ade80" }}>EVERYTHING YOU NEED TO</span>
          </div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 900, color: "white", letterSpacing: "-0.02em", marginBottom: 12 }}>
            Track Every <span style={{ color: "#3b82f6" }}>Conversion.</span>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
            Powerful features to help you measure, optimize and scale with confidence.
          </p>
        </motion.div>

        {/* 3 Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left cards */}
          <div className="flex-1 flex flex-col gap-5">
            {leftFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.12} direction="left" />
            ))}
          </div>

          {/* Center Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <CenterOrb />
          </motion.div>

          {/* Right cards */}
          <div className="flex-1 flex flex-col gap-5">
            {rightFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.12} direction="right" />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// ─── 3D Potted Plant Icon (Matching Reference Images 1 & 2) ───────────────────

function ThreeDPottedPlant({ size = 46 }: { size?: number }) {
  return (
    <div className="relative inline-flex items-center justify-center pointer-events-none" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className="drop-shadow-[0_8px_18px_rgba(37,99,235,0.3)]">
        <defs>
          <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="leafGradCenter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="leafGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="60%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="leafGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="60%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <radialGradient id="soilGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </radialGradient>
        </defs>

        {/* 3D Leaves */}
        {/* Left Outer Leaf */}
        <path d="M 40 48 C 18 40, 10 24, 18 14 C 28 20, 36 34, 40 48 Z" fill="url(#leafGradLeft)" />
        {/* Left Inner Leaf */}
        <path d="M 40 48 C 26 36, 22 18, 30 8 C 38 16, 40 32, 40 48 Z" fill="url(#leafGradLeft)" />
        {/* Center Tall Leaf */}
        <path d="M 40 48 C 34 26, 36 6, 40 2 C 44 6, 46 26, 40 48 Z" fill="url(#leafGradCenter)" />
        {/* Right Inner Leaf */}
        <path d="M 40 48 C 54 36, 58 18, 50 8 C 42 16, 40 32, 40 48 Z" fill="url(#leafGradRight)" />
        {/* Right Outer Leaf */}
        <path d="M 40 48 C 62 40, 70 24, 62 14 C 52 20, 44 34, 40 48 Z" fill="url(#leafGradRight)" />

        {/* Soil Rim */}
        <ellipse cx="40" cy="48" rx="20" ry="6" fill="url(#soilGrad)" />

        {/* 3D Ceramic Pot */}
        <path d="M 20 48 C 20 46, 60 46, 60 48 L 54 74 C 52 78, 28 78, 26 74 Z" fill="url(#potGrad)" />
        <ellipse cx="40" cy="48" rx="20" ry="3" fill="#E2E8F0" opacity="0.6" />
      </svg>
    </div>
  )
}

// ─── 3D Floating Donut Chart Icon ───────────────────────────────────────────

function ThreeDPieChartIcon({ size = 52 }: { size?: number }) {
  return (
    <div className="relative inline-flex items-center justify-center pointer-events-none" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className="drop-shadow-[0_10px_20px_rgba(37,99,235,0.3)]">
        <defs>
          <linearGradient id="pieBlue3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="pieWhite3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>
        {/* Outer White Base Donut Ring */}
        <circle cx="40" cy="40" r="32" fill="url(#pieWhite3D)" stroke="#CBD5E1" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="18" fill="#F8FAFF" />

        {/* 3D Blue Active Donut Segment */}
        <path
          d="M 40 8 A 32 32 0 1 1 12 48 L 26 44 A 18 18 0 1 0 40 22 Z"
          fill="url(#pieBlue3D)"
          style={{ filter: "drop-shadow(0 4px 8px rgba(37,99,235,0.4))" }}
        />
      </svg>
    </div>
  )
}

// ─── Section 6: CTA / Get Started (Light) ───────────────────────────────────

function CTASection({ onSignup }: { onSignup: () => void }) {
  return (
    <section style={{ background: "#F8FAFF", padding: "88px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-[560px]"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#16a34a" }}>GET STARTED</span>
            </div>

            <h2 style={{ fontSize: "clamp(22px, 4vw, 44px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.15, marginBottom: 16, letterSpacing: "-0.02em" }}>
              Start tracking every conversion{" "}
              <span style={{ color: "#2563eb" }}>that matters to your brand.</span>
            </h2>

            <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6, marginBottom: 24 }}>
              {"We've been shaping this industry since 2004 and we know what makes performance marketing strategies successful."}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {/* Primary button */}
              <motion.button
                onClick={onSignup}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-xl font-bold cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
                  color: "white",
                  padding: "9px 18px",
                  fontSize: 13,
                  border: "none",
                  boxShadow: "0 6px 18px rgba(37,99,235,0.3)",
                }}
              >
                Advertise with Candid Leaders
                <svg className="group-hover:translate-x-1 transition-transform duration-300" width="14" height="14" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>

              {/* Secondary button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2, borderColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl font-semibold cursor-pointer transition-all duration-300"
                style={{
                  background: "white",
                  color: "#0F172A",
                  padding: "9px 18px",
                  fontSize: 13,
                  border: "1.5px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(37,99,235,0.06)",
                }}
              >
                View Documentation
              </motion.button>
            </div>
          </motion.div>

          {/* ── Right: 3D Illustration Graphic Asset (Equal Size to Left Content) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex items-center justify-center lg:justify-end max-w-[560px] w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative group cursor-pointer w-full flex justify-center lg:justify-end"
            >
              {/* Ambient Glow */}
              <div
                className="absolute -inset-6 rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.35) 0%, rgba(37, 99, 235, 0.18) 50%, transparent 75%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Seamless High-Res 3D Illustration scaled equal to left content */}
              <div className="relative transition-transform duration-500 group-hover:scale-[1.03] w-full flex justify-center lg:justify-end">
                <img
                  src={getStarted3dHd}
                  alt="High Resolution 3D Dashboard Illustration with Potted Plant and Donut Chart Badge"
                  className="w-full max-w-[540px] lg:max-w-[580px] h-auto object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(37,99,235,0.2)]"
                  style={{
                    mixBlendMode: "multiply",
                    filter: "brightness(1.03) contrast(1.05)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Page Assembly ───────────────────────────────────────────────────────────

export default function TrackingPlatform() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <Navbar
        onNavigateSignup={() => navigate("/signup")}
        onNavigateLanding={() => navigate("/")}
      />
      <HeroSection onSignup={() => navigate("/signup")} />
      <TagSection />
      <DashboardSection />
      <CapabilitiesSection />
      <TrackSection />
      <CTASection onSignup={() => navigate("/signup")} />
      <Footer />
    </div>
  )
}
