import React, { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// 3D Assets
import blogHeadImg from "@/imports/Blog Head.png"
import listTargetImg from "@/imports/List Target.png"
import mailNotificationImg from "@/imports/Mail Notification.png"

const S_FONT = "'Inter', sans-serif"

interface Article {
  id: string
  slug: string
  category: string
  title: string
  description: string
  author: string
  authorRole?: string
  authorAvatar: string
  date: string
  readTime: string
  isFeatured?: boolean
  image?: string
  content?: string[]
}

const ARTICLES_DATA: Article[] = [
  {
    id: "featured-1",
    slug: "complete-affiliate-marketing-guide-2026",
    category: "Guides",
    title: "The Complete Affiliate Marketing Guide for 2026",
    description:
      "Everything you need to know to start earning through affiliate marketing —from picking the right niche and traffic source to scaling your first profitable campaign.",
    author: "Sarah Kim",
    authorRole: "CTO",
    authorAvatar: "S",
    date: "June 12, 2026",
    readTime: "12 min read",
    isFeatured: true,
    image: listTargetImg,
    content: [
      "Affiliate marketing in 2026 has evolved significantly beyond traditional banner ads and basic blog posts. Today's top performance marketers rely on algorithmic traffic optimization, highly tailored funnels, and data-driven offer selection.",
      "In this comprehensive guide, we unpack the foundational strategies that top-earning affiliates on Candid Leaders use to generate consistent five-figure monthly revenues across diverse verticals like Finance, E-commerce, Software, and Lead Gen.",
      "Key takeaways include niche selection framework, conversion tracking setup, compliance guidelines, and traffic scaling strategies."
    ]
  },
  {
    id: "art-1",
    slug: "cpa-campaigns-email-marketing-2026",
    category: "Affiliate Marketing",
    title: "How to Run CPA Campaigns with Email Marketing in 2026",
    description:
      "Email remains one of the highest-converting traffic sources for CPA offers. Here's how top affiliates are structuring their lists, sequences, and follow-ups.",
    author: "David Okafor",
    authorAvatar: "D",
    date: "June 8, 2026",
    readTime: "8 min read"
  },
  {
    id: "art-2",
    slug: "5-ways-advertisers-maximize-roas",
    category: "Advertiser Tips",
    title: "5 Proven Ways Advertisers Maximize ROAS on Candid Leaders",
    description:
      "From creative testing cadences to geo-specific bidding strategies, here's how our top advertisers consistently hit 4-6x ROAS on performance campaigns.",
    author: "Priya Nair",
    authorAvatar: "P",
    date: "June 4, 2026",
    readTime: "10 min read"
  },
  {
    id: "art-3",
    slug: "inside-fraudblock-invalid-traffic-protection",
    category: "Platform Updates",
    title: "Inside FraudBlock™: How We Stop Invalid Traffic Before It Costs You",
    description:
      "A deep dive into the AI architecture behind our fraud detection engine — and why 99.2% accuracy matters more than you think when scaling ad spend.",
    author: "Sarah Kim",
    authorAvatar: "S",
    date: "May 29, 2026",
    readTime: "7 min read"
  },
  {
    id: "art-4",
    slug: "case-study-800-to-48k-month",
    category: "Case Studies",
    title: "Case Study: From $800 to $48K/Month with Email Marketing",
    description:
      "We sat down with one of our top-earning affiliates to trace exactly how they grew from beginner earnings to a full-time income in 14 months.",
    author: "Alex Marchetti",
    authorAvatar: "A",
    date: "May 22, 2026",
    readTime: "15 min read"
  },
  {
    id: "art-5",
    slug: "cpa-vs-cpc-vs-cpm-guide",
    category: "Advertiser Tips",
    title: "CPA vs CPC vs CPM: Which Model Is Right for Your Brand?",
    description:
      "Breaking down the three most common digital ad pricing models — when performance-based CPA wins, and when other models might make more sense for your goals.",
    author: "Priya Nair",
    authorAvatar: "P",
    date: "May 15, 2026",
    readTime: "9 min read"
  },
  {
    id: "art-6",
    slug: "tiktok-traffic-affiliate-campaigns",
    category: "Affiliate Marketing",
    title: "Using TikTok Traffic for Affiliate Campaigns: What Actually Works",
    description:
      "TikTok is now one of the fastest-growing traffic sources for CPA affiliates. Here's a compliant, practical strategy that our top publishers are using right now.",
    author: "David Okafor",
    authorAvatar: "D",
    date: "May 18, 2026",
    readTime: "11 min read"
  },
  {
    id: "art-7",
    slug: "q2-2026-affiliate-marketing-industry-report",
    category: "Industry News",
    title: "Q2 2026 Affiliate Marketing Industry Report",
    description:
      "Trends in CPA payouts, top performing verticals, traffic source shifts, and what the data says about where the industry is headed in H2 2026.",
    author: "Alex Marchetti",
    authorAvatar: "A",
    date: "May 8, 2026",
    readTime: "14 min read"
  }
]

const CATEGORIES = [
  "All",
  "Affiliate Marketing",
  "Advertiser Tips",
  "Platform Updates",
  "Industry News",
  "Case Studies",
  "Guides"
]

export default function BlogLanding() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  // Blog Hero 3D Icon Hover & Parallax Tilt State
  const [heroTilt, setHeroTilt] = useState({ rx: 0, ry: 0 })
  const [heroHovered, setHeroHovered] = useState(false)

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setHeroTilt({ rx: dy * -6, ry: dx * 6 })
  }

  const handleHeroMouseLeave = () => {
    setHeroTilt({ rx: 0, ry: 0 })
    setHeroHovered(false)
  }

  // Filter articles based on Category and Search Query
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory

      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.author.toLowerCase().includes(q)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Separate featured article if present
  const featuredArticle = ARTICLES_DATA.find((a) => a.isFeatured)
  const gridArticles = filteredArticles.filter((a) => !a.isFeatured)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newsletterEmail) {
      setSubscribed(true)
      setTimeout(() => {
        setNewsletterEmail("")
        setSubscribed(false)
      }, 4000)
    }
  }

  // ─── ARTICLE DETAIL MODAL VIEW ─────────────────────────────────────────────
  if (activeArticle) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between" style={{ fontFamily: S_FONT }}>
        <Navbar
          onNavigateSignup={() => navigate("/signup")}
          onNavigateLanding={() => navigate("/")}
        />

        <main className="pt-24 pb-20 max-w-4xl mx-auto px-6 flex-1">
          <button
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#2563EB] hover:underline mb-8 cursor-pointer"
          >
            ← Back to Blog
          </button>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-50 text-[#2563EB] px-3 py-1 rounded-md text-xs font-extrabold uppercase">
                {activeArticle.category}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">{activeArticle.date}</span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">{activeArticle.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {activeArticle.title}
            </h1>

            <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
              {activeArticle.description}
            </p>

            <div className="flex items-center gap-4 py-4 border-y border-slate-100 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm">
                {activeArticle.authorAvatar}
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">{activeArticle.author}</div>
                {activeArticle.authorRole && (
                  <div className="text-xs text-slate-500 font-medium">{activeArticle.authorRole}</div>
                )}
              </div>
            </div>

            {activeArticle.image && (
              <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 p-8 mb-8 flex justify-center">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full max-w-[360px] h-auto object-contain"
                />
              </div>
            )}

            <div className="prose max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
              {activeArticle.content ? (
                activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    Performance marketing is experiencing a paradigm shift as privacy-first tracking, automation, and real-time fraud mitigation redefine ROI benchmarks for global brands and publishers.
                  </p>
                  <p>
                    By leveraging Candid Leaders' robust tracking architecture, affiliates can optimize traffic flows and advertisers achieve reliable, high-converting customer acquisition across global verticals.
                  </p>
                </>
              )}
            </div>

            <div className="mt-12 pt-6 border-t border-slate-200 flex justify-between items-center">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs shadow-md hover:bg-blue-600 transition-all cursor-pointer"
              >
                Back to All Articles
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  // ─── MAIN BLOG PAGE VIEW ───────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between" style={{ fontFamily: S_FONT }}>
      {/* ── HEADER / NAVBAR ── */}
      <Navbar
        onNavigateSignup={() => navigate("/signup")}
        onNavigateLanding={() => navigate("/")}
      />

      <main className="flex-1">
        {/* ── BLOG HERO SECTION (Dark Navy Theme) ── */}
        <section className="relative text-white overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20" style={{ background: "linear-gradient(165deg, #050c20 0%, #07112c 50%, #04091a 100%)" }}>
          {/* Background Ambient Glows & Dot Texture */}
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 65%)",
              borderRadius: "50%",
            }}
          />
          <div
            className="absolute bottom-0 right-10 w-[450px] h-[450px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)",
              borderRadius: "50%",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(80,120,255,0.12) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Text */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 w-fit" style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 0 16px rgba(52, 211, 153, 0.15)" }}>
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" style={{ boxShadow: "0 0 8px #34D399" }} />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#34D399]">CANDID LEADERS BLOG</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 leading-[1.15]" style={{ letterSpacing: "-0.02em" }}>
                    Insights for affiliates <br />
                    & advertisers
                  </h1>
                </div>

                <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                  Guides, strategies, case studies, and platform news from the Candid Leaders team.
                </p>
              </div>

              {/* Right Column: 3D Illustration Artwork with Interactive Hover Levitation */}
              <div
                className="lg:col-span-6 flex justify-center lg:justify-end relative py-4 group cursor-pointer"
                onMouseMove={handleHeroMouseMove}
                onMouseEnter={() => setHeroHovered(true)}
                onMouseLeave={handleHeroMouseLeave}
                style={{
                  perspective: "1000px",
                }}
              >
                {/* Base Contact Shadow (Dynamically scales and diffuses on hover) */}
                <div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 w-[80%] max-w-[400px] h-[24px] pointer-events-none rounded-[100%] transition-all duration-500"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(0,8,30,0.95) 0%, rgba(2,12,45,0.6) 55%, transparent 80%)",
                    filter: heroHovered ? "blur(22px)" : "blur(16px)",
                    opacity: heroHovered ? 0.85 : 0.65,
                    transform: heroHovered ? "scale(1.08)" : "scale(1)",
                  }}
                />

                {/* 3D Levitating Graphic Container */}
                <div
                  className="relative z-10 transition-all duration-300 ease-out"
                  style={{
                    transform: `rotateX(${heroTilt.rx}deg) rotateY(${heroTilt.ry}deg) translateY(${heroHovered ? "-14px" : "0px"}) scale(${heroHovered ? 1.04 : 1})`,
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                >
                  <img
                    src={blogHeadImg}
                    alt="Candid Leaders Blog Head 3D Artwork"
                    className="w-full max-w-[480px] sm:max-w-[520px] h-auto object-contain pointer-events-none relative z-10 drop-shadow-[0_32px_64px_rgba(0,10,35,0.85)] group-hover:drop-shadow-[0_45px_90px_rgba(37,99,235,0.55)] transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECOND SECTION: CATEGORY FILTERS & SEARCH BAR ── */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,10,35,0.04)]">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${isSelected
                        ? "bg-[#2563EB] text-white shadow-sm border border-[#2563EB]"
                        : "bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 hover:bg-slate-100"
                      }`}
                    style={{ fontFamily: S_FONT }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Search Input Box */}
            <div className="w-full md:w-72 flex-shrink-0">
              <div className="bg-slate-50 rounded-full border border-slate-200/90 px-4 py-2.5 flex items-center gap-2.5 transition-all focus-within:border-[#2563EB] focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-400/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full text-slate-800 placeholder-slate-400 bg-transparent text-xs font-medium focus:outline-none"
                  style={{ fontFamily: S_FONT }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* ── FEATURED ARTICLE ── */}
        {featuredArticle && (selectedCategory === "All" || selectedCategory === featuredArticle.category) && !searchQuery && (
          <section className="max-w-6xl mx-auto px-6 sm:px-8 mb-12">
            <div
              onClick={() => setActiveArticle(featuredArticle)}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,10,35,0.04)] hover:shadow-[0_20px_40px_rgba(0,10,35,0.08)] transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
            >
              {/* Left Side: 3D Artwork Box */}
              <div className="lg:col-span-6 bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#1D4ED8] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden min-h-[300px] sm:min-h-[360px]">
                <div className="flex items-center gap-2.5 z-10">
                  <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider">
                    FEATURED
                  </span>
                  <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                </div>

                {/* 3D Artwork Image */}
                <div className="my-4 flex justify-center items-center z-10">
                  <img
                    src={listTargetImg}
                    alt="Featured Article 3D Target Artwork"
                    className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain group-hover:scale-105 transition-transform duration-500 pointer-events-none drop-shadow-2xl"
                  />
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 z-10">
                  <div className="w-9 h-9 rounded-full bg-[#2563EB] border border-white/40 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                    {featuredArticle.authorAvatar}
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">{featuredArticle.author}</div>
                    <div className="text-[11px] text-blue-100 font-medium">{featuredArticle.authorRole}</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Article Meta & Details */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-4">
                    <span>{featuredArticle.date}</span>
                    <span>-</span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#2563EB] transition-colors leading-tight mb-4" style={{ fontFamily: S_FONT }}>
                    {featuredArticle.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal" style={{ fontFamily: S_FONT }}>
                    {featuredArticle.description}
                  </p>
                </div>

                <div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#2563EB] group-hover:gap-2.5 transition-all">
                    Read article →
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── ARTICLE GRID ── */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 mb-16">
          {gridArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Header: Category Badge & Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-50 text-[#2563EB] px-3 py-1 rounded-md text-xs font-extrabold">
                        {article.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#2563EB] transition-colors mb-3 leading-snug" style={{ fontFamily: S_FONT }}>
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium line-clamp-3" style={{ fontFamily: S_FONT }}>
                      {article.description}
                    </p>
                  </div>

                  {/* Footer: Author Info & Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2563EB] font-extrabold text-xs flex items-center justify-center">
                        {article.authorAvatar}
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">{article.author}</div>
                        <div className="text-[11px] text-slate-400 font-medium">{article.date}</div>
                      </div>
                    </div>

                    <div className="text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all font-extrabold text-sm">
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 my-8">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-1">No articles found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                We couldn't find any articles matching your search or category filter. Try clearing your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold shadow-sm hover:bg-blue-600 transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* ── NEWSLETTER SECTION (EXACT REPLICA) ── */}
        <section className="max-w-6xl mx-auto px-6 sm:px-8 mb-20">
          <div className="bg-[#0B1638] rounded-2xl p-6 sm:p-8 lg:p-10 text-white border border-blue-900/60 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 space-y-1.5 text-left">
              <span className="text-xs font-bold tracking-widest text-[#60A5FA] uppercase" style={{ fontFamily: S_FONT }}>
                NEWSLETTER
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: S_FONT }}>
                Get new articles in your inbox
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed" style={{ fontFamily: S_FONT }}>
                Weekly guides, case studies, and industry news. Unsubscribe anytime.
              </p>
            </div>

            {/* Center/Right: Email Input & Subscribe Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-white text-slate-800 placeholder-slate-400 px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400/50 w-full sm:w-[260px] md:w-[280px] shadow-sm"
                  style={{ fontFamily: S_FONT }}
                />
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-blue-600 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer w-full sm:w-auto"
                  style={{ fontFamily: S_FONT }}
                >
                  {subscribed ? "Subscribed! ✓" : "Subscribe →"}
                </button>
              </form>
            </div>

            {/* Far Right: 3D Mail Notification Artwork with Ambient Occlusion Shadow */}
            <div className="flex-shrink-0 flex items-center justify-center lg:justify-end relative py-2">
              {/* Ambient Occlusion Ground Shadow */}
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[80%] h-[20px] pointer-events-none rounded-[100%]"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0,8,30,0.9) 0%, rgba(2,12,45,0.5) 55%, transparent 80%)",
                  filter: "blur(14px)",
                }}
              />
              <img
                src={mailNotificationImg}
                alt="Mail Notification Artwork"
                className="w-[200px] sm:w-[240px] lg:w-[260px] h-auto object-contain pointer-events-none relative z-10 drop-shadow-[0_30px_60px_rgba(0,10,35,0.8)] drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  )
}
