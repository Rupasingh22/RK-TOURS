import { Heart, Users, User, Smile, Briefcase, Award, ArrowRight, ArrowLeft, Check, Baby, UserCheck } from 'lucide-react'

export default function TravelersStep({ tripData, onChange, onNext, onPrev }) {
  const tripTypes = [
    {
      id: 'family',
      label: 'Family Trip',
      desc: 'Child-friendly pacing & suites',
      icon: <Users className="h-5 w-5" />,
      emoji: '👨‍👩‍👧‍👦',
    },
    {
      id: 'couple',
      label: 'Couple / Romantic',
      desc: 'Intimate dining & privacy',
      icon: <Heart className="h-5 w-5" />,
      emoji: '💑',
    },
    {
      id: 'honeymoon',
      label: 'Honeymoon Odyssey',
      desc: 'Champagne, villas & bespoke perks',
      icon: <Award className="h-5 w-5" />,
      emoji: '💍',
    },
    {
      id: 'solo',
      label: 'Solo Traveler',
      desc: 'Private guide & flexibility',
      icon: <User className="h-5 w-5" />,
      emoji: '🎒',
    },
    {
      id: 'friends',
      label: 'Friends / Group',
      desc: 'Curated adventures & villas',
      icon: <Users className="h-5 w-5" />,
      emoji: '🥂',
    },
    {
      id: 'business',
      label: 'Business & Bleisure',
      desc: 'Executive lounges & seamless transit',
      icon: <Briefcase className="h-5 w-5" />,
      emoji: '💼',
    },
    {
      id: 'senior',
      label: 'Senior Citizens',
      desc: 'Relaxed pacing & zero-climb transit',
      icon: <Smile className="h-5 w-5" />,
      emoji: '🌸',
    },
  ]

  const handleCountChange = (field, delta) => {
    const current = tripData[field] || 0
    const updatedVal = Math.max(field === 'adults' ? 1 : 0, current + delta)
    const updated = { ...tripData, [field]: updatedVal }

    if (field === 'children') {
      const currentAges = [...(tripData.childrenAges || [])]
      if (updatedVal > currentAges.length) {
        while (currentAges.length < updatedVal) currentAges.push(7)
      } else {
        currentAges.length = updatedVal
      }
      updated.childrenAges = currentAges
    }
    onChange(updated)
  }

  const handleChildAgeChange = (index, age) => {
    const ages = [...(tripData.childrenAges || [])]
    ages[index] = Number(age)
    onChange({ ...tripData, childrenAges: ages })
  }

  const counters = [
    { field: 'adults', label: 'Adults', sublabel: 'Ages 12+', icon: <UserCheck className="h-4 w-4 text-[#d5ab56]" />, min: 1, max: 20 },
    { field: 'children', label: 'Children', sublabel: 'Ages 2–11 yrs', icon: <Users className="h-4 w-4 text-[#d5ab56]" />, min: 0, max: 10 },
    { field: 'infants', label: 'Infants', sublabel: 'Under 2 yrs', icon: <Baby className="h-4 w-4 text-[#d5ab56]" />, min: 0, max: 4 },
  ]

  return (
    <div className="space-y-7">
      {/* ── Step Header ── */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fffaf1] to-[#fdf6e3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#9d7b3d] border border-[#d7b36a]/30 mb-3">
          <Users className="h-3.5 w-3.5 text-[#d5ab56]" />
          <span>Step 02 · Travelers & Trip Style</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          Who is traveling on this journey?
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Tailoring pacing, transport capacity, and room configurations to your group.
        </p>
      </div>

      {/* ── Trip Type Cards ── */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">
          Select Trip Category
        </label>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {tripTypes.map((type) => {
            const isSelected = tripData.tripType === type.label
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => onChange({ ...tripData, tripType: type.label })}
                className={`relative flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#d5ab56] bg-gradient-to-br from-[#fffaf1] to-[#fdf6e3] shadow-lg shadow-[#d5ab56]/10 ring-1 ring-[#d5ab56]/50'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:bg-slate-50'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#d5ab56]">
                    <Check className="h-3 w-3 text-slate-950" />
                  </div>
                )}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl mb-3 text-lg transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#d5ab56] to-[#b3832f] shadow-md'
                      : 'bg-slate-100'
                  }`}
                >
                  {type.emoji}
                </div>
                <span className="text-xs font-bold text-slate-900 leading-tight">{type.label}</span>
                <span className="text-[11px] text-slate-500 mt-0.5 leading-tight">{type.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Traveler Counters ── */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-50/50 p-5">
        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-4">
          Traveler Breakdown
        </label>
        <div className="grid gap-3 sm:grid-cols-3">
          {counters.map(({ field, label, sublabel, icon, min, max }) => (
            <div key={field} className="flex items-center justify-between rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#fffaf1] border border-[#d7b36a]/20">
                  {icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">{label}</span>
                  <span className="text-[10px] text-slate-400">{sublabel}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCountChange(field, -1)}
                  disabled={tripData[field] <= min}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700 hover:bg-slate-200 disabled:opacity-30 transition-all active:scale-90"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm font-bold text-slate-900">{tripData[field]}</span>
                <button
                  type="button"
                  onClick={() => handleCountChange(field, 1)}
                  disabled={tripData[field] >= max}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white hover:bg-slate-800 disabled:opacity-30 transition-all active:scale-90"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Children Ages ── */}
        {tripData.children > 0 && (
          <div className="mt-4 border-t border-slate-200/80 pt-4">
            <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-600 mb-2.5">
              Children's Ages
              <span className="ml-1.5 font-normal normal-case text-slate-400">(for child discounts & bed arrangements)</span>
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(tripData.childrenAges || []).map((age, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 whitespace-nowrap shrink-0">
                    Child {idx + 1}:
                  </span>
                  <select
                    value={age}
                    onChange={(e) => handleChildAgeChange(idx, e.target.value)}
                    className="w-full text-xs font-bold text-slate-900 bg-transparent focus:outline-none"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 2} value={i + 2}>{i + 2} yrs</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total pax summary */}
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#fffaf1] border border-[#d7b36a]/25 px-3.5 py-2 text-xs text-[#9d7b3d] font-semibold">
          <Users className="h-3.5 w-3.5 text-[#d5ab56] shrink-0" />
          <span>
            Total travelers: <strong className="text-slate-900">{tripData.adults} Adults{tripData.children > 0 ? `, ${tripData.children} Children` : ''}{tripData.infants > 0 ? `, ${tripData.infants} Infants` : ''}</strong>
          </span>
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
          <span>Continue to Budget & Stay</span>
          <ArrowRight className="h-4 w-4 text-[#f6e5b4] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
