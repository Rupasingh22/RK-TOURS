import { BedDouble, Users, Maximize2, Check, ArrowRight, Sparkles } from 'lucide-react'

export default function RoomsAndSuites({ hotel, selectedRoomId, onSelectRoom, onBookRoomDirect }) {
  const { rooms } = hotel

  return (
    <section id="rooms-suites" className="border-b border-slate-200/80 bg-[#faf8f5] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 shadow-2xs">
              <BedDouble className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Section 03 / Accommodations</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Luxury Rooms & Suites
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Meticulously appointed sanctuaries with panoramic views, marble bathrooms, and artisan amenities.
            </p>
          </div>

          <span className="text-xs font-medium text-slate-500">
            {rooms.length} Room Categories Available
          </span>
        </div>

        {/* Room Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const isSelected = selectedRoomId === room.id

            return (
              <div
                key={room.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl border bg-white transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-xl ${
                  isSelected
                    ? 'border-[#d5ab56] ring-2 ring-[#d5ab56]/30 shadow-md'
                    : 'border-slate-200/80 hover:border-[#d5ab56]/50'
                }`}
              >
                <div>
                  {/* Room Image & Badges */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Room Badge */}
                    {room.badge && (
                      <span className="absolute top-3 left-3 rounded-md bg-[#d5ab56] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                        {room.badge}
                      </span>
                    )}

                    {/* Dimensions & Capacity Overlay */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1 font-medium">
                        <Maximize2 className="h-3 w-3 text-[#d5ab56]" />
                        {room.size}
                      </span>
                      <span className="flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-slate-200 backdrop-blur-xs">
                        <Users className="h-3 w-3 text-[#d5ab56]" />
                        {room.guestsCapacity}
                      </span>
                    </div>
                  </div>

                  {/* Room Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#9d7b3d] transition-colors">
                        {room.name}
                      </h3>
                    </div>

                    {/* Bed Type */}
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                      <BedDouble className="h-3.5 w-3.5 text-[#d5ab56]" />
                      <span>{room.bedType}</span>
                    </div>

                    {/* Facilities Checklist */}
                    <div className="mt-3.5 space-y-1.5 border-t border-slate-100 pt-3">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Room Amenities Included
                      </span>
                      {room.facilities.slice(0, 4).map((fac, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="h-3 w-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Booking Action */}
                <div className="border-t border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-400">Per Night</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-slate-900">
                          ${room.pricePerNight.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500">/ night</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                      Free Cancellation
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectRoom(room)}
                      className={`w-full rounded-xl py-2 text-xs font-semibold transition ${
                        isSelected
                          ? 'bg-[#d5ab56] text-slate-950 font-bold'
                          : 'border border-slate-300 bg-white text-slate-700 hover:border-[#d5ab56] hover:bg-[#fffaf1]'
                      }`}
                    >
                      {isSelected ? '✓ Selected' : 'Select Room'}
                    </button>
                    <button
                      type="button"
                      onClick={() => onBookRoomDirect(room)}
                      className="w-full inline-flex items-center justify-center gap-1 rounded-xl bg-slate-900 py-2 text-xs font-bold text-white shadow transition hover:bg-black active:scale-[0.98]"
                    >
                      <span>Book Room</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
