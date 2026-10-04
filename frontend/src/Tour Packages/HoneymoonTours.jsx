import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

// Modular 10 Section Components for Ultra-Premium Honeymoon Experience
import HoneymoonHero from './Honeymoon/components/HoneymoonHero'
import HoneymoonDestinations from './Honeymoon/components/HoneymoonDestinations'
import HoneymoonPackages from './Honeymoon/components/HoneymoonPackages'
import RomanticExperiences from './Honeymoon/components/RomanticExperiences'
import HoneymoonHotels from './Honeymoon/components/HoneymoonHotels'
import HoneymoonItineraries from './Honeymoon/components/HoneymoonItineraries'
import HoneymoonBudgetPlanner from './Honeymoon/components/HoneymoonBudgetPlanner'
import HoneymoonTravelGuide from './Honeymoon/components/HoneymoonTravelGuide'
import CoupleTestimonials from './Honeymoon/components/CoupleTestimonials'
import HoneymoonCTA from './Honeymoon/components/HoneymoonCTA'
import HoneymoonModal from './Honeymoon/components/HoneymoonModal'

function HoneymoonTours() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPackageCategory, setSelectedPackageCategory] = useState('all')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Interactive Detail & Inquiry Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    item: null,
    type: 'package',
  })

  // Show "Scroll to top" button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll helpers
  const scrollToPackages = () => {
    const el = document.getElementById('packages-section')
    if (el) {
      const navOffset = 90
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const scrollToPlanner = () => {
    const el = document.getElementById('budget-planner')
    if (el) {
      const navOffset = 90
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  // Modal Handlers
  const handleOpenModal = (item, type = 'package') => {
    setModalState({
      isOpen: true,
      item,
      type,
    })
  }

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false, item: null }))
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 selection:bg-[#d7b36a]/30">
      {/* ============================================================
          SECTION 01 — CINEMATIC HONEYMOON HERO
      ============================================================ */}
      <HoneymoonHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onExploreClick={scrollToPackages}
        onPlanClick={scrollToPlanner}
      />

      {/* ============================================================
          SECTION 02 — TOP HONEYMOON DESTINATIONS (10 Destinations Carousel)
      ============================================================ */}
      <HoneymoonDestinations
        onExploreDestination={(dest) => handleOpenModal(dest, 'destination')}
      />

      {/* ============================================================
          SECTION 03 — HONEYMOON PACKAGE COLLECTION (5 Category Filters)
      ============================================================ */}
      <HoneymoonPackages
        selectedCategory={selectedPackageCategory}
        setSelectedCategory={setSelectedPackageCategory}
        onViewPackage={(pkg) => handleOpenModal(pkg, 'package')}
      />

      {/* ============================================================
          SECTION 04 — ROMANTIC EXPERIENCES (12 Iconic Experiences)
      ============================================================ */}
      <RomanticExperiences
        onSelectExperience={(exp) => handleOpenModal(exp, 'experience')}
      />

      {/* ============================================================
          SECTION 05 — LUXURY HONEYMOON HOTELS & RESORTS (Villas & Stays)
      ============================================================ */}
      <HoneymoonHotels
        onViewHotel={(hotel) => handleOpenModal(hotel, 'hotel')}
      />

      {/* ============================================================
          SECTION 06 — ROMANTIC HONEYMOON ITINERARIES (4, 7 & 10-Day Timelines)
      ============================================================ */}
      <HoneymoonItineraries
        onSelectPackage={(itinerary) => handleOpenModal(itinerary, 'package')}
      />

      {/* ============================================================
          SECTION 07 — HONEYMOON BUDGET PLANNER (Dynamic Calculator)
      ============================================================ */}
      <HoneymoonBudgetPlanner onPlanTrip={scrollToPackages} />

      {/* ============================================================
          SECTION 08 — HONEYMOON TRAVEL GUIDE (13 Expandable Accordions)
      ============================================================ */}
      <HoneymoonTravelGuide />

      {/* ============================================================
          SECTION 09 — COUPLE TESTIMONIALS & MEMORIES (Stories & Mosaic)
      ============================================================ */}
      <CoupleTestimonials />

      {/* ============================================================
          SECTION 10 — FINAL ROMANTIC CTA (Cinematic Closing Section)
      ============================================================ */}
      <HoneymoonCTA
        onExploreClick={scrollToPackages}
        onPlanClick={scrollToPlanner}
      />

      {/* ============================================================
          INTERACTIVE HONEYMOON MODAL (Detail Viewer & Booking Inquiry)
      ============================================================ */}
      <HoneymoonModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        item={modalState.item}
        type={modalState.type}
      />

      {/* ============================================================
          FLOATING BACK TO TOP BUTTON
      ============================================================ */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-slate-950 hover:bg-[#aa732b] text-[#d7b36a] hover:text-white shadow-2xl border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}

export default HoneymoonTours