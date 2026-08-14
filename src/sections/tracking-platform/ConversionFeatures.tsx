import { motion } from "framer-motion"

export default function ConversionFeatures() {
  const leftCards = [
    {
      title: "Real-time Analytics",
      desc: "Monitor clicks, conversions and revenue as they happen with live dashboards and instant insights.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Easy Integration",
      desc: "Seamlessly integrate with your favorite tools & tag managers in just a few clicks.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ]

  const rightCards = [
    {
      title: "First-party Tracking",
      desc: "Reliable and accurate tracking using first-party data for better attribution and higher accuracy.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Smart Alerts",
      desc: "Stay updated with real-time alerts for conversion, performance drops and campaign milestones.",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ]

  return (
    <section
      className="relative overflow-hidden section-py"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #081433 0%, #03081A 70%, #020817 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Particle Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.1) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none bg-blue-600/15 blur-[100px]" />

      <div className="section-container relative z-10">
        
        {/* Header */}
        <motion.div className="text-center section-header-spacing max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-xs font-bold tracking-wider uppercase text-[#4ADE80]">EVERYTHING YOU NEED TO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.18] tracking-tight mb-4">
            Track Every{" "}
            <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              Conversion.
            </span>
          </h2>
          <p className="text-base text-slate-300/80 font-normal">
            Powerful features to help you measure, optimize and scale with confidence.
          </p>
        </motion.div>

        {/* 3 Column Layout (Left Cards, Center Orbit, Right Cards) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* ── Left Cards ── */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-[420px]">
            {leftCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                whileHover={{ y: -6, borderColor: "rgba(96,165,250,0.4)" }}
                className="group rounded-3xl p-6 backdrop-blur-xl border flex items-start gap-4 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: "rgba(12, 23, 52, 0.75)",
                  borderColor: "rgba(96, 165, 250, 0.18)",
                  boxShadow: "0 16px 40px rgba(2, 8, 23, 0.4)",
                }}
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.2)] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300/80 font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Center 3D Orbit Pedestal Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative my-6 lg:my-0 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              
              {/* Outer Orbit Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-blue-400/25 border-dashed"
              />

              {/* Inner Orbit Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border border-blue-400/20 border-dashed"
              />

              {/* Floating Orbit Node Icons */}
              {[0, 72, 144, 216, 288].map((deg, i) => {
                const rad = (deg * Math.PI) / 180
                const r = 110
                const x = Math.cos(rad) * r
                const y = Math.sin(rad) * r

                return (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="absolute w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-400/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60A5FA]" />
                  </motion.div>
                )
              })}

              {/* Central Glowing 3D Glass Pedestal & Bar Chart */}
              <div className="relative z-10 w-32 h-32 sm:w-36 sm:h-36 rounded-3xl p-4 bg-gradient-to-b from-blue-600/40 via-blue-900/60 to-slate-950/90 border border-blue-400/40 backdrop-blur-xl flex flex-col items-center justify-center shadow-[0_0_45px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]">
                
                {/* 3D Glass Columns */}
                <div className="flex items-end gap-1.5 h-16 mb-2">
                  {[40, 65, 85, 55, 95].map((h, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ height: [`${h * 0.4}%`, `${h * 0.8}%`, `${h * 0.4}%`] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                      className="w-2.5 rounded-t-sm"
                      style={{
                        background: "linear-gradient(180deg, #60A5FA 0%, #1D4ED8 100%)",
                        boxShadow: "0 0 10px rgba(96,165,250,0.5)",
                      }}
                    />
                  ))}
                </div>

                <div className="text-[10px] font-extrabold text-blue-200 tracking-wider uppercase">
                  LIVE CONVERSIONS
                </div>
              </div>

            </div>
          </motion.div>

          {/* ── Right Cards ── */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-[420px]">
            {rightCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                whileHover={{ y: -6, borderColor: "rgba(96,165,250,0.4)" }}
                className="group rounded-3xl p-6 backdrop-blur-xl border flex items-start gap-4 transition-all duration-300 relative overflow-hidden"
                style={{
                  background: "rgba(12, 23, 52, 0.75)",
                  borderColor: "rgba(96, 165, 250, 0.18)",
                  boxShadow: "0 16px 40px rgba(2, 8, 23, 0.4)",
                }}
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.2)] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300/80 font-normal">
                    {card.desc}
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
