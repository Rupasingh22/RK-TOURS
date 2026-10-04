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
  Briefcase,
  Layers,
  Car,
  Train,
  Bus,
  Shield,
  LifeBuoy,
  Check,
  CheckCircle,
  Navigation,
  Camera,
  Utensils,
  Palmtree,
  Gem,
  Headphones,
  Zap,
  BookOpen,
  Tag,
  Filter,
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
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-slate-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-slate-950/90"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-slate-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-slate-950/90"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* 10-Segment Progress Indicators */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-2 inset-x-0 z-20 flex justify-center gap-1 pointer-events-none">
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
// CURATED 10-IMAGE PHOTO BANKS (Verified High-Res Unsplash Images)
// =========================================================================

const heroServicesImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85',
]

// The 4 Specific Tours in src/Tour Packages
const pkgFamilyImages = [
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
]

const pkgHoneymoonImages = [
  'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
]

const pkgAdventureImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80',
]

const pkgWeekendImages = [
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
]

// =========================================================================
// DATA REPOSITORIES: 10 DOMESTIC & 10 INTERNATIONAL DESTINATIONS
// =========================================================================

const domesticDestinationsData = [
  {
    name: 'Delhi',
    state: 'National Capital Region',
    attractions: 'Humayun’s Tomb, Qutub Minar, Chandni Chowk, Rashtrapati Bhavan',
    bestPlaces: 'Lodhi Art District, Sunder Nursery, Red Fort Private Salons',
    activities: 'Private Mughal culinary tasting, curator-led museum walk, high-fashion boutique styling',
    bestTime: 'October to March',
    duration: '2 - 3 Days',
    tourOptions: 'Imperial Heritage Trail, Sufi Music & Cuisine Tour',
    hotelOptions: 'The Imperial, The Leela Palace, The Oberoi New Delhi',
    transport: 'Chauffeured Mercedes-Benz Fleet with English-speaking valet',
    price: '$850',
    img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Mumbai',
    state: 'Maharashtra Coast',
    attractions: 'Gateway of India, Marine Drive, Colaba Causeway, Bandra Bandstand',
    bestPlaces: 'Kala Ghoda Arts Precinct, Elephanta Caves by private yacht',
    activities: 'Sunset sailing in Mumbai Harbour, Art Deco heritage architectural walking tour',
    bestTime: 'November to February',
    duration: '3 - 4 Days',
    tourOptions: 'Bollywood Studio VIP Pass, Coastal Metropolis Voyage',
    hotelOptions: 'The Taj Mahal Palace, The Oberoi Mumbai, Four Seasons',
    transport: 'Private BMW 7-Series & luxury catamaran charters',
    price: '$950',
    img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    attractions: 'Amber Fort, City Palace, Hawa Mahal, Jantar Mantar Observatory',
    bestPlaces: 'Nahargarh Fort sunset ramparts, Anokhi Museum of Hand Printing',
    activities: 'Private royal palace dining, gemological master atelier appointments, polo match attendance',
    bestTime: 'October to March',
    duration: '3 - 4 Days',
    tourOptions: 'Royal Rajput Grandeur Tour, Artisan Block Printing Discovery',
    hotelOptions: 'Rambagh Palace, Rajmahal Palace, The Oberoi Rajvilas',
    transport: 'Vintage Rolls-Royce transfers & chauffeured luxury SUVs',
    price: '$1,250',
    img: 'https://images.unsplash.com/photo-1609137144822-0d1c79875f36?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Goa',
    state: 'West Coast',
    attractions: 'Palolem Beach, Fort Aguada, Fontainhas Latin Quarter, Cabo de Rama',
    bestPlaces: 'Divar Island, Chapora River backwaters, Butterfly Beach',
    activities: 'Private yacht sunset sailing, Portuguese ancestral villa dining, spice plantation lunch',
    bestTime: 'November to April',
    duration: '4 - 6 Days',
    tourOptions: 'Heritage Latin Quarter Walk, Private Catamaran Island Cruise',
    hotelOptions: 'Taj Exotica Resort, The St. Regis Goa, W Goa Coastal Villa',
    transport: 'Luxury open-top jeeps, private yachts, chauffeured sedans',
    price: '$1,100',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Kerala',
    state: 'South India',
    attractions: 'Alleppey Backwaters, Munnar Tea Valleys, Fort Kochi, Kumarakom',
    bestPlaces: 'Vembanad Lake, Periyar Wildlife Sanctuary, Marari Beach',
    activities: 'Private luxury cedar houseboat voyage, Ayurvedic physician consultation, Kathakali performance',
    bestTime: 'September to March',
    duration: '5 - 7 Days',
    tourOptions: 'Spice Coast Sanctuary, Backwater Private Houseboat Odyssey',
    hotelOptions: 'Kumarakom Lake Resort, Brunton Boatyard, Coconut Lagoon',
    transport: 'Air-conditioned luxury houseboats & chauffeured Innova Crysta',
    price: '$1,380',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Varanasi',
    state: 'Uttar Pradesh',
    attractions: 'Dashashwamedh Ghat, Assi Ghat, Kashi Vishwanath Temple, Sarnath',
    bestPlaces: 'Manikarnika Ghat sacred walkways, Ramnagar Fort, Silk Weavers Colony',
    activities: 'Dawn private wooden rowing boat on Ganges, VIP rooftop Ganga Aarti viewing, master silk weaving atelier',
    bestTime: 'October to March',
    duration: '2 - 3 Days',
    tourOptions: 'Spiritual Awakening Pilgrimage, Ancient Silk & Culinary Walk',
    hotelOptions: 'BrijRama Palace on Ganges, Taj Ganges, Nadesar Palace',
    transport: 'Electric private golf carts for Old City alleys & luxury sedans',
    price: '$890',
    img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Udaipur',
    state: 'Rajasthan',
    attractions: 'Lake Pichola, City Palace Complex, Jagmandir Island, Saheliyon Ki Bari',
    bestPlaces: 'Fateh Sagar Lake, Monsoon Palace high vantage, Bagore Ki Haveli',
    activities: 'Private solar boat cruise to Jagmandir, private Mewar dynasty curator tour, rooftop champagne dinner',
    bestTime: 'October to March',
    duration: '3 - 4 Days',
    tourOptions: 'Lakeside Romance Voyage, Royal Rajput Painting & Craft Tour',
    hotelOptions: 'Taj Lake Palace, The Oberoi Udaivilas, The Leela Palace',
    transport: 'Private royal motorboats on lake & luxury chauffeured sedans',
    price: '$1,550',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Manali',
    state: 'Himachal Pradesh',
    attractions: 'Solang Valley, Rohtang Pass, Old Manali, Hadimba Devi Temple',
    bestPlaces: 'Hampta Pass base, Jogini Waterfalls, Naggar Castle art gallery',
    activities: 'Helicopter transfer to high snow peaks, cedar forest guided trail, river trout gourmet picnic',
    bestTime: 'April to June & Dec to Feb',
    duration: '4 - 5 Days',
    tourOptions: 'Himalayan High Altitude Trek, Alpine Cedar Retreat',
    hotelOptions: 'The Himalayan Luxury Resort, Span Resort & Spa, Larisa Resort',
    transport: 'All-wheel drive luxury 4x4 SUVs & private helicopter charters',
    price: '$1,150',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Agra',
    state: 'Uttar Pradesh',
    attractions: 'Taj Mahal, Agra Fort, Fatehpur Sikri, Mehtab Bagh Gardens',
    bestPlaces: 'Itmad-ud-Daulah (Baby Taj), Sikandra Akbar Tomb, Mughal Heritage Walk',
    activities: 'VIP private sunrise viewing of Taj Mahal before public opening, after-hours moonlight garden viewing',
    bestTime: 'October to March',
    duration: '1 - 2 Days',
    tourOptions: 'Mughal Architecture Masterclass, Imperial Agra Sunrise Expedition',
    hotelOptions: 'The Oberoi Amarvilas (Taj Mahal view from all guest rooms)',
    transport: 'Private battery-operated luxury carts & Mercedes transfer from Delhi',
    price: '$780',
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Rishikesh',
    state: 'Uttarakhand',
    attractions: 'Ganges Riverfront, Lakshman Jhula, Beatles Ashram, Triveni Ghat',
    bestPlaces: 'Neer Garh Waterfalls, Vashishta Cave, Shivpuri rapids',
    activities: 'Private yoga masterclass with Himalayan yogi, Grade-IV white water rafting, sacred river sound bath',
    bestTime: 'September to May',
    duration: '3 - 4 Days',
    tourOptions: 'Himalayan Spiritual Awakening, River & Mountain Adventure',
    hotelOptions: 'Ananda in the Himalayas, The Roseate Ganges, Taj Rishikesh',
    transport: 'Private luxury SUVs with mountain-accredited master drivers',
    price: '$1,320',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80',
  },
]

const internationalDestinationsData = [
  {
    name: 'Paris',
    country: 'France',
    attractions: 'Eiffel Tower, Louvre Museum, Notre-Dame, Arc de Triomphe',
    bestPlaces: 'Montmartre artist quarter, Le Marais courtyards, Saint-Germain-des-Prés',
    activities: 'Private after-hours Louvre curator tour, vintage Riva yacht on Seine, Michelin 3-star dinner',
    bestTime: 'April to October',
    duration: '4 - 6 Days',
    tourOptions: 'Haute Couture Atelier Trail, Champagne Cellars Day Excursion',
    hotels: 'Ritz Paris, Le Meurice, Hôtel de Crillon, Four Seasons George V',
    transport: 'Private Mercedes Maybach with multilingual private chauffeur',
    price: '$2,850',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Dubai',
    country: 'United Arab Emirates',
    attractions: 'Burj Khalifa, Dubai Mall, Palm Jumeirah, Museum of the Future',
    bestPlaces: 'Al Fahidi Historic District, Al Maha Desert Reserve, Dubai Marina',
    activities: 'Private sunset helicopter flight over Palm, Royal desert dune private tent feast, superyacht cruise',
    bestTime: 'November to April',
    duration: '4 - 5 Days',
    tourOptions: 'Arabian Royal Respite, Ultra-Luxury Skyline & Desert Discovery',
    hotels: 'Burj Al Arab, Atlantis The Royal, Armani Hotel, One&Only The Palm',
    transport: 'Rolls-Royce Ghost transfers & private helicopter charters',
    price: '$2,450',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'London',
    country: 'United Kingdom',
    attractions: 'Tower of London, Buckingham Palace, British Museum, Westminster Abbey',
    bestPlaces: 'Mayfair art galleries, Kensington Palace Gardens, Covent Garden',
    activities: 'Private after-hours Crown Jewels viewing, VIP West End theatre royal box, private Thames charter',
    bestTime: 'May to September',
    duration: '4 - 6 Days',
    tourOptions: 'Royal Heritage & Aristocratic London, Cotswolds Private Estate Tour',
    hotels: 'The Savoy, Claridge’s, The Connaught, The Ritz London',
    transport: 'Private chauffeur-driven Range Rover Autobiography & Bentley',
    price: '$2,750',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    attractions: 'Marina Bay Sands, Gardens by the Bay, Jewel Changi, Sentosa Island',
    bestPlaces: 'Chinatown heritage shophouses, Botanic Gardens Orchid VIP room',
    activities: 'Private botanical master tour, rooftop Michelin-starred Cantonese banquet, night safari private buggy',
    bestTime: 'Year-round (Best Nov - Mar)',
    duration: '3 - 4 Days',
    tourOptions: 'Futuristic Garden City Tour, Peranakan Heritage & Gastronomy',
    hotels: 'Raffles Hotel Singapore, Capella Singapore, The Fullerton Bay Hotel',
    transport: 'Private chauffeured Mercedes S-Class with VIP airport jet lounge',
    price: '$1,950',
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    attractions: 'Ubud Sacred Monkey Forest, Uluwatu Sea Temple, Tanah Lot, Tegallalang',
    bestPlaces: 'Sidemen Valley emerald terraces, Nusa Penida hidden lagoons',
    activities: 'Private sunrise Balinese water purification blessing, cliffside private infinity dinner, bespoke wellness spa',
    bestTime: 'April to October',
    duration: '5 - 7 Days',
    tourOptions: 'Island Romance & Holistic Retreat, Volcano Sunrise & Spiritual Quest',
    hotels: 'Mandapa (Ritz-Carlton Reserve), Bulgari Resort Bali, Four Seasons Sayan',
    transport: 'Private luxury SUVs with dedicated Balinese cultural guide',
    price: '$2,100',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    attractions: 'Meiji Jingu Shrine, Shibuya Sky, Senso-ji Temple, Ginza High Fashion',
    bestPlaces: 'Yanaka historic preserved alleyways, Roppongi Hills Mori Art Museum',
    activities: 'Private audience with Tea Master, 3-Star Michelin omakase with master chef, Tsukiji tuna insider access',
    bestTime: 'March to May & Sept to Nov',
    duration: '5 - 7 Days',
    tourOptions: 'Tokyo Avant-Garde & Ancient Traditions, Mount Fuji Shinkansen Journey',
    hotels: 'Aman Tokyo, Hoshinoya Tokyo, The Tokyo Edition Toranomon',
    transport: 'First Class Gran Class Shinkansen & private luxury Alphard van',
    price: '$3,200',
    img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Switzerland',
    country: 'Switzerland',
    attractions: 'Matterhorn Peak, Jungfraujoch, Lake Lucerne, Chapel Bridge',
    bestPlaces: 'Zermatt car-free alpine hamlet, Lauterbrunnen 72 waterfalls valley',
    activities: 'Glacier Express Excellence Class panoramic journey, private alpine helicopter flight, cheese & watchmaker atelier',
    bestTime: 'Dec to April & June to Oct',
    duration: '6 - 8 Days',
    tourOptions: 'Alpine Peaks & Glacier Quest, Swiss Precision & Grand Luxury Lakes',
    hotels: 'Badrutt’s Palace St. Moritz, Bürgenstock Hotel, The Chedi Andermatt',
    transport: 'Glacier Express Excellence Class & private Swiss alpine transfers',
    price: '$3,650',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'New York',
    country: 'United States',
    attractions: 'Central Park, Empire State Building, Metropolitan Museum of Art, Broadway',
    bestPlaces: 'West Village historic brownstones, DUMBO waterfront skyline view',
    activities: 'Private helicopter skyline flight, Broadway VIP backstage access, curator-led MoMA morning tour',
    bestTime: 'April to June & Sept to Dec',
    duration: '4 - 6 Days',
    tourOptions: 'Manhattan High Society & Arts Trail, Hudson Valley Private Estate Day',
    hotels: 'Aman New York, The Carlyle, The Mark Hotel, The Plaza',
    transport: 'Private black Cadillac Escalade ESV with executive driver',
    price: '$3,100',
    img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Rome',
    country: 'Italy',
    attractions: 'Colosseum, Vatican Museums, Pantheon, Trevi Fountain',
    bestPlaces: 'Trastevere secret alleyways, Appian Way catacombs, Villa Borghese',
    activities: 'Private after-hours Vatican Sistine Chapel tour, private vintage Vespa tour, sommelier Chianti cellar tasting',
    bestTime: 'April to June & Sept to Oct',
    duration: '4 - 5 Days',
    tourOptions: 'Imperial Caesars & Renaissance Masters, Roman Culinary Dolce Vita',
    hotels: 'Hotel de Russie, Hassler Roma, J.K. Place Roma, Eden Dorchester',
    transport: 'Private Mercedes executive vans & vintage Italian sports car rentals',
    price: '$2,650',
    img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Maldives',
    country: 'Republic of Maldives',
    attractions: 'Baa Atoll Biosphere Reserve, Male Coral City, Ari Atoll Lagoon',
    bestPlaces: 'Private sandbank atoll, Hanifaru Bay manta ray sanctuary',
    activities: 'Private overwater villa private plunge pool, marine biologist guided night manta dive, underwater dining',
    bestTime: 'November to April',
    duration: '5 - 7 Days',
    tourOptions: 'Private Atoll Romance Haven, Marine Biosphere & Yacht Odyssey',
    hotels: 'Soneva Fushi, Cheval Blanc Randheli, The Ritz-Carlton Maldives',
    transport: 'Private twin-engine seaplanes & luxury yacht transfers',
    price: '$4,200',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=700&q=80',
  },
]

// =========================================================================
// THE EXACT 4 SIGNATURE TOURS PRESENT IN THE PROJECT
// (src/Tour Packages/FamilyTours, HoneymoonTours, ToursAdventure, WeekendTours)
// =========================================================================

const signature4Tours = [
  {
    id: 'family-tour',
    name: 'Family Dynasty Heritage Circuit',
    destination: 'North India & Rajasthan Palaces',
    route: '/tour-packages/family',
    heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
    images: pkgFamilyImages,
    duration: '7 Days / 6 Nights',
    price: '$2,680',
    priceSub: 'Per family unit (up to 4 guests)',
    rating: 4.96,
    reviews: 142,
    category: 'Family Tours',
    badge: 'Premier Family Package',
    placesCovered: ['Delhi', 'Agra', 'Ranthambore Tiger Reserve', 'Jaipur'],
    summary: 'A harmoniously paced journey engineered specifically for multi-generational comfort, combining royal palace suites, private open-top tiger safaris, and engaging cultural ateliers.',
    itinerarySchedule: [
      { day: 'Day 01', title: 'Imperial Welcome in New Delhi', details: 'VIP tarmac greeting, transfer to The Imperial, welcome high tea, private family rickshaw ride in Old Delhi.' },
      { day: 'Day 02', title: 'Wonders of Agra & Taj Mahal', details: 'Chauffeured transit to Oberoi Amarvilas, private sunset visit to the Taj Mahal with professional family portrait photographer.' },
      { day: 'Day 03', title: 'Ghost City of Fatehpur Sikri to Tiger Territory', details: 'Private luxury coach to Ranthambore, evening wildlife lecture by conservation director around the campfire.' },
      { day: 'Day 04', title: 'Royal Bengal Tiger Expeditions', details: 'Dawn and dusk private 4x4 open-top jeep safaris through Zone 3, spot leopards, sloth bears, and majestic tigers.' },
      { day: 'Day 05', title: 'Pink City of Jaipur & Royal Palaces', details: 'Check-in to Rambagh Palace, private family elephant greeting, evening royal courtyard folk puppet and musical performance.' },
      { day: 'Day 06', title: 'Amber Fort Ramparts & Block Printing Masterclass', details: 'Private early morning jeep ascent to Amber Fort, hands-on block printing workshop for kids at Anokhi Museum.' },
      { day: 'Day 07', title: 'Grand Farewell & VIP Departure', details: 'Palace champagne brunch, private chauffeur return to New Delhi International Airport for outbound flights.' },
    ],
    hotelInfo: '5-Star Royal Palace Accommodations (The Imperial New Delhi, Oberoi Amarvilas Agra, Oberoi Vanyavilas Ranthambore, Rambagh Palace Jaipur)',
    meals: 'Full board: Daily gourmet breakfasts, curated child-friendly dining menus, royal heritage courtyard dinners',
    transport: 'Private Mercedes-Benz Executive Sprinter Van with dedicated driver, bottled mineral water, and onboard WiFi',
    guideInfo: 'Accredited Senior Family Historian & Child Experience Specialist throughout the circuit',
    inclusions: [
      '6 nights luxury suite palace accommodation',
      'All monument VIP fast-track admission tickets',
      '2 private 4x4 open-top wildlife safaris in Ranthambore',
      'Dedicated private luxury vehicle with chauffeur',
      'Professional family vacation photographer session in Agra',
      '24/7 dedicated family concierge lifeline',
    ],
    exclusions: [
      'International and domestic flights',
      'Discretionary personal expenses and shopping',
      'Travel visa fees and insurance riders',
    ],
    bestTime: 'October through March',
    groupSize: 'Private Family (2 to 8 Travelers)',
    availability: 'Guaranteed Daily Departures',
    cancellation: '100% full refund up to 14 days prior to travel; flexible rebooking up to 48 hours before arrival',
  },
  {
    id: 'honeymoon-tour',
    name: 'Amalfi Romance & Cliffside Villa Escape',
    destination: 'Positano • Capri • Ravello • Amalfi Coast',
    route: '/tour-packages/honeymoon',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    images: pkgHoneymoonImages,
    duration: '6 Days / 5 Nights',
    price: '$2,850',
    priceSub: 'Per couple (all-inclusive romance)',
    rating: 5.0,
    reviews: 188,
    category: 'Honeymoon Tours',
    badge: 'Ultimate Romance Sanctuary',
    placesCovered: ['Naples Bay', 'Positano', 'Isle of Capri', 'Ravello Gardens'],
    summary: 'The pinnacle of private intimacy: dramatic cliffside terraces overlooking azure waters, private wooden Riva boat excursions to Capri Faraglioni, and candlelit Michelin-starred dining.',
    itinerarySchedule: [
      { day: 'Day 01', title: 'Helicopter Arrival in Positano', details: 'VIP tarmac greeting at Naples, scenic helicopter flight to cliffside helipad, welcome vintage champagne on private terrace.' },
      { day: 'Day 02', title: 'Private Riva Boat to Isle of Capri', details: 'Full-day charter aboard a classic wooden Riva yacht, swimming in the Green and White Grottos, cliffside lunch at La Fontelina.' },
      { day: 'Day 03', title: 'Romantic Path of the Gods & Sunset Tasting', details: 'Private guided gentle walk along scenic panoramic cliffs, private wine tasting at century-old cliffside vineyard.' },
      { day: 'Day 04', title: 'High Ravello & Classical Music Gardens', details: 'Chauffeured vintage Alfa Romeo transfer to Villa Cimbrone, private violin serenade at the Terrace of Infinity.' },
      { day: 'Day 05', title: 'Couples Spa & Private Beach Cove Dinner', details: 'Thermal sea salt body rituals, sunset candlelight 7-course private tasting dinner directly on secluded private beach.' },
      { day: 'Day 06', title: 'Champagne Farewell & Departure', details: 'Balcony breakfast with fresh pastries, private Mercedes Maybach transfer to Naples Airport.' },
    ],
    hotelInfo: '5-Star Cliffside Boutique Honeymoon Suites with Private Heated Plunge Pool (Le Sirenuse Positano, Belmond Hotel Caruso Ravello)',
    meals: 'Daily champagne breakfast served in-suite, private cliffside Michelin dinners, yacht tapas with prosecco',
    transport: 'Private Riva motorboat charter, Mercedes Maybach sedan, and Naples scenic helicopter connection',
    guideInfo: 'Discreet Private Experience Curator and Sommelier on call throughout your stay',
    inclusions: [
      '5 nights luxury cliffside plunge pool suite accommodation',
      'Full-day private Riva yacht charter around Capri & Grottos',
      'Couple’s 90-minute therapeutic massage ritual',
      'Private 7-course seaside candlelit dining experience',
      'VIP luggage handling and private helicopter arrival',
      '24/7 dedicated romantic concierge desk',
    ],
    exclusions: [
      'Transatlantic or international airfares',
      'Discretionary cellar wine reserve upgrades',
      'Personal purchases and gratuities',
    ],
    bestTime: 'April through October',
    groupSize: 'Private Couple (Strictly 2 Guests)',
    availability: 'Instant Reservation Available',
    cancellation: 'Free date rescheduling or 100% refund up to 21 days before departure',
  },
  {
    id: 'adventure-tour',
    name: 'Swiss Alpine Glacier & Peak Expedition',
    destination: 'Zermatt • St. Moritz • Lucerne • Matterhorn',
    route: '/tour-packages/adventure',
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
    images: pkgAdventureImages,
    duration: '8 Days / 7 Nights',
    price: '$3,450',
    priceSub: 'Per explorer (small expedition)',
    rating: 4.98,
    reviews: 96,
    category: 'Adventure Tours',
    badge: 'High-Altitude Alpine Quest',
    placesCovered: ['Zurich', 'Lucerne Lake', 'Zermatt Matterhorn', 'St. Moritz Glacier'],
    summary: 'A thrilling high-adrenaline expedition navigating towering glaciers, panoramic high-altitude treks, and scenic alpine helicopters, balanced with thermal spa chalets.',
    itinerarySchedule: [
      { day: 'Day 01', title: 'Arrival Zurich & Lake Lucerne Alpine Base', details: 'VIP meet and transfer, check-in to Bürgenstock Hotel, private evening sunset catamaran on Lake Lucerne.' },
      { day: 'Day 02', title: 'Mount Pilatus Dragon Ridge & Cogwheel Ascent', details: 'Ascend the world’s steepest cogwheel railway, guided ridge hike with alpine safety specialist, panoramic summit fondue.' },
      { day: 'Day 03', title: 'Glacier Express Excellence Class to Zermatt', details: 'Board the legendary panoramic train in Excellence Class with 5-course gourmet pairing, arrive at car-free Zermatt.' },
      { day: 'Day 04', title: 'Matterhorn Glacier Paradise & Ice Palace Trek', details: 'Cableway ascent to 3,883m, guided crampon trek inside Gorner Glacier crevasse caves with certified IFMGA guide.' },
      { day: 'Day 05', title: 'Helicopter Flight over Alpine Massifs', details: 'Private Air Zermatt helicopter flight around the Matterhorn north face, high-altitude alpine champagne landing.' },
      { day: 'Day 06', title: 'Alpine Chalet St. Moritz & Thermal Spa', details: 'Scenic transfer across Albula Pass to St. Moritz, mineral spring thermal baths and restorative muscle recovery spa.' },
      { day: 'Day 07', title: 'Diavolezza Glacier Trek & Black Pine Forest Trail', details: 'Glacier walk with ice picks across Pers Glacier, evening celebratory raclette banquet in high mountain hut.' },
      { day: 'Day 08', title: 'Descent to Zurich & Departure', details: 'First Class Swiss Rail connection to Zurich International Airport for return journeys.' },
    ],
    hotelInfo: '5-Star Alpine Thermal Spa Chalets & Mountain Lodges (Bürgenstock Alpine Spa, Mont Cervin Palace Zermatt, Badrutt’s Palace St. Moritz)',
    meals: 'High-energy organic breakfasts, mountain hut artisan cheese luncheons, 5-course Excellence Class gourmet dining',
    transport: 'Glacier Express Excellence Class, private helicopters, mountain cableways, First Class Swiss Travel Rail Pass',
    guideInfo: 'IFMGA / UIAGM Certified Swiss Alpine Mountain Guides & Wilderness Emergency Medics',
    inclusions: [
      '7 nights premier alpine thermal spa lodge accommodation',
      'All technical climbing and glacier crampon safety gear',
      'Glacier Express Excellence Class guaranteed panoramic seating',
      'Private helicopter scenic mountain flight around Matterhorn',
      'Unlimited First Class Swiss Rail and mountain cableway pass',
      '24/7 mountain safety tracking and emergency air rescue insurance',
    ],
    exclusions: [
      'International long-haul flights',
      'Personal alpine outerwear and ski clothing',
      'Extreme off-piste unguided excursions',
    ],
    bestTime: 'December - April (Ski/Snow) or July - September (Alpine Trek)',
    groupSize: 'Small Guided Expedition (Max 6 Explorers)',
    availability: 'Guaranteed Weekly Departures',
    cancellation: '100% refund up to 30 days prior; emergency weather flexibility guaranteed',
  },
  {
    id: 'weekend-tour',
    name: 'Emirates Royal Respite & Desert Oasis',
    destination: 'Dubai Skyline & Al Maha Desert Reserve',
    route: '/tour-packages/weekend',
    heroImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
    images: pkgWeekendImages,
    duration: '4 Days / 3 Nights',
    price: '$1,420',
    priceSub: 'Per guest (luxurious city break)',
    rating: 4.92,
    reviews: 210,
    category: 'Weekend Tours',
    badge: 'Curated 4-Day Quick Escape',
    placesCovered: ['Downtown Dubai', 'Dubai Creek & Gold Souk', 'Al Maha Desert Reserve'],
    summary: 'The ultimate condensed luxury break designed for discerning professionals seeking opulent city skyline dining, private desert dune plunge pool pavilions, and zero-hassle VIP logistics.',
    itinerarySchedule: [
      { day: 'Day 01', title: 'VIP Jet Bridge Escort & Skyline Penthouse', details: 'Tarmac fast-track customs clearance, Rolls-Royce transfer to Armani Hotel inside Burj Khalifa, private rooftop sunset aperitif.' },
      { day: 'Day 02', title: 'Old Dubai Waterways & Private Desert Pavilion', details: 'Morning private wooden abra cruise across Dubai Creek, afternoon chauffeur to Al Maha Luxury Desert Resort with private heated pool.' },
      { day: 'Day 03', title: 'Royal Falconry Masterclass & Dune Sunset Feast', details: 'Dawn falconry demonstration with Arabian oryx, afternoon camel trek over crimson dunes, private candlelit dinner under the stars.' },
      { day: 'Day 04', title: 'Spa Rejuvenation & Luxury Tarmac Return', details: 'Morning timeless spa treatment, private luxury SUV return to Dubai International Airport VIP Terminal.' },
    ],
    hotelInfo: 'Ultra-Luxury City & Desert Pavilions (Armani Hotel Dubai, Al Maha Desert Resort & Spa Private Plunge Pool Villa)',
    meals: 'Full board: Daily gourmet breakfasts, desert bedouin feasts with live acoustic oud, Burj Khalifa skyline dining',
    transport: 'Rolls-Royce Ghost airport transfers & private luxury 4x4 desert safari fleet',
    guideInfo: 'Dedicated 24/7 Lifestyle Concierge and certified Desert Wildlife Conservationist',
    inclusions: [
      '3 nights ultra-luxury private villa & skyline penthouse stays',
      'VIP Dubai Airport tarmac fast-track customs clearance',
      'All meals and non-alcoholic premium beverage pairings',
      'Private desert wildlife safari and falconry masterclass',
      'Complimentary 60-minute desert therapeutic spa massage',
      'Roundtrip private luxury chauffeur transfers',
    ],
    exclusions: [
      'International flight tickets',
      'Premium vintage alcoholic spirits',
      'Personal luxury boutique shopping in Dubai Mall',
    ],
    bestTime: 'October through April',
    groupSize: '2 to 4 Guests (Individual or Double Couples)',
    availability: 'Thursday to Sunday Weekly Departures',
    cancellation: 'Free cancellation or date reschedule up to 7 days before departure',
  },
]

// =========================================================================
// SECTION 16: DAY-BY-DAY INTERACTIVE TIMELINE DATA
// =========================================================================

const sampleItineraryDays = [
  {
    day: 'Day 01',
    phase: 'Arrival & Royal Reception',
    time: '09:00 AM - 08:30 PM',
    location: 'New Delhi • Lutyens Heritage Zone',
    headline: 'VIP Tarmac Greeting & Imperial Heritage Check-In',
    summary: 'Arrive at Indira Gandhi International Airport where your dedicated private airport concierge receives you directly at the aircraft jet bridge with expedited customs clearance.',
    activities: [
      'Chauffeured Mercedes-Maybach transfer to The Imperial New Delhi',
      'Personalized in-suite check-in with cold-pressed jasmine towels & welcome champagne',
      'Afternoon private curated orientation walk through the Lutyens architectural bungalows',
      'Evening 5-course welcome gala dinner at 1911 Restaurant with live classical sitar',
    ],
    hotel: 'The Imperial New Delhi (Heritage Grand Suite)',
    meals: 'Gourmet Afternoon High Tea & Royal 5-Course Welcome Dinner',
    transit: 'Private Mercedes-Maybach S-Class with dedicated English-speaking chauffeur',
    notes: 'Luggage is unpacked and pressed by your private butler upon suite arrival.',
  },
  {
    day: 'Day 02',
    phase: 'Old Delhi Mysteries & Curated Salons',
    time: '08:00 AM - 09:00 PM',
    location: 'Old Delhi • Shahjahanabad • Chandni Chowk',
    headline: 'Mughal Architecture & Private Spice Atelier Walk',
    summary: 'Journey back 400 years into the vibrant heart of the Mughal capital with our master historian, bypassing standard tourist circuits for private rooftop vistas and hidden courtyards.',
    activities: [
      'Private dawn visit to Jama Masjid courtyard before standard opening hours',
      'Exclusive electric-rickshaw journey through the Khari Baoli spice master bazaar',
      'Private rooftop tea tasting overlooking the Red Fort marble ramparts',
      'Curator-led afternoon walk through Humayun’s Tomb Persian water gardens',
      'Evening tasting salon of heirloom Awadhi royal recipes hosted by a culinary author',
    ],
    hotel: 'The Imperial New Delhi (Heritage Grand Suite)',
    meals: 'Breakfast at The Atrium, heirloom Awadhi lunch, private dining salon',
    transit: 'Private air-conditioned luxury Mercedes Sprinter & electric VIP rickshaws',
    notes: 'Modest attire recommended for morning monument visits; linen wraps provided.',
  },
  {
    day: 'Day 03',
    phase: 'The Jewel of the Golden Age',
    time: '07:30 AM - 08:00 PM',
    location: 'Yamuna Expressway • Agra Fort • Taj Mahal',
    headline: 'Express Transit to Agra & Private Taj Sunset Vantage',
    summary: 'Glide down the express corridor to Agra and check into The Oberoi Amarvilas, where every single guest suite features an unobstructed, direct panoramic view of the Taj Mahal.',
    activities: [
      'Private express transfer in Mercedes-Benz fleet with onboard refreshments',
      'Check-in to Oberoi Amarvilas with private balcony Taj Mahal panorama',
      'Afternoon private tour of Agra Fort including the private chambers of Shah Jahan',
      'Private sunset viewing from Mehtab Bagh gardens directly across the reflective Yamuna River',
      'Candlelight dinner on private suite balcony with direct illuminated Taj Mahal backdrop',
    ],
    hotel: 'The Oberoi Amarvilas (Premier Taj View Balcony Suite)',
    meals: 'Artisan breakfast, poolside lunch at Amarvilas, private candlelit balcony dinner',
    transit: 'Private Mercedes Maybach & electric golf cart access directly to monument gates',
    notes: 'Special night photography equipment and tripod permissions pre-arranged.',
  },
  {
    day: 'Day 04',
    phase: 'Sunrise Wonder & Wildlife Oasis',
    time: '05:30 AM - 09:30 PM',
    location: 'Taj Mahal Sunrise • Ranthambore Tiger Reserve',
    headline: 'Private VIP Sunrise at Taj Mahal & Journey to Tiger Country',
    summary: 'Experience the Taj Mahal in total tranquility at the crack of dawn as the first sun rays illuminate the translucent Makrana white marble, followed by a scenic drive to the wilderness.',
    activities: [
      'VIP early-access sunrise entry through the East Gate before general crowds arrive',
      'Dedicated private architectural photography guide for iconic sunrise shots',
      'Return to Amarvilas for champagne breakfast on the garden terrace',
      'Scenic private drive to Ranthambore National Park with private safari lodge arrival',
      'Evening campfire discussion with the park conservation director on tiger preservation',
    ],
    hotel: 'The Oberoi Vanyavilas (Luxury Heated Canvas Pavilion)',
    meals: 'Sunrise tea service, terrace champagne breakfast, wild organic camp dinner',
    transit: 'Private luxury Mercedes SUV & open-top custom 4x4 safari vehicle',
    notes: 'Bring a light fleece layer for early morning and evening safari drives.',
  },
  {
    day: 'Day 05',
    phase: 'Wild Predators & Royal Palaces',
    time: '06:00 AM - 09:00 PM',
    location: 'Ranthambore Zones • Pink City Jaipur',
    headline: 'Dawn Royal Bengal Tiger Safari & Jaipur Palace Arrival',
    summary: 'Embark on a private 4x4 safari deep into the ancient deciduous forests of Ranthambore under the guidance of our veteran tracker, followed by a royal arrival in the Pink City.',
    activities: [
      'Early morning private 4x4 wildlife safari tracking Royal Bengal tigers and leopards',
      'Post-safari breakfast at Vanyavilas, followed by scenic transit to Jaipur',
      'Grand arrival at Rambagh Palace with floral welcome and traditional Shehnai music',
      'Sunset vintage car drive through the pink sandstone bazaars to Nahargarh Fort',
      'Private royal Rajasthani Thali banquet in the Suvarna Mahal mirrored ballroom',
    ],
    hotel: 'Rambagh Palace Jaipur (Palace Historical Suite)',
    meals: 'Wilderness breakfast, country estate lunch, Suvarna Mahal royal banquet',
    transit: 'Custom 4x4 safari vehicle & vintage 1930s classic car for city tour',
    notes: 'High-power Leica binoculars provided for all safari participants.',
  },
  {
    day: 'Day 06',
    phase: 'Amber Fort Grandeur & Royal Departure',
    time: '07:30 AM - 08:00 PM',
    location: 'Amber Fort • City Palace • New Delhi Airport',
    headline: 'Private Amber Fort Ramparts & VIP Airport Departure Transfer',
    summary: 'Ascend the dramatic hill fortress of Amber via private early morning jeep, view the dazzling Sheesh Mahal mirror palace with the curator, and conclude with an effortless departure.',
    activities: [
      'Early morning private jeep ascent to Amber Fort before public opening',
      'Private access to the restored private apartments of the Maharaja inside City Palace',
      'Master artisan gemology and royal block printing demonstration at private atelier',
      'Farewell afternoon royal high tea on the Rambagh Palace lawns with peafowls',
      'Chauffeured return to New Delhi International Airport for VIP international boarding',
    ],
    hotel: 'Day-use suite at Rambagh Palace until evening departure',
    meals: 'Palace buffet breakfast, private courtyard luncheon, celebratory farewell tea',
    transit: 'Private Mercedes-Maybach to New Delhi International Airport VIP Terminal',
    notes: 'Flight check-in and tax-free export documentation completed by our airport escort.',
  },
]

// =========================================================================
// MAIN SERVICES COMPONENT (20 LARGE, DETAILED, PREMIUM SECTIONS)
// =========================================================================

function Services() {
  // Section 15: Active Signature Tour State
  const [activeTourIndex, setActiveTourIndex] = useState(0)

  // Section 16: Active Itinerary Day State
  const [activeDayIndex, setActiveDayIndex] = useState(0)

  // Section 17: Interactive Custom Trip State
  const [customRegion, setCustomRegion] = useState('domestic')
  const [customDuration, setCustomDuration] = useState('5-7')
  const [customStyle, setCustomStyle] = useState('luxury')
  const [customGuests, setCustomGuests] = useState(2)

  // Section 04: Domestic Destination Filter
  const [domesticFilter, setDomesticFilter] = useState('all')

  const filteredDomestic = domesticDestinationsData.filter((d) => {
    if (domesticFilter === 'all') return true
    if (domesticFilter === 'heritage') return ['Delhi', 'Jaipur', 'Agra', 'Udaipur'].includes(d.name)
    if (domesticFilter === 'coastal') return ['Mumbai', 'Goa', 'Kerala'].includes(d.name)
    if (domesticFilter === 'mountain') return ['Manali', 'Rishikesh'].includes(d.name)
    if (domesticFilter === 'spiritual') return ['Varanasi', 'Rishikesh'].includes(d.name)
    return true
  })

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-slate-900 font-sans selection:bg-[#d7b36a]/30">

      {/* =========================================================================
          SECTION 01: CINEMATIC SERVICES HERO
          - Full-width panoramic carousel rotating every 1 sec
          - Powerful headline, intro, breadcrumbs, CTA buttons, live stats
      ========================================================================= */}
      <section className="relative overflow-hidden px-4 pt-4 pb-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-slate-200/80 shadow-[0_32px_80px_rgba(15,23,42,0.14)]">
          {/* 10-Image Dynamic Auto-Rotating Hero Carousel */}
          <DynamicImageCarousel
            images={heroServicesImages}
            alt="RK Tour Luxury Services"
            className="h-[520px] sm:h-[620px] lg:h-[720px] w-full"
            interval={1000}
            showControls={true}
            showDots={true}
            overlayGradient={true}
          />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-14 text-white pointer-events-none">
            {/* Top Bar: Breadcrumb & Exclusive Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
              <nav className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/40 px-3.5 py-1 text-xs backdrop-blur-md">
                <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
                <span className="text-[#f6e5b4]">/</span>
                <span className="font-semibold text-[#f6e5b4]">Services Portfolio</span>
              </nav>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-slate-950/60 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#f6e5b4] backdrop-blur-md">
                <Crown className="h-3.5 w-3.5 text-[#d7b36a]" />
                World-Class Travel Architecture
              </div>
            </div>

            {/* Central Narrative */}
            <div className="max-w-3xl pointer-events-auto my-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#f6e5b4] backdrop-blur-md mb-4 border border-white/15">
                <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" />
                Uncompromising White-Glove Global Hospitality
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]">
                The Art of Seamless Travel Across Continents.
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-200 font-light leading-relaxed max-w-2xl">
                From personalized palace itineraries and private aviation to vetted 5-star sanctuaries and 24/7 dedicated field concierges, we orchestrate every nuance of your journey with meticulous precision.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#services-catalog"
                  className="rounded-xl bg-[#d7b36a] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 hover:bg-[#e5c98d] transition shadow-lg hover:shadow-xl"
                >
                  Explore Services ↓
                </a>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/30 bg-slate-950/50 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 transition backdrop-blur-md"
                >
                  Plan Your Journey →
                </Link>
              </div>
            </div>

            {/* Bottom Strip: 4 Live Trust Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 pointer-events-auto">
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">18+</div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-light uppercase tracking-wider mt-0.5">Years Heritage</div>
              </div>
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">42+</div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-light uppercase tracking-wider mt-0.5">Countries Served</div>
              </div>
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">99.4%</div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-light uppercase tracking-wider mt-0.5">Client Satisfaction</div>
              </div>
              <div className="rounded-xl bg-slate-950/50 border border-white/10 p-3 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-serif font-bold text-[#f6e5b4]">45,000+</div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-light uppercase tracking-wider mt-0.5">Bespoke Journeys</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: COMPLETE TRAVEL SERVICES (The 6-Stage Journey Architecture)
          - Discover -> Plan -> Book -> Travel -> Experience -> Support
          - Major service categories overview
      ========================================================================= */}
      <section id="services-catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Layers className="h-3.5 w-3.5 text-[#d7b36a]" /> Unified Travel Platform
          </div>
          <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-slate-900 tracking-tight">
            Complete Travel Services Under One Roof.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Eliminate fragmented bookings. We bridge discovery, private transport, palace sanctuaries, and field concierges into an effortless, single-point travel ecosystem.
          </p>
        </div>

        {/* 6-Stage Journey Pipeline Visualization */}
        <div className="mb-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            Our 6-Phase Traveler Lifecycle
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { phase: '01', title: 'Discover', desc: 'Browse 65+ curated regional & global portfolios with verified seasonal intelligence.', icon: Compass },
              { phase: '02', title: 'Plan', desc: 'Collaborate 1-on-1 with dedicated destination masters to tailor pacing and hotels.', icon: Sliders },
              { phase: '03', title: 'Book', desc: 'Transparent, all-inclusive escrow billing with guaranteed rates and no hidden extras.', icon: CheckCircle2 },
              { phase: '04', title: 'Travel', desc: 'VIP airport tarmac fast-tracks, chauffeured Maybachs, and private rail carriages.', icon: Plane },
              { phase: '05', title: 'Experience', desc: 'Private after-hours museum entries, private yacht charters, and palace banquets.', icon: Sparkles },
              { phase: '06', title: 'Support', desc: '24/7 dedicated personal concierge with real-time WhatsApp lifeline worldwide.', icon: Headphones },
            ].map((st) => {
              const Icon = st.icon
              return (
                <div key={st.phase} className="rounded-xl border border-slate-100 bg-[#f8f5f0] p-4 text-center">
                  <div className="h-8 w-8 mx-auto rounded-full bg-slate-900 text-[#f6e5b4] flex items-center justify-center text-xs font-bold font-serif mb-2">
                    {st.phase}
                  </div>
                  <h3 className="text-sm font-serif font-bold text-slate-900 mb-1">{st.title}</h3>
                  <p className="text-[11px] text-slate-600 font-light leading-relaxed">{st.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* 10 Major Service Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { title: 'Domestic Travel', desc: 'Palace circuits, coastal villas, and high-altitude Himalayan retreats.', route: '/destination/domestic', icon: Crown },
            { title: 'International Travel', desc: 'European capitals, Arabian skyline luxury, and private tropical atolls.', route: '/destination/international', icon: Globe2 },
            { title: 'Guided Signature Tours', desc: 'Handcrafted sightseeing routes with accredited master historians.', route: '/tours/tour-details', icon: Compass },
            { title: 'All-Inclusive Packages', desc: 'Multi-day guaranteed itineraries with hotels, meals, and guides.', route: '/tour-packages/family', icon: Briefcase },
            { title: 'Hotel Sanctuaries', desc: 'Vetted 5-star royal palaces, mountain chalets, and boutique villas.', route: '/tours/hotel-details', icon: Building },
            { title: 'Flights & Aviation', desc: 'First/Business Class airline ticketing and private helicopter charters.', route: '/services', icon: Plane },
            { title: 'Chauffeured Transit', desc: 'Mercedes-Benz sedans, executive coaches, and high-speed rail.', route: '/services', icon: Car },
            { title: 'Travel Assistance', desc: 'Expedited visas, comprehensive medical coverage, and forex hedging.', route: '/contact', icon: ShieldCheck },
            { title: 'Customized Trips', desc: 'Interactive journey architecture tuned to your budget and interests.', route: '#customized-travel', icon: Sliders },
            { title: 'Corporate & MICE', desc: 'Executive retreats, international summits, and incentive expeditions.', route: '#corporate-travel', icon: Users },
          ].map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.title}
                href={cat.route.startsWith('#') ? cat.route : undefined}
                onClick={(e) => {
                  if (!cat.route.startsWith('#')) return
                  e.preventDefault()
                  document.querySelector(cat.route)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-gold-400/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-9 w-9 rounded-xl bg-[#fffaf1] border border-gold-300/40 text-[#8a6b32] flex items-center justify-center mb-3 group-hover:bg-slate-900 group-hover:text-[#f6e5b4] transition">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                    {cat.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-slate-500 font-light leading-normal">{cat.desc}</p>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#8a6b32]">
                  <span>Explore Service</span>
                  <span>→</span>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: DOMESTIC TOUR PLANNING (Personalized Itineraries & Budget)
          - Deep breakdown of domestic tour creation
          - Sample Itinerary showcase: Royal Rajasthan Panorama (5 Days)
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Crown className="h-3 w-3 text-[#d7b36a]" /> Domestic Itinerary Atelier
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-slate-900 tracking-tight">
                Architecting Personalized Journeys Across India.
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                India is not a monolithic destination; it is a continent of contrasting kingdoms. Our domestic planning team eliminates logistical friction, matching you with private palace corridors, private safaris, and hand-selected drivers.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-white p-3.5 border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 font-serif">Tailor-Made Pacing</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Paced for leisurely mornings, avoiding midday heat and rushed travel days.</p>
                </div>
                <div className="rounded-xl bg-white p-3.5 border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 font-serif">Verified Chauffeurs</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">English-speaking, defensive-driving certified valets with dedicated luxury SUVs.</p>
                </div>
                <div className="rounded-xl bg-white p-3.5 border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 font-serif">Palace & Heritage Keys</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Guaranteed upgrades to historical suites in Rambagh, Amarvilas, and Udaivilas.</p>
                </div>
                <div className="rounded-xl bg-white p-3.5 border border-slate-200 shadow-sm">
                  <div className="font-bold text-slate-900 font-serif">Custom Family & Couple</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Specialized amenities for multi-generational families or private honeymoon seclusion.</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#f6e5b4] hover:bg-slate-800 transition shadow"
                >
                  Consult Domestic Specialist →
                </Link>
                <Link
                  to="/destination/domestic"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition"
                >
                  View Indian Destinations
                </Link>
              </div>
            </div>

            {/* Right: Interactive Sample Domestic Itinerary Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a6b32]">Sample Itinerary</span>
                    <h3 className="text-lg font-serif font-bold text-slate-900">Royal Rajasthan Panorama</h3>
                    <div className="text-xs text-slate-500">Jaipur • Jodhpur • Udaipur</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase text-slate-400 block">Starting From</span>
                    <span className="text-base font-bold text-slate-900">$850 <span className="text-xs font-normal text-slate-500">/ person</span></span>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#f8f5f0]">
                    <div className="h-6 w-6 rounded-full bg-slate-900 text-[#f6e5b4] flex items-center justify-center font-serif text-[10px] shrink-0 font-bold">D1-2</div>
                    <div>
                      <strong className="text-slate-800">Jaipur (Pink City):</strong> Private courtyard welcome at Rambagh Palace, Amber Fort jeep ascent, gemstone atelier visit.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#f8f5f0]">
                    <div className="h-6 w-6 rounded-full bg-slate-900 text-[#f6e5b4] flex items-center justify-center font-serif text-[10px] shrink-0 font-bold">D3</div>
                    <div>
                      <strong className="text-slate-800">Jodhpur (Blue City):</strong> Chauffeur through Thar scrubland, Umaid Bhawan Palace check-in, Mehrangarh rampart sundowner.
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#f8f5f0]">
                    <div className="h-6 w-6 rounded-full bg-slate-900 text-[#f6e5b4] flex items-center justify-center font-serif text-[10px] shrink-0 font-bold">D4-5</div>
                    <div>
                      <strong className="text-slate-800">Udaipur (City of Lakes):</strong> Taj Lake Palace arrival by royal motorboat, private Pichola cruise, Mewar curator walk.
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                  <div><strong>Best Season:</strong> October – March</div>
                  <div><strong>Duration:</strong> 5 Days / 4 Nights</div>
                  <Link to="/contact" className="text-xs font-bold text-[#8a6b32] hover:underline">Customize This Trip →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: DOMESTIC DESTINATIONS (10 Major Indian Cities with Filters)
          - Delhi, Mumbai, Jaipur, Goa, Kerala, Varanasi, Udaipur, Manali, Agra, Rishikesh
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <MapPin className="h-3 w-3 text-[#d7b36a]" /> Domestic Portfolio
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              10 Premier Indian Destinations.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Explore authentic regional wonders with full logistical support, vetted palace hotels, and private chauffeurs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            {['all', 'heritage', 'coastal', 'mountain', 'spiritual'].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setDomesticFilter(f)}
                className={`rounded-full px-3.5 py-1 text-xs font-semibold capitalize transition ${domesticFilter === f
                  ? 'bg-slate-900 text-[#f6e5b4] shadow'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredDomestic.map((d) => (
            <div
              key={d.name}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 w-full overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-baseline justify-between text-white">
                    <h3 className="text-base font-serif font-bold">{d.name}</h3>
                    <span className="text-[10px] font-bold text-[#f6e5b4]">{d.price}</span>
                  </div>
                </div>

                <div className="p-3.5 text-[11px] space-y-1.5 text-slate-600">
                  <div className="text-[10px] text-slate-400 font-medium">{d.state}</div>
                  <div><strong className="text-slate-800">Best Time:</strong> {d.bestTime}</div>
                  <div><strong className="text-slate-800">Duration:</strong> {d.duration}</div>
                  <div className="line-clamp-2"><strong className="text-slate-800">Attractions:</strong> {d.attractions}</div>
                  <div className="line-clamp-1"><strong className="text-slate-800">Hotels:</strong> {d.hotelOptions}</div>
                </div>
              </div>

              <div className="p-3.5 pt-0 border-t border-slate-100">
                <Link
                  to="/destination/domestic"
                  className="mt-2 block w-full text-center rounded-lg bg-[#f8f5f0] hover:bg-slate-900 hover:text-[#f6e5b4] py-1.5 text-xs font-semibold text-slate-800 transition"
                >
                  Explore Destination →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: DOMESTIC HOTEL SERVICES (8 Hospitality Tiers)
          - Budget, 3-Star, 4-Star, 5-Star, Resorts, Boutique, Family, Romance
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Building className="h-3 w-3 text-[#d7b36a]" /> Domestic Stays & Sanctuaries
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Domestic Hotel Services Across 8 Distinct Tiers.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              From family-friendly heritage retreats to intimate honeymoon pool villas and royal palace suites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                tier: '5-Star Royal Palaces',
                sample: 'Rambagh Palace • Taj Lake Palace • Oberoi Amarvilas',
                price: '$450 – $1,200',
                amenities: 'Butler service, palace courtyards, spa rituals',
                desc: 'Centuries-old Rajput and Mughal palaces restored into ultra-luxury properties with regal dining.',
                img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
              },
              {
                tier: 'Luxury Private Pool Resorts',
                sample: 'Taj Exotica Goa • Kumarakom Lake Resort',
                price: '$350 – $850',
                amenities: 'Private plunge pools, private beachfront, catamaran docks',
                desc: 'Secluded seaside or backwater estates offering complete privacy and tailored chef dining.',
                img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
              },
              {
                tier: 'Heritage Boutique Stays',
                sample: 'BrijRama Palace Varanasi • Fort Barwara • Rawla Narlai',
                price: '$220 – $480',
                amenities: 'Historic frescoed suites, stepwell dinners, folk music',
                desc: 'Intimate boutique forts and havelis where character and heritage outshine commercial chains.',
                img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
              },
              {
                tier: 'Alpine Mountain Chalets',
                sample: 'The Himalayan Manali • Span Resort & Spa',
                price: '$200 – $450',
                amenities: 'Cedarwood fireplaces, snow view balconies, trout dining',
                desc: 'Cosy high-altitude sanctuaries surrounded by deodar pine forests and snow-capped peaks.',
                img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
              },
              {
                tier: '4-Star Premium Stays',
                sample: 'Vivanta by Taj • ITC WelcomeHotels • Le Meridien',
                price: '$140 – $260',
                amenities: 'Infinity pools, multi-cuisine restaurants, executive lounge',
                desc: 'Refined modern comfort offering excellent city locations and dependable white-glove hospitality.',
                img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80',
              },
              {
                tier: '3-Star Business & Leisure',
                sample: 'Lemon Tree Premier • Ginger Luxe • Fortune Select',
                price: '$80 – $140',
                amenities: 'High-speed WiFi, buffet breakfast, airport shuttle',
                desc: 'Clean, contemporary, and reliable hubs suited for quick weekend stopovers and business travelers.',
                img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
              },
              {
                tier: 'Family-Friendly Resorts',
                sample: 'Club Mahindra Properties • Sterling Resorts',
                price: '$120 – $250',
                amenities: 'Kids adventure clubs, connecting suites, lawn games',
                desc: 'Sprawling grounds with dedicated activity coordinators, pool slides, and family suites.',
                img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
              },
              {
                tier: 'Budget Comfort Escapes',
                sample: 'Vetted Boutique Homestays & Bed & Breakfasts',
                price: '$50 – $90',
                amenities: 'Ensuite bathrooms, homecooked meals, local host tips',
                desc: 'Thoroughly inspected, spotlessly clean heritage homestays with genuine local warmth.',
                img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
              },
            ].map((h) => (
              <div
                key={h.tier}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 w-full overflow-hidden">
                    <img src={h.img} alt={h.tier} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-serif font-bold text-slate-900">{h.tier}</h4>
                      <span className="text-[10px] font-bold text-[#8a6b32]">{h.price}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-1">{h.sample}</div>
                    <p className="mt-2 text-[11px] text-slate-600 font-light leading-normal">{h.desc}</p>
                    <div className="mt-2 text-[10px] text-slate-400"><strong>Includes:</strong> {h.amenities}</div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100">
                  <Link
                    to="/tours/hotel-details"
                    className="block w-full text-center rounded-lg bg-slate-900 hover:bg-slate-800 text-[#f6e5b4] py-1.5 text-xs font-semibold transition"
                  >
                    View Hotel Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: DOMESTIC TRANSPORTATION (Fleets, Drivers, Logistics)
          - Airport transfers, private luxury sedans, coaches, trains, safety
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Car className="h-3.5 w-3.5 text-[#d7b36a]" /> Domestic Mobility Suite
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Seamless Domestic Transportation & Private Chauffeurs.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Eliminate taxi negotiations and unreliable road logistics. Every vehicle in our fleet is company-verified, GPS-tracked, and operated by background-checked professional chauffeurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            {
              title: 'Airport VIP Transfers',
              desc: 'Tarmac greeting, luggage assistance, cold water bottles, and instant dispatch without waiting.',
              fleet: 'Mercedes-Benz E/S Class, BMW 5-Series',
              price: 'From $45 / transfer',
              icon: Plane,
            },
            {
              title: 'Private Chauffeur Sedans',
              desc: 'Full-day dedicated vehicle at your command for city sightseeing, dining, and shopping trips.',
              fleet: 'Toyota Innova Crysta, Mercedes Maybach',
              price: 'From $80 / day',
              icon: Car,
            },
            {
              title: 'Tourist Executive Coaches',
              desc: 'Plush reclining seats, onboard restrooms, individual AC vents, and microphones for group tours.',
              fleet: 'Volvo 9400 Multi-Axle, Scania Metrolink',
              price: 'From $280 / day',
              icon: Bus,
            },
            {
              title: 'Luxury Tourist Trains',
              desc: 'Ticketing and carriage facilitation for Palace on Wheels, Maharajas’ Express, and Tejas Express.',
              fleet: 'Heritage Presidential Suites on Rails',
              price: 'From $650 / night',
              icon: Train,
            },
          ].map((t) => {
            const Icon = t.icon
            return (
              <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-slate-900 text-[#f6e5b4] flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-[#d7b36a]" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900">{t.title}</h3>
                <p className="mt-2 text-xs text-slate-600 font-light leading-relaxed">{t.desc}</p>
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] space-y-1">
                  <div><strong className="text-slate-800">Fleet:</strong> {t.fleet}</div>
                  <div className="text-[#8a6b32] font-bold">{t.price}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Transportation Safety & Assurance Guarantee Box */}
        <div className="rounded-2xl border border-slate-200 bg-[#f8f5f0] p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-[#8a6b32] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Background-Checked Drivers</div>
              <p className="text-slate-500 text-[11px] mt-0.5">Strict criminal background checks, commercial driver licensing, and regular defensive driving training.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-[#8a6b32] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">24/7 Real-Time GPS Tracking</div>
              <p className="text-slate-500 text-[11px] mt-0.5">Every vehicle is monitored by our central security desk to ensure on-time pickups and safety.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-[#8a6b32] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Zero Toll or Parking Surprises</div>
              <p className="text-slate-500 text-[11px] mt-0.5">All interstate permits, state border taxes, expressway FASTag tolls, and parking fees are pre-paid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: DOMESTIC EXPERIENCES & ACTIVITIES (10 Curated Experiences)
          - Adventure, Wildlife, Mountains, Beaches, Culture, Food, Spiritual, Festivals, Nature, Photo
      ========================================================================= */}
      <section className="bg-[#111827] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
              <Sparkles className="h-3 w-3 text-[#d7b36a]" /> Domestic Immersions
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-white tracking-tight">
              10 Signature Domestic Experiences.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 font-light">
              Crafted for discerning travelers seeking deep cultural encounters rather than superficial sightseeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              { type: 'Adventure', name: 'Ganges White-Water Rapids', dest: 'Rishikesh, Uttarakhand', duration: 'Half-Day', price: '$90', icon: Mountain },
              { type: 'Wildlife', name: 'Bengal Tiger 4x4 Jeep Safari', dest: 'Ranthambore, Rajasthan', duration: 'Full-Day (2 Drives)', price: '$180', icon: Sun },
              { type: 'Mountains', name: 'Rohtang Pass Snow Heli-Tour', dest: 'Manali, Himachal', duration: '2 Hours', price: '$240', icon: Mountain },
              { type: 'Beaches', name: 'Private Sunset Catamaran Cruise', dest: 'South Goa Coastline', duration: '3 Hours', price: '$190', icon: Palmtree },
              { type: 'Culture', name: 'Royal Court Miniature Atelier', dest: 'Jaipur, Rajasthan', duration: 'Half-Day', price: '$110', icon: Crown },
              { type: 'Food', name: 'Old Delhi Royal Mughal Trail', dest: 'Chandni Chowk, Delhi', duration: '4 Hours', price: '$85', icon: Utensils },
              { type: 'Spiritual', name: 'Private Dawn Wooden Boat & Aarti', dest: 'Ghats of Varanasi', duration: '3 Hours', price: '$95', icon: Flame },
              { type: 'Festivals', name: 'Royal Palace Holi Celebration', dest: 'Udaipur City Palace', duration: '1 Day', price: '$320', icon: Sparkles },
              { type: 'Nature', name: 'Silent Backwaters Kayak Trail', dest: 'Alleppey, Kerala', duration: 'Half-Day', price: '$75', icon: Anchor },
              { type: 'Photography', name: 'After-Hours Taj Moonlight Walk', dest: 'Agra Mehtab Bagh', duration: '3 Hours', price: '$140', icon: Camera },
            ].map((exp) => {
              const Icon = exp.icon
              return (
                <div
                  key={exp.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-gold-400/40 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                      <span className="inline-flex items-center gap-1 text-[#f6e5b4] font-semibold">
                        <Icon className="h-3 w-3 text-[#d7b36a]" /> {exp.type}
                      </span>
                      <span>{exp.duration}</span>
                    </div>
                    <h3 className="text-sm font-serif font-bold text-white mb-1">{exp.name}</h3>
                    <div className="text-[11px] text-slate-400">{exp.dest}</div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#d7b36a]">{exp.price}</span>
                    <Link to="/contact" className="text-[10px] font-bold text-white hover:text-[#f6e5b4] transition">
                      Reserve →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: INTERNATIONAL TRIP PLANNING
          - Multi-country flights, currency, visas, insurance, 24/7 lifeline
          - Sample International Itinerary: European Grandeur (8 Days)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Globe2 className="h-3.5 w-3.5 text-[#d7b36a]" /> International Expedition Atelier
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-slate-900 tracking-tight">
              Mastering the Complexities of International Travel.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Crossing international borders should feel like an effortless transition, not an administrative ordeal. We manage consulate visa interviews, multi-segment business class routing, local currency hedging, and bilingual private escorts.
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8a6b32] shrink-0" />
                <span><strong>Consular Visa Facilitation:</strong> Schengen, UK, US, Dubai e-Visa expedited document dossiers.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8a6b32] shrink-0" />
                <span><strong>Global Airline Coordination:</strong> First/Business Class ticketing with complimentary stopover suites.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8a6b32] shrink-0" />
                <span><strong>Comprehensive Worldwide Insurance:</strong> Medical emergency, cancellation, and baggage loss protection.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#8a6b32] shrink-0" />
                <span><strong>24/7 Multi-Timezone Lifeline:</strong> Live concierge assistance via WhatsApp across Paris, Dubai, London, and Tokyo.</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#f6e5b4] hover:bg-slate-800 transition shadow"
              >
                Consult International Desk →
              </Link>
              <Link
                to="/destination/international"
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition"
              >
                View International Hubs
              </Link>
            </div>
          </div>

          {/* Right: Sample International Itinerary Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a6b32]">Sample Global Circuit</span>
                  <h3 className="text-lg font-serif font-bold text-slate-900">European Imperial Grandeur</h3>
                  <div className="text-xs text-slate-500">Paris • Swiss Alps • Rome</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-400 block">Estimated From</span>
                  <span className="text-base font-bold text-slate-900">$3,450 <span className="text-xs font-normal text-slate-500">/ guest</span></span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#f8f5f0]">
                  <div className="h-6 w-6 rounded-full bg-slate-900 text-[#f6e5b4] flex items-center justify-center font-serif text-[10px] shrink-0 font-bold">D1-3</div>
                  <div>
                    <strong className="text-slate-800">Paris (France):</strong> Ritz Paris stay, private Louvre after-hours curator pass, vintage Riva yacht on Seine, Versailles private gardens.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#f8f5f0]">
                  <div className="h-6 w-6 rounded-full bg-slate-900 text-[#f6e5b4] flex items-center justify-center font-serif text-[10px] shrink-0 font-bold">D4-5</div>
                  <div>
                    <strong className="text-slate-800">Zermatt & Matterhorn (Switzerland):</strong> Glacier Express Excellence Class, Gorner Glacier crevasse hike, thermal chalets.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#f8f5f0]">
                  <div className="h-6 w-6 rounded-full bg-slate-900 text-[#f6e5b4] flex items-center justify-center font-serif text-[10px] shrink-0 font-bold">D6-8</div>
                  <div>
                    <strong className="text-slate-800">Rome (Italy):</strong> Hotel de Russie, private Vatican Sistine Chapel early tour, Colosseum underground access, sommelier dinner.
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                <div><strong>Visa Type:</strong> Schengen Multi-Entry</div>
                <div><strong>Duration:</strong> 8 Days / 7 Nights</div>
                <Link to="/contact" className="text-xs font-bold text-[#8a6b32] hover:underline">Customize Global Circuit →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: INTERNATIONAL DESTINATIONS (10 Global Cities from Project)
          - Paris, Dubai, London, Singapore, Bali, Tokyo, Switzerland, New York, Rome, Maldives
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Globe2 className="h-3 w-3 text-[#d7b36a]" /> International Portfolio
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                10 Premier International Capitals & Sanctuaries.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                Complete vacation arrangements with vetted luxury chain & boutique stays, airport fast-tracks, and local bilingual guides.
              </p>
            </div>
            <Link
              to="/destination/international"
              className="text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#8a6b32] transition"
            >
              Explore All International →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {internationalDestinationsData.map((d) => (
              <div
                key={d.name}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-36 w-full overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex items-baseline justify-between text-white">
                      <div>
                        <h3 className="text-base font-serif font-bold">{d.name}</h3>
                        <span className="text-[10px] text-slate-300 block">{d.country}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#f6e5b4]">{d.price}</span>
                    </div>
                  </div>

                  <div className="p-3.5 text-[11px] space-y-1.5 text-slate-600">
                    <div><strong className="text-slate-800">Best Season:</strong> {d.bestTime}</div>
                    <div><strong className="text-slate-800">Duration:</strong> {d.duration}</div>
                    <div className="line-clamp-2"><strong className="text-slate-800">Highlights:</strong> {d.attractions}</div>
                    <div className="line-clamp-1"><strong className="text-slate-800">Hotels:</strong> {d.hotels}</div>
                  </div>
                </div>

                <div className="p-3.5 pt-0 border-t border-slate-100">
                  <Link
                    to="/destination/international"
                    className="mt-2 block w-full text-center rounded-lg bg-[#f8f5f0] hover:bg-slate-900 hover:text-[#f6e5b4] py-1.5 text-xs font-semibold text-slate-800 transition"
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
          SECTION 10: VISA & DOCUMENTATION ASSISTANCE
          - Consultation -> Documents -> Application -> Verification -> Travel
          - Schengen, US, UK, Dubai, Japan, Singapore checklists
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <FileText className="h-3.5 w-3.5 text-[#d7b36a]" /> Embassy & Consular Concierge
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Stress-Free Visa & International Documentation.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Our dedicated documentation desk handles the intricacies of visa applications, biometric appointments, and travel medical insurance with a 99.2% approval track record.
          </p>
        </div>

        {/* Step-by-Step 5 Stage Process */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-10">
          {[
            { step: '01', title: 'Consultation', desc: 'Detailed profile assessment, travel intent analysis, and exact embassy checklist generation.' },
            { step: '02', title: 'Documents', desc: 'Dossier audit: bank statements, tax returns, employment NOCs, and flight/hotel vouchers.' },
            { step: '03', title: 'Application', desc: 'Official portal submission, VFS / TLS biometric appointment booking, and fee settlement.' },
            { step: '04', title: 'Verification', desc: 'Pre-interview mock briefing, embassy tracking, and consular liaison follow-ups.' },
            { step: '05', title: 'Travel Ready', desc: 'Stamped passport delivery, international medical insurance issuance, and travel readiness.' },
          ].map((v) => (
            <div key={v.step} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-center">
              <span className="inline-block text-xs font-serif font-bold text-[#8a6b32] mb-1">Step {v.step}</span>
              <h3 className="text-sm font-serif font-bold text-slate-900 mb-1">{v.title}</h3>
              <p className="text-[11px] text-slate-600 font-light leading-normal">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Visas Supported Showcase */}
        <div className="rounded-2xl border border-slate-200 bg-[#f8f5f0] p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <div className="font-bold text-slate-900">Schengen Visa</div>
            <div className="text-[10px] text-slate-500 mt-0.5">France, Swiss, Italy</div>
            <span className="inline-block mt-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">99.4% Pass</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <div className="font-bold text-slate-900">UK Standard Visitor</div>
            <div className="text-[10px] text-slate-500 mt-0.5">6-Month & 2-Year</div>
            <span className="inline-block mt-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">99.1% Pass</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <div className="font-bold text-slate-900">US B1/B2 Tourist</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Appointment Guidance</div>
            <span className="inline-block mt-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">DS-160 Prep</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <div className="font-bold text-slate-900">UAE 30/60 Days</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Instant e-Visa</div>
            <span className="inline-block mt-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">24h Turnaround</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <div className="font-bold text-slate-900">Japan Tourist</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Single / Double Entry</div>
            <span className="inline-block mt-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">100% Pass</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
            <div className="font-bold text-slate-900">Singapore e-Visa</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Fast-track processing</div>
            <span className="inline-block mt-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">2-3 Days</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: INTERNATIONAL HOTEL & RESORT SERVICES
          - Luxury international hotels, overwater villas, mountain chalets, penthouses
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Building className="h-3 w-3 text-[#d7b36a]" /> International Hospitality
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              International Hotels, Chalets & Overwater Sanctuaries.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Direct preferred partner access to Aman, Four Seasons, Belmond, Ritz-Carlton, and Rosewood with guaranteed VIP amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Historic Grand Palaces',
                sample: 'Ritz Paris • Le Meurice • The Savoy London',
                dest: 'Paris, France & London, UK',
                price: '$1,200 – $2,800/nt',
                amenities: 'Butler service, private gardens, Michelin-star dining',
                img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Private Overwater Villas',
                sample: 'Soneva Fushi • Cheval Blanc Randheli',
                dest: 'Baa Atoll & Noonu Atoll, Maldives',
                price: '$1,650 – $4,500/nt',
                amenities: 'Direct reef access, glass floor lounges, private butler',
                img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Alpine Mountain Chalets',
                sample: 'Badrutt’s Palace • The Chedi Andermatt',
                dest: 'St. Moritz & Zermatt, Switzerland',
                price: '$950 – $2,400/nt',
                amenities: 'Thermal spa pools, ski-in/ski-out, open stone hearths',
                img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Skyline Penthouse Suites',
                sample: 'Burj Al Arab • Marina Bay Sands • Aman Tokyo',
                dest: 'Dubai, Singapore & Tokyo',
                price: '$850 – $3,200/nt',
                amenities: 'Infinity rooftop pools, panoramic glass walls, luxury fleet',
                img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
              },
            ].map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-36 w-full overflow-hidden">
                    <img src={h.img} alt={h.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-serif font-bold text-slate-900">{h.title}</h4>
                      <span className="text-[10px] font-bold text-[#8a6b32]">{h.price}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">{h.dest}</div>
                    <div className="text-[11px] text-slate-600 font-medium mt-2">{h.sample}</div>
                    <div className="text-[10px] text-slate-400 mt-1"><strong>Perks:</strong> {h.amenities}</div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100">
                  <Link
                    to="/tours/hotel-details"
                    className="block w-full text-center rounded-lg bg-slate-900 hover:bg-slate-800 text-[#f6e5b4] py-1.5 text-xs font-semibold transition"
                  >
                    View Hotel Sanctuary →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: INTERNATIONAL FLIGHTS & TRANSFERS
          - The Journey: Home -> Airport -> Destination -> Hotel -> Tours -> Airport -> Home
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Plane className="h-3.5 w-3.5 text-[#d7b36a]" /> International Transit Architecture
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Seamless Aviation & Chauffeur Coordination.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            The Complete Door-to-Door Journey: Home → Airport → Destination → Hotel → Tours → Airport → Home.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center">
            {[
              { step: '01', title: 'Home Pickup', desc: 'Chauffeured sedan at your door' },
              { step: '02', title: 'VIP Airport Lounge', desc: 'Fast-track customs & lounge access' },
              { step: '03', title: 'Premium Aviation', desc: 'Lie-flat business class routing' },
              { step: '04', title: 'Tarmac Greeting', desc: 'Direct gate meet & luxury transport' },
              { step: '05', title: 'Hotel Sanctuary', desc: 'Private in-suite check-in' },
              { step: '06', title: 'Bespoke Tours', desc: 'Private chauffeured excursions' },
              { step: '07', title: 'Safe Return', desc: 'Full return transit to your doorstep' },
            ].map((p) => (
              <div key={p.step} className="p-3 rounded-xl bg-[#f8f5f0] border border-slate-100">
                <span className="text-[10px] font-serif font-bold text-[#8a6b32] block mb-1">Step {p.step}</span>
                <div className="text-xs font-bold text-slate-900">{p.title}</div>
                <div className="text-[10px] text-slate-500 font-light mt-0.5">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="rounded-xl border border-slate-200 bg-[#f8f5f0] p-4">
            <h4 className="font-serif font-bold text-slate-900 mb-1">Airline Alliances</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              Preferred ticketing and mileage integration across Emirates, Singapore Airlines, Qatar Airways, British Airways, Swiss International, and Air India.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-[#f8f5f0] p-4">
            <h4 className="font-serif font-bold text-slate-900 mb-1">High-Speed Rail Networks</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              First Class booking across French TGV, Eurostar, Swiss Glacier Express, and Japanese Shinkansen bullet trains with luggage forwarding.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-[#f8f5f0] p-4">
            <h4 className="font-serif font-bold text-slate-900 mb-1">Private Jet & Heli Charters</h4>
            <p className="text-slate-600 font-light leading-relaxed">
              On-demand point-to-point private aircraft charters for alpine ski resort transfers, Greek island hopping, and remote Maldivian atolls.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: INTERNATIONAL TRAVEL EXPERIENCES
          - 10 Global curated experiences (Yachting, Skiing, Wildlife, Michelin, etc.)
      ========================================================================= */}
      <section className="bg-[#111827] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
              <Sparkles className="h-3 w-3 text-[#d7b36a]" /> Global Immersions
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-white tracking-tight">
              10 Signature International Experiences.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 font-light">
              Rare privileges and insider access curated exclusively for our discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              { type: 'Yachting', name: 'Private Riva Charter around Capri', dest: 'Amalfi Coast, Italy', duration: 'Full Day', price: '$2,400', icon: Anchor },
              { type: 'Skiing', name: 'Zermatt Glacier Heli-Skiing', dest: 'Matterhorn, Switzerland', duration: '1 Day', price: '$1,850', icon: Mountain },
              { type: 'Marine', name: 'Baa Atoll Private Manta Ray Dive', dest: 'Maldives Lagoon', duration: 'Half-Day', price: '$650', icon: LifeBuoy },
              { type: 'Wildlife', name: 'Serengeti Migration Fly-In Camp', dest: 'Tanzania / Kenya', duration: '3 Days', price: '$3,200', icon: Sun },
              { type: 'Culinary', name: 'Tokyo 3-Star Michelin Omakase', dest: 'Ginza, Tokyo', duration: 'Evening', price: '$450', icon: Utensils },
              { type: 'Fashion', name: 'Haute Couture Private Salon Access', dest: 'Paris, France', duration: 'Half-Day', price: '$500', icon: Gem },
              { type: 'Culture', name: 'Audience with Kyoto Tea Master', dest: 'Kyoto, Japan', duration: '3 Hours', price: '$350', icon: Coffee },
              { type: 'History', name: 'After-Hours Vatican & Sistine Tour', dest: 'Rome, Italy', duration: '3 Hours', price: '$680', icon: Crown },
              { type: 'Desert', name: 'Royal Desert Bedouin Gala Under Stars', dest: 'Dubai Desert Reserve', duration: 'Evening', price: '$420', icon: Flame },
              { type: 'Aurora', name: 'Private Glass Igloo Aurora Watch', dest: 'Lapland, Finland', duration: '2 Days', price: '$1,900', icon: Sparkles },
            ].map((exp) => {
              const Icon = exp.icon
              return (
                <div
                  key={exp.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-gold-400/40 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                      <span className="inline-flex items-center gap-1 text-[#f6e5b4] font-semibold">
                        <Icon className="h-3 w-3 text-[#d7b36a]" /> {exp.type}
                      </span>
                      <span>{exp.duration}</span>
                    </div>
                    <h3 className="text-sm font-serif font-bold text-white mb-1">{exp.name}</h3>
                    <div className="text-[11px] text-slate-400">{exp.dest}</div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#d7b36a]">{exp.price}</span>
                    <Link to="/contact" className="text-[10px] font-bold text-white hover:text-[#f6e5b4] transition">
                      Inquire →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: TOUR PACKAGE SERVICES OVERVIEW
          - Complete anatomy of what is included in an all-inclusive tour package
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Briefcase className="h-3.5 w-3.5 text-[#d7b36a]" /> Curated Packages Anatomy
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Everything Included: The Complete Package Standard.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            When you select an RK Tour Package, you receive an all-inclusive, fully coordinated journey where every logistical element has been pre-tested and confirmed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: '5-Star Accommodations',
              desc: 'Handpicked palace suites, private overwater villas, and alpine chalets with breakfast included.',
              icon: Building,
            },
            {
              title: 'Chauffeured Mobility',
              desc: 'Dedicated Mercedes-Benz sedans and high-speed rail passes with professional valets.',
              icon: Car,
            },
            {
              title: 'Gourmet Inclusions',
              desc: 'Heirloom palace banquets, Michelin dining, and champagne breakfasts in-suite.',
              icon: Utensils,
            },
            {
              title: 'Fast-Track Sightseeing',
              desc: 'VIP entry tickets bypassing all lines at monuments, museums, and national parks.',
              icon: Tag,
            },
            {
              title: 'Bespoke Activities',
              desc: 'Private yacht charters, wildlife safaris, helicopter flights, and master workshops.',
              icon: Sparkles,
            },
            {
              title: 'Master Tour Historian',
              desc: 'Accredited local guides dedicated strictly to your private party.',
              icon: UserCheck,
            },
            {
              title: 'Tarmac Airport Pickups',
              desc: 'Luggage porterage and airport VIP fast-track transfers upon arrival and departure.',
              icon: Plane,
            },
            {
              title: '24/7 Field Concierge',
              desc: 'Dedicated private travel manager on call via WhatsApp for seamless adjustments.',
              icon: Headphones,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-9 w-9 rounded-xl bg-[#fffaf1] border border-gold-300/40 text-[#8a6b32] flex items-center justify-center mb-3">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-serif font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: FOUR SIGNATURE TOURS (THE 4 TOURS PRESENT IN THE PROJECT)
          1. Family Tours (Family Dynasty Heritage) -> /tour-packages/family
          2. Honeymoon Tours (Amalfi Romance) -> /tour-packages/honeymoon
          3. Adventure Tours (Swiss Alpine Glacier) -> /tour-packages/adventure
          4. Weekend Tours (Emirates Royal Respite) -> /tour-packages/weekend
          - Features 10+ dynamic carousel images (1s rotation), day-by-day itinerary,
            hotels, meals, transport, guide, inclusions/exclusions, availability, CTAs
      ========================================================================= */}
      <section id="signature-4-tours" className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Crown className="h-3.5 w-3.5 text-[#d7b36a]" /> The Project Collection
            </div>
            <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-slate-900 tracking-tight">
              Our Four Signature Tour Packages.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Explore the four core signature tours built into the RK Tours platform: Family, Honeymoon, Adventure, and Weekend Escapes.
            </p>

            {/* Interactive Tour Switcher Tabs */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {signature4Tours.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTourIndex(idx)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${activeTourIndex === idx
                    ? 'bg-slate-900 text-[#f6e5b4] shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {t.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Signature Tour Deep Card */}
          {(() => {
            const tour = signature4Tours[activeTourIndex]
            return (
              <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: 10-Image Dynamic Carousel (1s rotation) */}
                  <div className="lg:col-span-6 relative">
                    <DynamicImageCarousel
                      images={tour.images}
                      alt={tour.name}
                      className="h-72 sm:h-96 lg:h-full w-full min-h-[380px]"
                      interval={1000}
                      showControls={true}
                      showDots={true}
                      badge={
                        <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-xs font-bold text-[#f6e5b4] backdrop-blur-md">
                          ★ {tour.rating} ({tour.reviews} reviews) • {tour.badge}
                        </span>
                      }
                    />
                  </div>

                  {/* Right Column: Detailed Presentation */}
                  <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span className="font-bold uppercase tracking-wider text-[#8a6b32]">{tour.category}</span>
                        <span className="font-semibold text-slate-700">{tour.duration}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
                        {tour.name}
                      </h3>
                      <div className="text-xs text-slate-500 font-medium mt-1">{tour.destination}</div>

                      <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {tour.summary}
                      </p>

                      {/* Places Covered Badges */}
                      <div className="mt-4 flex flex-wrap gap-1.5 items-center">
                        <span className="text-[11px] font-bold text-slate-800 mr-1">Places:</span>
                        {tour.placesCovered.map((place) => (
                          <span key={place} className="rounded-md bg-[#f8f5f0] border border-slate-200 px-2 py-0.5 text-[10px] text-slate-700 font-medium">
                            {place}
                          </span>
                        ))}
                      </div>

                      {/* Key Logistics Matrix */}
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs border-y border-slate-100 py-4">
                        <div><strong className="text-slate-900">Hotel Stays:</strong> <span className="text-slate-600 block text-[11px]">{tour.hotelInfo}</span></div>
                        <div><strong className="text-slate-900">Private Transit:</strong> <span className="text-slate-600 block text-[11px]">{tour.transport}</span></div>
                        <div className="mt-1"><strong className="text-slate-900">Meals Included:</strong> <span className="text-slate-600 block text-[11px]">{tour.meals}</span></div>
                        <div className="mt-1"><strong className="text-slate-900">Dedicated Guide:</strong> <span className="text-slate-600 block text-[11px]">{tour.guideInfo}</span></div>
                        <div className="mt-1"><strong className="text-slate-900">Best Season:</strong> <span className="text-slate-600 block text-[11px]">{tour.bestTime}</span></div>
                        <div className="mt-1"><strong className="text-slate-900">Group Size:</strong> <span className="text-slate-600 block text-[11px]">{tour.groupSize}</span></div>
                      </div>

                      {/* Inclusions Highlights */}
                      <div className="mt-4">
                        <div className="text-xs font-bold text-slate-900 mb-1.5">Package Highlights:</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-600">
                          {tour.inclusions.slice(0, 4).map((inc, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <Check className="h-3 w-3 text-emerald-600 shrink-0" />
                              <span className="line-clamp-1">{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Booking Strip */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 block">Starting From</span>
                        <div className="text-xl font-bold text-slate-900">
                          {tour.price} <span className="text-xs font-normal text-slate-500">/ package</span>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-semibold block">{tour.cancellation}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Link
                          to="/contact"
                          className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#f6e5b4] hover:bg-slate-800 transition shadow"
                        >
                          Book Now
                        </Link>
                        <Link
                          to={tour.route}
                          className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition"
                        >
                          View Full Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* =========================================================================
          SECTION 16: TOUR ITINERARY EXPERIENCE (Interactive Timeline)
          - Day 01 -> Day 02 -> Day 03 -> Day 04 -> Day 05 -> Day 06
          - Location, activities, meals, hotel, transport, timing, important notes
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Clock className="h-3.5 w-3.5 text-[#d7b36a]" /> Interactive Itinerary Timeline
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Day-by-Day Journey Experience.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Click through each day to inspect morning-to-night schedules, private dining venues, luxury transports, and insider advice.
          </p>

          {/* Day Navigation Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {sampleItineraryDays.map((d, idx) => (
              <button
                key={d.day}
                type="button"
                onClick={() => setActiveDayIndex(idx)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${activeDayIndex === idx
                  ? 'bg-slate-900 text-[#f6e5b4] shadow'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
              >
                {d.day}
              </button>
            ))}
          </div>
        </div>

        {/* Active Day Card */}
        {(() => {
          const currentDay = sampleItineraryDays[activeDayIndex]
          return (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 mb-6 gap-2">
                <div>
                  <span className="text-xs font-bold font-serif text-[#8a6b32] uppercase tracking-wider">
                    {currentDay.day} • {currentDay.phase}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 mt-0.5">
                    {currentDay.headline}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-[#8a6b32]" />
                    <span>{currentDay.location}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 rounded-full bg-[#f8f5f0] border border-slate-200 px-3 py-1 text-xs text-slate-700 font-semibold self-start sm:self-auto">
                  <Clock className="h-3 w-3 text-[#8a6b32]" />
                  <span>{currentDay.time}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                {currentDay.summary}
              </p>

              {/* Day's Activities Checklist */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Day Schedule & Sightseeing Highlights
                </div>
                <div className="space-y-2">
                  {currentDay.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="h-4 w-4 rounded-full bg-[#fffaf1] border border-gold-300 text-[#8a6b32] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day Logistics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#f8f5f0] border border-slate-100 text-xs">
                <div>
                  <strong className="text-slate-900 block font-serif">Accommodations:</strong>
                  <span className="text-slate-600 text-[11px]">{currentDay.hotel}</span>
                </div>
                <div>
                  <strong className="text-slate-900 block font-serif">Dining & Meals:</strong>
                  <span className="text-slate-600 text-[11px]">{currentDay.meals}</span>
                </div>
                <div>
                  <strong className="text-slate-900 block font-serif">Transit & Escort:</strong>
                  <span className="text-slate-600 text-[11px]">{currentDay.transit}</span>
                </div>
              </div>

              {/* Insider Notes */}
              <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 italic">
                <HelpCircle className="h-3.5 w-3.5 text-[#8a6b32] shrink-0" />
                <span>Concierge Note: {currentDay.notes}</span>
              </div>
            </div>
          )
        })()}
      </section>

      {/* =========================================================================
          SECTION 17: CUSTOMIZED TRAVEL (Interactive Trip Builder)
          - Destination, Budget, Duration, Travel Style, Travelers, Preferences
          - CTA: Create My Custom Trip
      ========================================================================= */}
      <section id="customized-travel" className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Sliders className="h-3.5 w-3.5 text-[#d7b36a]" /> Bespoke Journey Builder
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Create Your Custom Personalized Trip.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Select your destination focus, duration, style, and group size to generate a tailored itinerary proposal.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1: Destination Region */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  1. Destination Focus
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'domestic', label: 'Domestic India', desc: '10 Heritage & Coastal hubs' },
                    { id: 'international', label: 'International', desc: '10 Worldwide capitals' },
                  ].map((rg) => (
                    <button
                      key={rg.id}
                      type="button"
                      onClick={() => setCustomRegion(rg.id)}
                      className={`p-3 rounded-xl border text-left transition ${customRegion === rg.id
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                        }`}
                    >
                      <div className="text-xs font-serif font-bold">{rg.label}</div>
                      <div className={`text-[10px] ${customRegion === rg.id ? 'text-[#f6e5b4]' : 'text-slate-500'}`}>{rg.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Trip Duration */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  2. Duration
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '3-4', label: '3-4 Days', sub: 'Weekend Break' },
                    { id: '5-7', label: '5-7 Days', sub: 'Classic Circuit' },
                    { id: '8-14', label: '8-14 Days', sub: 'Grand Expedition' },
                  ].map((dur) => (
                    <button
                      key={dur.id}
                      type="button"
                      onClick={() => setCustomDuration(dur.id)}
                      className={`p-3 rounded-xl border text-center transition ${customDuration === dur.id
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                        }`}
                    >
                      <div className="text-xs font-serif font-bold">{dur.label}</div>
                      <div className={`text-[9px] ${customDuration === dur.id ? 'text-[#f6e5b4]' : 'text-slate-500'}`}>{dur.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Travel Style */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  3. Travel Style
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'luxury', label: 'Royal Palaces & Villas', sub: '5-Star Grandeur' },
                    { id: 'romance', label: 'Romantic Honeymoon', sub: 'Seclusion & Spa' },
                    { id: 'family', label: 'Family Dynasty', sub: 'Multi-Generation' },
                    { id: 'adventure', label: 'Alpine Adventure', sub: 'Heli & Glacier Treks' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setCustomStyle(st.id)}
                      className={`p-3 rounded-xl border text-left transition ${customStyle === st.id
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                        }`}
                    >
                      <div className="text-xs font-serif font-bold">{st.label}</div>
                      <div className={`text-[9px] ${customStyle === st.id ? 'text-[#f6e5b4]' : 'text-slate-500'}`}>{st.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Number of Travelers */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  4. Number of Guests
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setCustomGuests(num)}
                      className={`p-3 rounded-xl border text-center transition ${customGuests === num
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
                        }`}
                    >
                      <div className="text-xs font-bold">{num} {num === 1 ? 'Solo' : 'Guests'}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated Proposal Summary Box */}
            <div className="mt-8 p-5 rounded-2xl bg-[#f8f5f0] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a6b32]">Instant Estimate Overview</span>
                <div className="text-sm font-serif font-bold text-slate-900">
                  {customDuration} Days Custom {customRegion === 'domestic' ? 'India Heritage' : 'Global Worldwide'} Tour
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Style: <span className="capitalize font-semibold">{customStyle}</span> • Party Size: {customGuests} Guests • All hotels & private transport included
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-xl bg-slate-900 px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#f6e5b4] hover:bg-slate-800 transition shadow"
              >
                Create My Custom Trip →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 18: CORPORATE & GROUP TRAVEL
          - Conferences, team outings, group tours, educational, large-family, enquiry
      ========================================================================= */}
      <section id="corporate-travel" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Users className="h-3.5 w-3.5 text-[#d7b36a]" /> Enterprise & Group Services
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Corporate Summits, Board Retreats & Delegations.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            From high-stakes executive board retreats in royal palace pavilions to global MICE conferences and academic delegations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              title: 'Executive Boardroom Retreats',
              desc: 'High-security, fully private palace pavilions or alpine chalets with high-speed encrypted AV and sommelier private dining.',
              features: ['Confidentiality non-disclosure', 'Chartered air transfers', 'Private palace meeting rooms'],
            },
            {
              title: 'Incentive Travel & Team Outings',
              desc: 'Inspiring international reward expeditions to Dubai, Paris, Singapore, or South Goa luxury beach resorts.',
              features: ['Teambuilding desert dune challenges', 'Private beach gala dinners', 'Custom company branded itineraries'],
            },
            {
              title: 'Academic & Cultural Delegations',
              desc: 'Curated architectural, heritage, and socio-economic research expeditions for institutions and large multi-gen family reunions.',
              features: ['University accredited guides', 'Block hotel bookings', 'Executive bus fleets'],
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base font-serif font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">{c.desc}</p>
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-700">
                  {c.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-[#8a6b32]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="block text-center rounded-lg bg-[#f8f5f0] hover:bg-slate-900 hover:text-[#f6e5b4] py-2 text-xs font-semibold text-slate-800 transition"
                >
                  Request Corporate Proposal →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 19: TRAVEL CONCIERGE & 24/7 SUPPORT
          - Before, during, after travel; dedicated expert, emergency, hotel/transit
      ========================================================================= */}
      <section className="bg-[#111827] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
                <Headphones className="h-3 w-3 text-[#d7b36a]" /> 24/7 White-Glove Concierge
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-serif text-white tracking-tight">
                Your Dedicated Guardian Before, During, and After Travel.
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                When you travel with RK Tours, you are never alone in a foreign land. Your designated travel curator tracks weather, delayed flight gates, and restaurant reservations in real-time.
              </p>

              <div className="mt-6 space-y-3 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="h-4 w-4 text-[#d7b36a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-serif">Real-Time Flight & Gate Triage:</strong>
                    <p className="text-slate-300 text-[11px] mt-0.5">Automated rebooking and transfer adjustment if your connecting flight is delayed.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="h-4 w-4 text-[#d7b36a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-serif">Direct WhatsApp Lifeline:</strong>
                    <p className="text-slate-300 text-[11px] mt-0.5">Message your personal concierge for last-minute museum reservations, private drivers, or pharmacy delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Shield className="h-4 w-4 text-[#d7b36a] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-serif">Medical & Emergency Assistance:</strong>
                    <p className="text-slate-300 text-[11px] mt-0.5">Direct network access to international private hospitals, multilingual medical staff, and emergency air dispatch.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Concierge Desk Visual Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#d7b36a] text-slate-950 flex items-center justify-center font-bold font-serif text-sm">
                    RK
                  </div>
                  <div>
                    <div className="text-sm font-serif font-bold text-white">RK Global Concierge Desk</div>
                    <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Active • Global Response Time &lt; 8 Mins</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Direct Concierge Line:</span>
                    <strong className="text-white">+91 98765 43210</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>VIP Email Desk:</span>
                    <strong className="text-white">concierge@rktours.com</strong>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Global HQ:</span>
                    <strong className="text-white">New Delhi • Dubai • London</strong>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Supported Languages:</span>
                    <strong className="text-white">English, Hindi, French, Arabic</strong>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 text-center rounded-xl bg-[#d7b36a] px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-[#e5c98d] transition shadow"
                  >
                    Contact Concierge Desk
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 20: FINAL BOOKING EXPERIENCE & COMPREHENSIVE FOOTER
          Headline: "Everything You Need for an Extraordinary Journey."
          CTAs: Explore Destinations, Explore Tours, Tour Packages, Find Hotels,
                Plan Custom Trip, Contact Travel Expert + Luxury Footer
      ========================================================================= */}
      <section className="bg-[#0b101b] text-white pt-16 pb-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Cinematic Call To Action Banner */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900/90 via-[#111827] to-slate-950 p-8 sm:p-12 mb-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#d7b36a]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-white/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4] mb-3">
              <Crown className="h-3.5 w-3.5 text-[#d7b36a]" /> The Sovereign Standard
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Everything You Need for an Extraordinary Journey.
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Step into a realm of bespoke luxury where your desires dictate the itinerary and our international expertise guarantees absolute peace of mind.
            </p>

            {/* All Requested Action CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 text-xs">
              <Link
                to="/destination/domestic"
                className="rounded-xl bg-[#d7b36a] px-5 py-2.5 font-bold text-slate-950 hover:bg-[#e5c98d] transition shadow"
              >
                Explore Destinations
              </Link>
              <Link
                to="/tours/tour-details"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20 transition"
              >
                Explore Tours
              </Link>
              <Link
                to="/tour-packages/family"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20 transition"
              >
                Tour Packages
              </Link>
              <Link
                to="/tours/hotel-details"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20 transition"
              >
                Find Hotels
              </Link>
              <a
                href="#customized-travel"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#customized-travel')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white hover:bg-white/20 transition"
              >
                Plan Custom Trip
              </a>
              <Link
                to="/contact"
                className="rounded-xl bg-slate-950 border border-gold-400/50 px-5 py-2.5 font-bold text-[#f6e5b4] hover:bg-white/10 transition"
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

export default Services