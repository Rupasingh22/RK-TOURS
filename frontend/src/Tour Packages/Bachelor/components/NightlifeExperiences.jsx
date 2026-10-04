import React from 'react'
import {
  Sparkles,
  GlassWater,
  MapPin,
  ArrowRight,
  Music,
  Flame,
  Zap,
  Crown
} from 'lucide-react'
import { nightlifeExperiences } from '../bachelorData'

export default function NightlifeExperiences({ onSelectNightlife = () => {} }) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#070b14] text-white border-b border-slate-800/80" id="nightlife-section">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3.5 py-1 mb-3">
              <Crown className="h-4 w-4 text-purple-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-purple-400">
                VIP Nightlife & Social Access
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Legendary Nightlife &{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                VIP Lounges
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              Skyline rooftops, oceanfront beach clubs, secret speakeasies, and private yacht party takeovers.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 bg-slate-900 border border-white/10 px-4 py-2 rounded-2xl">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>VIP Table & Fast-Track Reservations</span>
          </div>
        </div>

        {/* ── Nightlife 3-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nightlifeExperiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onSelectNightlife(exp)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              {/* Image & Gradient */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-75 group-hover:brightness-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-purple-500/40 text-[10px] font-black uppercase tracking-wider text-purple-300 font-mono">
                    {exp.tag}
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
                    <MapPin className="h-3 w-3 text-amber-400" />
                    <span className="text-[11px] font-bold">{exp.location.split(',')[0]}</span>
                  </div>
                </div>

                {/* Title & Type */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider mb-0.5">
                    {exp.type}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-slate-900 text-white">
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4 line-clamp-2">
                  {exp.description}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Estimated Cover</span>
                    <span className="text-sm font-black text-amber-400 font-mono">{exp.startingPrice}</span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-slate-800 group-hover:bg-purple-600 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
