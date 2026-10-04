import React, { useState, useMemo } from 'react'
import {
  Calculator,
  Building,
  Car,
  Flame,
  Utensils,
  Sparkles,
  Users,
  Compass,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Share2,
  Crown
} from 'lucide-react'
import { tripBuilderMatrix } from '../bachelorData'

export default function BachelorTripBuilder({ onBuildTrip = () => {} }) {
  const [selectedDestId, setSelectedDestId] = useState('dubai')
  const [selectedDuration, setSelectedDuration] = useState(3)
  const [selectedGroupCount, setSelectedGroupCount] = useState(6)
  const [selectedStyleId, setSelectedStyleId] = useState('party')
  const [isCopied, setIsCopied] = useState(false)

  // Dynamic calculations
  const calculation = useMemo(() => {
    const dest = tripBuilderMatrix.destinations.find((d) => d.id === selectedDestId) || tripBuilderMatrix.destinations[0]
    const group = tripBuilderMatrix.groupSizes.find((g) => g.count === selectedGroupCount) || tripBuilderMatrix.groupSizes[3]
    const style = tripBuilderMatrix.tripStyles.find((s) => s.id === selectedStyleId) || tripBuilderMatrix.tripStyles[0]

    const nights = Math.max(1, selectedDuration - 1)
    const factor = dest.multiplier * style.factor * group.discount

    const hotel = Math.round(dest.hotelPerNight * nights * factor)
    const transport = Math.round(dest.transportPerDay * selectedDuration * factor)
    const activities = Math.round(dest.activitiesPerDay * selectedDuration * factor)
    const food = Math.round(dest.foodPerDay * selectedDuration * factor)
    const nightlife = Math.round(dest.nightlifePerDay * selectedDuration * factor)

    const perPerson = hotel + transport + activities + food + nightlife
    const groupTotal = perPerson * selectedGroupCount

    return {
      dest,
      group,
      style,
      hotel,
      transport,
      activities,
      food,
      nightlife,
      perPerson,
      groupTotal,
    }
  }, [selectedDestId, selectedDuration, selectedGroupCount, selectedStyleId])

  const breakdownItems = [
    { label: 'Hotel & Luxury Villa', amount: calculation.hotel, icon: Building, pct: Math.round((calculation.hotel / calculation.perPerson) * 100) },
    { label: 'Private Chauffeur & Transfers', amount: calculation.transport, icon: Car, pct: Math.round((calculation.transport / calculation.perPerson) * 100) },
    { label: 'Adventure Thrills & Water Sports', amount: calculation.activities, icon: Flame, pct: Math.round((calculation.activities / calculation.perPerson) * 100) },
    { label: 'Gourmet Food & Barbecues', amount: calculation.food, icon: Utensils, pct: Math.round((calculation.food / calculation.perPerson) * 100) },
    { label: 'Nightlife, Beach Clubs & VIP Tables', amount: calculation.nightlife, icon: Sparkles, pct: Math.round((calculation.nightlife / calculation.perPerson) * 100) },
  ]

  const handleCopyQuote = () => {
    const text = `RK TOURS - Bachelor Squad Estimate:\nDestination: ${calculation.dest.name}\nDuration: ${selectedDuration} Days\nSquad Size: ${selectedGroupCount} People\nStyle: ${calculation.style.label}\nEst. Cost: $${calculation.perPerson.toLocaleString()} / person ($${calculation.groupTotal.toLocaleString()} group total).`
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2500)
  }

  return (
    <section className="relative py-20 lg:py-28 bg-[#070b14] text-white border-b border-slate-800/80 overflow-hidden" id="trip-builder">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 mb-4">
            <Calculator className="h-4 w-4 text-amber-400" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-400">
              Interactive Squad Trip Builder
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Build Your Own <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Bachelor Trip</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Select your squad’s dream destination, trip duration, group count, and party style for an instant real-time cost breakdown.
          </p>
        </div>

        {/* ── 2-Column Calculator Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectors (7 Cols) */}
          <div className="lg:col-span-7 space-y-7 bg-slate-900/85 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* 1. Destination */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 rounded-full bg-amber-500 text-slate-950 items-center justify-center text-[11px] font-black">1</span>
                Select Destination
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {tripBuilderMatrix.destinations.map((d) => {
                  const isSelected = selectedDestId === d.id
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDestId(d.id)}
                      className={`p-3 rounded-2xl border text-center transition-all duration-300 font-semibold text-xs ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20 font-black scale-105'
                          : 'bg-slate-950/70 border-white/10 hover:border-white/25 text-slate-300'
                      }`}
                    >
                      {d.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 2. Duration */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="flex h-5 w-5 rounded-full bg-amber-500 text-slate-950 items-center justify-center text-[11px] font-black">2</span>
                  Select Duration
                </label>
                <span className="text-xs text-amber-400 font-bold font-mono">
                  {selectedDuration} Days / {selectedDuration - 1} Nights
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {tripBuilderMatrix.durations.map((days) => {
                  const isSelected = selectedDuration === days
                  return (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setSelectedDuration(days)}
                      className={`py-3 px-2 rounded-2xl border text-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-black border-amber-500 shadow-md shadow-amber-500/20 scale-105'
                          : 'bg-slate-950/70 border-white/10 hover:border-white/25 text-slate-300 text-xs font-medium'
                      }`}
                    >
                      <span className="text-sm font-black block">{days}</span>
                      <span className="text-[10px] block opacity-80 uppercase">Days</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 3. Group Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="flex h-5 w-5 rounded-full bg-amber-500 text-slate-950 items-center justify-center text-[11px] font-black">3</span>
                  Select Squad Size
                </label>
                <span className="text-xs text-emerald-400 font-semibold">
                  {selectedGroupCount >= 6 ? 'Group Discount Applied' : 'Standard Rate'}
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {tripBuilderMatrix.groupSizes.map((g) => {
                  const isSelected = selectedGroupCount === g.count
                  return (
                    <button
                      key={g.count}
                      type="button"
                      onClick={() => setSelectedGroupCount(g.count)}
                      className={`py-3 px-2 rounded-2xl border text-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950 font-black border-amber-500 shadow-md shadow-amber-500/20 scale-105'
                          : 'bg-slate-950/70 border-white/10 hover:border-white/25 text-slate-300 text-xs font-medium'
                      }`}
                    >
                      <span className="text-sm font-black block font-mono">{g.count}</span>
                      <span className="text-[10px] block opacity-80 uppercase">People</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 4. Trip Style */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                <span className="flex h-5 w-5 rounded-full bg-amber-500 text-slate-950 items-center justify-center text-[11px] font-black">4</span>
                Select Trip Vibe & Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {tripBuilderMatrix.tripStyles.map((s) => {
                  const isSelected = selectedStyleId === s.id
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedStyleId(s.id)}
                      className={`p-3 rounded-2xl border text-left transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500/30 to-slate-950 border-amber-500 text-white shadow-md'
                          : 'bg-slate-950/70 border-white/10 hover:border-white/20 text-slate-400'
                      }`}
                    >
                      <span className={`text-xs font-bold block ${isSelected ? 'text-amber-400' : 'text-slate-300'}`}>
                        {s.label}
                      </span>
                      <span className="text-[10px] text-slate-400 line-clamp-1 block mt-0.5">
                        {s.desc}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                  Dynamic Squad Quotation
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Estimated Trip Investment
                </h3>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <Flame className="h-5 w-5 text-amber-400" />
              </div>
            </div>

            {/* Total Price Display */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 mb-6 text-center relative overflow-hidden">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Estimated Starting From
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                ${calculation.perPerson.toLocaleString()}
                <span className="text-sm font-sans font-normal text-slate-400"> / person</span>
              </div>
              <div className="mt-2 text-xs text-slate-400 flex items-center justify-center gap-2">
                <span className="font-semibold text-slate-300 font-mono">
                  ${calculation.groupTotal.toLocaleString()} Total (Crew of {selectedGroupCount})
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">All VIP Inclusions</span>
              </div>
            </div>

            {/* Itemized Cost Breakdown */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Itemized Cost Breakdown (Per Person)
              </h4>

              {breakdownItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <div className="flex items-center gap-2.5 text-slate-300">
                      <Icon className="h-3.5 w-3.5 text-amber-400 flex-none" />
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-slate-400 text-[11px]">({item.pct}%)</span>
                      <span className="font-bold text-white font-sans">${item.amount.toLocaleString()}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Visual Proportional Bar */}
            <div className="mb-6">
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-slate-800">
                {breakdownItems.map((item, idx) => {
                  const colors = ['bg-amber-400', 'bg-sky-400', 'bg-rose-400', 'bg-emerald-400', 'bg-purple-400']
                  return (
                    <div
                      key={item.label}
                      style={{ width: `${item.pct}%` }}
                      className={`${colors[idx % colors.length]} transition-all duration-500`}
                      title={`${item.label}: ${item.pct}%`}
                    />
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={onBuildTrip}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Lock In Squad Rate</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={handleCopyQuote}
                className="w-full py-2.5 px-4 rounded-xl border border-white/15 hover:border-white/30 text-xs font-medium text-slate-300 hover:text-white transition-colors text-center"
              >
                {isCopied ? '✓ Squad Quote Copied to Clipboard!' : 'Copy Summary Quote'}
              </button>
            </div>

            {/* Guarantee Note */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="h-4 w-4 text-amber-400 flex-none" />
              <span>Quotes are tailored without obligation. Single master payment links available.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
