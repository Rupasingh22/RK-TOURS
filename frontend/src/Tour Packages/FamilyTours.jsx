import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

// Modular Section Components
import FamilyHero from './Family/components/FamilyHero'
import FamilyBenefits from './Family/components/FamilyBenefits'
import FamilyDestinations from './Family/components/FamilyDestinations'
import FamilyPackages from './Family/components/FamilyPackages'
import FamilyExperiences from './Family/components/FamilyExperiences'
import FamilyHotels from './Family/components/FamilyHotels'
import FamilyItineraries from './Family/components/FamilyItineraries'
import FamilyBudgetPlanner from './Family/components/FamilyBudgetPlanner'
import FamilyTravelGuide from './Family/components/FamilyTravelGuide'
import FamilyCTA from './Family/components/FamilyCTA'
import FamilyModal from './Family/components/FamilyModal'

function FamilyTours() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPackageCategory, setSelectedPackageCategory] = useState('all')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Interactive Detail Modal State
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
          SECTION 01 — CINEMATIC FAMILY HERO
      ============================================================ */}
      <FamilyHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onExploreClick={scrollToPackages}
        onPlanClick={scrollToPlanner}
      />

      {/* ============================================================
          SECTION 02 — WHY TRAVEL WITH FAMILY (Asymmetric Layout)
      ============================================================ */}
      <FamilyBenefits onPlanClick={scrollToPlanner} />

      {/* ============================================================
          SECTION 03 — TOP FAMILY DESTINATIONS (Horizontal Carousel)
      ============================================================ */}
      <FamilyDestinations
        onExploreDestination={(dest) => handleOpenModal(dest, 'destination')}
      />

      {/* ============================================================
          SECTION 04 — FAMILY TOUR PACKAGES (Weekend, Adventure, Luxury, Intl)
      ============================================================ */}
      <FamilyPackages
        selectedCategory={selectedPackageCategory}
        setSelectedCategory={setSelectedPackageCategory}
        onViewPackage={(pkg) => handleOpenModal(pkg, 'package')}
      />

      {/* ============================================================
          SECTION 05 — FAMILY-FRIENDLY EXPERIENCES (10 Activities)
      ============================================================ */}
      <FamilyExperiences
        onSelectExperience={(exp) => handleOpenModal(exp, 'experience')}
      />

      {/* ============================================================
          SECTION 06 — FAMILY HOTELS & STAYS (Starting Rates & Kids Clubs)
      ============================================================ */}
      <FamilyHotels
        onViewHotel={(hotel) => handleOpenModal(hotel, 'hotel')}
      />

      {/* ============================================================
          SECTION 07 — FAMILY TRAVEL ITINERARIES (3, 5 & 7-Day Timelines)
      ============================================================ */}
      <FamilyItineraries onPlanTrip={scrollToPlanner} />

      {/* ============================================================
          SECTION 08 — FAMILY TRAVEL BUDGET (Interactive Calculator)
      ============================================================ */}
      <FamilyBudgetPlanner onPlanTrip={scrollToPackages} />

      {/* ============================================================
          SECTION 09 — FAMILY TRAVEL GUIDE (10 Expandable Accordions)
      ============================================================ */}
      <FamilyTravelGuide />

      {/* ============================================================
          SECTION 10 — FINAL FAMILY CTA (Cinematic Closing Section)
      ============================================================ */}
      <FamilyCTA
        onExploreClick={scrollToPackages}
        onPlanClick={scrollToPlanner}
      />

      {/* ============================================================
          INTERACTIVE FAMILY MODAL (Detail Viewer)
      ============================================================ */}
      <FamilyModal
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

export default FamilyTours