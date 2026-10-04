import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  X,
  MapPin,
  Star,
  Sparkles,
  CheckCircle2,
  Clock,
  Heart,
  Building,
  Utensils,
  Car,
  Plane,
  Calendar,
  Send,
  Check
} from 'lucide-react'

export default function HoneymoonModal({
  isOpen = false,
  onClose = () => {},
  item = null,
  type = 'package', // 'package' | 'destination' | 'hotel' | 'experience'
}) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    coupleName: '',
    email: '',
    phone: '',
    travelDate: '',
    specialNotes: ''
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setSubmitted(false)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !item) return null

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      // after 3s close or let user see confirmation
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors shadow-lg"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={item.image}
            alt={item.name || item.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#d7b36a] text-slate-950 text-xs font-bold uppercase tracking-wider shadow">
              {item.type || item.experienceTag || item.category || 'Romantic Exclusive'}
            </span>
            {item.rating && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
                <Star className="h-3.5 w-3.5 fill-[#d7b36a] text-[#d7b36a]" />
                <span className="font-bold">{item.rating}</span>
              </div>
            )}
          </div>

          {/* Title on Bottom of Image */}
          <div className="absolute bottom-4 inset-x-6 z-10 text-white">
            <div className="flex items-center gap-1.5 text-xs text-[#d7b36a] mb-1 font-medium">
              <MapPin className="h-3.5 w-3.5" />
              <span>{item.destination || item.country || item.idealFor || 'Romantic Journey'}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
              {item.name || item.title}
            </h3>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Romantic Overview & Highlights
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              {item.overview || item.description}
            </p>
          </div>

          {/* Key Inclusions / Highlights */}
          {item.highlights && (
            <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#7a5b2d] mb-2.5 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#aa732b]" /> Included Signature Highlights
              </h5>
              <div className="grid sm:grid-cols-2 gap-2">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#aa732b] flex-none" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Package Inclusions Detail Grid */}
          {item.hotel && (
            <div className="grid sm:grid-cols-3 gap-2.5 text-xs text-slate-600">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Resort & Stay</span>
                <span className="font-medium text-slate-800">{item.hotel}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Dining Inclusions</span>
                <span className="font-medium text-slate-800">{item.meals}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">VIP Transfers</span>
                <span className="font-medium text-slate-800">{item.transfers || item.transport}</span>
              </div>
            </div>
          )}

          {/* Hotel Specific Details */}
          {item.facilities && (
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 space-y-2 text-xs">
              <div>
                <span className="font-bold text-slate-800">Room Category:</span> {item.roomType}
              </div>
              <div>
                <span className="font-bold text-slate-800">Facilities:</span> {item.facilities}
              </div>
              <div>
                <span className="font-bold text-slate-800">Dining:</span> {item.dining}
              </div>
            </div>
          )}

          {/* Pricing Bar */}
          {item.startingPrice && (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#fffdfa] border border-amber-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                  Starting From
                </span>
                <span className="text-xl font-serif font-bold text-slate-900">
                  {item.startingPrice}{' '}
                  <span className="text-xs font-sans font-normal text-slate-500">
                    {item.priceNote || '/ couple'}
                  </span>
                </span>
              </div>
              <span className="text-xs text-slate-500 italic">Inclusive of taxes & honeymoon welcome gifts</span>
            </div>
          )}

          {/* Quick Inquiry Form */}
          <div className="pt-2 border-t border-slate-200">
            {submitted ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="h-10 w-10 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-emerald-900">Honeymoon Request Received!</h4>
                <p className="text-xs text-emerald-700">
                  Our romantic concierge will contact you on WhatsApp/Email within 2 hours with customized rates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5 text-[#aa732b]" /> Quick Honeymoon Inquire & Reserve
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Couple Name (e.g. Liam & Sophia)"
                    value={formData.coupleName}
                    onChange={(e) => setFormData({ ...formData, coupleName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#d7b36a] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#d7b36a] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#d7b36a] focus:outline-none"
                  />
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#d7b36a] focus:outline-none text-slate-700"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-slate-950 hover:bg-[#aa732b] text-white font-semibold text-xs transition-all duration-300 shadow-md"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Honeymoon Inquiry</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-3 px-5 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium text-xs transition-colors"
                  >
                    Close
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
