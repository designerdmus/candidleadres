import { motion } from "framer-motion"

export default function PlatformCapabilities() {
  const capabilities = [
    {
      title: "Detailed Reporting Interface",
      desc: "View conversions in real-time to measure your campaign performance and marketing ROI across every dimension.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Accurate Conversion Tracking",
      desc: "The Candid Leaders Tag uses first-party data to track conversions — much more reliable than pixel-based tracking.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: "Easy Integration",
      desc: "Add the Candid Leaders Tag to your site and start reporting conversions. Already have tracking in place? We integrate with all popular trackers.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 100-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: "Continual Customer Support",
      desc: "Dedicated account managers are there to help at every step — from setting up tracking to answering any questions about the platform.",
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      className="relative overflow-hidden section-py"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #0A1738 0%, #040A1C 70%, #020817 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none bg-blue-600/10 blur-[100px]" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="section-container relative z-10">
        
        {/* Centered Section Header */}
        <motion.div
          className="text-center section-header-spacing max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 bg-emerald-500/10 border border-emerald-500/30">
            <span className="text-xs font-bold tracking-wider uppercase text-[#4ADE80]">PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.18] tracking-tight">
            Built for advertisers who mean business
          </h2>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 * idx, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, borderColor: "rgba(96,165,250,0.45)" }}
              className="group rounded-3xl p-6 sm:p-7 backdrop-blur-xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              style={{
                background: "rgba(12, 23, 52, 0.75)",
                borderColor: "rgba(96, 165, 250, 0.18)",
                boxShadow: "0 16px 40px rgba(2, 8, 23, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Card Top Light Flare on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Box */}
                <div className="w-13 h-13 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center mb-6 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {cap.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-300/80 font-normal">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
