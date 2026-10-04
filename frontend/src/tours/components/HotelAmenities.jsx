import { Waves, Sparkles, UtensilsCrossed, Dumbbell, Wifi, Car, BellRing, Compass, ShieldCheck, Check } from 'lucide-react'

// Helper function to render appropriate icon
const getAmenityIcon = (iconName) => {
  switch (iconName) {
    case 'Pool':
      return <Waves className="h-5 w-5 text-[#d5ab56]" />
    case 'Spa':
      return <Sparkles className="h-5 w-5 text-[#d5ab56]" />
    case 'Utensils':
      return <UtensilsCrossed className="h-5 w-5 text-[#d5ab56]" />
    case 'Dumbbell':
      return <Dumbbell className="h-5 w-5 text-[#d5ab56]" />
    case 'Wifi':
      return <Wifi className="h-5 w-5 text-[#d5ab56]" />
    case 'Car':
      return <Car className="h-5 w-5 text-[#d5ab56]" />
    case 'BellRing':
      return <BellRing className="h-5 w-5 text-[#d5ab56]" />
    default:
      return <Compass className="h-5 w-5 text-[#d5ab56]" />
  }
}

export default function HotelAmenities({ hotel }) {
  const { amenities, experiences } = hotel

  return (
    <section id="amenities-experiences" className="border-b border-slate-200/80 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fffaf1] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30">
              <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Section 04 / Facilities & Lifestyle</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Resort Amenities & Experiences
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              World-class spa wellness, Michelin gastronomy, infinity pools, and curated private excursions.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/60">
            <ShieldCheck className="h-4 w-4" />
            <span>All Core Amenities Included with Room Booking</span>
          </div>
        </div>

        {/* 8 Essential Amenities Compact Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all duration-300 hover:border-[#d5ab56]/60 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fffaf1] border border-[#d7b36a]/30 shadow-2xs">
                    {getAmenityIcon(item.icon)}
                  </div>
                  <span className="rounded-md bg-slate-200/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
                <Check className="h-3 w-3" />
                <span>Complimentary for Guests</span>
              </div>
            </div>
          ))}
        </div>

        {/* Onsite & Nearby Signature Experiences */}
        {experiences && experiences.length > 0 && (
          <div className="mt-8 rounded-2xl border border-slate-900 bg-slate-950 p-5 text-white shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#d5ab56]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#f6e5b4]">
                  Signature Resort & Nearby Experiences
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">Arranged by Resort Concierge</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs transition hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{exp.title}</span>
                    <span className="text-[10px] font-medium text-[#d5ab56] bg-black/40 px-2 py-0.5 rounded border border-[#d5ab56]/30">
                      {exp.time}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
