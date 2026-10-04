import { useState } from 'react'
import { Calendar, Clock, Star, Users, ShieldCheck, Sparkles, ArrowRight, SlidersHorizontal, MapPin } from 'lucide-react'

export default function TourHero({ tour, allTours, onSelectTour, onOpenModal, onScrollToBooking }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Cinematic Image with Luxury Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={tour.heroImage}
          alt={tour.name}
          className="h-full w-full object-cover object-center brightness-[0.42] filter transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 lg:px-8 lg:pt-14 lg:pb-16">
        {/* Top Bar: Breadcrumb + Tour Switcher */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-slate-300 uppercase">
            <span className="text-[#d5ab56]">Tours</span>
            <span>/</span>
            <span className="text-slate-400">{tour.country}</span>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-xs">{tour.name}</span>
          </div>

          {/* Quick Tour Switcher Pill */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md transition hover:border-[#d5ab56] hover:text-[#d5ab56]"
              title="Explore other curated tours"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Switch Tour: <strong>{tour.country}</strong></span>
              <span className="text-xs text-slate-400">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-white/15 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl z-50">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Featured Signature Tours
                </div>
                <div className="mt-1 space-y-1">
                  {allTours.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onSelectTour(t)
                        setDropdownOpen(false)
                      }}
                      className={`w-full rounded-xl px-3 py-2 text-left text-xs transition flex items-center justify-between ${
                        t.id === tour.id
                          ? 'bg-[#d5ab56]/20 font-semibold text-[#f6e5b4]'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="truncate">
                        <div className="truncate font-medium">{t.name}</div>
                        <div className="text-[10px] text-slate-400">{t.duration} • ${t.startingPrice.toLocaleString()}</div>
                      </div>
                      {t.id === tour.id && <span className="text-[#d5ab56] text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          {/* Left Column: Titles & Tagline */}
          <div className="lg:col-span-8">
            {/* Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/40 bg-[#d5ab56]/15 px-3 py-1 text-xs font-semibold tracking-wide text-[#f6e5b4] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d5ab56] animate-pulse" />
              <span>{tour.heroBadge}</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1 text-slate-200">
                <MapPin className="h-3 w-3 text-[#d5ab56]" />
                {tour.destination}
              </span>
            </div>

            {/* Tour Title */}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {tour.name}
            </h1>

            {/* Tagline */}
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-300/90 font-light">
              {tour.tagline}
            </p>

            {/* Key Metas Line */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#d5ab56]" />
                <span>{tour.duration}</span>
              </div>
              <div className="h-3.5 w-px bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-white">{tour.rating}</span>
                <span className="text-slate-400">({tour.reviewsCount} verified reviews)</span>
              </div>
              <div className="h-3.5 w-px bg-white/20" />
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-[#d5ab56]" />
                <span>{tour.groupType}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Card & CTA Buttons */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/20 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400">Starting from</span>
                  <div className="mt-0.5 flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      ${tour.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">/ guest</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-md bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                    All-Inclusive
                  </span>
                  <div className="mt-1 text-[11px] text-slate-400">Taxes & transfers incl.</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={onScrollToBooking}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d5ab56] to-[#b3832f] px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-[#d5ab56]/20 transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98]"
                >
                  <span>Book Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => onOpenModal('customize', tour)}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-3 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/20 hover:border-[#d5ab56]/50 active:scale-[0.98]"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 text-[#d5ab56]" />
                  <span>Customize Tour</span>
                </button>
              </div>

              {/* Guarantee text */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>100% Guaranteed Departure • Flexible Rescheduling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
