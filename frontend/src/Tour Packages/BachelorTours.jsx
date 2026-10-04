import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

// Modular Section Components for Bachelor Getaways
import BachelorHero from './Bachelor/components/BachelorHero'
import BachelorDestinations from './Bachelor/components/BachelorDestinations'
import BachelorPackages from './Bachelor/components/BachelorPackages'
import AdventureExperiences from './Bachelor/components/AdventureExperiences'
import NightlifeExperiences from './Bachelor/components/NightlifeExperiences'
import BachelorHotels from './Bachelor/components/BachelorHotels'
import BachelorTripBuilder from './Bachelor/components/BachelorTripBuilder'
import BachelorItineraries from './Bachelor/components/BachelorItineraries'
import BachelorTravelGuide from './Bachelor/components/BachelorTravelGuide'
import BachelorCTA from './Bachelor/components/BachelorCTA'
import BachelorModal from './Bachelor/components/BachelorModal'

function BachelorTours() {
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

  const scrollToBuilder = () => {
    const el = document.getElementById('trip-builder')
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
    <div className="min-h-screen bg-[#070b14] text-white selection:bg-amber-500 selection:text-slate-950">
      {/* ============================================================
          SECTION 01 — BOLD CINEMATIC HERO
      ============================================================ */}
      <BachelorHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onExploreClick={scrollToPackages}
        onBuildClick={scrollToBuilder}
      />

      {/* ============================================================
          SECTION 02 — TOP BACHELOR DESTINATIONS (10 Destinations Carousel)
      ============================================================ */}
      <BachelorDestinations
        onExploreDestination={(dest) => handleOpenModal(dest, 'destination')}
      />

      {/* ============================================================
          SECTION 03 — BACHELOR TRIP COLLECTIONS (5 Collections)
      ============================================================ */}
      <BachelorPackages
        selectedCategory={selectedPackageCategory}
        setSelectedCategory={setSelectedPackageCategory}
        onViewPackage={(pkg) => handleOpenModal(pkg, 'package')}
      />

      {/* ============================================================
          SECTION 04 — ADVENTURE & THRILL EXPERIENCES (Asymmetric Wall)
      ============================================================ */}
      <AdventureExperiences
        onSelectExperience={(exp) => handleOpenModal(exp, 'experience')}
      />

      {/* ============================================================
          SECTION 05 — NIGHTLIFE & SOCIAL EXPERIENCES (6 VIP Showcases)
      ============================================================ */}
      <NightlifeExperiences
        onSelectNightlife={(exp) => handleOpenModal(exp, 'nightlife')}
      />

      {/* ============================================================
          SECTION 06 — LUXURY STAYS FOR GROUPS (Villas, Penthouses & Stays)
      ============================================================ */}
      <BachelorHotels
        onViewHotel={(hotel) => handleOpenModal(hotel, 'hotel')}
      />

      {/* ============================================================
          SECTION 07 — BUILD YOUR OWN BACHELOR TRIP (Interactive Builder)
      ============================================================ */}
      <BachelorTripBuilder onBuildTrip={scrollToPackages} />

      {/* ============================================================
          SECTION 08 — EPIC BACHELOR ITINERARIES (3, 5 & 7-Day Timelines)
      ============================================================ */}
      <BachelorItineraries
        onSelectPackage={(itinerary) => handleOpenModal(itinerary, 'package')}
      />

      {/* ============================================================
          SECTION 09 — BACHELOR TRAVEL GUIDE (15 Expandable Accordions)
      ============================================================ */}
      <BachelorTravelGuide />

      {/* ============================================================
          SECTION 10 — FINAL EPIC CTA (Cinematic Closing Section)
      ============================================================ */}
      <BachelorCTA
        onExploreClick={scrollToPackages}
        onBuildClick={scrollToBuilder}
      />

      {/* ============================================================
          INTERACTIVE BACHELOR MODAL (Detail Viewer & Squad Inquiry)
      ============================================================ */}
      <BachelorModal
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
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-2xl border border-amber-300 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5]" />
        </button>
      )}
    </div>
  )
}

export default BachelorTours
