import React, { useState } from 'react'
import {
  BookOpen,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Search,
  ShieldCheck,
  PhoneCall,
  Flame,
  Zap,
  Users,
  DollarSign,
  Luggage
} from 'lucide-react'
import { bachelorTravelGuide } from '../bachelorData'

export default function BachelorTravelGuide() {
  const [openId, setOpenId] = useState('best-destinations')
  const [searchQuery, setSearchQuery] = useState('')

  const toggleAccordion = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  const filteredGuide = bachelorTravelGuide.filter((item) => {
    if (!searchQuery.trim()) return true
    const query = searchQuery.toLowerCase()
    return (
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.details.some((d) => d.toLowerCase().includes(query))
    )
  })

  return (
    <section className="relative py-20 lg:py-28 bg-[#070b14] text-white border-b border-slate-800/80" id="travel-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 mb-3">
              <BookOpen className="h-4 w-4 text-amber-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
                Squad Logistics & Best Man Blueprint
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bachelor Travel <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Guide</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light max-w-2xl">
              15 essential guides covering party destinations, group expense splitting, villa selection, packing, and adrenaline safety.
            </p>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search squad topics..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-white/15 rounded-2xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all shadow-sm"
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
                      ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
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
                      <span className={`flex-none flex h-7 w-7 rounded-xl items-center justify-center text-xs font-black transition-colors font-mono ${
                        isOpen ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {index + 1}
                      </span>
                      <div>
                        <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? 'text-white' : 'text-slate-200'
                        }`}>
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-light mt-0.5 line-clamp-1">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className={`flex-none h-8 w-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Expandable Body */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/10 bg-slate-950/60">
                      <div className="space-y-2.5 pt-3">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                            <CheckCircle2 className="h-4 w-4 text-amber-400 flex-none mt-0.5" />
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
              <div className="p-8 text-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-sm">
                No guide topics match your search. Try searching for "villas", "budget", "expenses" or "destinations".
              </div>
            )}
          </div>

          {/* Right Column: Best Man Concierge Box (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* VIP Card */}
            <div className="rounded-3xl bg-slate-900 border border-amber-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-black uppercase tracking-wider mb-4">
                <Flame className="h-3.5 w-3.5 fill-amber-400" />
                <span>Best Man VIP Lifeline</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">
                Need Help Organizing the Crew?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                Planning a trip for 8+ guys doesn't have to be a headache. We provide custom group payment links, fast-track VIP club reservations, and private villa cooks.
              </p>

              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  <span>Individual Group Payment Split Links</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>VIP Table & Bottle Service Fast-Track</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-amber-400" />
                  <span>24/7 Dedicated On-Ground WhatsApp Host</span>
                </div>
              </div>

              <a
                href="https://wa.me/?text=Hello%20RK%20Tours,%20I%20am%20planning%20a%20bachelor%20trip%20and%20need%20a%20squad%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Speak With a Bachelor Specialist</span>
              </a>
            </div>

            {/* Quick Tips Box */}
            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6">
              <h4 className="text-lg font-bold text-amber-400 mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400 fill-amber-400" />
                <span>The #1 Bachelor Golden Rule</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Lock in your private pool villa and international flights early. In high-demand squad destinations like Bali, Ibiza, and Goa, top 5-bedroom private compounds with sound systems book out 4 to 6 months in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
