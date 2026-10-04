import {
  Calendar,
  Clock,
  Wallet,
  Coins,
  Languages,
  Compass,
  FileCheck2,
  Navigation,
  Utensils,
  Award,
  BedDouble,
  Palmtree,
  ShieldAlert,
} from 'lucide-react'

export default function TravelInformation({ country }) {
  const infoCards = [
    {
      icon: Calendar,
      label: 'Best Time to Visit',
      value: country.bestTime,
      highlight: true,
    },
    {
      icon: Clock,
      label: 'Ideal Trip Duration',
      value: country.idealDuration,
    },
    {
      icon: Wallet,
      label: 'Estimated Daily Budget',
      value: country.budget,
      highlight: true,
    },
    {
      icon: Coins,
      label: 'Currency',
      value: country.currency,
    },
    {
      icon: Languages,
      label: 'Language',
      value: country.language,
    },
    {
      icon: Compass,
      label: 'Time Zone',
      value: country.timeZone,
    },
    {
      icon: FileCheck2,
      label: 'Visa Information',
      value: country.visa,
      highlight: true,
    },
    {
      icon: Navigation,
      label: 'Transportation',
      value: country.transportation,
    },
    {
      icon: Utensils,
      label: 'Popular Cuisine',
      value: country.cuisine,
    },
    {
      icon: Award,
      label: 'Best For',
      value: country.bestFor,
    },
    {
      icon: BedDouble,
      label: 'Recommended Stay',
      value: country.recommendedStay,
    },
    {
      icon: Palmtree,
      label: 'Travel Personality',
      value: country.personality,
    },
  ]

  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#d7b36a]">
            Essential Voyager Dossier
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
            Key Travel Intelligence: {country.name}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {country.travelStyles?.map((style) => (
            <span
              key={style}
              className="text-[11px] px-3 py-1 rounded-full bg-[#d7b36a]/15 text-[#d7b36a] border border-[#d7b36a]/30 font-medium"
            >
              {style}
            </span>
          ))}
        </div>
      </div>

      {/* 12 Information Items Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {infoCards.map(({ icon: Icon, label, value, highlight }) => (
          <div
            key={label}
            className={`rounded-2xl p-4 transition-all duration-300 border ${
              highlight
                ? 'bg-slate-800/80 border-[#d7b36a]/30'
                : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div
                className={`h-7 w-7 rounded-lg flex items-center justify-center flex-none ${
                  highlight ? 'bg-[#d7b36a]/20 text-[#d7b36a]' : 'bg-slate-800 text-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                {label}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
