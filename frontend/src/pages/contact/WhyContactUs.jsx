import { Compass, Sparkles, Clock, ShieldCheck, SlidersHorizontal, Award } from 'lucide-react'

export default function WhyContactUs() {
  const points = [
    {
      icon: <Award className="h-5 w-5 text-[#d5ab56]" />,
      title: 'Certified Travel Experts',
      desc: 'First-hand destination knowledge with seasoned private guides and local art historians.',
    },
    {
      icon: <Sparkles className="h-5 w-5 text-[#d5ab56]" />,
      title: 'Personalized Planning',
      desc: 'Every detail shaped around your preferences, pacing, luxury tastes, and dietary needs.',
    },
    {
      icon: <Clock className="h-5 w-5 text-[#d5ab56]" />,
      title: 'Quick 2-Hour Response',
      desc: 'Our private client concierge team replies swiftly with tailored proposals and transparent pricing.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#d5ab56]" />,
      title: '24/7 Trusted On-Trip Support',
      desc: 'Dedicated concierge team available across all global time zones via direct phone & WhatsApp.',
    },
    {
      icon: <SlidersHorizontal className="h-5 w-5 text-[#d5ab56]" />,
      title: '100% Customized Tours',
      desc: 'Private aviation, yacht charters, lakefront villa upgrades, and flexible date adjustments.',
    },
  ]

  return (
    <section id="why-contact-us" className="border-b border-slate-200/80 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fffaf1] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30">
            <Compass className="h-3.5 w-3.5 text-[#d5ab56]" />
            <span>Section 04 / The RK Tours Standard</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Why Plan Your Journey With Us?
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Experience effortless luxury from the very first conversation to your safe return home.
          </p>
        </div>

        {/* 5 Compact Cards in Responsive Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all duration-300 hover:border-[#d5ab56]/60 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fffaf1] border border-[#d7b36a]/30 shadow-2xs group-hover:scale-105 transition-transform">
                  {pt.icon}
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-[#9d7b3d] transition-colors">
                  {pt.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-2 text-[10px] font-semibold text-[#9d7b3d] uppercase tracking-wider">
                0{idx + 1} / Advantage
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
