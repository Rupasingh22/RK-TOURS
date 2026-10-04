import { useState } from 'react'
import { Calendar, ChevronDown, ChevronUp, MapPin, Utensils, BedDouble, Car, Check, Layers } from 'lucide-react'

export default function TourItinerary({ tour }) {
  const { itinerary } = tour
  // Keep first 2 days open by default for immediate preview, or allow toggling
  const [expandedDays, setExpandedDays] = useState({ 1: true, 2: true })

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }))
  }

  const expandAll = () => {
    const all = {}
    itinerary.forEach((item) => {
      all[item.day] = true
    })
    setExpandedDays(all)
  }

  const collapseAll = () => {
    setExpandedDays({})
  }

  return (
    <section id="tour-itinerary" className="border-b border-slate-200/80 bg-[#faf8f5] py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 shadow-2xs">
              <Calendar className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Section 03 / Day-by-Day Schedule</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Curated Day-by-Day Itinerary
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Thoughtfully paced days balancing private guided expeditions, scenic transits, and leisure.
            </p>
          </div>

          {/* Expand / Collapse All Controls */}
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={expandAll}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-700 shadow-2xs transition hover:border-[#d5ab56] hover:text-[#9d7b3d]"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-700 shadow-2xs transition hover:border-[#d5ab56] hover:text-[#9d7b3d]"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Timeline Itinerary List */}
        <div className="relative space-y-4 before:absolute before:left-5 sm:before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#d5ab56] before:via-slate-300 before:to-[#d5ab56]">
          {itinerary.map((item) => {
            const isOpen = Boolean(expandedDays[item.day])

            return (
              <div
                key={item.day}
                className="relative pl-12 sm:pl-16 transition-all duration-300"
              >
                {/* Timeline Pin Node */}
                <div
                  className={`absolute left-2.5 sm:left-3.5 top-3 flex h-6 w-6 sm:h-7 sm:w-7 -translate-x-1/2 items-center justify-center rounded-full border-2 text-[11px] font-bold transition-colors ${
                    isOpen
                      ? 'border-[#d5ab56] bg-slate-900 text-[#f6e5b4] shadow-md'
                      : 'border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  {item.day}
                </div>

                {/* Card Container */}
                <div
                  className={`rounded-2xl border bg-white transition-all shadow-sm ${
                    isOpen
                      ? 'border-[#d7b36a]/50 ring-1 ring-[#d7b36a]/20 shadow-md'
                      : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  {/* Card Header (Accordion Button) */}
                  <button
                    type="button"
                    onClick={() => toggleDay(item.day)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-[#fffaf1] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30">
                          Day 0{item.day}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                          <MapPin className="h-3 w-3 text-[#d5ab56]" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-bold text-slate-900 sm:text-lg">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-[#fffaf1] hover:text-[#9d7b3d]">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pb-5 pt-3 sm:px-5">
                      {/* Activities */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Scheduled Daily Activities
                        </h4>
                        <div className="mt-2 space-y-2">
                          {item.activities.map((act, actIdx) => (
                            <div key={actIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] mt-0.5">
                                <Check className="h-2.5 w-2.5" />
                              </span>
                              <span>{act}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Day Specs Bar: Meals, Hotel, Transport */}
                      <div className="mt-4 grid grid-cols-1 gap-2 rounded-xl bg-slate-50 p-3 sm:grid-cols-3 sm:gap-3 border border-slate-100 text-xs">
                        {/* Meals */}
                        <div className="flex items-start gap-2">
                          <Utensils className="h-3.5 w-3.5 shrink-0 text-[#d5ab56] mt-0.5" />
                          <div>
                            <span className="block text-[10px] font-semibold uppercase text-slate-400">Meals</span>
                            <span className="font-medium text-slate-800">{item.meals}</span>
                          </div>
                        </div>

                        {/* Stay/Hotel */}
                        <div className="flex items-start gap-2">
                          <BedDouble className="h-3.5 w-3.5 shrink-0 text-[#d5ab56] mt-0.5" />
                          <div>
                            <span className="block text-[10px] font-semibold uppercase text-slate-400">Accommodation</span>
                            <span className="font-medium text-slate-800">{item.hotel}</span>
                          </div>
                        </div>

                        {/* Transport */}
                        <div className="flex items-start gap-2">
                          <Car className="h-3.5 w-3.5 shrink-0 text-[#d5ab56] mt-0.5" />
                          <div>
                            <span className="block text-[10px] font-semibold uppercase text-slate-400">Transit Mode</span>
                            <span className="font-medium text-slate-800">{item.transport}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
