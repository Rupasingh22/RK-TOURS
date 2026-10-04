import { useState } from 'react'
import { Send, User, Mail, Phone, MapPin, Calendar, Users, MessageSquare, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react'

export default function ContactInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: 'Switzerland & Northern Italy',
    travelDate: '',
    travelers: 2,
    message: '',
    preferredContact: 'WhatsApp',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const destinationsList = [
    'Switzerland & Northern Italy',
    'Amalfi Coast & Rome, Italy',
    'Royal Rajasthan Palaces, India',
    'Kyoto & Mount Fuji, Japan',
    'Maldives Overwater Luxury',
    'Santorini & Greek Isles',
    'Bali & Tropical Islands',
    'Paris & French Riviera',
    'Other Bespoke Destination',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: 'Switzerland & Northern Italy',
      travelDate: '',
      travelers: 2,
      message: '',
      preferredContact: 'WhatsApp',
    })
  }

  return (
    <section id="contact-form" className="border-b border-slate-200/80 bg-[#faf8f5] py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
            <span>Section 03 / Bespoke Inquiry Form</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Request a Custom Itinerary & Quote
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Share your travel vision with our travel designers. We craft 100% tailor-made itineraries with zero commitment.
          </p>
        </div>

        {/* Card Form Container */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-900/5">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Row 1: Full Name & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <div className="mt-1.5 relative">
                    <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Email Address <span className="text-amber-600">*</span>
                  </label>
                  <div className="mt-1.5 relative">
                    <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@luxury.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone Number & Destination */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Phone Number / WhatsApp <span className="text-amber-600">*</span>
                  </label>
                  <div className="mt-1.5 relative">
                    <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Intended Destination <span className="text-amber-600">*</span>
                  </label>
                  <div className="mt-1.5 relative">
                    <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                    >
                      {destinationsList.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Travel Date & Number of Travelers */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Target Travel Date (Approximate)
                  </label>
                  <div className="mt-1.5 relative">
                    <Calendar className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Number of Travelers
                  </label>
                  <div className="mt-1.5 relative">
                    <Users className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: Number(e.target.value) })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+ (Large Private Group)'].map((num) => (
                        <option key={num} value={typeof num === 'number' ? num : 10}>
                          {typeof num === 'number' ? `${num} ${num === 1 ? 'Guest' : 'Guests'}` : num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Trip Details & Preferences
                </label>
                <div className="mt-1.5 relative">
                  <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us your preferred pacing, special celebrations (e.g. Honeymoon, Anniversary), 5-star hotel preferences, or private helicopter requests..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 transition focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#d5ab56]"
                  />
                </div>
              </div>

              {/* Submit & Guarantee */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Your privacy is 100% safeguarded • No spam guarantee</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#b3832f] px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-slate-900/20 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
                >
                  <Send className="h-4 w-4 text-[#f6e5b4]" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Inquiry'}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Inquiry Successfully Sent!
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your custom journey request for <strong>{formData.destination}</strong> has been assigned to our Senior Destination Specialist.
              </p>
              <div className="my-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-xs text-slate-700 max-w-sm mx-auto space-y-1">
                <div className="font-bold text-slate-900">What happens next:</div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 text-[11px]">
                  <li>Review by dedicated travel designer</li>
                  <li>WhatsApp / Email greeting with curated preliminary options</li>
                  <li>Complimentary itinerary consultation call</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-slate-300 bg-white px-5 py-2 text-xs font-semibold text-slate-800 shadow-xs hover:border-[#d5ab56] hover:bg-[#fffaf1]"
              >
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
