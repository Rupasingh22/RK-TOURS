import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Calculator,
  Users,
  Calendar,
  Wallet,
  Plane,
  Building,
  Utensils,
  Car,
  Compass,
  ShoppingBag,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { budgetPlannerMatrix } from '../familyData'

export default function FamilyBudgetPlanner({ onPlanTrip = () => {} }) {
  const [selectedTier, setSelectedTier] = useState('comfort')
  const [selectedSizeId, setSelectedSizeId] = useState('2a2c')
  const [selectedDuration, setSelectedDuration] = useState(7)

  const tierData = budgetPlannerMatrix.tiers[selectedTier]
  const sizeObj =
    budgetPlannerMatrix.familySizes.find((s) => s.id === selectedSizeId) ||
    budgetPlannerMatrix.familySizes[2]

  const totalPeople = sizeObj.adults + sizeObj.children

  // Dynamic cost calculations
  const breakdown = useMemo(() => {
    const flightTotal = tierData.flightPerPerson * totalPeople
    const hotelTotal = tierData.hotelPerDay * selectedDuration
    const foodTotal = tierData.foodPerDayPerPerson * totalPeople * selectedDuration
    const transportTotal = tierData.transportPerDay * selectedDuration
    const activitiesTotal = tierData.activitiesPerDayPerPerson * totalPeople * selectedDuration
    const sightseeingTotal = tierData.sightseeingPerDayPerPerson * totalPeople * selectedDuration
    const shoppingTotal = tierData.shoppingPerFamily

    const grandTotal =
      flightTotal +
      hotelTotal +
      foodTotal +
      transportTotal +
      activitiesTotal +
      sightseeingTotal +
      shoppingTotal

    const perPersonEstimated = Math.round(grandTotal / totalPeople)

    return {
      flightTotal,
      hotelTotal,
      foodTotal,
      transportTotal,
      activitiesTotal,
      sightseeingTotal,
      shoppingTotal,
      grandTotal,
      perPersonEstimated,
    }
  }, [tierData, totalPeople, selectedDuration])

  return (
    <section className="relative py-20 lg:py-24 bg-[#f8f5f0] border-b border-slate-200/80" id="budget-planner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
            <Calculator className="h-4 w-4 text-[#aa732b]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
              Interactive Budget Calculator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
            Transparent Estimates for{' '}
            <span className="font-serif italic font-normal text-[#aa732b]">Every Family Budget</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
            Customize family size, holiday length, and tier to generate real-time cost projections with no hidden surprises.
          </p>
        </div>

        {/* ── Calculator Container (Grid 12) ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-7">
            {/* 1. Select Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Travel Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'economy', label: 'Economy' },
                  { id: 'comfort', label: 'Comfort' },
                  { id: 'premium', label: 'Premium' },
                  { id: 'luxury', label: 'Ultra Luxury' },
                ].map((tier) => {
                  const isSelected = selectedTier === tier.id
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id)}
                      className={`py-3 px-3 rounded-2xl text-xs font-semibold text-center transition-all duration-300 select-none ${
                        isSelected
                          ? 'bg-slate-950 text-[#d7b36a] shadow-md ring-1 ring-[#d7b36a]/50 scale-[1.02]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tier.label}
                    </button>
                  )
                })}
              </div>
              <p className="text-xs text-slate-500 mt-2 italic font-light">
                {tierData.desc}
              </p>
            </div>

            {/* 2. Select Family Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                2. Select Family Composition
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {budgetPlannerMatrix.familySizes.map((size) => {
                  const isSelected = selectedSizeId === size.id
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSizeId(size.id)}
                      className={`py-3 px-2 rounded-2xl text-xs font-semibold text-center transition-all duration-300 select-none ${
                        isSelected
                          ? 'bg-[#d7b36a] text-slate-950 shadow-md scale-[1.02]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {size.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 3. Select Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                3. Select Trip Duration
              </label>
              <div className="grid grid-cols-5 gap-2">
                {budgetPlannerMatrix.durations.map((days) => {
                  const isSelected = selectedDuration === days
                  return (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setSelectedDuration(days)}
                      className={`py-3 px-2 rounded-2xl text-xs font-semibold text-center transition-all duration-300 select-none ${
                        isSelected
                          ? 'bg-slate-950 text-[#d7b36a] shadow-md ring-1 ring-[#d7b36a]/50 scale-[1.02]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {days} Days
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Itemized Cost Breakdown Pills */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Live Category Breakdown ({selectedDuration} Days • {sizeObj.label})
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                  <Plane className="h-4 w-4 text-[#aa732b]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Est. Flights</span>
                    <span className="text-xs font-bold text-slate-900">${breakdown.flightTotal}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                  <Building className="h-4 w-4 text-[#aa732b]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Hotels & Stays</span>
                    <span className="text-xs font-bold text-slate-900">${breakdown.hotelTotal}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                  <Utensils className="h-4 w-4 text-[#aa732b]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Food & Dining</span>
                    <span className="text-xs font-bold text-slate-900">${breakdown.foodTotal}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                  <Car className="h-4 w-4 text-[#aa732b]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Transportation</span>
                    <span className="text-xs font-bold text-slate-900">${breakdown.transportTotal}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                  <Compass className="h-4 w-4 text-[#aa732b]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Activities & Parks</span>
                    <span className="text-xs font-bold text-slate-900">${breakdown.activitiesTotal}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                  <ShoppingBag className="h-4 w-4 text-[#aa732b]" />
                  <div>
                    <span className="text-[10px] text-slate-400 block">Sightseeing & Shop</span>
                    <span className="text-xs font-bold text-slate-900">
                      ${breakdown.sightseeingTotal + breakdown.shoppingTotal}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d7b36a]">
                  Estimated Family Investment
                </span>
                <span className="text-[10px] bg-white/10 px-2.5 py-0.5 rounded-full text-white/80">
                  {tierData.name}
                </span>
              </div>

              {/* Big Grand Total Display */}
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl font-serif font-bold text-white mb-1">
                  ${breakdown.grandTotal.toLocaleString()}{' '}
                  <span className="text-sm font-sans font-normal text-white/50">USD</span>
                </div>
                <p className="text-xs text-[#d7b36a] font-medium">
                  Approx. ${breakdown.perPersonEstimated.toLocaleString()} per family member for {selectedDuration} days
                </p>
              </div>

              {/* Inclusions Guarantee Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 mb-8 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#d7b36a]" />
                  <span>Includes all taxes, resort fees & service charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#d7b36a]" />
                  <span>Free cancellation up to 14 days before departure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#d7b36a]" />
                  <span>24/7 multilingual family concierge throughout trip</span>
                </div>
              </div>
            </div>

            {/* Final Action Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={onPlanTrip}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 font-bold text-sm transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                <span>Lock In This Budget & Plan Itinerary</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl border border-white/20 hover:border-white text-white font-medium text-xs transition-colors"
              >
                Talk to Family Travel Finance Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
