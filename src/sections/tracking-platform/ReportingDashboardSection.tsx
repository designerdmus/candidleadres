import { motion } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"

export default function ReportingDashboardSection() {
  const checklist = [
    "Detailed reporting interface — real-time granular breakdowns",
    "Accurate conversion tracking via first-party data",
    "Easy integration — works with all major tag managers",
    "Continual customer support from dedicated account managers",
  ]

  const summaryStats = [
    { label: "Total Clicks", val: "120,465" },
    { label: "Conversions", val: "8,854" },
    { label: "Revenue", val: "$378,094" },
    { label: "CTR", val: "7.41%" },
  ]

  const tableData = [
    { campaign: "FinanceApp Pro", clicks: "45,291", conv: "3,012", rev: "$183,216", ctr: "7.6%" },
    { campaign: "VPN Shield Elite", clicks: "31,044", conv: "2,250", rev: "$105,100", ctr: "7.4%" },
    { campaign: "FitTrack Plus", clicks: "22,310", conv: "1,644", rev: "$46,032", ctr: "7.4%" },
    { campaign: "TaxiHelper 2026", clicks: "18,320", conv: "1,108", rev: "$68,696", ctr: "6.0%" },
  ]

  return (
    <section
      className="relative overflow-hidden section-py"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #06122B 0%, #03081A 60%, #020817 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none bg-blue-600/10 blur-[90px]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Content Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-xl text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-xs font-bold tracking-wider uppercase text-[#4ADE80]">ADVERTISER DASHBOARD</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.18] mb-5 tracking-tight">
              Robust reporting{" "}
              <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                to optimize success.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed text-slate-300/90 mb-8 font-normal">
              Our advertiser dashboard provides granular in-depth reporting so you can examine the data behind every conversion. Measure and monitor each aspect of your campaigns' performance including clicks, leads, sales, and cost while seeing exactly how your campaigns are presented to affiliates and consumers.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-4">
              {checklist.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.2)] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-200/90 leading-snug pt-0.5">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Reporting Dashboard Table Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-[620px]"
          >
            <motion.div
              whileHover={{ y: -6, borderColor: "rgba(96,165,250,0.4)" }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-4 sm:p-7 backdrop-blur-xl border relative transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(10, 20, 48, 0.85)",
                borderColor: "rgba(96, 165, 250, 0.2)",
                boxShadow: "0 24px 60px rgba(2, 8, 23, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Card Title & Filter Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/10">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Campaign Performance</h3>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-600/20 text-blue-300 border border-blue-400/30 cursor-pointer hover:bg-blue-600/30 transition-colors">
                  Jan 2026 ▾
                </div>
              </div>

              {/* 4 Summary Stat Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
                {summaryStats.map((st, idx) => (
                  <motion.div
                    key={st.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * idx }}
                    whileHover={{ scale: 1.03, borderColor: "rgba(96,165,250,0.4)" }}
                    className="p-2.5 sm:p-3 rounded-2xl border text-center transition-all duration-300 overflow-hidden flex flex-col justify-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 mb-1 truncate">{st.label}</div>
                    <div className="text-xs sm:text-base font-bold text-white tracking-tight truncate">
                      <AnimatedCounter value={st.val} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Data Table */}
              <div className="rounded-2xl border overflow-x-auto" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                  <thead>
                    <tr style={{ background: "rgba(37, 99, 235, 0.15)" }} className="border-b border-white/10">
                      <th className="py-3 px-4 font-bold text-slate-300">Campaign</th>
                      <th className="py-3 px-4 font-bold text-slate-300">Clicks</th>
                      <th className="py-3 px-4 font-bold text-slate-300">Conversions</th>
                      <th className="py-3 px-4 font-bold text-slate-300">Revenue</th>
                      <th className="py-3 px-4 font-bold text-slate-300">CTR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, idx) => (
                      <motion.tr
                        key={row.campaign}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                        className="border-b border-white/5 transition-colors duration-200 hover:bg-blue-600/10"
                        style={{
                          background: idx % 2 === 0 ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.04)",
                        }}
                      >
                        <td className="py-3.5 px-4 font-bold text-white">{row.campaign}</td>
                        <td className="py-3.5 px-4 text-slate-300 font-medium">{row.clicks}</td>
                        <td className="py-3.5 px-4 text-slate-300 font-medium">{row.conv}</td>
                        <td className="py-3.5 px-4 font-extrabold text-blue-400 tracking-tight">{row.rev}</td>
                        <td className="py-3.5 px-4 text-slate-300 font-medium">{row.ctr}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
