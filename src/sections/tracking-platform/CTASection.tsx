import { motion } from "framer-motion"

export default function CTASection({ onNavigateSignup }: { onNavigateSignup?: () => void }) {
  return (
    <section
      className="relative overflow-hidden section-py"
      style={{
        background: "radial-gradient(ellipse at 50% 100%, #0A1B42 0%, #040A1C 60%, #020817 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none bg-blue-600/15 blur-[100px]" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-xl text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-xs font-bold tracking-wider uppercase text-[#4ADE80]">GET STARTED</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.15] mb-5 tracking-tight">
              Start tracking every conversion{" "}
              <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                that matters to your brand.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-slate-300/90 mb-8 font-normal">
              {"We've been shaping this industry since 2004 and we know what makes performance marketing strategies successful."}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Button */}
              <motion.a
                href="#"
                onClick={(e) => { e.preventDefault(); if (onNavigateSignup) onNavigateSignup() }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.6)] transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                <span className="relative z-10">Advertise with Candid Leaders</span>
                <svg
                  className="w-3.5 h-3.5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>

              {/* Secondary Button */}
              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-slate-200 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                View Documentation
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right 3D Dashboard & Plant Illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center lg:justify-end w-full max-w-[440px]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full rounded-3xl p-6 backdrop-blur-xl border relative shadow-[0_24px_60px_rgba(2,8,23,0.6)]"
              style={{
                background: "rgba(10, 22, 50, 0.85)",
                borderColor: "rgba(96, 165, 250, 0.25)",
              }}
            >
              {/* Window Controls Dot Header */}
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-auto text-[10px] text-slate-400 font-mono bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                  dashboard.candidleaders.com
                </div>
              </div>

              {/* Glowing Bar Chart Columns */}
              <div className="flex items-end gap-2 h-24 mb-6 px-2">
                {[35, 55, 45, 75, 60, 90, 70, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.08 }}
                    className="flex-1 rounded-t-sm relative group"
                    style={{
                      background: i === 7 ? "linear-gradient(180deg, #60A5FA 0%, #2563EB 100%)" : "rgba(96,165,250,0.25)",
                      boxShadow: i === 7 ? "0 0 12px rgba(96,165,250,0.6)" : "none",
                    }}
                  />
                ))}
              </div>

              {/* Circular Progress & Plant Row */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  {/* Donut Progress Circle */}
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <svg width="56" height="56" className="transform -rotate-90">
                      <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                      <motion.circle
                        cx="28"
                        cy="28"
                        r="22"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="6"
                        strokeDasharray="138"
                        strokeDashoffset="38"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 138 }}
                        whileInView={{ strokeDashoffset: 38 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute text-xs font-bold text-white">72%</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Campaign Progress</div>
                    <div className="text-[11px] font-semibold text-[#4ADE80] mt-0.5">▲ +18.5% this month</div>
                  </div>
                </div>

                {/* 3D Plant Decorative Graphic */}
                <div className="text-3xl filter drop-shadow-[0_0_12px_rgba(74,222,128,0.4)] opacity-90">
                  🪴
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
