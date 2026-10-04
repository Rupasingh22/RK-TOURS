import React from 'react'
import { Link } from 'react-router-dom'
import {
  Heart,
  Sparkles,
  Compass,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin
} from 'lucide-react'

export default function HoneymoonCTA({
  onExploreClick = () => {},
  onPlanClick = () => {}
}) {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden" id="honeymoon-cta">
      {/* ── Background Cinematic Photography ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Bora Bora Overwater Romance Sunset"
          className="h-full w-full object-cover object-center filter brightness-50 scale-105"
        />
        {/* Deep luxury gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-transparent" />
      </div>

      {/* Ambient Rose-Gold Glows */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[350px] bg-[#d7b36a]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[250px] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Floating Mini Destination Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/50 bg-slate-900/80 backdrop-blur-md px-4 py-1.5 mb-6 shadow-xl">
          <Heart className="h-4 w-4 text-[#d7b36a] fill-[#d7b36a]/30" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d7b36a]">
            YOUR ROMANTIC CHAPTER BEGINS HERE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-6">
          Your Forever Deserves a{' '}
          <span className="font-serif italic font-normal text-[#d7b36a]">Beautiful Beginning</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Let us create a honeymoon filled with romance, luxury and unforgettable moments.
        </p>

        {/* Triple Action Buttons Container */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            type="button"
            onClick={onExploreClick}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#d7b36a] to-[#c89336] hover:opacity-95 text-slate-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#d7b36a]/25 hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            <Compass className="h-5 w-5 text-slate-950" />
            <span>Explore Honeymoon Packages</span>
          </button>

          <button
            type="button"
            onClick={onPlanClick}
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white font-medium px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <Sparkles className="h-4 w-4 text-[#d7b36a]" />
            <span>Plan My Honeymoon</span>
          </button>

          <a
            href="tel:+18005557890"
            className="inline-flex items-center gap-2.5 bg-slate-900/90 hover:bg-slate-900 border border-[#d7b36a]/50 text-[#d7b36a] hover:text-white font-medium px-7 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Talk to a Travel Expert</span>
          </a>
        </div>

        {/* Glassmorphism Feature Panel */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-white/15 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left shadow-2xl">
          <div className="flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-2xl bg-[#d7b36a]/15 border border-[#d7b36a]/30 flex items-center justify-center flex-none">
              <ShieldCheck className="h-5 w-5 text-[#d7b36a]" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">Private Villa Guarantee</h4>
              <p className="text-xs text-white/65 mt-0.5 font-light">
                Hand-vetted overwater and pool villas offering secluded privacy for couples.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-2xl bg-[#d7b36a]/15 border border-[#d7b36a]/30 flex items-center justify-center flex-none">
              <Heart className="h-5 w-5 text-[#d7b36a] fill-[#d7b36a]/20" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">VIP Honeymoon Perks</h4>
              <p className="text-xs text-white/65 mt-0.5 font-light">
                Complimentary welcome champagne, flower bed decoration, and private spa credits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="h-10 w-10 rounded-2xl bg-[#d7b36a]/15 border border-[#d7b36a]/30 flex items-center justify-center flex-none">
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-white">24/7 Butler Support</h4>
              <p className="text-xs text-white/65 mt-0.5 font-light">
                Dedicated personal concierge on WhatsApp from departure to return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
