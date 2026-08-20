import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import target3dImg from "@/imports/List Target.png"
import achivedImg from "@/imports/Achived.png"
import heroStageImg from "@/imports/hero-laptop-3d-clean.png"
import growthChart3dUltra from "@/imports/growth-chart-3d-ultra.png"
import ctaOrbImg from "@/imports/get-started-3d-hd.png"
import contactImg from "@/imports/Contact.png"

const FONT_INTER = "'Inter', sans-serif"

// ─── Section 1: Hero Section (Dark Blue Navy — Image 2 Design) ─────────────

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-center min-h-[580px] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20"
      style={{
        background: "linear-gradient(165deg, #050c20 0%, #07112c 50%, #04091a 100%)",
        fontFamily: FONT_INTER,
      }}
    >
      {/* Ambient Lighting Backglow Behind 3D Graphic */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "2%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, rgba(29, 100, 242, 0.28) 0%, rgba(45, 212, 191, 0.12) 40%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "-5%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
          filter: "blur(85px)",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── Left Content Column (Eyebrow, Heading, 2 Glass Cards) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 w-fit" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" style={{ boxShadow: "0 0 8px #34D399" }} />
              <span className="text-xs font-bold tracking-wider uppercase text-[#34D399]">ABOUT CANDID LEADERS</span>
            </div>

            {/* Main Heading matching Image 2 line breaks with #3B82F6 highlight */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-white leading-[1.14] mb-8 tracking-tight max-w-[640px]"
              style={{ fontFamily: FONT_INTER }}
            >
              We anticipate, evolve,<br className="hidden sm:inline" />
              and <span style={{ color: "#3B82F6" }}>think one step ahead</span><br className="hidden sm:inline" />
              of the industry.
            </h1>

            {/* Two Compact Glassmorphism Container Cards (WHAT WE DO / WHAT WE DELIVER) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">

              {/* CARD 1 — WHAT WE DO */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative rounded-xl p-4.5 sm:p-5 flex flex-col items-start gap-2.5 border overflow-hidden cursor-pointer group"
                style={{
                  background: "linear-gradient(145deg, rgba(12, 28, 62, 0.65) 0%, rgba(6, 16, 38, 0.8) 100%)",
                  borderColor: "rgba(56, 189, 248, 0.22)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Luminous Bottom Cyan Accent Glow Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #2DD4BF 50%, transparent 100%)",
                  }}
                />

                {/* Dark Glass Icon Square */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center relative transition-all duration-300 group-hover:border-[#2DD4BF]"
                  style={{
                    background: "rgba(7, 18, 44, 0.85)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  {/* Card 1 Icon: White 3-People Group Silhouette */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    <path d="M17.5 12c1.66 0 3-1.34 3-3s-1.34-3-3-3c-.35 0-.68.06-1 .17 1.22.84 2 2.23 2 3.83s-.78 2.99-2 3.83c.32.11.65.17 1 .17zm0 2c-1.3 0-3.41.6-4.7 1.48 1.54.89 2.7 2.15 3.19 3.52H21v-1c0-2.21-3.58-4-3.5-4z" opacity="0.85" />
                    <path d="M6.5 12c.35 0 .68-.06 1-.17-1.22-.84-2-2.23-2-3.83s.78-2.99 2-3.83c-.32-.11-.65-.17-1-.17-1.66 0-3 1.34-3 3s1.34 3 3 3zm0 2c-.08 0-2.2.02-3.5 1-1.3.98-1.5 2.5-1.5 3v1h5.51c.49-1.37 1.65-2.63 3.19-3.52C8.91 14.6 6.8 14 6.5 14z" opacity="0.85" />
                  </svg>
                </div>

                <div
                  style={{
                    fontFamily: FONT_INTER,
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                  }}
                >
                  WHAT WE DO
                </div>

                <p
                  style={{
                    fontFamily: FONT_INTER,
                    fontSize: 15,
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: 1.5,
                  }}
                >
                  We connect performance-driven advertisers with our network of 250,000+ vetted affiliate partners — delivering cost-per-action campaigns that generate real, measurable results with full transparency.
                </p>
              </motion.div>

              {/* CARD 2 — WHAT WE DELIVER */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative rounded-xl p-4.5 sm:p-5 flex flex-col items-start gap-2.5 border overflow-hidden cursor-pointer group"
                style={{
                  background: "linear-gradient(145deg, rgba(12, 28, 62, 0.65) 0%, rgba(6, 16, 38, 0.8) 100%)",
                  borderColor: "rgba(56, 189, 248, 0.22)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Luminous Bottom Cyan Accent Glow Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #2DD4BF 50%, transparent 100%)",
                  }}
                />

                {/* Dark Glass Icon Square */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center relative transition-all duration-300 group-hover:border-[#2DD4BF]"
                  style={{
                    background: "rgba(7, 18, 44, 0.85)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                >
                  {/* Card 2 Icon: Target/Bullseye with Arrow Hitting the Center */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" stroke="#38BDF8" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" stroke="#FFFFFF" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="1.5" fill="#38BDF8" stroke="#38BDF8" />
                    <path d="M19 5L12 12" stroke="#FFFFFF" strokeWidth="2.2" />
                    <path d="M19 5h-4" stroke="#FFFFFF" strokeWidth="2" />
                    <path d="M19 5v4" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </div>

                <div
                  style={{
                    fontFamily: FONT_INTER,
                    fontSize: 16,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                  }}
                >
                  WHAT WE DELIVER
                </div>

                <p
                  style={{
                    fontFamily: FONT_INTER,
                    fontSize: 15,
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: 1.5,
                  }}
                >
                  That performance marketing experience means nothing if it isn't accompanied by present-day proficiency. We're dedicated to developing and perfecting our network's features daily, so you always have an edge.
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* ── Right Column: 3D Bar Chart Stage with Atomic Rings & Spheres (Image 2) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center relative py-6"
          >
            {/* Atomic Orbit Ellipse Rings SVG */}
            <svg
              aria-hidden="true"
              className="absolute inset-[-40px] w-[calc(100%+80px)] h-[calc(100%+80px)] pointer-events-none z-0"
              viewBox="0 0 500 500"
              fill="none"
            >
              {/* Ellipse Orbit Ring 1 */}
              <ellipse
                cx="250"
                cy="250"
                rx="210"
                ry="120"
                stroke="rgba(56, 189, 248, 0.35)"
                strokeWidth="1.2"
                transform="rotate(-20 250 250)"
              />
              {/* Ellipse Orbit Ring 2 */}
              <ellipse
                cx="250"
                cy="250"
                rx="220"
                ry="110"
                stroke="rgba(59, 130, 246, 0.28)"
                strokeWidth="1.2"
                transform="rotate(35 250 250)"
              />
              {/* Ellipse Orbit Ring 3 */}
              <ellipse
                cx="250"
                cy="250"
                rx="190"
                ry="130"
                stroke="rgba(45, 212, 191, 0.25)"
                strokeWidth="1"
                transform="rotate(-55 250 250)"
              />

              {/* Orbit Sparkle Particles */}
              <circle cx="90" cy="180" r="3" fill="#2DD4BF" />
              <circle cx="410" cy="310" r="4" fill="#38BDF8" className="animate-pulse" />
              <circle cx="340" cy="110" r="2.5" fill="#60A5FA" />
              <circle cx="160" cy="390" r="3.5" fill="#38BDF8" />
            </svg>

            {/* Floating 3D Glossy Blue Spheres at Various Angles */}
            {/* Sphere 1: Top-Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-10px] top-[10%] w-12 h-12 rounded-full pointer-events-none z-30 shadow-[0_10px_25px_rgba(29,100,242,0.6)]"
              style={{
                background: "radial-gradient(circle at 35% 35%, #93C5FD 0%, #3B82F6 40%, #1D4ED8 100%)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            />

            {/* Sphere 2: Mid-Left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-[-25px] top-[40%] w-9 h-9 rounded-full pointer-events-none z-30 shadow-[0_8px_20px_rgba(29,100,242,0.5)]"
              style={{
                background: "radial-gradient(circle at 35% 35%, #BFDBFE 0%, #3B82F6 45%, #1E40AF 100%)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            />

            {/* Sphere 3: Lower-Right Large Sphere */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[5px] bottom-[8%] w-16 h-16 rounded-full pointer-events-none z-30 shadow-[0_14px_35px_rgba(29,100,242,0.7)]"
              style={{
                background: "radial-gradient(circle at 35% 35%, #DBEAFE 0%, #2563EB 40%, #172554 100%)",
                border: "1px solid rgba(255, 255, 255, 0.45)",
              }}
            />

            {/* Glass Profile Badge Overlay (Top Left of Graphic) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[5px] top-[5%] z-20 rounded-2xl p-3.5 px-4 flex items-center gap-3 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-white/20"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
              }}
            >
              <div className="w-9 h-9 rounded-full bg-blue-400/20 border border-blue-300/40 flex items-center justify-center text-blue-200 font-bold text-xs">
                👤
              </div>
              <div className="space-y-1">
                <div className="w-16 h-2 rounded bg-white/40" />
                <div className="w-10 h-1.5 rounded bg-white/20" />
              </div>
            </motion.div>

            {/* Main 3D Growth Bar Chart Stage */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[460px] flex items-center justify-center z-10"
            >
              <img
                src={growthChart3dUltra}
                alt="3D Growth Bar Chart Stage with Glass Cards"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_30px_60px_rgba(0,10,35,0.85)]"
                style={{ filter: "brightness(1.06) contrast(1.08)" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 2: Our Story Section (Light Background) ───────────────────────

function OurStorySection() {
  return (
    <section className="section-py bg-white" style={{ fontFamily: FONT_INTER }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: 3D Target Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-6" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563EB", fontFamily: FONT_INTER }}>
                OUR STORY
              </span>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[360px] flex items-center justify-center py-4"
            >
              <img
                src={achivedImg}
                alt="3D Target with Dart and Growth Bars"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(37,99,235,0.15)]"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Story Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 style={{ fontSize: "clamp(26px, 3.2vw, 38px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 24, fontFamily: FONT_INTER }}>
              As an originator, we've not only adapted to performance marketing's continual evolution — we've influenced its direction.
            </h2>

            <div className="space-y-5" style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.75, fontFamily: FONT_INTER }}>
              <p>
                We also know that experience means nothing if it isn't accompanied by present-day proficiency. That's why we remain dedicated to developing and perfecting our network's features on a daily basis — because standing still in this industry means falling behind.
              </p>
              <p>
                Since our founding, we've paid out over $1 billion to our affiliates, served hundreds of global advertisers across every major vertical, and built technology that sets the standard for conversion tracking, fraud prevention, and campaign intelligence.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 3: Our Values Section (Light Off-White) ──────────────────────

function OurValuesSection() {
  const values = [
    {
      title: "Results First",
      desc: "Every decision we make is anchored in performance outcomes. We measure success by the revenue our clients and partners generate.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      ),
    },
    {
      title: "Constant Innovation",
      desc: "We invest heavily in technology — tracking, fraud direction, AI optimization — so our network stays ahead of what the market demands.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
    },
    {
      title: "Earned Trust",
      desc: "Transparent reporting, honest communication, and no hidden fees. Our relationships are built on accountability, not contracts.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Partner Obsessed",
      desc: "Affiliates and advertisers aren't clients — they're partners. Their growth is our growth. We're only successful when they are.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Global by Default",
      desc: "With 120+ countries and campaigns in every major vertical, we think internationally from day one, not as an afterthought.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      title: "Data Driven",
      desc: "Gut feelings don't scale. Every optimization, every recommendation, and every strategic call is backed by real campaign data.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-slate-50/70" style={{ fontFamily: FONT_INTER }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563EB", fontFamily: FONT_INTER }}>
              OUR VALUES
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em", fontFamily: FONT_INTER }}>
            What drives everything we do
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val) => (
            <motion.div
              key={val.title}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(37,99,235,0.1)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-3xl p-7 bg-white border border-slate-200/80 transition-all flex flex-col justify-between"
              style={{ fontFamily: FONT_INTER }}
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0F172A", marginBottom: 10, fontFamily: FONT_INTER }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.65, fontFamily: FONT_INTER }}>
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Leadership Team Section (Dark Blue Navy) ────────────────────

function LeadershipSection() {
  const team = [
    {
      initials: "AM",
      name: "Alex Marchetti",
      role: "Chief Executive Officer",
      desc: "Alex has 15+ years of experience in performance marketing, having built and scaled several affiliate networks before founding Candid Leaders. His vision for transparent, technology-first affiliate marketing is the foundation of everything we do.",
    },
    {
      initials: "SK",
      name: "Sarah Kim",
      role: "Chief Marketing Officer",
      desc: "Sarah leads our engineering team with a background spanning ad-tech infrastructure and anti-fraud systems. She architected our fraud-detection engine and the tracking platform that processes 200+ events per month.",
    },
    {
      initials: "DO",
      name: "David Okafor",
      role: "VP of Affiliate Relations",
      desc: "David manages our global affiliate success team and has personally onboarded over 10,000 affiliates. His deep knowledge of every major vertical channel means our partners get guidance that actually moves the needle.",
    },
    {
      initials: "PN",
      name: "Priya Nair",
      role: "VP of Advertiser Growth",
      desc: "Priya leads advertiser partnerships and has helped launch over 1,500 campaigns across finance, health, software, and e-commerce. She builds win-win structures and specializes in performance strategy for growth-stage brands.",
    },
  ]

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #020716 0%, #061438 50%, #03081A 100%)",
        fontFamily: FONT_INTER,
      }}
    >
      {/* Background Lighting & Radial Spotlights */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-5%",
          width: 650,
          height: 650,
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, rgba(29, 100, 242, 0.3) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "-5%",
          width: 550,
          height: 550,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)",
          filter: "blur(85px)",
        }}
      />

      {/* Luminous Glowing Waves & Particle Star Nodes (Matching Reference Image) */}
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60">
        {/* Wave Curves Sweeping Bottom-Left */}
        <path d="M -100,450 C 150,300 450,550 750,350 C 950,220 1250,380 1500,280" fill="none" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.8" />
        <path d="M -50,500 C 200,350 500,600 800,400 C 1000,270 1300,430 1550,330" fill="none" stroke="rgba(37, 99, 235, 0.25)" strokeWidth="1.2" />
        <path d="M -150,400 C 100,250 400,500 700,300 C 900,170 1200,330 1450,230" fill="none" stroke="rgba(96, 165, 250, 0.2)" strokeWidth="1" strokeDasharray="6 8" />

        {/* Luminous Glowing Star Nodes */}
        <circle cx="150" cy="380" r="3.5" fill="#38BDF8" className="animate-pulse" />
        <circle cx="480" cy="510" r="2" fill="#60A5FA" opacity="0.6" />
        <circle cx="950" cy="220" r="3" fill="#38BDF8" className="animate-pulse" />
        <circle cx="1380" cy="310" r="2.5" fill="#93C5FD" opacity="0.7" />
        <circle cx="1450" cy="110" r="3" fill="#38BDF8" opacity="0.8" />
        <circle cx="80" cy="180" r="2" fill="#60A5FA" opacity="0.5" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
            style={{ fontFamily: FONT_INTER }}
          >
            <div className="mb-4">
              <span
                style={{
                  color: "#38BDF8",
                  fontSize: 11.5,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontFamily: FONT_INTER,
                }}
              >
                LEADERSHIP TEAM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight tracking-tight" style={{ fontFamily: FONT_INTER }}>
              The people building the future of performance marketing
            </h2>
          </motion.div>

          {/* Right Column: 2x2 Grid of Team Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  borderColor: "rgba(56, 189, 248, 0.45)",
                  backgroundColor: "rgba(14, 32, 70, 0.75)",
                  boxShadow: "0 25px 50px rgba(0, 10, 35, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl p-6 sm:p-7 relative overflow-hidden border cursor-pointer group transition-colors duration-300"
                style={{
                  background: "linear-gradient(145deg, rgba(12, 28, 64, 0.6) 0%, rgba(6, 16, 40, 0.75) 100%)",
                  borderColor: "rgba(56, 189, 248, 0.18)",
                  backdropFilter: "blur(12px)",
                  fontFamily: FONT_INTER,
                }}
              >
                {/* Subtle Hover Backlight Flash */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <div className="flex items-center gap-3.5 mb-4 relative z-10">
                  {/* 3D Glossy Blue Sphere Avatar Badge */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-sm text-white shadow-[0_6px_20px_rgba(29,100,242,0.6)] group-hover:scale-105 transition-transform duration-300 relative overflow-hidden flex-shrink-0"
                    style={{
                      background: "radial-gradient(circle at 35% 35%, #60A5FA 0%, #2563EB 50%, #1D4ED8 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.35)",
                      fontFamily: FONT_INTER,
                    }}
                  >
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-white/40 rounded-t-full pointer-events-none" />
                    <span>{member.initials}</span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: 16.5, fontWeight: 800, color: "#FFFFFF", fontFamily: FONT_INTER, lineHeight: 1.2 }}>{member.name}</h3>
                    <div style={{ fontSize: 11.5, color: "#38BDF8", fontWeight: 700, fontFamily: FONT_INTER, marginTop: 2 }}>{member.role}</div>
                  </div>
                </div>

                <p className="relative z-10" style={{ fontSize: 13, color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.65, fontFamily: FONT_INTER }}>
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Milestones Section (Light Off-White) ────────────────────────

function MilestonesSection() {
  const milestones = [
    {
      year: "2004",
      title: "Founded",
      desc: "Candid Leaders launched with a team of 4 and 12 advertiser partners.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      ),
    },
    {
      year: "2008",
      title: "$100M Paid",
      desc: "Crossed $100M in affiliate payouts within our first four years.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      year: "2015",
      title: "FraudBlock™",
      desc: "Launched our proprietary AI-powered fraud detection engine.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      year: "2019",
      title: "100+ Countries",
      desc: "Expanded global network coverage to over 100 countries.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      year: "2022",
      title: "$1B+ Paid",
      desc: "Surpassed $1 billion in total affiliate earnings paid out.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
    {
      year: "2026",
      title: "250K+ Affiliates",
      desc: "Reached 250,000 active affiliates across all verticals.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 1 3-3.87" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-slate-50/70" style={{ fontFamily: FONT_INTER }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3" style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.18)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563EB", fontFamily: FONT_INTER }}>
              MILESTONES
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em", fontFamily: FONT_INTER }}>
            Two decades of growth
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((ms) => (
            <motion.div
              key={ms.year + ms.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/80 hover:border-sky-400/40 hover:bg-[#050E28] transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-[0_20px_45px_rgba(5,14,40,0.45)] relative overflow-hidden"
              style={{ fontFamily: FONT_INTER }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100/60 group-hover:bg-sky-400/15 group-hover:border-sky-400/35 flex items-center justify-center text-[#2563EB] group-hover:text-[#38BDF8] transition-all duration-300">
                    {ms.icon}
                  </div>
                  <span className="text-xs font-extrabold text-[#2563EB] group-hover:text-[#38BDF8] transition-colors duration-300" style={{ fontFamily: FONT_INTER }}>
                    {ms.year}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-white mb-2 transition-colors duration-300" style={{ fontFamily: FONT_INTER }}>
                  {ms.title}
                </h3>
                <p className="text-[13px] text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors duration-300" style={{ fontFamily: FONT_INTER }}>
                  {ms.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 6: Final CTA Section (Dark Blue Container) ─────────────────────

function FinalCTASection() {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-slate-50/70" style={{ fontFamily: FONT_INTER }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          whileHover={{ y: -3, scale: 1.002 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden cursor-pointer group"
          style={{
            background: "linear-gradient(135deg, #020718 0%, #061846 50%, #020922 100%)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
          }}
        >
          {/* Background Ambient Radial Backglow */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              top: "-20%",
              right: "15%",
              width: 550,
              height: 550,
              borderRadius: "50%",
              background: "radial-gradient(circle at 50% 50%, rgba(29, 100, 242, 0.25) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 75%)",
              filter: "blur(80px)",
            }}
          />

          {/* Sweeping Luminous Wave Lines & Node Dots */}
          <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50">
            <path d="M -50,140 C 200,60 500,200 800,100 C 1000,40 1200,150 1400,80" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="1.5" />
            <path d="M 0,180 C 250,100 550,240 850,140 C 1050,80 1250,190 1450,120" fill="none" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" strokeDasharray="5 7" />

            <circle cx="480" cy="180" r="3" fill="#38BDF8" className="animate-pulse" />
            <circle cx="850" cy="140" r="2.5" fill="#60A5FA" opacity="0.7" />
            <circle cx="1100" cy="70" r="3.5" fill="#38BDF8" className="animate-pulse" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="mb-4">
                <span
                  style={{
                    color: "#38BDF8",
                    fontSize: 11.5,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontFamily: FONT_INTER,
                  }}
                >
                  START GROWING
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white mb-3.5 leading-tight tracking-tight" style={{ fontFamily: FONT_INTER }}>
                Ready to join the network?
              </h2>

              <p style={{ color: "rgba(255, 255, 255, 0.78)", fontSize: 14.5, lineHeight: 1.65, fontFamily: FONT_INTER }} className="max-w-xl">
                Whether you're an advertiser looking to scale or an affiliate ready to earn — we're built for you.
              </p>
            </div>

            {/* Center Buttons */}
            <div className="lg:col-span-3 flex flex-wrap lg:flex-nowrap items-center justify-start lg:justify-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/signup")}
                className="px-6 py-3.5 rounded-2xl font-extrabold bg-white text-blue-600 cursor-pointer transition-all flex items-center gap-2 whitespace-nowrap text-sm"
                style={{ fontFamily: FONT_INTER }}
              >
                Get Started →
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2, backgroundColor: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/contact")}
                className="px-6 py-3.5 rounded-2xl font-extrabold text-white border border-white/25 cursor-pointer backdrop-blur-md transition-all whitespace-nowrap text-sm"
                style={{ background: "rgba(255, 255, 255, 0.08)", fontFamily: FONT_INTER }}
              >
                Talk to Sales
              </motion.button>
            </div>

            {/* Far Right Graphic: Connected Network Nodes Graphic (Contact.png) */}
            <div className="hidden lg:flex lg:col-span-3 justify-end items-center relative min-h-[180px]">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex items-center justify-center w-full"
              >
                <img
                  src={contactImg}
                  alt="Connected Network Nodes Illustration"
                  className="w-full max-w-[280px] h-auto object-contain pointer-events-none"
                  style={{ filter: "brightness(1.08) contrast(1.05)" }}
                />
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Main Page Assembly ──────────────────────────────────────────────────────

export default function AboutLanding() {
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
      <OurStorySection />
      <OurValuesSection />
      <LeadershipSection />
      <MilestonesSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
