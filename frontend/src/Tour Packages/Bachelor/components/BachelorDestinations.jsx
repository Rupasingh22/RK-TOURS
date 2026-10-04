import React, { useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  Star,
  Sparkles,
  ArrowRight,
  Flame,
  Zap,
  Tag
} from 'lucide-react'
import { topBachelorDestinations } from '../bachelorData'

export default function BachelorDestinations({ onExploreDestination = () => {} }) {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 lg:py-24 bg-[#0a0f1d] text-white border-b border-slate-800/80 overflow-hidden" id="destinations-section">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 mb-3">
              <Flame className="h-4 w-4 text-amber-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
                Top 10 Global Squad Havens
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Top Bachelor <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Destinations</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              World-class playgrounds hand-picked for adrenaline thrills, private group estates, and legendary nightlife.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-2.5 flex-none">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll destinations left"
              className="h-12 w-12 rounded-2xl border border-white/20 bg-slate-900/90 hover:bg-amber-500 text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll destinations right"
              className="h-12 w-12 rounded-2xl border border-white/20 bg-slate-900/90 hover:bg-amber-500 text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Horizontal Scrollable Carousel Container ── */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {topBachelorDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group snap-start flex-none w-[320px] sm:w-[360px] rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Popularity Indicator Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-500/40 text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Zap className="h-3 w-3 fill-amber-400" />
                    {dest.popularity.split(' ')[0]} Match
                  </span>
                </div>

                {/* Country Badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" />
                    <span className="font-bold text-[11px]">{dest.country}</span>
                  </div>
                </div>

                {/* Title & Tagline on Bottom of Image */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors tracking-tight">
                    {dest.name}
                  </h3>
                  <span className="text-[11px] font-medium text-amber-300/90 line-clamp-1">
                    {dest.tagline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-slate-900 text-white">
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4 font-light">
                  {dest.description}
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-2xl bg-slate-950/80 border border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Best Season</span>
                    <span className="font-bold text-white">{dest.bestSeason}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Duration</span>
                    <span className="font-bold text-white">{dest.duration}</span>
                  </div>
                </div>

                {/* Experience Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {dest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights Summary */}
                <div className="space-y-1 mb-5 text-[11px] text-slate-400 border-t border-white/10 pt-3">
                  {dest.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 truncate">
                      <Sparkles className="h-3 w-3 text-amber-400 flex-none" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 block font-bold">
                      Starting From
                    </span>
                    <span className="text-xl font-black text-white font-mono">
                      {dest.startingPrice}{' '}
                      <span className="text-xs font-sans font-normal text-slate-400">/ person</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onExploreDestination(dest)}
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
                  >
                    <span>Explore Trip</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
