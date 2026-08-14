import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"
import target3dImg from "@/imports/List Target.png"

const E = "cubic-bezier(0.22,1,0.36,1)"

export default function HeroSection({ onNavigateSignup }: { onNavigateSignup?: () => void }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [dashHover, setDashHover] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const isGraphInView = useInView(heroRef, { once: true })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ rx: dy * -5, ry: dx * 5 })
  }

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 })
  }

  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(6)

  // SVG Chart points
  const points = [
    { x: 0, y: 55, day: "01", val: "$5.2K", chg: "▲ 4.2%" },
    { x: 40, y: 32, day: "05", val: "$11.4K", chg: "▲ 8.6%" },
    { x: 80, y: 45, day: "10", val: "$8.1K", chg: "▲ 5.1%" },
    { x: 120, y: 20, day: "15", val: "$22.8K", chg: "▲ 15.4%" },
    { x: 160, y: 38, day: "20", val: "$16.5K", chg: "▲ 10.2%" },
    { x: 200, y: 12, day: "25", val: "$21.9K", chg: "▲ 11.8%" },
    { x: 240, y: 28, day: "30", val: "$25.4K", chg: "▲ 13.0%" },
  ]

  const pathD = `M 0 55 C 20 35, 20 32, 40 32 C 60 32, 60 45, 80 45 C 100 45, 100 20, 120 20 C 140 20, 140 38, 160 38 C 180 38, 180 12, 200 12 C 220 12, 220 28, 240 28`
  const areaD = `${pathD} L 240 75 L 0 75 Z`

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden section-py min-h-screen flex items-center"
      style={{
        background: "linear-gradient(165deg, #050c20 0%, #07112c 50%, #04091a 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── Layered Background Lighting & Grids ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)", filter: "blur(70px)" }} />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ── Left Content Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-xl text-left"
          >
            {/* Green Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 w-fit" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" style={{ boxShadow: "0 0 8px #34D399" }} />
              <span className="text-xs font-bold tracking-wider uppercase text-[#34D399]">TRACKING PLATFORM</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] mb-6 tracking-tight">
              Your one-stop solution for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                conversion tracking
              </span>{" "}
              and reporting.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-slate-300/90 font-normal">
              Your time and money are better spent on marketing initiatives than on costly tracking software. Our easy-to-use and entirely free tracking platform ensures your focus remains on growing your brand.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#"
                onClick={(e) => { e.preventDefault(); if (onNavigateSignup) onNavigateSignup() }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm text-[#081F5C] bg-white shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_16px_40px_rgba(59,130,246,0.4)] transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                <span className="relative z-10">Start Advertising with Candid Leaders</span>
                <svg
                  className="w-4 h-4 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right Dashboard & 3D Target Graphic ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-end w-full"
            style={{
              transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: tilt.rx === 0 ? "transform 600ms cubic-bezier(0.22,1,0.36,1)" : "none",
            }}
          >
            {/* Dark Glass Dashboard Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              onMouseEnter={() => setDashHover(true)}
              onMouseLeave={() => setDashHover(false)}
              className="w-full max-w-[420px] rounded-3xl p-5 border backdrop-blur-xl relative transition-all duration-300"
              style={{
                background: "rgba(10, 22, 50, 0.85)",
                borderColor: dashHover ? "rgba(96,165,250,0.5)" : "rgba(96,165,250,0.22)",
                boxShadow: dashHover
                  ? "0 24px 60px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.15)"
                  : "0 16px 48px rgba(2,8,23,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Window Controls Dot Header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* 3 Top Stat Boxes */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {[
                  { label: "Revenue", val: "$24.5K", chg: "▲ 12.5%" },
                  { label: "Clicks", val: "142K", chg: "▲ 6.7%" },
                  { label: "Conversions", val: "8.7%", chg: "▲ 15.3%" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -3, borderColor: "rgba(96,165,250,0.4)" }}
                    className="rounded-2xl p-2.5 transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                    }}
                  >
                    <div className="text-[11px] font-medium text-slate-400 mb-1">{stat.label}</div>
                    <div className="text-base font-bold text-white tracking-tight">
                      <AnimatedCounter value={stat.val} />
                    </div>
                    <div className="text-[10px] font-semibold text-[#4ADE80] mt-0.5">{stat.chg}</div>
                  </motion.div>
                ))}
              </div>

              {/* Main Line Graph Box */}
              <div
                className="rounded-2xl p-4 mb-4 relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.025)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-white tracking-wide">Earnings Performance</span>
                  <div className="inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 cursor-pointer hover:bg-blue-500/30 transition-colors">
                    This Month ▾
                  </div>
                </div>

                <div className="relative pt-2">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="border-b border-dashed border-slate-400 w-full" />
                    <div className="border-b border-dashed border-slate-400 w-full" />
                    <div className="border-b border-dashed border-slate-400 w-full" />
                  </div>

                  <svg width="100%" height="80" viewBox="0 0 240 75" preserveAspectRatio="none" className="overflow-visible">
                    <defs>
                      <linearGradient id="heroChartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <motion.path
                      d={areaD}
                      fill="url(#heroChartGradient)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isGraphInView ? 1 : 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />

                    {/* Line path */}
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isGraphInView ? 1 : 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* Point Nodes */}
                    {points.map((pt, i) => {
                      const isHov = hoveredPointIndex === i
                      return (
                        <g
                          key={i}
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredPointIndex(i)}
                          onMouseLeave={() => setHoveredPointIndex(null)}
                        >
                          {/* Invisible expanded hit area for smooth hover */}
                          <circle cx={pt.x} cy={pt.y} r="10" fill="transparent" />
                          {isHov && (
                            <circle cx={pt.x} cy={pt.y} r="8" fill="rgba(59, 130, 246, 0.4)" />
                          )}
                          <motion.circle
                            cx={pt.x}
                            cy={pt.y}
                            r={isHov ? "4.5" : "3.5"}
                            fill={isHov ? "#FFFFFF" : "#3B82F6"}
                            stroke={isHov ? "#3B82F6" : "#ffffff"}
                            strokeWidth={isHov ? "2.5" : "1.5"}
                            initial={{ scale: 0 }}
                            animate={{ scale: isGraphInView ? 1 : 0 }}
                            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                          />
                        </g>
                      )
                    })}
                  </svg>

                  {/* Floating Card Popup matching Image 1 */}
                  {hoveredPointIndex !== null && points[hoveredPointIndex] && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.92 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute z-30 pointer-events-none flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white text-slate-900 shadow-[0_14px_36px_rgba(0,0,0,0.45),0_0_24px_rgba(56,189,248,0.6)] border border-blue-100"
                      style={{
                        left: `${(points[hoveredPointIndex].x / 240) * 100}%`,
                        top: `${(points[hoveredPointIndex].y / 75) * 100}%`,
                        transform: hoveredPointIndex > 4 ? "translate(-88%, -115%)" : "translate(-15%, -115%)",
                      }}
                    >
                      <span className="text-sm font-extrabold tracking-tight text-slate-900">
                        {points[hoveredPointIndex].val}
                      </span>
                      <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">
                        {points[hoveredPointIndex].chg}
                      </span>
                    </motion.div>
                  )}

                  {/* X Axis Dates */}
                  <div className="flex justify-between mt-2 pt-1 text-[9px] text-slate-400 font-medium border-t border-white/5">
                    {points.map((p, i) => (
                      <span
                        key={p.day}
                        onMouseEnter={() => setHoveredPointIndex(i)}
                        onMouseLeave={() => setHoveredPointIndex(null)}
                        className={`cursor-pointer transition-colors duration-200 ${
                          hoveredPointIndex === i ? "text-blue-400 font-bold" : ""
                        }`}
                      >
                        {p.day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom 2 Stat Cards */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Conversion Rate Card */}
                <motion.div
                  whileHover={{ y: -3, borderColor: "rgba(96,165,250,0.4)" }}
                  className="rounded-2xl p-3 flex flex-col justify-between transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                  }}
                >
                  <div className="text-[11px] font-medium text-slate-400 mb-2">Conversion Rate</div>
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 flex items-center justify-center">
                      <svg width="36" height="36" className="transform -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                        <motion.circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="4"
                          strokeDasharray="88"
                          strokeDashoffset="25"
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: 88 }}
                          animate={{ strokeDashoffset: 25 }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-base font-bold text-white tracking-tight">12.5%</div>
                      <div className="text-[10px] font-semibold text-[#4ADE80]">▲ 24.4%</div>
                    </div>
                  </div>
                </motion.div>

                {/* Active Campaigns Card */}
                <motion.div
                  whileHover={{ y: -3, borderColor: "rgba(96,165,250,0.4)" }}
                  className="rounded-2xl p-3 flex flex-col justify-between transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                  }}
                >
                  <div className="text-[11px] font-medium text-slate-400 mb-1">Active Campaigns</div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white tracking-tight">24</div>
                      <div className="text-[10px] font-semibold text-[#4ADE80] mt-0.5">▲ 2 this week</div>
                    </div>
                    {/* Glowing Bar Graphic */}
                    <div className="flex items-end gap-1 h-7 pb-1">
                      <div className="w-1.5 h-3 rounded-full bg-blue-500/40" />
                      <div className="w-1.5 h-5 rounded-full bg-blue-500/70" />
                      <div className="w-1.5 h-7 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 3D Target Illustration & Glowing Bar Columns */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hidden lg:flex flex-col items-center gap-6 relative"
            >
              {/* Glowing Halo backdrop */}
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-125 pointer-events-none" />
              
              {/* 3D Target Image */}
              <div className="relative z-10 filter drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform duration-300">
                <img
                  src={target3dImg}
                  alt="3D Target Illustration"
                  className="w-32 h-32 md:w-36 md:h-36 object-contain"
                />
              </div>

              {/* Glowing 3D Glass Bar Columns */}
              <div className="flex items-end gap-2 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
                {[35, 55, 45, 80, 65, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                    className="w-3 rounded-t-sm relative group overflow-hidden"
                    style={{
                      height: `${height * 0.6}px`,
                      background: "linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)",
                      boxShadow: "0 0 10px rgba(96, 165, 250, 0.4)",
                    }}
                  >
                    <div className="absolute top-0 inset-x-0 h-1 bg-white/60" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
