import { Star, MapPin, ArrowRight, Eye } from 'lucide-react'

export default function DestinationCard({
  destination,
  countryName = '',
  onExplore = () => {},
}) {
  return (
    <div
      onClick={() => onExplore(destination, countryName)}
      className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
    >
      {/* Top Image Container */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={destination.img}
          alt={destination.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80'
          }}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-[#d7b36a]">
            {destination.category}
          </span>
        </div>

        {/* Star Rating Tag */}
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs text-white">
            <Star className="h-3 w-3 fill-[#d7b36a] text-[#d7b36a]" />
            <span className="font-semibold text-[11px]">{destination.rating || 4.9}</span>
          </div>
        </div>

        {/* Bottom image overlay with name */}
        <div className="absolute bottom-2.5 inset-x-3 z-10">
          <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#d7b36a] transition-colors drop-shadow-sm truncate">
            {destination.name}
          </h4>
        </div>
      </div>

      {/* Card Body & CTA */}
      <div className="p-3.5 bg-slate-900/95 flex flex-col justify-between flex-1">
        <p className="text-xs text-white/70 line-clamp-2 leading-relaxed mb-3 font-light">
          {destination.desc}
        </p>

        {/* Explore Button */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#d7b36a] group-hover:text-amber-300 transition-colors">
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" /> Explore Place
          </span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
