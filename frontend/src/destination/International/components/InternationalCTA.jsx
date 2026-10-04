import { Link } from 'react-router-dom'
import { Plane, Phone, Globe2, ShieldCheck, Award, Sparkles, MessageSquare } from 'lucide-react'

export default function InternationalCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-slate-950 text-white">
      {/* Background Photography with Deep Shadow Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90" />

      {/* Decorative Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d7b36a]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#d7b36a]/10 backdrop-blur-md px-4 py-1.5 mb-6">
          <Sparkles className="h-4 w-4 text-[#d7b36a]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d7b36a]">
            Bespoke International Journeys
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight">
          Ready to Traverse the World?
          <span className="block font-normal italic text-[#d7b36a] mt-1">
            Let Us Craft Your Masterpiece Itinerary.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Whether it’s private yachting along the Amalfi Coast, ski chalets in the Swiss Alps, 
          or starlit desert camps beneath Dubai’s dunes — our senior international travel consultants 
          coordinate every flight, luxury suite, visa requirement, and VIP tour with white-glove precision.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 font-bold px-9 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#d7b36a]/25 hover:scale-105"
          >
            <Plane className="h-5 w-5 text-slate-950" />
            <span>Request a Custom World Itinerary</span>
          </Link>

          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            <Phone className="h-4 w-4 text-[#d7b36a]" />
            <span>Consult Our International Desk</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/15 max-w-3xl mx-auto text-xs text-white/70">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#d7b36a]" />
            <span>IATA Certified</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="h-4 w-4 text-[#d7b36a]" />
            <span>Top Luxury Agency</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Globe2 className="h-4 w-4 text-[#d7b36a]" />
            <span>20 Global Countries</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="h-4 w-4 text-[#d7b36a]" />
            <span>24/7 Global Concierge</span>
          </div>
        </div>
      </div>
    </section>
  )
}
