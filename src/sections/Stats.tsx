import React, { useState, useEffect, useRef } from "react"

const S_FONT = "'Inter', sans-serif"
const E = "cubic-bezier(0.22,1,0.36,1)"

type StatCard = { icon: React.ReactNode; value: string; title: string; desc: string }

function StatsIconUsers() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="13" cy="11" r="5.5" fill="white"/>
      <circle cx="24" cy="13" r="4" fill="white" opacity="0.7"/>
      <path d="M2 30c0-6.075 4.925-11 11-11s11 4.925 11 11" fill="white"/>
      <path d="M24 19c4.418 0 8 3.582 8 8" stroke="white" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  )
}
function StatsIconMegaphone() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M6 13h4l12-8v24L10 21H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" fill="white"/>
      <path d="M10 21v8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="27" cy="10" r="2" fill="white" opacity="0.7"/>
      <circle cx="30" cy="17" r="1.5" fill="white" opacity="0.55"/>
      <circle cx="29" cy="24" r="1.2" fill="white" opacity="0.4"/>
    </svg>
  )
}
function StatsIconTarget() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke="white" strokeWidth="2.2" fill="none"/>
      <circle cx="18" cy="18" r="9" stroke="white" strokeWidth="2.2" fill="none"/>
      <circle cx="18" cy="18" r="4" fill="white"/>
      <path d="M26 10l2-2M28 8l-2 6-4-4z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M28 8l-2 6-4-4 6-2z" fill="white" opacity="0.8"/>
    </svg>
  )
}
function StatsIconAnalytics() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4"  y="20" width="6" height="12" rx="2" fill="white"/>
      <rect x="13" y="14" width="6" height="18" rx="2" fill="white"/>
      <rect x="22" y="8"  width="6" height="24" rx="2" fill="white"/>
      <path d="M6 18l8-8 8 5 10-10" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M26 5l6 3-3 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

const statsData: StatCard[] = [
  { icon: <StatsIconUsers/>,     value: "30,000+", title: "Verified Partners",   desc: "Trusted publishers in our network." },
  { icon: <StatsIconMegaphone/>, value: "3,000+",  title: "Active Campaigns",   desc: "Running across all verticals driving real-time results." },
  { icon: <StatsIconTarget/>,    value: "120+",    title: "Countries Reached",  desc: "Our global reach that drives global coverage." },
  { icon: <StatsIconAnalytics/>, value: "99.9%",   title: "Tracking Accuracy",  desc: "Because precision is our promise." },
]

function parseStatValue(v: string) {
  const isPercent = v.includes("%")
  const hasPlus   = v.includes("+")
  const isDecimal = v.includes(".")
  const num       = parseFloat(v.replace(/[^0-9.]/g, ""))
  return { num, isPercent, hasPlus, isDecimal }
}

function formatCount(n: number, isDecimal: boolean, hasPlus: boolean, isPercent: boolean) {
  const base = isDecimal
    ? n.toFixed(1)
    : n >= 1000 ? Math.round(n).toLocaleString() : Math.round(n).toString()
  return `${base}${hasPlus ? "+" : ""}${isPercent ? "%" : ""}`
}

let _sectionSeen = false

function StatCardItem({ s, countTriggered }: { s: StatCard; countTriggered: boolean }) {
  const [hovered, setHovered] = useState(false)
  const [count, setCount]     = useState(0)
  const cardRef               = useRef<HTMLDivElement>(null)
  const animRef               = useRef<number | null>(null)
  const { num, isPercent, hasPlus, isDecimal } = parseStatValue(s.value)

  useEffect(() => {
    if (!countTriggered) return
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const start    = performance.now()
    const duration = 1200
    const tick     = (now: number) => {
      const t     = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(eased * num)
      if (t < 1) animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [countTriggered, num])

  const R = 24
  const T = `450ms ${E}`

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Spinning conic-gradient border — fades in on hover, spins continuously */}
      <div className={`stat-card-border${hovered ? " active" : ""}`} />

      {/* Card */}
      <div
        ref={cardRef}
        style={{
          background: "linear-gradient(160deg, rgba(7,26,69,1) 0%, rgba(8,20,60,0.97) 100%)",
          border: `1px solid ${hovered ? "rgba(80,140,255,0.3)" : "rgba(70,130,255,0.45)"}`,
          borderRadius: R, padding: 32,
          minHeight: 380,
          display: "flex", flexDirection: "column",
          position: "relative", overflow: "hidden",
          boxShadow: hovered
            ? "0 24px 64px rgba(10,30,100,0.65), 0 0 40px rgba(59,130,246,0.12), inset 0 1px 0 rgba(100,160,255,0.25)"
            : "0 8px 40px rgba(10,30,100,0.5), inset 0 1px 0 rgba(100,160,255,0.25)",
          backdropFilter: "blur(12px)",
          transform: "translateY(0)",
          transition: `transform ${T}, box-shadow ${T}, border-color ${T}`,
          cursor: "default",
        }}
      >
        {/* Top edge glow line */}
        <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 2, background: "linear-gradient(90deg, transparent, rgba(80,140,255,0.9), transparent)", borderRadius: 2 }} />

        {/* Subtle inner glow on hover */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 120,
          background: "linear-gradient(180deg, rgba(59,130,246,0.08) 0%, transparent 100%)",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transition: `opacity 400ms ${E}`,
        }} />

        {/* Icon with rotation on hover */}
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "radial-gradient(circle at 38% 38%, rgba(80,140,255,0.55) 0%, rgba(20,60,180,0.8) 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 24, flexShrink: 0,
          boxShadow: hovered
            ? "0 12px 28px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)"
            : "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          border: "1px solid rgba(100,160,255,0.15)",
          transform: hovered ? "rotate(10deg) scale(1.08)" : "rotate(0deg) scale(1)",
          transition: `transform 400ms ${E}, box-shadow 400ms ${E}`,
          willChange: "transform",
        }}>
          {s.icon}
        </div>

        {/* Number (no size jump on hover to prevent layout shifts) */}
        <div style={{
          fontFamily: S_FONT, fontWeight: 800,
          fontSize: "48px",
          lineHeight: 1, color: "#FFFFFF", marginBottom: 12, letterSpacing: "-0.02em",
        }}>
          {countTriggered ? formatCount(count, isDecimal, hasPlus, isPercent) : s.value}
        </div>

        {/* Blue underline */}
        <div style={{ width: 44, height: 5, background: "linear-gradient(90deg, #2563FF, #4D8AFF)", borderRadius: 3, marginBottom: 20, flexShrink: 0 }} />

        {/* Title / Label */}
        <div style={{ fontFamily: S_FONT, fontWeight: 600, fontSize: "15px", color: "#FFFFFF", marginBottom: 12, lineHeight: "130%" }}>
          {s.title}
        </div>

        {/* Description */}
        <p style={{ fontFamily: S_FONT, fontWeight: 400, fontSize: "14px", lineHeight: "170%", color: hovered ? "#D8E4FF" : "#C9D2E3", margin: 0, transition: `color 300ms ${E}` }}>
          {s.desc}
        </p>
      </div>
    </div>
  )
}

export default function Stats() {
  const [countTriggered, setCountTriggered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (_sectionSeen) { setCountTriggered(true); setVisible(true); return }
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !_sectionSeen) {
          _sectionSeen = true
          setCountTriggered(true)
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <section ref={sectionRef} className="relative overflow-hidden w-full section-py" style={{
      background: "radial-gradient(ellipse 120% 80% at 50% 40%, #0A2260 0%, #06122F 55%, #030D22 100%)",
      contentVisibility: "auto",
      containIntrinsicSize: "auto 500px"
    }}>
      {/* Centre glow */}
      <div style={{ position: "absolute", top: "0%", left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(ellipse, rgba(30,80,200,0.28) 0%, transparent 65%)", pointerEvents: "none" }} />

      {/* Dot grids */}
      <svg style={{ position: "absolute", top: 32, right: 48, opacity: 0.55, pointerEvents: "none" }} width="100" height="80" viewBox="0 0 100 80">
        {[0,1,2,3].flatMap(r => [0,1,2,3,4].map(c => (
          <circle key={`tr-${r}-${c}`} cx={c * 22 + 4} cy={r * 22 + 4} r={2} fill="#3B6FFF"/>
        )))}
      </svg>
      <svg style={{ position: "absolute", bottom: 56, left: 56, opacity: 0.45, pointerEvents: "none" }} width="80" height="64" viewBox="0 0 80 64">
        {[0,1,2].flatMap(r => [0,1,2,3].map(c => (
          <circle key={`bl-${r}-${c}`} cx={c * 22 + 4} cy={r * 22 + 4} r={2} fill="#3B6FFF"/>
        )))}
      </svg>

      {/* Floating sphere */}
      <div className="hidden sm:block sphere-float" style={{ position: "absolute", bottom: -10, left: 160, pointerEvents: "none" }}>
        <div style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", width: 96, height: 22, background: "rgba(10,40,180,0.55)", borderRadius: "50%", filter: "blur(10px)" }} />
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
          <defs>
            <radialGradient id="sphereGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%"   stopColor="#90C4FF"/>
              <stop offset="35%"  stopColor="#2162EC"/>
              <stop offset="70%"  stopColor="#0D3DB5"/>
              <stop offset="100%" stopColor="#051D68"/>
            </radialGradient>
            <radialGradient id="sphereReflect" cx="30%" cy="25%" r="50%">
              <stop offset="0%"   stopColor="white" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="44" cy="44" r="42" fill="url(#sphereGrad)"/>
          <circle cx="44" cy="44" r="42" fill="url(#sphereReflect)"/>
          <ellipse cx="34" cy="30" rx="14" ry="8" fill="white" opacity="0.18" transform="rotate(-20 34 30)"/>
        </svg>
      </div>

      {/* Second floating sphere (right side) */}
      <div className="hidden sm:block sphere-float-slower" style={{ position: "absolute", top: 80, right: 120, pointerEvents: "none" }}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <defs>
            <radialGradient id="sphereGrad2" cx="35%" cy="30%" r="65%">
              <stop offset="0%"   stopColor="#7BB2FF"/>
              <stop offset="40%"  stopColor="#2260DD"/>
              <stop offset="100%" stopColor="#0C2480"/>
            </radialGradient>
          </defs>
          <circle cx="28" cy="28" r="26" fill="url(#sphereGrad2)" opacity="0.8"/>
          <ellipse cx="22" cy="20" rx="8" ry="5" fill="white" opacity="0.22" transform="rotate(-20 22 20)"/>
        </svg>
      </div>

      <div className="relative section-container">
        {/* Header */}
        <div
          className="section-header-spacing"
          style={{
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 700ms ${E}, transform 700ms ${E}`,
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 32, height: 1.5, background: "rgba(80,140,255,0.7)", borderRadius: 1 }} />
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#3B6FFF", flexShrink: 0 }} />
            <span style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", color: "#FFFFFF", textTransform: "uppercase" }}>BY THE NUMBERS</span>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#3B6FFF", flexShrink: 0 }} />
            <div style={{ width: 32, height: 1.5, background: "rgba(80,140,255,0.7)", borderRadius: 1 }} />
          </div>
          <h2 style={{ fontFamily: S_FONT, fontWeight: 700, fontSize: "44px", lineHeight: "120%", color: "#FFFFFF", margin: "0 0 20px", letterSpacing: "-0.02em", maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
            Scale that speaks for itself
          </h2>
          <p style={{ fontFamily: S_FONT, fontWeight: 400, fontSize: "16px", lineHeight: "170%", color: "#C9D2E3", maxWidth: "620px", margin: "0 auto" }}>
            Real numbers. Real impact. See how we empower businesses and partners to achieve extraordinary results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {statsData.map(s => <StatCardItem key={s.title} s={s} countTriggered={countTriggered}/>)}
        </div>
      </div>
    </section>
  )
}
