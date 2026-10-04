import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Sparkles } from 'lucide-react'

/**
 * Reusable Luxury Image Carousel
 * - Minimum 10 images where available
 * - Auto-change every 1 second (1000ms) with smooth transitions
 * - Left/right navigation controls
 * - Pause on hover
 * - Touch swipe support on mobile devices
 * - Proper timer cleanup to avoid memory leaks
 * - Safe image fallback
 */
export default function DestinationGallery({
  images = [],
  alt = 'World Destination',
  className = 'h-80 md:h-[440px] w-full',
  interval = 1000,
  showControls = true,
  showDots = true,
  badge = null,
  overlayGradient = true,
  onImageClick = null,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Auto-advance every interval (1 second) when not hovered and active
  useEffect(() => {
    if (!images || images.length <= 1 || isHovered || !isPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval, isHovered, isPlaying])

  const handlePrev = (e) => {
    e?.preventDefault()
    e?.stopPropagation()
    if (!images || images.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e?.preventDefault()
    e?.stopPropagation()
    if (!images || images.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 45) {
      handleNext()
    } else if (diff < -45) {
      handlePrev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  if (!images || images.length === 0) {
    return (
      <div className={`relative overflow-hidden bg-slate-900 flex items-center justify-center ${className}`}>
        <p className="text-white/40 text-sm">Gallery updating...</p>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl group select-none shadow-2xl bg-slate-950 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      {images.map((img, idx) => (
        <div
          key={`${img}-${idx}`}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
          onClick={() => onImageClick && onImageClick(images[currentIndex], currentIndex)}
        >
          <img
            src={img}
            alt={`${alt} view ${idx + 1}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
            }}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      ))}

      {/* Layered cinematic gradient */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/25 z-10 pointer-events-none" />
      )}

      {/* Floating Badge (e.g., star rating, tag) */}
      {badge && <div className="absolute top-4 left-4 z-20 pointer-events-auto">{badge}</div>}

      {/* Play/Pause toggle & Counter indicator */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            setIsPlaying((prev) => !prev)
          }}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="h-7 w-7 rounded-full bg-slate-950/60 backdrop-blur-md text-white/80 hover:text-white border border-white/20 flex items-center justify-center text-xs transition duration-200"
        >
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 translate-x-0.5" />}
        </button>

        <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Left/Right arrow controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous gallery image"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-950/60 hover:bg-[#d7b36a] text-white hover:text-slate-950 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next gallery image"
            className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-slate-950/60 hover:bg-[#d7b36a] text-white hover:text-slate-950 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Bottom dots */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-3.5 inset-x-0 z-20 flex justify-center items-center gap-1.5 pointer-events-auto">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Jump to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 bg-[#d7b36a] shadow-[0_0_8px_#d7b36a]'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
