import { Globe, ArrowRight, Compass, Check } from 'lucide-react'

export default function RegionExplorer({
  regions = [],
  selectedRegion = 'all',
  onSelectRegion = () => {},
}) {
  return (
    <section className="relative py-16 lg:py-20 bg-[#f8f5f0] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#fffaf1] px-3.5 py-1 mb-3">
              <Compass className="h-4 w-4 text-[#aa732b]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5b2d]">
                World Region Explorer
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight">
              Select Your <span className="font-serif italic font-normal text-[#aa732b]">Continent</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-2 font-light">
              Filter our 20 premier international destinations across 6 continents to craft your dream itinerary.
            </p>
          </div>

          {/* Quick "All Continents" Reset button */}
          <button
            type="button"
            onClick={() => onSelectRegion('all')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              selectedRegion === 'all'
                ? 'bg-slate-950 text-[#d7b36a] shadow-lg shadow-slate-950/20'
                : 'bg-white border border-slate-200 text-slate-700 hover:border-[#d7b36a] hover:text-[#aa732b]'
            }`}
          >
            <Globe className="h-3.5 w-3.5 text-[#d7b36a]" />
            <span>Show All Continents (20 Countries)</span>
          </button>
        </div>

        {/* Region Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {regions
            .filter((r) => r.id !== 'all')
            .map((region) => {
              const isSelected = selectedRegion === region.id

              return (
                <div
                  key={region.id}
                  onClick={() => onSelectRegion(region.id)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-1.5 select-none ${
                    isSelected
                      ? 'ring-2 ring-[#d7b36a] shadow-2xl scale-[1.02]'
                      : 'border border-slate-200/90 shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Aspect Ratio & Background Image */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src={region.image}
                      alt={region.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80'
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30'
                          : 'bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent group-hover:from-slate-950 group-hover:via-slate-950/70'
                      }`}
                    />

                    {/* Active Checkmark Badge */}
                    {isSelected && (
                      <div className="absolute top-3.5 right-3.5 z-20 h-7 w-7 rounded-full bg-[#d7b36a] text-slate-950 flex items-center justify-center shadow-md">
                        <Check className="h-4 w-4 stroke-[3]" />
                      </div>
                    )}

                    {/* Country Count Pill */}
                    <div className="absolute top-3.5 left-3.5 z-20">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-wider text-[#d7b36a]">
                        {region.count}
                      </span>
                    </div>

                    {/* Bottom Card Content */}
                    <div className="absolute bottom-0 inset-x-0 p-4 z-20 text-white flex flex-col justify-end">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-lg">{region.emoji}</span>
                        <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#d7b36a] transition-colors">
                          {region.name}
                        </h3>
                      </div>

                      <p className="text-xs text-white/70 line-clamp-2 leading-relaxed mb-3 font-light">
                        {region.desc}
                      </p>

                      <div className="flex items-center justify-between text-xs font-semibold text-[#d7b36a] pt-2 border-t border-white/15">
                        <span>{isSelected ? 'Selected' : 'Explore Region'}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
