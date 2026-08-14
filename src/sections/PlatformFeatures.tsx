import React, { useState, useRef, useEffect } from "react"

const PF_FONT = "'Inter', sans-serif"
const E = "cubic-bezier(0.22,1,0.36,1)"

// ── Icons ──────────────────────────────────────────────────────────────────────

function PfIconBarChart() {
  return (
    <svg width="34" height="34" viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id="pfbc" x1="0" y1="0" x2="0" y2="1"><stop stopColor="rgba(255,255,255,0.9)"/><stop offset="1" stopColor="rgba(255,255,255,0.65)"/></linearGradient>
      </defs>
      <rect x="6"  y="28" width="10" height="18" rx="3" fill="url(#pfbc)"/>
      <rect x="20" y="18" width="10" height="28" rx="3" fill="url(#pfbc)"/>
      <rect x="34" y="8"  width="10" height="38" rx="3" fill="url(#pfbc)"/>
      <rect x="6"  y="28" width="10" height="5"  rx="2" fill="white" opacity="0.5"/>
      <rect x="20" y="18" width="10" height="5"  rx="2" fill="white" opacity="0.5"/>
      <rect x="34" y="8"  width="10" height="5"  rx="2" fill="white" opacity="0.5"/>
    </svg>
  )
}
function PfIconSparkles() {
  return (
    <svg width="34" height="34" viewBox="0 0 52 52" fill="none">
      <path d="M26 8 L29 20 L26 18 L23 20 Z" fill="white"/>
      <path d="M26 44 L29 32 L26 34 L23 32 Z" fill="white" opacity="0.8"/>
      <path d="M8 26 L20 29 L18 26 L20 23 Z" fill="white" opacity="0.8"/>
      <path d="M44 26 L32 29 L34 26 L32 23 Z" fill="white" opacity="0.8"/>
      <path d="M26 10 L29.2 21.8 L41 26 L29.2 30.2 L26 42 L22.8 30.2 L11 26 L22.8 21.8 Z" fill="white"/>
      <circle cx="38" cy="14" r="4" fill="white" opacity="0.75"/>
      <circle cx="38" cy="14" r="2" fill="white"/>
      <circle cx="15" cy="38" r="3" fill="white" opacity="0.55"/>
    </svg>
  )
}
function PfIconUsers() {
  return (
    <svg width="34" height="34" viewBox="0 0 52 52" fill="none">
      <circle cx="19" cy="16" r="8" fill="white"/>
      <circle cx="19" cy="16" r="5" fill="white" opacity="0.4"/>
      <path d="M4 40 C4 30 11 24 19 24 C27 24 34 30 34 40" fill="white"/>
      <circle cx="35" cy="18" r="6" fill="white" opacity="0.75"/>
      <path d="M30 40 C30 33 33.5 28 38 28 C42.5 28 46 33 46 40" fill="white" opacity="0.65"/>
    </svg>
  )
}
function PfIconDocument() {
  return (
    <svg width="34" height="34" viewBox="0 0 52 52" fill="none">
      <rect x="10" y="6"  width="28" height="36" rx="4" fill="white" opacity="0.2"/>
      <rect x="10" y="6"  width="28" height="36" rx="4" stroke="white" strokeWidth="2.5" fill="none"/>
      <path d="M17 18 h16 M17 24 h10" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <rect x="8"  y="12" width="28" height="36" rx="4" fill="white" opacity="0.12"/>
      <rect x="12" y="8"  width="28" height="36" rx="4" fill="white" opacity="0.55"/>
      <path d="M19 22 h14 M19 28 h9" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
      <rect x="19" y="34" width="6"  height="8" rx="2" fill="white" opacity="0.9"/>
      <rect x="27" y="30" width="6"  height="12" rx="2" fill="white" opacity="0.9"/>
    </svg>
  )
}

function PfAppIcon({ children, hovered = false }: { children: React.ReactNode; hovered?: boolean }) {
  return (
    <div style={{
      width: 64, height: 64, borderRadius: 18, flexShrink: 0,
      background: "linear-gradient(145deg, #4B7BFF 0%, #2149E8 45%, #1232C8 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: hovered
        ? "0 12px 28px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.35)"
        : "0 6px 18px rgba(15,23,42,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
      position: "relative", overflow: "hidden",
      transform: hovered ? "translateY(-3px)" : "translateY(0)",
      transition: `transform 400ms ${E}, box-shadow 400ms ${E}`,
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 32, background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 100%)", borderRadius: "18px 18px 0 0", pointerEvents: "none" }} />
      {children}
    </div>
  )
}

function CategoryBadge({ label, pulse = false }: { label: string; pulse?: boolean }) {
  return (
    <div
      style={{ position: "absolute", top: 32, right: 32, background: "#2149E8", borderRadius: 999, padding: "6px 16px" }}
      className={pulse ? "badge-pulse" : ""}
    >
      <span style={{ fontFamily: PF_FONT, fontWeight: 700, fontSize: 12, color: "white", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
    </div>
  )
}

// ── Progress bar with replay-on-hover ─────────────────────────────────────────

function ProgressBar({ pct, barKey }: { pct: number; barKey: number }) {
  return (
    <div style={{ height: 6, background: "#EEF2FF", borderRadius: 99, overflow: "hidden" }}>
      <div
        key={barKey}
        className="bar-fill-animate"
        style={{
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(90deg, #4B7BFF, #2149E8)",
          borderRadius: 99,
        }}
      />
    </div>
  )
}

// ── Card: Performance Tracking ─────────────────────────────────────────────────

function CardTracking() {
  const [hovered, setHovered] = useState(false)
  const [barKey, setBarKey] = useState(0)
  const kpis = [
    { label: "Clicks",      value: "1,248,392", pct: 88 },
    { label: "Conversions", value: "38,210",    pct: 62 },
    { label: "Revenue",     value: "$124,892",  pct: 78 },
  ]
  const icons = [
    <svg key="a" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="#94A3B8" strokeWidth="1.4"/><path d="M7 6l1-1.5L9.5 9l2-3 1.5 3" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="12" cy="12" r="2.5" fill="#EFF6FF" stroke="#94A3B8" strokeWidth="1.2"/></svg>,
    <svg key="b" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="#94A3B8" strokeWidth="1.4"/><path d="M5 9h1.5l1-2 1.5 4 1-1.5H13" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
    <svg key="c" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="#94A3B8" strokeWidth="1.4"/><text x="9" y="13" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="700">$</text></svg>,
  ]
  return (
    <div
      className="p-6 sm:p-9"
      style={{
        background: "#FFFFFF",
        border: `1px solid ${hovered ? "rgba(33,73,232,0.4)" : "#E8EDF7"}`,
        borderRadius: 28,
        boxShadow: hovered
          ? "0 24px 60px rgba(33,73,232,0.14), 0 8px 24px rgba(33,73,232,0.08)"
          : "0 4px 6px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.08)",
        position: "relative",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: `transform 320ms ${E}, box-shadow 320ms ${E}, border-color 320ms ${E}`,
        willChange: "transform",
      }}
      onMouseEnter={() => { setHovered(true); setBarKey(k => k + 1) }}
      onMouseLeave={() => setHovered(false)}
    >
      <CategoryBadge label="CORE"/>
      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 mb-7">
        <PfAppIcon hovered={hovered}><PfIconBarChart/></PfAppIcon>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: PF_FONT, fontWeight: 600, fontSize: "22px", color: "#0B1238", margin: "0 0 10px", lineHeight: "130%", paddingRight: 100 }}>Performance Tracking</h3>
          <p style={{ fontFamily: PF_FONT, fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#64748B", margin: 0 }}>
            Monitor clicks, conversions, and revenue from one dashboard with pixel-perfect attribution across every touchpoint.
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 20, display: "flex", flexDirection: "column", gap: 18 }}>
        {kpis.map((k, idx) => (
          <div key={k.label}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#F8FAFF", border: "1px solid #E8EDF7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {icons[idx]}
              </div>
              <span style={{ fontFamily: PF_FONT, fontWeight: 600, fontSize: 15, color: "#0B1238", flex: 1 }}>{k.label}</span>
              <span style={{ fontFamily: PF_FONT, fontWeight: 700, fontSize: 15, color: "#2149E8" }}>{k.value}</span>
            </div>
            <ProgressBar pct={k.pct} barKey={barKey}/>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Card: Smart Optimization ───────────────────────────────────────────────────

function CardOptimization() {
  const [hovered, setHovered] = useState(false)
  const [badgeKey, setBadgeKey] = useState(0)
  const recs = [
    { text: "Bid adj. +12%",       status: "APPLIED", color: "#16A34A", bg: "#F0FDF4" },
    { text: "Pause low CTR ads",   status: "PENDING", color: "#D97706", bg: "#FFFBEB" },
    { text: "Scale top publisher", status: "APPLIED", color: "#16A34A", bg: "#F0FDF4" },
  ]
  return (
    <div
      className="p-6 sm:p-9"
      style={{
        background: "#FFFFFF",
        border: `1px solid ${hovered ? "rgba(33,73,232,0.4)" : "#E8EDF7"}`,
        borderRadius: 28,
        boxShadow: hovered
          ? "0 24px 60px rgba(33,73,232,0.14), 0 8px 24px rgba(33,73,232,0.08)"
          : "0 4px 6px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.08)",
        position: "relative",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: `transform 320ms ${E}, box-shadow 320ms ${E}, border-color 320ms ${E}`,
        willChange: "transform",
      }}
      onMouseEnter={() => { setHovered(true); setBadgeKey(k => k + 1) }}
      onMouseLeave={() => setHovered(false)}
    >
      <CategoryBadge label="AI-POWERED" pulse={badgeKey > 0 && hovered}/>
      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 mb-7">
        <PfAppIcon hovered={hovered}><PfIconSparkles/></PfAppIcon>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: PF_FONT, fontWeight: 600, fontSize: "22px", color: "#0B1238", margin: "0 0 10px", lineHeight: "130%", paddingRight: 110 }}>Smart Optimization</h3>
          <p style={{ fontFamily: PF_FONT, fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#64748B", margin: 0 }}>
            AI-powered insights continuously analyze your campaigns and surface actionable recommendations to improve performance.
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 20, display: "flex", flexDirection: "column", gap: 0 }}>
        {recs.map((r, i) => (
          <div key={r.text} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: i < recs.length - 1 ? "1px solid #F1F5F9" : "none" }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%", background: "#2149E8", flexShrink: 0,
              transform: hovered ? "scale(1.3)" : "scale(1)",
              transition: `transform 350ms ${E} ${i * 60}ms`,
            }} />
            <span style={{ fontFamily: PF_FONT, fontWeight: 500, fontSize: 15, color: "#0B1238", flex: 1 }}>{r.text}</span>
            <div style={{ background: r.bg, borderRadius: 999, padding: "4px 12px" }}>
              <span style={{ fontFamily: PF_FONT, fontWeight: 700, fontSize: 12, color: r.color, textTransform: "uppercase", letterSpacing: "0.05em" }}>{r.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Card: Dedicated Success Team ───────────────────────────────────────────────

function CardSupport() {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="p-6 sm:p-9"
      style={{
        background: "#FFFFFF",
        border: `1px solid ${hovered ? "rgba(33,73,232,0.4)" : "#E8EDF7"}`,
        borderRadius: 28,
        boxShadow: hovered
          ? "0 24px 60px rgba(33,73,232,0.14), 0 8px 24px rgba(33,73,232,0.08)"
          : "0 4px 6px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.08)",
        position: "relative",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: `transform 320ms ${E}, box-shadow 320ms ${E}, border-color 320ms ${E}`,
        willChange: "transform",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CategoryBadge label="SUPPORT"/>
      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 mb-7">
        <PfAppIcon hovered={hovered}><PfIconUsers/></PfAppIcon>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: PF_FONT, fontWeight: 600, fontSize: "22px", color: "#0B1238", margin: "0 0 10px", lineHeight: "130%", paddingRight: 100 }}>Dedicated Success Team</h3>
          <p style={{ fontFamily: PF_FONT, fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#64748B", margin: 0 }}>
            Industry experts with deep vertical knowledge assigned to your account — available 24/7 for strategy and support.
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 20 }}>
        <div style={{ background: "#F8FAFF", border: "1px solid #E8EDF7", borderRadius: 16, padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 16 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: "linear-gradient(135deg, #4B7BFF, #2149E8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(33,73,232,0.3)",
              transform: hovered ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
              transition: `transform 400ms ${E}`,
            }}>
              <span style={{ fontFamily: PF_FONT, fontWeight: 700, fontSize: 18, color: "white" }}>S</span>
            </div>
            <p style={{
              fontFamily: PF_FONT, fontWeight: 500, fontSize: 15, lineHeight: "158%", color: "#0B1238", margin: 0,
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              transition: `transform 400ms ${E}`,
            }}>
              Your Q3 campaign is pacing 14% ahead — I would recommend scaling budget by $5K this week.
            </p>
          </div>
          <button
            style={{
              width: "100%",
              background: "linear-gradient(135deg, #3B6FFF, #2149E8)",
              color: "white", border: "none", borderRadius: 12, padding: "14px 0",
              fontFamily: PF_FONT, fontWeight: 700, fontSize: 16, cursor: "pointer",
              boxShadow: hovered
                ? "0 10px 28px rgba(33,73,232,0.5), 0 0 20px rgba(80,140,255,0.25)"
                : "0 6px 20px rgba(33,73,232,0.35)",
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              transition: `transform 300ms ${E}, box-shadow 300ms ${E}`,
            }}
          >
            Approved — let&apos;s do it!
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Card: Weekly Reporting (graph redraw on hover) ─────────────────────────────

function CardReporting() {
  const [hovered, setHovered] = useState(false)
  const [lineKey, setLineKey] = useState(0)
  const pathRef = useRef<SVGPathElement>(null)
  const [pathLen, setPathLen] = useState(250)

  const pts = [28, 18, 42, 55, 48, 72, 65]
  const W = 100, H = 80
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * W)
  const ys = pts.map(v => H - (v / 80) * H)
  const d = pts.map((_, i) => `${i === 0 ? "M" : "L"}${xs[i].toFixed(1)},${ys[i].toFixed(1)}`).join(" ")
  const fill = `${d} L${W},${H} L0,${H} Z`

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (pathRef.current) setPathLen(Math.ceil(pathRef.current.getTotalLength()) + 10)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      className="p-6 sm:p-9"
      style={{
        background: "#FFFFFF",
        border: `1px solid ${hovered ? "rgba(33,73,232,0.4)" : "#E8EDF7"}`,
        borderRadius: 28,
        boxShadow: hovered
          ? "0 24px 60px rgba(33,73,232,0.14), 0 8px 24px rgba(33,73,232,0.08)"
          : "0 4px 6px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.08)",
        position: "relative",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: `transform 320ms ${E}, box-shadow 320ms ${E}, border-color 320ms ${E}`,
        willChange: "transform",
      }}
      onMouseEnter={() => { setHovered(true); setLineKey(k => k + 1) }}
      onMouseLeave={() => setHovered(false)}
    >
      <CategoryBadge label="REPORTS"/>
      <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 mb-7">
        <PfAppIcon hovered={hovered}><PfIconDocument/></PfAppIcon>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontFamily: PF_FONT, fontWeight: 600, fontSize: "22px", color: "#0B1238", margin: "0 0 10px", lineHeight: "130%", paddingRight: 100 }}>Weekly Reporting</h3>
          <p style={{ fontFamily: PF_FONT, fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#64748B", margin: 0 }}>
            Transparent analytics delivered every week with actionable recommendations. Clear data you can act on immediately.
          </p>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: 24 }}>
        <svg viewBox={`0 0 ${W} ${H + 16}`} style={{ width: "100%", height: 120, overflow: "visible" }}>
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#2149E8" stopOpacity="0.12"/>
              <stop offset="100%" stopColor="#2149E8" stopOpacity="0"/>
            </linearGradient>
          </defs>
          {xs.map((x, i) => (
            <line key={i} x1={x} y1={0} x2={x} y2={H} stroke="#E8EDF7" strokeWidth="0.8"/>
          ))}
          <path d={fill} fill="url(#chartFill)"/>

          {/* Animated path: remounts on lineKey change to restart animation */}
          <path
            ref={lineKey === 0 ? pathRef : undefined}
            key={`line-${lineKey}`}
            d={d}
            stroke="#2149E8"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={lineKey > 0 ? pathLen : undefined}
            strokeDashoffset={lineKey > 0 ? pathLen : undefined}
            style={lineKey > 0 ? {
              ["--line-len" as string]: pathLen,
              animation: `lineDraw 900ms ${E} forwards`,
            } as React.CSSProperties : {}}
          />

          {pts.map((_, i) => (
            <circle
              key={i}
              cx={xs[i]} cy={ys[i]}
              r={i === 5 ? (hovered ? 5 : 4) : (hovered ? 4 : 3)}
              fill={hovered ? "#1631B0" : "#2149E8"}
              stroke="white"
              strokeWidth="1.5"
              style={{ transition: `r 300ms ${E}` }}
            />
          ))}
          {["W1","W2","W3","W4","W5","W6","W7"].map((l, i) => (
            <text key={l} x={xs[i]} y={H + 14} textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily={PF_FONT} fontWeight="600">{l}</text>
          ))}
        </svg>
      </div>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function PlatformFeatures() {
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full section-py"
      style={{ 
        background: "#FFFFFF", 
        contentVisibility: "auto",
        containIntrinsicSize: "auto 1000px"
      }}
    >
      <div className="blob-breathe" style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(200,215,255,0.35) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div className="blob-breathe" style={{ position: "absolute", bottom: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(200,215,255,0.35) 0%, transparent 65%)", pointerEvents: "none", animationDelay: "4.5s" }} />

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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EEF4FF", borderRadius: 999, padding: "10px 20px", marginBottom: 28 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2149E8", flexShrink: 0 }} />
            <span style={{ fontFamily: PF_FONT, fontWeight: 700, fontSize: 13, color: "#2149E8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Platform Features</span>
          </div>
          <h2 style={{ fontFamily: PF_FONT, fontWeight: 700, fontSize: "44px", lineHeight: "120%", margin: "0 0 20px", letterSpacing: "-0.025em" }}>
            <span style={{ color: "#0B1238" }}>Everything you need to dominate</span><br className="hidden sm:inline" />
            <span style={{ color: "#2149E8" }}> your vertical.</span>
          </h2>
          <p style={{ fontFamily: PF_FONT, fontWeight: 400, fontSize: "16px", lineHeight: "170%", color: "#64748B", maxWidth: "620px", margin: "0 auto" }}>
            Powerful tools that give you full visibility and control over every campaign.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardTracking/>
          <CardOptimization/>
          <CardSupport/>
          <CardReporting/>
        </div>
      </div>
    </section>
  )
}
