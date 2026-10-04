import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building,
  Star,
  MapPin,
  Waves,
  Sparkles,
  Utensils,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Eye,
  Key,
} from 'lucide-react'
import { familyHotels } from '../familyData'

export default function FamilyHotels({ onViewHotel = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const hotelCategories = [
    'All',
    'Family Hotels',
    'Resorts',
    'Luxury Resorts',
    'Beach Resorts',
    'Mountain Resorts',
    'City Hotels',
  ]

  const filtered = familyHotels.filter((hotel) => {
    if (selectedCategory === 'All') return true
    return hotel.category === selectedCategory
  })

  return (
    <section className="relative py-20 lg:py-24 bg-[#f8f5f0] border-b border-slate-200/80" id="hotels-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <Building className="h-4 w-4 text-[#aa732b]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                Kid-Approved Accommodations
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Family-Centric{' '}
              <span className="font-serif italic font-normal text-[#aa732b]">Hotels & Luxury Resorts</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
              Interconnecting suites, supervised kids clubs, water slides, and complimentary family breakfasts.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {hotelCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 select-none whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-[#d7b36a] shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-[#d7b36a] hover:text-[#aa732b]'
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
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-[#d7b36a]">
                    {hotel.category}
                  </span>
                </div>

                {/* Star Rating Badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs text-white">
                    <Star className="h-3 w-3 fill-[#d7b36a] text-[#d7b36a]" />
                    <span className="font-bold text-[11px]">{hotel.rating}</span>
                  </div>
                </div>

                {/* Destination & Name Overlay */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-[#d7b36a] font-medium mb-0.5">
                    <MapPin className="h-3 w-3" />
                    <span>{hotel.destination}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white leading-snug group-hover:text-[#d7b36a] transition-colors truncate">
                    {hotel.name}
                  </h3>
                </div>
              </div>

              {/* Card Body & Features */}
              <div className="p-5 flex flex-col justify-between flex-1">
                {/* Room Type Tag */}
                <div className="mb-3.5 pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Recommended Room Configuration:
                  </span>
                  <p className="text-xs font-semibold text-slate-800">{hotel.roomType}</p>
                </div>

                {/* Key Family Amenities Grid */}
                <div className="space-y-2 mb-4 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Waves className="h-3.5 w-3.5 text-[#aa732b] flex-none" />
                    <span className="truncate">{hotel.hasPool}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#aa732b] flex-none" />
                    <span className="truncate">{hotel.kidsZone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="h-3.5 w-3.5 text-[#aa732b] flex-none" />
                    <span className="truncate">{hotel.breakfast}</span>
                  </div>
                </div>

                {/* Facilities Pill Box */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                  {hotel.facilities}
                </div>

                {/* Pricing Box - Clearly labeled starting price */}
                <div className="pt-3 pb-4 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 block w-fit mb-0.5">
                      Starting From
                    </span>
                    <div className="text-xl font-serif font-bold text-slate-900">
                      {hotel.startingPrice}{' '}
                      <span className="text-xs font-sans font-normal text-slate-500">/ night</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 italic">{hotel.priceNote}</span>
                </div>

                {/* Dual Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onViewHotel(hotel)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-900 text-slate-800 text-xs font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5 text-[#aa732b]" />
                    <span>View Hotel</span>
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-[#aa732b] text-white text-xs font-semibold transition-all duration-300 shadow-sm"
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
