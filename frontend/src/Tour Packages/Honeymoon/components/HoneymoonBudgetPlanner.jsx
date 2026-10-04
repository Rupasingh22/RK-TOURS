import React, { useState, useMemo } from 'react'
import {
  Calculator,
  Plane,
  Building,
  Utensils,
  Car,
  Compass,
  Heart,
  Camera,
  Sparkles,
  Palmtree,
  Mountain,
  Globe,
  ArrowRight,
  ShieldCheck,
  Crown,
  CheckCircle2
} from 'lucide-react'
import { honeymoonBudgetMatrix } from '../honeymoonData'

export default function HoneymoonBudgetPlanner({ onPlanTrip = () => {} }) {
  const [selectedCoupleType, setSelectedCoupleType] = useState('luxury')
  const [selectedDuration, setSelectedDuration] = useState(7)
  const [selectedDestinationType, setSelectedDestinationType] = useState('island')
  const [isCopied, setIsCopied] = useState(false)

  const coupleTypeKeys = ['standard', 'premium', 'luxury', 'ultra_luxury']

  const coupleTypeConfigs = {
    standard: {
      label: 'Standard',
      sublabel: 'Classic Romance',
      icon: Heart,
      badge: 'Charming 4★'
    },
    premium: {
      label: 'Premium',
      sublabel: 'Oceanfront Elegance',
      icon: Sparkles,
      badge: '5★ Luxury'
    },
    luxury: {
      label: 'Luxury',
      sublabel: 'Overwater & Private Pool',
      icon: Crown,
      badge: 'Signature Luxury'
    },
    ultra_luxury: {
      label: 'Ultra Luxury',
      sublabel: 'Bespoke Palace & Butler',
      icon: Crown,
      badge: 'VIP Elite'
    }
  }

  const destinationIcons = {
    beach: Palmtree,
    island: Compass,
    mountain: Mountain,
    city: Building,
    international: Globe
  }

  // Calculate dynamic costs
  const calculation = useMemo(() => {
    const tier = honeymoonBudgetMatrix.coupleTypes[selectedCoupleType]
    const dest = honeymoonBudgetMatrix.destinationTypes.find((d) => d.id === selectedDestinationType) || { multiplier: 1.0 }
    const mult = dest.multiplier

    const nights = Math.max(1, selectedDuration - 1)
    const flights = Math.round(tier.flightsCouple * mult)
    const hotel = Math.round(tier.hotelPerNight * nights * mult)
    const food = Math.round(tier.foodPerDay * selectedDuration * mult)
    const transfers = Math.round(tier.transfersTotal * mult)
    const activities = Math.round(tier.activitiesPerDay * selectedDuration * mult)
    const romanticExp = Math.round(tier.romanticExperiencesTotal * mult)
    const sightseeing = Math.round(tier.sightseeingPerDay * selectedDuration * mult)

    const total = flights + hotel + food + transfers + activities + romanticExp + sightseeing
    const perPerson = Math.round(total / 2)

    return {
      flights,
      hotel,
      food,
      transfers,
      activities,
      romanticExp,
      sightseeing,
      total,
      perPerson,
      tierInfo: tier
    }
  }, [selectedCoupleType, selectedDuration, selectedDestinationType])

  const breakdownItems = [
    { label: 'Flights (2 Guests)', amount: calculation.flights, icon: Plane, pct: Math.round((calculation.flights / calculation.total) * 100) },
    { label: 'Hotel & Luxury Villa', amount: calculation.hotel, icon: Building, pct: Math.round((calculation.hotel / calculation.total) * 100) },
    { label: 'Gourmet Food & Dining', amount: calculation.food, icon: Utensils, pct: Math.round((calculation.food / calculation.total) * 100) },
    { label: 'Private Chauffeur Transfers', amount: calculation.transfers, icon: Car, pct: Math.round((calculation.transfers / calculation.total) * 100) },
    { label: 'Activities & Water Sports', amount: calculation.activities, icon: Compass, pct: Math.round((calculation.activities / calculation.total) * 100) },
    { label: 'Romantic Couple Experiences', amount: calculation.romanticExp, icon: Heart, pct: Math.round((calculation.romanticExp / calculation.total) * 100) },
    { label: 'Sightseeing & Entries', amount: calculation.sightseeing, icon: Camera, pct: Math.round((calculation.sightseeing / calculation.total) * 100) },
  ]

  const handleCopyQuote = () => {
    const text = `RK TOURS - Honeymoon Estimate:\nCouple Tier: ${coupleTypeConfigs[selectedCoupleType].label} (${calculation.tierInfo.name})\nDuration: ${selectedDuration} Days\nDestination Type: ${selectedDestinationType}\nTotal Estimated Cost: $${calculation.total.toLocaleString()} per couple ($${calculation.perPerson.toLocaleString()} per person).`
    navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2500)
  }

  return (
    <section className="relative py-20 lg:py-28 bg-[#0b1120] text-white overflow-hidden border-b border-slate-800" id="budget-planner">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#d7b36a]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#d7b36a]/10 px-4 py-1.5 mb-4">
            <Calculator className="h-4 w-4 text-[#d7b36a]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d7b36a]">
              Smart Honeymoon Cost Calculator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Design Your <span className="font-serif italic font-normal text-[#d7b36a]">Honeymoon Budget</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Select your couple luxury style, trip duration, and destination atmosphere to calculate an instant, transparent breakdown.
          </p>
        </div>

        {/* ── Interactive 2-Column Calculator Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Selectors (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {/* 1. Couple Type Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="flex h-5 w-5 rounded-full bg-[#d7b36a] text-slate-950 items-center justify-center text-[11px] font-black">1</span>
                  Select Couple Luxury Style
                </label>
                <span className="text-xs text-[#d7b36a] font-medium">
                  {coupleTypeConfigs[selectedCoupleType].badge}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {coupleTypeKeys.map((typeKey) => {
                  const isSelected = selectedCoupleType === typeKey
                  const cfg = coupleTypeConfigs[typeKey]
                  const Icon = cfg.icon

                  return (
                    <button
                      key={typeKey}
                      type="button"
                      onClick={() => setSelectedCoupleType(typeKey)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-b from-[#d7b36a]/25 to-slate-950 border-[#d7b36a] shadow-lg shadow-[#d7b36a]/15 scale-[1.02]'
                          : 'bg-slate-950/60 border-white/10 hover:border-white/25 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`h-4 w-4 ${isSelected ? 'text-[#d7b36a]' : 'text-slate-500'}`} />
                        {isSelected && <CheckCircle2 className="h-3.5 w-3.5 text-[#d7b36a]" />}
                      </div>
                      <div>
                        <span className={`text-xs font-bold block ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {cfg.label}
                        </span>
                        <span className="text-[10px] text-slate-400 truncate block">
                          {cfg.sublabel}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
              <p className="text-xs text-slate-400 mt-2.5 italic bg-white/5 p-3 rounded-xl border border-white/5">
                "{calculation.tierInfo.desc}"
              </p>
            </div>

            {/* 2. Duration Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="flex h-5 w-5 rounded-full bg-[#d7b36a] text-slate-950 items-center justify-center text-[11px] font-black">2</span>
                  Select Duration
                </label>
                <span className="text-xs text-white font-semibold">
                  {selectedDuration} Days / {selectedDuration - 1} Nights
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {honeymoonBudgetMatrix.durations.map((days) => {
                  const isSelected = selectedDuration === days
                  return (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setSelectedDuration(days)}
                      className={`py-3 px-2 rounded-2xl border text-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#d7b36a] text-slate-950 font-bold border-[#d7b36a] shadow-md shadow-[#d7b36a]/20 scale-105'
                          : 'bg-slate-950/60 border-white/10 hover:border-white/25 text-slate-300 text-xs font-medium'
                      }`}
                    >
                      <span className="text-sm font-bold block">{days}</span>
                      <span className="text-[10px] block opacity-80">Days</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 3. Destination Type Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <span className="flex h-5 w-5 rounded-full bg-[#d7b36a] text-slate-950 items-center justify-center text-[11px] font-black">3</span>
                  Select Destination Atmosphere
                </label>
                <span className="text-xs text-[#d7b36a] capitalize font-medium">
                  {honeymoonBudgetMatrix.destinationTypes.find((d) => d.id === selectedDestinationType)?.label}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {honeymoonBudgetMatrix.destinationTypes.map((dest) => {
                  const isSelected = selectedDestinationType === dest.id
                  const Icon = destinationIcons[dest.id] || Compass

                  return (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => setSelectedDestinationType(dest.id)}
                      className={`p-3 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#d7b36a]/30 to-slate-950 border-[#d7b36a] text-white shadow-md'
                          : 'bg-slate-950/60 border-white/10 hover:border-white/20 text-slate-400'
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#d7b36a] text-slate-950' : 'bg-white/5 text-slate-400'}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className={`text-xs font-bold block ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {dest.label}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Multiplier {dest.multiplier}x
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Summary Card & Breakdown (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-[#d7b36a]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d7b36a] block">
                  Bespoke Honeymoon Estimate
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                  Total Estimated Investment
                </h3>
              </div>
              <div className="h-10 w-10 rounded-2xl bg-[#d7b36a]/15 border border-[#d7b36a]/30 flex items-center justify-center">
                <Heart className="h-5 w-5 text-[#d7b36a] fill-[#d7b36a]/20" />
              </div>
            </div>

            {/* Total Price Display */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 mb-6 text-center relative overflow-hidden">
              <span className="text-[11px] font-semibold text-[#d7b36a] uppercase tracking-wider block mb-1">
                Starting From (All Inclusions)
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                ${calculation.total.toLocaleString()}
                <span className="text-sm font-sans font-normal text-slate-400"> / couple</span>
              </div>
              <div className="mt-2 text-xs text-slate-400 flex items-center justify-center gap-2">
                <span>≈ ${calculation.perPerson.toLocaleString()} per person</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">All VIP Taxes Included</span>
              </div>
            </div>

            {/* Itemized Cost Breakdown */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Transparent Itemized Breakdown
              </h4>

              {breakdownItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <div className="flex items-center gap-2.5 text-slate-300">
                      <Icon className="h-3.5 w-3.5 text-[#d7b36a] flex-none" />
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-slate-400 text-[11px]">({item.pct}%)</span>
                      <span className="font-semibold text-white font-sans">${item.amount.toLocaleString()}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Visual Proportional Bar */}
            <div className="mb-6">
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-slate-800">
                {breakdownItems.map((item, idx) => {
                  const colors = ['bg-amber-400', 'bg-[#d7b36a]', 'bg-rose-400', 'bg-sky-400', 'bg-emerald-400', 'bg-purple-400', 'bg-orange-400']
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
                onClick={onPlanTrip}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#d7b36a] to-[#c89336] text-slate-950 font-bold text-sm shadow-xl shadow-[#d7b36a]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Lock in Honeymoon Rates</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={handleCopyQuote}
                className="w-full py-2.5 px-4 rounded-xl border border-white/15 hover:border-white/30 text-xs font-medium text-slate-300 hover:text-white transition-colors text-center"
              >
                {isCopied ? '✓ Quote Summary Copied to Clipboard!' : 'Copy Summary Quote'}
              </button>
            </div>

            {/* Guarantee Note */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="h-4 w-4 text-[#d7b36a] flex-none" />
              <span>Quotes are tailored without obligation. Pricing reflects luxury season averages.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
