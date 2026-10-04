import { useState, useEffect } from 'react'
import { tourPackagesData } from './tourData'
import TourHero from './components/TourHero'
import TourOverview from './components/TourOverview'
import TourItinerary from './components/TourItinerary'
import HotelsAndExperiences from './components/HotelsAndExperiences'
import TourInformation from './components/TourInformation'
import BookingCTA from './components/BookingCTA'
import BookingModal from './components/BookingModal'

export default function TourDetails() {
  // Select default featured flagship tour or allow user to switch
  const [selectedTour, setSelectedTour] = useState(tourPackagesData[0])

  // Interactive Modal State for Booking & Custom Tour Requests
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'book', // 'book' | 'customize'
    data: null,
  })

  // Ensure window starts at top when mounting or changing tour
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedTour.id])

  // Smooth scroll handler to Section 6 (Booking CTA)
  const handleScrollToBooking = () => {
    const el = document.getElementById('booking-cta')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Open interactive modal handler
  const handleOpenModal = (mode, tourData) => {
    setModalState({
      isOpen: true,
      mode,
      data: tourData || selectedTour,
    })
  }

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 selection:bg-[#d5ab56] selection:text-slate-950 font-sans">
      {/* SECTION 1: Tour Hero */}
      <TourHero
        tour={selectedTour}
        allTours={tourPackagesData}
        onSelectTour={setSelectedTour}
        onOpenModal={handleOpenModal}
        onScrollToBooking={handleScrollToBooking}
      />

      {/* SECTION 2: Tour Overview */}
      <TourOverview tour={selectedTour} />

      {/* SECTION 3: Tour Itinerary */}
      <TourItinerary tour={selectedTour} />

      {/* SECTION 4: Hotels & Experiences */}
      <HotelsAndExperiences tour={selectedTour} />

      {/* SECTION 5: Tour Information */}
      <TourInformation tour={selectedTour} />

      {/* SECTION 6: Booking CTA */}
      <BookingCTA tour={selectedTour} onOpenModal={handleOpenModal} />

      {/* Interactive Booking & Customization Modal */}
      <BookingModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        modalData={modalState.data}
        mode={modalState.mode}
      />
    </div>
  )
}