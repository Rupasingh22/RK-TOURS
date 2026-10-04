import { useState } from 'react'
import { Info, Check, X, Calendar, Clock, DollarSign, Globe2, Car, Lightbulb, ShieldCheck } from 'lucide-react'

export default function TourInformation({ tour }) {
  const [activeTab, setActiveTab] = useState('inclusions') // 'inclusions' | 'specs' | 'tips'
  const { tourInfo } = tour

  return (
    <section id="tour-information" className="border-b border-slate-200/80 bg-[#fdfcfa] py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 shadow-2xs">
              <Info className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Section 05 / Essential Details</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Tour Information & Policy
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Clear specifications on inclusions, seasonal timing, currency, and insider travel advice.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1 text-xs font-medium text-slate-700">
            <button
              onClick={() => setActiveTab('inclusions')}
              className={`rounded-lg px-3.5 py-1.5 transition ${
                activeTab === 'inclusions'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Inclusions & Exclusions
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`rounded-lg px-3.5 py-1.5 transition ${
                activeTab === 'specs'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Key Specifications
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`rounded-lg px-3.5 py-1.5 transition ${
                activeTab === 'tips'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Travel Tips
            </button>
          </div>
        </div>

        {/* TAB 1: INCLUSIONS & EXCLUSIONS */}
        {activeTab === 'inclusions' && (
          <div className="grid gap-6 md:grid-cols-2">
            {/* What's Included */}
            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-5 shadow-xs">
              <div className="flex items-center gap-2 border-b border-emerald-200/60 pb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-950">
                  What's Included in Your Fare
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {tourInfo.whatsIncluded.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 leading-relaxed">
                    <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Included */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-xs">
              <div className="flex items-center gap-2 border-b border-slate-200/60 pb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400 text-white">
                  <X className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  What's Not Included
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {tourInfo.whatsNotIncluded.map((ninc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                    <X className="h-3.5 w-3.5 shrink-0 text-slate-400 mt-0.5" />
                    <span>{ninc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: KEY SPECIFICATIONS */}
        {activeTab === 'specs' && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Best Time to Visit */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#9d7b3d]">
                <Calendar className="h-4 w-4 text-[#d5ab56]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Best Time to Visit</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-800 leading-relaxed">
                {tourInfo.bestTimeToVisit}
              </p>
            </div>

            {/* Tour Duration */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#9d7b3d]">
                <Clock className="h-4 w-4 text-[#d5ab56]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Tour Duration</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-800 leading-relaxed">
                {tourInfo.tourDuration}
              </p>
            </div>

            {/* Currency & Payments */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#9d7b3d]">
                <DollarSign className="h-4 w-4 text-[#d5ab56]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Currency</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-800 leading-relaxed">
                {tourInfo.currency}
              </p>
            </div>

            {/* Language */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
              <div className="flex items-center gap-2 text-[#9d7b3d]">
                <Globe2 className="h-4 w-4 text-[#d5ab56]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Language</span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-800 leading-relaxed">
                {tourInfo.language}
              </p>
            </div>

            {/* Transportation Block across 4 cols */}
            <div className="sm:col-span-2 lg:col-span-4 rounded-2xl border border-[#d7b36a]/30 bg-[#fffaf1] p-4 text-xs">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#9d7b3d]">
                <Car className="h-4 w-4 text-[#d5ab56]" />
                <span>Transportation & Chauffeur Protocol</span>
              </div>
              <p className="mt-1.5 text-slate-700 leading-relaxed">
                {tourInfo.transportation}
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: TRAVEL TIPS */}
        {activeTab === 'tips' && (
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Lightbulb className="h-4 w-4 text-[#d5ab56]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Essential Travel Advice & Packing Tips
              </h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {tourInfo.travelTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs leading-relaxed text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fffaf1] text-[10px] font-bold text-[#9d7b3d] border border-[#d7b36a]/30">
                    {idx + 1}
                  </span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary Spec Grid for Always-Visible Micro Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span className="font-semibold text-slate-800">Complimentary Travel Insurance</span>
            <span className="hidden sm:inline text-slate-400">• Up to $100,000 emergency coverage</span>
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            24/7 Dedicated Concierge Support via WhatsApp & Phone
          </div>
        </div>
      </div>
    </section>
  )
}
