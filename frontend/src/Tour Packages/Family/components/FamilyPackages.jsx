import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  Users,
  Building,
  Utensils,
  Car,
  Compass,
  Star,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2,
} from 'lucide-react'
import { familyTourPackages } from '../familyData'

export default function FamilyPackages({
  onViewPackage = () => {},
  selectedCategory = 'all',
  setSelectedCategory = () => {},
}) {
  const packageCategories = [
    { id: 'all', label: 'All Packages (8)' },
    { id: 'weekend', label: 'Weekend Escape (2–3 Days)' },
    { id: 'adventure', label: 'Family Adventure (5–7 Days)' },
    { id: 'luxury', label: 'Luxury Holiday (7–10 Days)' },
    { id: 'international', label: 'International (10–15 Days)' },
  ]

  const filteredPackages = familyTourPackages.filter((pkg) => {
    if (selectedCategory === 'all') return true
    return pkg.category === selectedCategory
  })

  return (
    <section className="relative py-20 lg:py-24 bg-[#f8f5f0] border-b border-slate-200/80" id="packages-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <Compass className="h-4 w-4 text-[#aa732b]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                Bespoke Itineraries
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Featured <span className="font-serif italic font-normal text-[#aa732b]">Family Tour Packages</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
              Carefully paced journeys balancing iconic sightseeing, kid thrills, and parent leisure.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 max-w-full">
            {packageCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-none px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 select-none whitespace-nowrap ${
                    isSelected
                      ? 'bg-slate-950 text-[#d7b36a] shadow-md shadow-slate-950/20 ring-1 ring-[#d7b36a]/50 scale-105'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-[#d7b36a] hover:text-[#aa732b]'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Package Cards Grid (Premium Compact Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-[#d7b36a]">
                    {pkg.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs text-white">
                    <Star className="h-3 w-3 fill-[#d7b36a] text-[#d7b36a]" />
                    <span className="font-bold text-[11px]">{pkg.rating}</span>
                  </div>
                </div>

                {/* Destination & Package Title */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#d7b36a] font-semibold block">
                    {pkg.destination}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#d7b36a] transition-colors truncate">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              {/* Card Body - Structured Compact Details */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                {/* Duration & Capacity Tags */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Clock className="h-3.5 w-3.5 text-[#aa732b]" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Users className="h-3.5 w-3.5 text-[#aa732b]" />
                    <span>{pkg.people}</span>
                  </div>
                </div>

                {/* Bullet Inclusions List */}
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="flex items-start gap-2">
                    <Building className="h-3.5 w-3.5 text-[#aa732b] flex-none mt-0.5" />
                    <span className="truncate">{pkg.hotel}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Utensils className="h-3.5 w-3.5 text-[#aa732b] flex-none mt-0.5" />
                    <span className="truncate">{pkg.meals}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Car className="h-3.5 w-3.5 text-[#aa732b] flex-none mt-0.5" />
                    <span className="truncate">{pkg.transport}</span>
                  </div>
                </div>

                {/* Price Bar & Starting Label */}
                <div className="pt-3 pb-4 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 block w-fit mb-0.5">
                      Starting From
                    </span>
                    <div className="text-xl font-serif font-bold text-slate-900">
                      {pkg.startingPrice}{' '}
                      <span className="text-xs font-sans font-normal text-slate-500">/ package</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">All taxes incl.</span>
                </div>

                {/* Dual Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onViewPackage(pkg)}
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl border border-slate-200 hover:border-slate-900 text-slate-800 text-xs font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5 text-[#aa732b]" />
                    <span>View Details</span>
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-slate-950 hover:bg-[#aa732b] text-white text-xs font-semibold transition-all duration-300 shadow-sm"
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
