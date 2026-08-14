import React, { useState, useRef, useEffect } from "react"

const F_FONT = "'Inter', sans-serif"
const E = "cubic-bezier(0.22,1,0.36,1)"

function PillarIconTracking() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id="pt1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6B8FFF"/><stop offset="1" stopColor="#1A3FD8"/></linearGradient>
        <linearGradient id="pt2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#90AAFF" stopOpacity="0.7"/><stop offset="1" stopColor="#2149E8" stopOpacity="0.3"/></linearGradient>
      </defs>
      <path d="M10 20 L10 10 L20 10" stroke="url(#pt1)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M32 10 L42 10 L42 20" stroke="url(#pt1)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M42 32 L42 42 L32 42" stroke="url(#pt1)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M20 42 L10 42 L10 32" stroke="url(#pt1)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="26" cy="26" r="8" stroke="url(#pt1)" strokeWidth="2.5" fill="url(#pt2)"/>
      <circle cx="26" cy="26" r="3.5" fill="url(#pt1)"/>
      <circle cx="24" cy="24" r="1.2" fill="white" opacity="0.7"/>
    </svg>
  )
}

function PillarIconGlobe() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5578FF"/><stop offset="1" stopColor="#1230C8"/></linearGradient>
        <linearGradient id="pg2" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#90AAFF" stopOpacity="0.25"/><stop offset="1" stopColor="#2149E8" stopOpacity="0.05"/></linearGradient>
      </defs>
      <circle cx="26" cy="26" r="18" stroke="url(#pg1)" strokeWidth="2.2" fill="url(#pg2)"/>
      <ellipse cx="26" cy="26" rx="8.5" ry="18" stroke="url(#pg1)" strokeWidth="1.8" fill="none"/>
      <ellipse cx="26" cy="26" rx="18" ry="7" stroke="url(#pg1)" strokeWidth="1.8" fill="none"/>
      <line x1="8" y1="26" x2="44" y2="26" stroke="url(#pg1)" strokeWidth="1.5" opacity="0.5"/>
      <line x1="26" y1="8" x2="26" y2="44" stroke="url(#pg1)" strokeWidth="1.5" opacity="0.5"/>
      <ellipse cx="20" cy="19" rx="5" ry="3.5" fill="white" opacity="0.22" transform="rotate(-20 20 19)"/>
    </svg>
  )
}

function PillarIconBarChart() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id="pbc1" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#7090FF"/><stop offset="1" stopColor="#1230C8"/></linearGradient>
        <linearGradient id="pbc2" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#5070F0"/><stop offset="1" stopColor="#0E26B0"/></linearGradient>
        <linearGradient id="pbc3" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#3A56E8"/><stop offset="1" stopColor="#0A1E98"/></linearGradient>
      </defs>
      <rect x="6"  y="30" width="11" height="16" rx="3" fill="url(#pbc1)"/>
      <rect x="6"  y="30" width="11" height="4"  rx="3" fill="white" opacity="0.3"/>
      <rect x="20" y="20" width="11" height="26" rx="3" fill="url(#pbc2)"/>
      <rect x="20" y="20" width="11" height="4"  rx="3" fill="white" opacity="0.3"/>
      <rect x="34" y="10" width="11" height="36" rx="3" fill="url(#pbc3)"/>
      <rect x="34" y="10" width="11" height="4"  rx="3" fill="white" opacity="0.3"/>
    </svg>
  )
}

function PillarIconExpert() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id="pe1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6B8FFF"/><stop offset="1" stopColor="#1A3FD8"/></linearGradient>
        <linearGradient id="pe2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#90AAFF"/><stop offset="1" stopColor="#2149E8"/></linearGradient>
      </defs>
      <circle cx="22" cy="15" r="8" fill="url(#pe1)"/>
      <circle cx="19" cy="13" r="2.5" fill="white" opacity="0.3"/>
      <path d="M6 44 C6 34 13 28 22 28 C31 28 38 34 38 44" fill="url(#pe1)"/>
      <circle cx="36" cy="30" r="9" fill="url(#pe2)" stroke="white" strokeWidth="1.5"/>
      <path d="M36 23.5l1.5 4.5H42l-3.8 2.8 1.5 4.5-3.7-2.7-3.7 2.7 1.5-4.5-3.8-2.8h4.5z" fill="white"/>
    </svg>
  )
}

function PillarIconShieldCheck() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id="ps1" x1="0" y1="0" x2="0.7" y2="1"><stop stopColor="#6B8FFF"/><stop offset="1" stopColor="#1230C8"/></linearGradient>
        <linearGradient id="ps2" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#90AAFF" stopOpacity="0.3"/><stop offset="1" stopColor="#2149E8" stopOpacity="0.1"/></linearGradient>
      </defs>
      <path d="M26 5L8 12V25C8 36.2 15.9 46.6 26 49C36.1 46.6 44 36.2 44 25V12L26 5Z" fill="url(#ps2)" stroke="url(#ps1)" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M26 9L12 15V25C12 34 18.9 42.6 26 45C33.1 42.6 40 34 40 25V15L26 9Z" fill="url(#ps1)" opacity="0.18"/>
      <ellipse cx="20" cy="17" rx="5" ry="3" fill="white" opacity="0.2" transform="rotate(-15 20 17)"/>
      <path d="M17 26l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

type PillarFeature = { n: string; icon: React.ReactNode; title: string; desc: string; learnMore?: boolean }

const features: PillarFeature[] = [
  { n: "01", icon: <PillarIconTracking/>, title: "Intelligent Tracking", desc: "Sub-second event capture with multi-touch attribution models. Never miss a conversion with our redundant, enterprise-grade infrastructure.", learnMore: true },
  { n: "02", icon: <PillarIconGlobe/>,    title: "Global Campaign Network", desc: "Access 50,000+ vetted publishers across 120+ countries. Launch global campaigns from a single unified dashboard." },
  { n: "03", icon: <PillarIconBarChart/>, title: "Real-Time Analytics", desc: "Live dashboards with granular breakdowns by partner, geo, device, and creative. React to data as it happens." },
  { n: "04", icon: <PillarIconExpert/>,   title: "Dedicated Experts", desc: "Your personal success team is available 24/7. Industry veterans who know your vertical and drive consistent results." },
  { n: "05", icon: <PillarIconShieldCheck/>, title: "Fraud Protection", desc: "AI-powered fraud detection blocks invalid traffic before it hits your budget — 99.2% accuracy, zero false positives." },
]

function FeatureCard({ f, delay = 0 }: { f: PillarFeature; delay?: number }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ rx: dy * -4, ry: dx * 4 })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="p-6 sm:p-8"
      style={{
        background: hovered
          ? "linear-gradient(135deg, #2B52F0 0%, #2149E8 48%, #1631B0 100%)"
          : "#fff",
        border: hovered ? "1px solid rgba(100,140,255,0.25)" : "1px solid #E8EDF6",
        borderRadius: 24,
        boxShadow: hovered
          ? "0 24px 56px rgba(33,73,232,0.38), 0 0 0 1px rgba(100,140,255,0.15)"
          : "0 2px 12px rgba(20,40,90,0.05)",
        display: "flex", flexDirection: "column",
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(-10px) scale(1.02)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)",
        transition: hovered
          ? `background 300ms ${E}, box-shadow 300ms ${E}, border-color 300ms ${E}, transform 120ms linear`
          : `background 300ms ${E}, box-shadow 300ms ${E}, border-color 300ms ${E}, transform 500ms ${E}`,
        cursor: "default",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial blue glow on hover */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 24,
        background: "radial-gradient(ellipse at 50% 0%, rgba(96,165,255,0.18) 0%, transparent 70%)",
        opacity: hovered ? 1 : 0,
        transition: `opacity 350ms ${E}`,
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, position: "relative" }}>
        <span style={{
          fontFamily: F_FONT, fontWeight: 800, fontSize: 22, lineHeight: 1, letterSpacing: "-0.01em",
          color: hovered ? "rgba(255,255,255,0.9)" : "#2149E8",
          transition: `color 300ms ${E}`,
        }}>{f.n}</span>
        <div style={{
          width: 36, height: 2, borderRadius: 1,
          background: hovered ? "rgba(255,255,255,0.3)" : "#C8D5F0",
          transition: `background 300ms ${E}`,
        }} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-4" style={{ position: "relative" }}>
        {/* Icon with rotate + scale + glow on hover */}
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          background: hovered
            ? "rgba(255,255,255,0.15)"
            : "radial-gradient(circle at 35% 35%, #EEF2FF 0%, #D8E3FF 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: hovered
            ? "0 0 0 1px rgba(255,255,255,0.2), 0 4px 20px rgba(0,0,0,0.12)"
            : "inset 0 2px 6px rgba(33,73,232,0.08)",
          transform: hovered ? "rotate(8deg) scale(1.1)" : "rotate(0deg) scale(1)",
          transition: `background 300ms ${E}, box-shadow 300ms ${E}, transform 350ms ${E}`,
          willChange: "transform",
        }}>
          {f.icon}
        </div>
        <div>
          <h3 style={{
            fontFamily: F_FONT, fontWeight: 600, fontSize: "22px", lineHeight: "130%", margin: "0 0 10px",
            color: hovered ? "#FFFFFF" : "#0B1238",
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
            transition: `color 300ms ${E}, transform 300ms ${E}`,
          }}>{f.title}</h3>
          <div style={{
            width: 32, height: 3, borderRadius: 2,
            background: hovered ? "rgba(255,255,255,0.5)" : "#2149E8",
            transition: `background 300ms ${E}`,
          }} />
        </div>
      </div>

      <p style={{
        fontFamily: F_FONT, fontWeight: 400, fontSize: "15px", lineHeight: "170%", margin: 0, flex: 1,
        color: hovered ? "rgba(255,255,255,0.85)" : "#6B7A9B",
        transition: `color 300ms ${E}`,
        position: "relative",
      }}>{f.desc}</p>

      {f.learnMore && (
        <a href="#" style={{
          marginTop: 24, display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: F_FONT, fontWeight: 600, fontSize: 15, textDecoration: "none",
          color: hovered ? "#FFFFFF" : "#2149E8",
          transition: `color 300ms ${E}`,
          position: "relative",
        }}>
          Learn more
          <svg
            width="16" height="16" fill="none" viewBox="0 0 16 16"
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: `transform 300ms ${E}`,
            }}
          >
            <path d="M3 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  )
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden w-full section-py" style={{ background: "#FFFFFF", contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}>
      {/* Decorative dots */}
      <svg className="absolute pointer-events-none" style={{ top: 40, left: 36, opacity: 0.65 }} width="108" height="108" viewBox="0 0 108 108">
        {[0,1,2,3].flatMap(r => [0,1,2,3].map(c => (
          <circle key={`fl-${r}-${c}`} cx={c * 28 + 4} cy={r * 28 + 4} r={2.5} fill="#C0CFEE"/>
        )))}
      </svg>
      <svg className="absolute pointer-events-none" style={{ top: 240, right: 20, opacity: 0.35 }} width="84" height="220" viewBox="0 0 84 220">
        {[0,1,2,3,4,5,6,7].flatMap(r => [0,1,2].map(c => (
          <circle key={`fr-${r}-${c}`} cx={c * 28 + 4} cy={r * 28 + 4} r={2} fill="#C8D5F0"/>
        )))}
      </svg>
      <div className="absolute pointer-events-none blob-breathe" style={{ top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(209,220,255,0.55) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none blob-breathe" style={{ bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(209,220,255,0.4) 0%, transparent 70%)", animationDelay: "5s" }} />
      <svg className="absolute pointer-events-none" style={{ bottom: 10, left: 0, opacity: 0.45 }} width="380" height="140" viewBox="0 0 380 140" fill="none">
        <path d="M-20 110 Q60 70 130 90 Q200 110 270 75 Q320 50 380 65" stroke="#D0DAEA" strokeWidth="1.5" fill="none"/>
        <path d="M-20 93  Q60 53 130 73 Q200 93 270 58 Q320 33 380 48" stroke="#D0DAEA" strokeWidth="1.5" fill="none"/>
        <path d="M-20 76  Q60 36 130 56 Q200 76 270 41 Q320 16 380 31" stroke="#D0DAEA" strokeWidth="1.2" fill="none"/>
      </svg>

      <div className="relative section-container">
        {/* Header */}
        <div
          className="section-header-spacing"
          style={{
            textAlign: "center", maxWidth: 900, margin: "0 auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: `opacity 700ms ${E}, transform 700ms ${E}`,
          }}
        >
          <p style={{ fontFamily: F_FONT, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", color: "#2149E8", textTransform: "uppercase", marginBottom: 14 }}>
            •&nbsp;&nbsp;WHY CHOOSE US&nbsp;&nbsp;•
          </p>
          <h2 style={{ fontFamily: F_FONT, fontWeight: 700, fontSize: "44px", lineHeight: "120%", color: "#0B1238", margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Five pillars that set us apart
          </h2>
          <p style={{ fontFamily: F_FONT, fontWeight: 400, fontSize: "16px", lineHeight: "170%", color: "#6B7A9B", maxWidth: "620px", margin: "0 auto" }}>
            Built for serious growth teams who demand transparency, speed, and results from their affiliate programs.
          </p>
        </div>

        {/* Top row — 3 cards */}
        <div
          className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          ref={el => { if (el && visible) el.classList.add("visible") }}
        >
          {features.slice(0, 3).map((f, i) => <FeatureCard key={f.n} f={f} delay={i * 80}/>)}
        </div>

        {/* Bottom row — 2 cards */}
        <div
          className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-[66.666%] lg:mx-auto"
          ref={el => { if (el && visible) el.classList.add("visible") }}
        >
          {features.slice(3).map((f, i) => <FeatureCard key={f.n} f={f} delay={(i + 3) * 80}/>)}
        </div>
      </div>
    </section>
  )
}
