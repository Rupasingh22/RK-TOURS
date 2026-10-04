import { Compass, PhoneCall, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactFinalCTA() {
  const scrollToForm = () => {
    const el = document.getElementById('contact-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact-final-cta" className="relative overflow-hidden bg-slate-950 py-14 lg:py-20 text-white">
      {/* Background Graphic with Cinematic Backdrop */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Tropical Escape"
          className="h-full w-full object-cover object-center filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-2xl sm:p-10 lg:p-12 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/30 bg-[#d5ab56]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#f6e5b4]">
            <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
            <span>Section 06 / Begin Your Journey</span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let’s Plan Your <span className="gold-gradient-text">Next Journey</span>
          </h2>

          {/* Tagline */}
          <p className="mt-3 text-xs sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you envision sailing between the Greek Cyclades, exploring Swiss alpine summits, or sleeping under desert stars in Rajasthan, our private travel designers turn your dreams into reality.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/tours/tour-details"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d5ab56] to-[#b3832f] px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-[#d5ab56]/20 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              <Compass className="h-4 w-4" />
              <span>Explore Signature Tours</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/20 hover:border-[#d5ab56]/50 active:scale-[0.98]"
            >
              <PhoneCall className="h-4 w-4 text-[#d5ab56]" />
              <span>Talk to an Expert</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>100% Confidential Consultation</span>
            </div>
            <div className="h-3 w-px bg-white/20 hidden sm:block" />
            <div>Over 25,000+ Journeys Curated Worldwide</div>
          </div>
        </div>
      </div>
    </section>
  )
}
