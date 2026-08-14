import { useRef, useCallback, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Navbar from "@/components/Navbar"
import heroBg from "@/imports/annotation-reference-2.png"
import Footer from "@/components/Footer"
import MarketingStatement from "@/sections/MarketingStatement"
import Features from "@/sections/Features"
import Stats from "@/sections/Stats"
import PlatformFeatures from "@/sections/PlatformFeatures"
import CTASection from "@/sections/CTASection"
import Signup from "@/sections/Signup"
import TrackingPlatform from "@/pages/TrackingPlatform"
import AdvertiserLanding from "@/pages/AdvertiserLanding"
import AffiliatesLanding from "@/pages/AffiliatesLanding"
import AboutLanding from "@/pages/AboutLanding"
import ContactLanding from "@/pages/ContactLanding"
import BlogLanding from "@/pages/BlogLanding"

const E = "cubic-bezier(0.22,1,0.36,1)"

// ─── Hero Dashboard Illustration ─────────────────────────────────────────────

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[560px]" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(59,130,246,0.35) 0%, transparent 70%)", transform: "translateY(30px) scaleX(0.9)", filter: "blur(24px)" }} />
      <div className="absolute bottom-[-20px] left-1/2" style={{ transform: "translateX(-50%)", width: "80%", height: "28px", background: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)", borderRadius: "50%", filter: "blur(6px)", opacity: 0.45 }} />
      <div className="relative rounded-2xl overflow-hidden" style={{ background: "white", boxShadow: "0 32px 80px rgba(15,30,80,0.4), 0 8px 24px rgba(37,99,235,0.2)", transform: "rotateX(4deg) rotateY(-6deg)", border: "1px solid rgba(255,255,255,0.3)" }}>
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#F8FAFF", borderBottom: "1px solid #E2E8F0" }}>
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1 mx-3 px-3 py-1 rounded-md text-xs text-slate-400" style={{ background: "#EEF2FF", maxWidth: "200px" }}>app.nexusflow.io/dashboard</div>
        </div>
        <div className="p-4" style={{ background: "#F0F6FF" }}>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Revenue", value: "$24.5K", change: "+18%" },
              { label: "Clicks", value: "142K", change: "+24%" },
              { label: "Conversion", value: "8.7%", change: "+6%" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-3" style={{ background: "white", boxShadow: "0 2px 8px rgba(37,99,235,0.1)" }}>
                <div className="text-xs font-medium mb-1" style={{ color: "#94A3B8" }}>{s.label}</div>
                <div className="text-base font-bold" style={{ color: "#0F172A" }}>{s.value}</div>
                <div className="text-xs font-semibold mt-1" style={{ color: "#22C55E" }}>{s.change}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-4" style={{ background: "white", boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-semibold" style={{ color: "#0F172A" }}>Campaign Performance</div>
              <div className="text-xs px-2 py-0.5 rounded-full" style={{ background: "#EFF6FF", color: "#2563EB" }}>This Month</div>
            </div>
            <div className="flex items-end gap-2 h-20">
              {[55, 72, 45, 88, 65, 92, 78, 60, 84, 70, 95, 80].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 6 || i === 10 ? "linear-gradient(180deg, #60A5FA 0%, #2563EB 100%)" : "linear-gradient(180deg, #BFDBFE 0%, #93C5FD 100%)" }} />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
                <div key={m} className="text-xs" style={{ color: "#CBD5E1", fontSize: "9px" }}>{m}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="rounded-xl p-3" style={{ background: "white", boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
              <div className="text-xs font-medium mb-2" style={{ color: "#94A3B8" }}>Goal Progress</div>
              <div className="w-full h-2 rounded-full" style={{ background: "#EFF6FF" }}>
                <div className="h-2 rounded-full" style={{ width: "72%", background: "linear-gradient(90deg, #60A5FA, #2563EB)" }} />
              </div>
              <div className="text-xs mt-1 font-semibold" style={{ color: "#2563EB" }}>72% achieved</div>
            </div>
            <div className="rounded-xl p-3" style={{ background: "white", boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
              <div className="text-xs font-medium mb-2" style={{ color: "#94A3B8" }}>Active Campaigns</div>
              <div className="text-2xl font-bold" style={{ color: "#0F172A" }}>24</div>
              <div className="text-xs" style={{ color: "#22C55E", fontWeight: 600 }}>↑ 3 new today</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute" style={{ top: "-20px", right: "-20px", width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #60A5FA 0%, #2563EB 100%)", boxShadow: "0 8px 24px rgba(37,99,235,0.4)" }} />
    </div>
  )
}

// ─── Wave Divider ─────────────────────────────────────────────────────────────

function WaveDivider() {
  return (
    <div style={{ marginTop: -2, lineHeight: 0, position: "relative" }}>
      <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: "80px", display: "block" }}>
        <defs>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0033CC" />
            <stop offset="20%" stopColor="#0055FF" />
            <stop offset="45%" stopColor="#5599FF" />
            <stop offset="55%" stopColor="#99CCFF" />
            <stop offset="70%" stopColor="#4488FF" />
            <stop offset="100%" stopColor="#0033CC" />
          </linearGradient>
        </defs>
        <path d="M0 30 C360 90 1080 10 1440 55 L1440 90 L0 90 Z" fill="white" />
        <path d="M0 30 C360 90 1080 10 1440 55" fill="none" stroke="url(#waveStroke)" strokeWidth="3" />
      </svg>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ onNavigateSignup }: { onNavigateSignup?: () => void }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [dashHover, setDashHover] = useState(false)
  const isIdle = tilt.rx === 0 && tilt.ry === 0
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ rx: dy * -4, ry: dx * 4 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 flex flex-col justify-between"
      style={{ background: "linear-gradient(165deg, #050c20 0%, #07112c 50%, #04091a 100%)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glows */}
      <div className="absolute pointer-events-none blob-breathe" style={{ top: "5%", left: "-5%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(30,70,200,0.22) 0%, transparent 65%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none blob-breathe" style={{ top: "0%", right: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(20,50,180,0.18) 0%, transparent 65%)", borderRadius: "50%", animationDelay: "3s" }} />
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(80,120,255,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <div
        className="relative max-w-6xl mx-auto px-6 py-12 lg:py-16 flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full justify-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: `opacity 800ms ${E}, transform 800ms ${E}`,
        }}
      >
        {/* ── Left Content ── */}
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 w-fit" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)" }}>
            <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" style={{ boxShadow: "0 0 8px #34D399" }} />
            <span className="text-xs font-bold tracking-wider uppercase text-[#34D399]">TRUSTED BY 30,000+ MARKETERS WORLDWIDE</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-5" style={{ letterSpacing: "-0.02em" }}>
            Performance Marketing That{" "}
            <span style={{ color: "#60A5FA" }}>Delivers Results</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            Drive high-quality leads, maximize ROI, and scale campaigns that actually convert. Built for performance marketers who refuse to settle for average.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            {/* Primary CTA */}
            <a
              href="#"
              id="hero-cta-primary"
              onClick={(e) => { e.preventDefault(); onNavigateSignup?.() }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                color: "white",
                boxShadow: "0 8px 24px rgba(37,99,235,0.45)",
                transition: `transform 300ms ${E}, box-shadow 300ms ${E}, filter 300ms ${E}`,
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(-3px) scale(1.02)"
                el.style.boxShadow = "0 16px 40px rgba(37,99,235,0.65)"
                el.style.filter = "brightness(1.1)"
                const arrow = el.querySelector<HTMLElement>(".hero-arrow-p")
                if (arrow) arrow.style.transform = "translateX(4px)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(0) scale(1)"
                el.style.boxShadow = "0 8px 24px rgba(37,99,235,0.45)"
                el.style.filter = "brightness(1)"
                const arrow = el.querySelector<HTMLElement>(".hero-arrow-p")
                if (arrow) arrow.style.transform = "translateX(0)"
              }}
              onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.98)" }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)" }}
            >
              Get Started Free
              <svg
                className="hero-arrow-p"
                width="16" height="16" fill="none" viewBox="0 0 16 16"
                style={{ transition: `transform 300ms ${E}` }}
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Secondary CTA */}
            <a
              href="#"
              id="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: `transform 300ms ${E}, background 300ms ${E}, border-color 300ms ${E}`,
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(-3px) scale(1.02)"
                el.style.background = "rgba(255,255,255,0.14)"
                el.style.borderColor = "rgba(255,255,255,0.38)"
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.transform = "translateY(0) scale(1)"
                el.style.background = "rgba(255,255,255,0.08)"
                el.style.borderColor = "rgba(255,255,255,0.2)"
              }}
              onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.98)" }}
              onMouseUp={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M6 5.5l5 2.5-5 2.5V5.5z" fill="currentColor" /></svg>
              Watch Demo
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#F59E0B", "#10B981", "#6366F1", "#EF4444"].map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                  {["A", "B", "C", "D"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#F59E0B"><path d="M6 1l1.3 3.9H11L8.1 7.1l1 3.9L6 8.8l-3.1 2.2 1-3.9L1 4.9h3.7z" /></svg>
                ))}
                <span className="text-sm font-bold ml-1" style={{ color: "white" }}>4.9/5</span>
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>from 2,000+ verified reviews</div>
            </div>
          </div>
        </div>

        {/* ── Right: 3D Dashboard (parallax + hover lift) ── */}
        <div
          className="flex-1 flex justify-center lg:justify-end"
          style={{
            transform: `perspective(1400px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${dashHover ? -8 : 0}px)`,
            transition: isIdle && !dashHover
              ? `transform 600ms ${E}`
              : "transform 100ms linear",
            willChange: "transform",
          }}
          onMouseEnter={() => setDashHover(true)}
          onMouseLeave={() => setDashHover(false)}
        >
          <HeroDashboard />
        </div>
      </div>
    </section>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (location.pathname === '/signup') {
    return <Signup onNavigateLanding={() => navigate('/')} />
  }

  if (location.pathname === '/advertisers' || location.pathname === '/contact-advertisers') {
    return <AdvertiserLanding />
  }

  if (location.pathname === '/advertisers/tracking-platform' || location.pathname === '/tracking-platform') {
    return <TrackingPlatform />
  }

  if (location.pathname === '/affiliates') {
    return <AffiliatesLanding />
  }

  if (location.pathname === '/about') {
    return <AboutLanding />
  }

  if (location.pathname === '/contact') {
    return <ContactLanding />
  }

  if (location.pathname === '/blog' || location.pathname.startsWith('/blog')) {
    return <BlogLanding />
  }

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar
        onNavigateSignup={() => navigate('/signup')}
        onNavigateLanding={() => navigate('/')}
      />
      <Hero onNavigateSignup={() => navigate('/signup')} />
      <MarketingStatement />
      <Features />
      <Stats />
      <PlatformFeatures />
      <CTASection onNavigateSignup={() => navigate('/signup')} />
      <Footer />
    </div>
  )
}
