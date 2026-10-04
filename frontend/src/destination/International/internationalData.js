// =========================================================================
// INTERNATIONAL DATA REPOSITORY: 20 PREMIER WORLD DESTINATIONS
// Exactly 20 major countries with 8-12 destinations each, 10+ gallery images each,
// comprehensive travel info panels, 3 hotel tiers (Budget, Premium, Luxury),
// popular experiences, cultural details, and budget estimates.
// =========================================================================

export const regionsList = [
  {
    id: 'all',
    name: 'All Regions',
    label: 'All World',
    count: '20 Countries',
    emoji: '🌍',
    desc: 'Traverse the continents — from imperial European capitals to tranquil tropical archipelagos and untamed wilderness.'
  },
  {
    id: 'europe',
    name: 'Europe',
    label: 'Europe',
    count: '6 Countries',
    emoji: '🏰',
    countries: ['France', 'Italy', 'Switzerland', 'United Kingdom', 'Spain', 'Greece'],
    desc: 'Timeless art, grand imperial palaces, haute cuisine, snow-crowned Alps, and sun-kissed Mediterranean coastlines.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'asia',
    name: 'Asia',
    label: 'Asia',
    count: '5 Countries',
    countries: ['Singapore', 'Japan', 'Thailand', 'Indonesia', 'Malaysia'],
    emoji: '⛩️',
    desc: 'Sacred Zen sanctuaries, neon cyberpunk metropolises, emerald rice terraces, and paradisiacal tropical islands.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'middleeast',
    name: 'Middle East',
    label: 'Middle East',
    count: '2 Countries',
    countries: ['United Arab Emirates', 'Turkey'],
    emoji: '🕌',
    desc: 'Golden desert dunes, cutting-edge futuristic architecture, historic Byzantine domes, and spice-scented grand souks.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'northamerica',
    name: 'North America',
    label: 'North America',
    count: '2 Countries',
    countries: ['United States', 'Canada'],
    emoji: '🗽',
    desc: 'Glacial alpine lakes, dramatic national canyons, soaring skylines, and world-class theatrical entertainment.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'africa',
    name: 'Africa',
    label: 'Africa',
    count: '2 Countries',
    countries: ['South Africa', 'Egypt'],
    emoji: '🦁',
    desc: 'Big Five safari reserves, ancient Pharaoh pyramids, scenic Cape coastlines, and centuries of civilization on the Nile.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'oceania',
    name: 'Oceania',
    label: 'Oceania',
    count: '2 Countries',
    countries: ['Australia', 'New Zealand'],
    emoji: '🦘',
    desc: 'Vibrant coral reef sanctuaries, glacial fjords, Maori heritage, and dramatic Lord of the Rings landscapes.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'indianocean',
    name: 'Indian Ocean',
    label: 'Indian Ocean',
    count: '1 Country',
    countries: ['Maldives'],
    emoji: '🏝️',
    desc: 'Crystal-clear turquoise atolls, private luxury overwater bungalows, and pristine coral barrier reefs.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=85'
  }
]

export const travelStylesList = [
  'All Styles',
  'Luxury',
  'Adventure',
  'Family',
  'Honeymoon',
  'Beach',
  'Cultural',
  'Wildlife',
  'Shopping',
  'Historical'
]

export const budgetFiltersList = ['All Budgets', 'Budget', 'Premium', 'Ultra Luxury']

export const internationalCountriesData = [
  // =========================================================================
  // 01. FRANCE
  // =========================================================================
  {
    id: 'france',
    name: 'France',
    region: 'europe',
    tagline: 'The Epicenter of Art, Haute Couture & Gastronomy',
    description:
      'From the romantic illuminated boulevards of Paris to the lavender-scented valleys of Provence and the sun-drenched azure coastline of the French Riviera, France is a timeless celebration of refined living, architectural splendor, and world-renowned wine heritage.',
    personality: 'Romantic, Sophisticated, Artistic, Epicurean',
    idealFor: 'Art lovers, romantic couples, gastronomy enthusiasts, luxury shoppers',
    travelStyles: ['Luxury', 'Cultural', 'Honeymoon', 'Historical', 'Shopping'],
    layoutVariant: 'split-hero', // layout 1
    bestTime: 'April to October',
    idealDuration: '8 – 14 Days',
    budget: '€180 – €450 / day',
    budgetTier: 'Luxury',
    currency: 'Euro (€ / EUR)',
    language: 'French (English widely spoken in tourist areas)',
    timeZone: 'Central European Time (GMT+1 / GMT+2)',
    visa: 'Schengen Visa (Apply 3-4 weeks before travel)',
    transportation: 'TGV High-Speed Rail network, Métro in Paris, Private Chauffeurs',
    cuisine: 'Coq au Vin, Croissants, Duck Confit, Bouillabaisse, Fine Bordeaux Wines & Cheeses',
    bestFor: 'Louvre Art, Michelin Dining, Riviera Sunsets, Royal Châteaux',
    recommendedStay: 'Paris Haussmann Luxury Suite & Côte d’Azur Seafront Villa',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520939817895-060bdef4ad1b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Paris', desc: 'The City of Light with tree-lined boulevards, iconic museums and sidewalk cafés.', category: 'Culture', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Eiffel Tower', desc: 'Gustave Eiffel’s wrought-iron marvel offering breathtaking 360° panoramas across Paris.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Louvre Museum', desc: 'World’s greatest repository of art displaying the Mona Lisa and Venus de Milo in an imperial palace.', category: 'Art', img: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Versailles', desc: 'The Sun King’s opulent Hall of Mirrors and magnificent French royal formal gardens.', category: 'History', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Nice', desc: 'Sun-drenched Promenade des Anglais with turquoise Mediterranean waters and Belle Époque charm.', category: 'Beach', img: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Cannes', desc: 'Glamorous film festival capital lined with superyachts, designer boutiques and private beaches.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1520939817895-060bdef4ad1b?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'French Riviera', desc: 'The glamorous Côte d’Azur coastal strip studded with cliffs, secluded coves and celebrity villas.', category: 'Beach', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Lyon', desc: 'France’s culinary capital with secret traboules passages and renowned traditional bouchons.', category: 'Food', img: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Bordeaux', desc: 'Prestigious UNESCO wine châteaux, modern wine museums, and grand 18th-century riverside architecture.', category: 'Food', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.87 },
      { name: 'Mont Saint-Michel', desc: 'Enchanting Gothic abbey perched atop a tidal granite island rising from Atlantic waves.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Strasbourg', desc: 'Fairytale Alsatian timbered canals and towering sandstone Gothic cathedral at the crossroads of Europe.', category: 'Culture', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.84 },
      { name: 'Provence', desc: 'Rolling purple lavender fields, hilltop stone villages, and leisurely rosé tastings under golden sun.', category: 'Nature', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.91 }
    ],
    experiences: [
      { name: 'Private Sunset Seine River Yacht', type: 'Romance', icon: 'Heart', desc: 'Champagne toast as the Eiffel Tower sparkles.' },
      { name: 'VIP After-Hours Louvre Tour', type: 'Art', icon: 'Sparkles', desc: 'Exclusive access without the daytime crowds.' },
      { name: 'Château Margaux Grand Cru Tasting', type: 'Food', icon: 'Utensils', desc: 'Private barrel room tasting with master sommelier.' },
      { name: 'Haute Couture Atelier in Paris', type: 'Shopping', icon: 'Crown', desc: 'Bespoke styling sessions in historic fashion houses.' },
      { name: 'Monaco & Eze Helicopter Flight', type: 'Luxury', icon: 'Compass', desc: 'Aerial panoramas over the Côte d’Azur coastline.' }
    ],
    hotels: [
      {
        name: 'Hôtel Plaza Athénée',
        city: 'Paris (8th Arr.)',
        tier: 'Luxury',
        rating: 4.9,
        price: 'From €1,150 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Dior Spa, Haute Cuisine Restaurant, Balcony Eiffel Tower Views, 24/7 Concierge',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hotel Le Negresco',
        city: 'Nice (French Riviera)',
        tier: 'Premium',
        rating: 4.8,
        price: 'From €380 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Private Beach Club, Michelin Dining, Historic Art Collection, Sea Views',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Grand Hôtel des Balcons',
        city: 'Paris (Saint-Germain)',
        tier: 'Budget',
        rating: 4.5,
        price: 'From €135 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Central Boulevard Location, Charming Art Nouveau Décor, Free High-Speed WiFi',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 02. ITALY
  // =========================================================================
  {
    id: 'italy',
    name: 'Italy',
    region: 'europe',
    tagline: 'The Cradle of the Renaissance, Dolce Vita & Coastal Elegance',
    description:
      'Immerse yourself in thousands of years of living history amidst Rome’s ancient amphitheaters, glide through Venetian canals on handcrafted gondolas, admire Renaissance masterpieces in Florence, and unwind along the breathtaking cliffs of the Amalfi Coast.',
    personality: 'Passionate, Storied, Scenic, Gastronomic',
    idealFor: 'Culture buffs, romantic couples, culinary travelers, photographers',
    travelStyles: ['Luxury', 'Cultural', 'Honeymoon', 'Historical', 'Beach'],
    layoutVariant: 'editorial-asymmetric', // layout 2
    bestTime: 'April to June & September to November',
    idealDuration: '9 – 16 Days',
    budget: '€160 – €420 / day',
    budgetTier: 'Luxury',
    currency: 'Euro (€ / EUR)',
    language: 'Italian (English widespread in cities & resorts)',
    timeZone: 'Central European Time (GMT+1)',
    visa: 'Schengen Visa (Apply 3-4 weeks prior)',
    transportation: 'Frecciarossa High-Speed Trains, Private Water Taxis, Ferrari Rentals',
    cuisine: 'Handmade Tagliatelle al Tartufo, Neapolitan Pizza, Risotto alla Milanese, Gelato, Brunello di Montalcino',
    bestFor: 'Colosseum, Venice Canals, Uffizi Gallery, Amalfi Cliffside Drives',
    recommendedStay: 'Venetian Grand Canal Palace or Positano Cliffside Villa',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Rome', desc: 'The Eternal City where ancient gladiatorial ruins harmonize with Baroque fountains.', category: 'History', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Venice', desc: 'Magical floating city of marble palazzos, arching bridges and quiet lagoon canals.', category: 'Culture', img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Florence', desc: 'Cradle of the Italian Renaissance crowned by Brunelleschi’s terracotta Duomo dome.', category: 'Art', img: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Milan', desc: 'Global fashion capital boasting the intricate Gothic Duomo and Da Vinci’s Last Supper.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Amalfi Coast', desc: 'Pastel cliffside villages tumbling dramatically into shimmering cobalt Mediterranean waters.', category: 'Beach', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Naples', desc: 'Vibrant birthplace of authentic wood-fired pizza and gateway to historic Pompeii.', category: 'Food', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.85 },
      { name: 'Pisa', desc: 'Miracle Square featuring the legendary Romanesque Leaning Tower and marble Baptistery.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', rating: 4.82 },
      { name: 'Tuscany', desc: 'Cypress-fringed rolling hills, fortified hilltop medieval towns and Chianti wine estates.', category: 'Nature', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Lake Como', desc: 'Aristocratic glacial alpine lake bordered by neoclassical villas, gardens and speedboats.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Sicily', desc: 'Ancient Greek temples, smoking Mount Etna volcano, and Arab-Norman coastal architecture.', category: 'History', img: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Sardinia', desc: 'Emerald coastlines, secluded white-sand coves, and pristine superyacht harbors.', category: 'Beach', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Cinque Terre', desc: 'Five colorful fishing hamlets linked by dramatic seaside hiking trails and terraced vineyards.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', rating: 4.93 }
    ],
    experiences: [
      { name: 'Private Riva Boat on Lake Como', type: 'Luxury', icon: 'Compass', desc: 'Cruise past Villa Balbianello with chilled Franciacorta.' },
      { name: 'Vatican Museums Private Evening Entry', type: 'Art', icon: 'Crown', desc: 'Admire Michelangelo’s Sistine Chapel in tranquil silence.' },
      { name: 'Truffle Hunting in Piedmont Woods', type: 'Food', icon: 'Utensils', desc: 'Scour oak forests with expert hounds followed by fresh pasta.' },
      { name: 'Sunset Gondola Serenade in Venice', type: 'Romance', icon: 'Heart', desc: 'Gliding along quiet side canals away from the tourist path.' }
    ],
    hotels: [
      {
        name: 'Belmond Hotel Caruso',
        city: 'Ravello (Amalfi Coast)',
        tier: 'Luxury',
        rating: 4.95,
        price: 'From €1,200 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Cliff-edge Infinity Pool, 11th-Century Palazzetto, Mediterranean Gardens, Sea-view Suites',
        img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Villa d’Este',
        city: 'Cernobbio (Lake Como)',
        tier: 'Premium',
        rating: 4.88,
        price: 'From €720 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Floating Pool on Lake Como, 25-Acre Renaissance Park, Michelin Dining, Private Pier',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hotel Artemide',
        city: 'Rome (Via Nazionale)',
        tier: 'Budget',
        rating: 4.65,
        price: 'From €145 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Panoramic Rooftop Bar, Full Artemisio Wellness Spa, Complimentary Minibar',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 03. SWITZERLAND
  // =========================================================================
  {
    id: 'switzerland',
    name: 'Switzerland',
    region: 'europe',
    tagline: 'Snow-Crowned Alpine Summits, Pristine Lakes & Pure Serenity',
    description:
      'Experience nature at its most majestic in the Swiss Confederation. World-class panoramic alpine express trains, glistening glacier resorts, fairytale lakeside castles, and unmatched Swiss luxury watchmaking and hospitality standards.',
    personality: 'Pristine, Alpine, Luxurious, Invigorating',
    idealFor: 'Skiers, alpine hikers, honeymooners, luxury train lovers',
    travelStyles: ['Luxury', 'Adventure', 'Honeymoon', 'Nature'],
    layoutVariant: 'cinematic-full', // layout 3
    bestTime: 'December to March (Skiing) & June to September (Hiking)',
    idealDuration: '7 – 12 Days',
    budget: 'CHF 220 – CHF 550 / day',
    budgetTier: 'Ultra Luxury',
    currency: 'Swiss Franc (CHF)',
    language: 'German, French, Italian, Romansh (English universal)',
    timeZone: 'Central European Time (GMT+1)',
    visa: 'Schengen Visa (Apply 3-4 weeks prior)',
    transportation: 'Swiss Travel Pass (Glacier Express, Bernina Express, Cogwheel Rail)',
    cuisine: 'Alpine Cheese Fondue, Raclette, Rösti, Zürcher Geschnetzeltes, Swiss Chocolates',
    bestFor: 'Matterhorn Views, Jungfrau Summit, Lake Geneva Stays, Luxury Skiing',
    recommendedStay: 'Zermatt Chalet Facing Matterhorn & Grand Hotel on Lake Lucerne',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Zurich', desc: 'Cosmopolitan banking hub on Lake Zurich lined with high-end boutiques and museums.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { name: 'Geneva', desc: 'Global diplomatic capital on Lake Geneva famed for Jet d’Eau and luxury watchmakers.', category: 'Culture', img: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Lucerne', desc: 'Idyllic medieval city with flower-draped Chapel Bridge and Mount Pilatus cogwheel rail.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Interlaken', desc: 'Adventure hub nestled between Lake Thun and Lake Brienz beneath the Jungfrau massif.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Zermatt', desc: 'Car-free alpine jewel offering year-round skiing at the foot of the iconic pyramid Matterhorn.', category: 'Mountains', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Jungfrau', desc: 'Top of Europe at 3,454m with Ice Palace caverns and panoramic Aletsch Glacier views.', category: 'Nature', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Grindelwald', desc: 'Glacier village framed by the sheer North Face of the Eiger with scenic cliff walks.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Bern', desc: 'Swiss capital featuring UNESCO-listed medieval sandstone arcades and historic clock towers.', category: 'History', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Lausanne', desc: 'Olympic capital built on hillside slopes overlooking Lake Geneva and the French Alps.', category: 'Culture', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.85 },
      { name: 'St. Moritz', desc: 'Birthplace of alpine winter tourism and magnet for royalty, polo on snow, and champagne.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Montreux', desc: 'Swiss Riviera jewel with medieval Château de Chillon and annual international jazz festival.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { name: 'Lauterbrunnen', desc: 'Valley of 72 thundering waterfalls flanked by towering limestone cliffs that inspired Tolkien.', category: 'Nature', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', rating: 4.98 }
    ],
    experiences: [
      { name: 'Glacier Express Excellence Class', type: 'Luxury', icon: 'Compass', desc: 'Panoramic carriage through Swiss gorges with 5-course gourmet dining.' },
      { name: 'Matterhorn Glacier Paradise Cable Car', type: 'Mountains', icon: 'Mountain', desc: 'Highest cable car station in Europe with views of 38 alpine peaks.' },
      { name: 'Tandem Paraglide over Interlaken Lakes', type: 'Adventure', icon: 'Sparkles', desc: 'Soar with thermals between turquoise lakes and snowy peaks.' },
      { name: 'Artisan Chocolate Masterclass in Zurich', type: 'Food', icon: 'Utensils', desc: 'Craft truffles with master Swiss chocolatiers.' }
    ],
    hotels: [
      {
        name: 'The Chedi Andermatt',
        city: 'Andermatt (Swiss Alps)',
        tier: 'Luxury',
        rating: 4.98,
        price: 'From CHF 980 / night',
        priceNote: 'Estimated Starting Price',
        facilities: '2,400m² Hydrothermal Spa, Michelin Japanese Restaurant, Fireplaces in Every Suite, Ski Butler',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bürgenstock Hotel & Alpine Spa',
        city: 'Lake Lucerne',
        tier: 'Premium',
        rating: 4.92,
        price: 'From CHF 650 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Infinity Pool Suspended 500m Above Lake Lucerne, Cliff Lift Access, Private Catamaran',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hotel Derby Grindelwald',
        city: 'Grindelwald (Bernese Oberland)',
        tier: 'Budget',
        rating: 4.58,
        price: 'From CHF 175 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Direct Train Station Proximity, Balcony Views of Eiger North Face, Swiss Breakfast Buffet',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 04. UNITED KINGDOM
  // =========================================================================
  {
    id: 'united-kingdom',
    name: 'United Kingdom',
    region: 'europe',
    tagline: 'Royal Palaces, Storied Castles & Dramatic Countrysides',
    description:
      'Encounter an extraordinary blend of pageantry, literary heritage, and cutting-edge culture. From Big Ben and West End theaters in London to Edinburgh’s volcanic fortress, the dreaming spires of Oxford, and the untamed misty Scottish Highlands.',
    personality: 'Royal, Historic, Literary, Cosmopolitan',
    idealFor: 'History buffs, royal enthusiasts, theatergoers, countryside explorers',
    travelStyles: ['Cultural', 'Historical', 'Luxury', 'Family'],
    layoutVariant: 'magazine-showcase', // layout 4
    bestTime: 'May to September',
    idealDuration: '8 – 14 Days',
    budget: '£150 – £380 / day',
    budgetTier: 'Premium',
    currency: 'British Pound (£ / GBP)',
    language: 'English',
    timeZone: 'Greenwich Mean Time (GMT / BST)',
    visa: 'Standard Visitor Visa (Apply 4-6 weeks prior)',
    transportation: 'National Rail network, London Underground Tube, Black Cabs',
    cuisine: 'Traditional Sunday Roast with Yorkshire Pudding, Afternoon Tea, Fish & Chips, Scotch Whisky',
    bestFor: 'Buckingham Palace, West End Musicals, Stonehenge Solstice, Highland Lochan Trails',
    recommendedStay: 'London Mayfair Luxury Suite & Scottish Highlands Castle Estate',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'London', desc: 'Tower of London, Westminster Abbey, Buckingham Palace and world-leading West End shows.', category: 'Culture', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Edinburgh', desc: 'Scotland’s capital with its volcanic castle, historic Royal Mile, and Arthur’s Seat peak.', category: 'History', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Manchester', desc: 'Dynamic industrial heritage, football titan stadiums, and vibrant indie music culture.', category: 'Culture', img: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=600&q=80', rating: 4.82 },
      { name: 'Liverpool', desc: 'Birthplace of The Beatles, UNESCO Albert Docks, and rich maritime maritime history.', category: 'Art', img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=600&q=80', rating: 4.83 },
      { name: 'Bath', desc: 'Honey-colored Georgian Royal Crescent and ancient steaming Roman thermal bath springs.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Oxford', desc: 'The City of Dreaming Spires with centuries-old colleges, Bodleian Library, and rowing punts.', category: 'History', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Cambridge', desc: 'Stunning Gothic King’s College Chapel punting along the River Cam amidst willow trees.', category: 'Culture', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { name: 'Stonehenge', desc: 'Mysterious 5,000-year-old megalithic stone circle aligned to celestial summer solstice axes.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Scottish Highlands', desc: 'Dramatic lochs, ancient clan strongholds, and the mist-shrouded peaks of Glen Coe.', category: 'Nature', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Lake District', desc: 'England’s premier national park of picturesque tarns, fells, and Beatrix Potter’s valleys.', category: 'Nature', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Windsor', desc: 'World’s oldest and largest occupied castle and official royal residence of British monarchs.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'York', desc: 'Viking origins, monumental Gothic York Minster, and the cobblestone medieval Shambles.', category: 'History', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80', rating: 4.87 }
    ],
    experiences: [
      { name: 'Private Royal Crown Jewels Tour', type: 'Heritage', icon: 'Crown', desc: 'Early morning access to the Tower of London before the gates open.' },
      { name: 'Traditional High Tea at The Ritz', type: 'Food', icon: 'Utensils', desc: 'Silver tiered stands with freshly baked warm scones and clotted cream.' },
      { name: 'Single Malt Whisky Tour in Speyside', type: 'Food', icon: 'Sparkles', desc: 'Rare cask tastings at Macallan and Glenfiddich distilleries.' },
      { name: 'Private Punting Cruise in Cambridge', type: 'Romance', icon: 'Heart', desc: 'Glide past College Backs with chilled Pimm’s and strawberries.' }
    ],
    hotels: [
      {
        name: 'The Savoy',
        city: 'London (Strand)',
        tier: 'Luxury',
        rating: 4.94,
        price: 'From £950 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Butler Service on All Floors, Thames River Panorama, Gordon Ramsay Savoy Grill, Indoor Pool',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Balmoral',
        city: 'Edinburgh (Princes St)',
        tier: 'Premium',
        rating: 4.89,
        price: 'From £420 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Direct Castle Views, Scotch Bar with 500+ Whiskies, Michelin Dining, Clocktower Landmark',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Hoxton, Holborn',
        city: 'London (Holborn)',
        tier: 'Budget',
        rating: 4.62,
        price: 'From £165 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Chic Industrial Design, Central West End Walking Access, Vibrant Lobby Coffee Bar',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 05. UNITED ARAB EMIRATES
  // =========================================================================
  {
    id: 'united-arab-emirates',
    name: 'United Arab Emirates',
    region: 'middleeast',
    tagline: 'Futuristic Architectural Marvels & Arabian Glamour',
    description:
      'Where ancient Bedouin traditions harmonize with audacious 21st-century ambition. Home to the world’s tallest tower, artificial palm-shaped archipelagoes, gold-leafed royal mosques, ultra-luxury desert resorts, and world-class shopping spectacles.',
    personality: 'Futuristic, Opulent, Thrilling, Cosmopolitan',
    idealFor: 'Luxury shoppers, architecture enthusiasts, families, thrill-seekers',
    travelStyles: ['Luxury', 'Family', 'Shopping', 'Adventure'],
    layoutVariant: 'split-hero',
    bestTime: 'November to March',
    idealDuration: '5 – 8 Days',
    budget: 'AED 600 – AED 1,800 / day',
    budgetTier: 'Ultra Luxury',
    currency: 'UAE Dirham (AED)',
    language: 'Arabic (English is the primary language of business & leisure)',
    timeZone: 'Gulf Standard Time (GMT+4)',
    visa: 'Visa on Arrival / 30-day E-visa for most travelers',
    transportation: 'Driverless Dubai Metro, Supercar & Yacht Charters, Careem/Uber',
    cuisine: 'Shawarma, Lamb Al Harees, Machboos, Mezze Platters, Camel Milk Chocolates',
    bestFor: 'Burj Khalifa Skydeck, Desert Dune Bashing, Palm Jumeirah Stays, Louvre Abu Dhabi',
    recommendedStay: 'Burj Al Arab Suite or Desert Oasis Private Villa',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Dubai', desc: 'City of gold featuring soaring glass skyscrapers, artificial archipelagos and megamalls.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Abu Dhabi', desc: 'UAE capital boasting the majestic Sheikh Zayed Grand Mosque and Louvre Abu Dhabi.', category: 'Culture', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Sharjah', desc: 'Cultural heartbeat of the Emirates celebrated for art museums and heritage souks.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80', rating: 4.79 },
      { name: 'Ras Al Khaimah', desc: 'Adventure haven home to Jebel Jais mountain and the world’s longest zipline.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=600&q=80', rating: 4.84 },
      { name: 'Fujairah', desc: 'Pristine coastal enclave tucked between the Hajar Mountains and Gulf of Oman coral reefs.', category: 'Beach', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.81 },
      { name: 'Palm Jumeirah', desc: 'Iconic man-made palm archipelago hosting ultra-luxury beach resorts and waterparks.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Burj Khalifa', desc: 'The world’s tallest tower piercing the clouds at 828 meters with outdoor sky observation.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Dubai Marina', desc: 'Vibrant waterfront boardwalk packed with superyachts, al fresco dining and skyscrapers.', category: 'Shopping', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Desert Safari', desc: 'Thrilling 4x4 dune bashing across golden Arabian sands ending with Bedouin starlit dining.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Yas Island', desc: 'Entertainment epicenter with Ferrari World, Yas Marina F1 Circuit, and Warner Bros.', category: 'Family', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.88 }
    ],
    experiences: [
      { name: 'Private Luxury Yacht Charter at Marina', type: 'Luxury', icon: 'Compass', desc: 'Cruise past Atlantis The Royal and the Dubai Ain Ferris wheel.' },
      { name: 'VIP Desert Heritage Camp Dinner', type: 'Adventure', icon: 'Sparkles', desc: 'Falconry demonstration followed by starlit Emirati feast.' },
      { name: 'Burj Khalifa At The Top SKY (148th Fl)', type: 'Luxury', icon: 'Crown', desc: 'Exclusive lounge hospitality 555 meters above Dubai.' },
      { name: 'Helicopter Tour over Palm Jumeirah', type: 'Adventure', icon: 'Compass', desc: 'Aerial vantage points across the Persian Gulf coastline.' }
    ],
    hotels: [
      {
        name: 'Burj Al Arab Jumeirah',
        city: 'Dubai (Umm Suqeim)',
        tier: 'Luxury',
        rating: 4.99,
        price: 'From AED 5,800 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Private Helipad, Rolls-Royce Fleet, 24k Gold Interiors, Infinite Terrace Pool',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Atlantis, The Palm',
        city: 'Dubai (Palm Jumeirah)',
        tier: 'Premium',
        rating: 4.86,
        price: 'From AED 1,450 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Complimentary Aquaventure Waterpark, The Lost Chambers Aquarium, Nobu Restaurant',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Rove Downtown Dubai',
        city: 'Dubai (Downtown)',
        tier: 'Budget',
        rating: 4.67,
        price: 'From AED 320 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Direct Burj Khalifa Views, Outdoor Saltwater Pool, Walking Distance to Dubai Mall',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 06. SINGAPORE
  // =========================================================================
  {
    id: 'singapore',
    name: 'Singapore',
    region: 'asia',
    tagline: 'The Garden City of Futuristic Biophilic Architecture',
    description:
      'A glittering tropical metropolis where nature weaves seamlessly into urban design. Towering neon Supertrees, climate-controlled biodomes, Michelin-starred street food stalls, Sentosa island resorts, and the world’s most celebrated aviation gateway at Jewel Changi.',
    personality: 'Hypermodern, Green, Culinary, Safe',
    idealFor: 'Families, gastronomy lovers, urban explorers, honeymooners',
    travelStyles: ['Family', 'Shopping', 'Luxury', 'Cultural'],
    layoutVariant: 'editorial-asymmetric',
    bestTime: 'November to February & June to August',
    idealDuration: '4 – 7 Days',
    budget: 'SGD 180 – SGD 480 / day',
    budgetTier: 'Luxury',
    currency: 'Singapore Dollar (SGD / S$)',
    language: 'English, Mandarin, Malay, Tamil',
    timeZone: 'Singapore Time (GMT+8)',
    visa: 'Visa-free entry for most countries (SG Arrival Card online)',
    transportation: 'Ultra-efficient MRT Subway system, Grab app taxis',
    cuisine: 'Hainanese Chicken Rice, Chili Crab with Mantou, Laksa, Satay Skewers, Kaya Toast',
    bestFor: 'Marina Bay Sands Infinity Pool, Gardens by the Bay, Hawker Centres, Sentosa',
    recommendedStay: 'Marina Bay Sands Sky Suite or Sentosa Island Beachfront Villa',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Marina Bay', desc: 'World-famous bayfront framed by the three towers of MBS, ArtScience Museum and Helix Bridge.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Gardens by the Bay', desc: 'Futuristic wonderland featuring 50m Supertrees, Cloud Forest waterfall and Flower Dome.', category: 'Nature', img: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Sentosa', desc: 'Resort island with golden sand beaches, luxury beach clubs and championship golf.', category: 'Beach', img: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Universal Studios', desc: 'Southeast Asia’s premier theme park with Battlestar Galactica and Jurassic Park rides.', category: 'Family', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Orchard Road', desc: 'Two-kilometer shopping boulevard packed with iconic multi-level luxury shopping malls.', category: 'Shopping', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Chinatown', desc: 'Heritage shophouses, Buddha Tooth Relic Temple, and bustling Michelin hawker stalls.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.87 },
      { name: 'Little India', desc: 'Vibrant cultural enclave with flower garland stalls, Sri Veeramakaliamman Temple and curries.', category: 'Culture', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.82 },
      { name: 'Clarke Quay', desc: 'Historic riverside warehouse district turned bustling evening dining and cocktail hub.', category: 'Food', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.85 },
      { name: 'Singapore Zoo', desc: 'World’s acclaimed open-concept rainforest zoo and nocturnal wildlife Night Safari.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Jewel Changi', desc: 'Architectural masterpiece featuring the world’s tallest indoor waterfall (HSBC Rain Vortex).', category: 'Modern Architecture', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.96 }
    ],
    experiences: [
      { name: 'Marina Bay Sands Infinity Pool at Sunset', type: 'Luxury', icon: 'Crown', desc: 'Swim 57 levels above the Singapore skyline.' },
      { name: 'Private Night Safari VIP Tram & Wildlife Dinner', type: 'Wildlife', icon: 'Sun', desc: 'Exclusive up-close encounters with nocturnal Asian wildlife.' },
      { name: 'Michelin Hawker Crawl in Maxwell & Chinatown', type: 'Food', icon: 'Utensils', desc: 'Taste Tian Tian Chicken Rice and char kway teow with culinary guide.' },
      { name: 'SuperTree Grove Garden Rhapsody Light Show', type: 'Culture', icon: 'Sparkles', desc: 'Mesmerizing symphonic music and laser synchronization.' }
    ],
    hotels: [
      {
        name: 'Marina Bay Sands',
        city: 'Marina Bay',
        tier: 'Luxury',
        rating: 4.92,
        price: 'From SGD 850 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'World’s Largest Rooftop Infinity Pool, Banyan Tree Spa, Direct Luxury Mall Access, 45+ Restaurants',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Fullerton Hotel Singapore',
        city: 'Marina Bay Waterfront',
        tier: 'Premium',
        rating: 4.88,
        price: 'From SGD 460 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Historic 1928 Neoclassical Landmark, 25m Outdoor Pool overlooking Singapore River',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hotel Clover 33 Jalan Sultan',
        city: 'Kampong Glam',
        tier: 'Budget',
        rating: 4.51,
        price: 'From SGD 140 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Restored Heritage Shophouses, Walking Distance to Arab Street & MRT, Free High-Speed WiFi',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 07. JAPAN
  // =========================================================================
  {
    id: 'japan',
    name: 'Japan',
    region: 'asia',
    tagline: 'Timeless Shinto Traditions & Blade Runner Neon Horizons',
    description:
      'A land of extraordinary contrasts where thousands of years of Zen serenity meet hyper-technological neon metropolises. Gilded shrines nestled in bamboo groves, sacred snow-capped Mount Fuji, bullet trains hurtling across countryside, and sublime Michelin omakase.',
    personality: 'Harmonious, Spiritual, Futuristic, Gastronomic',
    idealFor: 'Foodies, cultural purists, photographers, technology lovers',
    travelStyles: ['Cultural', 'Luxury', 'Historical', 'Food'],
    layoutVariant: 'cinematic-full',
    bestTime: 'March to May (Cherry Blossoms) & October to November (Autumn Foliage)',
    idealDuration: '10 – 16 Days',
    budget: '¥18,000 – ¥45,000 / day',
    budgetTier: 'Luxury',
    currency: 'Japanese Yen (¥ / JPY)',
    language: 'Japanese (English signposting universal across transit)',
    timeZone: 'Japan Standard Time (GMT+9)',
    visa: 'Visa-free for 68 countries (eVisa system active)',
    transportation: 'Shinkansen Bullet Train Network, Tokyo Metro & Yamanote Line',
    cuisine: 'Edomae Sushi, A5 Wagyu Beef Teppanyaki, Tonkotsu Ramen, Tempura, Matcha Confections',
    bestFor: 'Kyoto Geisha Districts, Mount Fuji Reflection, Shinjuku Neon, Hakone Ryokan Onsens',
    recommendedStay: 'Kyoto Traditional Ryokan with Private Onsen & Tokyo Skyscraper Suite',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Tokyo', desc: 'World’s most populated megacity where Shibuya crossing meets tranquil Meiji Shrine.', category: 'Culture', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Kyoto', desc: 'Ancient imperial heart with 2,000 Shinto shrines, Zen rock gardens and Geisha teas.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Osaka', desc: 'Japan’s street food capital famed for Dotonbori neon canal and Osaka Castle.', category: 'Food', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Mount Fuji', desc: 'Sacred volcanic cone rising 3,776 meters with mirror reflections in Lake Kawaguchi.', category: 'Nature', img: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Nara', desc: 'Ancient 8th-century capital where hundreds of sacred bow-trained deer roam historic parklands.', category: 'Culture', img: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Hiroshima', desc: 'Inspiring Peace Memorial Park and the vermilion floating torii gate of Miyajima.', category: 'History', img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Hokkaido', desc: 'Northern wilderness renowned for powdery ski slopes, hot springs, and fresh seafood.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Okinawa', desc: 'Subtropical coral islands with turquoise waters, Ryukyu kingdom castles, and Longevity diet.', category: 'Beach', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Hakone', desc: 'Mount Fuji hot spring sanctuary with scenic pirate ship cruises across volcanic Lake Ashi.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { name: 'Nikko', desc: 'UNESCO Toshogu Shrine set amidst ancient towering cedars and misty mountain waterfalls.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.87 },
      { name: 'Kobe', desc: 'Cosmopolitan seaside port framed by Mount Rokko and famous for legendary marbling beef.', category: 'Food', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Yokohama', desc: 'Futuristic Minato Mirai harbor with towering Ferris wheel, ramen museum and vibrant Chinatown.', category: 'Culture', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', rating: 4.85 }
    ],
    experiences: [
      { name: 'Private Zen Tea Ceremony with Kyoto Geiko', type: 'Culture', icon: 'Sparkles', desc: 'Experience the ancient wabi-sabi ritual in a 300-year-old teahouse.' },
      { name: 'Tokyo 3-Star Michelin Omakase Counter', type: 'Food', icon: 'Utensils', desc: 'Seasonal seafood sourced at dawn from Toyosu fish market.' },
      { name: 'Private Hakone Onsen Bath with Fuji View', type: 'Luxury', icon: 'Crown', desc: 'Therapeutic mineral springs surrounded by autumn maple leaves.' },
      { name: 'Early Morning Fushimi Inari Torii Walk', type: 'Spiritual', icon: 'Compass', desc: 'Hike through 10,000 crimson gates in morning mist without crowds.' }
    ],
    hotels: [
      {
        name: 'Aman Tokyo',
        city: 'Tokyo (Otemachi)',
        tier: 'Luxury',
        rating: 4.97,
        price: 'From ¥185,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: '30-Meter Skyscraper Pool, Traditional Japanese Paper Lantern Architecture, Views of Imperial Palace',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hoshinoya Kyoto',
        city: 'Kyoto (Arashiyama)',
        tier: 'Premium',
        rating: 4.93,
        price: 'From ¥85,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Arrival by Private Wooden Boat on Oi River, Traditional Ryokan Architecture, Kaiseki Dining',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Hotel Gracery Shinjuku',
        city: 'Tokyo (Kabukicho)',
        tier: 'Budget',
        rating: 4.55,
        price: 'From ¥15,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Iconic Godzilla Head Terrace, Steps from Shinjuku Transit, Modern Compact Pod Stays',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 08. THAILAND
  // =========================================================================
  {
    id: 'thailand',
    name: 'Thailand',
    region: 'asia',
    tagline: 'The Land of Smiles, Gilded Temples & Emerald Islands',
    description:
      'A tropical wonderland steeped in warm hospitality, spiritual serenity, and breathtaking natural beauty. Gilded Buddha statues at Bangkok’s Grand Palace, limestone karsts jutting out of turquoise Andaman seas, and fragrant sizzling night markets.',
    personality: 'Vibrant, Warm, Tropical, Spiritual',
    idealFor: 'Beach lovers, backpackers, luxury resort seekers, food enthusiasts',
    travelStyles: ['Beach', 'Cultural', 'Honeymoon', 'Adventure', 'Food'],
    layoutVariant: 'magazine-showcase',
    bestTime: 'November to April',
    idealDuration: '7 – 14 Days',
    budget: '฿2,500 – ฿7,500 / day',
    budgetTier: 'Budget',
    currency: 'Thai Baht (฿ / THB)',
    language: 'Thai (English widespread in tourist hotspots)',
    timeZone: 'Indochina Time (GMT+7)',
    visa: 'Visa Exemption (60 Days for 93 nationalities)',
    transportation: 'Tuk-tuks, Bangkok BTS Skytrain, Longtail Boats, Domestic Flights',
    cuisine: 'Tom Yum Goong, Pad Thai, Green Chicken Curry, Som Tum Papaya Salad, Mango Sticky Rice',
    bestFor: 'Phi Phi Islands, Wat Pho Golden Reclining Buddha, Chiang Mai Elephants, Beach Clubs',
    recommendedStay: 'Phuket Cliffside Pool Villa & Chiang Mai Boutique Teak Sanctuary',
    heroImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Bangkok', desc: 'Thailand’s pulsating capital with the Grand Palace, Wat Arun on the Chao Phraya, and street food.', category: 'Culture', img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Phuket', desc: 'Pearl of the Andaman offering luxury beachfront resorts, Old Town heritage, and yachting.', category: 'Beach', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Pattaya', desc: 'Bustling coastal hub known for Sanctuary of Truth wooden temple and offshore coral islands.', category: 'Beach', img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=600&q=80', rating: 4.78 },
      { name: 'Krabi', desc: 'Dramatic limestone karst cliffs framing Railay Beach and turquoise mangrove sea caves.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Chiang Mai', desc: 'Mountain sanctuary with 300+ gilded Lanna temples, ethical elephant reserves, and night bazaars.', category: 'Culture', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Chiang Rai', desc: 'Home to the surreal contemporary White Temple (Wat Rong Khun) and Blue Temple in the hills.', category: 'Art', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Koh Samui', desc: 'Palm-fringed Gulf island boasting luxury boutique villas, coconut groves, and Fisherman’s Village.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Ayutthaya', desc: 'UNESCO ancient Siamese capital ruins with headless Buddha statues wrapped in banyan roots.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Phi Phi Islands', desc: 'Legendary Maya Bay enclosed by 100m sheer cliffs and vibrant coral snorkeling reefs.', category: 'Nature', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Koh Tao', desc: 'World-renowned diving haven famed for whale shark migrations, calm bays, and coral gardens.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.9 }
    ],
    experiences: [
      { name: 'Private Longtail Boat to Secret Krabi Lagoons', type: 'Adventure', icon: 'Compass', desc: 'Glide through hidden karst passages into emerald lagoons.' },
      { name: 'Ethical Elephant Sanctuary Day in Chiang Mai', type: 'Wildlife', icon: 'Sun', desc: 'Feed, walk alongside, and bathe rescued gentle giants in mountain rivers.' },
      { name: 'Chao Phraya River Luxury Dinner Cruise', type: 'Romance', icon: 'Heart', desc: 'Pass the illuminated Wat Arun and Grand Palace under the stars.' },
      { name: 'Michelin Street Food Safari with Tuk-Tuk', type: 'Food', icon: 'Utensils', desc: 'Taste Jay Fai’s iconic crab omelet and Pad Thai Thip Samai.' }
    ],
    hotels: [
      {
        name: 'Trisara Phuket',
        city: 'Phuket (Choeng Thale)',
        tier: 'Luxury',
        rating: 4.96,
        price: 'From ฿24,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'All Ocean-Facing Pool Villas, Michelin-starred PRU Restaurant, Private Beach Cove',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Anantara Riverside Bangkok Resort',
        city: 'Bangkok (Chao Phraya)',
        tier: 'Premium',
        rating: 4.87,
        price: 'From ฿6,200 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Tropical Riverside Oasis, Complimentary Shuttle Boat to IconSiam, Manohra Dinner Cruise',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Lub d Phuket Patong',
        city: 'Phuket (Patong Beach)',
        tier: 'Budget',
        rating: 4.62,
        price: 'From ฿1,200 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'See-Through Pool, Social Co-working Lounge, 2-Minute Walk to Patong Beach',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 09. INDONESIA
  // =========================================================================
  {
    id: 'indonesia',
    name: 'Indonesia',
    region: 'asia',
    tagline: 'Emerald Rice Terraces, Sacred Volcanoes & Island Bliss',
    description:
      'An archipelago of over 17,000 islands spanning equatorial waters. From Bali’s mystical Hindu temples, healing yoga sanctuaries, and dramatic surf breaks to Komodo’s prehistoric dragons and the tranquil car-free coral shores of the Gili Islands.',
    personality: 'Mystical, Tropical, Relaxed, Adventurous',
    idealFor: 'Honeymooners, wellness seekers, surfers, adventure explorers',
    travelStyles: ['Honeymoon', 'Beach', 'Adventure', 'Cultural'],
    layoutVariant: 'split-hero',
    bestTime: 'April to October (Dry Season)',
    idealDuration: '8 – 14 Days',
    budget: 'IDR 800,000 – IDR 2,500,000 / day',
    budgetTier: 'Budget',
    currency: 'Indonesian Rupiah (IDR / Rp)',
    language: 'Bahasa Indonesia (English widely used in Bali & tourist hubs)',
    timeZone: 'WITA (Bali GMT+8) / WIB (Jakarta GMT+7)',
    visa: 'Visa on Arrival (30 Days with online extension)',
    transportation: 'Private Chauffeured Vans, Scooters, Speedboat Island Ferries',
    cuisine: 'Nasi Goreng, Babi Guling, Beef Rendang, Sate Lilit, Fresh Young Coconuts',
    bestFor: 'Ubud Rice Terraces, Uluwatu Cliff Temple Sunsets, Komodo Dragons, Mount Batur Sunrise',
    recommendedStay: 'Ubud Jungle Infinity Pool Villa & Seminyak Luxury Beach Resort',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Bali', desc: 'Island of the Gods boasting sacred temples, volcanic horizons, lush jungle ravines and world-class surf.', category: 'Culture', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Ubud', desc: 'Cultural and spiritual heart of Bali with emerald Tegalalang rice terraces and sacred Monkey Forest.', category: 'Nature', img: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Seminyak', desc: 'Cosmopolitan seaside enclave renowned for designer boutiques, sunset beach clubs and fine dining.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Nusa Dua', desc: 'Gated luxury peninsula lined with five-star international beachfront mega-resorts and calm lagoons.', category: 'Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { name: 'Jakarta', desc: 'Indonesia’s bustling capital blending historical Dutch Batavia quarters with modern skyscrapers.', category: 'Culture', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.76 },
      { name: 'Lombok', desc: 'Pristine neighboring island with soaring Mount Rinjani volcano and uncrowded white beaches.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Gili Islands', desc: 'Trio of motorized-vehicle-free coral islets famed for sea turtle snorkeling and sunset swings.', category: 'Beach', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Yogyakarta', desc: 'Royal Javanese heritage city home to Borobudur Buddhist stupas and Prambanan Hindu temples.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Komodo Island', desc: 'Rugged Jurassic UNESCO park home to the world’s largest living lizards and Pink Beach.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Uluwatu', desc: 'Perched high on limestone cliffs above legendary Indian Ocean swells with Kecak fire dance shows.', category: 'Culture', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.96 }
    ],
    experiences: [
      { name: 'Uluwatu Cliff Sunset & Kecak Fire Dance', type: 'Culture', icon: 'Sparkles', desc: 'Hypnotic chanting as the fiery sun sinks into the Indian Ocean.' },
      { name: 'Mount Batur Sunrise 4x4 Jeep Trek', type: 'Adventure', icon: 'Mountain', desc: 'Witness the morning cloud inversion over volcanic Lake Batur.' },
      { name: 'Private Komodo Phinisi Yacht Cruise', type: 'Luxury', icon: 'Compass', desc: 'Sail past Padar Island peaks and dive with manta rays in Pink Beach.' },
      { name: 'Traditional Balinese Flower Bath Spa', type: 'Romance', icon: 'Heart', desc: 'Immerse in holistic aromatherapy and frangipani blossoms in Ubud.' }
    ],
    hotels: [
      {
        name: 'Mandapa, a Ritz-Carlton Reserve',
        city: 'Bali (Ubud)',
        tier: 'Luxury',
        rating: 4.99,
        price: 'From IDR 14,500,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Ayung Riverfront Pool Villas, Private Patih Butler Service, Organic Farm-to-Table Dining',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Seminyak Beach Resort & Spa',
        city: 'Bali (Seminyak)',
        tier: 'Premium',
        rating: 4.88,
        price: 'From IDR 3,800,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Direct Beachfront Access, Beachside Infinity Pool, Sanje Restaurant Sunset Bar',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Koa D’Surfer Hotel',
        city: 'Bali (Canggu)',
        tier: 'Budget',
        rating: 4.52,
        price: 'From IDR 480,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Rooftop Pool with Sand Lounge, 5-Minute Walk to Berawa Surf Beach, Bamboo Décor',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 10. MALDIVES
  // =========================================================================
  {
    id: 'maldives',
    name: 'Maldives',
    region: 'indianocean',
    tagline: 'Overwater Luxury & Turquoise Atolls of Absolute Paradise',
    description:
      'The quintessential tropical dreamscape of 26 natural coral atolls scattered like pearls across the warm Indian Ocean. Step directly from your private stilted overwater villa into crystal-clear turquoise lagoons teaming with manta rays, whale sharks, and vibrant coral gardens.',
    personality: 'Exclusive, Romantic, Turquoise, Serene',
    idealFor: 'Honeymooners, luxury seekers, divers, marine life enthusiasts',
    travelStyles: ['Honeymoon', 'Luxury', 'Beach', 'Adventure'],
    layoutVariant: 'cinematic-full',
    bestTime: 'November to April (Dry Northeast Monsoon)',
    idealDuration: '5 – 8 Days',
    budget: '$350 – $1,200 / day',
    budgetTier: 'Ultra Luxury',
    currency: 'Maldivian Rufiyaa (MVR / US$ widely accepted)',
    language: 'Dhivehi (English universal across all resort islands)',
    timeZone: 'Maldives Time (GMT+5 / Island Time GMT+6)',
    visa: 'Free 30-Day Tourist Visa on Arrival for all nationalities',
    transportation: 'Trans Maldivian Twin Otter Seaplanes & Luxury Speedboats',
    cuisine: 'Garudhiya Tuna Broth, Mas Huni with Roshi, Fresh Reef Fish, Coconut Curries',
    bestFor: 'Overwater Villa Glass Floors, Subsea Dining, Manta Ray Snorkeling, Sunset Dolphin Cruises',
    recommendedStay: 'Private Overwater Villa with Private Slide & Catamaran Hammock',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Malé', desc: 'Compact colorful island capital featuring the golden-domed Grand Friday Mosque and bustling fish market.', category: 'Culture', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', rating: 4.81 },
      { name: 'North Malé Atoll', desc: 'World-renowned surfing breaks like Pasta Point and classic overwater resort sanctuaries.', category: 'Beach', img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'South Malé Atoll', desc: 'Crystal lagoons, tranquil sandbanks, and deep channels bustling with reef sharks and rays.', category: 'Nature', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Ari Atoll', desc: 'Premier whale shark encounter sanctuary and world-famous marine protected dive sites.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Baa Atoll', desc: 'UNESCO Biosphere Reserve famed for Hanifaru Bay where hundreds of manta rays congregate.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Vaavu Atoll', desc: 'Pristine channel diving featuring nocturnal nurse shark snorkeling at Alimatha Jetty.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Hulhumalé', desc: 'Modern reclaimed eco-island connected by bridge with beachfront guesthouses and watersports.', category: 'Beach', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.8 },
      { name: 'Private Island Resorts', desc: 'One-island-one-resort exclusive hideaways with personal butlers and private overwater villas.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Coral Reefs', desc: 'Vibrant living barrier reefs harboring clownfish, green turtles, and bioluminescent plankton.', category: 'Nature', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Banana Reef', desc: 'Pioneering protected marine park renowned for dramatic overhangs, caves, and moray eels.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.91 }
    ],
    experiences: [
      { name: 'Undersea Restaurant Dining (5m Below)', type: 'Luxury', icon: 'Crown', desc: 'Savor gourmet tasting menus surrounded by 180° coral reef panoramas.' },
      { name: 'Hanifaru Bay Manta Ray Snorkel', type: 'Wildlife', icon: 'Sun', desc: 'Snorkel among cyclone-feeding oceanic manta rays in Baa Atoll.' },
      { name: 'Private Sunset Sandbank Castaway Picnic', type: 'Romance', icon: 'Heart', desc: 'Chilled champagne and gourmet skewers on a secluded sandbank.' },
      { name: 'Scenic Twin Otter Seaplane Flight', type: 'Adventure', icon: 'Compass', desc: 'Breathtaking bird’s-eye perspective of the turquoise atoll rings.' }
    ],
    hotels: [
      {
        name: 'Soneva Jani',
        city: 'Noonu Atoll',
        tier: 'Luxury',
        rating: 4.99,
        price: 'From $2,400 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Retractable Roofs for Stargazing, Water Slides into Ocean, Barefoot Butler, Overwater Cinema',
        img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Kurumba Maldives',
        city: 'North Malé Atoll',
        tier: 'Premium',
        rating: 4.85,
        price: 'From $480 / night',
        priceNote: 'Estimated Starting Price',
        facilities: '10-Minute Speedboat from Airport, 8 Restaurants, House Reef Snorkeling, Veli Spa',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Arena Beach Hotel',
        city: 'Maafushi Island (South Malé)',
        tier: 'Budget',
        rating: 4.58,
        price: 'From $110 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Rooftop Plunge Pool overlooking Bikini Beach, Daily Snorkel Excursion Desk, Free WiFi',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 11. AUSTRALIA
  // =========================================================================
  {
    id: 'australia',
    name: 'Australia',
    region: 'oceania',
    tagline: 'Vibrant Coral Reefs, Red Outback & Sun-Drenched Cities',
    description:
      'A continent of colossal scale and untamed wonder. From Sydney’s iconic Opera House sail design and Melbourne’s world-renowned espresso alleyways to the ancient living Great Barrier Reef and the sacred crimson monolith of Uluru.',
    personality: 'Spirited, Boundless, Coastal, Wild',
    idealFor: 'Road trippers, wildlife lovers, marine explorers, outdoor adventurers',
    travelStyles: ['Adventure', 'Wildlife', 'Beach', 'Nature'],
    layoutVariant: 'editorial-asymmetric',
    bestTime: 'September to November & March to May',
    idealDuration: '10 – 18 Days',
    budget: 'AUD 200 – AUD 480 / day',
    budgetTier: 'Luxury',
    currency: 'Australian Dollar (AUD / A$)',
    language: 'English',
    timeZone: 'AEST / ACST / AWST (GMT+8 to GMT+10)',
    visa: 'eVisitor (Subclass 651) / ETA (Subclass 601)',
    transportation: 'Domestic Flights (Qantas/Virgin), Campervan Hire, Opal Cards in Sydney',
    cuisine: 'Sydney Rock Oysters, Barramundi, Vegemite Toast, Lamingtons, Barossa Shiraz',
    bestFor: 'Sydney Harbour Bridge Climb, Great Barrier Reef Dive, Great Ocean Road Drive, Kangaroo Island',
    recommendedStay: 'Sydney Harbourfront Penthouse & Whitsundays Beachfront Lodge',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490761668535-35497054134e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Sydney', desc: 'World-famous harbor city featuring the iconic Opera House, Harbour Bridge, and Bondi Beach surf.', category: 'Culture', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Melbourne', desc: 'Australia’s cultural heart boasting street art laneways, historic trams, and artisan coffee culture.', category: 'Culture', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Brisbane', desc: 'Subtropical river city packed with urban parklands, rooftop cocktail bars, and sunshine.', category: 'Culture', img: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?auto=format&fit=crop&w=600&q=80', rating: 4.84 },
      { name: 'Gold Coast', desc: 'Glamorous coastline of golden surfing breaks, subtropical hinterlands and thrilling theme parks.', category: 'Beach', img: 'https://images.unsplash.com/photo-1490761668535-35497054134e?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Perth', desc: 'Sun-drenched Western Australia capital flanked by the Swan River and pristine Indian Ocean sunsets.', category: 'Beach', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.85 },
      { name: 'Cairns', desc: 'Tropical northern gateway to the Great Barrier Reef and the ancient Daintree Rainforest.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Great Barrier Reef', desc: 'World’s largest living organism comprising 2,900 individual reefs teeming with marine life.', category: 'Nature', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Tasmania', desc: 'Wild southern island of pristine wilderness, Cradle Mountain peaks, and gourmet farm gates.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Adelaide', desc: 'Gateway to world-acclaimed Barossa Valley vineyards and native wildlife on Kangaroo Island.', category: 'Food', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.87 },
      { name: 'Uluru', desc: 'Sacred sandstone monolith towering 348m above the Red Centre desert, revered by Anangu custodians.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Great Ocean Road', desc: 'One of the world’s most scenic coastal drives featuring the dramatic limestone Twelve Apostles.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Blue Mountains', desc: 'Eucalyptus-shrouded gorges and the famous Three Sisters sandstone rock formation.', category: 'Nature', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80', rating: 4.9 }
    ],
    experiences: [
      { name: 'Great Barrier Reef Luxury Helicopter & Dive', type: 'Adventure', icon: 'Compass', desc: 'Fly to an exclusive outer reef pontoon and dive with sea turtles.' },
      { name: 'Sydney Harbour BridgeClimb Dawn Expedition', type: 'Adventure', icon: 'Mountain', desc: 'Summit 134 meters above sea level as morning light illuminates the Opera House.' },
      { name: 'Uluru Sounds of Silence Desert Feast', type: 'Culture', icon: 'Sparkles', desc: 'Gourmet bush tucker under the Southern Cross with Anangu storytelling.' },
      { name: 'Barossa Valley Master Shiraz Blending', type: 'Food', icon: 'Utensils', desc: 'Create your own personalized vintage at historic Penfolds estate.' }
    ],
    hotels: [
      {
        name: 'Qualia Resort',
        city: 'Hamilton Island (Whitsundays)',
        tier: 'Luxury',
        rating: 4.98,
        price: 'From AUD 1,450 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Private VIP Golf Buggy, Pebble Beach Infinity Pool, Spa Qualia, Coral Sea Facing Pavilions',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Park Hyatt Sydney',
        city: 'Sydney (The Rocks)',
        tier: 'Premium',
        rating: 4.92,
        price: 'From AUD 850 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Unobstructed Sydney Opera House Views, Heated Rooftop Pool, 24-Hour Butler Service',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Pod Sydney',
        city: 'Sydney (CBD)',
        tier: 'Budget',
        rating: 4.54,
        price: 'From AUD 115 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Sleek Minimalist Privacy Pods, Central Central Station Access, Free High-Speed WiFi',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 12. UNITED STATES
  // =========================================================================
  {
    id: 'united-states',
    name: 'United States',
    region: 'northamerica',
    tagline: 'Iconic Metropolises, Grand Canyons & Epic Coastlines',
    description:
      'From the glittering Broadway theaters and iconic skyline of New York City to the colossal crimson depths of the Grand Canyon, Pacific Highway ocean drives, and the tropical volcanic beauty of Hawaii — America is a tapestry of endless landscapes.',
    personality: 'Dynamic, Epic, Boundless, Entertaining',
    idealFor: 'Road trippers, city lovers, national park adventurers, theme park goers',
    travelStyles: ['Adventure', 'Shopping', 'Family', 'Cultural'],
    layoutVariant: 'magazine-showcase',
    bestTime: 'April to October (Varies widely by region)',
    idealDuration: '10 – 21 Days',
    budget: '$200 – $550 / day',
    budgetTier: 'Luxury',
    currency: 'US Dollar ($ / USD)',
    language: 'English (Spanish widely spoken)',
    timeZone: 'Eastern to Pacific / Hawaii (GMT-5 to GMT-10)',
    visa: 'ESTA Visa Waiver (Apply 72 hours prior) / B1/B2 Visa',
    transportation: 'Domestic Flights, Rental Cars for Road Trips, NYC Subway',
    cuisine: 'New York Bagels, Texas Smoked Brisket, Maine Lobster Rolls, Chicago Deep Dish Pizza',
    bestFor: 'Statue of Liberty, Grand Canyon South Rim, Golden Gate Bridge, Yellowstone Geysers',
    recommendedStay: 'Manhattan Central Park Penthouse & Hawaiian Beachfront Bungalow',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'New York', desc: 'The city that never sleeps with Times Square, Central Park, Broadway and the Empire State Building.', category: 'Culture', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Los Angeles', desc: 'Entertainment capital featuring Hollywood, Beverly Hills glamour, and Santa Monica Pier.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Las Vegas', desc: 'Glittering desert metropolis of colossal casino resorts, Michelin dining, and Cirque du Soleil.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Miami', desc: 'Sun-drenched South Beach Art Deco streets, lively Latin music scene, and sparkling Biscayne Bay.', category: 'Beach', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'San Francisco', desc: 'Golden Gate Bridge, historic cable cars climbing steep hills, and vibrant Fisherman’s Wharf.', category: 'Culture', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Orlando', desc: 'World capital of theme park imagination with Walt Disney World and Universal Studios.', category: 'Family', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Hawaii', desc: 'Polynesian paradise of volcanic peaks, dramatic Na Pali cliffs, and world-class surfing.', category: 'Nature', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Grand Canyon', desc: 'A mile-deep gorge carved by the Colorado River exposing two billion years of Earth’s geological history.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Yellowstone', desc: 'World’s first national park with half the planet’s geysers including Old Faithful and bison herds.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Washington DC', desc: 'Nation’s capital featuring the Lincoln Memorial, White House, and free Smithsonian Museums.', category: 'History', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { name: 'Chicago', desc: 'Architectural showcase on Lake Michigan renowned for Millennium Park’s Bean and deep dish pizza.', category: 'Culture', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Boston', desc: 'Historic cradle of American liberty with the Freedom Trail, Harvard University and harbor islands.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80', rating: 4.88 }
    ],
    experiences: [
      { name: 'Helicopter Flight through Grand Canyon', type: 'Adventure', icon: 'Compass', desc: 'Descend 4,000 feet below the rim to land near the Colorado River.' },
      { name: 'VIP Broadway Orchestra House Experience', type: 'Culture', icon: 'Sparkles', desc: 'Backstage tour and premier seating at award-winning musical.' },
      { name: 'Yellowstone Private Wildlife Safari with Biologist', type: 'Wildlife', icon: 'Sun', desc: 'Track wolf packs and grizzly bears in Lamar Valley.' },
      { name: 'Sunset Catamaran Sail past Diamond Head', type: 'Romance', icon: 'Heart', desc: 'Waikiki champagne toast with views of the volcanic crater.' }
    ],
    hotels: [
      {
        name: 'The Plaza Hotel',
        city: 'New York (5th Ave at Central Park)',
        tier: 'Luxury',
        rating: 4.94,
        price: 'From $1,100 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Historic Landmark, Guerlain Spa, Palm Court Champagne Afternoon Tea, Central Park Views',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Bellagio Resort & Casino',
        city: 'Las Vegas (The Strip)',
        tier: 'Premium',
        rating: 4.88,
        price: 'From $380 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Choreographed Fountains View, Conservatory & Botanical Garden, Picasso Michelin Dining',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Pod Times Square',
        city: 'New York (Hell’s Kitchen)',
        tier: 'Budget',
        rating: 4.53,
        price: 'From $165 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Ultra-Functional Compact Pod Rooms, Polished Concrete Floors, Walking Access to Times Square',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 13. CANADA
  // =========================================================================
  {
    id: 'canada',
    name: 'Canada',
    region: 'northamerica',
    tagline: 'Turquoise Glacial Lakes & Majestic Rocky Mountain Peaks',
    description:
      'A vast wilderness of unparalleled natural majesty. Gaze upon the iridescent turquoise waters of Lake Louise and Moraine Lake in Banff, marvel at the roaring power of Niagara Falls, and savor French joie de vivre in cobblestoned Old Quebec.',
    personality: 'Pristine, Majestic, Welcoming, Wild',
    idealFor: 'Nature photographers, alpine hikers, ski enthusiasts, road trippers',
    travelStyles: ['Nature', 'Adventure', 'Wildlife', 'Historical'],
    layoutVariant: 'split-hero',
    bestTime: 'June to September (Lakes & Hiking) & December to April (Skiing)',
    idealDuration: '9 – 16 Days',
    budget: 'CAD 180 – CAD 420 / day',
    budgetTier: 'Premium',
    currency: 'Canadian Dollar (CAD / C$)',
    language: 'English & French (Quebec is Francophone)',
    timeZone: 'Pacific to Atlantic (GMT-8 to GMT-4)',
    visa: 'Electronic Travel Authorization (eTA) online / Visitor Visa',
    transportation: 'Rocky Mountaineer Luxury Train, Icefields Parkway Rental Car',
    cuisine: 'Quebec Poutine with Cheese Curds, Pure Maple Syrup, Wild Pacific Salmon, Alberta AAA Beef',
    bestFor: 'Lake Louise Canoeing, Banff Hot Springs, Whistler Olympic Skiing, Niagara Falls Maid of the Mist',
    recommendedStay: 'Fairmont Chateau Lake Louise & Fairmont Le Château Frontenac',
    heroImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490761668535-35497054134e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Toronto', desc: 'Canada’s largest metropolis crowned by the CN Tower, vibrant ethnic neighborhoods, and Lake Ontario.', category: 'Culture', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Vancouver', desc: 'Spectacular Pacific coastal jewel framed by North Shore mountains, Stanley Park, and beaches.', category: 'Nature', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Montreal', desc: 'Bilingual cultural hub featuring Notre-Dame Basilica, Mount Royal park, and vibrant festivals.', category: 'Culture', img: 'https://images.unsplash.com/photo-1490761668535-35497054134e?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Quebec City', desc: 'UNESCO-listed historic fortified capital with cobblestoned Petit-Champlain and Château Frontenac.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Banff', desc: 'Crown jewel of the Canadian Rockies with hot springs, alpine lakes, and dramatic mountain peaks.', category: 'Nature', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Jasper', desc: 'Dark Sky Preserve national park with Athabasca Falls and the gigantic Columbia Icefield.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Niagara Falls', desc: 'Thundering natural spectacle discharging 6 million cubic feet of water per minute over Horseshoe Falls.', category: 'Nature', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Whistler', desc: 'North America’s premier ski resort featuring the record-breaking PEAK 2 PEAK gondola.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Calgary', desc: 'Gateway to the Rockies famed for the annual world-renowned Calgary Stampede rodeo.', category: 'Culture', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.84 },
      { name: 'Ottawa', desc: 'Canada’s national capital with Parliament Hill Gothic towers and the historic Rideau Canal.', category: 'History', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.87 },
      { name: 'Victoria', desc: 'Charming British Columbia capital on Vancouver Island famed for Butchart Gardens and high tea.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Lake Louise', desc: 'Glacier-fed emerald lake framed by Mount Victoria and the iconic Fairmont stone château.', category: 'Nature', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80', rating: 4.99 }
    ],
    experiences: [
      { name: 'Rocky Mountaineer GoldLeaf Glass-Dome Train', type: 'Luxury', icon: 'Compass', desc: 'Travel through the Rockies with bi-level panoramic windows and gourmet chefs.' },
      { name: 'Red Canoe Paddle across Moraine Lake', type: 'Romance', icon: 'Heart', desc: 'Glide over turquoise waters mirroring the Valley of the Ten Peaks.' },
      { name: 'Athabasca Glacier Ice Explorer Walk', type: 'Adventure', icon: 'Mountain', desc: 'Trek onto 10,000-year-old glacial ice with mammoth all-terrain transport.' },
      { name: 'Whale Watching in Victoria’s Salish Sea', type: 'Wildlife', icon: 'Sun', desc: 'Spot resident orca pods and humpback whales with marine naturalists.' }
    ],
    hotels: [
      {
        name: 'Fairmont Chateau Lake Louise',
        city: 'Banff National Park',
        tier: 'Luxury',
        rating: 4.97,
        price: 'From CAD 980 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Direct Lake Louise Shoreline Access, Ski Storage, Heated Indoor Pool, Fairview Bar & Restaurant',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Fairmont Le Château Frontenac',
        city: 'Quebec City (Old Quebec)',
        tier: 'Premium',
        rating: 4.91,
        price: 'From CAD 450 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'World’s Most Photographed Hotel, St. Lawrence River Views, Historic Heritage Landmark',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'HI Banff Alpine Centre',
        city: 'Banff (Tunnel Mountain)',
        tier: 'Budget',
        rating: 4.54,
        price: 'From CAD 95 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Rustic Mountain Lodge Vibe, Fireplace Lounges, Free Local ROAM Transit Passes',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 14. SPAIN
  // =========================================================================
  {
    id: 'spain',
    name: 'Spain',
    region: 'europe',
    tagline: 'Passionate Flamenco, Gaudí Marvels & Sun-Drenched Tapas',
    description:
      'A country bursting with infectious life, architectural genius, and golden Mediterranean coastlines. Marvel at Antoni Gaudí’s Sagrada Família in Barcelona, tour the Moorish Alhambra palace in Granada, and savor late-night tapas in Madrid.',
    personality: 'Passionate, Festive, Architectural, Flavorful',
    idealFor: 'Art lovers, night owls, gastronomy fans, sun worshipers',
    travelStyles: ['Cultural', 'Beach', 'Food', 'Historical'],
    layoutVariant: 'editorial-asymmetric',
    bestTime: 'April to June & September to November',
    idealDuration: '8 – 14 Days',
    budget: '€140 – €360 / day',
    budgetTier: 'Premium',
    currency: 'Euro (€ / EUR)',
    language: 'Spanish (Castilian), Catalan, Basque, Galician',
    timeZone: 'Central European Time (GMT+1)',
    visa: 'Schengen Visa (Apply 3-4 weeks prior)',
    transportation: 'Renfe AVE High-Speed Trains (300 km/h network)',
    cuisine: 'Valencian Paella, Jamón Ibérico de Bellota, Churros con Chocolate, Gambas al Ajillo, Sangria',
    bestFor: 'Sagrada Família, Alhambra Palace, Ibiza Sunset Sessions, Prado Museum Masterpieces',
    recommendedStay: 'Barcelona Eixample Luxury Hotel & Andalusian Historic Parador',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Barcelona', desc: 'Catalan capital celebrated for Gaudí’s surreal architecture, Gothic Quarter and beach promenade.', category: 'Culture', img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Madrid', desc: 'Spain’s regal heart home to the Royal Palace, Prado Museum, and vibrant midnight tapas culture.', category: 'Culture', img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Seville', desc: 'Soul of Andalusia with the royal Alcázar palace, Giralda tower and authentic Triana flamenco.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Valencia', desc: 'Birthplace of paella boasting futuristic City of Arts and Sciences and sandy Mediterranean shores.', category: 'Food', img: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Granada', desc: 'Fairytale Moorish fortress city sitting beneath Sierra Nevada peaks with the Alhambra palace.', category: 'History', img: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Ibiza', desc: 'Balearic island with legendary sunset beach sessions, whitewashed Dalt Vila and turquoise coves.', category: 'Beach', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Mallorca', desc: 'Stunning Balearic island of dramatic Serra de Tramuntana mountains and hidden cala bays.', category: 'Beach', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Tenerife', desc: 'Canary Island dominated by Mount Teide volcano with year-round subtropical sunshine.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Costa del Sol', desc: 'Sun-drenched Andalusian strip with Marbella’s Puerto Banús marina and golf courses.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.87 },
      { name: 'Bilbao', desc: 'Basque cultural jewel home to Frank Gehry’s titanium Guggenheim Museum and pintxos bars.', category: 'Art', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Toledo', desc: 'Ancient walled imperial city where Christian, Muslim, and Jewish cultures flourished harmoniously.', category: 'History', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.9 },
      { name: 'Cordoba', desc: 'Home to the magnificent Great Mosque-Cathedral (Mezquita) with its endless red-and-white arches.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=600&q=80', rating: 4.94 }
    ],
    experiences: [
      { name: 'VIP Skip-the-Line Sagrada Família Towers', type: 'Architecture', icon: 'Sparkles', desc: 'Ascend the Nativity towers with an architectural specialist.' },
      { name: 'Authentic Flamenco & Tapas in Triana Cave', type: 'Culture', icon: 'Heart', desc: 'Intimate performance by master bailaores with Jerez sherry.' },
      { name: 'Alhambra & Generalife Secret Evening Access', type: 'Heritage', icon: 'Crown', desc: 'Walk through illuminated Court of the Lions under starlit skies.' },
      { name: 'Pintxos & Txakoli Wine Crawl in San Sebastián', type: 'Food', icon: 'Utensils', desc: 'Taste world-class Basque bites across Old Town tavern counters.' }
    ],
    hotels: [
      {
        name: 'Hotel Arts Barcelona',
        city: 'Barcelona (Port Olímpic)',
        tier: 'Luxury',
        rating: 4.93,
        price: 'From €650 / night',
        priceNote: 'Estimated Starting Price',
        facilities: '43-Storey Seafront Tower, 2 Michelin-Starred Enoteca Paco Pérez, 43 The Spa Panoramic Views',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Parador de Granada',
        city: 'Granada (Alhambra Grounds)',
        tier: 'Premium',
        rating: 4.89,
        price: 'From €380 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Located inside a 15th-Century Convent on the Alhambra Grounds, Andalusian Courtyards',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Praktik Bakery Hotel',
        city: 'Barcelona (Eixample)',
        tier: 'Budget',
        rating: 4.61,
        price: 'From €125 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Integrated Artisanal Baluard Bakery in Lobby, Fresh Warm Croissants Daily, Minimalist Chic Rooms',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 15. GREECE
  // =========================================================================
  {
    id: 'greece',
    name: 'Greece',
    region: 'europe',
    tagline: 'Cobalt Calderas, Whitewashed Villages & Mythic Ruins',
    description:
      'The radiant birthplace of Western philosophy, democracy, and the Olympic spirit. Stand before the Parthenon towering above Athens, gaze upon Santorini’s blue-domed churches perched high above the submerged volcanic caldera, and bask in Aegean hospitality.',
    personality: 'Mythological, Aegean, Romantic, Timeless',
    idealFor: 'Honeymooners, mythology lovers, sailing enthusiasts, island hoppers',
    travelStyles: ['Honeymoon', 'Beach', 'Historical', 'Cultural'],
    layoutVariant: 'cinematic-full',
    bestTime: 'May to October',
    idealDuration: '7 – 14 Days',
    budget: '€140 – €380 / day',
    budgetTier: 'Luxury',
    currency: 'Euro (€ / EUR)',
    language: 'Greek (English universal in tourist sectors)',
    timeZone: 'Eastern European Time (GMT+2 / GMT+3)',
    visa: 'Schengen Visa (Apply 3-4 weeks prior)',
    transportation: 'High-speed Blue Star & Seajets Island Ferries, Domestic Island Flights',
    cuisine: 'Greek Salad with Barrel-aged Feta, Moussaka, Souvlaki Gyros, Grilled Calamari, Baklava',
    bestFor: 'Santorini Caldera Sunset, Acropolis of Athens, Mykonos Windmills, Navagio Shipwreck Beach',
    recommendedStay: 'Santorini Cliffside Cave Suite with Private Heated Infinity Plunge Pool',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Athens', desc: 'Ancient citadel city crowned by the 2,500-year-old Parthenon and lively Plaka tavernas.', category: 'History', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Santorini', desc: 'World’s most iconic caldera island of whitewashed cliffside villages and breathtaking Oia sunsets.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Mykonos', desc: 'Glamorous Cycladic island famed for iconic windmills, Little Venice waves and cosmopolitan beach clubs.', category: 'Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Crete', desc: 'Greece’s largest island home to the ancient Minoan Palace of Knossos, Samaria Gorge and Elafonisi pink sands.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Rhodes', desc: 'UNESCO medieval fortress city of the Knights of Saint John and ancient Lindos acropolis.', category: 'History', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Corfu', desc: 'Emerald Ionian island blending Venetian arcades, French palaces, and crystal azure bays.', category: 'Nature', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Zakynthos', desc: 'Famed for Navagio (Shipwreck) Beach surrounded by sheer 200m white cliffs and electric-blue waters.', category: 'Beach', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Meteora', desc: 'Monumental sandstone pillars topped by centuries-old Eastern Orthodox cliffhanging monasteries.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Thessaloniki', desc: 'Northern cultural hub celebrated for Byzantine UNESCO churches and seaside culinary promenade.', category: 'Culture', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.85 },
      { name: 'Delphi', desc: 'Ancient sanctuary of Apollo and the mystical Oracle nestled on the dramatic slopes of Mount Parnassus.', category: 'History', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.9 }
    ],
    experiences: [
      { name: 'Private Sunset Catamaran Cruise in Santorini', type: 'Romance', icon: 'Heart', desc: 'Swim in volcanic hot springs followed by grilled seafood and Greek wine.' },
      { name: 'Acropolis & Parthenon Sunrise Guided Walk', type: 'History', icon: 'Sparkles', desc: 'Stand atop the sacred rock in silence before the crowds arrive.' },
      { name: 'Navagio Shipwreck Bay Speedboat Exploration', type: 'Adventure', icon: 'Compass', desc: 'Cruise inside the electric-blue sea caves of Zakynthos.' },
      { name: 'Santorini Volcanic Wine Tasting Tour', type: 'Food', icon: 'Utensils', desc: 'Taste crisp Assyrtiko wines grown in unique basket-woven vines.' }
    ],
    hotels: [
      {
        name: 'Canaves Oia Suites',
        city: 'Santorini (Oia)',
        tier: 'Luxury',
        rating: 4.98,
        price: 'From €1,100 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Cliffside Infinity Pool overlooking Caldera, Cave Suites with Jacuzzis, Private Yacht Charters',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Cavo Tagoo Mykonos',
        city: 'Mykonos Town',
        tier: 'Premium',
        rating: 4.91,
        price: 'From €550 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Floating Daybeds, Spectacular Sunset Infinity Pool, Zuma Japanese Restaurant',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Acropolis View Hotel',
        city: 'Athens (Filopappou)',
        tier: 'Budget',
        rating: 4.59,
        price: 'From €115 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Rooftop Terrace with Direct Unobstructed Parthenon Views, Quiet Residential Street',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 16. TURKEY
  // =========================================================================
  {
    id: 'turkey',
    name: 'Turkey',
    region: 'middleeast',
    tagline: 'Byzantine Grandeur, Hot-Air Balloons & Aegean Turquoise Shores',
    description:
      'Where Europe and Asia meet along the shimmering Bosphorus Strait. Stand in awe beneath Hagia Sophia’s celestial domes, float in hot-air balloons over Cappadocia’s fairy chimneys, and wander through marble ruins in ancient Greco-Roman Ephesus.',
    personality: 'Mesmerizing, Historic, Exotic, Hospitable',
    idealFor: 'History buffs, balloon enthusiasts, spa and bazaar lovers, cultural explorers',
    travelStyles: ['Cultural', 'Historical', 'Adventure', 'Shopping'],
    layoutVariant: 'magazine-showcase',
    bestTime: 'April to June & September to November',
    idealDuration: '8 – 14 Days',
    budget: '₺2,500 – ₺6,500 / day ($100 – $250)',
    budgetTier: 'Budget',
    currency: 'Turkish Lira (₺ / TRY)',
    language: 'Turkish (English widespread in bazaars & resorts)',
    timeZone: 'Turkey Time (GMT+3)',
    visa: 'Online eVisa available in 3 minutes for most travelers',
    transportation: 'YHT High-Speed Rail, Istanbul Tram & Ferries, Domestic Flights',
    cuisine: 'Iskender Kebab, Turkish Baklava with Antep Pistachio, Mezes, Pide, Turkish Apple Tea',
    bestFor: 'Cappadocia Sunrise Balloon Flight, Blue Mosque & Hagia Sophia, Grand Bazaar, Pamukkale Travertines',
    recommendedStay: 'Cappadocia Carved Cave Hotel Suite & Bosphorus Waterfront Ottoman Palace',
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Istanbul', desc: 'Transcontinental metropolis bridging two worlds with Hagia Sophia, Topkapi Palace, and Grand Bazaar.', category: 'Culture', img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Cappadocia', desc: 'Surreal volcanic moonscape dotted with fairy chimneys, cave churches and hundreds of sunrise balloons.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Antalya', desc: 'Turkish Riviera capital boasting Kaleiçi old harbor, cascading Düden Waterfalls and turquoise beaches.', category: 'Beach', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Pamukkale', desc: 'UNESCO Cotton Castle featuring cascading white travertine thermal terraces and Hierapolis ruins.', category: 'Nature', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Ephesus', desc: 'Spectacularly preserved ancient classical Roman city with the grand Library of Celsus and Great Theatre.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Bodrum', desc: 'Glamorous Aegean coastal playground with whitewashed villas, Castle of St. Peter, and superyacht docks.', category: 'Luxury', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Ankara', desc: 'Turkey’s modern capital home to the monumental Anıtkabir mausoleum and Museum of Anatolian Civilizations.', category: 'History', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.82 },
      { name: 'Izmir', desc: 'Vibrant Aegean port city with sprawling Konak Square, ancient Agora ruins and seaside promenade.', category: 'Culture', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Fethiye', desc: 'Home to the famous Blue Lagoon at Ölüdeniz and world-class paragliding from Mount Babadağ.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Bursa', desc: 'First Ottoman capital nestled beneath Mount Uludağ, famed for Green Mosque and authentic thermal baths.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.85 }
    ],
    experiences: [
      { name: 'Cappadocia Sunrise Hot-Air Balloon Flight', type: 'Adventure', icon: 'Compass', desc: 'Soar 1,000 feet above the surreal fairy chimneys as dawn breaks.' },
      { name: 'Private Bosphorus Sunset Yacht Cruise', type: 'Romance', icon: 'Heart', desc: 'Glide between European and Asian shores passing illuminated Ottoman palaces.' },
      { name: 'Traditional Turkish Hamam Bath Ritual', type: 'Luxury', icon: 'Crown', desc: 'Rejuvenate under marble domes at 500-year-old historic Ayasofya Hürrem Sultan Hamam.' },
      { name: 'Grand Bazaar Secret Rooftop & Spice Tasting', type: 'Shopping', icon: 'Sparkles', desc: 'Navigate 4,000 artisan shops with an expert local insider.' }
    ],
    hotels: [
      {
        name: 'Museum Hotel Cappadocia',
        city: 'Uchisar (Cappadocia)',
        tier: 'Luxury',
        rating: 4.97,
        price: 'From €680 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Only Relais & Châteaux in Turkey, Heated Outdoor Pool with Balloon Views, Living Museum Artifacts',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Çırağan Palace Kempinski',
        city: 'Istanbul (Bosphorus Waterfront)',
        tier: 'Premium',
        rating: 4.92,
        price: 'From €480 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Former Ottoman Imperial Palace, Heated Waterfront Infinity Pool, Helipad, Luxury Spa',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sultanahmet Suites',
        city: 'Istanbul (Old City)',
        tier: 'Budget',
        rating: 4.58,
        price: 'From €65 / night',
        priceNote: 'Estimated Starting Price',
        facilities: '5-Minute Walk to Blue Mosque, Traditional Wooden Ottoman Facade, Sea of Marmara Views',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 17. NEW ZEALAND
  // =========================================================================
  {
    id: 'new-zealand',
    name: 'New Zealand',
    region: 'oceania',
    tagline: 'Middle-Earth Glaciers, Wild Fiords & Untamed Adventure',
    description:
      'A cinematic wonderland of dramatic alpine grandeur, ancient Maori mythology, and adrenaline-charged exploration. Cruise through the towering waterfalls of Milford Sound, stargaze across Lake Tekapo’s dark sky sanctuary, and explore the enchanting Shire at Hobbiton.',
    personality: 'Cinematic, Untamed, Adventurous, Pure',
    idealFor: 'Adventure seekers, nature photographers, Lord of the Rings fans, road trippers',
    travelStyles: ['Adventure', 'Nature', 'Wildlife', 'Honeymoon'],
    layoutVariant: 'split-hero',
    bestTime: 'December to March (Summer) & June to August (Skiing)',
    idealDuration: '10 – 18 Days',
    budget: 'NZD 200 – NZD 480 / day',
    budgetTier: 'Luxury',
    currency: 'New Zealand Dollar (NZD / NZ$)',
    language: 'English, Te Reo Māori, NZ Sign Language',
    timeZone: 'New Zealand Standard Time (GMT+12 / GMT+13)',
    visa: 'New Zealand Electronic Travel Authority (NZeTA) online',
    transportation: 'Self-drive Campervans & 4WD, Scenic Alpine Rail, Domestic Flights',
    cuisine: 'New Zealand Lamb, Green-Lipped Mussels, Pavlova, Hāngī Earth Cooking, Marlborough Sauvignon Blanc',
    bestFor: 'Milford Sound Fiord Cruise, Queenstown Bungy Jump, Hobbiton Movie Set, Franz Josef Glacier',
    recommendedStay: 'Queenstown Lake Wakatipu Luxury Villa & Fiordland Wilderness Eco-Lodge',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Auckland', desc: 'City of Sails nestled between two harbors with Sky Tower views and nearby Waiheke Island vineyards.', category: 'Culture', img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&q=80', rating: 4.89 },
      { name: 'Queenstown', desc: 'Adventure capital of the world set on Lake Wakatipu beneath the Remarkables alpine range.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Wellington', desc: 'Windy creative capital boasting Te Papa National Museum and Wētā Workshop movie special effects.', category: 'Art', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Christchurch', desc: 'Rebuilt Garden City mixing heritage English stone architecture with innovative modern art precincts.', category: 'Culture', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Rotorua', desc: 'Geothermal wonderland of bubbling mud pools, natural geysers, and authentic Māori cultural villages.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Milford Sound', desc: 'Eighth Wonder of the World where sheer granite peaks rise 1,200 meters from dark fiord waters.', category: 'Nature', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Fiordland', desc: 'Massive UNESCO wilderness of untouched temperate rainforests, hidden fiords, and alpine hiking tracks.', category: 'Nature', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.97 },
      { name: 'Lake Tekapo', desc: 'Turquoise glacial lake bordered by purple lupin flowers beneath the International Dark Sky Reserve.', category: 'Nature', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Mount Cook', desc: 'Aoraki Mount Cook is New Zealand’s highest peak at 3,724m surrounded by immense glaciers.', category: 'Mountains', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Hobbiton', desc: 'Enchanting real-life Middle-Earth movie set with 44 detailed hobbit holes in green Matamata pastures.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.94 }
    ],
    experiences: [
      { name: 'Milford Sound Scenic Helicopter & Glacial Landing', type: 'Adventure', icon: 'Compass', desc: 'Fly through fiord canyons and touch down on a pristine mountain glacier.' },
      { name: 'Shotover Jet Boat Canyon Adventure', type: 'Adventure', icon: 'Sparkles', desc: '360° spins through narrow rocky river gorges in Queenstown.' },
      { name: 'Te Puia Māori Cultural & Hangi Evening', type: 'Culture', icon: 'Crown', desc: 'Watch a traditional Haka war dance before the steaming Pohutu Geyser.' },
      { name: 'Lake Tekapo Dark Sky Stargazing with Hot Pools', type: 'Romance', icon: 'Heart', desc: 'Floating in hot thermal pools under the cosmic Milky Way.' }
    ],
    hotels: [
      {
        name: 'Matakauri Lodge',
        city: 'Queenstown (Lake Wakatipu)',
        tier: 'Luxury',
        rating: 4.99,
        price: 'From NZD 1,800 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Unrivaled Lake Wakatipu & Remarkables Views, Infinity Pool, Relais & Châteaux Gourmet Dining',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Hermitage Hotel',
        city: 'Aoraki Mount Cook National Park',
        tier: 'Premium',
        rating: 4.88,
        price: 'From NZD 420 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Floor-to-Ceiling Windows Framing Aoraki Mount Cook, Sir Edmund Hillary Alpine Centre',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'JUCY Snooze Queenstown',
        city: 'Queenstown (CBD)',
        tier: 'Budget',
        rating: 4.57,
        price: 'From NZD 95 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Self-Contained Privacy Pods, Miss Lucy’s Rooftop Pizzeria with Lake Panorama, Central Location',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 18. MALAYSIA
  // =========================================================================
  {
    id: 'malaysia',
    name: 'Malaysia',
    region: 'asia',
    tagline: 'Petronas Towers, Ancient Rainforests & Street Food Havens',
    description:
      'Truly Asia in one remarkable nation. Soaring stainless-steel Petronas Twin Towers in Kuala Lumpur, colonial Peranakan heritage in George Town Penang, cool misty tea plantations in Cameron Highlands, and wild Bornean rainforests inhabited by orangutans.',
    personality: 'Multicultural, Tropical, Flavorsome, Lush',
    idealFor: 'Foodies, island explorers, wildlife enthusiasts, architecture buffs',
    travelStyles: ['Cultural', 'Beach', 'Food', 'Wildlife'],
    layoutVariant: 'editorial-asymmetric',
    bestTime: 'December to April (West Coast) & March to October (East Coast)',
    idealDuration: '7 – 12 Days',
    budget: 'MYR 200 – MYR 550 / day ($50 – $130)',
    budgetTier: 'Budget',
    currency: 'Malaysian Ringgit (MYR / RM)',
    language: 'Bahasa Malaysia (English universally spoken across all sectors)',
    timeZone: 'Malaysia Time (GMT+8)',
    visa: 'Visa-free for 90 days for most nationalities',
    transportation: 'KLIA Express, RapidKL LRT/MRT, Grab App, Domestic Flights',
    cuisine: 'Nasi Lemak with Sambal, Char Kway Teow, Roti Canai, Laksa Penang, Beef Rendang, Satay',
    bestFor: 'Petronas Twin Towers Skybridge, Penang Street Art & Food, Langkawi SkyCab, Borneo Orangutans',
    recommendedStay: 'Kuala Lumpur Sky Pool Suite & Langkawi Private Rainforest Beach Villa',
    heroImage: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Kuala Lumpur', desc: 'Dynamic capital crowned by the 452m Petronas Twin Towers, colorful Batu Caves and street food.', category: 'Culture', img: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Langkawi', desc: 'UNESCO Global Geopark archipelago with white sandy beaches, limestone karsts and the curved SkyBridge.', category: 'Beach', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Penang', desc: 'UNESCO George Town celebrated worldwide for interactive street art, clan jetties, and street gastronomy.', category: 'Food', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Malacca', desc: 'Historic trading port with Dutch red square, Portuguese fortress ruins and lively Jonker Street Night Market.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Sabah', desc: 'Borneo wilderness with Mount Kinabalu summit (4,095m) and Sepilok Orangutan Rehabilitation Centre.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Sarawak', desc: 'Heart of Borneo boasting mammoth Gunung Mulu karst caves, headhunter heritage, and winding rivers.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Cameron Highlands', desc: 'Misty green tea hill station offering strawberry farms, Tudor architecture, and mossy forest walks.', category: 'Nature', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.87 },
      { name: 'Genting Highlands', desc: 'Mountain entertainment city featuring indoor/outdoor theme parks and cable car mountain flights.', category: 'Family', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.82 },
      { name: 'Perhentian Islands', desc: 'Untouched South China Sea paradise with crystal snorkeling waters, sea turtles and reef sharks.', category: 'Beach', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Tioman Island', desc: 'Dense rainforest island framed by coral barrier reefs, dive sites, and waterfalls.', category: 'Nature', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.89 }
    ],
    experiences: [
      { name: 'Petronas Twin Towers Skybridge & 86th Fl Observation', type: 'Architecture', icon: 'Crown', desc: 'Walk between the twin spires 170 meters in the air.' },
      { name: 'Borneo Sepilok Wild Orangutan Feeding Encounter', type: 'Wildlife', icon: 'Sun', desc: 'Watch rescued wild primates swing through virgin rainforest canopy.' },
      { name: 'Langkawi Kilim Geoforest Private Mangrove Boat', type: 'Adventure', icon: 'Compass', desc: 'Feed sea eagles and explore limestone bat caves by boat.' },
      { name: 'George Town Street Food Trail with Local Chef', type: 'Food', icon: 'Utensils', desc: 'Savor Char Kway Teow with duck egg and authentic Asam Laksa.' }
    ],
    hotels: [
      {
        name: 'The Datai Langkawi',
        city: 'Langkawi (Datai Bay)',
        tier: 'Luxury',
        rating: 4.98,
        price: 'From MYR 2,800 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Nestled in 10-Million-Year-Old Rainforest, Private Beach, Nature Centre with Resident Naturalists',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Mandarin Oriental, Kuala Lumpur',
        city: 'Kuala Lumpur (KLCC)',
        tier: 'Premium',
        rating: 4.91,
        price: 'From MYR 780 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Adjacent to Petronas Towers & KLCC Park, Infinity Edge Outdoor Pool, Award-Winning Spa',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'KLoé Hotel',
        city: 'Kuala Lumpur (Bukit Bintang)',
        tier: 'Budget',
        rating: 4.63,
        price: 'From MYR 280 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Boutique Design Hotel for Creative Nomads, Courtyard Pool, Lucky Coffee Bar in Lobby',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 19. SOUTH AFRICA
  // =========================================================================
  {
    id: 'south-africa',
    name: 'South Africa',
    region: 'africa',
    tagline: 'Big Five Safari Reserves, Table Mountain & Cape Vineyards',
    description:
      'The legendary Rainbow Nation where dramatic natural landscapes collide with vibrant cultures. Track lions, leopards, and elephants across Kruger National Park, stand atop flat-topped Table Mountain in Cape Town, and taste world-class Chenin Blanc in Stellenbosch.',
    personality: 'Untamed, Breathtaking, Majestic, Diverse',
    idealFor: 'Wildlife lovers, wine connoisseurs, road trippers, luxury safari travelers',
    travelStyles: ['Wildlife', 'Adventure', 'Nature', 'Luxury'],
    layoutVariant: 'cinematic-full',
    bestTime: 'May to September (Safari) & November to March (Cape Town Beaches)',
    idealDuration: '9 – 16 Days',
    budget: 'ZAR 1,800 – ZAR 4,800 / day ($100 – $260)',
    budgetTier: 'Luxury',
    currency: 'South African Rand (ZAR / R)',
    language: '11 official languages including English, Afrikaans, Zulu, Xhosa',
    timeZone: 'South Africa Standard Time (GMT+2)',
    visa: 'Visa-free for 90 days for many nationalities',
    transportation: 'Chauffeured Safari 4x4s, Garden Route Car Hire, Gautrain in Joburg',
    cuisine: 'South African Braai (Barbecue), Biltong, Bobotie, Cape Malay Seafood Curry, Pinotage Wines',
    bestFor: 'Kruger Big Five Game Drives, Table Mountain Cableway, Boulders Beach Penguins, Franschhoek Wine Tram',
    recommendedStay: 'Kruger Private Game Reserve Safari Lodge & Cape Town Waterfront Penthouse',
    heroImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Cape Town', desc: 'World’s most scenic coastal city flanked by Table Mountain, Atlantic beaches and penguin colonies.', category: 'Culture', img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Johannesburg', desc: 'Vibrant City of Gold with the Apartheid Museum, Constitution Hill, and buzzing Maboneng art precinct.', category: 'History', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80', rating: 4.82 },
      { name: 'Kruger National Park', desc: 'Legendary 2-million-hectare wildlife kingdom home to Africa’s highest concentration of Big Five animals.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Durban', desc: 'Subtropical Indian Ocean coastal hub celebrated for Golden Mile surf beaches and spicy bunny chows.', category: 'Beach', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.81 },
      { name: 'Stellenbosch', desc: 'Historic Cape Dutch oak-lined town surrounded by dramatic mountain vineyards and fine wine estates.', category: 'Food', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Garden Route', desc: 'Magnificent 300km coastal road trip through indigenous forests, coastal lagoons and Tsitsikamma gorges.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.96 },
      { name: 'Hermanus', desc: 'World’s premier land-based whale-watching capital where southern rights breach mere meters from cliffs.', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.92 },
      { name: 'Pretoria', desc: 'Administrative capital famous for the Union Buildings and 70,000 purple jacaranda trees in spring.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.83 },
      { name: 'Drakensberg', desc: 'UNESCO Dragon Mountains of soaring basalt ramparts, San rock art, and Tugela Falls.', category: 'Nature', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.95 },
      { name: 'Blyde River Canyon', desc: 'One of the world’s largest green canyons featuring the striking Three Rondavels rock towers.', category: 'Nature', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.93 }
    ],
    experiences: [
      { name: 'Private Kruger Open-Top Big Five Safari', type: 'Wildlife', icon: 'Sun', desc: 'Track leopards and lion prides with expert tracker and ranger.' },
      { name: 'Table Mountain Revolving Cableway at Sunset', type: 'Adventure', icon: 'Mountain', desc: '360° rotation as the Atlantic ocean turns crimson gold.' },
      { name: 'Boulders Beach African Penguin Walk', type: 'Wildlife', icon: 'Compass', desc: 'Stroll along wooden boardwalks alongside thousands of wild penguins.' },
      { name: 'Franschhoek Hop-on Hop-off Open-Air Wine Tram', type: 'Food', icon: 'Utensils', desc: 'Sample world-renowned vintages across centuries-old Huguenot estates.' }
    ],
    hotels: [
      {
        name: 'Singita Boulders Lodge',
        city: 'Sabi Sand (Kruger Greater Area)',
        tier: 'Luxury',
        rating: 4.99,
        price: 'From ZAR 32,000 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Private Heated Plunge Pools Overlooking Sand River, Wine Cellar with 20,000 Bottles, Twice-Daily Game Drives',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'The Silo Hotel',
        city: 'Cape Town (V&A Waterfront)',
        tier: 'Premium',
        rating: 4.94,
        price: 'From ZAR 14,500 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Pillowed Glass Windows Built into Grain Silo, Rooftop Infinity Pool with Table Mountain Views',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Mojo Hotel',
        city: 'Cape Town (Sea Point)',
        tier: 'Budget',
        rating: 4.54,
        price: 'From ZAR 650 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Rooftop Lounge Facing Atlantic Ocean, Directly above Mojo Food Market, 100m from Sea Point Promenade',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },

  // =========================================================================
  // 20. EGYPT
  // =========================================================================
  {
    id: 'egypt',
    name: 'Egypt',
    region: 'africa',
    tagline: 'Cradle of Civilizations, Pyramids & Timeless Nile Waters',
    description:
      'Journey back 5,000 years to the dawn of recorded human civilization. Stand in awe before the Great Pyramids of Giza, gaze upon Tutankhamun’s golden burial treasures, cruise down the eternal Nile aboard a luxury dahabiya, and snorkel the pristine coral gardens of the Red Sea.',
    personality: 'Monumental, Timeless, Mystical, Archaic',
    idealFor: 'History connoisseurs, archaeologists at heart, river cruisers, scuba divers',
    travelStyles: ['Historical', 'Cultural', 'Adventure', 'Beach'],
    layoutVariant: 'split-hero',
    bestTime: 'October to April',
    idealDuration: '8 – 14 Days',
    budget: 'EGP 2,500 – EGP 6,500 / day ($60 – $160)',
    budgetTier: 'Budget',
    currency: 'Egyptian Pound (EGP / LE)',
    language: 'Arabic (English widely understood in tourism and hotels)',
    timeZone: 'Eastern European Time (GMT+2 / GMT+3)',
    visa: 'Online eVisa / Visa on Arrival for $25 USD',
    transportation: 'Private Egyptologist Vans, Luxury Nile Cruise Ships, Sleeper Trains',
    cuisine: 'Koshary, Ful Medames, Grilled Kofta & Kebab, Fresh Falafel (Taameya), Umm Ali Dessert',
    bestFor: 'Giza Pyramids & Sphinx, Valley of the Kings Royal Tombs, Abu Simbel Temples, Nile Cruises',
    recommendedStay: 'Mena House Pyramid-View Palace & Luxury Nile Suite',
    heroImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=800&q=80'
    ],
    destinations: [
      { name: 'Cairo', desc: 'Bustling megalopolis housing the Grand Egyptian Museum, Islamic medieval Citadel, and Khan el-Khalili.', category: 'Culture', img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80', rating: 4.94 },
      { name: 'Giza Pyramids', desc: 'Sole surviving ancient Wonder of the World: Great Pyramid of Khufu guarded by the enigmatic Sphinx.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Luxor', desc: 'World’s greatest open-air museum home to Karnak’s hypostyle hall and the monumental Luxor Temple.', category: 'History', img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Aswan', desc: 'Nile border city celebrated for golden sand dunes, Nubian villages, and the romantic Temple of Philae.', category: 'Culture', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', rating: 4.93 },
      { name: 'Hurghada', desc: 'Vibrant Red Sea coastal resort paradise famed for year-round sun, diving, and offshore desert safaris.', category: 'Beach', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', rating: 4.88 },
      { name: 'Sharm El Sheikh', desc: 'Sinai peninsula scuba sanctuary boasting Ras Mohammed National Park coral walls.', category: 'Adventure', img: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=600&q=80', rating: 4.91 },
      { name: 'Alexandria', desc: 'Mediterranean bride founded by Alexander the Great with the modern Bibliotheca and Qaitbay Fort.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80', rating: 4.86 },
      { name: 'Valley of the Kings', desc: 'Royal necropolis where Pharaohs including Tutankhamun and Ramesses were laid to rest with hieroglyphic tombs.', category: 'History', img: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80', rating: 4.99 },
      { name: 'Abu Simbel', desc: 'Colossal rock-hewn temples of Ramesses II and Queen Nefertari relocated from rising Lake Nasser waters.', category: 'Heritage', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80', rating: 4.98 },
      { name: 'Nile River', desc: 'The lifeblood of Egypt: cruise leisurely past waving date palms, water buffalo, and ancient riverside temples.', category: 'Nature', img: 'https://images.unsplash.com/photo-1517400508447-88cca558e457?auto=format&fit=crop&w=600&q=80', rating: 4.97 }
    ],
    experiences: [
      { name: 'Private Sunrise Visit to the Giza Plateau', type: 'History', icon: 'Crown', desc: 'Stand between the paws of the Great Sphinx before public gates open.' },
      { name: 'Hot-Air Balloon Flight over Luxor’s Valley of the Kings', type: 'Adventure', icon: 'Compass', desc: 'Drift silently over the Colossi of Memnon and Hatshepsut Temple.' },
      { name: '5-Day Luxury Nile Dahabiya River Cruise', type: 'Luxury', icon: 'Heart', desc: 'Sail with private butler between Luxor and Aswan on a traditional wooden boat.' },
      { name: 'Grand Egyptian Museum Royal Mummy Gallery Tour', type: 'Art', icon: 'Sparkles', desc: 'Walk with an Egyptologist through King Tutankhamun’s complete 5,000-piece collection.' }
    ],
    hotels: [
      {
        name: 'Marriott Mena House, Cairo',
        city: 'Giza (Pyramids Plateau)',
        tier: 'Luxury',
        rating: 4.96,
        price: 'From $490 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Direct Uninterrupted Views of the Great Pyramid, Historic Royal Suite Palace, Lush Scented Gardens',
        img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Sofitel Legend Old Cataract Aswan',
        city: 'Aswan (Nile Riverfront)',
        tier: 'Premium',
        rating: 4.94,
        price: 'From $390 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Where Agatha Christie Wrote Death on the Nile, Pink Granite Palace Overlooking Elephantine Island',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80'
      },
      {
        name: 'Steigenberger Hotel El Tahrir',
        city: 'Cairo (Tahrir Square)',
        tier: 'Budget',
        rating: 4.62,
        price: 'From $110 / night',
        priceNote: 'Estimated Starting Price',
        facilities: 'Steps from the Egyptian Antiquities Museum, Heated Outdoor Pool, Modern Soundproof Rooms',
        img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
]
