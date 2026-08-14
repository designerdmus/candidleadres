import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import candidLogo from "@/imports/Candidleaders_Logo.png"

const E = "cubic-bezier(0.22,1,0.36,1)"

interface NavItem {
  name: string
  path: string
  hasDropdown?: boolean
}

export default function Navbar({
  onNavigateSignup,
  onNavigateLanding
}: {
  onNavigateSignup?: () => void;
  onNavigateLanding?: () => void;
}) {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hoverPos, setHoverPos] = useState<{ [key: string]: { x: number; y: number } }>({})

  const navRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const location = useLocation()
  const navigate = useNavigate()

  // ── Mouse tilt effect ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy

      setTilt({
        x: dx * 4,
        y: dy * 4
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // ── Click-away handler & Escape key listener ──────────────────────────────
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const navItems: NavItem[] = [
    { name: "Advertisers", path: "/advertisers", hasDropdown: true },
    { name: "Affiliates", path: "/affiliates" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ]

  // Detect active item based on current pathname
  const currentPath = location.pathname
  const activeItemName = navItems.find(item => 
    item.path === currentPath || 
    (item.name === "Advertisers" && (currentPath.startsWith("/advertisers") || currentPath === "/tracking-platform" || currentPath === "/contact-advertisers"))
  )?.name || ""

  const handleItemClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault()
    if (item.hasDropdown) {
      setActiveDropdown(prev => prev === item.name ? null : item.name)
      return
    }
    setActiveDropdown(null)
    navigate(item.path)
  }

  const handleItemMouseMove = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setHoverPos(prev => ({
      ...prev,
      [name]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }))
  }

  const advertisersItems = [
    {
      title: "Tracking Platform",
      path: "/tracking-platform",
      desc: "Sub-second event capture & multi-touch attribution.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    },
    {
      title: "Contact Advertisers",
      path: "/advertisers",
      desc: "Get in touch with our top tier performance advertisers.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
  ]

  return (
    <nav
      ref={navRef}
      className="fixed top-[20px] left-0 right-0 z-50 flex justify-center nav-header-float pointer-events-none"
      style={{
        transform: `translate3d(${tilt.x}px, ${tilt.y}px, 0) rotateX(${tilt.y * -0.5}deg) rotateY(${tilt.x * 0.5}deg)`,
        transition: "transform 200ms cubic-bezier(0.1, 0.8, 0.3, 1)",
        willChange: "transform",
      }}
    >
      <div
        className="w-full max-w-6xl mx-auto px-6 sm:px-8 rounded-[24px] py-0 flex items-center justify-between border border-slate-100 bg-white pointer-events-auto relative"
        style={{
          boxShadow: `
            0 16px 40px rgba(8, 31, 92, 0.12), 
            0 2px 6px rgba(0, 0, 0, 0.04)
          `
        }}
      >
        {/* ── Logo Capsule ── */}
        <div
          className="flex items-center rounded-full px-3 py-1.5 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden"
          onClick={() => {
            if (onNavigateLanding) onNavigateLanding()
            navigate("/")
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={candidLogo}
            alt="CandidLeaders"
            style={{
              height: "48px", width: "auto", display: "block",
            }}
          />
        </div>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-2 relative">
          {navItems.map(item => {
            const isActive = activeItemName === item.name
            const isDropdownOpen = activeDropdown === item.name
            const pos = hoverPos[item.name] || { x: 50, y: 20 }

            return (
              <div
                key={item.name}
                className="relative py-3"
              >
                <a
                  href={item.path}
                  onClick={(e) => handleItemClick(e, item)}
                  onMouseMove={(e) => handleItemMouseMove(e, item.name)}
                  className={`text-sm tracking-wide flex items-center gap-1.5 py-2 px-4 rounded-full relative z-10 block transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isActive ? "font-semibold hover:translate-y-0 overflow-hidden shimmer-btn-sweep" : "font-medium hover:-translate-y-[3px]"
                  }`}
                  style={{
                    color: isActive ? "#FFFFFF" : (isDropdownOpen ? "#2563EB" : "#081F5C"),
                    textDecoration: "none",
                  }}
                >
                  <span className="relative z-10">{item.name}</span>

                  {item.hasDropdown && (
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none" className="relative z-10 transition-transform duration-300"
                      style={{
                        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}

                  {/* ── Active Background Navy Blue Pill ── */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-[#081F5C] shadow-[0_4px_16px_rgba(8,31,92,0.35)] group-hover:shadow-[0_6px_20px_rgba(8,31,92,0.45)] transition-shadow duration-300 z-0 overflow-hidden"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* ── Non-Active Hover Glass Pill & Light Reflection ── */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-slate-100/80 border border-slate-200/60 rounded-full opacity-0 scale-95 transition-all duration-300 hover:opacity-100 hover:scale-100 hover:shadow-[0_4px_16px_rgba(37,99,235,0.08)] z-0 overflow-hidden">
                      <div
                        className="absolute w-16 h-16 rounded-full pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{
                          left: `${pos.x - 32}px`,
                          top: `${pos.y - 32}px`,
                          background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
                          filter: "blur(4px)",
                        }}
                      />
                    </div>
                  )}
                </a>

                {/* ── Mega Menu Dropdown Panel for Advertisers ── */}
                {item.name === "Advertisers" && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-3 w-[310px] bg-white border border-slate-200/90 rounded-[24px] p-3 shadow-[0_24px_50px_rgba(8,31,92,0.18)] z-50 pointer-events-auto"
                      >
                        <div className="flex flex-col gap-1.5">
                          {advertisersItems.map((sub, idx) => (
                            <motion.a
                              key={sub.title}
                              ref={(el) => {
                                cardRefs.current[idx] = el
                              }}
                              href={sub.path}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                              onClick={(e) => {
                                e.preventDefault()
                                navigate(sub.path)
                                setActiveDropdown(null)
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "ArrowDown") {
                                  e.preventDefault()
                                  cardRefs.current[(idx + 1) % advertisersItems.length]?.focus()
                                } else if (e.key === "ArrowUp") {
                                  e.preventDefault()
                                  cardRefs.current[(idx - 1 + advertisersItems.length) % advertisersItems.length]?.focus()
                                } else if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault()
                                  navigate(sub.path)
                                  setActiveDropdown(null)
                                }
                              }}
                              whileHover={{ y: -4 }}
                              className="flex items-start gap-3.5 p-3.5 rounded-2xl border border-transparent hover:bg-[#F5F8FF] hover:border-blue-200/80 hover:shadow-[0_8px_25px_rgba(37,99,235,0.12)] transition-all duration-250 cursor-pointer group/card focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
                              style={{ textDecoration: "none" }}
                            >
                              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover/card:scale-105 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-250 flex-shrink-0">
                                {sub.icon}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-[#081F5C] group-hover/card:text-blue-600 transition-colors duration-250">
                                  {sub.title}
                                </span>
                                <span className="text-xs text-[#081F5C]/80 mt-0.5 leading-relaxed font-medium">
                                  {sub.desc}
                                </span>
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Desktop CTA (Sign Up) ── */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/signup"
            id="nav-cta-btn"
            onClick={(e) => { e.preventDefault(); navigate('/signup'); if (onNavigateSignup) onNavigateSignup() }}
            className="text-sm font-semibold px-6 py-2.5 rounded-2xl inline-flex items-center gap-2 relative overflow-hidden shimmer-btn-sweep active:scale-[0.97]"
            style={{
              background: "linear-gradient(135deg, #081F5C 0%, #2563EB 100%)",
              color: "white",
              boxShadow: "none",
              transition: `transform 300ms ${E}, filter 300ms ${E}`,
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.transform = "translateY(-2px) scale(1.02)"
              el.style.boxShadow = "none"
              const arrow = el.querySelector<HTMLElement>(".nav-btn-arrow")
              if (arrow) arrow.style.transform = "translateX(4px)"
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.transform = "translateY(0) scale(1)"
              el.style.boxShadow = "none"
              const arrow = el.querySelector<HTMLElement>(".nav-btn-arrow")
              if (arrow) arrow.style.transform = "translateX(0)"
            }}
          >
            Sign Up
            <svg
              className="nav-btn-arrow"
              width="14" height="14" fill="none" viewBox="0 0 14 14"
              style={{ transition: `transform 300ms ${E}` }}
            >
              <path d="M2 7h10M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden bg-slate-100 border border-slate-200 rounded-full w-10 h-10 flex items-center justify-center pointer-events-auto"
          style={{ color: "#081F5C", cursor: "pointer" }}
          onClick={() => setOpen(o => !o)}
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
            />
          </svg>
        </button>

        {/* ── Mobile Menu ── */}
        {open && (
          <div className="md:hidden absolute top-[100%] left-0 right-0 mt-3 bg-white/95 backdrop-blur-[24px] border border-white/20 rounded-[24px] p-6 shadow-[0_24px_50px_rgba(8,31,92,0.15)] flex flex-col gap-2 z-50">
            {navItems.map(item => {
              const isActive = activeItemName === item.name
              return (
                <div key={item.name} className="flex flex-col gap-1">
                  <a
                    href={item.path}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault()
                        setActiveDropdown(prev => prev === item.name ? null : item.name)
                        return
                      }
                      handleItemClick(e, item)
                      setOpen(false)
                    }}
                    className={`text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                      isActive ? "bg-[#081F5C] text-white shadow-[0_4px_12px_rgba(8,31,92,0.2)]" : "text-[#081F5C] hover:bg-[#081F5C]/5"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300" style={{ transform: activeDropdown === item.name ? "rotate(180deg)" : "rotate(0deg)" }}>
                        <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </a>

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="pl-4 flex flex-col gap-1 my-1">
                      {advertisersItems.map(sub => (
                        <a
                          key={sub.title}
                          href={sub.path}
                          onClick={(e) => {
                            e.preventDefault()
                            navigate(sub.path)
                            setActiveDropdown(null)
                            setOpen(false)
                          }}
                          className="py-2 px-3 rounded-lg text-xs font-bold text-[#081F5C] hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <a
              href="/signup"
              onClick={(e) => {
                e.preventDefault()
                navigate('/signup')
                if (onNavigateSignup) onNavigateSignup()
                setOpen(false)
              }}
              className="text-sm font-semibold px-5 py-3 rounded-2xl text-center text-white mt-2"
              style={{ background: "linear-gradient(135deg, #081F5C 0%, #2563EB 100%)", textDecoration: "none" }}
            >Sign Up</a>
          </div>
        )}
      </div>
    </nav>
  )
}
