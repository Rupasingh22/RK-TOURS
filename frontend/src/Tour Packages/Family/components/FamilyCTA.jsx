import { Link } from 'react-router-dom'
import {
  Compass,
  Phone,
  Plane,
  Heart,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
} from 'lucide-react'

export default function FamilyCTA({ onExploreClick = () => {}, onPlanClick = () => {} }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Photography & Multilayer Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=85')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/90" />

      {/* Decorative Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d7b36a]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#d7b36a]/10 backdrop-blur-md px-4 py-1.5 mb-6">
          <Heart className="h-4 w-4 text-[#d7b36a]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d7b36a]">
            BEGIN YOUR FAMILY ODYSSEY
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight">
          Your Family's Next Adventure{' '}
          <span className="block font-normal italic text-[#d7b36a] mt-1">
            Starts Right Here
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Plan a holiday where every generation finds something to love. From toddler-friendly splash zones
          and teenager amusement thrills to serene tea gardens and private family villas.
        </p>

        {/* 3 Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <button
            type="button"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#d7b36a]/25 hover:scale-105 text-sm sm:text-base"
          >
            <Compass className="h-5 w-5 text-slate-950" />
            <span>Explore Family Packages</span>
          </button>

          <button
            type="button"
            onClick={onPlanClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <Plane className="h-5 w-5 text-[#d7b36a]" />
            <span>Plan My Family Trip</span>
          </button>

          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white text-white font-medium px-7 py-4 rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
          >
            <Phone className="h-4 w-4 text-[#d7b36a]" />
            <span>Contact Our Travel Expert</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/15 max-w-3xl mx-auto text-xs text-white/70">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#d7b36a]" />
            <span>100% Vetted Kid-Safety</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Users className="h-4 w-4 text-[#d7b36a]" />
            <span>Multi-Gen Friendly</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="h-4 w-4 text-[#d7b36a]" />
            <span>50,000+ Happy Families</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-[#d7b36a]" />
            <span>24/7 Family Concierge</span>
          </div>
        </div>
      </div>
    </section>
  )
}
