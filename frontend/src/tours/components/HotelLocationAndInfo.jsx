import { useState } from 'react'
import { MapPin, Plane, Train, Clock, ShieldCheck, FileText, Check, Navigation, Sparkles } from 'lucide-react'

export default function HotelLocationAndInfo({ hotel }) {
  const [activeTab, setActiveTab] = useState('location') // 'location' | 'services' | 'policies'
  const { locationInfo } = hotel

  return (
    <section id="location-info" className="border-b border-slate-200/80 bg-[#fdfcfa] py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 shadow-2xs">
              <MapPin className="h-3.5 w-3.5 text-[#d5ab56]" />
              <span>Section 05 / Location & Policies</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Location & Hotel Information
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Clear directions, transit connectivity, check-in schedules, and guest policies.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 p-1 text-xs font-medium text-slate-700">
            <button
              onClick={() => setActiveTab('location')}
              className={`rounded-lg px-3.5 py-1.5 transition ${
                activeTab === 'location'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Location & Transit
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`rounded-lg px-3.5 py-1.5 transition ${
                activeTab === 'services'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services & Timings
            </button>
            <button
              onClick={() => setActiveTab('policies')}
              className={`rounded-lg px-3.5 py-1.5 transition ${
                activeTab === 'policies'
                  ? 'bg-white text-slate-900 font-semibold shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hotel Policies
            </button>
          </div>
        </div>

        {/* TAB 1: LOCATION & TRANSIT */}
        {activeTab === 'location' && (
          <div className="grid gap-6 md:grid-cols-12">
            {/* Address & Transit (7 cols) */}
            <div className="space-y-4 md:col-span-7">
              {/* Physical Address */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
                <div className="flex items-center gap-2 text-[#9d7b3d]">
                  <MapPin className="h-4 w-4 text-[#d5ab56]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Property Address</span>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-slate-900">
                  {locationInfo.address}
                </p>
              </div>

              {/* Transit Distances */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Plane className="h-4 w-4 text-[#d5ab56]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Airport Transit</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-700 leading-relaxed font-medium">
                    {locationInfo.airportDistance}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Train className="h-4 w-4 text-[#d5ab56]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Railway Station</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-700 leading-relaxed font-medium">
                    {locationInfo.stationDistance}
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Attractions (5 cols) */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 md:col-span-5 shadow-xs">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                <Navigation className="h-4 w-4 text-[#d5ab56]" />
                <span>Nearby Famous Attractions</span>
              </h3>
              <div className="space-y-2">
                {locationInfo.nearbyAttractions.map((att, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white p-2.5 text-xs"
                  >
                    <span className="font-medium text-slate-800">{att.name}</span>
                    <span className="text-[11px] font-semibold text-[#9d7b3d] bg-[#fffaf1] px-2 py-0.5 rounded border border-[#d7b36a]/30">
                      {att.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SERVICES & TIMINGS */}
        {activeTab === 'services' && (
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Check-in & Check-out schedules */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="h-4 w-4 text-[#d5ab56]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Check-in & Check-out Protocol
                </h3>
              </div>
              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                  <span className="font-semibold text-slate-700">Standard Check-in Time:</span>
                  <span className="font-bold text-slate-900">{locationInfo.checkIn}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                  <span className="font-semibold text-slate-700">Standard Check-out Time:</span>
                  <span className="font-bold text-slate-900">{locationInfo.checkOut}</span>
                </div>
              </div>
            </div>

            {/* Available Concierge Services */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <ShieldCheck className="h-4 w-4 text-[#d5ab56]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Available Concierge Services
                </h3>
              </div>
              <div className="mt-3 space-y-2">
                {locationInfo.services.map((svc, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{svc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: IMPORTANT POLICIES */}
        {activeTab === 'policies' && (
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <FileText className="h-4 w-4 text-[#d5ab56]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Resort Terms & Booking Policies
              </h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {locationInfo.policies.map((pol, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-xs leading-relaxed text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fffaf1] text-[10px] font-bold text-[#9d7b3d] border border-[#d7b36a]/30">
                    {idx + 1}
                  </span>
                  <span>{pol}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
