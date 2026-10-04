import React, { useState } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  Utensils,
  Car,
  Heart,
  DollarSign,
  Hotel,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import { honeymoonItineraries } from '../honeymoonData'

export default function HoneymoonItineraries({ onSelectPackage }) {
  const [activePlan, setActivePlan] = useState('4-day')
  const [expandedDay, setExpandedDay] = useState(1)

  const plans = [
    { id: '4-day', label: '4-Day Maldives Escape', badge: 'Island Sanctuary' },
    { id: '7-day', label: '7-Day Bali Romance', badge: 'Jungle & Cliffs' },
    { id: '10-day', label: '10-Day European Grand Romance', badge: 'Paris • Venice • Alps' },
  ]

  const currentItinerary = honeymoonItineraries[activePlan]

  return (
    <section id="honeymoon-itineraries" className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Subtle Ambient Light Gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium tracking-widest uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            Curated Day-by-Day Romance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-stone-100">
            Romantic Honeymoon Itineraries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-400 font-light leading-relaxed">
            Every minute balanced between breathtaking shared adventures, secluded intimacy, and effortless luxury transfers.
          </p>

          {/* Itinerary Tab Switcher */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center p-1.5 bg-stone-900/90 border border-stone-800 rounded-2xl shadow-xl backdrop-blur-md gap-1">
            {plans.map((plan) => {
              const isActive = activePlan === plan.id
              return (
                <button
                  key={plan.id}
                  onClick={() => {
                    setActivePlan(plan.id)
                    setExpandedDay(1)
                  }}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-stone-950 font-semibold shadow-lg shadow-amber-500/20'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <span>{plan.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isActive ? 'bg-stone-950/20 text-stone-900' : 'bg-stone-800 text-stone-400'
                  }`}>
                    {plan.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Itinerary Header Bar */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{currentItinerary.destination}</span>
              <span>•</span>
              <span>{currentItinerary.duration}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal">
              {currentItinerary.title}
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              {currentItinerary.idealFor}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t md:border-t-0 md:border-l border-stone-800 pt-4 md:pt-0 md:pl-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-400">Starting From</p>
              <p className="text-2xl font-serif text-amber-400 font-semibold">{currentItinerary.estimatedTotal}</p>
            </div>
            <button
              onClick={() => onSelectPackage && onSelectPackage({ name: currentItinerary.title, type: 'Itinerary Customization' })}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <span>Customize This Route</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical central/left timeline accent bar */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-500 via-stone-700 to-amber-500/20" />

          <div className="space-y-6">
            {currentItinerary.days.map((item) => {
              const isExpanded = expandedDay === item.day

              return (
                <div
                  key={item.day}
                  className={`relative pl-12 sm:pl-20 transition-all duration-300 ${
                    isExpanded ? 'opacity-100' : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* Day Badge Node on timeline */}
                  <div
                    onClick={() => setExpandedDay(item.day)}
                    className={`absolute left-0 sm:left-4 top-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-300 shadow-md ${
                      isExpanded
                        ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-500/20 scale-110'
                        : 'bg-stone-900 border border-stone-700 text-stone-300 hover:border-amber-400'
                    }`}
                  >
                    D{item.day}
                  </div>

                  {/* Day Card */}
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? 'bg-stone-900/90 border-amber-500/40 shadow-2xl shadow-amber-500/5'
                        : 'bg-stone-900/40 border-stone-800/80 hover:bg-stone-900/70 hover:border-stone-700'
                    }`}
                  >
                    {/* Header trigger */}
                    <div
                      onClick={() => setExpandedDay(isExpanded ? null : item.day)}
                      className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1.5">
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                            Day {item.day}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-stone-400">
                            <MapPin className="w-3.5 h-3.5 text-stone-500" />
                            {item.destination}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-serif text-white font-medium">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="hidden sm:block text-right">
                          <span className="text-[10px] uppercase text-stone-500 block">Est. Day Value</span>
                          <span className="text-sm font-semibold text-amber-400/90">{item.cost}</span>
                        </div>
                        <div className={`w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 bg-amber-500 text-stone-950' : ''
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-stone-800/80 space-y-6">
                        {/* Activities Narrative */}
                        <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                          {item.activities}
                        </p>

                        {/* Signature Couple Experience Highlight */}
                        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-transparent border border-amber-500/20 flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                            <Heart className="w-4 h-4 fill-amber-400/40" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                              Signature Couple Moment
                            </p>
                            <p className="text-sm text-stone-200 mt-0.5 font-light">
                              {item.coupleExperience}
                            </p>
                          </div>
                        </div>

                        {/* Practical Day Metadata Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center gap-3">
                            <Hotel className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] uppercase text-stone-500 block">Accommodation</span>
                              <span className="text-xs text-stone-300 truncate block font-medium">{item.hotel}</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center gap-3">
                            <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] uppercase text-stone-500 block">Culinary Inclusions</span>
                              <span className="text-xs text-stone-300 truncate block font-medium">{item.meals}</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center gap-3">
                            <Car className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] uppercase text-stone-500 block">Private Transfers</span>
                              <span className="text-xs text-stone-300 truncate block font-medium">{item.transport}</span>
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

        {/* Bottom guarantee badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-stone-900 border border-stone-800 text-xs text-stone-400">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>All honeymoon itineraries are 100% customizable with personal concierge support upon booking.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
