import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building,
  Star,
  MapPin,
  Users,
  Bed,
  Waves,
  Wifi,
  Utensils,
  ArrowRight,
  Eye,
  Crown,
  ShieldCheck,
  Flame
} from 'lucide-react'
import { bachelorHotels } from '../bachelorData'

export default function BachelorHotels({ onViewHotel = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Private Pool Villas',
    'Penthouse Suites',
    'Private Island Fincas',
    'Beach Resorts',
    'Luxury Hotels'
  ]

  const filtered = bachelorHotels.filter((hotel) => {
    if (selectedCategory === 'All') return true
    return hotel.category === selectedCategory
  })

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0f1d] text-white border-b border-slate-800/80" id="hotels-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 mb-3">
              <Crown className="h-4 w-4 text-amber-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
                Group Luxury Living
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Luxury Stays &{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Private Compounds
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              Multi-bedroom pool villas, penthouse suites with Strip views, and private estates tailored for squad takeovers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 select-none whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Hotel Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((hotel) => (
            <div
              key={hotel.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-[10px] font-black uppercase tracking-wider text-amber-400">
                    {hotel.badge || hotel.category}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs text-white font-mono">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-[11px]">{hotel.rating}</span>
                  </div>
                </div>

                {/* Destination & Name Overlay */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-amber-400 font-bold uppercase tracking-wider mb-0.5">
                    <MapPin className="h-3 w-3" />
                    <span>{hotel.destination}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors truncate">
                    {hotel.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-slate-900 text-white">
                {/* Guest Capacity & Bedrooms */}
                <div className="grid grid-cols-2 gap-2 mb-3.5 p-3 rounded-2xl bg-slate-950/80 border border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 font-semibold">
                    <Users className="h-4 w-4 text-amber-400" />
                    <span>{hotel.guests}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 font-semibold">
                    <Bed className="h-4 w-4 text-amber-400" />
                    <span className="truncate">{hotel.bedrooms.split(' ')[0]} Beds</span>
                  </div>
                </div>

                {/* Key Group Features */}
                <div className="space-y-1.5 mb-4 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Waves className="h-3.5 w-3.5 text-amber-400 flex-none" />
                    <span className="truncate">{hotel.hasPool}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-3.5 w-3.5 text-amber-400 flex-none" />
                    <span className="truncate">{hotel.hasWifi}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="h-3.5 w-3.5 text-amber-400 flex-none" />
                    <span className="truncate">{hotel.breakfast}</span>
                  </div>
                </div>

                {/* Facilities Pill Box */}
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] text-slate-400 mb-4 line-clamp-2 leading-relaxed font-light">
                  {hotel.facilities}
                </div>

                {/* Pricing Box - Clearly labeled Estimated Starting From */}
                <div className="pt-3 pb-4 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                      Estimated Starting From
                    </span>
                    <div className="text-2xl font-black text-white font-mono">
                      {hotel.startingPrice}{' '}
                      <span className="text-xs font-sans font-normal text-slate-400">/ night</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Whole Property</span>
                </div>

                {/* Dual Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onViewHotel(hotel)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/20 hover:border-amber-400 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all"
                  >
                    <Eye className="h-3.5 w-3.5 text-amber-400" />
                    <span>View Stay</span>
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
