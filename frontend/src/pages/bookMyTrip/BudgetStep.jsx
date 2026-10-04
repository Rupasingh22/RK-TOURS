import { DollarSign, Star, Utensils, BedDouble, Zap, Crown, Shield, Gem, ArrowRight, ArrowLeft, Check } from 'lucide-react'

const FIELD_CLS =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 font-medium placeholder-slate-400 focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d5ab56]/20 transition-all appearance-none'

function FieldWrap({ icon: Icon, children }) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-[11px] h-4 w-4 text-slate-400" />
      {children}
    </div>
  )
}

export default function BudgetStep({ tripData, onChange, onNext, onPrev }) {
  const budgetTiers = [
    { label: '₹1L – ₹2.5L', usd: '$1,500 – $3,000', desc: 'Smart Luxury & 4★ Resorts', icon: <Shield className="h-4 w-4" /> },
    { label: '₹2.5L – ₹5L', usd: '$3,000 – $6,000', desc: 'Signature 5★ & Scenic Rail', icon: <Star className="h-4 w-4" /> },
    { label: '₹5L – ₹10L', usd: '$6,000 – $12,000', desc: 'Ultra Luxury Suites & Private Chauffeurs', icon: <Crown className="h-4 w-4" /> },
    { label: '₹10L+ Bespoke', usd: '$12,000+ Bespoke', desc: 'Private Aviation, Yachts & Villas', icon: <Gem className="h-4 w-4" /> },
  ]

  const hotelCategories = [
    { stars: '3', label: '3-Star Quality', desc: 'Clean, verified boutique hotels', color: 'text-slate-500' },
    { stars: '4', label: '4-Star Premium', desc: 'High comfort & resort pools', color: 'text-amber-500' },
    { stars: '5', label: '5-Star Luxury', desc: 'World-class hospitality & spas', color: 'text-[#d5ab56]' },
    { stars: '🏰', label: 'Palace & Villa', desc: 'Leading Hotels of the World', color: 'text-[#9d7b3d]' },
  ]

  const roomTypes = [
    'Standard Deluxe Room',
    'Panoramic View Suite with Balcony',
    'Presidential Penthouse Suite',
    'Private Plunge Pool Villa',
    'Interconnecting Family Suites',
    'Overwater Bungalow',
  ]

  const mealPlans = [
    'Artisanal Breakfast Included',
    'Half Board (Breakfast & 4-Course Dinner)',
    'Full Board Gourmet (All Meals)',
    'All-Inclusive Resort Dining & Open Bar',
  ]

  const travelStyles = [
    {
      id: 'budget',
      label: 'Essential Value',
      tagline: 'Smart & Curated',
      desc: 'Best 4★ properties without compromise',
      icon: '🎯',
    },
    {
      id: 'comfort',
      label: 'Comfort & Ease',
      tagline: 'Relaxed & Refined',
      desc: 'Private cars, central stays & balanced pace',
      icon: '🌿',
    },
    {
      id: 'premium',
      label: 'Premium Signature',
      tagline: 'First-Class Experience',
      desc: '5★ resorts, scenic rail & private guides',
      icon: '⭐',
    },
    {
      id: 'luxury',
      label: 'Ultra Luxury Odyssey',
      tagline: 'Uncompromised Excellence',
      desc: 'Presidential villas, yachts & VIP concierge',
      icon: '👑',
    },
  ]

  return (
    <div className="space-y-7">
      {/* ── Step Header ── */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fffaf1] to-[#fdf6e3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#9d7b3d] border border-[#d7b36a]/30 mb-3">
          <DollarSign className="h-3.5 w-3.5 text-[#d5ab56]" />
          <span>Step 03 · Budget & Hospitality Standard</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          Set your budget and stay preferences
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          We match properties, rooms, and meal plans precisely within your target investment.
        </p>
      </div>

      {/* ── Budget Range ── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Target Budget Range
          </label>
          {/* Per-person / Total toggle */}
          <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg text-[11px]">
            {['per_person', 'total'].map((basis) => (
              <button
                key={basis}
                type="button"
                onClick={() => onChange({ ...tripData, budgetBasis: basis })}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  tripData.budgetBasis === basis
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {basis === 'per_person' ? 'Per Guest' : 'Total Group'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {budgetTiers.map((tier) => {
            const isSelected = tripData.budgetRange === tier.usd
            return (
              <button
                key={tier.usd}
                type="button"
                onClick={() => onChange({ ...tripData, budgetRange: tier.usd })}
                className={`relative flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#d5ab56] bg-gradient-to-br from-[#fffaf1] to-[#fdf6e3] ring-1 ring-[#d5ab56]/50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#d5ab56]">
                    <Check className="h-3 w-3 text-slate-950" />
                  </div>
                )}
                <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-xl text-sm transition-all ${isSelected ? 'bg-[#d5ab56] text-slate-950' : 'bg-slate-100 text-slate-600'}`}>
                  {tier.icon}
                </div>
                <span className="text-xs font-bold text-slate-900">{tier.label}</span>
                <span className="text-[10px] text-slate-400 mt-0.5">{tier.usd}</span>
                <span className="text-[11px] text-slate-500 mt-1 leading-tight">{tier.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Hotel Star Category ── */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
          Hotel Star Classification
        </label>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hotelCategories.map((cat) => {
            const isSelected = tripData.hotelCategory === cat.label
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => onChange({ ...tripData, hotelCategory: cat.label })}
                className={`flex flex-col items-start gap-2 p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#d5ab56] bg-gradient-to-br from-[#fffaf1] to-[#fdf6e3] ring-1 ring-[#d5ab56]/50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base font-bold ${
                    isSelected ? 'bg-[#d5ab56] text-slate-950' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.stars}
                  {typeof cat.stars === 'string' && cat.stars.length === 1 && cat.stars !== '🏰' && '★'}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{cat.label}</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 leading-tight block">{cat.desc}</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Room & Meal Preferences ── */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Room Category</label>
          <FieldWrap icon={BedDouble}>
            <select
              value={tripData.roomPreference}
              onChange={(e) => onChange({ ...tripData, roomPreference: e.target.value })}
              className={FIELD_CLS}
            >
              {roomTypes.map((rt) => <option key={rt} value={rt}>{rt}</option>)}
            </select>
          </FieldWrap>
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Meal Plan</label>
          <FieldWrap icon={Utensils}>
            <select
              value={tripData.mealPreference}
              onChange={(e) => onChange({ ...tripData, mealPreference: e.target.value })}
              className={FIELD_CLS}
            >
              {mealPlans.map((mp) => <option key={mp} value={mp}>{mp}</option>)}
            </select>
          </FieldWrap>
        </div>
      </div>

      {/* ── Travel Style ── */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
          Preferred Travel Style
        </label>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {travelStyles.map((style) => {
            const isSelected = tripData.travelStyle === style.label
            return (
              <button
                key={style.id}
                type="button"
                onClick={() => onChange({ ...tripData, travelStyle: style.label })}
                className={`relative flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#d5ab56] bg-gradient-to-br from-[#fffaf1] to-[#fdf6e3] ring-1 ring-[#d5ab56]/50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#d5ab56]">
                    <Check className="h-2.5 w-2.5 text-slate-950" />
                  </div>
                )}
                <span className="mb-2 text-xl">{style.icon}</span>
                <span className="text-xs font-bold text-slate-900 block">{style.label}</span>
                <span className="text-[10px] font-semibold text-[#9d7b3d] mt-0.5">{style.tagline}</span>
                <span className="text-[11px] text-slate-500 mt-1 leading-tight">{style.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Navigation ── */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-800 to-[#b3832f] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all hover:brightness-110 active:scale-[0.98]"
        >
          <span>Continue to Experiences</span>
          <ArrowRight className="h-4 w-4 text-[#f6e5b4] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
