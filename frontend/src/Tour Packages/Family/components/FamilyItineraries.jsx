import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  MapPin,
  Utensils,
  Building,
  Car,
  DollarSign,
  Sparkles,
  ArrowRight,
  Plane,
  CheckCircle2,
} from 'lucide-react'
import { familyItineraries } from '../familyData'

export default function FamilyItineraries({ onPlanTrip = () => {} }) {
  const [activePlan, setActivePlan] = useState('5-day')

  const currentItinerary = familyItineraries[activePlan]

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-slate-200/80" id="itineraries-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <Calendar className="h-4 w-4 text-[#aa732b]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                Day-by-Day Master Itineraries
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Paced for Parents,{' '}
              <span className="font-serif italic font-normal text-[#aa732b]">Thrilling for Kids</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
              Explore our vetted 3-day, 5-day, and 7-day blueprints with zero rushing and built-in downtime.
            </p>
          </div>

          {/* Itinerary Length Switcher */}
          <div className="flex items-center p-1.5 rounded-full bg-slate-100 border border-slate-200 gap-1">
            {[
              { id: '3-day', label: '3-Day Escape' },
              { id: '5-day', label: '5-Day Holiday' },
              { id: '7-day', label: '7-Day Grand Tour' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActivePlan(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activePlan === tab.id
                    ? 'bg-slate-950 text-[#d7b36a] shadow-md'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Itinerary Summary Banner */}
        <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 mb-10 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#d7b36a] block mb-1">
              Active Blueprint: {currentItinerary.duration}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              {currentItinerary.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-light">
              Best For: {currentItinerary.idealFor}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-none border-t sm:border-t-0 sm:border-l border-white/15 pt-4 sm:pt-0 sm:pl-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/50 block">
                Estimated Total
              </span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#d7b36a]">
                {currentItinerary.estimatedTotal}
              </span>
            </div>
            <button
              type="button"
              onClick={onPlanTrip}
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 text-xs font-bold transition-all duration-300 shadow-lg hover:scale-105"
            >
              <Plane className="h-4 w-4" />
              <span>Customize Plan</span>
            </button>
          </div>
        </div>

        {/* ── Interactive Timeline Design ── */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-[#d7b36a] before:via-amber-300/40 before:to-slate-200">
          {currentItinerary.days.map((step) => (
            <div key={step.day} className="relative group">
              {/* Day Circle Marker */}
              <div className="absolute -left-6 sm:-left-10 top-0 h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-slate-950 border-2 border-[#d7b36a] text-white flex items-center justify-center font-serif font-bold text-xs sm:text-sm shadow-md group-hover:scale-110 transition-transform">
                {step.day}
              </div>

              {/* Day Card */}
              <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#aa732b]">
                      Day {step.day} • {step.destination}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-slate-900 mt-0.5">
                      {step.title}
                    </h4>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-[#7a5b2d] w-fit">
                    <span>Est. Day Budget:</span>
                    <span>{step.dailyCost}</span>
                  </div>
                </div>

                {/* Main Activities Description */}
                <p className="text-sm text-slate-700 leading-relaxed font-light mb-5">
                  {step.activities}
                </p>

                {/* 3 Detail Pills: Meals, Hotel, Transport */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Utensils className="h-4 w-4 text-[#aa732b] flex-none" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase">Dining</span>
                      <span className="font-medium text-slate-800 truncate block">{step.meals}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Building className="h-4 w-4 text-[#aa732b] flex-none" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase">Stay</span>
                      <span className="font-medium text-slate-800 truncate block">{step.hotel}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <Car className="h-4 w-4 text-[#aa732b] flex-none" />
                    <div className="min-w-0">
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase">Transit</span>
                      <span className="font-medium text-slate-800 truncate block">{step.transport}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
