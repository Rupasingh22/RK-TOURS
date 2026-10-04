import { Sparkles, Check, ArrowRight, ArrowLeft, MessageSquare, Shield } from 'lucide-react'

const EXPERIENCE_LIST = [
  { id: 'adventure', label: 'Adventure & Glacier Treks', icon: '🧗', color: 'bg-orange-50 border-orange-200' },
  { id: 'beaches', label: 'Beaches & Turquoise Waters', icon: '🏖️', color: 'bg-sky-50 border-sky-200' },
  { id: 'mountains', label: 'Mountains & Alps', icon: '🏔️', color: 'bg-blue-50 border-blue-200' },
  { id: 'wildlife', label: 'Wildlife & Safaris', icon: '🦁', color: 'bg-amber-50 border-amber-200' },
  { id: 'culture', label: 'Culture & Palaces', icon: '🏛️', color: 'bg-purple-50 border-purple-200' },
  { id: 'shopping', label: 'Haute Couture & Shopping', icon: '🛍️', color: 'bg-pink-50 border-pink-200' },
  { id: 'food', label: 'Food & Michelin Dining', icon: '🍷', color: 'bg-red-50 border-red-200' },
  { id: 'nightlife', label: 'Nightlife & Beach Clubs', icon: '🍸', color: 'bg-violet-50 border-violet-200' },
  { id: 'spiritual', label: 'Religious & Spiritual Sites', icon: '🛕', color: 'bg-yellow-50 border-yellow-200' },
  { id: 'relaxation', label: 'Spa & Wellness Sanctuary', icon: '🧖', color: 'bg-teal-50 border-teal-200' },
  { id: 'luxury', label: 'Luxury & Private Yachts', icon: '🛥️', color: 'bg-slate-50 border-slate-200' },
]

const DIETARY_OPTIONS = [
  'Vegetarian',
  'Pure Vegan',
  'Halal',
  'Jain Dining',
  'Gluten-Free',
  'No Restriction',
]

export default function ExperiencesStep({ tripData, onChange, onNext, onPrev }) {
  const toggleExperience = (label) => {
    const current = [...(tripData.selectedExperiences || [])]
    const index = current.indexOf(label)
    if (index > -1) current.splice(index, 1)
    else current.push(label)
    onChange({ ...tripData, selectedExperiences: current })
  }

  const toggleDietary = (diet) => {
    const current = [...(tripData.dietaryPreferences || [])]
    const index = current.indexOf(diet)
    if (index > -1) current.splice(index, 1)
    else current.push(diet)
    onChange({ ...tripData, dietaryPreferences: current })
  }

  const selectedCount = (tripData.selectedExperiences || []).length

  return (
    <div className="space-y-7">
      {/* ── Step Header ── */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fffaf1] to-[#fdf6e3] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#9d7b3d] border border-[#d7b36a]/30 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
          <span>Step 04 · Experiences & Requirements</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
          What experiences inspire this trip?
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Select all that apply — we'll curate private tickets, skip-the-line passes, and dining reservations.
        </p>
      </div>

      {/* ── Experience Chips Grid ── */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500">
            Preferred Experiences & Themes
          </label>
          {selectedCount > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#d5ab56]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#9d7b3d] border border-[#d5ab56]/30">
              <Check className="h-3 w-3 text-[#d5ab56]" />
              {selectedCount} Selected
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {EXPERIENCE_LIST.map((exp) => {
            const isSelected = (tripData.selectedExperiences || []).includes(exp.label)
            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => toggleExperience(exp.label)}
                className={`group relative flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all duration-150 ${
                  isSelected
                    ? 'border-[#d5ab56] bg-gradient-to-br from-[#fffaf1] to-[#fdf6e3] ring-1 ring-[#d5ab56]/50 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-lg shrink-0">{exp.icon}</span>
                <span className={`text-xs leading-tight flex-1 ${isSelected ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                  {exp.label}
                </span>
                <div
                  className={`shrink-0 flex h-4.5 w-4.5 items-center justify-center rounded-full transition-all ${
                    isSelected ? 'bg-[#d5ab56] opacity-100' : 'bg-slate-200 opacity-0 group-hover:opacity-60'
                  }`}
                  style={{ width: '18px', height: '18px' }}
                >
                  <Check className="h-2.5 w-2.5 text-slate-950" />
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Special Occasion & Accessibility ── */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <Shield className="h-4 w-4 text-[#d5ab56]" />
          <label className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
            Special Occasion & Accessibility
          </label>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2">
          <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-[#d7b36a]/50 hover:bg-[#fffaf1]/50 transition-all group">
            <input
              type="checkbox"
              checked={tripData.isCelebration || false}
              onChange={(e) => onChange({ ...tripData, isCelebration: e.target.checked })}
              className="h-4 w-4 rounded border-slate-300 text-[#d5ab56] focus:ring-[#d5ab56] accent-[#d5ab56]"
            />
            <div>
              <span className="block text-xs font-bold text-slate-900">Honeymoon / Anniversary / Birthday</span>
              <span className="block text-[11px] text-slate-500 mt-0.5">Surprise decorations, cake & champagne</span>
            </div>
          </label>

          <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 cursor-pointer hover:border-[#d7b36a]/50 hover:bg-[#fffaf1]/50 transition-all group">
            <input
              type="checkbox"
              checked={tripData.needsAccessibility || false}
              onChange={(e) => onChange({ ...tripData, needsAccessibility: e.target.checked })}
              className="h-4 w-4 rounded border-slate-300 text-[#d5ab56] focus:ring-[#d5ab56] accent-[#d5ab56]"
            />
            <div>
              <span className="block text-xs font-bold text-slate-900">Wheelchair / Mobility Assistance</span>
              <span className="block text-[11px] text-slate-500 mt-0.5">Ground-floor rooms & step-free routes</span>
            </div>
          </label>
        </div>
      </div>

      {/* ── Dietary Preferences ── */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2.5">
          Dietary Requirements
        </label>
        <div className="flex flex-wrap gap-2">
          {DIETARY_OPTIONS.map((diet) => {
            const isSelected = (tripData.dietaryPreferences || []).includes(diet)
            return (
              <button
                key={diet}
                type="button"
                onClick={() => toggleDietary(diet)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {isSelected && <span className="mr-1.5">✓</span>}
                {diet}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Special Notes ── */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">
          Special Notes & Custom Requests
          <span className="ml-2 font-normal normal-case text-slate-400">(optional)</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <textarea
            rows={3}
            value={tripData.specialNotes || ''}
            onChange={(e) => onChange({ ...tripData, specialNotes: e.target.value })}
            placeholder="e.g. Private Lake Como boat tour, non-smoking rooms, extra day in Zermatt, airport VIP meet & greet…"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-10 pr-4 pt-2.5 pb-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#d5ab56] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d5ab56]/20 transition-all resize-none"
          />
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
          <span>Review Trip & Submit</span>
          <ArrowRight className="h-4 w-4 text-[#f6e5b4] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
