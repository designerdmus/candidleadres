import { motion } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"

export default function ConversionTagSection() {
  const steps = [
    { num: "01", text: "Paste tag in <head>" },
    { num: "02", text: "Configure conversion event" },
    { num: "03", text: "Verify firing in dashboard" },
  ]

  const stats = [
    {
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      val: "2min",
      sub: "Setup time",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M12 12c-2-2.5-4-4-6-4s-4 1.5-4 4 2 4 4 4 6-1.5 6-4zm0 0c2-2.5 4-4 6-4s4 1.5 4 4-2 4-4 4-6-1.5-6-4z" />
        </svg>
      ),
      val: "Free",
      sub: "Forever",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      val: "99.9%",
      sub: "Uptime",
    },
  ]

  return (
    <section
      className="relative overflow-hidden section-py"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, #0A1633 0%, #04091A 70%, #020817 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Dot grid texture & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none bg-blue-600/10 blur-[80px]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ── Left Side: Glass Card (Tag Widget) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-[480px]"
          >
            <motion.div
              whileHover={{ y: -6, borderColor: "rgba(96,165,250,0.4)" }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-6 sm:p-7 backdrop-blur-xl border relative transition-all duration-300"
              style={{
                background: "rgba(13, 25, 56, 0.8)",
                borderColor: "rgba(96, 165, 250, 0.2)",
                boxShadow: "0 20px 50px rgba(2, 8, 23, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-blue-600/20 border border-blue-400/30 text-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.3)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Candid Leaders Tag</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-semibold text-slate-400">v3.2.1</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-[#4ADE80] border border-emerald-500/30">
                      • Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Cards List */}
              <div className="flex flex-col gap-3 mb-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 4, borderColor: "rgba(96,165,250,0.35)" }}
                    className="flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      borderColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-xs font-bold text-blue-300">
                        {step.num}
                      </div>
                      <span className="text-sm font-semibold text-slate-200">{step.text}</span>
                    </div>

                    {/* Green Check Circle */}
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-[#4ADE80] shadow-[0_0_10px_rgba(74,222,128,0.3)]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Box inside Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-950/40 border border-blue-500/25">
                <span className="text-xs font-semibold text-slate-300">Events today</span>
                <span className="text-base font-extrabold text-blue-400 tracking-tight">
                  <AnimatedCounter value="24,812" />
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Side: Text & Highlights ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-xl text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-xs font-bold tracking-wider uppercase text-[#4ADE80]">CANDID LEADERS TAG</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-[1.2] mb-5 tracking-tight">
              Simple and free{" "}
              <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                conversion tracking.
              </span>
            </h2>

            {/* Paragraphs */}
            <p className="text-base leading-relaxed text-slate-300/90 mb-4 font-normal">
              First-time setting up conversion tracking? No problem. The Candid Leaders Tag is an effortless solution for integrating with our tracking platform. Simply place the tag on your website — done! You can tag a manager of your choice.
            </p>
            <p className="text-base leading-relaxed text-slate-300/90 mb-8 font-normal">
              Once the tag is placed, you will be able to easily report conversions by copy-pasting your postback URL whenever the desired action occurs.
            </p>

            {/* 3 Stat Highlights at Bottom */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((st, idx) => (
                <motion.div
                  key={st.sub}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * idx }}
                  whileHover={{ y: -4, borderColor: "rgba(96,165,250,0.4)" }}
                  className="flex items-center gap-3 p-3 rounded-2xl border bg-white/[0.02] border-white/10 backdrop-blur-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                    {st.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white tracking-tight">
                      <AnimatedCounter value={st.val} />
                    </div>
                    <div className="text-xs text-slate-400 font-medium">{st.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
