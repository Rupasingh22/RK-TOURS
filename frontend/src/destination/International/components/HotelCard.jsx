import { Link } from 'react-router-dom'
import { Star, MapPin, Building, Key, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'

export default function HotelCard({
  hotel,
  countryName = '',
  onViewHotel = () => {},
}) {
  const getTierColor = (tier) => {
    switch (tier?.toLowerCase()) {
      case 'luxury':
        return 'bg-purple-900/80 text-purple-200 border-purple-400/40'
      case 'premium':
        return 'bg-amber-900/80 text-amber-200 border-amber-400/40'
      case 'budget':
      default:
        return 'bg-emerald-900/80 text-emerald-200 border-emerald-400/40'
    }
  }

  const facilitiesList = hotel.facilities ? hotel.facilities.split(', ') : []

  return (
    <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between">
      {/* Hotel Photo Banner */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={hotel.img}
          alt={hotel.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
          }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

        {/* Category Tier Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span
            className={`px-3 py-1 rounded-full backdrop-blur-md border text-[11px] font-bold uppercase tracking-wider ${getTierColor(
              hotel.tier
            )}`}
          >
            {hotel.tier} Stay
          </span>
        </div>

        {/* Star Rating Badge */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
            <Star className="h-3.5 w-3.5 fill-[#d7b36a] text-[#d7b36a]" />
            <span className="font-bold">{hotel.rating || '4.9'}</span>
          </div>
        </div>

        {/* City & Name Overlay on Bottom of Image */}
        <div className="absolute bottom-3 inset-x-4 z-10 text-white">
          <div className="flex items-center gap-1.5 text-xs text-[#d7b36a] font-medium mb-0.5">
            <MapPin className="h-3 w-3 flex-none" />
            <span className="truncate">{hotel.city}</span>
          </div>
          <h4 className="font-serif text-lg font-bold text-white leading-snug truncate group-hover:text-[#d7b36a] transition-colors">
            {hotel.name}
          </h4>
        </div>
      </div>

      {/* Hotel Card Body */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        {/* Facilities Pills */}
        <div className="mb-4">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Selected Highlights:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {facilitiesList.slice(0, 3).map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
              >
                <CheckCircle2 className="h-3 w-3 text-[#aa732b]" />
                <span className="truncate max-w-[180px]">{f}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Pricing Box - Clear starting label */}
        <div className="pt-3 pb-4 border-t border-slate-100">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800/80 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 block w-fit mb-1">
                Estimated Starting Price
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                  {hotel.price}
                </span>
              </div>
            </div>
            <span className="text-[11px] text-slate-400 italic">Seasonal avg</span>
          </div>
        </div>

        {/* Dual Actions: View Hotel & Book Now */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            type="button"
            onClick={() => onViewHotel(hotel, countryName)}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-900 text-slate-800 text-xs font-semibold hover:bg-slate-50 transition-colors"
          >
            <Key className="h-3.5 w-3.5 text-[#aa732b]" />
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
  )
}
