import { Search, X, SlidersHorizontal, RotateCcw, Filter, MapPin } from 'lucide-react'
import { travelStylesList, budgetFiltersList, regionsList } from '../internationalData'

export default function InternationalFilter({
  searchQuery = '',
  setSearchQuery = () => {},
  selectedRegion = 'all',
  setSelectedRegion = () => {},
  selectedStyle = 'All Styles',
  setSelectedStyle = () => {},
  selectedBudget = 'All Budgets',
  setSelectedBudget = () => {},
  totalCount = 20,
  filteredCount = 20,
}) {
  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedRegion !== 'all' ||
    selectedStyle !== 'All Styles' ||
    selectedBudget !== 'All Budgets'

  const resetAllFilters = () => {
    setSearchQuery('')
    setSelectedRegion('all')
    setSelectedStyle('All Styles')
    setSelectedBudget('All Budgets')
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6" id="filters-section">
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm">
        {/* Row 1: Search Bar & Count */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Dynamic Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Paris, Bali, Dubai, Tokyo, Matterhorn, Pyramids..."
              className="w-full pl-12 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d7b36a]/50 focus:border-[#d7b36a] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Results Badge & Reset Action */}
          <div className="flex items-center justify-between md:justify-end gap-3 flex-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200/70 text-xs font-semibold text-[#7a5b2d]">
              <Filter className="h-3.5 w-3.5 text-[#aa732b]" />
              <span>
                Showing {filteredCount} of {totalCount} Countries
              </span>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-red-600 hover:bg-red-50 border border-red-200 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Travel Style Filter Chips */}
        <div className="space-y-3.5 pt-4 border-t border-slate-100">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Filter by Travel Style:
              </span>
              <span className="text-xs text-slate-500 font-medium">{selectedStyle}</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
              {travelStylesList.map((style) => {
                const isSelected = selectedStyle === style
                return (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    className={`flex-none px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 select-none ${
                      isSelected
                        ? 'bg-slate-950 text-[#d7b36a] shadow-sm font-semibold ring-1 ring-[#d7b36a]/50'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {style}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Row 3: Budget Range Chips */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Filter by Budget Tier:
              </span>
              <span className="text-xs text-slate-500 font-medium">{selectedBudget}</span>
            </div>
            <div className="flex items-center gap-2">
              {budgetFiltersList.map((tier) => {
                const isSelected = selectedBudget === tier
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedBudget(tier)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 select-none ${
                      isSelected
                        ? 'bg-[#d7b36a] text-slate-950 shadow-sm font-semibold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {tier}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
