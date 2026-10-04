import { useState } from 'react'
import { MapPin, Globe, Plane, Calendar, Clock, Car, Building2, Sparkles, ArrowRight, Check, ChevronDown } from 'lucide-react'

const FIELD_CLS =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d5ab56]/20 transition-all appearance-none'

const LABEL_CLS = 'block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5'

function FieldWrap({ icon: Icon, children }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-[11px] h-4 w-4 text-slate-400" />
      {children}
    </div>
  )
}

export default function DestinationStep({ tripData, onChange, onNext }) {
  const [errors, setErrors] = useState({})

  const domesticDestinations = [
    'Kashmir & Gulmarg Valley',
    'Royal Rajasthan (Udaipur, Jaipur)',
    'Goa Luxury Beachfront',
    'Kerala Backwaters & Munnar',
    'Himachal & Spiti Valleys',
    'Andaman & Nicobar Islands',
    'Varanasi & Cultural Hubs',
    'Coorg & Wayanad Estates',
  ]

  const internationalDestinations = [
    'Switzerland & Italian Lakes',
    'Amalfi Coast & Rome, Italy',
    'Maldives Overwater Sanctuary',
    'Santorini & Cyclades, Greece',
    'Kyoto, Tokyo & Mount Fuji, Japan',
    'Paris & French Riviera, France',
    'Bali & Nusa Penida, Indonesia',
    'Dubai & Abu Dhabi Royal Escapes',
    'Seychelles Private Islands',
    'New Zealand Scenic Drive',
  ]

  const departureCities = [
    'New Delhi (DEL)',
    'Mumbai (BOM)',
    'Bengaluru (BLR)',
    'Hyderabad (HYD)',
    'Chennai (MAA)',
    'Kolkata (CCU)',
    'Ahmedabad (AMD)',
    'Pune (PNQ)',
    'Dubai (DXB)',
    'London Heathrow (LHR)',
    'New York (JFK)',
    'Singapore (SIN)',
    'Other City',
  ]

  const destinationScopes = [
    { id: 'single', label: 'Single Destination', desc: 'In-depth, relaxed immersion', icon: '📍' },
    { id: 'multi', label: '2–3 Cities / Regions', desc: 'Balanced discovery', icon: '🗺️' },
    { id: 'grand', label: 'Grand Multi-Country', desc: 'Comprehensive odyssey', icon: '✈️' },
  ]

  const transportOptions = [
    'Private Chauffeur-Driven SUV',
    '1st-Class Scenic Panoramic Rail',
    'Private Jet / Helicopter Charter',
    'Private Catamaran / Yacht Charter',
    'Business-Class Flights',
    'Flexible Combination',
  ]

  const accommodationStyles = [
    '5-Star Luxury Palace & Resort',
    'Boutique Historic Heritage Hotel',
    'Private Pool Villa & Overwater Suite',
    'Alpine Mountain Lodge & Spa',
    'Luxury Safari Tented Camp',
    'Award-Winning Wellness Retreat',
  ]

  const activeDestinations =
    tripData.destinationType === 'domestic' ? domesticDestinations : internationalDestinations

  const handleDateChange = (field, value) => {
    const updated = { ...tripData, [field]: value }
    if (updated.travelDate && updated.returnDate) {
      const d1 = new Date(updated.travelDate)
      const d2 = new Date(updated.returnDate)
      const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24))
      if (diffDays > 0) updated.durationDays = diffDays
    }
    onChange(updated)
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!tripData.destination?.trim()) newErrors.destination = 'Please enter a destination.'
    if (!tripData.travelDate) newErrors.travelDate = 'Please select a departure date.'
    if (!tripData.returnDate) newErrors.returnDate = 'Please select a return date.'
    if (tripData.travelDate && tripData.returnDate && new Date(tripData.returnDate) <= new Date(tripData.travelDate)) {
      newErrors.returnDate = 'Return date must be after departure date.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) onNext()
  }

  return (
    <div className="space-y-7">
      {/* ── Step Header ── */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fffaf1] to-[#fdf6e3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#9d7b3d] border border-[#d7b36a]/30 mb-3">
          <MapPin className="h-3.5 w-3.5 text-[#d5ab56]" />
          <span>Step 01 · Destination & Dates</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          Where would you like to travel?
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Select your destination, travel dates, and preferred transport & accommodation style.
        </p>
      </div>

      {/* ── Trip Scope Toggle ── */}
      <div>
        <label className={LABEL_CLS}>Trip Scope</label>
        <div className="grid grid-cols-2 gap-3 max-w-sm">
          {[
            { id: 'international', label: 'International', icon: <Globe className="h-4 w-4 text-[#d5ab56]" /> },
            { id: 'domestic', label: 'Domestic (India)', icon: <MapPin className="h-4 w-4 text-[#d5ab56]" /> },
          ].map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() =>
                onChange({
                  ...tripData,
                  destinationType: opt.id,
                  destination: opt.id === 'domestic' ? 'Kashmir & Gulmarg Valley' : 'Switzerland & Italian Lakes',
                })
              }
              className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-sm font-bold border transition-all ${
                tripData.destinationType === opt.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {opt.icon}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Destination Input ── */}
      <div>
        <label className={LABEL_CLS}>Destination</label>
        <FieldWrap icon={MapPin}>
          <input
            type="text"
            value={tripData.destination}
            onChange={(e) => {
              onChange({ ...tripData, destination: e.target.value })
              if (errors.destination) setErrors((p) => ({ ...p, destination: '' }))
            }}
            placeholder="Type any country, region, or city…"
            className={`${FIELD_CLS} ${errors.destination ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-200' : ''}`}
          />
        </FieldWrap>
        {errors.destination && <p className="mt-1 text-xs text-rose-600">{errors.destination}</p>}

        {/* Popular Destination Pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="py-1 text-[11px] text-slate-400 font-semibold">Popular:</span>
          {activeDestinations.map((dest) => (
            <button
              key={dest}
              type="button"
              onClick={() => { onChange({ ...tripData, destination: dest }); setErrors((p) => ({ ...p, destination: '' })) }}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold border transition-all ${
                tripData.destination === dest
                  ? 'bg-[#d5ab56] text-slate-950 border-[#d5ab56] shadow-sm'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-[#fffaf1] hover:border-[#d7b36a]/60'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>
      </div>

      {/* ── Dates & Departure Grid ── */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Departure City */}
        <div>
          <label className={LABEL_CLS}>Departure City</label>
          <FieldWrap icon={Plane}>
            <select
              value={tripData.departureCity}
              onChange={(e) => onChange({ ...tripData, departureCity: e.target.value })}
              className={FIELD_CLS}
            >
              {departureCities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </FieldWrap>
        </div>

        {/* Departure Date */}
        <div>
          <label className={LABEL_CLS}>Departure Date</label>
          <FieldWrap icon={Calendar}>
            <input
              type="date"
              value={tripData.travelDate}
              onChange={(e) => handleDateChange('travelDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className={`${FIELD_CLS} ${errors.travelDate ? 'border-rose-400' : ''}`}
            />
          </FieldWrap>
          {errors.travelDate && <p className="mt-1 text-xs text-rose-600">{errors.travelDate}</p>}
        </div>

        {/* Return Date */}
        <div>
          <label className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
            <span>Return Date</span>
            {tripData.durationDays > 0 && (
              <span className="rounded-full bg-[#fffaf1] px-2 py-0.5 text-[10px] font-bold text-[#9d7b3d] border border-[#d7b36a]/30">
                {tripData.durationDays} Nights
              </span>
            )}
          </label>
          <FieldWrap icon={Calendar}>
            <input
              type="date"
              value={tripData.returnDate}
              onChange={(e) => handleDateChange('returnDate', e.target.value)}
              min={tripData.travelDate || new Date().toISOString().split('T')[0]}
              className={`${FIELD_CLS} ${errors.returnDate ? 'border-rose-400' : ''}`}
            />
          </FieldWrap>
          {errors.returnDate && <p className="mt-1 text-xs text-rose-600">{errors.returnDate}</p>}
        </div>
      </div>

      {/* ── Destination Scope ── */}
      <div>
        <label className={LABEL_CLS}>Number of Destinations Covered</label>
        <div className="grid gap-3 sm:grid-cols-3">
          {destinationScopes.map((scope) => {
            const isSelected = tripData.destinationScope === scope.label
            return (
              <button
                key={scope.id}
                type="button"
                onClick={() => onChange({ ...tripData, destinationScope: scope.label })}
                className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'border-[#d5ab56] bg-gradient-to-br from-[#fffaf1] to-[#fdf6e3] ring-1 ring-[#d5ab56]/60 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-xl">{scope.icon}</span>
                <div>
                  <span className="block text-xs font-bold text-slate-900">{scope.label}</span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">{scope.desc}</span>
                </div>
                {isSelected && (
                  <div className="ml-auto shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#d5ab56]">
                    <Check className="h-3 w-3 text-slate-950" />
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Transport & Accommodation ── */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLS}>Preferred Transportation</label>
          <FieldWrap icon={Car}>
            <select
              value={tripData.preferredTransportation}
              onChange={(e) => onChange({ ...tripData, preferredTransportation: e.target.value })}
              className={FIELD_CLS}
            >
              {transportOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </FieldWrap>
        </div>
        <div>
          <label className={LABEL_CLS}>Accommodation Preference</label>
          <FieldWrap icon={Building2}>
            <select
              value={tripData.accommodationPreference}
              onChange={(e) => onChange({ ...tripData, accommodationPreference: e.target.value })}
              className={FIELD_CLS}
            >
              {accommodationStyles.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </FieldWrap>
        </div>
      </div>

      {/* ── Continue Button ── */}
      <div className="flex justify-end pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={handleNext}
          className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-800 to-[#b3832f] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98]"
        >
          <span>Continue to Traveler Details</span>
          <ArrowRight className="h-4 w-4 text-[#f6e5b4] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
