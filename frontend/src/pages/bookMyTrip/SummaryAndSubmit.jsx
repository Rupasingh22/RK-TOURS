import { useState } from 'react'
import {
  Sparkles,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Building2,
  Compass,
  User,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  ArrowLeft,
  Check,
  Plane,
  Zap,
  Clock,
} from 'lucide-react'

const INPUT_CLS =
  'w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3.5 py-2.5 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d5ab56]/20 transition-all'

function FieldWrap({ icon: Icon, children }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3 top-[11px] h-4 w-4 text-slate-400" />
      {children}
    </div>
  )
}

// Individual summary row component
function SummaryRow({ icon: Icon, label, value }) {
  if (!value) return null
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d5ab56]/15 border border-[#d5ab56]/20">
        <Icon className="h-3.5 w-3.5 text-[#d5ab56]" />
      </div>
      <div className="min-w-0">
        <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400/80">{label}</span>
        <span className="block text-xs font-semibold text-slate-200 mt-0.5 leading-snug">{value}</span>
      </div>
    </div>
  )
}

export default function SummaryAndSubmit({ tripData, onChange, onPrev, onReset }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const [refNumber] = useState(() => `RK-${Math.floor(100000 + Math.random() * 900000)}`)

  const validate = () => {
    const errors = {}
    if (!tripData.contactName?.trim()) errors.contactName = 'Full name is required.'
    if (!tripData.contactEmail?.trim()) {
      errors.contactEmail = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(tripData.contactEmail)) {
      errors.contactEmail = 'Please enter a valid email address.'
    }
    if (!tripData.contactPhone?.trim()) errors.contactPhone = 'Phone / WhatsApp number is required.'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')
    if (!validate()) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1200)
  }

  const handleTalkToExpert = () => {
    window.open(
      'https://wa.me/919876543210?text=Hello%20RK%20Tours,%20I%20am%20customizing%20a%20trip%20to%20' +
        encodeURIComponent(tripData.destination || 'your destination') +
        '%20and%20would%20like%20to%20speak%20with%20a%20travel%20designer.',
      '_blank'
    )
  }

  // ── Success Screen ──
  if (isSuccess) {
    return (
      <div className="py-8 text-center">
        {/* Animated Success Circle */}
        <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl shadow-emerald-500/30">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Reference Badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#fffaf1] px-4 py-1.5 text-xs font-bold text-[#9d7b3d] border border-[#d7b36a]/40">
          <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
          Inquiry Reference: {refNumber}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          Your Trip Request is Confirmed!
        </h2>
        <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-slate-900">{tripData.contactName}</strong>. Our Lead Travel Designer for{' '}
          <strong className="text-slate-900">{tripData.destination}</strong> is reviewing your preferences and will prepare a tailored itinerary within <strong>2 hours</strong>.
        </p>

        {/* What Happens Next */}
        <div className="my-6 max-w-md mx-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 text-left shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-sm font-bold text-slate-900">
            <Clock className="h-4 w-4 text-[#d5ab56]" />
            What happens next:
          </div>
          <ul className="space-y-2.5 text-[12px] text-slate-600">
            {[
              `Confirmation summary sent to ${tripData.contactEmail}`,
              `WhatsApp concierge will connect on ${tripData.contactPhone}`,
              'Complimentary video consultation to fine-tune your itinerary',
              'Detailed quote with day-by-day breakdown provided within 4 hours',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[9px] font-bold">
                  {i + 1}
                </div>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-[#fffaf1] hover:border-[#d5ab56]/50 transition-all"
          >
            Plan Another Trip
          </button>
          <button
            type="button"
            onClick={handleTalkToExpert}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-black transition-all shadow-lg"
          >
            <Headphones className="h-4 w-4 text-[#d5ab56]" />
            Chat on WhatsApp Now
          </button>
        </div>
      </div>
    )
  }

  // ── Main Review Form ──
  const totalPax = `${tripData.adults} Adult${tripData.adults > 1 ? 's' : ''}${tripData.children > 0 ? `, ${tripData.children} Child${tripData.children > 1 ? 'ren' : ''}` : ''}${tripData.infants > 0 ? `, ${tripData.infants} Infant${tripData.infants > 1 ? 's' : ''}` : ''}`

  return (
    <div className="space-y-7">
      {/* ── Step Header ── */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fffaf1] to-[#fdf6e3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#9d7b3d] border border-[#d7b36a]/30 mb-3">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#d5ab56]" />
          <span>Step 05 · Review & Submit Request</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          Review your trip summary
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Confirm everything matches your vision before our travel architects prepare your private quote.
        </p>
      </div>

      {/* ── Premium Trip Summary Card ── */}
      <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-900/20">
        {/* Dark header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#f6e5b4] mb-1">
                Curated Bespoke Itinerary
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif leading-tight">
                {tripData.destination}
              </h3>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="rounded-xl bg-[#d5ab56] px-3 py-1 text-[11px] font-bold text-slate-950">
                {tripData.tripType}
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {tripData.destinationType === 'international' ? '🌍 International' : '🇮🇳 Domestic'}
              </span>
            </div>
          </div>

          {/* Gold divider */}
          <div className="mt-4 h-px bg-gradient-to-r from-[#d5ab56]/60 via-[#d5ab56]/20 to-transparent" />
        </div>

        {/* Summary grid */}
        <div className="bg-slate-900 px-6 py-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <SummaryRow
              icon={Calendar}
              label="Travel Dates"
              value={`${tripData.travelDate || 'Flexible'} → ${tripData.returnDate || 'Flexible'} (${tripData.durationDays} Nights)`}
            />
            <SummaryRow
              icon={Plane}
              label="Departure & Transit"
              value={`From ${tripData.departureCity} · ${tripData.preferredTransportation}`}
            />
            <SummaryRow
              icon={Users}
              label="Travelers"
              value={totalPax}
            />
            <SummaryRow
              icon={Building2}
              label="Hospitality & Budget"
              value={`${tripData.hotelCategory} · ${tripData.budgetRange} ${tripData.budgetBasis === 'per_person' ? 'per guest' : 'total'}`}
            />
            <SummaryRow
              icon={MapPin}
              label="Destinations Covered"
              value={tripData.destinationScope}
            />
            <SummaryRow
              icon={DollarSign}
              label="Travel Style & Rooms"
              value={`${tripData.travelStyle} · ${tripData.roomPreference}`}
            />
          </div>

          {/* Experiences */}
          {(tripData.selectedExperiences || []).length > 0 && (
            <div className="mt-5 border-t border-white/10 pt-4">
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5">
                Experiences Included
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tripData.selectedExperiences.map((exp) => (
                  <span
                    key={exp}
                    className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-200 border border-white/10"
                  >
                    <Check className="h-2.5 w-2.5 text-[#d5ab56]" /> {exp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Special Requirements */}
          {(tripData.isCelebration || tripData.needsAccessibility || (tripData.dietaryPreferences || []).length > 0 || tripData.specialNotes) && (
            <div className="mt-4 border-t border-white/10 pt-4 space-y-1.5 text-[11px] text-slate-400">
              {tripData.isCelebration && (
                <div className="flex items-center gap-2"><span className="text-[#d5ab56]">💍</span> Honeymoon / Celebration decoration requested</div>
              )}
              {tripData.needsAccessibility && (
                <div className="flex items-center gap-2"><span className="text-[#d5ab56]">♿</span> Wheelchair / Mobility assistance required</div>
              )}
              {(tripData.dietaryPreferences || []).length > 0 && (
                <div className="flex items-start gap-2">
                  <span className="text-[#d5ab56] mt-0.5">🍽️</span>
                  <span>Dietary: {tripData.dietaryPreferences.join(', ')}</span>
                </div>
              )}
              {tripData.specialNotes && (
                <div className="flex items-start gap-2">
                  <span className="text-[#d5ab56] mt-0.5">📝</span>
                  <span className="italic">"{tripData.specialNotes}"</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Contact Information Form ── */}
      <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm space-y-5" noValidate>
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <User className="h-4 w-4 text-[#d5ab56]" />
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Your Contact Information
          </h4>
        </div>

        {/* General error */}
        {errorMsg && (
          <div className="rounded-xl bg-rose-50 border border-rose-200 px-4 py-3 text-xs text-rose-700 flex items-center gap-2">
            <span>⚠️</span> {errorMsg}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-3">
          {/* Full Name */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <FieldWrap icon={User}>
              <input
                type="text"
                value={tripData.contactName || ''}
                onChange={(e) => {
                  onChange({ ...tripData, contactName: e.target.value })
                  if (fieldErrors.contactName) setFieldErrors((p) => ({ ...p, contactName: '' }))
                }}
                placeholder="Your full name"
                className={`${INPUT_CLS} ${fieldErrors.contactName ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
              />
            </FieldWrap>
            {fieldErrors.contactName && <p className="mt-1 text-[11px] text-rose-600">{fieldErrors.contactName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <FieldWrap icon={Mail}>
              <input
                type="email"
                value={tripData.contactEmail || ''}
                onChange={(e) => {
                  onChange({ ...tripData, contactEmail: e.target.value })
                  if (fieldErrors.contactEmail) setFieldErrors((p) => ({ ...p, contactEmail: '' }))
                }}
                placeholder="you@email.com"
                className={`${INPUT_CLS} ${fieldErrors.contactEmail ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
              />
            </FieldWrap>
            {fieldErrors.contactEmail && <p className="mt-1 text-[11px] text-rose-600">{fieldErrors.contactEmail}</p>}
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
              Phone / WhatsApp <span className="text-rose-500">*</span>
            </label>
            <FieldWrap icon={Phone}>
              <input
                type="tel"
                value={tripData.contactPhone || ''}
                onChange={(e) => {
                  onChange({ ...tripData, contactPhone: e.target.value })
                  if (fieldErrors.contactPhone) setFieldErrors((p) => ({ ...p, contactPhone: '' }))
                }}
                placeholder="+91 98765 43210"
                className={`${INPUT_CLS} ${fieldErrors.contactPhone ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
              />
            </FieldWrap>
            {fieldErrors.contactPhone && <p className="mt-1 text-[11px] text-rose-600">{fieldErrors.contactPhone}</p>}
          </div>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center gap-4 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Zero-obligation quote</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-[#d5ab56]" />
            <span>Response within 2 hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>100% bespoke itinerary</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Modify Details</span>
          </button>

          <div className="flex items-stretch gap-2.5">
            <button
              type="button"
              onClick={handleTalkToExpert}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-[#d5ab56]/40 transition-all shadow-sm"
            >
              <Headphones className="h-4 w-4 text-[#d5ab56]" />
              <span>Talk to an Expert</span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-800 to-[#b3832f] px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <svg className="h-4 w-4 animate-spin text-white/70" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.416" strokeDashoffset="10" />
                  </svg>
                  <span>Submitting…</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 text-[#f6e5b4]" />
                  <span>Submit Trip Request</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
