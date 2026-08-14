import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Assets
import signupHeroIcon from "@/imports/Sign up hero section icon.png"
import growthChartReplica3d from "@/imports/growth-chart-replica-3d.png"
import advertiserElementImg from "@/imports/Advertiser element.png"

const S_FONT = "'Inter', sans-serif"

interface SignupProps {
  onNavigateLanding?: () => void
}

type Mode = "publisher" | "advertiser"

// ─── Step Names ─────────────────────────────────────────────────────────────

const PUBLISHER_STEPS = [
  "Account Creation",
  "Contact Verification",
  "Profile Basics",
  "Professional Info",
  "Platform Details",
  "Application Questions",
  "Compliance & Verification",
  "Payment Setup",
]

const ADVERTISER_STEPS = [
  "Account Creation",
  "Company Information",
  "Contact Verification",
  "Business Profile",
  "Campaign Information",
  "Compliance & Verification",
  "Billing & Payout Setup",
  "Tracking Setup",
]

export default function Signup({ onNavigateLanding }: SignupProps) {
  const navigate = useNavigate()

  const [mode, setMode] = useState<Mode>("publisher")
  const [existingUserChoice, setExistingUserChoice] = useState<"yes" | "no" | null>("no")
  const [currentStep, setCurrentStep] = useState(1)

  // Passwords
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // OTP Verification States (Publisher & Advertiser)
  const [pubEmailVerified, setPubEmailVerified] = useState(false)
  const [pubPhoneVerified, setPubPhoneVerified] = useState(false)
  const [advEmailVerified, setAdvEmailVerified] = useState(false)
  const [advPhoneVerified, setAdvPhoneVerified] = useState(false)

  // ── Publisher State ─────────────────────────────────────────────────────────
  const [pubData, setPubData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptPrivacy: false,
    acceptTerms: false,

    emailOtp: "849201",
    phoneOtp: "192840",
    country: "United States",
    timeZone: "UTC-05:00 (Eastern Time)",
    phoneNumber: "+1 (555) 234-5678",

    username: "",
    city: "",
    stateRegion: "",
    preferredCurrency: "USD ($)",

    userType: "Affiliate",
    userId: `PUB-${Math.floor(100000 + Math.random() * 900000)}`,
    assignedRole: "affiliate",
    trafficSources: ["Instagram", "Website/Blog", "YouTube"] as string[],
    primaryNiche: "Tech",
    experienceLevel: "Intermediate",
    yearsExperience: "3 Years",
    monthlyTrafficVolume: "10k-50k",
    promotionMethods: ["SEO", "Blogs", "Instagram", "YouTube", "Google Ads"] as string[],

    platforms: [
      { id: "p1", method: "Instagram", url: "https://instagram.com/techinsider", followers: "45,000" },
      { id: "p2", method: "YouTube", url: "https://youtube.com/c/techinsider", followers: "120,000" },
      { id: "p3", method: "Blogs", url: "https://techinsiderblog.com", followers: "85,000 monthly" },
    ],
    intendedCampaignCategories: ["SaaS", "Finance", "E-commerce"] as string[],

    howPromote: "I write in-depth product reviews, post video tutorials, and run targeted PPC campaigns on Google Ads and Meta Ads to drive high-intent leads.",
    workedWithNetworksBefore: "Yes" as "Yes" | "No",
    previousPlatformName: "CJ Affiliate / Impact Radius",
    previousTimePeriod: "2 Years",
    previousProjectCategory: "SaaS & Tech Software",
    whyJoin: "Looking for top-tier payouts, reliable tracking, and dedicated account manager support for technology and performance campaigns.",
    whereHeardUs: "Search Engine",

    idDocumentType: "Passport" as "Passport" | "Driving License" | "National ID",
    idDocumentFile: null as File | null,

    paymentMethod: "Bank" as "UPI" | "Bank" | "PayPal",
    taxInfo: "",
    paymentFrequency: "Weekly" as "Weekly" | "Bi-weekly" | "Monthly",
  })

  // ── Advertiser State ────────────────────────────────────────────────────────
  const [advData, setAdvData] = useState({
    // Step 1: Account Creation
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",

    // Step 2: Company Information
    companyName: "",
    websiteUrl: "https://mybrand.com",
    companySize: "10-50 employees",
    companyCountry: "United States",
    businessType: "E-commerce", // E-commerce, SaaS, Mobile App, Lead Generation, Education, Finance, Healthcare, Travel, Agency, etc.

    // Step 3: Contact Verification
    emailOtp: "492018",
    phoneOtp: "928104",
    businessPhoneNumber: "+1 (555) 987-6543",

    // Step 4: Business Profile
    industry: "E-commerce & Retail Software",
    targetCountries: ["United States", "Canada", "United Kingdom", "Germany"] as string[],
    monthlyMarketingBudget: "$10,000 - $25,000", // Ranges
    expectedTrafficType: ["Sales", "Leads", "Sign Up"] as string[], // Leads, Sales, Installs, Sign Up, Form Filling, Appointment Booking, Registration
    expectedMonthlyGoals: "500-1k", // 0-100, 100-500, 500-1k, 1k+

    // Step 5: Campaign Information
    campaignName: "Q3 Global Performance Scale",
    commissionType: "CPA" as "CPA" | "CPL" | "CPS" | "CPI" | "Hybrid",
    // 2 Editable fields for Commission Amount:
    commissionValue: "10%", // Field 1: Amount or Percentage
    commissionTrafficType: "per Sale / Lead", // Field 2: Traffic Type (ex: per Lead, per Appointment, per Install)
    campaignCategory: "E-commerce & SaaS",
    allowedTrafficSources: [
      "SEO",
      "Blogs",
      "Content Marketing",
      "Instagram",
      "YouTube",
      "Google Ads",
      "Meta Ads",
    ] as string[],
    restrictedTrafficSources: [
      "Brand Bidding",
      "Incent Traffic",
      "Adult Traffic",
      "Cashback Sites",
      "Coupon Sites",
    ] as string[],

    // Step 6: Compliance & Verification
    agreeToTerms: false,
    gstBusinessId: "", // GST / Business ID (India) / EIN / VAT
    companyRegistrationProof: null as File | null,

    // Step 7: Billing & Payout Setup
    billingContactName: "",
    billingEmail: "",
    billingAddress: "",
    paymentMethod: "Credit Card / Wire" as "Credit Card / Wire" | "PayPal" | "Bank Transfer" | "ACH",
    currency: "USD ($)",

    // Step 8: Tracking Setup
    trackingMethod: "Pixel & Postback" as "Pixel" | "Postback URL" | "Server API",
    postbackUrl: "https://api.mybrand.com/postback?click_id={click_id}&payout={payout}",
  })

  // Errors & Completed Flags
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [completed, setCompleted] = useState(false)
  const [completionMetadata, setCompletionMetadata] = useState<any>(null)

  const formCardRef = useRef<HTMLDivElement>(null)

  const scrollToFormTop = () => {
    if (formCardRef.current) {
      const yOffset = -100
      const elementTop = formCardRef.current.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementTop + yOffset, behavior: "smooth" })
    } else {
      window.scrollTo({ top: 380, behavior: "smooth" })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Options Constants
  const BUSINESS_TYPES = [
    "E-commerce",
    "SaaS",
    "Mobile App",
    "Lead Generation",
    "Education",
    "Finance",
    "Healthcare",
    "Travel",
    "Agency",
    "Other",
  ]

  const EXPECTED_TRAFFIC_TYPES = [
    "Leads",
    "Sales",
    "Installs",
    "Sign Up",
    "Form Filling",
    "Appointment Booking",
    "Registration",
  ]

  const EXPECTED_MONTHLY_GOALS = ["0-100", "100-500", "500-1k", "1k+"]

  const MARKETING_BUDGET_RANGES = [
    "Less than $5,000 / mo",
    "$5,000 - $10,000 / mo",
    "$10,000 - $25,000 / mo",
    "$25,000 - $50,000 / mo",
    "$50,000+ / mo",
  ]

  const ALLOWED_TRAFFIC_OPTIONS = [
    "SEO",
    "Blogs",
    "Content Marketing",
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "Telegram",
    "WhatsApp",
    "YouTube",
    "Google Ads",
    "Meta Ads",
    "Native Ads",
    "Email Marketing",
    "Mobile Apps",
  ]

  const RESTRICTED_TRAFFIC_OPTIONS = [
    "Brand Bidding",
    "Incent Traffic",
    "Adult Traffic",
    "Cashback Sites",
    "Coupon Sites",
    "Pop-ups / Pop-under",
  ]

  const toggleArrayItem = (array: string[], item: string): string[] => {
    if (array.includes(item)) {
      return array.filter((i) => i !== item)
    }
    return [...array, item]
  }

  // Step Validation Logic
  const validateCurrentStep = (): boolean => {
    const errs: Record<string, string> = {}

    if (mode === "publisher") {
      if (currentStep === 1) {
        if (!pubData.fullName.trim()) errs.fullName = "Full name is required"
        if (!pubData.email.trim() || !/\S+@\S+\.\S+/.test(pubData.email)) errs.email = "Valid email is required"
        if (!pubData.password || pubData.password.length < 6) errs.password = "Password must be at least 6 characters"
        if (pubData.password !== pubData.confirmPassword) errs.confirmPassword = "Passwords do not match"
        if (!pubData.acceptTerms) errs.acceptTerms = "You must accept Terms & Conditions"
        if (!pubData.acceptPrivacy) errs.acceptPrivacy = "You must accept Privacy Policy"
      }
    } else {
      if (currentStep === 1) {
        if (!advData.fullName.trim()) errs.advFullName = "Full name is required"
        if (!advData.email.trim() || !/\S+@\S+\.\S+/.test(advData.email)) errs.advEmail = "Valid email is required"
        if (!advData.password || advData.password.length < 6) errs.advPassword = "Password must be at least 6 characters"
        if (advData.password !== advData.confirmPassword) errs.advConfirmPassword = "Passwords do not match"
      } else if (currentStep === 2) {
        if (!advData.companyName.trim()) errs.companyName = "Company name is required"
        if (!advData.websiteUrl.trim()) errs.websiteUrl = "Website URL is required"
      } else if (currentStep === 6) {
        if (!advData.agreeToTerms) errs.agreeToTerms = "You must agree to Terms & Conditions"
      }
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (!validateCurrentStep()) return

    const maxSteps = mode === "publisher" ? PUBLISHER_STEPS.length : ADVERTISER_STEPS.length

    if (currentStep < maxSteps) {
      setCurrentStep((prev) => prev + 1)
      scrollToFormTop()
    } else {
      if (mode === "publisher") {
        finishPublisherRegistration()
      } else {
        finishAdvertiserRegistration()
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      scrollToFormTop()
    }
  }

  const finishPublisherRegistration = () => {
    const pubId = pubData.userId || `PUB-${Math.floor(100000 + Math.random() * 900000)}`
    const refCode = `CL-REF-${Math.random().toString(36).substring(2, 7).toUpperCase()}`

    setCompletionMetadata({
      type: "publisher",
      publisherId: pubId,
      referralCode: refCode,
      affiliateManager: "Sarah Jenkins (Senior Partner Manager)",
      accountStatus: "Pending Review / Active",
      riskScore: "Low Risk (0.02)",
      kycStatus: pubData.idDocumentFile ? "Submitted - Under Review" : "Pending Verification",
      emailVerificationStatus: pubEmailVerified ? "Verified ✓" : "Verified ✓",
      phoneVerificationStatus: pubPhoneVerified ? "Verified ✓" : "Verified ✓",
      createdDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      lastLogin: new Date().toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    })
    setCompleted(true)
    scrollToFormTop()
  }

  const finishAdvertiserRegistration = () => {
    const advId = `ADV-${Math.floor(100000 + Math.random() * 900000)}`
    const cmpId = `CMP-${Math.floor(100000 + Math.random() * 900000)}`

    setCompletionMetadata({
      type: "advertiser",
      advertiserId: advId,
      companyId: cmpId,
      verificationStatus: "Pending Admin Verification (Flagged for Review)",
      accountStatus: "Under Review / Verification Required",
      contractStatus: "Standard Advertiser Terms Accepted",
      riskScore: "Low Risk (0.01)",
      approvalStatus: "Pending Manual Review",
      createdDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      lastLogin: new Date().toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" }),
      affiliateManagerAssigned: "Sarah Jenkins (Senior Partner Lead)",
      campaignManagerAssigned: "Michael Chen (Lead Campaign Strategist)",
    })
    setCompleted(true)
    scrollToFormTop()
  }

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: S_FONT }}>
      {/* ── Navbar ── */}
      <Navbar
        onNavigateSignup={() => navigate("/signup")}
        onNavigateLanding={() => navigate("/")}
      />

      {/* ── Hero Banner ── */}
      <section
        className="relative overflow-hidden pt-36 pb-20 flex items-center min-h-[460px]"
        style={{
          background: "linear-gradient(165deg, #020614 0%, #050E28 50%, #020612 100%)",
          fontFamily: S_FONT,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            right: "5%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, rgba(29, 100, 242, 0.35) 0%, rgba(56, 189, 248, 0.12) 45%, transparent 75%)",
            filter: "blur(90px)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 bg-blue-500/10 border border-blue-400/25 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span className="text-xs font-extrabold text-sky-400 tracking-wider uppercase">
                  {mode === "publisher" ? "PUBLISHER REGISTRATION" : "ADVERTISER REGISTRATION"}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-tight mb-4 tracking-tight">
                {mode === "publisher" ? "Join Candid Leaders as a Publisher" : "Scale Your Brand With Top Affiliates"}
              </h1>

              <p className="text-base sm:text-lg max-w-xl text-slate-300 mb-6 leading-relaxed">
                {mode === "publisher"
                  ? "Access top-converting campaigns, real-time analytics, dedicated manager support, and weekly payouts."
                  : "Connect with 250,000+ verified publishers worldwide. Launch performance campaigns with real-time tracking."}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {[
                  mode === "publisher" ? "Weekly Payouts" : "High Quality Traffic",
                  mode === "publisher" ? "Global Campaigns" : "Real-Time Tracking",
                  mode === "publisher" ? "Dedicated AM" : "Dedicated Campaign Manager",
                ].map((pill) => (
                  <div
                    key={pill}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/12 backdrop-blur-sm text-xs font-extrabold text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 flex justify-center lg:justify-end items-center relative"
            >
              <div className="relative w-full max-w-[420px]">
                <img
                  src={mode === "advertiser" ? advertiserElementImg : signupHeroIcon}
                  alt="Sign Up 3D Visual"
                  className="w-full h-auto object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,10,35,0.7)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Registration Workspace ── */}
      <section className="py-16 bg-[#f4f7fd] relative z-10" style={{ fontFamily: S_FONT }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">

          {/* Mode Switcher */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Registration Mode:</span>
              <div className="inline-flex p-1 rounded-2xl bg-slate-200/80 border border-slate-300">
                <button
                  type="button"
                  onClick={() => {
                    setMode("publisher")
                    setCurrentStep(1)
                    setCompleted(false)
                  }}
                  className={`px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    mode === "publisher" ? "bg-[#2563EB] text-white shadow-md" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  Publisher / Affiliate
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode("advertiser")
                    setCurrentStep(1)
                    setCompleted(false)
                  }}
                  className={`px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    mode === "advertiser" ? "bg-[#2563EB] text-white shadow-md" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  Advertiser
                </button>
              </div>
            </div>

            <div className="text-xs font-bold text-slate-500 hidden sm:block">
              Need help? <span className="text-[#2563EB] cursor-pointer hover:underline">Contact Sales & Support</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column Steps List */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2 leading-snug">
                  Register as <span className="text-[#2563EB]">{mode === "publisher" ? "Publisher" : "Advertiser"}</span>
                </h2>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  {mode === "publisher"
                    ? "Complete our 8-step publisher application to get instant access to top-paying affiliate campaigns."
                    : "Complete our 8-step advertiser registration to launch campaigns and recruit top-performing publishers."}
                </p>

                {/* Left Step Summary List */}
                <div className="space-y-2">
                  {(mode === "publisher" ? PUBLISHER_STEPS : ADVERTISER_STEPS).map((sName, idx) => {
                    const stepNum = idx + 1
                    const isDone = stepNum < currentStep || completed
                    const isCurrent = stepNum === currentStep && !completed

                    return (
                      <div
                        key={sName}
                        onClick={() => {
                          if (isDone && !completed) {
                            setCurrentStep(stepNum)
                            scrollToFormTop()
                          }
                        }}
                        className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                          isCurrent
                            ? "bg-blue-50 border border-blue-200 shadow-sm"
                            : isDone
                            ? "bg-slate-100/80 hover:bg-slate-200/60 cursor-pointer"
                            : "bg-transparent opacity-60"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                            isCurrent
                              ? "bg-[#2563EB] text-white shadow-sm"
                              : isDone
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {isDone ? "✓" : stepNum}
                        </div>
                        <span
                          className={`text-xs font-bold ${
                            isCurrent ? "text-[#2563EB]" : isDone ? "text-slate-800" : "text-slate-400"
                          }`}
                        >
                          Step {stepNum}: {sName}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-blue-50/90 rounded-2xl p-4 border border-blue-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm">
                  🛡️
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-slate-900">Enterprise Security</div>
                  <div className="text-slate-500 font-medium">All accounts verified and monitored for brand safety</div>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Step Card */}
            <div className="lg:col-span-8">
              <div ref={formCardRef} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_20px_60px_rgba(0,10,35,0.06)] relative">
                
                {/* ── COMPLETION SUMMARY SCREEN ── */}
                {completed ? (
                  <div className="space-y-6">
                    <div className="text-center py-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl font-extrabold shadow-md mb-3">
                        ✓
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {completionMetadata?.type === "advertiser"
                          ? "Advertiser Application Submitted!"
                          : "Publisher Registration Complete!"}
                      </h3>
                      <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                        {completionMetadata?.type === "advertiser"
                          ? "Your advertiser account has been logged and flagged for compliance review. Your assigned Campaign Manager will contact you shortly."
                          : "Your publisher account has been created and assigned to a dedicated Affiliate Manager."}
                      </p>
                    </div>

                    {/* Data Summary Grid */}
                    {completionMetadata && (
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                        <div className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider border-b border-slate-200 pb-2">
                          ACCOUNT & COMPLIANCE METADATA
                        </div>

                        {completionMetadata.type === "advertiser" ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Advertiser ID</div>
                              <div className="text-base font-extrabold text-slate-900">{completionMetadata.advertiserId}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Company ID</div>
                              <div className="text-base font-extrabold text-[#2563EB]">{completionMetadata.companyId}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Verification Status</div>
                              <div className="font-extrabold text-amber-600">{completionMetadata.verificationStatus}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Account Status</div>
                              <div className="font-extrabold text-slate-900">{completionMetadata.accountStatus}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Contract Status</div>
                              <div className="font-bold text-slate-900">{completionMetadata.contractStatus}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Risk Score</div>
                              <div className="font-extrabold text-emerald-600">{completionMetadata.riskScore}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Assigned Affiliate Manager</div>
                              <div className="font-extrabold text-slate-900">{completionMetadata.affiliateManagerAssigned}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Assigned Campaign Manager</div>
                              <div className="font-extrabold text-slate-900">{completionMetadata.campaignManagerAssigned}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Created Date</div>
                              <div className="font-bold text-slate-900">{completionMetadata.createdDate}</div>
                            </div>

                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Last Login</div>
                              <div className="font-bold text-slate-900">{completionMetadata.lastLogin}</div>
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Publisher ID</div>
                              <div className="text-base font-extrabold text-slate-900">{completionMetadata.publisherId}</div>
                            </div>
                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Referral Code</div>
                              <div className="text-base font-extrabold text-[#2563EB]">{completionMetadata.referralCode}</div>
                            </div>
                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Assigned Affiliate Manager</div>
                              <div className="font-extrabold text-slate-900">{completionMetadata.affiliateManager}</div>
                            </div>
                            <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                              <div className="text-slate-400 font-bold mb-1">Account Status</div>
                              <div className="font-extrabold text-emerald-600">{completionMetadata.accountStatus}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="px-8 py-3 rounded-2xl bg-[#2563EB] text-white font-extrabold text-xs hover:bg-blue-700 transition-all cursor-pointer shadow-md"
                      >
                        Return to Homepage →
                      </button>
                    </div>
                  </div>
                ) : (

                  /* ── MULTI-STEP FORM FLOW ── */
                  <div>
                    {/* Stepper Progress Bar & Navigation Header */}
                    <div className="mb-6 pb-4 border-b border-slate-100">
                      <div className="flex items-center justify-between mb-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (currentStep > 1) handleBack()
                            else if (onNavigateLanding) onNavigateLanding()
                            else navigate("/")
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs transition-colors cursor-pointer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" />
                            <polyline points="12 19 5 12 12 5" />
                          </svg>
                          {currentStep > 1 ? `Back to Step ${currentStep - 1}` : "Back to Home"}
                        </button>

                        <span className="text-xs font-bold text-slate-400">
                          {Math.round((currentStep / 8) * 100)}% Completed
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-wider">
                          STEP {currentStep} OF 8 — {(mode === "publisher" ? PUBLISHER_STEPS : ADVERTISER_STEPS)[currentStep - 1]}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-[#2563EB] h-full transition-all duration-300"
                          style={{ width: `${(currentStep / 8) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-5 min-h-[340px]">

                      {/* ════════════════════════════════════════════════════════
                          ADVERTISER FLOW (STEPS 1-8)
                         ════════════════════════════════════════════════════════ */}
                      {mode === "advertiser" && (
                        <>
                          {/* ADV STEP 1: Account Creation */}
                          {currentStep === 1 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 1: Account Creation</h3>



                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Full Name *</label>
                                <input
                                  type="text"
                                  value={advData.fullName}
                                  onChange={(e) => setAdvData({ ...advData, fullName: e.target.value })}
                                  placeholder="e.g. Michael Chen"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                />
                                {errors.advFullName && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.advFullName}</div>}
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Work Email Address *</label>
                                <input
                                  type="email"
                                  value={advData.email}
                                  onChange={(e) => setAdvData({ ...advData, email: e.target.value })}
                                  placeholder="m.chen@company.com"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                />
                                {errors.advEmail && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.advEmail}</div>}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Password *</label>
                                  <input
                                    type="password"
                                    value={advData.password}
                                    onChange={(e) => setAdvData({ ...advData, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                  />
                                  {errors.advPassword && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.advPassword}</div>}
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Confirm Password *</label>
                                  <input
                                    type="password"
                                    value={advData.confirmPassword}
                                    onChange={(e) => setAdvData({ ...advData, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                  />
                                  {errors.advConfirmPassword && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.advConfirmPassword}</div>}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ADV STEP 2: Company Information */}
                          {currentStep === 2 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 2: Company Information</h3>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Company Name *</label>
                                <input
                                  type="text"
                                  value={advData.companyName}
                                  onChange={(e) => setAdvData({ ...advData, companyName: e.target.value })}
                                  placeholder="Acme Global Inc."
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                />
                                {errors.companyName && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.companyName}</div>}
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Website URL (Required) *</label>
                                <input
                                  type="url"
                                  value={advData.websiteUrl}
                                  onChange={(e) => setAdvData({ ...advData, websiteUrl: e.target.value })}
                                  placeholder="https://acmeglobal.com"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                />
                                {errors.websiteUrl && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.websiteUrl}</div>}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Company Size *</label>
                                  <select
                                    value={advData.companySize}
                                    onChange={(e) => setAdvData({ ...advData, companySize: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="1-10 employees">1-10 employees</option>
                                    <option value="10-50 employees">10-50 employees</option>
                                    <option value="50-250 employees">50-250 employees</option>
                                    <option value="250+ employees">250+ employees</option>
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Company Country *</label>
                                  <select
                                    value={advData.companyCountry}
                                    onChange={(e) => setAdvData({ ...advData, companyCountry: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Germany">Germany</option>
                                    <option value="India">India</option>
                                    <option value="Australia">Australia</option>
                                  </select>
                                </div>
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Business Type *</label>
                                <select
                                  value={advData.businessType}
                                  onChange={(e) => setAdvData({ ...advData, businessType: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                >
                                  {BUSINESS_TYPES.map((b) => (
                                    <option key={b} value={b}>
                                      {b}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          )}

                          {/* ADV STEP 3: Contact Verification */}
                          {currentStep === 3 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 3: Contact Verification</h3>

                              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed font-medium">
                                Validate your business contact channels for account security and partner communication.
                              </div>

                              {/* Business Email Verification */}
                              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900">
                                  <span>Business Email OTP: {advData.email || "m.chen@company.com"}</span>
                                  {advEmailVerified ? (
                                    <span className="text-emerald-600 font-extrabold">✓ Verified</span>
                                  ) : (
                                    <span className="text-amber-600 font-bold">Unverified</span>
                                  )}
                                </div>

                                {!advEmailVerified && (
                                  <div className="flex items-center gap-3">
                                    <input
                                      type="text"
                                      value={advData.emailOtp}
                                      onChange={(e) => setAdvData({ ...advData, emailOtp: e.target.value })}
                                      placeholder="Enter 6-digit Email OTP"
                                      className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setAdvEmailVerified(true)}
                                      className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold hover:bg-blue-700 cursor-pointer"
                                    >
                                      Verify OTP
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* Phone Number Verification */}
                              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900">
                                  <span>Phone Number OTP</span>
                                  {advPhoneVerified ? (
                                    <span className="text-emerald-600 font-extrabold">✓ Verified</span>
                                  ) : (
                                    <span className="text-amber-600 font-bold">Unverified</span>
                                  )}
                                </div>

                                <input
                                  type="tel"
                                  value={advData.businessPhoneNumber}
                                  onChange={(e) => setAdvData({ ...advData, businessPhoneNumber: e.target.value })}
                                  placeholder="+1 (555) 987-6543"
                                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs mb-2"
                                />

                                {!advPhoneVerified && (
                                  <div className="flex items-center gap-3">
                                    <input
                                      type="text"
                                      value={advData.phoneOtp}
                                      onChange={(e) => setAdvData({ ...advData, phoneOtp: e.target.value })}
                                      placeholder="Enter 6-digit Phone OTP"
                                      className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setAdvPhoneVerified(true)}
                                      className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold hover:bg-blue-700 cursor-pointer"
                                    >
                                      Verify OTP
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* ADV STEP 4: Business Profile */}
                          {currentStep === 4 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 4: Business Profile</h3>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Industry Category *</label>
                                <input
                                  type="text"
                                  value={advData.industry}
                                  onChange={(e) => setAdvData({ ...advData, industry: e.target.value })}
                                  placeholder="e.g. E-commerce & Retail Software"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Monthly Marketing Budget (Ranges) *</label>
                                <select
                                  value={advData.monthlyMarketingBudget}
                                  onChange={(e) => setAdvData({ ...advData, monthlyMarketingBudget: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                >
                                  {MARKETING_BUDGET_RANGES.map((b) => (
                                    <option key={b} value={b}>
                                      {b}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {/* Expected Traffic Type (Multi-select) */}
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Expected Traffic Type (Choose Multiple) *</label>
                                <div className="flex flex-wrap gap-2">
                                  {EXPECTED_TRAFFIC_TYPES.map((tt) => {
                                    const isSel = advData.expectedTrafficType.includes(tt)
                                    return (
                                      <button
                                        key={tt}
                                        type="button"
                                        onClick={() =>
                                          setAdvData({
                                            ...advData,
                                            expectedTrafficType: toggleArrayItem(advData.expectedTrafficType, tt),
                                          })
                                        }
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                                          isSel
                                            ? "bg-[#2563EB] text-white border-[#2563EB]"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                                        }`}
                                      >
                                        {isSel ? "✓ " : "+ "}
                                        {tt}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Expected Monthly Goals *</label>
                                <div className="grid grid-cols-4 gap-3">
                                  {EXPECTED_MONTHLY_GOALS.map((goal) => (
                                    <button
                                      key={goal}
                                      type="button"
                                      onClick={() => setAdvData({ ...advData, expectedMonthlyGoals: goal })}
                                      className={`py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                        advData.expectedMonthlyGoals === goal
                                          ? "bg-blue-50 border-[#2563EB] text-[#2563EB]"
                                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                                      }`}
                                    >
                                      {goal}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ADV STEP 5: Campaign Information */}
                          {currentStep === 5 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 5: Campaign Information</h3>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Campaign Name *</label>
                                <input
                                  type="text"
                                  value={advData.campaignName}
                                  onChange={(e) => setAdvData({ ...advData, campaignName: e.target.value })}
                                  placeholder="e.g. Q3 Performance Lead Scale"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Commission Type *</label>
                                <div className="grid grid-cols-5 gap-2">
                                  {(["CPA", "CPL", "CPS", "CPI", "Hybrid"] as const).map((model) => (
                                    <button
                                      key={model}
                                      type="button"
                                      onClick={() => setAdvData({ ...advData, commissionType: model })}
                                      className={`py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                        advData.commissionType === model
                                          ? "bg-[#2563EB] text-white border-[#2563EB]"
                                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                                      }`}
                                    >
                                      {model}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* 2 Editable Fields for Commission Amount */}
                              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
                                <label className="block text-xs font-extrabold text-slate-900">
                                  Commission Payout Structure (2 Editable Fields) *
                                </label>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <div>
                                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                      Field 1: Percentage / Payout Amount
                                    </label>
                                    <input
                                      type="text"
                                      value={advData.commissionValue}
                                      onChange={(e) => setAdvData({ ...advData, commissionValue: e.target.value })}
                                      placeholder="e.g. 5% or $25.00"
                                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-900"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                                      Field 2: Target Traffic Action
                                    </label>
                                    <input
                                      type="text"
                                      value={advData.commissionTrafficType}
                                      onChange={(e) => setAdvData({ ...advData, commissionTrafficType: e.target.value })}
                                      placeholder="e.g. per Lead / per Appointment / per Install"
                                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-900"
                                    />
                                  </div>
                                </div>

                                <div className="text-[11px] text-blue-900 font-medium">
                                  Preview: <span className="font-extrabold">{advData.commissionValue} {advData.commissionTrafficType}</span>
                                </div>
                              </div>

                              {/* Allowed Traffic Sources */}
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Allowed Traffic Sources *</label>
                                <div className="flex flex-wrap gap-2">
                                  {ALLOWED_TRAFFIC_OPTIONS.map((ats) => {
                                    const isSel = advData.allowedTrafficSources.includes(ats)
                                    return (
                                      <button
                                        key={ats}
                                        type="button"
                                        onClick={() =>
                                          setAdvData({
                                            ...advData,
                                            allowedTrafficSources: toggleArrayItem(advData.allowedTrafficSources, ats),
                                          })
                                        }
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                                          isSel
                                            ? "bg-emerald-500 text-white border-emerald-600"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                                        }`}
                                      >
                                        {isSel ? "✓ " : "+ "}
                                        {ats}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>

                              {/* Restricted Traffic Sources */}
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Restricted Traffic Sources *</label>
                                <div className="flex flex-wrap gap-2">
                                  {RESTRICTED_TRAFFIC_OPTIONS.map((rts) => {
                                    const isSel = advData.restrictedTrafficSources.includes(rts)
                                    return (
                                      <button
                                        key={rts}
                                        type="button"
                                        onClick={() =>
                                          setAdvData({
                                            ...advData,
                                            restrictedTrafficSources: toggleArrayItem(advData.restrictedTrafficSources, rts),
                                          })
                                        }
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                                          isSel
                                            ? "bg-red-500 text-white border-red-600"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                                        }`}
                                      >
                                        {isSel ? "🚫 " : "+ "}
                                        {rts}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ADV STEP 6: Compliance & Verification */}
                          {currentStep === 6 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 6: Compliance & Verification</h3>

                              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                                Notice: All advertiser accounts are flagged for admin compliance review until document verification is complete.
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">GST / Business Tax ID (India / Global)</label>
                                <input
                                  type="text"
                                  value={advData.gstBusinessId}
                                  onChange={(e) => setAdvData({ ...advData, gstBusinessId: e.target.value })}
                                  placeholder="e.g. 22AAAAA0000A1Z5 / EIN 12-3456789"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs"
                                />
                              </div>

                              {/* Upload Registration Proof */}
                              <div className="p-6 rounded-2xl border-2 border-dashed border-slate-300 text-center hover:border-blue-500 bg-slate-50/50 transition-colors">
                                <div className="text-3xl mb-2">🏢</div>
                                <div className="text-xs font-bold text-slate-800">Upload Company Registration Proof</div>
                                <div className="text-[11px] text-slate-400 mt-1">Certificate of Incorporation, Business License, or Tax Certificate</div>
                                <input
                                  type="file"
                                  id="adv-proof-file"
                                  onChange={(e) => setAdvData({ ...advData, companyRegistrationProof: e.target.files?.[0] || null })}
                                  className="hidden"
                                />
                                <label
                                  htmlFor="adv-proof-file"
                                  className="inline-block mt-3 px-5 py-2.5 rounded-xl bg-blue-50 text-[#2563EB] text-xs font-extrabold cursor-pointer hover:bg-blue-100 transition-colors"
                                >
                                  {advData.companyRegistrationProof
                                    ? `Selected: ${advData.companyRegistrationProof.name}`
                                    : "Browse File"}
                                </label>
                              </div>

                              <label className="flex items-center gap-3 cursor-pointer pt-2">
                                <input
                                  type="checkbox"
                                  checked={advData.agreeToTerms}
                                  onChange={(e) => setAdvData({ ...advData, agreeToTerms: e.target.checked })}
                                  className="w-4 h-4 rounded text-[#2563EB]"
                                />
                                <span className="text-xs text-slate-700 font-bold">
                                  I agree to the <a href="#" onClick={(e) => e.preventDefault()} className="text-[#2563EB] underline">Advertiser Terms of Service</a> and <a href="#" onClick={(e) => e.preventDefault()} className="text-[#2563EB] underline">Compliance Policies</a>.
                                </span>
                              </label>
                              {errors.agreeToTerms && <div className="text-[11px] text-red-500 font-bold">{errors.agreeToTerms}</div>}
                            </div>
                          )}

                          {/* ADV STEP 7: Billing & Payout Setup */}
                          {currentStep === 7 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 7: Billing & Payout Setup</h3>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Billing Contact Name *</label>
                                  <input
                                    type="text"
                                    value={advData.billingContactName}
                                    onChange={(e) => setAdvData({ ...advData, billingContactName: e.target.value })}
                                    placeholder="Finance Dept / John Doe"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs"
                                  />
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Billing Email *</label>
                                  <input
                                    type="email"
                                    value={advData.billingEmail}
                                    onChange={(e) => setAdvData({ ...advData, billingEmail: e.target.value })}
                                    placeholder="billing@company.com"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Billing Address *</label>
                                <input
                                  type="text"
                                  value={advData.billingAddress}
                                  onChange={(e) => setAdvData({ ...advData, billingAddress: e.target.value })}
                                  placeholder="100 Enterprise Way, Suite 400, New York, NY"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs"
                                />
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Payment Method *</label>
                                  <select
                                    value={advData.paymentMethod}
                                    onChange={(e) => setAdvData({ ...advData, paymentMethod: e.target.value as any })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="Credit Card / Wire">Credit Card / Wire Transfer</option>
                                    <option value="PayPal">PayPal Business</option>
                                    <option value="Bank Transfer">Bank Wire</option>
                                    <option value="ACH">ACH Direct Debit</option>
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Currency *</label>
                                  <select
                                    value={advData.currency}
                                    onChange={(e) => setAdvData({ ...advData, currency: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="USD ($)">USD ($)</option>
                                    <option value="EUR (€)">EUR (€)</option>
                                    <option value="GBP (£)">GBP (£)</option>
                                    <option value="INR (₹)">INR (₹)</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ADV STEP 8: Tracking Setup */}
                          {currentStep === 8 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 8: Tracking Setup</h3>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Tracking Method *</label>
                                <div className="grid grid-cols-3 gap-3">
                                  {(["Pixel", "Postback URL", "Server API"] as const).map((tm) => (
                                    <button
                                      key={tm}
                                      type="button"
                                      onClick={() => setAdvData({ ...advData, trackingMethod: tm })}
                                      className={`py-2.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                        advData.trackingMethod === tm
                                          ? "bg-[#2563EB] text-white border-[#2563EB]"
                                          : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                                      }`}
                                    >
                                      {tm}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                  Postback / Integration URL *
                                </label>
                                <textarea
                                  rows={3}
                                  value={advData.postbackUrl}
                                  onChange={(e) => setAdvData({ ...advData, postbackUrl: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs font-mono"
                                />
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* ════════════════════════════════════════════════════════
                          PUBLISHER FLOW (STEPS 1-8)
                         ════════════════════════════════════════════════════════ */}
                      {mode === "publisher" && (
                        <>
                          {/* STEP 1: Account Creation */}
                          {currentStep === 1 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 1: Account Creation</h3>



                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Full Name *</label>
                                <input
                                  type="text"
                                  value={pubData.fullName}
                                  onChange={(e) => setPubData({ ...pubData, fullName: e.target.value })}
                                  placeholder="e.g. Jane Smith"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                />
                                {errors.fullName && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.fullName}</div>}
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Email Address *</label>
                                <input
                                  type="email"
                                  value={pubData.email}
                                  onChange={(e) => setPubData({ ...pubData, email: e.target.value })}
                                  placeholder="jane@example.com"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                />
                                {errors.email && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.email}</div>}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Password *</label>
                                  <input
                                    type="password"
                                    value={pubData.password}
                                    onChange={(e) => setPubData({ ...pubData, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                  />
                                  {errors.password && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.password}</div>}
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Confirm Password *</label>
                                  <input
                                    type="password"
                                    value={pubData.confirmPassword}
                                    onChange={(e) => setPubData({ ...pubData, confirmPassword: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-[#2563EB]"
                                  />
                                  {errors.confirmPassword && <div className="text-[11px] text-red-500 font-bold mt-1">{errors.confirmPassword}</div>}
                                </div>
                              </div>

                              <div className="space-y-2 pt-2">
                                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                                  <input
                                    type="checkbox"
                                    checked={pubData.acceptPrivacy}
                                    onChange={(e) => setPubData({ ...pubData, acceptPrivacy: e.target.checked })}
                                    className="w-4 h-4 rounded text-[#2563EB]"
                                  />
                                  <span>I accept the <a href="#" onClick={(e) => e.preventDefault()} className="text-[#2563EB] font-bold hover:underline">Privacy Policy</a></span>
                                </label>
                                {errors.acceptPrivacy && <div className="text-[11px] text-red-500 font-bold">{errors.acceptPrivacy}</div>}

                                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                                  <input
                                    type="checkbox"
                                    checked={pubData.acceptTerms}
                                    onChange={(e) => setPubData({ ...pubData, acceptTerms: e.target.checked })}
                                    className="w-4 h-4 rounded text-[#2563EB]"
                                  />
                                  <span>I accept the <a href="#" onClick={(e) => e.preventDefault()} className="text-[#2563EB] font-bold hover:underline">Terms & Conditions</a></span>
                                </label>
                                {errors.acceptTerms && <div className="text-[11px] text-red-500 font-bold">{errors.acceptTerms}</div>}
                              </div>
                            </div>
                          )}

                          {/* STEP 2: Contact Verification */}
                          {currentStep === 2 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 2: Contact Verification</h3>

                              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 leading-relaxed font-medium">
                                Please verify your Email address and Phone number to ensure account security.
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Country (Confirmation) *</label>
                                  <select
                                    value={pubData.country}
                                    onChange={(e) => setPubData({ ...pubData, country: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="United States">United States (+1)</option>
                                    <option value="Canada">Canada (+1)</option>
                                    <option value="United Kingdom">United Kingdom (+44)</option>
                                    <option value="India">India (+91)</option>
                                    <option value="Germany">Germany (+49)</option>
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Time Zone *</label>
                                  <select
                                    value={pubData.timeZone}
                                    onChange={(e) => setPubData({ ...pubData, timeZone: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="UTC-05:00 (Eastern Time)">UTC-05:00 (Eastern Time - EST)</option>
                                    <option value="UTC-08:00 (Pacific Time)">UTC-08:00 (Pacific Time - PST)</option>
                                    <option value="UTC+00:00 (GMT/UTC)">UTC+00:00 (GMT/UTC)</option>
                                    <option value="UTC+05:30 (IST)">UTC+05:30 (Indian Standard Time)</option>
                                  </select>
                                </div>
                              </div>

                              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900">
                                  <span>Email Validation: {pubData.email || "jane@example.com"}</span>
                                  {pubEmailVerified ? (
                                    <span className="text-emerald-600 font-extrabold">✓ Verified</span>
                                  ) : (
                                    <span className="text-amber-600 font-bold">Unverified</span>
                                  )}
                                </div>

                                {!pubEmailVerified && (
                                  <div className="flex items-center gap-3">
                                    <input
                                      type="text"
                                      value={pubData.emailOtp}
                                      onChange={(e) => setPubData({ ...pubData, emailOtp: e.target.value })}
                                      placeholder="Enter 6-digit Email OTP"
                                      className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setPubEmailVerified(true)}
                                      className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold hover:bg-blue-700 cursor-pointer"
                                    >
                                      Verify OTP
                                    </button>
                                  </div>
                                )}
                              </div>

                              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                <div className="flex items-center justify-between text-xs font-extrabold text-slate-900">
                                  <span>Phone Number Validation</span>
                                  {pubPhoneVerified ? (
                                    <span className="text-emerald-600 font-extrabold">✓ Verified</span>
                                  ) : (
                                    <span className="text-amber-600 font-bold">Unverified</span>
                                  )}
                                </div>

                                <input
                                  type="tel"
                                  value={pubData.phoneNumber}
                                  onChange={(e) => setPubData({ ...pubData, phoneNumber: e.target.value })}
                                  placeholder="+1 (555) 234-5678"
                                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs mb-2"
                                />

                                {!pubPhoneVerified && (
                                  <div className="flex items-center gap-3">
                                    <input
                                      type="text"
                                      value={pubData.phoneOtp}
                                      onChange={(e) => setPubData({ ...pubData, phoneOtp: e.target.value })}
                                      placeholder="Enter 6-digit SMS OTP"
                                      className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => setPubPhoneVerified(true)}
                                      className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold hover:bg-blue-700 cursor-pointer"
                                    >
                                      Verify OTP
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* STEP 3: Profile Basics */}
                          {currentStep === 3 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 3: Profile Basics</h3>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                                  Username (Unique) <span className="text-slate-400">(Optional)</span>
                                </label>
                                <input
                                  type="text"
                                  value={pubData.username}
                                  onChange={(e) => setPubData({ ...pubData, username: e.target.value })}
                                  placeholder="janesmith_media"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm"
                                />
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">City *</label>
                                  <input
                                    type="text"
                                    value={pubData.city}
                                    onChange={(e) => setPubData({ ...pubData, city: e.target.value })}
                                    placeholder="New York"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm"
                                  />
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">State / Region *</label>
                                  <input
                                    type="text"
                                    value={pubData.stateRegion}
                                    onChange={(e) => setPubData({ ...pubData, stateRegion: e.target.value })}
                                    placeholder="NY"
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* STEP 4: Professional Info */}
                          {currentStep === 4 && (
                            <div className="space-y-5">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 4: Professional Info</h3>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-2">User Type *</label>
                                <div className="flex flex-wrap gap-2">
                                  {["Affiliate", "Influencer", "Content Creator", "Agency", "Media Buyer"].map((type) => (
                                    <button
                                      key={type}
                                      type="button"
                                      onClick={() => setPubData({ ...pubData, userType: type })}
                                      className={`px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                        pubData.userType === type
                                          ? "bg-[#2563EB] text-white border-[#2563EB]"
                                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                                      }`}
                                    >
                                      {type}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs font-semibold">
                                <div><span className="text-slate-500">User ID: </span><span className="font-extrabold text-slate-900">{pubData.userId}</span></div>
                                <div><span className="text-slate-500">Role: </span><span className="px-2 py-0.5 rounded bg-[#2563EB] text-white text-[11px] font-extrabold uppercase">{pubData.assignedRole}</span></div>
                              </div>

                              {/* Traffic Sources (Multi-select) */}
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-2">Traffic Sources (Multi-select) *</label>
                                <div className="flex flex-wrap gap-2">
                                  {["Instagram", "YouTube", "Website/Blog", "Paid Ads", "Telegram / WhatsApp", "SEO / Content", "Email Marketing", "Other"].map((src) => {
                                    const isSel = pubData.trafficSources.includes(src)
                                    return (
                                      <button
                                        key={src}
                                        type="button"
                                        onClick={() => setPubData({ ...pubData, trafficSources: toggleArrayItem(pubData.trafficSources, src) })}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                          isSel ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                                        }`}
                                      >
                                        {isSel ? "✓ " : "+ "}
                                        {src}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>

                              {/* Primary Niche & Experience Level */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Primary Niche *</label>
                                  <select
                                    value={pubData.primaryNiche}
                                    onChange={(e) => setPubData({ ...pubData, primaryNiche: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    {["Fashion", "Tech", "Finance", "Fitness", "Education", "Beauty", "Health", "Gaming", "Crypto", "Other"].map((n) => (
                                      <option key={n} value={n}>{n}</option>
                                    ))}
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Experience Level *</label>
                                  <select
                                    value={pubData.experienceLevel}
                                    onChange={(e) => setPubData({ ...pubData, experienceLevel: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    {["Beginner", "Intermediate", "Advanced", "Expert"].map((exp) => (
                                      <option key={exp} value={exp}>{exp}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>

                              {/* Years of Experience & Monthly Traffic Volume */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Years of Experience *</label>
                                  <select
                                    value={pubData.yearsExperience}
                                    onChange={(e) => setPubData({ ...pubData, yearsExperience: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    {["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((num) => (
                                      <option key={num} value={`${num} Years`}>{num} {num === "1" ? "Year" : "Years"}</option>
                                    ))}
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Monthly Traffic Volume *</label>
                                  <select
                                    value={pubData.monthlyTrafficVolume}
                                    onChange={(e) => setPubData({ ...pubData, monthlyTrafficVolume: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    {["New", "<1000", "1k-10k", "10k-50k", "50k-100k", "100k+"].map((v) => (
                                      <option key={v} value={v}>{v}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>

                              {/* Promotion Method (Multi-select) */}
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-2">Promotion Methods (Multi-select) *</label>
                                <div className="flex flex-wrap gap-2">
                                  {["Organic Social", "Paid Search / PPC", "Influencer Reviews", "Email Lists", "Native Ads", "Push Notifications"].map((pm) => {
                                    const isSel = pubData.promotionMethods.includes(pm)
                                    return (
                                      <button
                                        key={pm}
                                        type="button"
                                        onClick={() => setPubData({ ...pubData, promotionMethods: toggleArrayItem(pubData.promotionMethods, pm) })}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                          isSel ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                                        }`}
                                      >
                                        {isSel ? "✓ " : "+ "}
                                        {pm}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* STEP 5: Platform Details */}
                          {currentStep === 5 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 5: Dynamic Platform Details</h3>
                              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium leading-relaxed">
                                Provide channel profile links and subscriber/follower metrics for your active promotion channels.
                              </div>

                              <div className="space-y-3">
                                {pubData.platforms.map((p, idx) => (
                                  <div key={p.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                                    <div className="sm:col-span-3">
                                      <div className="text-[11px] font-bold text-slate-500 mb-1">Channel</div>
                                      <input
                                        type="text"
                                        value={p.method}
                                        onChange={(e) => {
                                          const updated = [...pubData.platforms]
                                          updated[idx].method = e.target.value
                                          setPubData({ ...pubData, platforms: updated })
                                        }}
                                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold"
                                      />
                                    </div>
                                    <div className="sm:col-span-6">
                                      <div className="text-[11px] font-bold text-slate-500 mb-1">Profile / Website URL</div>
                                      <input
                                        type="text"
                                        value={p.url}
                                        onChange={(e) => {
                                          const updated = [...pubData.platforms]
                                          updated[idx].url = e.target.value
                                          setPubData({ ...pubData, platforms: updated })
                                        }}
                                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-mono"
                                      />
                                    </div>
                                    <div className="sm:col-span-3">
                                      <div className="text-[11px] font-bold text-slate-500 mb-1">Followers / Audience</div>
                                      <input
                                        type="text"
                                        value={p.followers}
                                        onChange={(e) => {
                                          const updated = [...pubData.platforms]
                                          updated[idx].followers = e.target.value
                                          setPubData({ ...pubData, platforms: updated })
                                        }}
                                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-bold"
                                      />
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Intended Campaign Categories */}
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-2">Intended Campaign Categories (Multi-select) *</label>
                                <div className="flex flex-wrap gap-2">
                                  {["E-commerce", "SaaS / Software", "Finance & Crypto", "Lead Gen", "Gaming & Mobile Apps", "Health & Wellness"].map((cat) => {
                                    const isSel = pubData.intendedCampaignCategories.includes(cat)
                                    return (
                                      <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setPubData({ ...pubData, intendedCampaignCategories: toggleArrayItem(pubData.intendedCampaignCategories, cat) })}
                                        className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                          isSel ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                                        }`}
                                      >
                                        {isSel ? "✓ " : "+ "}
                                        {cat}
                                      </button>
                                    )
                                  })}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* STEP 6: Application Questions */}
                          {currentStep === 6 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 6: Affiliate Application Questions</h3>
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">How will you promote offers? *</label>
                                <textarea
                                  rows={3}
                                  value={pubData.howPromote}
                                  onChange={(e) => setPubData({ ...pubData, howPromote: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Have you worked with networks before? *</label>
                                <div className="flex items-center gap-4 mb-3">
                                  {(["Yes", "No"] as const).map((opt) => (
                                    <label key={opt} className="inline-flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                                      <input
                                        type="radio"
                                        name="workedBefore"
                                        checked={pubData.workedWithNetworksBefore === opt}
                                        onChange={() => setPubData({ ...pubData, workedWithNetworksBefore: opt })}
                                        className="w-4 h-4 text-[#2563EB]"
                                      />
                                      <span>{opt}</span>
                                    </label>
                                  ))}
                                </div>

                                {pubData.workedWithNetworksBefore === "Yes" && (
                                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div>
                                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Previous Platform</label>
                                      <input
                                        type="text"
                                        value={pubData.previousPlatformName}
                                        onChange={(e) => setPubData({ ...pubData, previousPlatformName: e.target.value })}
                                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Time Period</label>
                                      <input
                                        type="text"
                                        value={pubData.previousTimePeriod}
                                        onChange={(e) => setPubData({ ...pubData, previousTimePeriod: e.target.value })}
                                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs"
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Category / Vertical</label>
                                      <input
                                        type="text"
                                        value={pubData.previousProjectCategory}
                                        onChange={(e) => setPubData({ ...pubData, previousProjectCategory: e.target.value })}
                                        className="w-full px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs"
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Why do you want to join Candid Leaders? *</label>
                                <textarea
                                  rows={2}
                                  value={pubData.whyJoin}
                                  onChange={(e) => setPubData({ ...pubData, whyJoin: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs"
                                />
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Where did you hear about us? *</label>
                                <select
                                  value={pubData.whereHeardUs}
                                  onChange={(e) => setPubData({ ...pubData, whereHeardUs: e.target.value })}
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                >
                                  {["Search Engine", "Social Media", "Friend / Referral", "Blog / Forum", "Event / Webinar"].map((w) => (
                                    <option key={w} value={w}>{w}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          )}

                          {/* STEP 7: Compliance */}
                          {currentStep === 7 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 7: Compliance & Verification</h3>
                              
                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Identity Verification Document Type *</label>
                                <div className="grid grid-cols-3 gap-3 mb-3">
                                  {(["Passport", "Driving License", "National ID"] as const).map((doc) => (
                                    <button
                                      key={doc}
                                      type="button"
                                      onClick={() => setPubData({ ...pubData, idDocumentType: doc })}
                                      className={`py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                                        pubData.idDocumentType === doc ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                                      }`}
                                    >
                                      {doc}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="p-6 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-center hover:border-blue-400 transition-colors">
                                <div className="text-2xl mb-1">📄</div>
                                <div className="text-xs font-extrabold text-slate-800 mb-1">Upload Government-Issued {pubData.idDocumentType}</div>
                                <div className="text-[11px] text-slate-500 mb-3">Supports JPG, PNG or PDF (Max 10MB)</div>
                                <input
                                  type="file"
                                  id="pub-id-upload"
                                  className="hidden"
                                  onChange={(e) => {
                                    if (e.target.files?.[0]) setPubData({ ...pubData, idDocumentFile: e.target.files[0] })
                                  }}
                                />
                                <label htmlFor="pub-id-upload" className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold hover:bg-blue-700 cursor-pointer inline-block">
                                  {pubData.idDocumentFile ? `Selected: ${pubData.idDocumentFile.name}` : "Choose Document File"}
                                </label>
                              </div>
                            </div>
                          )}

                          {/* STEP 8: Payment Setup */}
                          {currentStep === 8 && (
                            <div className="space-y-4">
                              <h3 className="text-xl font-extrabold text-slate-900">Step 8: Payment Setup (Skippable)</h3>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Payment Method *</label>
                                  <select
                                    value={pubData.paymentMethod}
                                    onChange={(e) => setPubData({ ...pubData, paymentMethod: e.target.value as any })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="UPI">UPI / Instant Pay</option>
                                    <option value="Bank">Direct Bank Transfer</option>
                                    <option value="PayPal">PayPal Account</option>
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Payment Frequency *</label>
                                  <select
                                    value={pubData.paymentFrequency}
                                    onChange={(e) => setPubData({ ...pubData, paymentFrequency: e.target.value as any })}
                                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs focus:outline-none"
                                  >
                                    <option value="Weekly">Weekly (Every Monday)</option>
                                    <option value="Bi-weekly">Bi-Weekly</option>
                                    <option value="Monthly">Monthly</option>
                                  </select>
                                </div>
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-800 mb-1.5">Payment Details / Account / Tax ID *</label>
                                <input
                                  type="text"
                                  value={pubData.taxInfo}
                                  onChange={(e) => setPubData({ ...pubData, taxInfo: e.target.value })}
                                  placeholder="e.g. UPI ID: alex@upi / Account: 9840294829 / Tax ID"
                                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs font-mono"
                                />
                              </div>
                            </div>
                          )}
                        </>
                      )}

                    </div>

                    {/* Bottom Step Buttons */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          if (currentStep > 1) handleBack()
                          else if (onNavigateLanding) onNavigateLanding()
                          else navigate("/")
                        }}
                        className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-extrabold text-xs hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="19" y1="12" x2="5" y2="12" />
                          <polyline points="12 19 5 12 12 5" />
                        </svg>
                        {currentStep > 1 ? "Back" : "Back to Home"}
                      </button>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="px-8 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
                        >
                          {currentStep === 8 ? "Complete Registration →" : "Next Step →"}
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  )
}
