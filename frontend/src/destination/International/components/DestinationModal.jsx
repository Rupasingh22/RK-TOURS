import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, MapPin, Star, Sparkles, CheckCircle2, ArrowRight, Plane, Building, Key } from 'lucide-react'

export default function DestinationModal({
  isOpen = false,
  onClose = () => {},
  item = null,
  type = 'destination', // 'destination' | 'hotel'
  countryName = '',
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !item) return null

  const isHotel = type === 'hotel'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors shadow-lg"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#d7b36a] text-slate-950 text-xs font-bold uppercase tracking-wider shadow">
              {isHotel ? `${item.tier} Accommodation` : item.category}
            </span>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
              <Star className="h-3.5 w-3.5 fill-[#d7b36a] text-[#d7b36a]" />
              <span className="font-bold">{item.rating || '4.9'}</span>
            </div>
          </div>

          {/* Title on Bottom of Image */}
          <div className="absolute bottom-4 inset-x-6 z-10 text-white">
            <div className="flex items-center gap-1.5 text-xs text-[#d7b36a] mb-1 font-medium">
              <MapPin className="h-3.5 w-3.5" />
              <span>{isHotel ? item.city : countryName}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Overview & Highlights
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              {isHotel
                ? `${item.name} in ${item.city} is one of our hand-picked premier properties offering outstanding hospitality, world-class comfort, and prime proximity to top attractions.`
                : item.desc}
            </p>
          </div>

          {/* Hotel Facilities or Destination Features */}
          {isHotel && item.facilities && (
            <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#7a5b2d] mb-2 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#aa732b]" /> Verified Property Amenities
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed">{item.facilities}</p>
            </div>
          )}

          {/* Price Bar for Hotel */}
          {isHotel && item.price && (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Estimated Starting Price
                </span>
                <span className="text-xl font-serif font-bold text-slate-900">{item.price}</span>
              </div>
              <span className="text-xs text-slate-500 italic">Subject to travel season & room type</span>
            </div>
          )}

          {/* Modal Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/contact"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-950 hover:bg-[#aa732b] text-white font-semibold text-sm transition-all duration-300 shadow-md"
            >
              <Plane className="h-4 w-4" />
              <span>Inquire & Include in Itinerary</span>
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="py-3.5 px-6 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
