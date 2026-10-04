import { useState } from 'react'
import { Sparkles, ArrowRight, Heart, MapPin, Eye } from 'lucide-react'
import { romanticExperiences } from '../honeymoonData'

export default function RomanticExperiences({ onSelectExperience = () => {} }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Dining', 'Adventure', 'Relaxation', 'Stay', 'Luxury', 'Memories']

  const filtered = romanticExperiences.filter((item) => {
    if (activeCategory === 'All') return true
    return item.category.toLowerCase() === activeCategory.toLowerCase()
  })

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-slate-200/80" id="experiences-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <Heart className="h-4 w-4 text-[#aa732b] fill-[#aa732b]/20" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                12 Iconic Couple Experiences
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Moments Created for{' '}
              <span className="font-serif italic font-normal text-[#aa732b]">Unforgettable Romance</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-light">
              From sandbank candlelight feasts to hot air balloon sunrises and private yacht coves.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 select-none whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-slate-950 text-[#d7b36a] shadow-sm ring-1 ring-[#d7b36a]/40'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Visual Grid of 12 Experiences ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((exp) => (
            <div
              key={exp.title}
              onClick={() => onSelectExperience(exp)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Image & Gradient */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-[#d7b36a]">
                    {exp.tag}
                  </span>
                </div>

                {/* Ideal For Badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15 text-[10px] text-white/90">
                    <MapPin className="h-3 w-3 text-[#d7b36a]" />
                    <span className="truncate max-w-[120px]">{exp.idealFor}</span>
                  </div>
                </div>

                {/* Title on Bottom of Image */}
                <div className="absolute bottom-3 inset-x-4 z-10 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#d7b36a] font-semibold block mb-0.5">
                    {exp.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white leading-snug group-hover:text-[#d7b36a] transition-colors truncate">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 bg-slate-900/95 text-white flex flex-col justify-between flex-1">
                <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-light mb-4">
                  {exp.description}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#d7b36a]">
                  <span className="flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" /> Experience Details
                  </span>
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
