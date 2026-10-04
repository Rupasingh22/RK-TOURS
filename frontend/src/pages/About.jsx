import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  ShieldCheck,
  Heart,
  Award,
  Plane,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Send,
  Sliders,
  DollarSign,
  Maximize2,
  X,
  Mountain,
  Sun,
  Crown,
  Quote,
  Flame,
  Globe2,
  Anchor,
  HelpCircle,
  Building,
  Key,
  Luggage,
  Coffee,
  UserCheck,
  FileText,
  BadgeCheck,
  Check,
  Briefcase,
  Layers,
  Car,
  Train,
  Bus,
  Shield,
  LifeBuoy,
} from 'lucide-react'

// =========================================================================
// REUSABLE DYNAMIC IMAGE CAROUSEL (1-Second Auto-Rotation with 10 Images)
// =========================================================================

function DynamicImageCarousel({
  images,
  alt = 'Travel Image',
  className = 'h-48 w-full',
  interval = 1000,
  showControls = true,
  showDots = true,
  badge = null,
  overlayGradient = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered || !images || images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images, interval, isHovered])

  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className={`relative overflow-hidden group select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, idx) => (
        <img
          key={img + idx}
          src={img}
          alt={`${alt} ${idx + 1}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${idx === currentIndex
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
        />
      ))}

      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/20 z-10 pointer-events-none" />
      )}

      {badge && (
        <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
          {badge}
        </div>
      )}

      {/* Manual Controls */}
      {showControls && images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between px-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/70 border border-white/20 text-white backdrop-blur-md hover:bg-black transition"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/70 border border-white/20 text-white backdrop-blur-md hover:bg-black transition"
          >
            ›
          </button>
        </div>
      )}

      {/* 10 Mini Progress Bars */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center items-center gap-0.5 px-3 pointer-events-none">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-0.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-3.5 bg-[#f6e5b4]' : 'w-1 bg-white/40'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// =========================================================================
// CURATED 10-IMAGE PHOTO BANKS FOR ABOUT PAGE
// =========================================================================

const aboutHeroImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85',
]

const storyImages = [
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1508672019048-805b876b67e2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80',
]

// =========================================================================
// DATA FOR 15 SECTIONS
// =========================================================================

// Section 3: History Timeline
const timelineMilestones = [
  {
    year: '2008',
    title: 'Atelier Foundation',
    subtitle: 'New Delhi Salons',
    desc: 'Founded with 3 bespoke travel architects rejecting mass tourism to build unhurried, private journeys for cultural connoisseurs.',
  },
  {
    year: '2011',
    title: 'First Royal Heritage Route',
    subtitle: 'Rajasthan & Golden Triangle',
    desc: 'Secured exclusive access to royal family wings in Udaipur, Jaipur, and Jodhpur palaces, pioneering modern palace buyouts.',
  },
  {
    year: '2014',
    title: 'Private Aviation Division',
    subtitle: 'Airside Escorts & Helicopters',
    desc: 'Launched point-to-point private aircraft charters and alpine helicopter lifts, eliminating commercial terminal queues.',
  },
  {
    year: '2017',
    title: 'International Sovereign Expansion',
    subtitle: 'Europe & Far East',
    desc: 'Established direct partnerships with European noble estates, Swiss glacier chalets, and centuries-old Kyoto ryokan masters.',
  },
  {
    year: '2020',
    title: 'Secret Sanctuary Buyouts',
    subtitle: 'Private Islands & Estates',
    desc: 'Pioneered fully buy-out private island compounds and remote conservation conservancies for complete family seclusion.',
  },
  {
    year: '2023',
    title: 'Diplomatic Logistics & Concierge Dispatch',
    subtitle: '24/7 Global Field Operations',
    desc: 'Deployed real-time localized field directors across 65 nations with guaranteed response times under 45 minutes.',
  },
  {
    year: '2026',
    title: 'Global Sovereign Leader',
    subtitle: '42,000+ Journeys Completed',
    desc: 'Recognized as one of the world’s premier bespoke travel platforms, bridging timeless heritage with state-of-the-art luxury.',
  },
]

// Section 4: Team Members
const teamMembers = [
  {
    name: 'Rajesh Khanna',
    role: 'Founder & Executive Chairman',
    exp: '24 Years in Luxury Travel',
    bio: 'Pioneered bespoke travel in India. Fellow of the Royal Geographical Society and advisor to private heritage conservation boards.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    contact: 'founder@rktours.com',
  },
  {
    name: 'Simone De Vries',
    role: 'Chief Executive Officer',
    exp: '19 Years in Global Hospitality',
    bio: 'Former senior director at Leading Hotels of the World. Directs international partnerships, private aviation, and client discretion.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    contact: 'ceo@rktours.com',
  },
  {
    name: 'Marcus Sterling',
    role: 'Managing Director of Global Expeditions',
    exp: '16 Years in Field Curation',
    bio: 'Specialist in alpine ski-mountaineering, polar yacht charters, and remote African private reserve buyouts.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    contact: 'expeditions@rktours.com',
  },
  {
    name: 'Ananya Sen',
    role: 'Head of Domestic Heritage & Palaces',
    exp: '12 Years in Cultural Architecture',
    bio: 'Author and historian with unparalleled personal access to royal residences, ancient textile masters, and secret fortress retreats.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    contact: 'heritage@rktours.com',
  },
  {
    name: 'Matteo Rossi',
    role: 'Director of European & Mediterranean Portfolios',
    exp: '14 Years in Fine Gastronomy & Stays',
    bio: 'Based in Florence and Geneva. Curates Michelin cellar access, private Riva yacht itineraries, and Amalfi cliffside villas.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    contact: 'europe@rktours.com',
  },
  {
    name: 'Kenji Takahashi',
    role: 'Far East & Cultural Curator',
    exp: '11 Years in Japan & Southeast Asia',
    bio: 'Bridges modern Asian luxury with sacred traditions. Coordinates closed-door Zen ceremonies and private island charters.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    contact: 'fareast@rktours.com',
  },
]

// Section 5: Travel Experts
const travelExpertise = [
  {
    title: 'Domestic Heritage Experts',
    icon: Crown,
    desc: 'Unrivaled insight into Indian fortresses, private palace wings, desert safaris, and backwater sanctuaries.',
    tag: 'Rajasthan • Kerala • Himalayas',
  },
  {
    title: 'International Sovereign Specialists',
    icon: Globe2,
    desc: 'Curators based in Paris, Zurich, Tokyo, and Dubai coordinating diplomatic access and exclusive villas.',
    tag: 'Europe • Asia • Middle East',
  },
  {
    title: 'High-Altitude & Polar Adventurers',
    icon: Mountain,
    desc: 'Certified mountain guides coordinating helicopter drops, glacier skiing, and private snowcat expeditions.',
    tag: 'Swiss Alps • Norway • Himalayas',
  },
  {
    title: 'Ultra-Luxury & Island Buyouts',
    icon: Key,
    desc: 'Specialists negotiating private island compounds, royal castle buyouts, and superyacht charters.',
    tag: 'Caribbean • Med • Maldives',
  },
  {
    title: 'Honeymoon & Romantic Curators',
    icon: Heart,
    desc: 'Masters of intimate pacing, private sunset catamarans, cliffside candlelit dining, and couples sanctuaries.',
    tag: 'Amalfi • Santorini • Bali',
  },
  {
    title: 'Multi-Generational Family Directors',
    icon: Users,
    desc: 'Designing balanced itineraries where grandparents, parents, and children all experience effortless luxury.',
    tag: 'Spacious Villas • Private Drivers',
  },
  {
    title: 'Corporate & Diplomatic Missions',
    icon: Briefcase,
    desc: 'Discreet bilateral mission planning, armored vehicle convoys, secure board retreats, and executive air charters.',
    tag: 'VIP Protection • Strict NDAs',
  },
  {
    title: 'Cultural & Spiritual Immersion',
    icon: Sparkles,
    desc: 'Connecting travelers with master artisans, temple abbots, private curators, and ancient wellness traditions.',
    tag: 'Varanasi • Kyoto • Tibet',
  },
]

// Section 7: 10 Major Domestic Destinations (Detailed)
const domestic10Destinations = [
  {
    name: 'Delhi',
    state: 'National Capital Territory',
    bestTime: 'October to March',
    places: 'Humayun’s Tomb, Qutub Minar, Chandni Chowk, Rashtrapati Bhavan',
    activities: 'Heritage salon walks, private Mughal culinary tasting, private art gallery access',
    duration: '2 - 3 Days',
    tourType: 'Cultural Heritage & High Fashion',
    hotels: 'The Imperial, The Leela Palace, Oberoi New Delhi',
    price: 'From $850',
    img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    bestTime: 'November to February',
    places: 'Gateway of India, Marine Drive, Colaba, Bandra Bandstand',
    activities: 'Private yacht charter in Mumbai Harbour, architectural art deco tours, Bollywood insider preview',
    duration: '3 - 4 Days',
    tourType: 'Coastal Metropolis & Art',
    hotels: 'Taj Mahal Palace, The Oberoi, Four Seasons',
    price: 'From $950',
    img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    bestTime: 'October to March',
    places: 'Amber Fort, City Palace, Hawa Mahal, Jantar Mantar',
    activities: 'Private gem atelier appointments, vintage car rally to Nahargarh, private palace courtyard dining',
    duration: '3 - 4 Days',
    tourType: 'Royal Rajput Grandeur',
    hotels: 'Rambagh Palace, Rajmahal Palace, Oberoi Rajvilas',
    price: 'From $1,250',
    img: 'https://images.unsplash.com/photo-1609137144822-0d1c79875f36?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Goa',
    state: 'Goa',
    bestTime: 'November to April',
    places: 'Palolem Beach, Fort Aguada, Fontainhas, Cabo de Rama',
    activities: 'Private catamaran sunset cruise, Latin Quarter heritage walk, secluded luxury villa dining',
    duration: '4 - 6 Days',
    tourType: 'Coastal Serenity & Heritage',
    hotels: 'Taj Exotica, St. Regis Goa, W Goa',
    price: 'From $1,100',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Kerala',
    state: 'Kerala',
    bestTime: 'September to March',
    places: 'Alleppey Backwaters, Munnar Hills, Fort Kochi, Kumarakom',
    activities: 'Private luxury houseboat cruising, traditional Ayurvedic consultation, Kathakali master performance',
    duration: '5 - 7 Days',
    tourType: 'Wellness & Backwaters',
    hotels: 'Kumarakom Lake Resort, Brunton Boatyard, Coconut Lagoon',
    price: 'From $1,380',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    bestTime: 'October to March',
    places: 'Dashashwamedh Ghat, Assi Ghat, Kashi Vishwanath, Sarnath',
    activities: 'Private dawn wooden boat on the Ganges, exclusive private terrace view of Ganga Aarti, silk master ateliers',
    duration: '2 - 3 Days',
    tourType: 'Sacred Heritage & Spirituality',
    hotels: 'BrijRama Palace, Taj Ganges, Nadesar Palace',
    price: 'From $890',
    img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Udaipur',
    state: 'Rajasthan',
    bestTime: 'October to March',
    places: 'Lake Pichola, City Palace, Jagmandir, Saheliyon Ki Bari',
    activities: 'Private royal boat cruise on Lake Pichola, rooftop candlelight dining, Mewar royal museum curator walk',
    duration: '3 - 4 Days',
    tourType: 'Lakeside Romance & Royalty',
    hotels: 'Taj Lake Palace, Oberoi Udaivilas, Leela Palace Udaipur',
    price: 'From $1,550',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Manali',
    state: 'Himachal Pradesh',
    bestTime: 'April to June & Dec to Feb',
    places: 'Solang Valley, Rohtang Pass, Old Manali, Hadimba Temple',
    activities: 'Private cedar chalet stays, helicopter flight to Rohtang, guided river trout fishing, snow valley skiing',
    duration: '4 - 5 Days',
    tourType: 'Alpine Retreat & Adventure',
    hotels: 'The Himalayan Luxury Resort, Span Resort & Spa',
    price: 'From $1,150',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Agra',
    state: 'Uttar Pradesh',
    bestTime: 'October to March',
    places: 'Taj Mahal, Agra Fort, Fatehpur Sikri, Mehtab Bagh',
    activities: 'Private sunrise viewing of Taj Mahal before crowds, after-hours Mehtab Bagh moonlight viewing, Mughal marble craft',
    duration: '1 - 2 Days',
    tourType: 'Mughal Architectural Wonder',
    hotels: 'Oberoi Amarvilas (Taj View from every room)',
    price: 'From $780',
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Rishikesh',
    state: 'Uttarakhand',
    bestTime: 'September to May',
    places: 'Triveni Ghat, Laxman Jhula, Beatles Ashram, Neelkanth',
    activities: 'Private yoga master sessions on the white sand riverbanks, gentle white-water rafting, luxury forest glamping',
    duration: '3 - 4 Days',
    tourType: 'Himalayan Wellness & Serenity',
    hotels: 'Ananda in the Himalayas, Roseate Ganges, Taj Rishikesh',
    price: 'From $1,320',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80',
  },
]

// Section 9: 10 Major International Destinations (Detailed)
const international10Destinations = [
  {
    name: 'Paris',
    country: 'France',
    bestTime: 'April to October',
    places: 'Eiffel Tower, Louvre Museum, Notre-Dame, Champs-Élysées',
    experiences: 'Private after-hours Louvre curator tour, vintage Seine yacht dinner, Haute couture atelier preview',
    duration: '4 - 6 Days',
    tourType: 'Art, Gastronomy & Haute Couture',
    hotels: 'Ritz Paris, Le Meurice, Cheval Blanc Paris',
    price: 'From $2,850',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dubai',
    country: 'United Arab Emirates',
    bestTime: 'November to March',
    places: 'Burj Khalifa, Palm Jumeirah, Dubai Marina, Al Maha Desert',
    experiences: 'Helicopter transfer over the Palm, private royal desert reserve dining, superyacht marina cruise',
    duration: '4 - 5 Days',
    tourType: 'Futuristic Luxury & Desert Royalty',
    hotels: 'Burj Al Arab, Atlantis The Royal, One&Only The Palm',
    price: 'From $2,450',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'London',
    country: 'United Kingdom',
    bestTime: 'May to September',
    places: 'Tower of London, Buckingham Palace, Mayfair, Westminster',
    experiences: 'Private viewing of Crown Jewels, private Royal Albert Hall box, chauffeured Rolls Royce Cotswolds excursion',
    duration: '5 - 7 Days',
    tourType: 'Heritage Nobility & Theater',
    hotels: 'The Savoy, Claridge’s, The Connaught',
    price: 'From $2,750',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    bestTime: 'Year-Round',
    places: 'Marina Bay Sands, Gardens by the Bay, Sentosa, Orchard Road',
    experiences: 'Private after-hours Flower Dome tour, rooftop Michelin dinner, private yacht hop to Lazarus Island',
    duration: '3 - 4 Days',
    tourType: 'Urban Garden & Modernist Luxury',
    hotels: 'Raffles Singapore, Capella Singapore, Marina Bay Sands',
    price: 'From $1,950',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    bestTime: 'April to October',
    places: 'Ubud Rice Terraces, Uluwatu Cliff, Seminyak, Nusa Penida',
    experiences: 'Private cliffside pool villa, sacred water cleansing ceremony with High Priest, private helicopter island tour',
    duration: '6 - 8 Days',
    tourType: 'Tropical Wellness & Sanctuaries',
    hotels: 'Mandapa a Ritz-Carlton Reserve, Bulgari Resort, Amandari',
    price: 'From $2,100',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    bestTime: 'March to May & Sept to Nov',
    places: 'Ginza, Shinjuku, Meiji Shrine, Shibuya Crossing',
    experiences: 'Closed-door 3-star Michelin omakase, private audience with Grand Sumo Master, bullet train Gran Class to Kyoto',
    duration: '5 - 7 Days',
    tourType: 'Ultra-Modernism & Ancient Honor',
    hotels: 'Aman Tokyo, Hoshinoya Tokyo, The Ritz-Carlton Tokyo',
    price: 'From $3,200',
    img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Switzerland',
    country: 'Switzerland',
    bestTime: 'Dec to April & June to Sept',
    places: 'Zermatt & Matterhorn, St. Moritz, Lake Geneva, Lucerne',
    experiences: 'Glacier Express Excellence Class salon, private heli-skiing drop on Monte Rosa, fondue vault cellar tasting',
    duration: '6 - 8 Days',
    tourType: 'High Alpine Serenity & Ski Chalets',
    hotels: 'Badrutt’s Palace, Bürgenstock Hotel, The Chedi Andermatt',
    price: 'From $3,650',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'New York',
    country: 'United States',
    bestTime: 'September to December',
    places: 'Central Park, Fifth Avenue, Broadway, Hudson Yards',
    experiences: 'Private helicopter skyline transfer, private museum curator viewing of MoMA, VIP Broadway house seats',
    duration: '4 - 5 Days',
    tourType: 'Iconic Skyline & High Culture',
    hotels: 'Aman New York, The Carlyle, The Mark Hotel',
    price: 'From $3,100',
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Rome',
    country: 'Italy',
    bestTime: 'April to June & Sept to Oct',
    places: 'Colosseum, Vatican Museums, Trevi Fountain, Pantheon',
    experiences: 'After-hours private Sistine Chapel access with art historian, Ferrari countryside drive to Frascati vineyards',
    duration: '4 - 5 Days',
    tourType: 'Classical Antiquity & Renaissance',
    hotels: 'Hotel de Russie, Hassler Roma, Hotel Eden',
    price: 'From $2,650',
    img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Maldives',
    country: 'Maldives',
    bestTime: 'November to April',
    places: 'Baa Atoll, North Malé Atoll, Ari Atoll',
    experiences: 'Private seaplane charter, submerged underwater restaurant dining, private sandbank starlight cinema',
    duration: '5 - 7 Days',
    tourType: 'Overwater Seclusion & Coral Reefs',
    hotels: 'Soneva Fushi, Cheval Blanc Randheli, Waldorf Astoria Ithaafushi',
    price: 'From $4,200',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=700&q=80',
  },
]

// Section 10: 10 Tour Experience Categories
const tourExperienceCategories = [
  { title: 'Adventure & Polar Tours', desc: 'Glacier trekking, heli-ski drops, and canyon expeditions with certified guides.', duration: '5 - 10 Days', best: 'Swiss Alps, Norway, Manali', price: '$2,400', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80', route: '/tour-packages/adventure' },
  { title: 'Ultra-Luxury Sanctuaries', desc: 'Private island buyouts, Michelin dining, and presidential suites with butlers.', duration: '4 - 14 Days', best: 'Amalfi, Paris, Dubai, Udaipur', price: '$3,800', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', route: '/tours/tour-details' },
  { title: 'Family Dynasty Journeys', desc: 'Curated multi-generational villas, relaxed pacing, and enriching activities.', duration: '6 - 9 Days', best: 'Bali, Kerala, Tuscany', price: '$2,600', img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80', route: '/tour-packages/family' },
  { title: 'Honeymoon Romance', desc: 'Private sunset yachts, overwater villas, and candlelit cliffside dinners.', duration: '5 - 8 Days', best: 'Santorini, Maldives, Positano', price: '$2,850', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80', route: '/tour-packages/honeymoon' },
  { title: 'Wildlife & Safari Quests', desc: 'Private game reserves, infrared night drives, and conservation naturalist walks.', duration: '6 - 8 Days', best: 'Serengeti, Ranthambore, Kaziranga', price: '$3,400', img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80', route: '/tour-packages/adventure' },
  { title: 'Coastal & Beach Refuges', desc: 'Private catamaran charters, beach pavilions, and secluded sea coves.', duration: '4 - 7 Days', best: 'Goa, French Riviera, Bora Bora', price: '$1,950', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', route: '/destination/domestic' },
  { title: 'Mountain & Alpine Lodges', desc: 'Panoramic cedar chalets, thermal infinity pools, and high-altitude hiking.', duration: '4 - 6 Days', best: 'Zermatt, Dolomites, Rishikesh', price: '$2,100', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80', route: '/destination/domestic' },
  { title: 'Cultural & Heritage Trails', desc: 'Private palace access, ancient temple rituals, and historic city ateliers.', duration: '5 - 8 Days', best: 'Rajasthan, Kyoto, Rome, Cairo', price: '$2,250', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80', route: '/destination/domestic' },
  { title: 'Spiritual & Wellness Retreats', desc: 'Holistic Ayurvedic therapies, sound healing, yoga masters, and sacred springs.', duration: '5 - 10 Days', best: 'Ubud, Rishikesh, Kerala', price: '$1,800', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', route: '/destination/international' },
  { title: 'Weekend Luxury Respite', desc: 'High-impact 48-72 hour escapes with private aviation and late checkouts.', duration: '2 - 3 Days', best: 'Dubai, London, Singapore, Jaipur', price: '$1,420', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80', route: '/tour-packages/weekend' },
]

// Section 12: Hotel Experience across 8 tiers
const hotelTiers = [
  { category: '5-Star Palaces & Castles', desc: 'Historic royal properties with butler service and preserved heritage suites.', price: '$850+/night', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', highlights: ['Taj Lake Palace Udaipur', 'Palazzo Papadopoli Venice', 'Rambagh Palace'] },
  { category: 'Luxury Private Villa Buyouts', desc: 'Exclusive multi-room compounds with dedicated chefs, security, and private pools.', price: '$1,400+/night', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', highlights: ['Seminyak Cliff Estates', 'Positano Cliff Villa', 'Goa Heritage Villa'] },
  { category: 'Alpine Ski & Mountain Chalets', desc: 'Glacier-facing chalets with stone fireplaces and private thermal saunas.', price: '$950+/night', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80', highlights: ['Zermatt Ski-In Chalet', 'Cortina Stube Lodge', 'Manali Pine Retreat'] },
  { category: 'Overwater Ocean Bungalows', desc: 'Lagoon pavilions with glass floor panels and direct ladder to turquoise reefs.', price: '$1,200+/night', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', highlights: ['Bora Bora Lagoon Suite', 'Maldives Baa Atoll', 'Palawan Water Villa'] },
  { category: 'Boutique City Suites', desc: 'Architecturally curated salons in the heart of historic fashion districts.', price: '$650+/night', img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80', highlights: ['Paris 1st Arrondissement', 'Mayfair London Penthouse', 'Ginza Tokyo Salon'] },
  { category: 'Wellness & Thermal Resorts', desc: 'Holistic retreats with daily Ayurvedic physicians and organic gastronomy.', price: '$720+/night', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80', highlights: ['Ananda in Himalayas', 'Ubud River Sanctuary', 'Swiss Bürgenstock'] },
  { category: 'Desert Luxury Pavilions', desc: 'Air-conditioned royal bedouin pavilions with private plunge pools in deep dunes.', price: '$890+/night', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80', highlights: ['Al Maha Desert Reserve', 'Jaisalmer Sand Dunes', 'Qasr Al Sarab'] },
  { category: 'Secluded Coastal Stays', desc: 'Private beach residences with private cabanas and personal sunset mixologist.', price: '$780+/night', img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80', highlights: ['Kerala Marari Beach', 'Santorini Caldera Edge', 'Capri Faraglioni View'] },
]

// =========================================================================
// MAIN ABOUT PAGE COMPONENT (15 Distinct Elite Sections)
// =========================================================================

export default function About() {
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0)
  const [domesticFilter, setDomesticFilter] = useState('All')
  const [intlFilter, setIntlFilter] = useState('All')
  const [contactSubmitted, setContactSubmitted] = useState(false)

  return (
    <div className="bg-[#f8f5f0] text-slate-900 selection:bg-[#d7b36a]/30 selection:text-slate-900">
      {/* =========================================================================
          SECTION 01: ABOUT HERO (Cinematic, Video-Style Panoramic, Breadcrumb)
      ========================================================================= */}
      <section className="relative overflow-hidden px-4 pt-4 pb-12 sm:px-6 lg:px-8">
        {/* About Hero: Premium Static Cinematic Background Image (different from Home) */}
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* 10-Image Rotating Background with 1-Second Interval */}
          <DynamicImageCarousel
            images={aboutHeroImages}
            alt="About RK Tours Atelier"
            className="absolute inset-0 h-full w-full"
            interval={1000}
            showControls={false}
            showDots={false}
          />

          {/* Premium Cinematic Gradient Overlay — ensures text legibility over all backgrounds */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'linear-gradient(150deg, rgba(8,12,24,0.78) 0%, rgba(8,12,24,0.52) 40%, rgba(8,12,24,0.28) 65%, rgba(8,12,24,0.70) 100%)',
            }}
          />

          <div className="relative z-20 p-6 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] lg:min-h-[540px]">
            {/* Breadcrumb & Accreditations */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <nav className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-4 py-1 text-xs text-slate-300 backdrop-blur-md">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#f6e5b4] font-semibold">About RK Tours</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-slate-950/70 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4] backdrop-blur-md">
                <Award className="h-3 w-3 text-[#d7b36a]" /> Virtuoso Accredited Luxury Atelier
              </div>
            </div>

            {/* Headline & Statement */}
            <div className="my-6 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.08] tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
                Pioneering the Art of <span className="italic font-normal gold-gradient-text">Extraordinary Travel</span>.
              </h1>
              <p className="mt-3 text-sm sm:text-base text-white/90 font-light max-w-2xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                Since 2008, RK Tours has designed deeply personal, culturally transcendent journeys for guests who seek stillness, depth, and sovereign comfort.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#story"
                  className="rounded-xl bg-gradient-to-r from-[#d7b36a] to-[#b28a43] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:scale-102 transition shadow-lg"
                >
                  Explore Our Story
                </a>
                <a
                  href="#team"
                  className="rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold text-black hover:bg-white/20 transition backdrop-blur-md"
                >
                  Meet Our Curators
                </a>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold text-black hover:bg-white/20 transition backdrop-blur-md"
                >
                  Contact Concierge Salon
                </Link>
              </div>
            </div>

            {/* Micro Statistics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-xl border border-white/15 bg-slate-950/80 p-3 sm:p-4 backdrop-blur-xl text-white">
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">18+ Years</div>
                <div className="text-[10px] uppercase text-slate-400">Atelier Heritage</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">42,000+</div>
                <div className="text-[10px] uppercase text-slate-400">Journeys Crafted</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">65+ Nations</div>
                <div className="text-[10px] uppercase text-slate-400">Direct Field Access</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">99.4%</div>
                <div className="text-[10px] uppercase text-slate-400">Discerning Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: OUR STORY (Editorial Storytelling with Photography)
      ========================================================================= */}
      <section id="story" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Compass className="h-3 w-3 text-[#d7b36a]" /> Our Story
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-slate-900 tracking-tight leading-tight">
              Born from a Rejection of the Rushed, Ordinary Itinerary.
            </h2>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              <p>
                In 2008, our founders stood on a crowded overlook in Agra and realized that standard commercial tourism had lost its soul. Travelers were shuttled between identical hotels, rushed through ticket lines, and denied genuine communion with the places they had traveled halfway across the globe to witness.
              </p>
              <p>
                RK Tours was created with a sovereign counter-philosophy: <strong className="font-semibold text-slate-900">travel should be unhurried, deeply intimate, and impeccably handled</strong>. We began by negotiating closed-gate access to Rajasthan’s royal estates and private boats across the Venetian lagoon.
              </p>
              <p>
                Today, with salons in New Delhi, London, and Zurich, our team coordinates private aircraft charters, secret villa buyouts, and 24/7 localized field liaisons for travelers who view the world as a canvas of wonder rather than a checklist.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#f2ece2] border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Our Future Vision</h4>
              <p className="mt-1 text-xs text-slate-600 font-light">
                Expanding carbon-offset private aviation expeditions, regenerative heritage restoration in India, and exclusive private island conservancies across Southeast Asia.
              </p>
            </div>
          </div>

          {/* Dynamic 10-Image Story Carousel */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
            <DynamicImageCarousel
              images={storyImages}
              alt="RK Tours Story & Field Expeditions"
              className="h-[360px] sm:h-[440px] w-full"
              interval={1000}
              badge={
                <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                  Archival Journey Moments
                </span>
              }
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: OUR HISTORY TIMELINE (Interactive Milestone Chronology)
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Clock className="h-3 w-3 text-[#d7b36a]" /> Our History Timeline
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Eighteen Years of Milestone Achievements.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Click each milestone year to explore our evolution into an international luxury travel leader.
            </p>
          </div>

          {/* Year Buttons */}
          <div className="flex justify-center mb-6 overflow-x-auto pb-2 gap-2">
            {timelineMilestones.map((m, idx) => (
              <button
                key={m.year}
                type="button"
                onClick={() => setActiveHistoryIndex(idx)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${activeHistoryIndex === idx
                    ? 'bg-slate-900 text-[#f6e5b4] shadow'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
              >
                {m.year}
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  {timelineMilestones[activeHistoryIndex].year}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#8a6b32]">
                  {timelineMilestones[activeHistoryIndex].title}
                </h3>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {timelineMilestones[activeHistoryIndex].subtitle}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              {timelineMilestones[activeHistoryIndex].desc}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: OUR TEAM (Executive Curators & Specialists)
      ========================================================================= */}
      <section id="team" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Users className="h-3 w-3 text-[#d7b36a]" /> Our Leadership & Directors
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              The Curators Behind Your Journey.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Meet the directors, historians, and logistics architects who personally oversee your travel blueprint.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#d7b36a] font-semibold">{member.exp}</span>
                    <h3 className="text-lg font-serif font-bold text-white">{member.name}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="text-xs font-semibold text-[#8a6b32] mb-1">{member.role}</div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{member.bio}</p>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">{member.contact}</span>
                <Link to="/contact" className="font-semibold text-slate-900 hover:text-[#8a6b32] transition">
                  Consult →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: OUR TRAVEL EXPERTS (Expertise Specialties Matrix)
      ========================================================================= */}
      <section className="bg-[#111827] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
              <Sparkles className="h-3 w-3 text-[#d7b36a]" /> Specialized Divisions
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Dedicated Specialists Across Every Travel Discipline.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 font-light">
              Every inquiry is routed directly to a dedicated destination expert with years of field residency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelExpertise.map((exp) => {
              const Icon = exp.icon
              return (
                <div
                  key={exp.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex flex-col justify-between hover:border-gold-400/40 transition"
                >
                  <div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#f6e5b4] mb-3">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-serif font-bold text-white">{exp.title}</h3>
                    <p className="mt-1 text-[11px] text-slate-300 font-light leading-relaxed">{exp.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-[#d7b36a] font-semibold">
                    {exp.tag}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: DOMESTIC TRAVEL (Overview, Hotels, Guides, Transport, Planning)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Crown className="h-3 w-3 text-[#d7b36a]" /> Domestic Travel Division
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Authentic India in Unprecedented Luxury.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                India is a continent of wonders: desert fortresses, backwater lagoons, high Himalayan passes, and ancient sacred riverbanks. Our domestic travel division eliminates logistical chaos through private airside greeters, chauffeured fleets, and palace suite buyouts.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Domestic Tour Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Palace & Boutique Stays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Private Fleet Logistics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Accredited English Guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Custom Family Itineraries</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>High-Altitude Adventures</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/destination/domestic"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  Explore Domestic Destinations →
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Custom Domestic Plan
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-72 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
                alt="Domestic Luxury Rajasthan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: 10 DOMESTIC DESTINATIONS (Detailed City Information)
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <MapPin className="h-3 w-3 text-[#d7b36a]" /> 10 Major Indian Destinations
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Our Signature Domestic Destinations.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                Complete overview, attractions, hotel recommendations, and starting tour prices.
              </p>
            </div>
            <Link
              to="/destination/domestic"
              className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-[#f6e5b4]"
            >
              All Domestic Routes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {domestic10Destinations.map((dest) => (
              <div
                key={dest.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-36 overflow-hidden">
                    <img src={dest.img} alt={dest.name} className="h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[9px] font-bold text-[#f6e5b4]">
                      {dest.state}
                    </span>
                  </div>
                  <div className="p-3.5">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-serif font-bold text-slate-900">{dest.name}</h3>
                      <span className="text-[10px] font-bold text-[#8a6b32]">{dest.price}</span>
                    </div>
                    <div className="mt-1 text-[10px] text-slate-400">
                      Best Time: <span className="text-slate-600 font-medium">{dest.bestTime}</span>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-600 font-light line-clamp-2">
                      <strong className="font-semibold text-slate-800">Must-See:</strong> {dest.places}
                    </p>
                    <div className="mt-2 text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100 line-clamp-2">
                      <strong className="font-semibold text-slate-700">Top Hotels:</strong> {dest.hotels}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">{dest.duration}</span>
                  <Link
                    to="/destination/domestic"
                    className="text-xs font-bold text-[#8a6b32] hover:underline"
                  >
                    View Destination →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: INTERNATIONAL TRAVEL (Visa, Flights, Support, Itineraries)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Globe2 className="h-3 w-3 text-[#d7b36a]" /> International Travel Division
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Global Travel Engineered for Peace of Mind.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Stepping onto foreign soil should evoke exhilaration, never anxiety. Our international team coordinates seamless end-to-end logistics from expedited visas and commercial airline priority seating to private airfield tarmac escorts.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Expedited Visa Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>First & Business Class Flights</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>International 5-Star Stays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Tarmac Airport Transfers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>Comprehensive Travel Insurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#d7b36a]" />
                  <span>24/7 Diplomatic Support</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/destination/international"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  Explore International Destinations →
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Request Visa & Flight Brief
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-72 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
                alt="International Luxury Paris"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: 10 INTERNATIONAL DESTINATIONS (Detailed City Information)
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Globe2 className="h-3 w-3 text-[#d7b36a]" /> 10 Major International Cities
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Our Signature Global Portfolios.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                Complete overview, highlights, duration, luxury hotels, and estimated package prices.
              </p>
            </div>
            <Link
              to="/destination/international"
              className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-[#f6e5b4]"
            >
              All International Portfolios
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {international10Destinations.map((dest) => (
              <div
                key={dest.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-36 overflow-hidden">
                    <img src={dest.img} alt={dest.name} className="h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[9px] font-bold text-[#f6e5b4]">
                      {dest.country}
                    </span>
                  </div>
                  <div className="p-3.5">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-serif font-bold text-slate-900">{dest.name}</h3>
                      <span className="text-[10px] font-bold text-[#8a6b32]">{dest.price}</span>
                    </div>
                    <div className="mt-1 text-[10px] text-slate-400">
                      Best Time: <span className="text-slate-600 font-medium">{dest.bestTime}</span>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-600 font-light line-clamp-2">
                      <strong className="font-semibold text-slate-800">Places:</strong> {dest.places}
                    </p>
                    <div className="mt-2 text-[10px] text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100 line-clamp-2">
                      <strong className="font-semibold text-slate-700">Recommended Hotels:</strong> {dest.hotels}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">{dest.duration}</span>
                  <Link
                    to="/destination/international"
                    className="text-xs font-bold text-[#8a6b32] hover:underline"
                  >
                    View Destination →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: TOUR EXPERIENCES (10 Distinct Categories)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Layers className="h-3 w-3 text-[#d7b36a]" /> Tour Experiences
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Curated Experiences Across Ten Dimensions.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
            Every journey category is calibrated around unique traveler passions and physical pacing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tourExperienceCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-32 overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="h-full w-full object-cover" />
                  <span className="absolute bottom-2 left-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[9px] font-bold text-[#f6e5b4]">
                    {cat.duration}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-serif font-bold text-slate-900">{cat.title}</h3>
                  <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">{cat.desc}</p>
                  <div className="mt-2 text-[10px] text-slate-500 font-medium">
                    Top Picks: {cat.best}
                  </div>
                </div>
              </div>

              <div className="p-3 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">From {cat.price}</span>
                <Link to={cat.route} className="text-xs font-bold text-[#8a6b32] hover:underline">
                  View Tours →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: TOUR PACKAGES (Detailed Booking Cards)
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Briefcase className="h-3 w-3 text-[#d7b36a]" /> Tour Packages
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Complete All-Inclusive Packages.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                Featuring luxury hotels, private transport, guided excursions, and guaranteed departure dates.
              </p>
            </div>
            <Link
              to="/tour-packages/family"
              className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-[#f6e5b4]"
            >
              All Packages
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Family Heritage Odyssey',
                dest: 'Jaipur • Udaipur • Ranthambore',
                duration: '7 Days / 6 Nights',
                hotel: '5-Star Heritage Palaces',
                transport: 'Chauffeured Mercedes SUV',
                meals: 'Daily Royal Breakfast & Dinners',
                price: '$2,680',
                rating: '4.96',
                avail: 'Available Year-Round',
                route: '/tour-packages/family',
                img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Amalfi Romance & Capri Yacht',
                dest: 'Positano • Capri • Ravello',
                duration: '6 Days / 5 Nights',
                hotel: 'Cliffside 5-Star Boutique Suite',
                transport: 'Private Riva Boat & Helicopter',
                meals: 'Michelin Dining & Terrace Breakfasts',
                price: '$2,850',
                rating: '5.0',
                avail: 'Limited Summer Departures',
                route: '/tour-packages/honeymoon',
                img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Alpine Glacier Ski Expedition',
                dest: 'Zermatt • St. Moritz • Lucerne',
                duration: '8 Days / 7 Nights',
                hotel: 'Thermal Spa Chalets',
                transport: 'Glacier Express Excellence Class',
                meals: 'Half-board Alpine Gourmet',
                price: '$3,450',
                rating: '4.98',
                avail: 'Winter Season Confirmed',
                route: '/tour-packages/adventure',
                img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Emirates Royal Desert Respite',
                dest: 'Dubai • Al Maha Desert Reserve',
                duration: '4 Days / 3 Nights',
                hotel: 'Private Plunge Pool Pavilion',
                transport: 'VIP Airport Limousine Escort',
                meals: 'Private Bedouin Royal Tent Dinners',
                price: '$1,420',
                rating: '4.92',
                avail: 'Immediate Departure Available',
                route: '/tour-packages/weekend',
                img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img src={pkg.img} alt={pkg.name} className="h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[9px] font-bold text-[#f6e5b4]">
                      ★ {pkg.rating}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-serif font-bold text-slate-900">{pkg.name}</h3>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">{pkg.dest}</div>
                    <div className="mt-3 space-y-1 text-[11px] text-slate-600">
                      <div><strong className="text-slate-800">Duration:</strong> {pkg.duration}</div>
                      <div><strong className="text-slate-800">Stays:</strong> {pkg.hotel}</div>
                      <div><strong className="text-slate-800">Transit:</strong> {pkg.transport}</div>
                      <div><strong className="text-slate-800">Dining:</strong> {pkg.meals}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase text-slate-400 block">From</span>
                    <span className="text-sm font-bold text-slate-900">{pkg.price}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <Link
                      to={pkg.route}
                      className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4]"
                    >
                      View Package
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: HOTEL EXPERIENCE (Offerings across 8 Tiers)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Building className="h-3 w-3 text-[#d7b36a]" /> Hotel Offerings
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Accommodations Curated Across Eight Tiers.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              From historic palace suites to overwater bungalows and secluded mountain chalets.
            </p>
          </div>
          <Link
            to="/tours/hotel-details"
            className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-[#f6e5b4]"
          >
            Hotel Details Page
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hotelTiers.map((h) => (
            <div
              key={h.category}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 overflow-hidden">
                  <img src={h.img} alt={h.category} className="h-full w-full object-cover" />
                  <span className="absolute bottom-2 left-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[9px] font-bold text-[#f6e5b4]">
                    {h.price}
                  </span>
                </div>
                <div className="p-3.5">
                  <h3 className="text-sm font-serif font-bold text-slate-900">{h.category}</h3>
                  <p className="mt-1 text-[11px] text-slate-600 font-light leading-relaxed">{h.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-1 text-[10px] text-slate-500">
                    {h.highlights.map((hl) => (
                      <span key={hl} className="rounded bg-slate-100 px-1.5 py-0.5">{hl}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3.5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  VIP Perks Included
                </span>
                <Link to="/tours/hotel-details" className="text-xs font-bold text-[#8a6b32] hover:underline">
                  View Hotels →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: TRANSPORTATION & TRAVEL SUPPORT (Interactive Visualization)
      ========================================================================= */}
      <section className="bg-[#111827] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
              <Car className="h-3 w-3 text-[#d7b36a]" /> Transit & Safety Suite
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Flawless Transportation & 24/7 Diplomatic Support.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 font-light">
              Every transition between airports, tracks, ports, and hotels is managed with military precision.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: 'Commercial Flights', icon: Plane, desc: 'Priority seating, business upgrades, and flexible re-routing support.' },
              { title: 'Airport Fast-Track', icon: Shield, desc: 'Tarmac limousine escort and diplomatic customs clearance.' },
              { title: 'Chauffeured Fleets', icon: Car, desc: 'Late-model Mercedes Maybach, Range Rover, and Rolls-Royce fleets.' },
              { title: 'Private Aircraft & Heli', icon: Compass, desc: 'Point-to-point jet charters and mountain helipad transfers.' },
              { title: 'Scenic Luxury Trains', icon: Train, desc: 'Glacier Express Excellence Class and Maharaja’s Express salons.' },
              { title: 'Private Yachts & Boats', icon: Anchor, desc: 'Crewed Mediterranean catamarans and Venetian wooden Riva watercraft.' },
              { title: 'Curated Tourist Coaches', icon: Bus, desc: 'Executive luxury mini-coaches for multi-gen family private groups.' },
              { title: 'Global Travel Insurance', icon: ShieldCheck, desc: 'Comprehensive medical evacuation and cancel-for-any-reason coverage.' },
              { title: 'Emergency Dispatch', icon: LifeBuoy, desc: 'Dedicated 24/7 field liasions on call in every destination.' },
              { title: 'Concierge Care 24/7', icon: Phone, desc: 'A human travel director answering questions in under 45 minutes.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#f6e5b4] mb-2">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-xs font-serif font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-[10px] text-slate-300 font-light leading-normal">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: WHY CHOOSE US (Trust Indicators & 10 Reasons)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <ShieldCheck className="h-3 w-3 text-[#d7b36a]" /> Trust & Integrity
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Ten Pillars of Trust.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
            Why our discerning clients return year after year for their most cherished journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {[
            { num: '01', title: 'Experienced Team', desc: '18+ years of field expertise and seasoned curators.' },
            { num: '02', title: 'Verified Hotels', desc: 'Only inspected 5-star properties and royal palaces.' },
            { num: '03', title: 'Handpicked Tours', desc: 'Every excursion personally vetted for cultural depth.' },
            { num: '04', title: 'Transparent Pricing', desc: 'Zero hidden fees, transparent all-inclusive quotes.' },
            { num: '05', title: '1:1 Custom Itineraries', desc: 'Every day calibrated around your personal bio-rhythm.' },
            { num: '06', title: 'Secure Booking', desc: 'Protected banking channels and strict bilateral NDAs.' },
            { num: '07', title: 'Local Experts', desc: 'Field directors living directly in the destination.' },
            { num: '08', title: '24/7 Field Support', desc: 'Never automated bots; dedicated human liaisons.' },
            { num: '09', title: '99.4% Satisfaction', desc: 'Over 42,000 delighted international voyagers.' },
            { num: '10', title: 'Virtuoso Member', desc: 'Preferred partner access to upgrades and VIP credits.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="text-xs font-serif font-bold text-[#8a6b32] block mb-1">{item.num}</span>
              <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
              <p className="mt-1 text-[11px] text-slate-600 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: FINAL TRAVEL CTA & COMPREHENSIVE FOOTER
      ========================================================================= */}
      <section className="bg-[#0b101b] text-white pt-16 pb-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Panoramic Final CTA Card */}
          <div className="rounded-2xl border border-white/20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 shadow-2xl mb-14 text-center max-w-3xl mx-auto">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4] mb-2">
              Start Your Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
              Your Journey Begins With Us.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              Connect with our master travel directors to begin charting your next extraordinary chapter with complete discretion and sovereign comfort.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/destination/domestic"
                className="rounded-full bg-[#d7b36a] px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-[#e5c98d] transition"
              >
                Explore Destinations
              </Link>
              <Link
                to="/tours/tour-details"
                className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Tours
              </Link>
              <Link
                to="/tour-packages/family"
                className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition"
              >
                Contact Travel Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}