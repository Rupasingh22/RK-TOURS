import { useState } from 'react'
import { Sparkles, ArrowRight, Compass, Shield, Users } from 'lucide-react'
import { familyExperiences } from '../familyData'

export default function FamilyExperiences({ onSelectExperience = () => {} }) {
  const [activeTab, setActiveTab] = useState('All')

  const categories = ['All', 'Entertainment', 'Nature', 'Adventure', 'Culture', 'Culinary']

  const filtered = familyExperiences.filter((item) => {
    if (activeTab === 'All') return true
    return item.category.toLowerCase() === activeTab.toLowerCase()
  })

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-slate-200/80" id="experiences-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <Sparkles className="h-4 w-4 text-[#aa732b]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                10 Curated Family Activities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Experiences Crafted for{' '}
              <span className="font-serif italic font-normal text-[#aa732b]">Pure Wonder</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
              From theme park fast-tracks to gentle elephant bathing and chocolate workshops.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 select-none ${
                  activeTab === cat
                    ? 'bg-slate-950 text-[#d7b36a] shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Visual Mosaic Grid of Experiences ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filtered.map((exp, idx) => (
            <div
              key={exp.title}
              onClick={() => onSelectExperience(exp)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Image & Gradient */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-[#d7b36a]">
                    {exp.category}
                  </span>
                </div>

                {/* Age Group Tag */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="px-2 py-0.5 rounded-full bg-slate-950/70 text-[10px] font-medium text-white/90 border border-white/15">
                    {exp.ageGroup}
                  </span>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#d7b36a] font-semibold block mb-0.5">
                    {exp.tagline}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#d7b36a] transition-colors truncate">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 bg-slate-900/95 text-white flex flex-col justify-between flex-1">
                <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-light mb-3">
                  {exp.description}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#d7b36a]">
                  <span>Explore Activities</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
