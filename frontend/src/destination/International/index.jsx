import { useState, useEffect, useRef, useMemo } from 'react'
import { Globe2, Search, ArrowUp, Frown } from 'lucide-react'

// International Data & Lists
import {
  internationalCountriesData,
  regionsList,
  travelStylesList,
  budgetFiltersList,
} from './internationalData'

// Modular Components (All within International folder)
import InternationalHero from './components/InternationalHero'
import RegionExplorer from './components/RegionExplorer'
import CountryNavigation from './components/CountryNavigation'
import InternationalFilter from './components/InternationalFilter'
import CountrySection from './components/CountrySection'
import InternationalCTA from './components/InternationalCTA'
import DestinationModal from './components/DestinationModal'

export default function International() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedStyle, setSelectedStyle] = useState('All Styles')
  const [selectedBudget, setSelectedBudget] = useState('All Budgets')
  const [activeCountryId, setActiveCountryId] = useState('france')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Interactive Detail Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    item: null,
    type: 'destination', // 'destination' | 'hotel'
    countryName: '',
  })

  // Show "Scroll to top" button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to country section with header/sticky nav offset
  const scrollToCountry = (id) => {
    setActiveCountryId(id)
    const el = document.getElementById(`country-${id}`)
    if (el) {
      const navOffset = 110 // Height of header + sticky bar
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Smooth scroll to countries container from Hero
  const scrollToCountriesSection = () => {
    const el = document.getElementById('countries-container')
    if (el) {
      const navOffset = 100
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Filtered countries calculation based on search, region, style, and budget
  const filteredCountries = useMemo(() => {
    return internationalCountriesData.filter((c) => {
      // 1. Region Filter
      if (selectedRegion !== 'all' && c.region !== selectedRegion) {
        return false
      }

      // 2. Travel Style Filter
      if (selectedStyle !== 'All Styles') {
        const matchesCountryStyle = c.travelStyles?.includes(selectedStyle)
        const matchesDestinationCategory = c.destinations.some(
          (d) => d.category.toLowerCase() === selectedStyle.toLowerCase()
        )
        if (!matchesCountryStyle && !matchesDestinationCategory) {
          return false
        }
      }

      // 3. Budget Tier Filter
      if (selectedBudget !== 'All Budgets') {
        if (c.budgetTier !== selectedBudget) {
          // Check if any hotel matches the budget tier
          const hasMatchingHotel = c.hotels?.some(
            (h) => h.tier.toLowerCase() === selectedBudget.toLowerCase()
          )
          if (!hasMatchingHotel) return false
        }
      }

      // 4. Text Search Query Filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim()
        const matchesCountryName = c.name.toLowerCase().includes(q)
        const matchesTagline = c.tagline.toLowerCase().includes(q)
        const matchesDescription = c.description.toLowerCase().includes(q)
        const matchesDestination = c.destinations.some(
          (d) => d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q)
        )
        const matchesHotel = c.hotels.some(
          (h) => h.name.toLowerCase().includes(q) || h.city.toLowerCase().includes(q)
        )
        const matchesExperience = c.experiences.some((e) => e.name.toLowerCase().includes(q))

        if (
          !matchesCountryName &&
          !matchesTagline &&
          !matchesDescription &&
          !matchesDestination &&
          !matchesHotel &&
          !matchesExperience
        ) {
          return false
        }
      }

      return true
    })
  }, [searchQuery, selectedRegion, selectedStyle, selectedBudget])

  // Intersection Observer to detect currently visible country and update sticky bar
  useEffect(() => {
    if (filteredCountries.length === 0) return

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countryId = entry.target.getAttribute('data-country-id')
          if (countryId) {
            setActiveCountryId(countryId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -55% 0px', // Trigger when country section is in mid-viewport
      threshold: 0.1,
    })

    filteredCountries.forEach((country) => {
      const el = document.getElementById(`country-${country.id}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [filteredCountries])

  // Open destination explore modal
  const handleExploreDestination = (destination, countryName) => {
    setModalState({
      isOpen: true,
      item: destination,
      type: 'destination',
      countryName,
    })
  }

  // Open hotel details modal
  const handleViewHotel = (hotel, countryName) => {
    setModalState({
      isOpen: true,
      item: hotel,
      type: 'hotel',
      countryName,
    })
  }

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false, item: null }))
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 selection:bg-[#d7b36a]/30">
      {/* ============================================================
          SECTION 01 — INTERNATIONAL HERO
      ============================================================ */}
      <InternationalHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCountries={internationalCountriesData.length}
        onExploreClick={scrollToCountriesSection}
      />

      {/* ============================================================
          SECTION 02 — WORLD REGION EXPLORER
      ============================================================ */}
      <RegionExplorer
        regions={regionsList}
        selectedRegion={selectedRegion}
        onSelectRegion={(regId) => {
          setSelectedRegion(regId)
          scrollToCountriesSection()
        }}
      />

      {/* ============================================================
          STICKY COUNTRY NAVIGATION BAR
      ============================================================ */}
      <CountryNavigation
        countries={filteredCountries}
        activeCountryId={activeCountryId}
        onSelectCountry={scrollToCountry}
      />

      {/* ============================================================
          SEARCH & ADVANCED FILTER SYSTEM
      ============================================================ */}
      <InternationalFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedStyle={selectedStyle}
        setSelectedStyle={setSelectedStyle}
        selectedBudget={selectedBudget}
        setSelectedBudget={setSelectedBudget}
        totalCount={internationalCountriesData.length}
        filteredCount={filteredCountries.length}
      />

      {/* ============================================================
          EXACTLY 20 COUNTRY SECTIONS CONTAINER
      ============================================================ */}
      <main
        id="countries-container"
        className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-16 space-y-12"
      >
        {filteredCountries.length === 0 ? (
          /* Empty Search State */
          <div className="py-24 text-center bg-white rounded-3xl border border-slate-200 shadow-sm p-8 max-w-2xl mx-auto">
            <Globe2 className="h-16 w-16 text-slate-300 mx-auto mb-4 stroke-1" />
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
              No International Destinations Found
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              We couldn't find any country matching your current search or filter criteria. Try
              adjusting keywords or selecting 'All Regions'.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedRegion('all')
                setSelectedStyle('All Styles')
                setSelectedBudget('All Budgets')
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-[#d7b36a] text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredCountries.map((country, idx) => (
            <CountrySection
              key={country.id}
              country={country}
              index={idx}
              onExploreDestination={handleExploreDestination}
              onViewHotel={handleViewHotel}
            />
          ))
        )}
      </main>

      {/* ============================================================
          FINAL CTA SECTION — BESPOKE TRAVEL CONCIERGE
      ============================================================ */}
      <InternationalCTA />

      {/* ============================================================
          INTERACTIVE DESTINATION / HOTEL MODAL
      ============================================================ */}
      <DestinationModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        item={modalState.item}
        type={modalState.type}
        countryName={modalState.countryName}
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
