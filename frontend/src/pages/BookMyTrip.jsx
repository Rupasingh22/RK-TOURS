import { useState, useEffect } from 'react'
import TripHero from './bookMyTrip/TripHero'
import DestinationStep from './bookMyTrip/DestinationStep'
import TravelersStep from './bookMyTrip/TravelersStep'
import BudgetStep from './bookMyTrip/BudgetStep'
import ExperiencesStep from './bookMyTrip/ExperiencesStep'
import SummaryAndSubmit from './bookMyTrip/SummaryAndSubmit'

const defaultTripData = {
  destinationType: 'international',
  destination: 'Switzerland & Italian Lakes',
  departureCity: 'New Delhi (DEL)',
  travelDate: '',
  returnDate: '',
  durationDays: 7,
  destinationScope: '2–3 Cities / Regions',
  preferredTransportation: 'Private Chauffeur-Driven SUV',
  accommodationPreference: '5-Star Luxury Palace & Resort',

  // Traveler details
  tripType: 'Couple / Romantic',
  adults: 2,
  children: 0,
  infants: 0,
  childrenAges: [],

  // Budget & Stay
  budgetBasis: 'per_person',
  budgetRange: '$3,000 – $6,000',
  hotelCategory: '5-Star Luxury',
  roomPreference: 'Panoramic View Suite with Balcony',
  mealPreference: 'Artisanal Breakfast Included',
  travelStyle: 'Premium Signature',

  // Experiences & Notes
  selectedExperiences: ['Mountains & Alps', 'Food & Michelin Dining'],
  isCelebration: false,
  needsAccessibility: false,
  dietaryPreferences: [],
  specialNotes: '',

  // Contact
  contactName: '',
  contactEmail: '',
  contactPhone: '',
}

export default function BookMyTrip() {
  const [tripData, setTripData] = useState(defaultTripData)
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const scrollToBuilder = () => {
    const el = document.getElementById('planning-builder')
    if (el) {
      // Account for sticky header height
      const offset = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1)
      setTimeout(scrollToBuilder, 100)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      setTimeout(scrollToBuilder, 100)
    }
  }

  const handleSelectStep = (step) => {
    setCurrentStep(step)
    setTimeout(scrollToBuilder, 100)
  }

  const handleResetTrip = () => {
    setTripData(defaultTripData)
    setCurrentStep(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const STEP_COMPONENTS = {
    1: <DestinationStep tripData={tripData} onChange={setTripData} onNext={handleNextStep} />,
    2: <TravelersStep tripData={tripData} onChange={setTripData} onNext={handleNextStep} onPrev={handlePrevStep} />,
    3: <BudgetStep tripData={tripData} onChange={setTripData} onNext={handleNextStep} onPrev={handlePrevStep} />,
    4: <ExperiencesStep tripData={tripData} onChange={setTripData} onNext={handleNextStep} onPrev={handlePrevStep} />,
    5: <SummaryAndSubmit tripData={tripData} onChange={setTripData} onPrev={handlePrevStep} onReset={handleResetTrip} />,
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 selection:bg-[#d5ab56]/40 selection:text-slate-950">
      {/* ── Hero Section ── */}
      <TripHero
        currentStep={currentStep}
        onSelectStep={handleSelectStep}
        onStartPlanning={scrollToBuilder}
      />

      {/* ── Planning Builder ── */}
      <div id="planning-builder" className="py-10 lg:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          {/* Step progress micro-bar (mobile-friendly linear) */}
          <div className="mb-6 flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((step) => (
              <button
                key={step}
                type="button"
                onClick={() => handleSelectStep(step)}
                className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                  step < currentStep
                    ? 'bg-emerald-500'
                    : step === currentStep
                    ? 'bg-[#d5ab56]'
                    : 'bg-slate-200'
                }`}
                aria-label={`Go to step ${step}`}
              />
            ))}
          </div>

          {/* Step counter */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Step {currentStep} of 5
            </span>
            <span className="text-[11px] font-semibold text-slate-400">
              {Math.round(((currentStep - 1) / 4) * 100)}% Complete
            </span>
          </div>

          {/* Main Card */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-2xl shadow-slate-900/5">
            {STEP_COMPONENTS[currentStep]}
          </div>

          {/* Bottom Trust Footer */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-[11px] text-slate-400">
            {[
              '🔒 100% Secure & Private',
              '⭐ 10,000+ Luxury Itineraries Crafted',
              '📞 24/7 Concierge Support',
              '✈️ 50+ Destinations',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
