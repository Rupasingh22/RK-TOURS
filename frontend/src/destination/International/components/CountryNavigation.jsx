import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Globe2 } from 'lucide-react'

export default function CountryNavigation({
  countries = [],
  activeCountryId = '',
  onSelectCountry = () => {},
}) {
  const scrollContainerRef = useRef(null)

  // Scroll active country pill into view within the horizontal bar
  useEffect(() => {
    if (!activeCountryId || !scrollContainerRef.current) return
    const activeBtn = scrollContainerRef.current.querySelector(
      `[data-country-id="${activeCountryId}"]`
    )
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [activeCountryId])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -220, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 220, behavior: 'smooth' })
    }
  }

  return (
    <nav
      aria-label="Country Navigation"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-y border-slate-200 shadow-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center py-2.5">
          {/* Left Arrow (Desktop) */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll countries left"
            className="hidden sm:flex flex-none items-center justify-center h-8 w-8 rounded-full bg-slate-100 hover:bg-[#d7b36a] text-slate-700 hover:text-slate-950 transition-colors mr-2 shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Quick Label */}
          <div className="hidden lg:flex items-center gap-1.5 pl-1 pr-3 border-r border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider flex-none">
            <Globe2 className="h-3.5 w-3.5 text-[#aa732b]" />
            <span>Destinations:</span>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {countries.map((country, idx) => {
              const isActive = activeCountryId === country.id

              return (
                <button
                  key={country.id}
                  data-country-id={country.id}
                  type="button"
                  onClick={() => onSelectCountry(country.id)}
                  className={`flex-none inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-slate-950 text-[#d7b36a] shadow-md shadow-slate-900/20 font-semibold ring-1 ring-[#d7b36a]/40 scale-105'
                      : 'bg-slate-100/80 hover:bg-slate-200 text-slate-700 hover:text-slate-950'
                  }`}
                >
                  <span className="text-[10px] text-slate-400 font-mono">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span>{country.name}</span>
                </button>
              )
            })}
          </div>

          {/* Right Arrow (Desktop) */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll countries right"
            className="hidden sm:flex flex-none items-center justify-center h-8 w-8 rounded-full bg-slate-100 hover:bg-[#d7b36a] text-slate-700 hover:text-slate-950 transition-colors ml-2 shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  )
}
