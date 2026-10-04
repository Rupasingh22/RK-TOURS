import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  Users,
  Building,
  Car,
  Compass,
  Sparkles,
  Flame,
  Zap,
  Star,
  ArrowRight,
  Eye,
  CheckCircle2,
  GlassWater
} from 'lucide-react'
import { bachelorPackages } from '../bachelorData'

export default function BachelorPackages({
  onViewPackage = () => {},
  selectedCategory = 'all',
  setSelectedCategory = () => {},
}) {
  const categories = [
    { id: 'all', label: 'All Packages (5)' },
    { id: 'weekend', label: 'Weekend Party Escape (2–3 Days)' },
    { id: 'adventure', label: 'Adventure Squad (4–6 Days)' },
    { id: 'luxury', label: 'Luxury Bachelor Escape (5–7 Days)' },
    { id: 'ultimate', label: 'Ultimate International Trip (7–12 Days)' },
    { id: 'wild', label: 'Wild Weekend (3–5 Days)' },
  ]

  const filtered = bachelorPackages.filter((pkg) => {
    if (selectedCategory === 'all') return true
    return pkg.category === selectedCategory
  })

  return (
    <section className="relative py-20 lg:py-24 bg-[#070b14] text-white border-b border-slate-800/80" id="packages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 mb-3">
              <Zap className="h-4 w-4 text-amber-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
                Curated Squad Packages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bachelor Trip <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Collections</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              From quick 72-hour weekend takeovers to epic international multi-city bachelor blowouts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 max-w-full">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-none px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 select-none whitespace-nowrap ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-amber-500/50 hover:text-amber-400'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Package Cards Grid (Compact & Premium) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-[10px] font-black uppercase tracking-wider text-amber-400">
                    {pkg.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs text-white font-mono">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-[11px]">{pkg.rating}</span>
                  </div>
                </div>

                {/* Destination & Title */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block">
                    {pkg.destination}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-amber-400 transition-colors truncate">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                {/* Meta Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <Clock className="h-3.5 w-3.5 text-amber-400" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                    <Users className="h-3.5 w-3.5 text-amber-400" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Inclusions Detail List */}
                <div className="space-y-2 text-xs text-slate-300 mb-4">
                  <div className="flex items-start gap-2">
                    <Building className="h-3.5 w-3.5 text-amber-400 flex-none mt-0.5" />
                    <span className="truncate">{pkg.hotel}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Car className="h-3.5 w-3.5 text-amber-400 flex-none mt-0.5" />
                    <span className="truncate">{pkg.transport}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Flame className="h-3.5 w-3.5 text-amber-400 flex-none mt-0.5" />
                    <span className="truncate"><strong>Action:</strong> {pkg.activities}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400 flex-none mt-0.5" />
                    <span className="truncate"><strong>Nightlife:</strong> {pkg.nightlife}</span>
                  </div>
                </div>

                {/* Price Bar */}
                <div className="pt-3 pb-4 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                      Starting From
                    </span>
                    <div className="text-2xl font-black text-white font-mono">
                      {pkg.startingPrice}{' '}
                      <span className="text-xs font-sans font-normal text-slate-400">/ person</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">All VIP Inclusions</span>
                </div>

                {/* Dual Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onViewPackage(pkg)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-white/20 hover:border-amber-400 text-slate-200 hover:text-white text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all"
                  >
                    <Eye className="h-3.5 w-3.5 text-amber-400" />
                    <span>Details</span>
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
