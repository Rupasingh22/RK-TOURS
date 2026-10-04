import {
  HeartHandshake,
  Sparkles,
  Home,
  ShieldCheck,
  Compass,
  Camera,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { whyFamilyTravel } from '../familyData'

export default function FamilyBenefits({ onPlanClick = () => {} }) {
  const iconMap = {
    HeartHandshake,
    Sparkles,
    Home,
    ShieldCheck,
    Compass,
    Camera,
  }

  return (
    <section className="relative py-20 lg:py-28 bg-[#f8f5f0] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <HeartHandshake className="h-4 w-4 text-[#aa732b]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                The Family Travel Philosophy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Why Travelling Together{' '}
              <span className="font-serif italic font-normal text-[#aa732b]">Transforms Everything</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
              Family holidays are not just trips; they are the shared chapters that shape your children’s worldview,
              bring grandparents pure joy, and give parents the rare luxury of guilt-free relaxation.
            </p>
          </div>

          <button
            type="button"
            onClick={onPlanClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-[#d7b36a] text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-md w-fit flex-none"
          >
            <span>Design Custom Family Tour</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* ── Asymmetric Editorial Layout (6 Feature Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Large Featured Card (Span 7) */}
          <div className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={whyFamilyTravel[0].image}
                alt={whyFamilyTravel[0].title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#d7b36a]">
                {whyFamilyTravel[0].tag}
              </span>
              <div className="absolute bottom-4 inset-x-6 z-10 text-white">
                <div className="flex items-center gap-2 mb-1 text-[#d7b36a]">
                  <HeartHandshake className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Pillar 01</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {whyFamilyTravel[0].title}
                </h3>
              </div>
            </div>
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-4">
                {whyFamilyTravel[0].description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a5b2d] bg-amber-50 border border-amber-200/70 px-3.5 py-1.5 rounded-xl w-fit">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#aa732b]" />
                <span>{whyFamilyTravel[0].highlight}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Medium Card (Span 5) */}
          <div className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
              <img
                src={whyFamilyTravel[1].image}
                alt={whyFamilyTravel[1].title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#d7b36a]">
                {whyFamilyTravel[1].tag}
              </span>
              <div className="absolute bottom-4 inset-x-6 z-10 text-white">
                <div className="flex items-center gap-2 mb-1 text-[#d7b36a]">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Pillar 02</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {whyFamilyTravel[1].title}
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                {whyFamilyTravel[1].description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a5b2d] bg-amber-50 border border-amber-200/70 px-3 py-1.5 rounded-xl w-fit">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#aa732b]" />
                <span>{whyFamilyTravel[1].highlight}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Medium Card (Span 5) */}
          <div className="md:col-span-5 group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
              <img
                src={whyFamilyTravel[2].image}
                alt={whyFamilyTravel[2].title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#d7b36a]">
                {whyFamilyTravel[2].tag}
              </span>
              <div className="absolute bottom-4 inset-x-6 z-10 text-white">
                <div className="flex items-center gap-2 mb-1 text-[#d7b36a]">
                  <Home className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Pillar 03</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {whyFamilyTravel[2].title}
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                {whyFamilyTravel[2].description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a5b2d] bg-amber-50 border border-amber-200/70 px-3 py-1.5 rounded-xl w-fit">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#aa732b]" />
                <span>{whyFamilyTravel[2].highlight}</span>
              </div>
            </div>
          </div>

          {/* Card 4: Large Featured Card (Span 7) */}
          <div className="md:col-span-7 group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={whyFamilyTravel[3].image}
                alt={whyFamilyTravel[3].title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#d7b36a]">
                {whyFamilyTravel[3].tag}
              </span>
              <div className="absolute bottom-4 inset-x-6 z-10 text-white">
                <div className="flex items-center gap-2 mb-1 text-[#d7b36a]">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Pillar 04</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {whyFamilyTravel[3].title}
                </h3>
              </div>
            </div>
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-4">
                {whyFamilyTravel[3].description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a5b2d] bg-amber-50 border border-amber-200/70 px-3.5 py-1.5 rounded-xl w-fit">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#aa732b]" />
                <span>{whyFamilyTravel[3].highlight}</span>
              </div>
            </div>
          </div>

          {/* Card 5: Equal Half Card (Span 6) */}
          <div className="md:col-span-6 group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div className="relative h-60 w-full overflow-hidden bg-slate-900">
              <img
                src={whyFamilyTravel[4].image}
                alt={whyFamilyTravel[4].title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#d7b36a]">
                {whyFamilyTravel[4].tag}
              </span>
              <div className="absolute bottom-4 inset-x-6 z-10 text-white">
                <div className="flex items-center gap-2 mb-1 text-[#d7b36a]">
                  <Compass className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Pillar 05</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {whyFamilyTravel[4].title}
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                {whyFamilyTravel[4].description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a5b2d] bg-amber-50 border border-amber-200/70 px-3 py-1.5 rounded-xl w-fit">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#aa732b]" />
                <span>{whyFamilyTravel[4].highlight}</span>
              </div>
            </div>
          </div>

          {/* Card 6: Equal Half Card (Span 6) */}
          <div className="md:col-span-6 group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div className="relative h-60 w-full overflow-hidden bg-slate-900">
              <img
                src={whyFamilyTravel[5].image}
                alt={whyFamilyTravel[5].title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] font-bold uppercase tracking-wider text-[#d7b36a]">
                {whyFamilyTravel[5].tag}
              </span>
              <div className="absolute bottom-4 inset-x-6 z-10 text-white">
                <div className="flex items-center gap-2 mb-1 text-[#d7b36a]">
                  <Camera className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Pillar 06</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {whyFamilyTravel[5].title}
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-slate-600 text-sm leading-relaxed font-light mb-4">
                {whyFamilyTravel[5].description}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a5b2d] bg-amber-50 border border-amber-200/70 px-3 py-1.5 rounded-xl w-fit">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#aa732b]" />
                <span>{whyFamilyTravel[5].highlight}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
