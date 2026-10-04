import React, { useState } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  Utensils,
  Car,
  Flame,
  Zap,
  Building,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Crown
} from 'lucide-react'
import { bachelorItineraries } from '../bachelorData'

export default function BachelorItineraries({ onSelectPackage = () => {} }) {
  const [activePlan, setActivePlan] = useState('dubai-3day')
  const [expandedDay, setExpandedDay] = useState(1)

  const plans = [
    { id: 'dubai-3day', label: '3-Day Dubai Apex', badge: 'Supercars & Desert' },
    { id: 'bali-5day', label: '5-Day Bali Action', badge: 'Villas & Beach Clubs' },
    { id: 'international-7day', label: '7-Day Barcelona & Ibiza', badge: 'Mediterranean Odyssey' },
  ]

  const currentItinerary = bachelorItineraries[activePlan]

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0f1d] text-white border-b border-slate-800/80 overflow-hidden" id="itineraries-section">
      {/* Background Lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 mb-4">
            <Flame className="h-4 w-4 text-amber-400" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-400">
              Battle-Tested Squad Blueprints
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Epic Bachelor <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Itineraries</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Every hour crafted to balance adrenaline thrills, pool relaxation, private transfers, and prime VIP nightlife reservations.
          </p>

          {/* Itinerary Tab Switcher */}
          <div className="mt-10 inline-flex flex-wrap items-center justify-center p-1.5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl gap-1">
            {plans.map((plan) => {
              const isActive = activePlan === plan.id
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => {
                    setActivePlan(plan.id)
                    setExpandedDay(1)
                  }}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{plan.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {plan.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Itinerary Header Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="flex items-center gap-3 text-amber-400 text-xs font-black uppercase tracking-wider mb-2 font-mono">
              <Zap className="h-4 w-4 fill-amber-400" />
              <span>{currentItinerary.destination}</span>
              <span>•</span>
              <span>{currentItinerary.duration}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentItinerary.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1 font-light">
              {currentItinerary.idealFor}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Starting Rate</p>
              <p className="text-2xl font-black text-amber-400 font-mono">{currentItinerary.estimatedTotal}</p>
            </div>
            <button
              type="button"
              onClick={() => onSelectPackage && onSelectPackage({ name: currentItinerary.title, type: 'Bachelor Itinerary Customization' })}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <span>Customize Route</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical central/left timeline accent bar */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-amber-500 via-slate-700 to-amber-500/20" />

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
                  {/* Day Badge Node */}
                  <div
                    onClick={() => setExpandedDay(item.day)}
                    className={`absolute left-0 sm:left-4 top-2 w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center text-xs font-black cursor-pointer transition-all duration-300 font-mono shadow-md ${
                      isExpanded
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/20 scale-110'
                        : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-amber-400'
                    }`}
                  >
                    D{item.day}
                  </div>

                  {/* Day Card */}
                  <div
                    className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? 'bg-slate-900/95 border-amber-500/50 shadow-2xl shadow-amber-500/5'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                    }`}
                  >
                    {/* Header trigger */}
                    <div
                      onClick={() => setExpandedDay(isExpanded ? null : item.day)}
                      className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1.5">
                          <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Day {item.day}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                            <MapPin className="h-3.5 w-3.5 text-amber-400" />
                            {item.destination}
                          </span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                          {item.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="hidden sm:block text-right font-mono">
                          <span className="text-[10px] uppercase text-slate-400 block font-semibold">Est. Day Value</span>
                          <span className="text-sm font-bold text-amber-400">{item.cost}</span>
                        </div>
                        <div className={`w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 bg-amber-500 text-slate-950' : ''
                        }`}>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/10 space-y-6">
                        {/* Activities Narrative */}
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                          {item.activities}
                        </p>

                        {/* Signature Squad Moment */}
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-purple-500/10 to-transparent border border-amber-500/30 flex items-start gap-3">
                          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                            <Flame className="h-4 w-4 fill-amber-400" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                              Signature Squad Moment
                            </p>
                            <p className="text-sm text-slate-200 mt-0.5 font-light">
                              {item.groupExperience}
                            </p>
                          </div>
                        </div>

                        {/* Practical Metadata Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center gap-3">
                            <Building className="h-4 w-4 text-amber-400 shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] uppercase text-slate-400 block font-semibold">Accommodation</span>
                              <span className="text-xs text-slate-200 truncate block font-bold">{item.hotel}</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center gap-3">
                            <Utensils className="h-4 w-4 text-amber-400 shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] uppercase text-slate-400 block font-semibold">Food & Beverages</span>
                              <span className="text-xs text-slate-200 truncate block font-bold">{item.meals}</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center gap-3">
                            <Car className="h-4 w-4 text-amber-400 shrink-0" />
                            <div className="min-w-0">
                              <span className="text-[10px] uppercase text-slate-400 block font-semibold">Squad Transport</span>
                              <span className="text-xs text-slate-200 truncate block font-bold">{item.transport}</span>
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
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>All bachelor routes include dedicated local on-ground host and 100% customizable stops.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
