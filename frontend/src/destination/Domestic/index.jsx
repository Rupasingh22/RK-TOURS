import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  ShieldCheck,
  Heart,
  Award,
  Plane,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Send,
  Sliders,
  DollarSign,
  Maximize2,
  X,
  Mountain,
  Sun,
  Crown,
  Quote,
  Flame,
  Globe2,
  Anchor,
  HelpCircle,
  Building,
  Key,
  Luggage,
  Coffee,
  UserCheck,
  FileText,
  BadgeCheck,
  Briefcase,
  Layers,
  Car,
  Train,
  Bus,
  Shield,
  LifeBuoy,
  Check,
  CheckCircle,
  Navigation,
  Camera,
  Utensils,
  Palmtree,
  Gem,
  Headphones,
  Zap,
  BookOpen,
  Tag,
  Filter,
  Search,
  Eye,
  Share2,
} from 'lucide-react'

import {
  domesticStatesData,
  regionsList,
  experienceCategories,
} from './domesticData'

// =========================================================================
// REUSABLE DYNAMIC IMAGE CAROUSEL (1-Second Auto-Rotation with 10 Images)
// =========================================================================

function DynamicImageCarousel({
  images,
  alt = 'India Destination',
  className = 'h-72 w-full',
  interval = 1000,
  showControls = true,
  showDots = true,
  badge = null,
  overlayGradient = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered || !images || images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images, interval, isHovered])

  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className={`relative overflow-hidden group select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, idx) => (
        <img
          key={img + idx}
          src={img}
          alt={`${alt} ${idx + 1}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
            idx === currentIndex
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-105 pointer-events-none z-0'
          }`}
        />
      ))}

      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-black/20 z-10 pointer-events-none" />
      )}

      {badge && (
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          {badge}
        </div>
      )}

      {showControls && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-slate-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-slate-950/90"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-slate-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-slate-950/90"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-2.5 inset-x-0 z-20 flex justify-center gap-1 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-4 bg-[#f6e5b4]' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Map Experience Type to Lucide Icon
function getExperienceIcon(type) {
  switch (type) {
    case 'Adventure':
    case 'Mountains':
      return Mountain
    case 'Luxury':
      return Crown
    case 'Spiritual':
      return Flame
    case 'Culture':
    case 'Heritage':
      return Building
    case 'Food':
      return Utensils
    case 'Nature':
      return Sparkles
    case 'Beaches':
    case 'Marine':
      return Anchor
    case 'Wildlife':
      return Sun
    case 'Shopping':
      return Gem
    default:
      return Compass
  }
}

// Curated 10 Hero Images for Domestic Grand Entrance
const domesticHeroImages = [
  'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1800&q=85',
]

// =========================================================================
// MAIN DOMESTIC DESTINATIONS COMPONENT
// =========================================================================

function Domestic() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeStateId, setActiveStateId] = useState('rajasthan')
  const stateNavRef = useRef(null)

  // Scroll to a specific state smoothly
  const scrollToState = (stateId) => {
    setActiveStateId(stateId)
    const element = document.getElementById(`state-${stateId}`)
    if (element) {
      const yOffset = -90 // header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Filter States based on Search, Region, and Category
  const filteredStates = domesticStatesData.filter((st) => {
    // Region Filter
    if (selectedRegion !== 'all' && st.region !== selectedRegion) {
      return false
    }

    // Category Filter across destinations
    if (selectedCategory !== 'All') {
      const hasCat = st.destinations.some((d) => d.category.toLowerCase() === selectedCategory.toLowerCase())
      if (!hasCat) return false
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase()
      const matchesState = st.name.toLowerCase().includes(q) || st.tagline.toLowerCase().includes(q)
      const matchesPlace = st.destinations.some((d) => d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q))
      return matchesState || matchesPlace
    }

    return true
  })

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 font-sans selection:bg-[#d7b36a]/30">

      {/* =========================================================================
          SECTION 1 — PREMIUM DOMESTIC DESTINATION HERO
          - Small label: EXPLORE INDIA
          - Large heading: Discover the Soul of India
          - Paragraph, Search Input, CTA buttons, Floating stats, Breadcrumbs
      ========================================================================= */}
      <section className="relative overflow-hidden px-4 pt-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-200/80 shadow-[0_32px_80px_rgba(15,23,42,0.14)]">
          {/* 10-Image Dynamic Auto-Rotating Hero Carousel */}
          <DynamicImageCarousel
            images={domesticHeroImages}
            alt="Discover Domestic India"
            className="h-[540px] sm:h-[620px] lg:h-[700px] w-full"
            interval={1000}
            showControls={true}
            showDots={true}
            overlayGradient={true}
          />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white pointer-events-none">
            {/* Top Bar: Breadcrumbs & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
              <nav className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/40 px-3.5 py-1 text-xs backdrop-blur-md">
                <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
                <span className="text-[#f6e5b4]">/</span>
                <span className="text-slate-300">Destinations</span>
                <span className="text-[#f6e5b4]">/</span>
                <span className="font-semibold text-[#f6e5b4]">Explore India</span>
              </nav>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-slate-950/60 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#f6e5b4] backdrop-blur-md">
                <Crown className="h-3.5 w-3.5 text-[#d7b36a]" />
                Sovereign Domestic Portfolios
              </div>
            </div>

            {/* Central Headline & Search */}
            <div className="max-w-3xl pointer-events-auto my-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#f6e5b4] backdrop-blur-md mb-3 border border-white/15">
                <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" />
                <span>EXPLORE INDIA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
                Discover the Soul of India.
              </h1>

              <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                From the golden desert fortresses of Rajasthan and misty tea hills of Munnar to the celestial temple spires of Tamil Nadu and pristine Himalayan ski slopes of Kashmir. Explore 20 distinct state worlds crafted for discerning travelers.
              </p>

              {/* Glassmorphic Search Bar */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl bg-slate-950/60 p-2 backdrop-blur-md border border-white/20 max-w-xl shadow-2xl">
                <div className="flex flex-1 items-center gap-2.5 px-3 py-1.5">
                  <Search className="h-4 w-4 text-[#d7b36a] shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 20 states, cities, forts, beaches..."
                    className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-slate-400 hover:text-white text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('state-explorer')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="rounded-xl bg-[#d7b36a] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-[#e5c98d] transition shadow shrink-0"
                >
                  Explore States
                </button>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#state-explorer"
                  className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-slate-100 transition shadow"
                >
                  Explore 20 States ↓
                </a>
                <Link
                  to="/tour-packages/family"
                  className="rounded-xl border border-white/30 bg-slate-950/40 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition backdrop-blur-md"
                >
                  View Tour Packages →
                </Link>
              </div>
            </div>

            {/* Bottom Floating Statistics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15 pointer-events-auto">
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">20 States</div>
                <div className="text-[10px] text-slate-300 font-light uppercase tracking-wider mt-0.5">Complete Sovereign Coverage</div>
              </div>
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">200+ Destinations</div>
                <div className="text-[10px] text-slate-300 font-light uppercase tracking-wider mt-0.5">Handpicked Historic Hubs</div>
              </div>
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">38 UNESCO Sites</div>
                <div className="text-[10px] text-slate-300 font-light uppercase tracking-wider mt-0.5">Monumental Treasures</div>
              </div>
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">100% Verified</div>
                <div className="text-[10px] text-slate-300 font-light uppercase tracking-wider mt-0.5">Palace Stays & Fleets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — INDIA TRAVEL DISCOVERY / REGION NAVIGATION
          - North, South, West, East, Central, North East
          - Category filter pills: Heritage, Nature, Beaches, Mountains, Wildlife...
      ========================================================================= */}
      <section id="state-explorer" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Compass className="h-3.5 w-3.5 text-[#d7b36a]" /> Region Architecture
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Filter by Geographic Region & Travel Interest.
            </h2>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredStates.length}</strong> of 20 States
          </div>
        </div>

        {/* Region Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-6">
          {regionsList.map((reg) => (
            <button
              key={reg.id}
              type="button"
              onClick={() => setSelectedRegion(reg.id)}
              className={`p-3 rounded-2xl border text-left transition flex flex-col justify-between ${
                selectedRegion === reg.id
                  ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                  : 'border-slate-200 bg-white text-slate-800 hover:border-gold-300 hover:bg-[#fffaf1]'
              }`}
            >
              <div>
                <span className={`text-[10px] font-bold block ${selectedRegion === reg.id ? 'text-[#f6e5b4]' : 'text-[#8a6b32]'}`}>
                  {reg.count}
                </span>
                <div className="text-xs font-serif font-bold mt-0.5">{reg.label}</div>
              </div>
              <div className="mt-2 text-[9px] text-slate-400 line-clamp-1">{reg.desc}</div>
            </button>
          ))}
        </div>

        {/* Experience Style Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 shrink-0 mr-1 flex items-center gap-1">
            <Filter className="h-3.5 w-3.5 text-[#d7b36a]" /> Style:
          </span>
          {experienceCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold shrink-0 transition ${
                selectedCategory === cat
                  ? 'bg-[#d7b36a] text-slate-950 shadow-sm font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          STICKY STATE NAVIGATION BAR
          - Horizontally scrollable list of all 20 states
          - Clicking smoothly scrolls to #state-[id] with visual indicator
      ========================================================================= */}
      <nav
        ref={stateNavRef}
        aria-label="Domestic States Fast Navigation"
        className="sticky top-0 z-30 bg-[#f8f5f0]/95 backdrop-blur-md border-y border-slate-200/80 shadow-sm py-2.5 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-2 flex items-center gap-1">
            <Navigation className="h-3 w-3 text-[#d7b36a]" /> Jump to:
          </span>
          {domesticStatesData.map((st) => (
            <button
              key={st.id}
              type="button"
              onClick={() => scrollToState(st.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium shrink-0 transition ${
                activeStateId === st.id
                  ? 'bg-slate-900 text-[#f6e5b4] font-bold shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {st.name}
            </button>
          ))}
        </div>
      </nav>

      {/* =========================================================================
          THE 20 STATE SECTIONS (ONE STATE = ONE LARGE PREMIUM SECTION)
          Varying editorial layouts (Variant 0, 1, 2, 3) across the 20 states:
          1. Rajasthan         2. Kerala         3. Goa             4. Maharashtra
          5. Himachal Pradesh  6. Uttarakhand    7. Uttar Pradesh   8. Gujarat
          9. Madhya Pradesh   10. Karnataka     11. Tamil Nadu     12. West Bengal
         13. Sikkim           14. Assam         15. Meghalaya      16. Odisha
         17. Andhra Pradesh   18. Telangana     19. Punjab         20. Jammu & Kashmir
      ========================================================================= */}
      <div className="space-y-16 py-12">
        {filteredStates.map((state, stateIndex) => {
          // Layout alternation across 4 distinct visual variants
          const layoutVariant = stateIndex % 4

          return (
            <article
              key={state.id}
              id={`state-${state.id}`}
              className="scroll-mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <div className="rounded-[2.5rem] border border-slate-200 bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">

                {/* -------------------------------------------------------------------
                    HEADER BANNER & EDITORIAL INTRODUCTION
                ------------------------------------------------------------------- */}
                <div className="p-6 sm:p-10 border-b border-slate-100 bg-gradient-to-br from-white via-[#fffaf1]/50 to-white">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs mb-1.5">
                        <span className="font-serif font-bold text-slate-400">STATE {String(stateIndex + 1).padStart(2, '0')}</span>
                        <span className="text-[#d7b36a]">•</span>
                        <span className="font-semibold uppercase tracking-wider text-[#8a6b32]">{state.personality}</span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
                        {state.name}
                      </h2>
                      <p className="text-sm sm:text-base font-serif italic text-[#8a6b32] mt-1">
                        "{state.tagline}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <div className="rounded-xl bg-[#f8f5f0] border border-slate-200 px-3.5 py-2">
                        <span className="text-[10px] text-slate-400 block uppercase">Best Season</span>
                        <strong className="text-slate-800 font-semibold">{state.bestTime}</strong>
                      </div>
                      <div className="rounded-xl bg-[#f8f5f0] border border-slate-200 px-3.5 py-2">
                        <span className="text-[10px] text-slate-400 block uppercase">Ideal Duration</span>
                        <strong className="text-slate-800 font-semibold">{state.idealDuration}</strong>
                      </div>
                      <div className="rounded-xl bg-[#f8f5f0] border border-slate-200 px-3.5 py-2">
                        <span className="text-[10px] text-slate-400 block uppercase">Budget Guidance</span>
                        <strong className="text-slate-800 font-semibold">{state.budget}</strong>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-4xl">
                    {state.description}
                  </p>

                  <div className="mt-3 text-xs text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div><strong className="text-slate-800">Best Travel Experience:</strong> {state.bestExperience}</div>
                    <div><strong className="text-slate-800">Ideal For:</strong> {state.idealFor}</div>
                  </div>
                </div>

                {/* -------------------------------------------------------------------
                    VARYING EDITORIAL COMPOSITIONS (LAYOUT VARIANTS 0, 1, 2, 3)
                ------------------------------------------------------------------- */}
                {layoutVariant === 0 && (
                  /* VARIANT 0: SPLIT-SCREEN EDITORIAL */
                  <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-100">
                    <div className="lg:col-span-5 relative">
                      <DynamicImageCarousel
                        images={state.galleryImages}
                        alt={state.name}
                        className="h-80 sm:h-96 lg:h-full w-full min-h-[360px]"
                        interval={1000}
                        badge={
                          <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-xs font-bold text-[#f6e5b4]">
                            ★ {state.name} Heritage Portfolio
                          </span>
                        }
                      />
                    </div>
                    <div className="lg:col-span-7 p-6 sm:p-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" /> Famous Tourist Destinations
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {state.destinations.map((dest) => (
                          <div key={dest.name} className="flex gap-3 p-2.5 rounded-xl border border-slate-100 bg-[#f8f5f0] hover:bg-white hover:border-gold-300 transition group">
                            <img src={dest.img} alt={dest.name} className="h-16 w-16 rounded-lg object-cover shrink-0" />
                            <div className="text-xs">
                              <div className="flex justify-between items-baseline">
                                <h4 className="font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">{dest.name}</h4>
                                <span className="text-[10px] text-amber-600 font-bold">★ {dest.rating}</span>
                              </div>
                              <span className="text-[9px] font-bold text-[#8a6b32] block uppercase mt-0.5">{dest.category}</span>
                              <p className="text-[11px] text-slate-500 font-light line-clamp-1 mt-0.5">{dest.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {layoutVariant === 1 && (
                  /* VARIANT 1: PANORAMIC ASYMMETRIC MOSAIC */
                  <div className="p-6 sm:p-8 border-b border-slate-100">
                    <div className="relative rounded-2xl overflow-hidden mb-6">
                      <DynamicImageCarousel
                        images={state.galleryImages}
                        alt={state.name}
                        className="h-64 sm:h-80 w-full"
                        interval={1000}
                        badge={
                          <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-xs font-bold text-[#f6e5b4]">
                            ★ Landmark Horizons • {state.name}
                          </span>
                        }
                      />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" /> Premier Cities & Landmarks
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      {state.destinations.map((dest) => (
                        <div key={dest.name} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition group">
                          <div className="h-24 w-full overflow-hidden">
                            <img src={dest.img} alt={dest.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                          </div>
                          <div className="p-3 text-xs">
                            <div className="flex justify-between items-baseline">
                              <h4 className="font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">{dest.name}</h4>
                              <span className="text-[10px] text-amber-600 font-bold">★ {dest.rating}</span>
                            </div>
                            <span className="text-[9px] font-bold text-[#8a6b32] block uppercase mt-0.5">{dest.category}</span>
                            <p className="text-[10px] text-slate-500 font-light line-clamp-1 mt-1">{dest.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {layoutVariant === 2 && (
                  /* VARIANT 2: CONTENT-LEFT / GALLERY-RIGHT COMPOSITION */
                  <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-slate-100">
                    <div className="lg:col-span-7 p-6 sm:p-8 order-2 lg:order-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" /> Essential Destinations & Places
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {state.destinations.map((dest) => (
                          <div key={dest.name} className="flex gap-3 p-2.5 rounded-xl border border-slate-100 bg-[#f8f5f0] hover:bg-white hover:border-gold-300 transition group">
                            <img src={dest.img} alt={dest.name} className="h-16 w-16 rounded-lg object-cover shrink-0" />
                            <div className="text-xs">
                              <div className="flex justify-between items-baseline">
                                <h4 className="font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">{dest.name}</h4>
                                <span className="text-[10px] text-amber-600 font-bold">★ {dest.rating}</span>
                              </div>
                              <span className="text-[9px] font-bold text-[#8a6b32] block uppercase mt-0.5">{dest.category}</span>
                              <p className="text-[11px] text-slate-500 font-light line-clamp-1 mt-0.5">{dest.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-5 relative order-1 lg:order-2">
                      <DynamicImageCarousel
                        images={state.galleryImages}
                        alt={state.name}
                        className="h-80 sm:h-96 lg:h-full w-full min-h-[360px]"
                        interval={1000}
                        badge={
                          <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-xs font-bold text-[#f6e5b4]">
                            ★ {state.name} Photo Chronicle
                          </span>
                        }
                      />
                    </div>
                  </div>
                )}

                {layoutVariant === 3 && (
                  /* VARIANT 3: MULTI-COLUMN SHOWCASE & DESTINATION MATRIX */
                  <div className="p-6 sm:p-8 border-b border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" /> Curated Destinations Showcase
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6">
                      {state.destinations.slice(0, 5).map((dest) => (
                        <div key={dest.name} className="rounded-xl border border-slate-200 bg-[#f8f5f0] overflow-hidden group">
                          <img src={dest.img} alt={dest.name} className="h-28 w-full object-cover group-hover:scale-105 transition duration-500" />
                          <div className="p-3 text-xs">
                            <div className="flex justify-between items-baseline">
                              <h4 className="font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">{dest.name}</h4>
                              <span className="text-[10px] text-amber-600 font-bold">★ {dest.rating}</span>
                            </div>
                            <span className="text-[9px] font-bold text-[#8a6b32] block uppercase mt-0.5">{dest.category}</span>
                            <p className="text-[10px] text-slate-500 font-light line-clamp-2 mt-1">{dest.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {state.destinations.slice(5).map((dest) => (
                        <div key={dest.name} className="p-2.5 rounded-lg border border-slate-100 bg-white text-xs">
                          <div className="font-serif font-bold text-slate-900">{dest.name}</div>
                          <span className="text-[9px] text-[#8a6b32] uppercase font-semibold">{dest.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------------------
                    STATE TRAVEL INFORMATION PANEL (8 Essential Data Metrics)
                ------------------------------------------------------------------- */}
                <div className="p-6 sm:p-8 bg-[#f8f5f0] border-b border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#d7b36a]" /> State Travel Intelligence & Guidance
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase block">Popular Cuisine</span>
                      <strong className="text-slate-800 font-serif block mt-0.5 line-clamp-1">{state.cuisine}</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase block">Best Known For</span>
                      <strong className="text-slate-800 font-serif block mt-0.5 line-clamp-1">{state.bestFor}</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase block">Recommended Stay Type</span>
                      <strong className="text-slate-800 font-serif block mt-0.5 line-clamp-1">{state.recommendedStay}</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase block">Transportation</span>
                      <strong className="text-slate-800 font-serif block mt-0.5 line-clamp-1">{state.transportation}</strong>
                    </div>
                  </div>
                </div>

                {/* -------------------------------------------------------------------
                    EXPERIENCES CHIPS INSIDE STATE
                ------------------------------------------------------------------- */}
                <div className="p-6 sm:p-8 border-b border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" /> Curated State Experiences
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {state.experiences.map((exp) => {
                      const Icon = getExperienceIcon(exp.type)
                      return (
                        <div
                          key={exp.name}
                          className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200 px-3.5 py-2 shadow-sm hover:border-gold-400 hover:bg-[#fffaf1] transition cursor-pointer"
                        >
                          <div className="h-6 w-6 rounded-full bg-[#f8f5f0] text-[#8a6b32] flex items-center justify-center">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <span className="font-bold text-slate-900 block">{exp.name}</span>
                            <span className="text-[9px] text-[#8a6b32] uppercase font-semibold">{exp.type}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* -------------------------------------------------------------------
                    HOTEL INFORMATION SYSTEM (3 TIERS: LUXURY, PREMIUM, BUDGET)
                ------------------------------------------------------------------- */}
                <div className="p-6 sm:p-8 border-b border-slate-100 bg-[#fffaf1]/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#8a6b32] flex items-center gap-1.5">
                        <Building className="h-3.5 w-3.5 text-[#d7b36a]" /> Vetted Accommodations & Stays
                      </div>
                      <h4 className="text-base font-serif font-bold text-slate-900 mt-0.5">
                        Where to Stay in {state.name}
                      </h4>
                    </div>
                    <span className="text-[11px] text-slate-500 italic">
                      *Estimated / starting prices per night
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {state.hotels.map((hotel) => (
                      <div
                        key={hotel.name}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                      >
                        <div>
                          <div className="h-32 rounded-xl overflow-hidden mb-3">
                            <img src={hotel.img} alt={hotel.name} className="h-full w-full object-cover" />
                          </div>
                          <div className="flex justify-between items-baseline">
                            <span className="rounded-full bg-slate-900 text-[#f6e5b4] px-2 py-0.5 text-[9px] font-bold uppercase">
                              {hotel.tier}
                            </span>
                            <span className="text-xs text-amber-600 font-bold">★ {hotel.rating}</span>
                          </div>
                          <h5 className="font-serif font-bold text-slate-900 text-sm mt-1.5">{hotel.name}</h5>
                          <div className="text-[10px] text-slate-500 font-medium">{hotel.city}</div>
                          <p className="text-[11px] text-slate-600 font-light mt-1.5">{hotel.facilities}</p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] text-slate-400 uppercase block">Starting Price</span>
                            <span className="text-xs font-bold text-slate-900">{hotel.price} <span className="text-[10px] font-normal text-slate-500">/nt</span></span>
                          </div>
                          <div className="flex gap-1.5">
                            <Link
                              to="/tours/hotel-details"
                              className="rounded-lg bg-slate-900 text-[#f6e5b4] px-2.5 py-1 text-[11px] font-bold hover:bg-slate-800 transition"
                            >
                              View Hotel
                            </Link>
                            <Link
                              to="/contact"
                              className="rounded-lg border border-slate-300 text-slate-700 px-2.5 py-1 text-[11px] font-semibold hover:bg-slate-100 transition"
                            >
                              Book
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* -------------------------------------------------------------------
                    STATE CTA FOOTER
                ------------------------------------------------------------------- */}
                <div className="p-6 sm:p-8 bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white">
                      Plan Your {state.name} Journey.
                    </h4>
                    <p className="text-xs text-slate-300 font-light mt-0.5">
                      Tailor private palace stays, chauffeured transfers, and curated itineraries with our regional experts.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      to="/tours/tour-details"
                      className="rounded-xl bg-[#d7b36a] text-slate-950 px-4 py-2 font-bold hover:bg-[#e5c98d] transition shadow"
                    >
                      Explore Tours
                    </Link>
                    <Link
                      to="/tours/hotel-details"
                      className="rounded-xl border border-white/20 bg-white/10 text-white px-4 py-2 font-semibold hover:bg-white/20 transition"
                    >
                      View Hotels
                    </Link>
                    <Link
                      to="/contact"
                      className="rounded-xl border border-gold-400/40 text-[#f6e5b4] px-4 py-2 font-semibold hover:bg-slate-900 transition"
                    >
                      Plan Custom Trip →
                    </Link>
                  </div>
                </div>

              </div>
            </article>
          )
        })}
      </div>

      {/* =========================================================================
          FINAL LUXURY CALL-TO-ACTION & MULTI-COLUMN FOOTER
      ========================================================================= */}
      <section className="bg-[#0b101b] text-white pt-16 pb-10 border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Cinematic Call To Action Banner */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#111827] to-slate-950 p-8 sm:p-12 mb-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#d7b36a]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-white/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4] mb-3">
              <Crown className="h-3.5 w-3.5 text-[#d7b36a]" /> Incredible India Portfolio
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Begin Your Journey Across India’s 20 Sovereign States.
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Step into a realm of bespoke luxury where your desires dictate the itinerary and our regional expertise guarantees absolute peace of mind.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5 text-xs">
              <Link
                to="/tour-packages/family"
                className="rounded-xl bg-[#d7b36a] px-5 py-2.5 font-bold text-slate-950 hover:bg-[#e5c98d] transition shadow"
              >
                Explore Tour Packages
              </Link>
              <Link
                to="/destination/international"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20 transition"
              >
                International Destinations
              </Link>
              <Link
                to="/services"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20 transition"
              >
                Travel Services
              </Link>
              <Link
                to="/tours/hotel-details"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20 transition"
              >
                Find Hotels
              </Link>
              <Link
                to="/contact"
                className="rounded-xl bg-slate-950 border border-gold-400/50 px-5 py-2.5 font-bold text-[#f6e5b4] hover:bg-white/10 transition"
              >
                Contact Travel Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Domestic
