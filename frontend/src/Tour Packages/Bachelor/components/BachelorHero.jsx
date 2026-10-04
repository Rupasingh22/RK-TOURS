import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Zap,
  Flame,
  Search,
  Compass,
  ChevronDown,
  ShieldCheck,
  Star,
  Users,
  MapPin,
  Sparkles,
  ArrowRight,
  Plane,
  Car,
  GlassWater
} from 'lucide-react'
import { bachelorHeroStats } from '../bachelorData'

export default function BachelorHero({
  searchQuery = '',
  setSearchQuery = () => {},
  onExploreClick = () => {},
  onBuildClick = () => {},
}) {
  const [localSearch, setLocalSearch] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localSearch)
    onExploreClick()
  }

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#070b14] text-white pt-24 pb-16 lg:pt-28 lg:pb-24">
      {/* ── Dynamic High-Energy Background Photography ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=2000&q=85"
          alt="Bachelor Crew Rooftop City Nightlife Celebration"
          className="h-full w-full object-cover object-center filter brightness-45 contrast-110 scale-105"
        />
        {/* Dark Obsidian & Cyber Metallic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/75 to-[#070b14]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/95 via-[#070b14]/70 to-transparent" />
      </div>

      {/* ── Ambient Neon Amber & Cyber Blue Glows ── */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none" />

      {/* ── Tech Mesh Pattern Overlay ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Main Hero Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/60">Tour Packages</span>
          <span>/</span>
          <span className="text-amber-400 font-semibold tracking-wide">Bachelor Tours</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/15 backdrop-blur-md px-4 py-1.5 mb-6 shadow-lg shadow-amber-500/10">
              <Flame className="h-4 w-4 text-amber-400 fill-amber-400/30" />
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-400">
                BACHELOR COLLECTION • THE ULTIMATE SQUAD GETAWAY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-6">
              Adventure Starts <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                With Your Crew
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
              Discover unforgettable destinations, high-energy experiences, nightlife, adventure, luxury stays and epic group trips designed for bachelor getaways.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 text-sm sm:text-base uppercase tracking-wider"
              >
                <Zap className="h-5 w-5 fill-slate-950 text-slate-950 group-hover:animate-bounce" />
                <span>Explore Bachelor Trips</span>
                <ChevronDown className="h-4 w-4 text-slate-950/70" />
              </button>

              <button
                type="button"
                onClick={onBuildClick}
                className="inline-flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 border border-white/20 hover:border-amber-400 text-white font-bold px-7 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base uppercase tracking-wider shadow-lg"
              >
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>Build Your Trip</span>
              </button>
            </div>

            {/* Floating Live Group Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15 max-w-2xl">
              {bachelorHeroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-0.5 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphism Squad Trip Finder Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-black/90">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block">
                    Fast Squad Trip Finder
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">Where is the crew landing?</h3>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <Flame className="h-5 w-5 text-amber-400" />
                </div>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div>
                  <label htmlFor="bachelor-search" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Destination or Adventure Keyword
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-amber-400" />
                    <input
                      id="bachelor-search"
                      type="text"
                      value={localSearch}
                      onChange={(e) => {
                        setLocalSearch(e.target.value)
                        setSearchQuery(e.target.value)
                      }}
                      placeholder="e.g. Dubai, Bali, Las Vegas, Bangkok, Ibiza..."
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-950/80 border border-white/15 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-400 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Popular Squad Hotspots */}
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                    Trending Squad Hotspots:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Dubai', 'Bali', 'Goa', 'Las Vegas', 'Bangkok', 'Ibiza', 'Phuket'].map((dest) => (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => {
                          setLocalSearch(dest)
                          setSearchQuery(dest)
                          onExploreClick()
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-slate-950 border border-white/10 hover:border-amber-400 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition-all duration-200 font-medium"
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-lg shadow-amber-500/20 uppercase tracking-wider text-sm"
                >
                  <Zap className="h-4 w-4 fill-slate-950" />
                  <span>Search Bachelor Trips</span>
                </button>
              </form>

              {/* Trust Badges */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  <span>Private Group Compounds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span>VIP Nightlife Host</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
