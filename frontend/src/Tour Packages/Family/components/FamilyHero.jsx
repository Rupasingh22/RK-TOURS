import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Search,
  Sparkles,
  Heart,
  ShieldCheck,
  ChevronDown,
  Star,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  Plane,
} from 'lucide-react'
import { familyHeroStats } from '../familyData'

export default function FamilyHero({
  searchQuery = '',
  setSearchQuery = () => {},
  onExploreClick = () => {},
  onPlanClick = () => {},
}) {
  const [localSearch, setLocalSearch] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localSearch)
    onExploreClick()
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16 lg:pt-28 lg:pb-20">
      {/* ── Background Photography & Multilayer Gradient ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=85"
          alt="Happy Family Travelling Together"
          className="h-full w-full object-cover object-center filter brightness-65 scale-105 animate-pulse-subtle"
        />
        {/* Layered dark gradients for editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
      </div>

      {/* ── Golden Glow Ambient Lighting ── */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[350px] bg-[#d7b36a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Subtle Pattern Overlay ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(215, 179, 106, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Main Content Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-white/60 mb-6">
          <Link to="/" className="hover:text-[#d7b36a] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/60">Tour Packages</span>
          <span>/</span>
          <span className="text-[#d7b36a] font-medium">Family Tours</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Description & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/50 bg-[#d7b36a]/15 backdrop-blur-md px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-[#d7b36a]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d7b36a]">
                FAMILY TOUR PACKAGES • UNFORGETTABLE JOURNEYS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-6">
              Create Beautiful <span className="font-serif italic font-normal text-[#d7b36a]">Memories Together</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed mb-8">
              Discover thoughtfully designed family holidays filled with adventure, comfort, culture,
              entertainment and unforgettable moments for every generation — from toddlers and teenagers to grandparents.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#d7b36a]/25 hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                <Compass className="h-5 w-5 group-hover:rotate-45 transition-transform text-slate-950" />
                <span>Explore Family Tours</span>
                <ChevronDown className="h-4 w-4 text-slate-950/70" />
              </button>

              <button
                type="button"
                onClick={onPlanClick}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white font-medium px-7 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <Users className="h-4 w-4 text-[#d7b36a]" />
                <span>Plan Your Family Trip</span>
              </button>
            </div>

            {/* Floating Live Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15 max-w-2xl">
              {familyHeroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d7b36a]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/65 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphism Destination Search & Quick Planner Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/85 backdrop-blur-xl border border-white/20 p-6 sm:p-8 shadow-2xl shadow-black/80">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#d7b36a]">
                    Find Your Family Getaway
                  </span>
                  <h3 className="text-xl font-medium text-white mt-0.5">Where is the family headed?</h3>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-[#d7b36a]/15 border border-[#d7b36a]/30 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-[#d7b36a]" />
                </div>
              </div>

              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div>
                  <label htmlFor="family-search" className="block text-xs font-medium text-white/70 mb-1.5">
                    Search Destination or Experience
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#d7b36a]" />
                    <input
                      id="family-search"
                      type="text"
                      value={localSearch}
                      onChange={(e) => {
                        setLocalSearch(e.target.value)
                        setSearchQuery(e.target.value)
                      }}
                      placeholder="e.g. Dubai, Singapore, Swiss Alps, Bali..."
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-950/70 border border-white/20 rounded-2xl text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d7b36a]/60 focus:border-[#d7b36a] transition-all"
                    />
                  </div>
                </div>

                {/* Popular Pills */}
                <div>
                  <p className="text-[11px] font-medium text-white/50 mb-2">Trending Family Escapes:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Singapore', 'Dubai', 'Switzerland', 'Phuket', 'Kashmir', 'London'].map((dest) => (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => {
                          setLocalSearch(dest)
                          setSearchQuery(dest)
                          onExploreClick()
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-[#d7b36a]/20 border border-white/10 hover:border-[#d7b36a]/50 text-white/80 hover:text-[#d7b36a] transition-all duration-200"
                      >
                        {dest}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7b36a] to-[#c89336] text-slate-950 font-semibold py-3.5 px-6 rounded-2xl hover:opacity-95 transition-all duration-200 hover:shadow-lg hover:shadow-[#d7b36a]/20"
                >
                  <Search className="h-4 w-4" />
                  <span>Search Family Packages</span>
                </button>
              </form>

              {/* Trust Features Strip */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#d7b36a]" />
                  <span>Kid-Proofed Stays</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span>Private Chauffeurs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
