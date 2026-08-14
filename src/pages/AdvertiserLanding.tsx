import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTASection from "@/sections/CTASection"
import ThreeDPieChart3D from "@/components/ThreeDPieChart3D"
import growthChart3dUltra from "@/imports/growth-chart-3d-ultra.png"
import growthChart3dTransparent from "@/imports/growth-chart-3d-transparent.png"
import pieChart3dTransparent from "@/imports/pie-chart-3d-transparent.png"
import heroLaptop3dClean from "@/imports/hero-laptop-3d-clean.png"

// ─── 3D Clay Hero Composition Graphic (Laptop, Target, Profile Card) ────────

function Hero3DGraphic() {
  return (
    <div className="relative w-full max-w-[460px] flex items-center justify-center py-6">
      {/* Ambient Radial Backlight Glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none opacity-80"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.2) 50%, transparent 75%)",
          filter: "blur(48px)",
        }}
      />

      {/* Main 3D Floating Stage Container */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full flex items-center justify-center"
      >
        <img
          src={heroLaptop3dClean}
          alt="3D Analytics Laptop Stage with Profile Badge"
          className="w-full max-w-[440px] h-auto object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(0,10,35,0.75)]"
          style={{
            filter: "brightness(1.05) contrast(1.05)",
          }}
        />
      </motion.div>
    </div>
  )
}

// ─── 3D Clay Feature Icons for Section 2 ─────────────────────────────────────

function ClayUserIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50/80 border border-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.1)]">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="15" r="7" fill="#3B82F6" />
        <path d="M 8 32 C 8 23, 32 23, 32 32 Z" fill="#1D4ED8" />
      </svg>
    </div>
  )
}

function ClayShieldIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50/80 border border-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.1)]">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        <path d="M 20 6 L 33 12 V 22 C 33 30, 20 35, 20 35 C 20 35, 7 30, 7 22 V 12 L 20 6 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
        <path d="M 16 20 L 19 23 L 25 17" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function ClayTrackingIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50/80 border border-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.1)]">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="22" width="5" height="12" rx="2" fill="#93C5FD" />
        <rect x="17" y="16" width="5" height="18" rx="2" fill="#3B82F6" />
        <rect x="24" y="10" width="5" height="24" rx="2" fill="#1D4ED8" />
      </svg>
    </div>
  )
}

function ClayTeamIcon() {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-50/80 border border-blue-100 shadow-[0_8px_20px_rgba(37,99,235,0.1)]">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        <circle cx="15" cy="15" r="5" fill="#3B82F6" />
        <circle cx="25" cy="15" r="5" fill="#60A5FA" />
        <path d="M 8 31 C 8 25, 22 25, 22 31 Z" fill="#1D4ED8" />
        <path d="M 18 31 C 18 26, 32 26, 32 31 Z" fill="#2563EB" opacity="0.85" />
      </svg>
    </div>
  )
}

// ─── Section 1: Hero Section (Dark Blue Navy) ───────────────────────────────

function HeroSection() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    telegram: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/signup")
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20" style={{ background: "linear-gradient(165deg, #050c20 0%, #07112c 50%, #04091a 100%)", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Ambient Lighting Glows */}
      <div className="absolute pointer-events-none" style={{ top: "10%", left: "-5%", width: 650, height: 650, borderRadius: "50%", background: "radial-gradient(circle, rgba(29,100,242,0.22) 0%, transparent 65%)", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none" style={{ top: "15%", right: "-5%", width: 650, height: 650, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 80%)", filter: "blur(80px)" }} />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Left Column: Headline, Subtext Points & Stat Cards (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {/* Green Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 w-fit" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" style={{ boxShadow: "0 0 8px #34D399" }} />
              <span className="text-xs font-bold tracking-wider uppercase text-[#34D399]">FOR ADVERTISERS</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
              Performance <br />
              Marketing <br />
              <span style={{ color: "#3B82F6" }}>Custom-Made</span> <br />
              for Your Brand
            </h1>

            {/* Paragraph */}
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }} className="mb-8 max-w-[560px]">
              Our team creates tailored solutions that achieve your brand's unique goals and maximize your ROAS. You'll only pay for the actions that matter sales, sign-ups, installs, or anything essential to your growth.
            </p>

            {/* 3 Award Stat Cards */}
            <div className="grid grid-cols-3 gap-3 max-w-[540px]">
              {[
                { title: "Best CPA Network", sub: "2024 Award" },
                { title: "Top Rated Network", sub: "5★ Rating" },
                { title: "Trusted Since", sub: "2004" },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -3, borderColor: "rgba(96,165,250,0.5)" }}
                  className="rounded-xl p-3.5 text-center transition-all duration-200"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#FFFFFF", marginBottom: 2 }}>{card.title}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{card.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Lead Generation Form Card (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div
              className="rounded-3xl p-7 sm:p-8 relative"
              style={{
                background: "white",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.45), 0 0 40px rgba(29, 100, 242, 0.25)",
                border: "1px solid #E2E8F0",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 800, color: "#10B981", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
                GROW YOUR BRAND
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: "#0F172A", marginBottom: 22, letterSpacing: "-0.01em" }}>
                Become an Candid Leaders Advertiser
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Company */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl px-3 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 }}>
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl px-3 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl px-3 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 555 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl px-3 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Telegram */}
                <div>
                  <label style={{ fontSize: 11, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 }}>
                    Telegram (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="@username"
                    value={formData.telegram}
                    onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                    className="w-full rounded-xl px-3 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                {/* Full-width Blue Next Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-xl font-bold text-white flex items-center justify-center gap-2 cursor-pointer transition-shadow"
                  style={{
                    background: "#1D64F2",
                    padding: "12px 20px",
                    fontSize: 14,
                    boxShadow: "0 8px 24px rgba(29, 100, 242, 0.4)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Next
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </form>

              {/* Affiliate Redirect Link */}
              <div className="text-center mt-5">
                <span style={{ fontSize: 11.5, color: "#64748B", fontFamily: "'Inter', sans-serif" }}>
                  Are you an affiliate?{" "}
                  <a href="#" onClick={(e) => { e.preventDefault(); navigate("/signup") }} style={{ color: "#1D64F2", fontWeight: 700 }}>
                    Sign up here.
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 2: Infrastructure Behind Your Growth (Light bg) ─────────────────

const features = [
  {
    title: "Highest Quality Leads",
    desc: "Every affiliate is vetted manually. You get real, engaged audiences — not bots or incentivized junk traffic.",
    icon: <ClayUserIcon />,
  },
  {
    title: "Fraud Protection",
    desc: "FraudBlock™ uses AI and third-party data to block invalid traffic before it ever reaches your postback.",
    icon: <ClayShieldIcon />,
  },
  {
    title: "Proprietary Tracking",
    desc: "Our reporting software gives you granular conversion data — by affiliate, creative, geo, device, and more.",
    icon: <ClayTrackingIcon />,
  },
  {
    title: "Dedicated Account Team",
    desc: "Your account manager knows your vertical, your goals, and your margins. Available 24/7 to help you scale.",
    icon: <ClayTeamIcon />,
  },
]

function InfrastructureSection() {
  return (
    <section className="section-py" style={{ background: "#F8FAFF" }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center section-header-spacing"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3" style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.3)" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#10B981" }}>
              WHY ADVERTISE WITH US
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>
            The infrastructure behind your growth
          </h2>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(37,99,235,0.12)" }}
              className="rounded-3xl p-7 flex items-start gap-5 transition-all duration-300"
              style={{
                background: "white",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(37,99,235,0.06)",
              }}
            >
              <div className="flex-shrink-0">{feat.icon}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>{feat.title}</h3>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Page Assembly ──────────────────────────────────────────────────────

export default function AdvertiserLanding() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", background: "white" }}>
      <Navbar
        onNavigateSignup={() => navigate("/signup")}
        onNavigateLanding={() => navigate("/")}
      />
      <HeroSection />
      <InfrastructureSection />
      <CTASection onNavigateSignup={() => navigate("/signup")} />
      <Footer />
    </div>
  )
}
