import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  X,
  MapPin,
  Star,
  Sparkles,
  CheckCircle2,
  Clock,
  Users,
  Building,
  Car,
  Plane,
  Flame,
  Zap,
  Send,
  Check,
  Bed,
  Waves,
  Wifi
} from 'lucide-react'

export default function BachelorModal({
  isOpen = false,
  onClose = () => {},
  item = null,
  type = 'package', // 'package' | 'destination' | 'hotel' | 'experience' | 'nightlife'
}) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    squadName: '',
    email: '',
    phone: '',
    groupSize: '6',
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
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-amber-500/40 my-8 text-white">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-slate-950/80 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors shadow-lg border border-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img
            src={item.image}
            alt={item.name || item.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow">
              {item.type || item.tag || item.category || item.badge || 'Squad Exclusive'}
            </span>
            {item.rating && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white font-mono">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold">{item.rating}</span>
              </div>
            )}
          </div>

          {/* Title on Bottom of Image */}
          <div className="absolute bottom-4 inset-x-6 z-10 text-white">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5" />
              <span>{item.destination || item.country || item.location || 'Bachelor Getaway'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-sm">
              {item.name || item.title}
            </h3>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Overview & Squad Highlights
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {item.overview || item.description}
            </p>
          </div>

          {/* Highlights */}
          {item.highlights && (
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4">
              <h5 className="text-xs font-black uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 fill-amber-400" /> Included Signature Action
              </h5>
              <div className="grid sm:grid-cols-2 gap-2">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 flex-none" />
                    <span className="truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Package Inclusions Detail Grid */}
          {item.hotel && (
            <div className="grid sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
              <div className="p-3 rounded-2xl bg-slate-950 border border-white/10">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Stay</span>
                <span className="font-bold text-white">{item.hotel}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-white/10">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Group Transport</span>
                <span className="font-bold text-white">{item.transport}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950 border border-white/10">
                <span className="text-[10px] text-slate-400 block uppercase font-semibold">Nightlife</span>
                <span className="font-bold text-white">{item.nightlife || 'VIP Access Included'}</span>
              </div>
            </div>
          )}

          {/* Hotel Specific Details */}
          {item.facilities && (
            <div className="rounded-2xl bg-slate-950 border border-white/10 p-4 space-y-2 text-xs text-slate-300">
              <div>
                <span className="font-bold text-amber-400">Capacity:</span> {item.guests} ({item.bedrooms})
              </div>
              <div>
                <span className="font-bold text-amber-400">Pool:</span> {item.hasPool}
              </div>
              <div>
                <span className="font-bold text-amber-400">Facilities:</span> {item.facilities}
              </div>
            </div>
          )}

          {/* Pricing Bar */}
          {item.startingPrice && (
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-amber-500/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  Estimated Starting From
                </span>
                <span className="text-2xl font-black text-white font-mono">
                  {item.startingPrice}{' '}
                  <span className="text-xs font-sans font-normal text-slate-400">
                    {item.priceNote || '/ person'}
                  </span>
                </span>
              </div>
              <span className="text-xs text-emerald-400 font-medium">All VIP taxes & bookings included</span>
            </div>
          )}

          {/* Quick Inquiry Form */}
          <div className="pt-2 border-t border-white/10">
            {submitted ? (
              <div className="p-5 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-center space-y-2">
                <div className="h-10 w-10 mx-auto rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                  <Check className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-emerald-300">Squad Request Received!</h4>
                <p className="text-xs text-emerald-200">
                  Our bachelor party concierge will contact you on WhatsApp within 2 hours with customized villa options and VIP tables.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-amber-400 fill-amber-400" /> Fast Squad Inquiry & Quote
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Groom or Best Man Name"
                    value={formData.squadName}
                    onChange={(e) => setFormData({ ...formData, squadName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      min="2"
                      max="30"
                      placeholder="Crew Size"
                      value={formData.groupSize}
                      onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Squad Inquiry</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-3 px-5 rounded-2xl border border-white/15 text-slate-300 hover:bg-white/5 font-bold text-xs uppercase tracking-wider transition-colors"
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
