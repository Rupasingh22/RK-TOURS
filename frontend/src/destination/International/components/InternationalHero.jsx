import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Globe2,
  Plane,
  Search,
  ChevronDown,
  Sparkles,
  MapPin,
  ShieldCheck,
  Star,
  ArrowRight,
  ChevronRight,
  Award,
  Building,
} from 'lucide-react'

export default function InternationalHero({
  searchQuery = '',
  setSearchQuery = () => {},
  totalCountries = 20,
  onExploreClick = () => {},
}) {
  const [localSearch, setLocalSearch] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearchQuery(localSearch)
    onExploreClick()
  }

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-16 lg:pt-28 lg:pb-24">
      {/* ── Layer 1: Cinematic Photography Backdrop ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2000&q=85"
          alt="International Travel Odyssey"
          className="h-full w-full object-cover object-center scale-105 animate-pulse-subtle filter brightness-75"
        />
        {/* Multilayer dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/60 to-slate-950/90" />
      </div>

      {/* ── Layer 2: Subtle World Map Vector Grid Pattern ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(215, 179, 106, 0.25) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* ── Layer 3: Ambient Golden Glow Blobs ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d7b36a]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Main Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/60">
          <Link to="/" className="hover:text-[#d7b36a] transition-colors flex items-center gap-1">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-white/40" />
          <span className="text-white/60">Destinations</span>
          <ChevronRight className="h-3 w-3 text-white/40" />
          <span className="text-[#d7b36a] font-medium">International</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Tagline & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/50 bg-[#d7b36a]/10 backdrop-blur-md px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-[#d7b36a] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d7b36a]">
                Explore The World • 20 Countries
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6">
              Discover <span className="font-serif italic font-normal text-[#d7b36a]">Extraordinary Places</span> Around the World
            </h1>

            {/* Detailed Supporting Text */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed mb-8">
              Embark on handcrafted journeys across 20 bucket-list countries. From Parisian grand boulevards 
              and Swiss alpine glaciers to turquoise Maldivian atolls, Kyoto Zen sanctuaries, and ancient Egyptian pyramids — 
              experience uncompromised luxury and bespoke international itineraries.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#d7b36a]/25 hover:scale-105 active:scale-95"
              >
                <Compass className="h-5 w-5 group-hover:rotate-45 transition-transform duration-300 text-slate-950" />
                <span>Explore Countries</span>
                <ChevronDown className="h-4 w-4 text-slate-950/70" />
              </button>

              <Link
                to="/tour-packages/family"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white font-medium px-7 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <Plane className="h-4 w-4 text-[#d7b36a]" />
                <span>View International Tours</span>
              </Link>
            </div>

            {/* Floating Live Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15 max-w-2xl">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d7b36a]">20</div>
                <div className="text-xs text-white/65 uppercase tracking-wider mt-0.5">Top Countries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d7b36a]">220+</div>
                <div className="text-xs text-white/65 uppercase tracking-wider mt-0.5">Iconic Places</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d7b36a]">60+</div>
                <div className="text-xs text-white/65 uppercase tracking-wider mt-0.5">Curated Hotels</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d7b36a]">100%</div>
                <div className="text-xs text-white/65 uppercase tracking-wider mt-0.5">Tailor-Made</div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Interactive Search & Filter Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/20 p-6 sm:p-8 shadow-2xl shadow-black/80">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d7b36a]">
                    Instant Global Discovery
                  </span>
                  <h3 className="text-xl font-medium text-white mt-0.5">Where will you go next?</h3>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-[#d7b36a]/15 border border-[#d7b36a]/30 flex items-center justify-center">
                  <Globe2 className="h-5 w-5 text-[#d7b36a]" />
                </div>
              </div>

              {/* Form Search Bar */}
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div className="relative">
                  <label htmlFor="hero-search" className="block text-xs font-medium text-white/70 mb-1.5">
                    Country, City, or Experience
                  </label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#d7b36a]" />
                    <input
                      id="hero-search"
                      type="text"
                      value={localSearch}
                      onChange={(e) => {
                        setLocalSearch(e.target.value)
                        setSearchQuery(e.target.value)
                      }}
                      placeholder="Search Paris, Bali, Dubai, Tokyo..."
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-950/70 border border-white/20 rounded-2xl text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#d7b36a]/60 focus:border-[#d7b36a] transition-all"
                    />
                  </div>
                </div>

                {/* Popular Search Pills */}
                <div>
                  <p className="text-[11px] font-medium text-white/50 mb-2">Trending Destinations:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Switzerland', 'Japan', 'Maldives', 'France', 'Dubai', 'Italy'].map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => {
                          setLocalSearch(city)
                          setSearchQuery(city)
                          onExploreClick()
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-[#d7b36a]/20 border border-white/10 hover:border-[#d7b36a]/50 text-white/80 hover:text-[#d7b36a] transition-all duration-200"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Search Button */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7b36a] to-[#c89336] text-slate-950 font-semibold py-3.5 px-6 rounded-2xl hover:opacity-95 transition-all duration-200 hover:shadow-lg hover:shadow-[#d7b36a]/20"
                >
                  <Search className="h-4 w-4" />
                  <span>Search All 20 Countries</span>
                </button>
              </form>

              {/* Verified Trust Badges */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#d7b36a]" />
                  <span>Verified Visa Guidance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span>4.9/5 Voyager Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
