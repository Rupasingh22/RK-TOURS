import { useState } from 'react'
import { Calendar, Users, ShieldCheck, Headphones, ArrowRight, SlidersHorizontal, Sparkles, Check } from 'lucide-react'

export default function BookingCTA({ tour, onOpenModal }) {
  const [selectedDate, setSelectedDate] = useState(tour.bookingSpecs.dates[0] || '2026-10-18')
  const [travelers, setTravelers] = useState(2)

  const handleIncrement = () => {
    if (travelers < tour.bookingSpecs.maxTravelers) {
      setTravelers((prev) => prev + 1)
    }
  }

  const handleDecrement = () => {
    if (travelers > tour.bookingSpecs.minTravelers) {
      setTravelers((prev) => prev - 1)
    }
  }

  const totalPrice = tour.startingPrice * travelers

  return (
    <section id="booking-cta" className="relative overflow-hidden bg-slate-950 py-14 lg:py-20 text-white">
      {/* Background Graphic with Cinematic Backdrop & Overlays */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={tour.heroImage}
          alt={tour.name}
          className="h-full w-full object-cover object-center filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Tour Name, Price & Value Props (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/30 bg-[#d5ab56]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f6e5b4]">
                <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
                <span>Section 06 / Instant Reservation</span>
              </div>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Ready to Experience <span className="gold-gradient-text">{tour.name}</span>?
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                Secure your preferred departure date with small-group luxury privileges or request custom tailoring with private aircraft, villa upgrades and bespoke pacing.
              </p>

              {/* Price Calculation Box */}
              <div className="mt-6 inline-flex flex-wrap items-baseline gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Total Investment ({travelers} Guests)</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white sm:text-4xl">
                      ${totalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 font-normal">
                      (${tour.startingPrice.toLocaleString()} / guest)
                    </span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10 hidden sm:block" />
                <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" />
                  <span>Includes all 5★ stays, rail & private chauffeuring</span>
                </div>
              </div>

              {/* Trust & Guarantee Message */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>100% Guaranteed Departures</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Headphones className="h-4 w-4 text-[#d5ab56]" />
                  <span>24/7 Dedicated Concierge Support</span>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Booking Widget (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 shadow-inner backdrop-blur-md">
                <div className="space-y-4">
                  {/* Travel Date Selector */}
                  <div>
                    <label className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-[#d5ab56]" />
                        <span>Select Departure Date</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 font-medium">Guaranteed</span>
                    </label>
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      aria-label="Select Departure Date"
                      className="w-full rounded-xl border border-white/20 bg-slate-900/90 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-white focus:border-[#d5ab56] focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                    >
                      {tour.bookingSpecs.dates.map((dateStr) => {
                        const formatted = new Date(dateStr).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                        return (
                          <option key={dateStr} value={dateStr} className="bg-slate-900 text-white">
                            {formatted} (Available)
                          </option>
                        )
                      })}
                    </select>
                  </div>

                  {/* Number of Travelers Counter */}
                  <div>
                    <label className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-[#d5ab56]" />
                        <span>Number of Travelers</span>
                      </span>
                      <span className="text-[10px] text-slate-400">Max {tour.bookingSpecs.maxTravelers}</span>
                    </label>
                    <div className="flex items-center justify-between rounded-xl border border-white/20 bg-slate-900/90 px-3 py-1.5">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        disabled={travelers <= tour.bookingSpecs.minTravelers}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {travelers} {travelers === 1 ? 'Guest' : 'Guests'}
                      </span>
                      <button
                        type="button"
                        onClick={handleIncrement}
                        disabled={travelers >= tour.bookingSpecs.maxTravelers}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenModal('book', {
                          ...tour,
                          selectedDate,
                          travelers,
                          totalPrice,
                        })
                      }
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d5ab56] to-[#b3832f] px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-[#d5ab56]/20 transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98]"
                    >
                      <span>Book This Tour (${totalPrice.toLocaleString()})</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onOpenModal('customize', {
                          ...tour,
                          selectedDate,
                          travelers,
                          totalPrice,
                        })
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/15 hover:border-[#d5ab56]/50 active:scale-[0.98]"
                    >
                      <SlidersHorizontal className="h-3.5 w-3.5 text-[#d5ab56]" />
                      <span>Request Custom Tour</span>
                    </button>
                  </div>

                  {/* Micro reassurance message */}
                  <p className="text-center text-[10px] text-slate-400">
                    No charge until our concierge confirms your reservation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
