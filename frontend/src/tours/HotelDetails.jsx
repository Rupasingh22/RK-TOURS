import { useState, useEffect } from 'react'
import { hotelPropertiesData } from './hotelData'
import HotelHero from './components/HotelHero'
import HotelOverview from './components/HotelOverview'
import RoomsAndSuites from './components/RoomsAndSuites'
import HotelAmenities from './components/HotelAmenities'
import HotelLocationAndInfo from './components/HotelLocationAndInfo'
import HotelBookingCTA from './components/HotelBookingCTA'
import HotelBookingModal from './components/HotelBookingModal'

export default function HotelDetails() {
  // Currently selected hotel property (defaults to Bürgenstock Resort)
  const [selectedHotel, setSelectedHotel] = useState(hotelPropertiesData[0])

  // Currently selected room/suite within the hotel
  const [selectedRoom, setSelectedRoom] = useState(hotelPropertiesData[0].rooms[0])

  // Interactive Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'book', // 'book' | 'customize'
    data: null,
  })

  // Synchronize default room when hotel changes & scroll to top
  useEffect(() => {
    setSelectedRoom(selectedHotel.rooms[0])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedHotel.id])

  // Smooth scroll handler to Section 6 (Booking CTA)
  const handleScrollToBooking = () => {
    const el = document.getElementById('hotel-booking-cta')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Direct Book Room action from Section 3
  const handleBookRoomDirect = (room) => {
    setSelectedRoom(room)
    setModalState({
      isOpen: true,
      mode: 'book',
      data: {
        hotel: selectedHotel,
        selectedRoom: room,
        checkInDate: '2026-10-20',
        checkOutDate: '2026-10-23',
        calculatedNights: 3,
        guests: 2,
        totalStayPrice: room.pricePerNight * 3,
      },
    })
  }

  // Open modal from CTA or Hero
  const handleOpenModal = (mode, customData) => {
    setModalState({
      isOpen: true,
      mode,
      data: customData || {
        hotel: selectedHotel,
        selectedRoom,
        checkInDate: '2026-10-20',
        checkOutDate: '2026-10-23',
        calculatedNights: 3,
        guests: 2,
        totalStayPrice: selectedRoom.pricePerNight * 3,
      },
    })
  }

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 selection:bg-[#d5ab56] selection:text-slate-950 font-sans">
      {/* SECTION 1: Hotel Hero */}
      <HotelHero
        hotel={selectedHotel}
        allHotels={hotelPropertiesData}
        onSelectHotel={setSelectedHotel}
        onScrollToBooking={handleScrollToBooking}
        onOpenModal={handleOpenModal}
      />

      {/* SECTION 2: Hotel Overview */}
      <HotelOverview hotel={selectedHotel} />

      {/* SECTION 3: Rooms & Suites */}
      <RoomsAndSuites
        hotel={selectedHotel}
        selectedRoomId={selectedRoom?.id}
        onSelectRoom={setSelectedRoom}
        onBookRoomDirect={handleBookRoomDirect}
      />

      {/* SECTION 4: Amenities & Experiences */}
      <HotelAmenities hotel={selectedHotel} />

      {/* SECTION 5: Location & Hotel Information */}
      <HotelLocationAndInfo hotel={selectedHotel} />

      {/* SECTION 6: Booking CTA */}
      <HotelBookingCTA
        hotel={selectedHotel}
        selectedRoom={selectedRoom}
        onOpenModal={handleOpenModal}
      />

      {/* Interactive Reservation & Concierge Inquiry Modal */}
      <HotelBookingModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        modalData={modalState.data}
        mode={modalState.mode}
      />
    </div>
  )
}