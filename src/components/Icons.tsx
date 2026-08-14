import React from "react"

export function IconAnalytics() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <defs>
        <linearGradient id="ia1" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#93C5FD"/><stop offset="1" stopColor="#1D4ED8"/></linearGradient>
        <linearGradient id="ia2" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#60A5FA"/><stop offset="1" stopColor="#2563EB"/></linearGradient>
        <filter id="iaf" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2563EB" floodOpacity="0.3"/></filter>
      </defs>
      <ellipse cx="36" cy="63" rx="26" ry="5" fill="#BFDBFE" opacity="0.5"/>
      <rect x="8" y="40" width="12" height="20" rx="4" fill="url(#ia1)" filter="url(#iaf)"/>
      <rect x="24" y="28" width="12" height="32" rx="4" fill="url(#ia2)" filter="url(#iaf)"/>
      <rect x="40" y="18" width="12" height="42" rx="4" fill="url(#ia1)" filter="url(#iaf)"/>
      <rect x="56" y="30" width="12" height="30" rx="4" fill="url(#ia2)" filter="url(#iaf)"/>
      <rect x="9" y="41" width="4" height="8" rx="2" fill="white" opacity="0.45"/>
      <rect x="25" y="29" width="4" height="8" rx="2" fill="white" opacity="0.45"/>
      <rect x="41" y="19" width="4" height="8" rx="2" fill="white" opacity="0.45"/>
      <rect x="57" y="31" width="4" height="8" rx="2" fill="white" opacity="0.45"/>
    </svg>
  )
}

export function IconTarget() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="it1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#93C5FD"/><stop offset="1" stopColor="#2563EB"/></linearGradient>
        <filter id="itf" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#3B82F6" floodOpacity="0.25"/></filter>
      </defs>
      <ellipse cx="40" cy="73" rx="28" ry="6" fill="#BFDBFE" opacity="0.4"/>
      <circle cx="40" cy="40" r="34" fill="white" filter="url(#itf)"/>
      <circle cx="40" cy="40" r="28" fill="#EFF6FF"/>
      <circle cx="40" cy="40" r="28" stroke="#BFDBFE" strokeWidth="2" fill="none"/>
      <circle cx="40" cy="40" r="20" fill="white"/>
      <circle cx="40" cy="40" r="20" stroke="#93C5FD" strokeWidth="2" fill="none"/>
      <circle cx="40" cy="40" r="12" fill="url(#it1)"/>
      <circle cx="40" cy="40" r="6" fill="#1D4ED8"/>
      <circle cx="37" cy="37" r="2.5" fill="white" opacity="0.55"/>
      <g transform="translate(54, 20) rotate(45)">
        <rect x="-3" y="-18" width="6" height="22" rx="3" fill="url(#it1)"/>
        <polygon points="0,-22 -7,-10 7,-10" fill="#2563EB"/>
      </g>
    </svg>
  )
}

export function IconShield() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <defs>
        <linearGradient id="is1" x1="0" y1="0" x2="0.6" y2="1"><stop stopColor="#60A5FA"/><stop offset="1" stopColor="#1D4ED8"/></linearGradient>
        <filter id="isf" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#2563EB" floodOpacity="0.3"/></filter>
      </defs>
      <ellipse cx="36" cy="66" rx="24" ry="5" fill="#BFDBFE" opacity="0.5"/>
      <path d="M36 8 L60 18 L60 38 C60 52 48 62 36 66 C24 62 12 52 12 38 L12 18 Z" fill="url(#is1)" filter="url(#isf)"/>
      <path d="M36 12 L56 21 L56 38 C56 50 46 59 36 63 C26 59 16 50 16 38 L16 21 Z" fill="url(#is1)"/>
      <path d="M36 14 L38 20 L56 22 L40 22 L40 40 L36 44 L32 40 L32 22 L16 22 L34 20 Z" fill="white" opacity="0.15"/>
      <polyline points="26,36 33,43 48,28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

export function IconGlobe() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <defs>
        <linearGradient id="ig1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#93C5FD"/><stop offset="1" stopColor="#2563EB"/></linearGradient>
        <filter id="igf" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#3B82F6" floodOpacity="0.25"/></filter>
      </defs>
      <ellipse cx="36" cy="66" rx="24" ry="5" fill="#BFDBFE" opacity="0.5"/>
      <circle cx="36" cy="36" r="28" fill="url(#ig1)" filter="url(#igf)"/>
      <circle cx="36" cy="36" r="28" fill="#EFF6FF"/>
      <circle cx="36" cy="36" r="28" fill="url(#ig1)" opacity="0.15"/>
      <ellipse cx="36" cy="36" rx="16" ry="28" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <ellipse cx="36" cy="36" rx="28" ry="10" stroke="#3B82F6" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <ellipse cx="36" cy="36" rx="28" ry="22" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.4"/>
      <line x1="8" y1="36" x2="64" y2="36" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/>
      <line x1="36" y1="8" x2="36" y2="64" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="36" cy="36" r="28" stroke="#BFDBFE" strokeWidth="2" fill="none"/>
      <circle cx="27" cy="27" r="5" fill="white" opacity="0.4"/>
    </svg>
  )
}

export function IconTeam() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <defs>
        <linearGradient id="ite1" x1="0" y1="0" x2="0.6" y2="1"><stop stopColor="#93C5FD"/><stop offset="1" stopColor="#2563EB"/></linearGradient>
        <filter id="itef" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2563EB" floodOpacity="0.3"/></filter>
      </defs>
      <ellipse cx="36" cy="65" rx="26" ry="5" fill="#BFDBFE" opacity="0.5"/>
      <circle cx="22" cy="22" r="10" fill="url(#ite1)" filter="url(#itef)"/>
      <circle cx="20" cy="20" r="4" fill="white" opacity="0.4"/>
      <rect x="6" y="38" width="30" height="18" rx="8" fill="url(#ite1)" filter="url(#itef)"/>
      <circle cx="50" cy="22" r="10" fill="url(#ite1)" filter="url(#itef)"/>
      <circle cx="48" cy="20" r="4" fill="white" opacity="0.4"/>
      <rect x="36" y="38" width="30" height="18" rx="8" fill="url(#ite1)" filter="url(#itef)"/>
    </svg>
  )
}

export function IconSpark() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <defs>
        <linearGradient id="isp1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#A5B4FC"/><stop offset="1" stopColor="#1D4ED8"/></linearGradient>
        <filter id="ispf" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#6366F1" floodOpacity="0.4"/></filter>
      </defs>
      <ellipse cx="36" cy="64" rx="24" ry="5" fill="#C7D2FE" opacity="0.5"/>
      <path d="M36 8 L41 28 L62 28 L46 40 L52 62 L36 50 L20 62 L26 40 L10 28 L31 28 Z" fill="url(#isp1)" filter="url(#ispf)"/>
      <path d="M36 14 L40 28 L36 26 L32 28 Z" fill="white" opacity="0.4"/>
    </svg>
  )
}
