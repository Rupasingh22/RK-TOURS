import { useState } from 'react'
import { Building2, Compass, Star, MapPin, CheckCircle2, Clock, Sparkles } from 'lucide-react'

export default function HotelsAndExperiences({ tour }) {
  const [activeTab, setActiveTab] = useState('all') // 'all' | 'hotels' | 'experiences'
  const { hotels, experiences } = tour

  return (
    <section id="hotels-experiences" className="border-b border-slate-200/80 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fffaf1] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30">
              <Building2 className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Section 04 / Accommodations & Encounters</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Hotels & Key Experiences
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Handpicked 5-star properties and signature private excursions included in your fare.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1 text-xs font-medium text-slate-700">
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-lg px-3 py-1.5 transition ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Included ({hotels.length + experiences.length})
            </button>
            <button
              onClick={() => setActiveTab('hotels')}
              className={`rounded-lg px-3 py-1.5 transition ${
                activeTab === 'hotels'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hotels ({hotels.length})
            </button>
            <button
              onClick={() => setActiveTab('experiences')}
              className={`rounded-lg px-3 py-1.5 transition ${
                activeTab === 'experiences'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Experiences ({experiences.length})
            </button>
          </div>
        </div>

        {/* 1. HOTELS SUB-SECTION */}
        {(activeTab === 'all' || activeTab === 'hotels') && (
          <div className="mb-10">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                <Building2 className="h-4 w-4 text-[#d5ab56]" />
                <span>Luxury 5-Star Accommodations Included</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">Verified 5-Star Standards</span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d5ab56]/60 hover:shadow-lg"
                >
                  {/* Hotel Image with Badges */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Nights badge */}
                    <span className="absolute top-3 left-3 rounded-md bg-black/60 backdrop-blur-md px-2 py-0.5 text-[11px] font-semibold text-[#f6e5b4] border border-white/10">
                      {hotel.nights}
                    </span>

                    {/* Rating badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-1 text-xs font-semibold">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span>{hotel.rating}</span>
                        <span className="text-[10px] text-slate-300">({hotel.stars}★ Luxury)</span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-200 truncate">
                        {hotel.roomType}
                      </span>
                    </div>
                  </div>

                  {/* Hotel Body */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                        <MapPin className="h-3 w-3 text-[#d5ab56]" />
                        <span>{hotel.location}</span>
                      </div>
                      <h4 className="mt-1 text-sm font-bold text-slate-900 group-hover:text-[#9d7b3d] transition-colors">
                        {hotel.name}
                      </h4>
                    </div>

                    {/* Facilities Chips */}
                    <div className="mt-3 border-t border-slate-100 pt-3">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Key Amenities & Privileges
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {hotel.facilities.slice(0, 3).map((fac, idx) => (
                          <span
                            key={idx}
                            className="rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-700 border border-slate-100"
                          >
                            ✓ {fac}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. EXPERIENCES SUB-SECTION */}
        {(activeTab === 'all' || activeTab === 'experiences') && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
                <Compass className="h-4 w-4 text-[#d5ab56]" />
                <span>Signature Experiences & Private Excursions</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">All Admission & Passes Included</span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d5ab56]/60 hover:shadow-lg"
                >
                  {/* Experience Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 rounded-md bg-[#d5ab56] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                      {exp.tag}
                    </span>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1 font-medium text-slate-200">
                        <MapPin className="h-3 w-3 text-[#d5ab56]" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold text-slate-300">
                        <Clock className="h-3 w-3 text-[#d5ab56]" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#9d7b3d] transition-colors">
                        {exp.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 border-t border-slate-100 pt-2.5 text-[11px] font-medium text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Guaranteed VIP Access • Skip-the-line</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
