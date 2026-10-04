import React from 'react'
import { Link } from 'react-router-dom'
import {
  Flame,
  Zap,
  Compass,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Star,
  Users,
  Sparkles
} from 'lucide-react'

export default function BachelorCTA({
  onExploreClick = () => {},
  onBuildClick = () => {}
}) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#060911] text-white overflow-hidden" id="bachelor-cta">
      {/* ── Background Dramatic Group Action Photography ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=85"
          alt="Bachelor Crew Grand Celebration Festival"
          className="h-full w-full object-cover object-center filter brightness-40 contrast-125 scale-105"
        />
        {/* Deep luxury & energetic cyber gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060911] via-[#060911]/75 to-[#060911]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060911]/90 via-[#060911]/65 to-transparent" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[250px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Mini Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 mb-6 shadow-xl">
          <Flame className="h-4 w-4 text-amber-400 fill-amber-400/30" />
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-400">
            THE DEFINITIVE SQUAD CELEBRATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
          One Trip. One Crew. <br />
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Memories for a Lifetime.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Bring your crew together and create a bachelor trip you'll be talking about for years.
        </p>

        {/* Action Buttons Container */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={onExploreClick}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 text-sm sm:text-base uppercase tracking-wider"
          >
            <Compass className="h-5 w-5 fill-slate-950" />
            <span>Explore Bachelor Packages</span>
          </button>

          <button
            type="button"
            onClick={onBuildClick}
            className="inline-flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-800 border border-white/20 hover:border-amber-400 text-white font-bold px-8 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base uppercase tracking-wider shadow-lg"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Build My Trip</span>
          </button>

          <a
            href="tel:+18005557890"
            className="inline-flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-900 border border-amber-500/50 text-amber-400 hover:text-white font-bold px-7 py-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base uppercase tracking-wider"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Talk to a Travel Expert</span>
          </a>
        </div>

        {/* Glassmorphism Feature Panel */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/15 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left shadow-2xl">
          <div className="flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-none">
              <ShieldCheck className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Private Villa Freedom</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-light">
                Hand-vetted 5+ bedroom pool villas with private sound systems and chefs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-none">
              <Zap className="h-5 w-5 text-amber-400 fill-amber-400/20" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">VIP Table Fast-Track</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-light">
                Skip regular queues with dedicated hosts and pre-arranged bottle service.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-none">
              <Users className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white">Split Payment Links</h4>
              <p className="text-xs text-slate-400 mt-0.5 font-light">
                Each crew member can pay their individual share securely online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
