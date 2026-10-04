import { Sparkles, MapPin, PhoneCall, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Cinematic Image with Luxury Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Travel Planning"
          className="h-full w-full object-cover object-center brightness-[0.38] filter transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-14 sm:px-6 lg:px-8 lg:pt-16 lg:pb-18">
        {/* Minimal Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-xs font-medium tracking-wider text-slate-300 uppercase">
          <Link to="/" className="text-[#d5ab56] hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-400">Concierge</span>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </div>

        {/* Hero Badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/40 bg-[#d5ab56]/15 px-3.5 py-1 text-xs font-semibold tracking-wide text-[#f6e5b4] backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
          <span>24/7 Global Travel Concierge</span>
          <span className="text-white/40">•</span>
          <span className="text-slate-200">Personalized Journey Planning</span>
        </div>

        {/* Heading & Tagline */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let’s Craft Your <span className="gold-gradient-text">Extraordinary Journey</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300/90 font-light max-w-2xl">
            Connect with our senior travel specialists for bespoke private tours, luxury hotel bookings, VIP airport meet & greets, or customized corporate retreats.
          </p>
        </div>

        {/* Quick Micro-Highlights Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 border-t border-white/10 pt-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-medium">Concierge Online Now</span>
          </div>
          <div className="h-3 w-px bg-white/20" />
          <div>Guaranteed response within <strong>2 hours</strong></div>
          <div className="h-3 w-px bg-white/20" />
          <div>100% Tailored Private Itineraries</div>
        </div>
      </div>
    </section>
  )
}
