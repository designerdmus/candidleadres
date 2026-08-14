import { useRef, useEffect, useState } from "react"
import targetIllustration from "@/imports/List Target.png"

const E = "cubic-bezier(0.22,1,0.36,1)"

const partners = [
  { abbr: "SH", name: "Shopify" },
  { abbr: "SF", name: "Salesforce" },
  { abbr: "HS", name: "HubSpot" },
  { abbr: "ST", name: "Stripe" },
  { abbr: "TW", name: "Twilio" },
  { abbr: "ZD", name: "Zendesk" },
  { abbr: "MC", name: "Mailchimp" },
  { abbr: "SG", name: "Segment" },
]

function PartnerBadge({ p }: { p: { abbr: string; name: string } }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#fff",
        borderRadius: 12,
        padding: "12px 14px",
        boxShadow: hovered
          ? "0 12px 32px rgba(33,73,232,0.18), 0 0 0 1.5px rgba(33,73,232,0.4)"
          : "0 4px 16px rgba(20,40,90,0.06)",
        border: hovered ? "1.5px solid rgba(33,73,232,0.35)" : "1.5px solid transparent",
        transform: hovered ? "translateY(-6px) scale(1.04)" : "translateY(0) scale(1)",
        transition: `transform 320ms ${E}, box-shadow 320ms ${E}, border-color 320ms ${E}`,
        cursor: "default",
        willChange: "transform",
      }}
    >
      <div
        style={{
          width: 28, height: 28, borderRadius: 7, flexShrink: 0,
          background: hovered
            ? "linear-gradient(135deg, #2149E8 0%, #3D5CFF 100%)"
            : "linear-gradient(135deg, #4B7BFF 0%, #2149E8 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: hovered ? "0 4px 12px rgba(33,73,232,0.45)" : "none",
          transition: `background 300ms ${E}, box-shadow 300ms ${E}`,
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 10, color: "#fff" }}>{p.abbr}</span>
      </div>
      <span style={{
        fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 12,
        color: hovered ? "#2149E8" : "#0B1739",
        whiteSpace: "nowrap",
        transition: `color 300ms ${E}`,
      }}>{p.name}</span>
    </div>
  )
}

export default function MarketingStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [targetHovered, setTargetHovered] = useState(false)
  const [chartHovered, setChartHovered] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full section-py"
      style={{
        background: "linear-gradient(135deg, #F7F9FC 0%, #EEF2FA 100%)",
        contentVisibility: "auto",
        containIntrinsicSize: "auto 500px"
      }}
    >
      {/* Decorative blobs */}
      <div className="blob-breathe absolute pointer-events-none" style={{ top: -80, right: -40, width: 340, height: 340, borderRadius: "50%", background: "rgba(220,230,250,0.60)" }} />
      <div className="blob-breathe absolute pointer-events-none" style={{ bottom: -60, left: -90, width: 260, height: 260, borderRadius: "50%", background: "rgba(220,230,250,0.60)", animationDelay: "4s" }} />

      {/* Dot grids */}
      <svg className="absolute pointer-events-none" style={{ top: 24, left: 32, opacity: 0.65 }} width="130" height="130" viewBox="0 0 130 130">
        {[0,1,2,3,4].flatMap(r => [0,1,2,3,4].map(c => (
          <circle key={`tl-${r}-${c}`} cx={c * 26 + 4} cy={r * 26 + 4} r={2} fill="#C7D2E8" />
        )))}
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: 56, right: 64, opacity: 0.7 }} width="130" height="130" viewBox="0 0 130 130">
        {[0,1,2,3,4].flatMap(r => [0,1,2,3,4].map(c => (
          <circle key={`br-${r}-${c}`} cx={c * 26 + 4} cy={r * 26 + 4} r={2} fill="#C7D2E8" />
        )))}
      </svg>

      <div
        className="relative section-container"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: `opacity 700ms ${E}, transform 700ms ${E}`,
        }}
      >
        {/* Trusted pill */}
        <div className="flex justify-center mb-11">
          <div className="inline-flex items-center gap-3" style={{ background: "#fff", borderRadius: 32, padding: "14px 32px 14px 14px", boxShadow: "0 8px 24px rgba(20,40,90,0.08)" }}>
            <div className="flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #2149E8 0%, #3D5CFF 100%)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5L2 4v4c0 3.31 2.56 6.41 6 7 3.44-.59 6-3.69 6-7V4L8 1.5z" fill="white" opacity="0.2"/>
                <path d="M8 1.5L2 4v4c0 3.31 2.56 6.41 6 7 3.44-.59 6-3.69 6-7V4L8 1.5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M5.5 8l2 2 3.5-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "1px", color: "#0F1E4D", textTransform: "uppercase" }}>
              Trusted by Global Brands
            </span>
          </div>
        </div>

        {/* Main row */}
        <div className="flex items-center justify-center gap-12">
          {/* Target illustration */}
          <div
            className="hidden lg:flex flex-shrink-0 items-center justify-center"
            onMouseEnter={() => setTargetHovered(true)}
            onMouseLeave={() => setTargetHovered(false)}
            style={{
              transition: `transform 500ms ${E}`,
              transform: targetHovered 
                ? "translateY(-9px) scale(1.03) rotate(2deg)" 
                : "translateY(0) scale(1) rotate(0deg)",
              willChange: "transform",
            }}
          >
            <div className="subtle-float">
              <img
                src={targetIllustration}
                alt="3D target with dart"
                style={{
                  width: 240, height: 240, objectFit: "contain",
                  filter: "drop-shadow(0 20px 40px rgba(20,40,90,0.15))",
                  transform: "translateY(-40px)",
                }}
              />
            </div>
          </div>

          {/* Centre text */}
          <div className="flex-1 text-center" style={{ maxWidth: 680 }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 25, lineHeight: "122%", color: "#0B1739", marginBottom: 22, letterSpacing: "1px" }}>
              Helping businesses generate<br/>
              high-quality leads and maximize<br/>
              return on investment through
            </h2>
            <div className="relative inline-block" style={{ marginTop: 8 }}>
              <span style={{ 
                fontFamily: "'Caveat', cursive", 
                fontWeight: 700, 
                fontSize: "clamp(36px, 4.5vw, 56px)", 
                color: "#2A4CE8", 
                letterSpacing: "-0.01em",
                textRendering: "geometricPrecision", 
                lineHeight: 1.1,
                display: "inline-block",
                paddingBottom: "4px"
              }}>
                performance marketing.
              </span>
              <svg className="absolute" style={{ left: "50%", transform: "translateX(-50%)", top: "100%", marginTop: 4 }} width="320" height="24" viewBox="0 0 320 24" fill="none">
                <path d="M8 16 Q80 4 160 14 Q240 24 312 8" stroke="#2A4CE8" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Bar chart illustration */}
          <div 
            className="hidden lg:flex flex-shrink-0 items-end justify-center"
            onMouseEnter={() => setChartHovered(true)}
            onMouseLeave={() => setChartHovered(false)}
            style={{
              transition: `transform 500ms ${E}`,
              transform: chartHovered 
                ? "translateY(-9px) scale(1.03) rotate(-2deg)" 
                : "translateY(0) scale(1) rotate(0deg)",
              willChange: "transform",
            }}
          >
            <div className="subtle-float-delayed">
              <div style={{ filter: "drop-shadow(0 20px 40px rgba(20,40,90,0.15))" }}>
                <svg width="220" height="220" viewBox="0 0 280 280" fill="none" style={{ marginTop: -42 }}>
                  <rect x="20" y="230" width="240" height="30" rx="12" fill="url(#baseGrad)" />
                  <rect x="50" y="155" width="56" height="75" rx="10" fill="url(#barGrad)" />
                  <rect x="50" y="155" width="56" height="12" rx="8" fill="url(#barTopGrad)" />
                  <rect x="118" y="115" width="56" height="115" rx="10" fill="url(#barGrad)" />
                  <rect x="118" y="115" width="56" height="12" rx="8" fill="url(#barTopGrad)" />
                  <rect x="186" y="65" width="56" height="165" rx="10" fill="url(#barGrad)" />
                  <rect x="186" y="65" width="56" height="12" rx="8" fill="url(#barTopGrad)" />
                  <defs>
                    <linearGradient id="baseGrad" x1="20" y1="230" x2="260" y2="260" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#E8EDF5"/><stop offset="100%" stopColor="#D0D9EC"/>
                    </linearGradient>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#3D5CFF"/><stop offset="100%" stopColor="#1E3FE0"/>
                    </linearGradient>
                    <linearGradient id="barTopGrad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#6B84FF"/><stop offset="100%" stopColor="#4A66FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Partner badges */}
        <div className="flex flex-wrap justify-center mt-10" style={{ gap: 10 }}>
          {partners.map(p => <PartnerBadge key={p.abbr} p={p}/>)}
        </div>
      </div>
    </section>
  )
}
