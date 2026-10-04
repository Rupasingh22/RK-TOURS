import React, { useState } from 'react'
import {
  BookOpen,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Compass,
  Heart,
  HelpCircle,
  PhoneCall,
  Search,
  Luggage,
  Calendar,
  ShieldCheck,
  Camera,
  DollarSign
} from 'lucide-react'
import { honeymoonTravelGuide } from '../honeymoonData'

export default function HoneymoonTravelGuide() {
  const [openId, setOpenId] = useState('destinations')
  const [searchQuery, setSearchQuery] = useState('')

  const toggleAccordion = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  const filteredGuide = honeymoonTravelGuide.filter((item) => {
    if (!searchQuery.trim()) return true
    const query = searchQuery.toLowerCase()
    return (
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.details.some((d) => d.toLowerCase().includes(query))
    )
  })

  return (
    <section className="relative py-20 lg:py-28 bg-[#fdfbf7] text-slate-900 border-b border-slate-200/80" id="travel-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <BookOpen className="h-4 w-4 text-[#aa732b]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                Honeymoon Masterclass & Advice
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Essential Honeymoon <span className="font-serif italic font-normal text-[#aa732b]">Planning Guide</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light max-w-2xl">
              Expert advice from our romantic concierge team to help you navigate luxury room selections, seamless packing, ideal durations, and photo memory tips.
            </p>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guide topics..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d7b36a]/50 focus:border-[#d7b36a] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* ── Accordion Grid & Sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Accordion List (8 Cols) */}
          <div className="lg:col-span-8 space-y-3.5">
            {filteredGuide.map((item, index) => {
              const isOpen = openId === item.id
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#d7b36a] shadow-lg shadow-[#d7b36a]/10 ring-1 ring-[#d7b36a]/30'
                      : 'bg-white/80 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  {/* Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5">
                      <span className={`flex-none flex h-7 w-7 rounded-xl items-center justify-center text-xs font-bold transition-colors ${
                        isOpen ? 'bg-[#d7b36a] text-slate-950 font-black' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {index + 1}
                      </span>
                      <div>
                        <h3 className={`text-base sm:text-lg font-serif font-bold transition-colors ${
                          isOpen ? 'text-slate-950' : 'text-slate-800'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-light mt-0.5 line-clamp-1">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className={`flex-none h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-slate-950 text-[#d7b36a]' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Expandable Body */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 bg-[#fffdfa]/60">
                      <div className="space-y-2.5 pt-3">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                            <CheckCircle2 className="h-4 w-4 text-[#aa732b] flex-none mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {filteredGuide.length === 0 && (
              <div className="p-8 text-center rounded-2xl bg-white border border-slate-200 text-slate-500 text-sm">
                No guide topics match your search. Try searching for "packing", "villa", "duration" or "months".
              </div>
            )}
          </div>

          {/* Right Column: Expert Honeymoon Concierge Advice Box (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* VIP Card */}
            <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#d7b36a]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d7b36a]/20 border border-[#d7b36a]/40 text-[#d7b36a] text-[10px] font-bold uppercase tracking-wider mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Complimentary Consultation</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Have Honeymoon Questions?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                Our romantic travel specialists have personally vetted over 150 luxury honeymoon resorts worldwide. Let us handle private check-ins, sunset reservations, and special perks.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#d7b36a]" />
                  <span>100% Guaranteed Honeymoon Villa Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#d7b36a]" />
                  <span>Free Room Upgrades & Champagne (Subject to Avail.)</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-[#d7b36a]" />
                  <span>24/7 Dedicated WhatsApp Butler Channel</span>
                </div>
              </div>

              <a
                href="https://wa.me/?text=Hello%20RK%20Tours,%20I%20would%20like%20to%20consult%20with%20a%20honeymoon%20specialist."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Speak with a Honeymoon Expert</span>
              </a>
            </div>

            {/* Quick Tips Pill Box */}
            <div className="rounded-3xl bg-amber-50/80 border border-amber-200/80 p-6">
              <h4 className="font-serif text-lg font-bold text-[#7a5b2d] mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-[#aa732b] fill-[#aa732b]/20" />
                <span>Top Honeymoon Golden Rule</span>
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-light">
                Do not over-schedule your first 48 hours. After months of intense wedding planning, give yourselves at least two quiet days of pool relaxation, massages, and sleep before diving into high-energy adventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
