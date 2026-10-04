import { useState } from 'react'
import {
  BookOpen,
  ChevronDown,
  CheckCircle2,
  Baby,
  Flame,
  Users,
  Sun,
  CheckSquare,
  Shield,
  Utensils,
  Car,
  Building,
  Sparkles,
} from 'lucide-react'
import { familyTravelGuide } from '../familyData'

export default function FamilyTravelGuide() {
  const [openItems, setOpenItems] = useState({
    children: true,
    packing: true,
  })

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const iconMap = {
    Baby,
    Flame,
    Users,
    Sun,
    CheckSquare,
    Shield,
    Utensils,
    Car,
    Building,
    Sparkles,
  }

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-slate-200/80" id="travel-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
            <BookOpen className="h-4 w-4 text-[#aa732b]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
              Master Voyager Guide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
            The Essential{' '}
            <span className="font-serif italic font-normal text-[#aa732b]">Family Travel Handbook</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
            Expert insights, pediatrician-approved packing lists, safety tips, and age-specific recommendations.
          </p>
        </div>

        {/* ── 10 Expandable Accordions Grid ── */}
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {familyTravelGuide.map((guide) => {
            const Icon = iconMap[guide.icon] || Sparkles
            const isOpen = !!openItems[guide.id]

            return (
              <div
                key={guide.id}
                className="rounded-3xl border border-slate-200/90 bg-[#fbf9f5] overflow-hidden transition-all duration-300 hover:border-slate-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(guide.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-none"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="h-10 w-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-none text-[#aa732b]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-light mt-0.5 line-clamp-1">
                        {guide.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-none text-slate-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#d7b36a] text-slate-950 border-[#d7b36a]' : ''
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-200/60 bg-white space-y-2.5">
                    {guide.details.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                        <CheckCircle2 className="h-4 w-4 text-[#aa732b] flex-none mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
