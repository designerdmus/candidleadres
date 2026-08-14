import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const FONT_INTER = "'Inter', sans-serif"

// ─── Sub-category Pills Header ──────────────────────────────────────────────

const subCategories = [
  { name: "Paid Search", icon: "🔍" },
  { name: "Blogging", icon: "📝" },
  { name: "Marketing", icon: "📊" },
  { name: "Social Ads", icon: "📢" },
  { name: "Email Marketing", icon: "✉️" },
  { name: "SEO", icon: "📈" },
  { name: "Pinterest", icon: "📌" },
  { name: "Content Creator", icon: "🎥" },
]

function SubCategoryBar() {
  const marqueeItems = [...subCategories, ...subCategories, ...subCategories, ...subCategories]

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200/80 py-3.5 overflow-hidden relative">
      <div className="flex overflow-hidden relative w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex items-center gap-3 whitespace-nowrap py-1 pr-3"
        >
          {marqueeItems.map((cat, idx) => (
            <div
              key={`${cat.name}-${idx}`}
              className="px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-2 transition-all duration-200 flex-shrink-0 cursor-default"
              style={{
                fontFamily: FONT_INTER,
                background: "rgba(255, 255, 255, 0.9)",
                color: "#334155",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.03)",
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

// ─── Section 1: Hero Section (Dark Blue Navy) ───────────────────────────────

function HeroSection() {
  const navigate = useNavigate()

  const topOffers = [
    { title: "Finance App Pro", category: "Finance", payout: "$45 CPA", change: "+12%" },
    { title: "VPN Shield Ultra", category: "Software", payout: "$28 CPA", change: "+8%" },
    { title: "FitTrack Plus", category: "Fitness", payout: "$35 CPA", change: "+15%" },
    { title: "Tax Solver 2026", category: "Finance", payout: "$62 CPA", change: "+18%" },
  ]

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-20" style={{ background: "linear-gradient(165deg, #050c20 0%, #07112c 50%, #04091a 100%)", fontFamily: FONT_INTER }}>
      {/* Background Ambient Radial Glows */}
      <div className="absolute pointer-events-none" style={{ top: "10%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(29,100,242,0.25) 0%, transparent 70%)", filter: "blur(70px)" }} />
      <div className="absolute pointer-events-none" style={{ top: "15%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)", filter: "blur(70px)" }} />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 w-fit" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" style={{ boxShadow: "0 0 8px #34D399" }} />
              <span className="text-xs font-bold tracking-wider uppercase text-[#34D399]">FOR AFFILIATES</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] mb-6 tracking-tight">
              Promote <br />
              <span style={{ color: "#3B82F6" }}>high-converting</span> <br />
              CPA campaigns
            </h1>

            {/* Paragraph Subtext */}
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15.5, lineHeight: 1.7, maxWidth: 540 }} className="mb-8">
              Access hundreds of top-tier offers, monetize your email list, blogging, media buying, social media, and email marketing. Get paid weekly, every time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/signup")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white cursor-pointer shadow-lg transition-all"
                style={{
                  background: "linear-gradient(135deg, #1D64F2 0%, #2563EB 100%)",
                  boxShadow: "0 10px 28px rgba(29, 100, 242, 0.45)",
                  fontSize: 14.5,
                }}
              >
                Start Earning
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/signup")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white cursor-pointer transition-all"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(255, 255, 255, 0.25)",
                  fontSize: 14.5,
                }}
              >
                Browse Offers
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </div>

            {/* 3 Stat Cards */}
            <div className="grid grid-cols-3 gap-3 max-w-md">
              {[
                { title: "250K+", sub: "Active Affiliates" },
                { title: "$10M+", sub: "Total Paid Out" },
                { title: "5/5", sub: "Average Rating" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl p-3 text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#FFFFFF", marginBottom: 2 }}>{card.title}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{card.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Top Offers Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.45), 0 0 40px rgba(29, 100, 242, 0.25)",
                border: "1px solid #E2E8F0",
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0F172A" }}>
                  Top Offers This Week
                </h3>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(52, 211, 153, 0.15)", color: "#10B981" }}>
                  +24%
                </span>
              </div>

              {/* Offer Rows */}
              <div className="space-y-3 mb-6">
                {topOffers.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 3, backgroundColor: "#F8FAFF" }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-2xl border border-slate-100 transition-all cursor-pointer"
                  >
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>{item.title}</div>
                      <div style={{ fontSize: 11.5, color: "#64748B", marginTop: 2 }}>{item.category}</div>
                    </div>
                    <div className="text-right">
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A" }}>{item.payout}</div>
                      <div style={{ fontSize: 11.5, fontWeight: 700, color: "#10B981", marginTop: 2 }}>{item.change}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/signup")}
                className="w-full py-3.5 rounded-2xl font-bold text-white text-center cursor-pointer transition-all"
                style={{
                  background: "#1D64F2",
                  fontSize: 14,
                  boxShadow: "0 8px 24px rgba(29, 100, 242, 0.4)",
                }}
              >
                View All 2,400+ Offers →
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 2: How It Works ────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Sign Up Free",
      desc: "Create your affiliate account in minutes. No approval wait times, no hidden requirements.",
    },
    {
      num: "02",
      title: "Browse & Choose",
      desc: "Filter 2,400+ live offers by niche, payout, or conversion rate. Pick what fits your audience.",
    },
    {
      num: "03",
      title: "Promote & Drive Traffic",
      desc: "Use your custom tracking links across any channel — blog, email, social, or paid media.",
    },
    {
      num: "04",
      title: "Get Paid Weekly",
      desc: "Earnings hit your account every week via wire, PayPal, check, or crypto. No minimums.",
    },
  ]

  return (
    <section className="relative overflow-hidden section-py" style={{ background: "#050C20", fontFamily: FONT_INTER }}>
      <div className="section-container text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)" }}>
          <span style={{ color: "#34D399", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            ✦ HOW IT WORKS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 tracking-tight">
          Earn from your influence <br className="hidden sm:inline" /> in four steps
        </h2>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Stepper Connecting Line */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px]" style={{ background: "linear-gradient(90deg, #1D64F2 0%, #3B82F6 100%)", opacity: 0.3, zIndex: 0 }} />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              {/* Step Circle */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-base mb-6 shadow-lg"
                style={{
                  background: "#081B4B",
                  border: "2px solid #3B82F6",
                  color: "#FFFFFF",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                {step.num}
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: 17, fontWeight: 800, color: "#FFFFFF", marginBottom: 8 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.65, maxWidth: 240 }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 3: Affiliate Benefits ─────────────────────────────────────────

function BenefitsSection() {
  const rightBenefits = [
    {
      title: "Dedicated Affiliate Manager",
      desc: "Direct access to your dedicated account manager who helps optimize your campaigns, navigate payout bumps, and source exclusive offers.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "Lifetime Referral Commission",
      desc: "Refer other affiliates and earn 5% of their lifetime earnings — passive income that compounds over time.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      ),
    },
    {
      title: "Competitive Offers",
      desc: "2,400+ exclusive CPA & CPL offers across top-tier niches, set up with industry-leading payouts.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      title: "International Campaigns",
      desc: "Monetize traffic from 150+ countries with geo-targeted offers that maximize earnings from every visitor.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-py bg-slate-50/70" style={{ fontFamily: FONT_INTER }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center section-header-spacing">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3" style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563EB" }}>
              AFFILIATE BENEFITS
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>
            Built around your success
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Dark Card: Weekly Payments */}
          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-5 rounded-3xl p-7 sm:p-8 flex flex-col justify-start gap-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #071A3D 0%, #0B2F72 60%, #1D4ED8 100%)",
              boxShadow: "0 20px 50px rgba(7, 26, 61, 0.3)",
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/20 border border-blue-400/30 text-white font-bold text-xl mb-5">
                $
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF", marginBottom: 10 }}>
                Weekly Payments
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>
                Receive your earnings every week, without fail. We support wire transfers, PayPal, check, ACH, and cryptocurrency — no minimum thresholds, no delays.
              </p>
            </div>

            {/* Payout Table Mini Preview */}
            <div className="rounded-2xl p-4.5" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="space-y-3.5 text-xs">
                <div className="grid grid-cols-12 items-center text-white font-semibold pb-1.5 border-b border-white/10">
                  <span className="col-span-4 text-left" style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Period</span>
                  <span className="col-span-4 text-center" style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Amount</span>
                  <span className="col-span-4 text-right" style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Status</span>
                </div>
                <div className="grid grid-cols-12 items-center text-white font-semibold">
                  <span className="col-span-4 text-left">Week 43</span>
                  <span className="col-span-4 text-center font-bold">$2,845.20</span>
                  <div className="col-span-4 flex justify-end">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">PAID</span>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center text-white font-semibold">
                  <span className="col-span-4 text-left">Week 44</span>
                  <span className="col-span-4 text-center font-bold">$3,120.50</span>
                  <div className="col-span-4 flex justify-end">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/30">PAID</span>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center text-white font-semibold">
                  <span className="col-span-4 text-left">Week 45</span>
                  <span className="col-span-4 text-center font-bold">$4,059.21</span>
                  <div className="col-span-4 flex justify-end">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-sky-500/20 text-sky-300 font-bold border border-sky-400/30">PROCESSING</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rightBenefits.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(37,99,235,0.1)" }}
                className="rounded-3xl p-6 bg-white border border-slate-200/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: 16.5, fontWeight: 800, color: "#0F172A", marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Affiliates Reviews (Dark Navy) ──────────────────────────────

function ReviewsSection() {
  const reviews = [
    {
      stars: 5,
      text: `"I've tried 6 affiliate networks. Candid Leaders pays the best rates and actually gets back to you when something's wrong. Weekly payments are a game changer."`,
      name: "Jordan N.",
      role: "Email Marketer",
      avatar: "J",
    },
    {
      stars: 5,
      text: `"My affiliate manager found me three offers I would have missed on my own. My revenue jumped 40% in the first month alone."`,
      name: "Priya S.",
      role: "Content Creator",
      avatar: "P",
    },
    {
      stars: 5,
      text: `"The tracking is rock solid. Not a single discrepancy in 18 months. That's unheard of in this industry."`,
      name: "Carlos R.",
      role: "Media Buyer",
      avatar: "C",
    },
  ]

  return (
    <section className="py-24" style={{ background: "#050C20", fontFamily: FONT_INTER }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)" }}>
          <span style={{ color: "#34D399", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            ✦ AFFILIATES REVIEWS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 tracking-tight">
          Affiliates <span style={{ color: "#3B82F6" }}>love us</span> — here's why
        </h2>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {reviews.map((rev) => (
            <motion.div
              key={rev.name}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-7 bg-white flex flex-col justify-between"
              style={{ boxShadow: "0 20px 45px rgba(0,0,0,0.3)" }}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4" style={{ color: "#F59E0B" }}>
                  {"★".repeat(rev.stars)}
                </div>
                {/* Quote Text */}
                <p style={{ fontSize: 14, color: "#334155", lineHeight: 1.7, marginBottom: 20 }}>
                  {rev.text}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                  {rev.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#0F172A" }}>{rev.name}</div>
                  <div style={{ fontSize: 12, color: "#64748B" }}>{rev.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 3D Glassmorphism Icon Component (Minimal Blue Palette) ─────────────────

function Glass3DIcon({ type }: { type: string }) {
  const blueBg = "linear-gradient(135deg, rgba(59, 130, 246, 0.22) 0%, rgba(37, 99, 235, 0.08) 100%)"
  const blueBorder = "rgba(59, 130, 246, 0.35)"
  const blueGlow = "0 6px 16px rgba(37, 99, 235, 0.2)"
  const strokeBlue = "#2563EB"

  const icons: Record<string, React.ReactNode> = {
    GUIDE: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={strokeBlue} strokeWidth="2.2" strokeLinecap="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="rgba(59,130,246,0.2)" stroke={strokeBlue} strokeWidth="2.2" />
      </svg>
    ),
    VIDEO: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <polygon points="5 3 19 12 5 21 5 3" fill="rgba(59,130,246,0.25)" stroke={strokeBlue} strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
    ),
    "CASE STUDY": (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="12" width="4" height="8" rx="1.5" fill="rgba(59,130,246,0.25)" stroke={strokeBlue} strokeWidth="2" />
        <rect x="10" y="8" width="4" height="12" rx="1.5" fill="rgba(59,130,246,0.25)" stroke={strokeBlue} strokeWidth="2" />
        <rect x="17" y="4" width="4" height="16" rx="1.5" fill="rgba(59,130,246,0.35)" stroke={strokeBlue} strokeWidth="2" />
      </svg>
    ),
    WEBINAR: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" fill="rgba(59,130,246,0.25)" stroke={strokeBlue} strokeWidth="2" />
        <line x1="8" y1="21" x2="16" y2="21" stroke={strokeBlue} strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke={strokeBlue} strokeWidth="2" />
      </svg>
    ),
  }

  const iconElement = icons[type] || icons.GUIDE

  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-10 h-10 rounded-2xl flex items-center justify-center relative cursor-pointer flex-shrink-0"
      style={{
        background: blueBg,
        border: `1px solid ${blueBorder}`,
        boxShadow: `${blueGlow}, inset 0 1.5px 2px rgba(255,255,255,0.85)`,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Specular 3D Glass Sheen */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      {iconElement}
    </motion.div>
  )
}

// ─── Section 5: Resources ───────────────────────────────────────────────────

function ResourcesSection() {
  const navigate = useNavigate()

  const resources = [
    {
      tag: "GUIDE",
      tagColor: "bg-blue-50/90 text-blue-600 border-blue-200/80",
      title: "The 2026 Affiliate Marketing Blueprint",
      desc: "A step-by-step playbook for scaling your first CPA campaign from zero to $100/month.",
    },
    {
      tag: "VIDEO",
      tagColor: "bg-blue-50/90 text-blue-600 border-blue-200/80",
      title: "How to Pick the Right Offer for Your Audience",
      desc: "Our top affiliate managers walk you through offer selection and traffic matching strategies.",
    },
    {
      tag: "CASE STUDY",
      tagColor: "bg-blue-50/90 text-blue-600 border-blue-200/80",
      title: "From $800 to $48K/month with Email Marketing",
      desc: "Real numbers, real strategy. See how one affiliate scaled their income in 14 months.",
    },
    {
      tag: "WEBINAR",
      tagColor: "bg-blue-50/90 text-blue-600 border-blue-200/80",
      title: "Social Media Traffic Mastery for CPA Affiliates",
      desc: "Live session replay — learn how to drive compliant, high-converting traffic from Meta & TikTok.",
    },
  ]

  return (
    <section className="py-24 bg-slate-50/70" style={{ fontFamily: FONT_INTER }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3" style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563EB" }}>
                CANDID LEADERS RESOURCES
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>
              Learn, grow, and earn more
            </h2>
          </div>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); navigate("/blog") }}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 cursor-pointer"
          >
            View all resources →
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {resources.map((res) => (
            <motion.div
              key={res.title}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(37,99,235,0.1)" }}
              className="rounded-3xl p-6 bg-white border border-slate-200/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Tag Pill + 3D Glassmorphism Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${res.tagColor}`}>
                    {res.tag}
                  </span>
                  <Glass3DIcon type={res.tag} />
                </div>

                <h3 style={{ fontSize: 15.5, fontWeight: 800, color: "#0F172A", marginBottom: 10, lineHeight: 1.35 }}>
                  {res.title}
                </h3>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, marginBottom: 20 }}>
                  {res.desc}
                </p>
              </div>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate("/blog") }}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
              >
                Read more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 6: Bottom CTA Banner ───────────────────────────────────────────

function BottomCTABanner() {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-slate-50/70" style={{ fontFamily: FONT_INTER }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl p-8 sm:p-14 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #050C20 0%, #0B2F72 60%, #1D64F2 100%)",
            boxShadow: "0 25px 70px rgba(5, 12, 32, 0.4)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)" }}>
                <span style={{ color: "#34D399", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  ✦ START EARNING TODAY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                Your audience is an asset. <br />
                Start monetizing it.
              </h2>

              <p style={{ color: "rgba(255, 255, 255, 0.72)", fontSize: 15, lineHeight: 1.65 }} className="mb-8 max-w-lg">
                Join 250,000+ affiliates already earning through Candid Leaders. Signup takes under 2 minutes.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/signup")}
                  className="px-7 py-3.5 rounded-2xl font-extrabold bg-white text-slate-900 cursor-pointer shadow-lg transition-all"
                  style={{ fontSize: 14.5 }}
                >
                  Create Free Account →
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/signup")}
                  className="px-7 py-3.5 rounded-2xl font-extrabold text-white border border-white/30 cursor-pointer transition-all"
                  style={{ fontSize: 14.5, background: "transparent" }}
                >
                  Browse Offers First →
                </motion.button>
              </div>
            </div>

            {/* Right Checklist Card with Smooth Hover Transitions */}
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(96, 165, 250, 0.45)",
                boxShadow: "0 20px 45px rgba(0, 10, 35, 0.4)",
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="lg:col-span-5 bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-7 backdrop-blur-md space-y-4 cursor-pointer transition-colors duration-300 group"
            >
              {[
                "Free to join — no approval delays",
                "Weekly payments, your preferred method",
                "Dedicated manager from day one",
                "Access 2,400+ exclusive CPA offers",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3.5 text-white font-semibold text-sm group-hover:text-blue-100 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-400 font-bold text-xs group-hover:scale-110 group-hover:bg-emerald-500/30 transition-all duration-300">
                    ✓
                  </div>
                  <span className="leading-snug">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Main Page Assembly ──────────────────────────────────────────────────────

export default function AffiliatesLanding() {
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
      <HeroSection />
      <SubCategoryBar />
      <HowItWorksSection />
      <BenefitsSection />
      <ReviewsSection />
      <ResourcesSection />
      <BottomCTABanner />
      <Footer />
    </div>
  )
}
