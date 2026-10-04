import { useState } from 'react'
import { Sparkles, CheckCircle2, Building, Image as ImageIcon, X } from 'lucide-react'

export default function HotelOverview({ hotel }) {
  const [activeImage, setActiveImage] = useState(null)
  const { overview } = hotel

  return (
    <section id="hotel-overview" className="border-b border-slate-200/80 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fffaf1] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#9d7b3d] border border-[#d7b36a]/30">
            <Sparkles className="h-3.5 w-3.5 text-[#d5ab56]" />
            <span>Section 02 / Hotel Overview</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Atmosphere & Iconic Highlights
          </h2>
          <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {overview.description}
          </p>
        </div>

        {/* 2-Column Grid: Highlights & Facilities + Small Gallery */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column: Key Highlights & Core Facilities (7 Cols) */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 lg:col-span-7 shadow-sm">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900">
              <CheckCircle2 className="h-4 w-4 text-[#d5ab56]" />
              <span>Key Property Highlights</span>
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {overview.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-slate-200/60 bg-white p-3 text-xs leading-relaxed text-slate-700 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition hover:border-[#d5ab56]/60 hover:shadow-md"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fffaf1] text-[10px] font-bold text-[#9d7b3d] border border-[#d7b36a]/30">
                    {idx + 1}
                  </span>
                  <span className="font-medium text-slate-800">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Hotel Facilities Badges */}
            <div className="mt-5 border-t border-slate-200/70 pt-4">
              <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                <Building className="h-3.5 w-3.5 text-[#d5ab56]" />
                <span>Signature Resort Facilities</span>
              </h4>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {overview.facilities.map((fac, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-2xs transition hover:bg-[#fffaf1] hover:border-[#d7b36a]/50"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d5ab56]" />
                    <span>{fac}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Small Visual Gallery (5 Cols) */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800">
                    <ImageIcon className="h-3.5 w-3.5 text-[#d5ab56]" />
                    <span>Resort Photo Gallery</span>
                  </span>
                  <span className="text-[11px] text-slate-500">Click to preview</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {overview.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className="group relative aspect-4/3 overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#d5ab56]"
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25 flex items-end p-2">
                        <span className="text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-1.5 py-0.5 rounded">
                          {img.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* VIP note badge */}
              <div className="mt-4 rounded-xl border border-[#d7b36a]/30 bg-[#fffaf1] p-3 text-xs text-[#7a5b2d]">
                <strong>VIP Privileges:</strong> Direct booking includes complimentary daily champagne breakfast buffet and priority spa reservation.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Gallery Preview */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-3xl overflow-hidden rounded-2xl bg-slate-900 p-2 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="max-h-[70vh] w-full rounded-xl object-contain"
            />
            <div className="p-3 text-center text-xs font-medium text-slate-200">
              {activeImage.title}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
