import { useState } from 'react'
import { Calendar, Users, ShieldCheck, Sparkles, ArrowRight, SlidersHorizontal, BedDouble, Check } from 'lucide-react'

export default function HotelBookingCTA({
  hotel,
  selectedRoom,
  onOpenModal,
}) {
  const [checkInDate, setCheckInDate] = useState('2026-10-20')
  const [checkOutDate, setCheckOutDate] = useState('2026-10-23')
  const [guests, setGuests] = useState(2)

  // Calculate nights
  const d1 = new Date(checkInDate)
  const d2 = new Date(checkOutDate)
  const diffTime = Math.abs(d2 - d1)
  const calculatedNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 3)

  const activeRoom = selectedRoom || hotel.rooms[0]
  const roomPricePerNight = activeRoom.pricePerNight
  const totalStayPrice = roomPricePerNight * calculatedNights

  const handleIncrementGuests = () => {
    if (guests < 6) setGuests((prev) => prev + 1)
  }

  const handleDecrementGuests = () => {
    if (guests > 1) setGuests((prev) => prev - 1)
  }

  return (
    <section id="hotel-booking-cta" className="relative overflow-hidden bg-slate-950 py-14 lg:py-20 text-white">
      {/* Background Graphic with Cinematic Backdrop & Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={hotel.heroImage}
          alt={hotel.name}
          className="h-full w-full object-cover object-center filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Summary & Value Props (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/30 bg-[#d5ab56]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f6e5b4]">
                <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
                <span>Section 06 / Direct Hotel Reservation</span>
              </div>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Reserve Your Stay at <span className="gold-gradient-text">{hotel.name}</span>
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-xl">
                Direct booking privileges include complimentary champagne breakfast, guaranteed early check-in preference, and $100 resort spa credits.
              </p>

              {/* Selected Room Snapshot Card */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md max-w-xl">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <BedDouble className="h-4 w-4 text-[#d5ab56]" />
                    <span>Selected Category:</span>
                  </span>
                  <span className="font-bold text-[#f6e5b4]">{activeRoom.name}</span>
                </div>

                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 border-t border-white/10 pt-3">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400">Price Summary ({calculatedNights} Nights)</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-white sm:text-3xl">
                        ${totalStayPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-400">
                        (${roomPricePerNight.toLocaleString()} / night)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                    <span>Taxes & Spa Access Included</span>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Best Rate Guaranteed Direct</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-[#d5ab56]" />
                  <span>24/7 Dedicated Butler & Concierge</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Booking Widget (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 shadow-inner backdrop-blur-md">
                <div className="space-y-3.5">
                  {/* Check-in and Check-out Dates */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-slate-900/90 px-3 py-2 text-xs font-medium text-white focus:border-[#d5ab56] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full rounded-xl border border-white/20 bg-slate-900/90 px-3 py-2 text-xs font-medium text-white focus:border-[#d5ab56] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Guests Stepper */}
                  <div>
                    <label className="mb-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-[#d5ab56]" />
                        <span>Guests</span>
                      </span>
                      <span className="text-[10px] text-slate-400">Max 6 per suite</span>
                    </label>
                    <div className="flex items-center justify-between rounded-xl border border-white/20 bg-slate-900/90 px-3 py-1.5">
                      <button
                        type="button"
                        onClick={handleDecrementGuests}
                        disabled={guests <= 1}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
                      >
                        -
                      </button>
                      <span className="text-xs sm:text-sm font-bold text-white">
                        {guests} {guests === 1 ? 'Guest' : 'Guests'}
                      </span>
                      <button
                        type="button"
                        onClick={handleIncrementGuests}
                        disabled={guests >= 6}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 space-y-2.5">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenModal('book', {
                          hotel,
                          selectedRoom: activeRoom,
                          checkInDate,
                          checkOutDate,
                          calculatedNights,
                          guests,
                          totalStayPrice,
                        })
                      }
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d5ab56] to-[#b3832f] px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-[#d5ab56]/20 transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98]"
                    >
                      <span>Book This Hotel (${totalStayPrice.toLocaleString()})</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onOpenModal('customize', {
                          hotel,
                          selectedRoom: activeRoom,
                          checkInDate,
                          checkOutDate,
                          calculatedNights,
                          guests,
                          totalStayPrice,
                        })
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/15 hover:border-[#d5ab56]/50 active:scale-[0.98]"
                    >
                      <SlidersHorizontal className="h-3.5 w-3.5 text-[#d5ab56]" />
                      <span>Contact / Customize Stay</span>
                    </button>
                  </div>

                  <p className="text-center text-[10px] text-slate-400">
                    Free cancellation up to 48 hours before check-in.
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
