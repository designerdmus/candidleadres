import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

import growthChart3dTransparent from "@/imports/growth-chart-3d-transparent.png"
import pieChart3dTransparent from "@/imports/pie-chart-3d-transparent.png"

interface CTASectionProps {
  onNavigateSignup?: () => void
}

export default function CTASection({ onNavigateSignup }: CTASectionProps) {
  const navigate = useNavigate()

  const handleAction = () => {
    if (onNavigateSignup) {
      onNavigateSignup()
    } else {
      navigate("/signup")
    }
  }

  return (
    <section className="relative overflow-hidden w-full py-20 lg:py-28 bg-[#071A3D]">
      {/* Subtle radial ambient glows behind illustrations */}
      <div
        className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* DESKTOP: Three-Column Layout | MOBILE: Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-6">

          {/* ── LEFT 3D GROWTH ILLUSTRATION (Desktop Col 3) ── */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-end">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[280px] xl:max-w-[320px] h-[280px] xl:h-[320px] flex items-center justify-center"
            >
              <img
                src={growthChart3dTransparent}
                alt="3D Growth Illustration"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,10,35,0.6)]"
                style={{ filter: "brightness(1.06) contrast(1.06)" }}
              />
            </motion.div>
          </div>

          {/* ── CENTER CONTENT (Desktop Col 6) ── */}
          <div className="lg:col-span-6 flex flex-col items-center text-center w-full max-w-[680px] mx-auto px-2">

            {/* 1. SMALL LABEL (Eyebrow, subtle, compact, NOT a button) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-blue-300">
                EXPERT PERFORMANCE STRATEGY
              </span>
            </div>

            {/* 2. MAIN HEADLINE */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-3 text-center max-w-[650px]">
              We've been shaping this<br />
              industry since 2004.
            </h2>

            {/* 3. SUPPORTING HEADLINE */}
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#3B82F6] tracking-tight leading-[1.2] mb-5 text-center">
              Let us design your strategy.
            </h3>

            {/* 4. DESCRIPTION */}
            <p className="text-sm sm:text-base font-normal text-white/80 leading-relaxed max-w-[540px] mb-8 text-center">
              We know what makes performance marketing strategies successful through first-hand experience.
            </p>

            {/* 5. PRIMARY CTA BUTTON */}
            <motion.button
              onClick={handleAction}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm cursor-pointer transition-all duration-300 bg-[#2563EB] hover:bg-blue-600 shadow-[0_8px_24px_rgba(37,99,235,0.45)] hover:shadow-[0_16px_36px_rgba(37,99,235,0.6)] border-none"
            >
              <span>Advertise with Candid Leaders</span>
              <svg
                className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          {/* ── RIGHT 3D ANALYTICS ILLUSTRATION (Desktop Col 3) ── */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-start">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative z-10 w-full max-w-[280px] xl:max-w-[320px] h-[280px] xl:h-[320px] flex items-center justify-center"
            >
              <img
                src={pieChart3dTransparent}
                alt="3D Analytics Illustration"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,10,35,0.6)]"
                style={{ filter: "brightness(1.06) contrast(1.06)" }}
              />
            </motion.div>
          </div>

          {/* ── MOBILE ONLY: Stacked Illustrations Below CTA ── */}
          <div className="flex lg:hidden flex-col items-center gap-6 mt-4 w-full">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[240px] h-[220px] flex items-center justify-center"
            >
              <img
                src={growthChart3dTransparent}
                alt="3D Growth Illustration"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_16px_32px_rgba(0,10,35,0.5)]"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="w-full max-w-[240px] h-[220px] flex items-center justify-center"
            >
              <img
                src={pieChart3dTransparent}
                alt="3D Analytics Illustration"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_16px_32px_rgba(0,10,35,0.5)]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
