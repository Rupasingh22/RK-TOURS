import React, { useState, useEffect } from 'react'
import {
  Heart,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Camera,
  ShieldCheck
} from 'lucide-react'
import { coupleTestimonials, memoryGallery } from '../honeymoonData'

export default function CoupleTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Auto-cycle through testimonials
  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coupleTestimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const active = coupleTestimonials[activeIndex]

  const handlePrev = () => {
    setIsAutoPlay(false)
    setActiveIndex((prev) => (prev === 0 ? coupleTestimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setActiveIndex((prev) => (prev + 1) % coupleTestimonials.length)
  }

  return (
    <section className="relative py-20 lg:py-28 bg-[#090d16] text-white overflow-hidden border-b border-slate-800" id="testimonials-section">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#d7b36a]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b36a]/40 bg-[#d7b36a]/10 px-4 py-1.5 mb-4">
            <Heart className="h-4 w-4 text-[#d7b36a] fill-[#d7b36a]/20" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d7b36a]">
              Stories of Real Romance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Couple Memories &{' '}
            <span className="font-serif italic font-normal text-[#d7b36a]">Unforgettable Moments</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Read intimate experiences from newlyweds who began their forever with our bespoke honeymoon journeys.
          </p>
        </div>

        {/* ── Cinematic 2-Column Testimonial + Memory Gallery Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Featured Active Testimonial Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/15 p-8 sm:p-10 shadow-2xl overflow-hidden">
              <Quote className="absolute top-6 right-8 h-20 w-20 text-white/5 pointer-events-none" />

              {/* Package & Destination Tag */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#d7b36a]/20 border border-[#d7b36a]/40 text-[#d7b36a] text-xs font-bold uppercase tracking-wider">
                  {active.package}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/60">
                  <MapPin className="h-3.5 w-3.5 text-[#d7b36a]" />
                  {active.destination}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#d7b36a] text-[#d7b36a]" />
                ))}
                <span className="text-xs font-bold text-white ml-1.5">5.0 / 5.0</span>
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-lg sm:text-2xl text-white font-normal leading-relaxed mb-8 italic">
                "{active.text}"
              </blockquote>

              {/* Signature Highlight Pill */}
              <div className="inline-flex items-center gap-2 p-2.5 px-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#d7b36a] mb-8 font-medium">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Signature Highlight: {active.highlight}</span>
              </div>

              {/* Bottom Couple Profile + Controls */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={active.photo}
                    alt={active.couple}
                    className="h-14 w-14 rounded-full object-cover border-2 border-[#d7b36a]/60 shadow-md"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-white">
                      {active.couple}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {active.city} • <span className="text-slate-500">{active.date}</span>
                    </p>
                  </div>
                </div>

                {/* Left / Right Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="h-10 w-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#d7b36a] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="h-10 w-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#d7b36a] text-white hover:text-slate-950 flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {coupleTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setIsAutoPlay(false)
                    setActiveIndex(idx)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-[#d7b36a]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Visual Photo Mosaic / Memory Grid (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d7b36a] flex items-center gap-2">
                <Camera className="h-4 w-4" /> Honeymoon Memory Gallery
              </span>
              <span className="text-xs text-white/50">Captured by our couples</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {memoryGallery.map((mem) => (
                <div
                  key={mem.id}
                  className="group relative h-36 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-md cursor-pointer"
                >
                  <img
                    src={mem.image}
                    alt={mem.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 inset-x-2.5 text-white">
                    <span className="text-[9px] text-[#d7b36a] uppercase font-semibold block truncate">
                      {mem.destination}
                    </span>
                    <p className="text-[11px] font-medium text-white/90 truncate">
                      {mem.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verified Trust Strip */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-white/70">
              <ShieldCheck className="h-5 w-5 text-[#d7b36a] flex-none" />
              <span>Over 25,000+ honeymoon couples served with a 99.4% five-star satisfaction record.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
