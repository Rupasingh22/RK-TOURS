import React, { useState } from 'react'
import {
  Flame,
  Zap,
  Sparkles,
  MapPin,
  ArrowRight,
  Gauge,
  Activity,
  Compass
} from 'lucide-react'
import { adventureExperiences } from '../bachelorData'

export default function AdventureExperiences({ onSelectExperience = () => {} }) {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Extreme Air', 'Desert Powersports', 'Marine Luxury', 'Motorsport', 'Off-Road', 'Ocean Thrills']

  const filtered = adventureExperiences.filter((item) => {
    if (filter === 'All') return true
    return item.category.toLowerCase() === filter.toLowerCase()
  })

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0f1d] text-white border-b border-slate-800/80" id="adventure-wall">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 mb-3">
              <Flame className="h-4 w-4 text-amber-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
                Adrenaline & Thrill Wall
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              High-Octane <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Squad Thrills</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              12 world-class adventures engineered for unforgettable group stories and maximum rush.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 select-none whitespace-nowrap ${
                  filter === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Asymmetric Editorial Adventure Wall Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[280px]">
          {filtered.map((exp, index) => {
            const isSpan = exp.isLarge && filter === 'All'

            return (
              <div
                key={exp.title}
                onClick={() => onSelectExperience(exp)}
                className={`group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-amber-500/60 shadow-xl hover:shadow-2xl hover:shadow-amber-500/15 transition-all duration-500 cursor-pointer flex flex-col justify-end p-6 ${
                  isSpan ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'
                }`}
              >
                {/* Background Image & Cinematic Gradient */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-70 group-hover:brightness-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                {/* Floating Intensity & Tag Badges */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-[10px] font-black uppercase tracking-wider text-amber-400 font-mono">
                    {exp.tag}
                  </span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[10px] text-white">
                    <Activity className="h-3 w-3 text-amber-400" />
                    <span>{exp.intensity}</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{exp.destination}</span>
                  </div>

                  <h3 className={`font-black text-white group-hover:text-amber-400 transition-colors leading-snug mb-2 ${
                    isSpan ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                  }`}>
                    {exp.title}
                  </h3>

                  <p className={`text-slate-300 font-light leading-relaxed mb-4 ${
                    isSpan ? 'text-sm line-clamp-3' : 'text-xs line-clamp-2'
                  }`}>
                    {exp.description}
                  </p>

                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Zap className="h-3.5 w-3.5 fill-amber-400" /> Action Inclusions
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
