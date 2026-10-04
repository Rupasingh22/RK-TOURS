import { useState } from 'react'
import { X, CheckCircle2, ShieldCheck, Sparkles, Calendar, Users, DollarSign, Mail, Phone, User, Send } from 'lucide-react'

export default function BookingModal({ isOpen, onClose, modalData, mode = 'book' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    customNotes: '',
    suiteUpgrade: false,
    privateAviation: false,
  })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen || !modalData) return null

  const isCustom = mode === 'customize'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleResetAndClose = () => {
    setSubmitted(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      customNotes: '',
      suiteUpgrade: false,
      privateAviation: false,
    })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-all overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div
        className="relative my-8 w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-slate-900 p-6 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d5ab56]/30 bg-[#d5ab56]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#f6e5b4]">
                <Sparkles className="h-3 w-3 text-[#d5ab56]" />
                <span>{isCustom ? 'Tailor-Made Journey Request' : 'Direct Booking Reservation'}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                {modalData.name}
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                {isCustom
                  ? 'Tell us your vision and our Senior Concierge will design a bespoke itinerary within 24 hours.'
                  : 'Reserve your luxury itinerary. Our concierge will confirm all details with zero immediate charge.'}
              </p>
            </div>

            {/* Tour Mini Snapshot */}
            <div className="my-4 rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Duration & Country</span>
                <span className="font-semibold text-white">{modalData.duration} • {modalData.country}</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between">
                <span className="text-slate-400">Estimated Investment</span>
                <span className="font-bold text-[#f6e5b4]">
                  ${(modalData.totalPrice || modalData.startingPrice * (modalData.travelers || 2)).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Full Name *
                </label>
                <div className="mt-1 relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Lord & Lady Harrington"
                    className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#d5ab56] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Email Address *
                  </label>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="concierge@luxury.com"
                      className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#d5ab56] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Phone / WhatsApp *
                  </label>
                  <div className="mt-1 relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full rounded-xl border border-white/15 bg-black/40 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#d5ab56] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {isCustom ? 'Customization Preferences & Additions' : 'Special Dietary / Suite Requests'}
                </label>
                <textarea
                  rows={2}
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  placeholder={
                    isCustom
                      ? 'e.g. We would like to add 2 days in Florence and include a private helicopter transfer.'
                      : 'e.g. Vegetarian dining preference, celebrating 10th anniversary.'
                  }
                  className="mt-1 w-full rounded-xl border border-white/15 bg-black/40 p-2.5 text-xs text-white placeholder-slate-500 focus:border-[#d5ab56] focus:outline-none"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-1.5 text-xs text-slate-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.suiteUpgrade}
                    onChange={(e) => setFormData({ ...formData, suiteUpgrade: e.target.checked })}
                    className="rounded border-white/20 text-[#d5ab56] focus:ring-[#d5ab56]"
                  />
                  <span>Upgrade to Presidential / Lake View Penthouse Suites</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privateAviation}
                    onChange={(e) => setFormData({ ...formData, privateAviation: e.target.checked })}
                    className="rounded border-white/20 text-[#d5ab56] focus:ring-[#d5ab56]"
                  />
                  <span>Inquire about Private Jet / Helicopter Charter</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d5ab56] to-[#b3832f] py-3 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-[#d5ab56]/20 transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <Send className="h-4 w-4" />
                <span>{isCustom ? 'Send Custom Tour Inquiry' : 'Confirm & Request Reservation'}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">
              {isCustom ? 'Custom Itinerary Inquiry Received!' : 'Reservation Request Confirmed!'}
            </h3>
            <p className="mt-2 text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Our Lead Travel Designer has received your details for <strong>{modalData.name}</strong>.
            </p>
            <div className="my-4 rounded-xl border border-white/10 bg-white/5 p-3 text-left text-xs text-slate-300 max-w-sm mx-auto">
              <div className="text-emerald-400 font-semibold mb-1">Next Steps:</div>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-400">
                <li>Confirmation email sent to {formData.email}</li>
                <li>WhatsApp concierge greeting within 2 hours</li>
                <li>Complimentary consultation call scheduled</li>
              </ul>
            </div>
            <button
              onClick={handleResetAndClose}
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/20"
            >
              Return to Tour Details
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
