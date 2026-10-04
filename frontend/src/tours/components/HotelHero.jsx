import { useState } from 'react'
import { Star, MapPin, Sparkles, ArrowRight, ShieldCheck, Building, Clock, Compass } from 'lucide-react'

export default function HotelHero({ hotel, allHotels, onSelectHotel, onScrollToBooking, onOpenModal }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Cinematic Image with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hotel.heroImage}
          alt={hotel.name}
          className="h-full w-full object-cover object-center brightness-[0.40] filter transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 lg:px-8 lg:pt-14 lg:pb-16">
        {/* Top Bar: Breadcrumb + Hotel Switcher */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-slate-300 uppercase">
            <span className="text-[#d5ab56]">Hotels</span>
            <span>/</span>
            <span className="text-slate-400">{hotel.country}</span>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-xs">{hotel.name}</span>
          </div>

          {/* Quick Switcher */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md transition hover:border-[#d5ab56] hover:text-[#d5ab56]"
              title="Explore other 5-star properties"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Switch Hotel: <strong>{hotel.country}</strong></span>
              <span className="text-xs text-slate-400">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-white/15 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl z-50">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Featured Luxury Hotels
                </div>
                <div className="mt-1 space-y-1">
                  {allHotels.map((h) => (
                    <button
                      key={h.id}
                      onClick={() => {
                        onSelectHotel(h)
                        setDropdownOpen(false)
                      }}
                      className={`w-full rounded-xl px-3 py-2 text-left text-xs transition flex items-center justify-between ${
                        h.id === hotel.id
                          ? 'bg-[#d5ab56]/20 font-semibold text-[#f6e5b4]'
                          : 'text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="truncate">
                        <div className="truncate font-medium">{h.name}</div>
                        <div className="text-[10px] text-slate-400">{h.location} • from ${h.startingPricePerNight}/nt</div>
                      </div>
                      {h.id === hotel.id && <span className="text-[#d5ab56] text-xs">✓</span>}
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
            {/* Badges */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/40 bg-[#d5ab56]/15 px-3 py-1 text-xs font-semibold tracking-wide text-[#f6e5b4] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d5ab56] animate-pulse" />
              <span>{hotel.heroBadge}</span>
              <span className="text-white/40">•</span>
              <span className="flex items-center gap-1 text-slate-200">
                <MapPin className="h-3 w-3 text-[#d5ab56]" />
                {hotel.location}
              </span>
            </div>

            {/* Hotel Title */}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {hotel.name}
            </h1>

            {/* Tagline */}
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-300/90 font-light">
              {hotel.tagline}
            </p>

            {/* Key Ratings & Star Metas */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(hotel.starRating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">5-Star Luxury</span>
              </div>
              <div className="h-3.5 w-px bg-white/20" />
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-xs font-bold text-emerald-300">
                  {hotel.guestRating} / 5.0
                </span>
                <span className="text-slate-400">({hotel.reviewsCount} verified guest reviews)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Book CTA */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/20 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400">Starting from</span>
                  <div className="mt-0.5 flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      ${hotel.startingPricePerNight.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400">/ night</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-md bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                    Best Rate Guarantee
                  </span>
                  <div className="mt-1 text-[11px] text-slate-400">Includes breakfast & spa</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4">
                <button
                  onClick={onScrollToBooking}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d5ab56] to-[#b3832f] px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-[#d5ab56]/20 transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98]"
                >
                  <span>Book Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Guarantee text */}
              <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Instant Confirmation • VIP Resort Privileges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
