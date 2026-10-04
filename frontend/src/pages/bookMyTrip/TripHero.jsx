import { Compass, Sparkles, ArrowRight, ShieldCheck, MapPin, Calendar, Users, Sliders, CheckCircle2, Star } from 'lucide-react'

export default function TripHero({ currentStep, onSelectStep, onStartPlanning }) {
  const steps = [
    { num: 1, label: 'Destination', icon: <MapPin className="h-3.5 w-3.5" /> },
    { num: 2, label: 'Travelers', icon: <Users className="h-3.5 w-3.5" /> },
    { num: 3, label: 'Budget & Stay', icon: <Sliders className="h-3.5 w-3.5" /> },
    { num: 4, label: 'Experiences', icon: <Compass className="h-3.5 w-3.5" /> },
    { num: 5, label: 'Review & Book', icon: <CheckCircle2 className="h-3.5 w-3.5" /> },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* ── Cinematic Background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=90"
          alt="Premium Travel Planning"
          className="h-full w-full object-cover object-center brightness-[0.28] scale-105 transition-transform duration-[10s] ease-out"
        />
        {/* Multi-layer cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8f5f0] to-transparent" />
      </div>

      {/* ── Decorative Elements ── */}
      <div className="absolute top-8 right-12 hidden lg:block opacity-20">
        <div className="h-64 w-64 rounded-full border border-[#d5ab56]/30 animate-pulse-subtle" />
      </div>
      <div className="absolute top-16 right-20 hidden lg:block opacity-10">
        <div className="h-40 w-40 rounded-full border border-[#d5ab56]/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-0 sm:px-6 lg:px-8 lg:pt-14">
        {/* ── Badge ── */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d5ab56]/40 bg-[#d5ab56]/12 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#f6e5b4] backdrop-blur-md">
          <Star className="h-3 w-3 fill-[#d5ab56] text-[#d5ab56]" />
          <span>BESPOKE JOURNEY BUILDER</span>
          <span className="mx-1 text-white/30">·</span>
          <span className="text-slate-300 font-normal">100% Customized Itineraries</span>
        </div>

        {/* ── Heading ── */}
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Plan Your
            <br />
            <span className="gold-gradient-text">Dream Journey</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300/85 font-light max-w-xl">
            Tell us your travel preferences and let our senior destination specialists design your ideal bespoke itinerary — with 5-star stays, private guides, and seamless transfers.
          </p>
        </div>

        {/* ── CTA + Trust Bar ── */}
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <button
            onClick={onStartPlanning}
            className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#d5ab56] via-[#c89336] to-[#b3832f] px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-[#d5ab56]/25 transition-all duration-200 hover:shadow-[#d5ab56]/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start Planning Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <div className="flex flex-col gap-1.5 border-l border-white/15 pl-5">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>Zero-obligation custom quote</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Sparkles className="h-3.5 w-3.5 text-[#d5ab56] shrink-0" />
              <span>Draft itinerary within 2 hours</span>
            </div>
          </div>
        </div>

        {/* ── Progress Step Indicator ── */}
        <div className="mt-10">
          {/* Connector line */}
          <div className="hidden sm:block relative mb-0">
            <div className="absolute top-[22px] left-[calc(10%+16px)] right-[calc(10%+16px)] h-[1px] bg-white/10 z-0" />
          </div>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {steps.map((step, idx) => {
              const isActive = currentStep === step.num
              const isPast = currentStep > step.num

              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => onSelectStep(step.num)}
                  className={`group relative flex flex-col items-center gap-1.5 rounded-2xl p-3 text-center transition-all duration-200 backdrop-blur-md border ${
                    isActive
                      ? 'border-[#d5ab56]/80 bg-[#d5ab56]/15 ring-1 ring-[#d5ab56]/60 shadow-lg'
                      : isPast
                      ? 'border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/30'
                      : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-black/30'
                  }`}
                >
                  {/* Step Number / Check Circle */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-gradient-to-br from-[#d5ab56] to-[#b3832f] text-slate-950 shadow-md shadow-[#d5ab56]/30'
                        : isPast
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/10 text-slate-400 group-hover:bg-white/20'
                    }`}
                  >
                    {isPast ? '✓' : step.num}
                  </div>
                  {/* Label */}
                  <div className="hidden sm:block">
                    <span className={`block text-[9px] uppercase font-bold tracking-widest ${isActive ? 'text-[#d5ab56]' : isPast ? 'text-emerald-400' : 'text-slate-500'}`}>
                      Step {String(step.num).padStart(2, '0')}
                    </span>
                    <span className={`block text-[11px] font-bold leading-tight ${isActive ? 'text-white' : isPast ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-300'}`}>
                      {step.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
