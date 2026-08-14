import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import contactHeroImg from "@/imports/Contact Icons.png"

const FONT_INTER = "'Inter', sans-serif"

interface CategoryOption {
  id: string
  title: string
  notice: string
  icon: React.ReactNode
}

// ─── Contact Hero Section ───────────────────────────────────────────────────

function ContactHero() {
  return (
    <section
      className="relative overflow-hidden flex items-center min-h-[400px] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20"
      style={{
        background: "linear-gradient(165deg, #050c20 0%, #07112c 50%, #04091a 100%)",
        fontFamily: FONT_INTER,
      }}
    >
      {/* Ambient Lighting Backglow Behind Graphic */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          right: "5%",
          width: 650,
          height: 650,
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, rgba(29, 100, 242, 0.3) 0%, rgba(56, 189, 248, 0.12) 45%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Sweeping Luminous Ambient Lines with Slow Smooth Motion */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
        <motion.path
          d="M -100,320 C 250,180 550,420 850,220 C 1050,100 1350,260 1650,160"
          fill="none"
          stroke="rgba(56, 189, 248, 0.4)"
          strokeWidth="1.8"
          animate={{
            d: [
              "M -100,320 C 250,180 550,420 850,220 C 1050,100 1350,260 1650,160",
              "M -100,340 C 250,210 550,390 850,240 C 1050,120 1350,240 1650,180",
              "M -100,320 C 250,180 550,420 850,220 C 1050,100 1350,260 1650,160",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M -50,380 C 280,240 580,480 880,280 C 1080,150 1380,310 1680,210"
          fill="none"
          stroke="rgba(37, 99, 235, 0.3)"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          animate={{
            d: [
              "M -50,380 C 280,240 580,480 880,280 C 1080,150 1380,310 1680,210",
              "M -50,360 C 280,220 580,500 880,260 C 1080,130 1380,330 1680,190",
              "M -50,380 C 280,240 580,480 880,280 C 1080,150 1380,310 1680,210",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulsing Luminous Signal Light Nodes */}
        <circle cx="450" cy="290" r="3" fill="#38BDF8" className="animate-pulse" />
        <circle cx="920" cy="180" r="2.5" fill="#60A5FA" opacity="0.8" />
        <circle cx="1320" cy="240" r="3" fill="#2DD4BF" className="animate-pulse" />
      </svg>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 w-fit" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" style={{ boxShadow: "0 0 8px #34D399" }} />
              <span className="text-xs font-bold tracking-wider uppercase text-[#34D399]">CONTACT US</span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-tight mb-4 tracking-tight"
              style={{ fontFamily: FONT_INTER }}
            >
              Get in Touch
            </h1>

            {/* Paragraph */}
            <p
              className="text-base sm:text-lg max-w-xl leading-relaxed"
              style={{
                fontFamily: FONT_INTER,
                color: "rgba(255, 255, 255, 0.78)",
              }}
            >
              Choose a category below and we'll route your message to the right team. We respond within 1–2 business days.
            </p>
          </motion.div>

          {/* Right Column: 3D Contact Hero Artwork (Contact Icons.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-center relative py-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative max-w-[360px] xl:max-w-[420px] w-full"
            >
              <img
                src={contactHeroImg}
                alt="3D Contact Icons Hero Illustration"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,10,35,0.6)] scale-105"
                style={{ filter: "brightness(1.05) contrast(1.05)" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Main Contact Content Area (White Rounded Container) ─────────────────────

function ContactContentArea() {
  const [selectedCategory, setSelectedCategory] = useState<string>("affiliate")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const categories: CategoryOption[] = [
    {
      id: "affiliate",
      title: "Affiliate Question",
      notice:
        "This is not an application, but a form to send us affiliate-related questions. If you're interested in becoming an Candid Leaders affiliate, you should fill out the application on the Affiliates page — otherwise let us know what's up below.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      ),
    },
    {
      id: "partnership",
      title: "Product / Service Partnership",
      notice:
        "Looking to partner with Candid Leaders? Please submit your partnership proposal or service inquiry below. Our business development team will review and respond promptly.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 11V7a4 4 0 0 0-8 0v4" />
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M7 15h10" />
        </svg>
      ),
    },
    {
      id: "feedback",
      title: "General Feedback",
      notice:
        "We value your feedback! Tell us about your experience, report a suggestion, or let us know how we can improve our platform and performance tools for you.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      id: "abuse",
      title: "Report Abuse",
      notice:
        "To report compliance issues, fraud, or violations of our terms of service, please fill out the details below. All reports are treated with strict confidentiality.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: "pr",
      title: "Public Relations",
      notice:
        "For media inquiries, press kits, interview requests, or speaking engagements, please provide your publication and deadline details below.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      ),
    },
  ]

  const activeCategoryObj = categories.find((c) => c.id === selectedCategory) || categories[0]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <section className="py-0 pb-24 bg-white relative z-20 -mt-10" style={{ fontFamily: FONT_INTER }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Main White Rounded Container Card */}
        <div
          className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_20px_60px_rgba(0,10,35,0.06)] overflow-hidden p-6 sm:p-10 lg:p-12"
          style={{ fontFamily: FONT_INTER }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ── Left Column: Category Selection & Direct Contact Card ── */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-8 lg:pb-0">

              {/* Category Selector Block */}
              <div>
                <div className="mb-2">
                  <span
                    style={{
                      fontFamily: FONT_INTER,
                      color: "#2563EB",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    WHAT CAN WE HELP WITH?
                  </span>
                </div>

                <p
                  className="text-xs text-slate-500 mb-6"
                  style={{ fontFamily: FONT_INTER }}
                >
                  Select a topic to see the right form.
                </p>

                {/* Category List */}
                <div className="space-y-3">
                  {categories.map((cat) => {
                    const isActive = cat.id === selectedCategory

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left p-3.5 px-4 rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer ${isActive
                          ? "bg-blue-50/90 border border-blue-600/35 shadow-sm"
                          : "bg-slate-50/70 border border-slate-200/60 hover:bg-slate-100/80 hover:border-slate-300"
                          }`}
                        style={{ fontFamily: FONT_INTER }}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive
                              ? "bg-[#2563EB] text-white shadow-sm"
                              : "bg-blue-50/80 text-[#2563EB]"
                              }`}
                          >
                            {cat.icon}
                          </div>

                          <span
                            className={`text-13.5 font-extrabold transition-colors ${isActive ? "text-[#2563EB]" : "text-slate-800"
                              }`}
                            style={{ fontFamily: FONT_INTER, fontSize: 13.5 }}
                          >
                            {cat.title}
                          </span>
                        </div>

                        {/* Active Dot Indicator */}
                        {isActive && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Direct Contact Info Card (Bottom of Left Column) */}
              <div
                className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-3.5"
                style={{ fontFamily: FONT_INTER }}
              >
                <div className="mb-1">
                  <span
                    style={{
                      fontFamily: FONT_INTER,
                      color: "#2563EB",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    DIRECT CONTACT
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                  <div className="w-7 h-7 rounded-lg bg-blue-100/60 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span>support@CandidLeaders.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                  <div className="w-7 h-7 rounded-lg bg-blue-100/60 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>+1 (888) 000-0000</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                  <div className="w-7 h-7 rounded-lg bg-blue-100/60 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span>Ottawa, Ontario, Canada</span>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3 text-xs text-slate-700 font-semibold">
                  <div className="w-7 h-7 rounded-lg bg-blue-100/60 flex items-center justify-center text-[#2563EB] flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span>Mon–Fri, 9am–6pm ET</span>
                </div>
              </div>

            </div>

            {/* ── Right Column: Selected Contact Form ── */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                {/* Right Category Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-9.5 h-9.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200/80 flex items-center justify-center shadow-sm">
                    {activeCategoryObj.icon}
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-extrabold text-slate-900"
                    style={{ fontFamily: FONT_INTER }}
                  >
                    {activeCategoryObj.title}
                  </h2>
                </div>

                {/* Information / Notice Box */}
                <div
                  className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 sm:p-5 mb-8 text-xs sm:text-sm text-blue-900 leading-relaxed font-medium"
                  style={{ fontFamily: FONT_INTER }}
                >
                  {activeCategoryObj.notice}
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Grid Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Your Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-slate-800 mb-2"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
                        style={{ fontFamily: FONT_INTER }}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-bold text-slate-800 mb-2"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
                        style={{ fontFamily: FONT_INTER }}
                      />
                    </div>
                  </div>

                  {/* Grid Row 2: Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-slate-800 mb-2"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@acme.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
                        style={{ fontFamily: FONT_INTER }}
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-slate-800 mb-2"
                        style={{ fontFamily: FONT_INTER }}
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium"
                        style={{ fontFamily: FONT_INTER }}
                      />
                    </div>
                  </div>

                  {/* Grid Row 3: Your Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-800 mb-2"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/40 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 transition-all text-sm font-medium resize-y"
                      style={{ fontFamily: FONT_INTER }}
                    />
                  </div>

                  {/* Feedback Notification */}
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Thank you! Your message has been sent successfully. We will get back to you shortly.
                    </motion.div>
                  )}

                  {/* Grid Row 4: Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03, y: -1.5, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.35)" }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="px-7 py-3.5 rounded-2xl font-extrabold bg-[#2563EB] text-white cursor-pointer shadow-md hover:bg-blue-700 transition-all text-sm flex items-center gap-2"
                      style={{ fontFamily: FONT_INTER }}
                    >
                      Submit →
                    </motion.button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

// ─── Main Page Component ───────────────────────────────────────────────────

export default function ContactLanding() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ fontFamily: FONT_INTER, minHeight: "100vh", background: "white" }}>
      <Navbar
        onNavigateSignup={() => navigate("/signup")}
        onNavigateLanding={() => navigate("/")}
      />
      <ContactHero />
      <ContactContentArea />
      <Footer />
    </div>
  )
}
