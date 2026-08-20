import { useState } from "react"
import candidLogo from "@/imports/Candidleaders_Logo.png"

const E = "cubic-bezier(0.22,1,0.36,1)"

const footerLinks = {
  Product:   ["Features","Integrations","Pricing","Changelog","Roadmap"],
  Company:   ["About","Blog","Careers","Press","Partners"],
  Resources: ["Documentation","Help Center","API Reference","Community","Status"],
  Legal:     ["Privacy Policy","Terms of Service","Cookie Policy","GDPR","Security"],
}

export default function Footer() {
  const [inputFocused, setInputFocused] = useState(false)
  const [inputHovered, setInputHovered] = useState(false)

  return (
    <footer
      style={{
        position: "relative",
        background: "radial-gradient(circle at 50% 0%, #FCFCFD 0%, #F8F9FC 100%)",
        borderTop: "1px solid #E7EBF5",
        overflow: "hidden",
      }}
    >
      {/* Ambient Noise Overlay for realism */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.012'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          opacity: 0.7,
          zIndex: 1,
        }}
      />

      {/* Soft radial glow behind main areas */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="mx-auto px-6 md:px-12 lg:px-20 py-16 relative" style={{ maxWidth: 1280, zIndex: 2 }}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">

          {/* Brand + newsletter */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div
                className="inline-block px-3.5 py-2"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid #E7EBF5",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px -2px rgba(11, 31, 74, 0.08), 0 2px 6px -1px rgba(11, 31, 74, 0.04)",
                  transition: `transform 300ms ${E}, box-shadow 300ms ${E}`,
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)"
                  e.currentTarget.style.boxShadow = "0 12px 30px -4px rgba(11, 31, 74, 0.14), 0 4px 12px -2px rgba(11, 31, 74, 0.08)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 4px 20px -2px rgba(11, 31, 74, 0.08), 0 2px 6px -1px rgba(11, 31, 74, 0.04)"
                }}
              >
                <img src={candidLogo} alt="Candid Leaders" style={{ height: "46px", width: "auto", display: "block" }}/>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed mb-5" style={{ color: "#163A7A", opacity: 0.75 }}>
              Performance marketing intelligence for the modern growth team.
            </p>
            {/* Newsletter input and subscribe button stacked vertically */}
            <div className="flex flex-col gap-2.5 w-full max-w-[240px]">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3.5 py-2.5 rounded-xl text-sm outline-none min-w-0 placeholder-[#0B1F4A]/50"
                style={{
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(8px)",
                  border: inputFocused
                    ? "1px solid #3B82F6"
                    : inputHovered
                    ? "1px solid rgba(59, 130, 246, 0.4)"
                    : "1px solid #E7EBF5",
                  color: "#0B1F4A",
                  boxShadow: inputFocused
                    ? "0 0 0 3px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(11, 31, 74, 0.06)"
                    : inputHovered
                    ? "0 4px 12px rgba(11, 31, 74, 0.05)"
                    : "0 2px 8px rgba(11, 31, 74, 0.03)",
                  transition: `border-color 250ms ${E}, box-shadow 250ms ${E}, background-color 250ms ${E}`,
                }}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                onMouseEnter={() => setInputHovered(true)}
                onMouseLeave={() => setInputHovered(false)}
              />
              <button
                className="w-full px-4 py-2.5 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #0B1F4A 0%, #163A7A 100%)",
                  color: "white",
                  whiteSpace: "nowrap",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(11, 31, 74, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                  transition: `transform 280ms ${E}, box-shadow 280ms ${E}, filter 280ms ${E}`,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = "translateY(-2px)"
                  el.style.boxShadow = "0 8px 24px rgba(11, 31, 74, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3)"
                  el.style.filter = "brightness(1.08)"
                  const arrow = el.querySelector<HTMLElement>(".sub-arrow")
                  if (arrow) arrow.style.transform = "translateX(3px)"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "0 4px 12px rgba(11, 31, 74, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)"
                  el.style.filter = "brightness(1)"
                  const arrow = el.querySelector<HTMLElement>(".sub-arrow")
                  if (arrow) arrow.style.transform = "translateX(0)"
                }}
                onMouseDown={e => { e.currentTarget.style.transform = "translateY(0) scale(0.97)" }}
                onMouseUp={e => { e.currentTarget.style.transform = "translateY(-2px)" }}
              >
                Subscribe
                <svg
                  className="sub-arrow"
                  width="12" height="12" fill="none" viewBox="0 0 12 12"
                  style={{ transition: `transform 280ms ${E}` }}
                >
                  <path d="M2 6h8M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <div className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: "#0B1F4A" }}>{cat}</div>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a
                      href="#"
                      className="footer-link text-sm"
                      style={{
                        color: "rgba(22, 58, 122, 0.7)",
                        transition: `color 250ms ${E}`,
                        textDecoration: "none",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#0B1F4A")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(22, 58, 122, 0.7)")}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #E7EBF5" }}
        >
          <p className="text-sm" style={{ color: "#163A7A", opacity: 0.7, fontWeight: 500 }}>© 2026 Candid Leaders, Inc. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[
              {
                label: "Facebook",
                url: "https://facebook.com/candidleaders",
                viewBox: "0 0 24 24",
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              },
              {
                label: "LinkedIn",
                url: "https://linkedin.com/company/candidleaders",
                viewBox: "0 0 24 24",
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
              },
              {
                label: "X (Twitter)",
                url: "https://x.com/candidleaders",
                viewBox: "0 0 24 24",
                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              },
              {
                label: "Instagram",
                url: "https://instagram.com/candidleaders",
                viewBox: "0 0 24 24",
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              },
              {
                label: "YouTube",
                url: "https://youtube.com/@candidleaders",
                viewBox: "0 0 24 24",
                d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              },
            ].map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid #D0D7E5",
                  boxShadow: "0 2px 8px rgba(11, 31, 74, 0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background = "#2563EB"
                  el.style.borderColor = "#2563EB"
                  el.style.transform = "translateY(-3px)"
                  el.style.boxShadow = "0 8px 20px rgba(37, 99, 235, 0.35)"
                  const svg = el.querySelector("svg")
                  if (svg) svg.style.fill = "#FFFFFF"
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background = "rgba(255, 255, 255, 0.9)"
                  el.style.borderColor = "#D0D7E5"
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "0 2px 8px rgba(11, 31, 74, 0.04), inset 0 1px 0 rgba(255,255,255,0.9)"
                  const svg = el.querySelector("svg")
                  if (svg) svg.style.fill = "#0B1F4A"
                }}
              >
                <svg
                  width="15"
                  height="15"
                  fill="#0B1F4A"
                  viewBox={s.viewBox}
                  style={{ transition: "fill 250ms ease" }}
                >
                  <path d={s.d}/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
