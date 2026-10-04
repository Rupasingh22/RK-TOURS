import { MapPin, Navigation, Compass, Building, Car, Train, ArrowUpRight } from 'lucide-react'

export default function OfficeLocationMap() {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Barakhamba+Road+Connaught+Place+New+Delhi'

  return (
    <section id="office-map" className="border-b border-slate-200/80 bg-[#fdfcfa] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30 shadow-2xs">
            <MapPin className="h-3.5 w-3.5 text-[#d5ab56]" />
            <span>Section 05 / Executive Office & Lounge</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Visit Our Private Travel Lounge
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Schedule an in-person consultation with our journey architects over artisanal tea and coffee.
          </p>
        </div>

        {/* Clean Split Layout (5 cols Info + 7 cols Map) */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Office Address & Landmark Information (5 cols) */}
          <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9d7b3d]">
                <Building className="h-4 w-4 text-[#d5ab56]" />
                <span>Headquarters & VIP Suite</span>
              </div>

              <h3 className="mt-2 text-lg font-bold text-slate-900">
                RK Tours & Luxury Travel Ltd.
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Undri, Aeronest Place, Pune 160004, India
              </p>

              {/* Landmarks & Transit */}
              <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-xs">
                <div className="flex items-start gap-2.5 text-slate-700">
                  <Train className="h-4 w-4 shrink-0 text-[#d5ab56] mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Metro Connectivity:</span>
                    <p className="text-slate-500">200m from Barakhamba Road Metro Station (Blue Line)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-700">
                  <Car className="h-4 w-4 shrink-0 text-[#d5ab56] mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Parking & Valet:</span>
                    <p className="text-slate-500">Complimentary underground valet parking for private clients</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-700">
                  <Compass className="h-4 w-4 shrink-0 text-[#d5ab56] mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Prominent Landmark:</span>
                    <p className="text-slate-500">Adjacent to Statesman House, Outer Circle Connaught Place</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action button */}
            <div className="mt-6 border-t border-slate-100 pt-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow transition hover:bg-black active:scale-[0.98]"
              >
                <Navigation className="h-4 w-4 text-[#d5ab56]" />
                <span>Get Directions via Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Map Area (7 cols) */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-sm lg:col-span-7">
            {/* Embedded Interactive Google Map */}
            <iframe
              title="RK Tours Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.046337837096!2d77.2255755761895!3d28.62837338426038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36a992e595%3A0x6b86bb3d1b7dbfb6!2sBarakhamba%20Rd%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="h-full w-full border-0 min-h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Stylized Floating Badge Overlay */}
            <div className="absolute top-4 left-4 rounded-xl border border-slate-900/10 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md backdrop-blur-md flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>RK Tours Global HQ • Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
