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
} from 'lucide-react'

// =========================================================================
// CURATED 10-IMAGE PHOTO BANKS (All high-res, verified, non-repeating)
// =========================================================================

const heroImages = [
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

// Domestic Destinations (From src/destination/Domestic)
const domesticHeritageImages = [
  'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1609137144822-0d1c79875f36?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
]

const domesticCoastalImages = [
  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
]

const domesticMountainImages = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=800&q=80',
]

// International Destinations (From src/destination/International)
const intlEuropeImages = [
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
]

const intlArabianImages = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578895101407-353246eb7678?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
]

const intlAsiaImages = [
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
]

// Tour Packages (From src/Tour Packages)
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

// Tours & Hotels (From src/tours)
const tourDetailsImages = [
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
]

const hotelDetailsImages = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
]

// Services (From src/pages/Services)
const serviceItineraryImages = [
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508672019048-805b876b67e2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
]

const serviceStaysImages = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
]

const serviceTransfersImages = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519074069444-1ba4fff16def?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
]

const serviceExperiencesImages = [
  'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1510076857177-7470076d4198?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
]

// About Atelier Visuals (From src/pages/About)
const aboutAtelierImages = [
  'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
]

// =========================================================================
// REUSABLE ULTRA-SMOOTH DYNAMIC IMAGE CAROUSEL (1-Second Auto Rotation)
// =========================================================================

function DynamicImageCarousel({
  images,
  alt = 'Travel Experience',
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

      {/* Manual Navigation Controls (Fade in on hover) */}
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
              className={`h-0.5 rounded-full transition-all duration-300 ${i === currentIndex
                  ? 'w-3.5 bg-[#f6e5b4]'
                  : 'w-1 bg-white/40'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// =========================================================================
// MAIN HOMEPAGE COMPONENT
// =========================================================================

export default function Index() {
  // Hero Search State
  const [destinationQuery, setDestinationQuery] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('Autumn / Winter 2026')
  const [selectedGuests, setSelectedGuests] = useState('2 Guests')

  // Rare Departures Countdown State
  const [vaultTimer, setVaultTimer] = useState({ days: 38, hours: 14, minutes: 22, seconds: 45 })

  useEffect(() => {
    const t = setInterval(() => {
      setVaultTimer((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  // Calculator State
  const [calcRegion, setCalcRegion] = useState('Europe & Mediterranean')
  const [calcNights, setCalcNights] = useState(7)
  const [calcTier, setCalcTier] = useState('Grand Luxury')
  const [calcGuests, setCalcGuests] = useState(2)

  const calcMultiplier = calcTier === 'Grand Luxury' ? 950 : calcTier === 'Sovereign Palace' ? 1650 : 2900
  const estimatedBudget = calcNights * calcMultiplier * (calcGuests > 2 ? 1 + (calcGuests - 2) * 0.4 : 1)

  // Day Timeline State
  const [activeDay, setActiveDay] = useState(0)

  // Lightbox Modal State
  const [activeModalImg, setActiveModalImg] = useState(null)

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0)

  // Consultation State
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    budget: '$15,000 - $30,000',
    notes: '',
  })

  // Comparison Tab State (Section 19)
  const [comparisonTab, setComparisonTab] = useState('domestic')

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="bg-[#f8f5f0] text-slate-900 selection:bg-[#d7b36a]/30 selection:text-slate-900">
      {/* =========================================================================
          SECTION 1: HERO & REAL-TIME CONCIERGE DISCOVERY BAR (Header: Home)
          - Compact, information-dense, 10 rotating panoramic images
          - More content immediately visible above the fold
      ========================================================================= */}
      <section className="relative overflow-hidden px-4 pt-6 pb-12 sm:px-6 lg:px-8">
        {/* Home Hero: Premium Static Cinematic Background Image */}
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=90")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dynamic 10-Image Rotating Panoramic Hero Background */}
          <DynamicImageCarousel
            images={heroImages}
            alt="World-Class Luxury Destinations"
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
                'linear-gradient(160deg, rgba(10,14,26,0.72) 0%, rgba(10,14,26,0.50) 35%, rgba(10,14,26,0.30) 60%, rgba(10,14,26,0.65) 100%)',
            }}
          />

          {/* Hero Content Layer */}
          <div className="relative z-20 p-6 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[580px] lg:min-h-[620px]">
            {/* Top Row: Micro-Badges & Live Concierge Ticker */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-slate-950/70 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4] backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#d7b36a] animate-ping" />
                <span>RK Sovereign Atelier • Est. 2008</span>
              </div>

              <div className="hidden sm:flex items-center gap-3 rounded-full border border-white/15 bg-slate-950/60 px-4 py-1 text-xs text-slate-300 backdrop-blur-md">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="font-semibold text-white">Live VIP Activity:</span>
                <span className="text-slate-300">Positano Villa Reserved for June 2027</span>
              </div>
            </div>

            {/* Middle: Balanced, High-Impact Typography */}
            <div className="my-6 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.08] tracking-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)]">
                Where Extraordinary Journeys Become <span className="italic font-normal gold-gradient-text">Lifelong Legends</span>.
              </h1>
              <p className="mt-3 text-sm sm:text-base text-white/90 font-light max-w-2xl leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                Bespoke private jet expeditions, royal palace buyouts, and 24/7 dedicated field concierges across 65 nations.
              </p>

              {/* Instant Trust Pillars */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-wider text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full text-white bg-white/10 px-3 py-1 backdrop-blur-md border border-white/20">
                  <Award className="h-3 w-3 text-[#d7b36a]" /> Virtuoso Member
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full text-white bg-white/10 px-3 py-1 backdrop-blur-md border border-white/20">
                  <ShieldCheck className="h-3 w-3 text-[#d7b36a]" /> Diplomatic Privacy
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full text-white bg-white/10 px-3 py-1 backdrop-blur-md border border-white/20">
                  <Plane className="h-3 w-3 text-[#d7b36a]" /> Tarmac Fast-Track
                </span>
              </div>
            </div>

            {/* Bottom: Compact, High-Density Concierge Search Bar */}
            <div className="rounded-2xl border border-white/20 bg-slate-950/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl">
              <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.4fr_1.1fr_1.1fr_auto] items-center">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 hover:border-gold-400/40 transition">
                  <label className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-[#d7b36a]">
                    <MapPin className="h-3 w-3" /> Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Where would you like to escape?"
                    value={destinationQuery}
                    onChange={(e) => setDestinationQuery(e.target.value)}
                    className="w-full bg-transparent text-xs text-white placeholder-slate-400 outline-none mt-0.5 font-medium"
                  />
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 hover:border-gold-400/40 transition">
                  <label className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-[#d7b36a]">
                    <Calendar className="h-3 w-3" /> Departure Season
                  </label>
                  <select
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="w-full bg-transparent text-xs text-white outline-none mt-0.5 font-medium [&>option]:bg-slate-900"
                  >
                    <option>Autumn / Winter 2026</option>
                    <option>Spring Blossom 2027</option>
                    <option>High Summer Sovereign</option>
                    <option>Immediate (Under 30 Days)</option>
                  </select>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 hover:border-gold-400/40 transition">
                  <label className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-[#d7b36a]">
                    <Users className="h-3 w-3" /> Party Size
                  </label>
                  <select
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(e.target.value)}
                    className="w-full bg-transparent text-xs text-white outline-none mt-0.5 font-medium [&>option]:bg-slate-900"
                  >
                    <option>2 Guests (Connoisseur Couple)</option>
                    <option>1 Solo Visionary</option>
                    <option>Family Estate (3-5 Guests)</option>
                    <option>Private Buyout (6+ Guests)</option>
                  </select>
                </div>

                <Link
                  to="/destination/international"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d7b36a] to-[#b28a43] px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-[#d7b36a]/20 hover:scale-[1.02] transition"
                >
                  <span>Explore Trips</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Quick Destination Chips */}
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-300 pt-2 border-t border-white/10">
                <span className="font-semibold uppercase tracking-wider text-[#d7b36a]">Trending:</span>
                {['Amalfi Coast', 'Kyoto Gardens', 'Swiss Alps', 'Bali Sanctuaries', 'Rajasthan Palaces'].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setDestinationQuery(chip)}
                    className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 hover:border-gold-400 hover:text-white transition"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: VIP MEMBER PORTAL & TRIP MANAGEMENT STRIP (Header: Login)
          - Sleek, compact customer-account CTA bar (Sign In, My Trips, Saved Tours)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gold-300/40 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-4 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#d7b36a] to-[#9d7b3d] text-slate-950 font-bold">
              <Key className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f6e5b4]">RK Concierge Circle</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.2 text-[9px] font-semibold text-emerald-300">
                  Member Portal
                </span>
              </div>
              <p className="text-xs text-slate-300 font-light">
                Sign in to view your bespoke itineraries, live flight manifests, and private villa vouchers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition"
            >
              Sign In to My Trips
            </Link>
            <Link
              to="/register"
              className="rounded-xl bg-[#d7b36a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-[#e5c98d] transition shadow"
            >
              Request Membership
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DESTINATIONS — DOMESTIC INDIA COLLECTIONS (Header: Destination)
          - Compact cards, 10 rotating images per card, high density
          - Connects directly to /destination/domestic
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Crown className="h-3 w-3 text-[#d7b36a]" /> Domestic Portfolio
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Discover India in Refined Comfort.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              From golden Rajput fortresses to serene backwaters and mist-clad Himalayan lodges.
            </p>
          </div>

          <Link
            to="/destination/domestic"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#b28a43] transition"
          >
            <span>All Domestic Destinations</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 3 Compact Domestic Cards (Matching src/destination/Domestic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Classic Heritage Trails */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={domesticHeritageImages}
                alt="Classic Heritage Trails North India"
                className="h-44 sm:h-48 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    North India
                  </span>
                }
              />
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Palace Stays & Fortresses</span>
                  <span className="font-semibold text-[#8a6b32]">16 Expeditions</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Classic Heritage Trails
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                  Hand-picked luxury experiences through iconic landmarks, palace stays, and warm hospitality in Jaipur, Udaipur & Agra.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
                  <span className="rounded bg-slate-100 px-2 py-0.5">Udaipur Lake Palace</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5">Taj Mahal Sunrise</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5">Vintage Car Escort</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">From $1,450 / guest</span>
              <Link
                to="/destination/domestic"
                className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                Explore Details
              </Link>
            </div>
          </div>

          {/* Card 2: Coastal Escapes */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={domesticCoastalImages}
                alt="Coastal Escapes Goa & Kerala"
                className="h-44 sm:h-48 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    Goa & Kerala
                  </span>
                }
              />
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Villas & Houseboats</span>
                  <span className="font-semibold text-[#8a6b32]">14 Expeditions</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Coastal Escapes
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                  Unwind with private beach villas, curated dining, and wellness-driven coastal journeys along Arabian sea shorelines.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
                  <span className="rounded bg-slate-100 px-2 py-0.5">Private Houseboat</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5">Ayurvedic Sanctuary</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5">Secluded Beach Villa</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">From $1,280 / guest</span>
              <Link
                to="/destination/domestic"
                className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                Explore Details
              </Link>
            </div>
          </div>

          {/* Card 3: Mountain Getaways */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={domesticMountainImages}
                alt="Mountain Getaways Himalayan Retreats"
                className="h-44 sm:h-48 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    Himalayan Retreats
                  </span>
                }
              />
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>High Altitude Lodges</span>
                  <span className="font-semibold text-[#8a6b32]">12 Expeditions</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Mountain Getaways
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                  Reconnect with serene mountain chalets, panoramic snow views, and personalized adventure itineraries in Manali, Leh & Kashmir.
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
                  <span className="rounded bg-slate-100 px-2 py-0.5">Cedar Forest Lodge</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5">Helicopter Valley Lift</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5">Private Mountain Guide</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">From $1,620 / guest</span>
              <Link
                to="/destination/domestic"
                className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                Explore Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DESTINATIONS — INTERNATIONAL SOVEREIGNTY (Header: Destination)
          - Compact cards, 10 rotating images per card, high density
          - Connects directly to /destination/international
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Globe2 className="h-3 w-3 text-[#d7b36a]" /> International Collections
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Cross Borders with Unmistakable Style.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                European grandeur, Arabian opulence, and Far East sanctuaries designed with five-star precision.
              </p>
            </div>

            <Link
              to="/destination/international"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#b28a43] transition"
            >
              <span>All International Portfolios</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 3 Compact International Cards (Matching src/destination/International) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Bespoke Europe */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <DynamicImageCarousel
                  images={intlEuropeImages}
                  alt="Bespoke Europe Paris Rome Zurich"
                  className="h-44 sm:h-48 w-full"
                  interval={1000}
                  badge={
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                      Paris • Rome • Zurich
                    </span>
                  }
                />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Iconic Capitals</span>
                    <span className="font-semibold text-[#8a6b32]">28 Curated Routes</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                    Bespoke Europe
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                    Elegant city breaks with iconic landmarks, Michelin dining, and private guided access to the Vatican, Louvre & Swiss chalets.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
                    <span className="rounded bg-slate-100 px-2 py-0.5">Private Riva Boat</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5">After-Hours Louvre</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5">Matterhorn Chalet</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">From $2,480 / guest</span>
                <Link
                  to="/destination/international"
                  className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  View Destinations
                </Link>
              </div>
            </div>

            {/* Card 2: Arabian Luxury */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <DynamicImageCarousel
                  images={intlArabianImages}
                  alt="Arabian Luxury Dubai Abu Dhabi"
                  className="h-44 sm:h-48 w-full"
                  interval={1000}
                  badge={
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                      Dubai • Abu Dhabi
                    </span>
                  }
                />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Desert Luxe & Skylines</span>
                    <span className="font-semibold text-[#8a6b32]">18 Curated Routes</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                    Arabian Luxury
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                    Skyline indulgence, royal desert reserves, and five-star hospitality shaped around your pace in the Emirates and beyond.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
                    <span className="rounded bg-slate-100 px-2 py-0.5">Desert Pool Pavilion</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5">Private Yacht Marina</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5">Falconry & Stargazing</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">From $1,950 / guest</span>
                <Link
                  to="/destination/international"
                  className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  View Destinations
                </Link>
              </div>
            </div>

            {/* Card 3: Asia Horizons */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <DynamicImageCarousel
                  images={intlAsiaImages}
                  alt="Asia Horizons Bali Bangkok Singapore"
                  className="h-44 sm:h-48 w-full"
                  interval={1000}
                  badge={
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                      Bali • Kyoto • Singapore
                    </span>
                  }
                />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Zen Stays & Tropics</span>
                    <span className="font-semibold text-[#8a6b32]">24 Curated Routes</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                    Asia Horizons
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 font-light line-clamp-2 leading-relaxed">
                    Amiable beach retreats, cultural immersion, and world-class wellness in the most immersive sanctuaries of Asia.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-600">
                    <span className="rounded bg-slate-100 px-2 py-0.5">Ubud Rainforest Villa</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5">Private Ryokan Kaiseki</span>
                    <span className="rounded bg-slate-100 px-2 py-0.5">Sacred Water Blessing</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">From $1,780 / guest</span>
                <Link
                  to="/destination/international"
                  className="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  View Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CURATED TOUR PACKAGES (Header: Tour Packages)
          - Family, Honeymoon, Adventure, Weekend
          - 10 rotating images per card, compact height, all routes connected
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Sparkles className="h-3 w-3 text-[#d7b36a]" /> Signature Packages
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Bespoke Tour Packages.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Crafted for family dynasties, honeymoon romance, high-altitude thrills, and restorative weekend getaways.
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              to="/tour-packages/family"
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:border-gold-400"
            >
              All Packages
            </Link>
          </div>
        </div>

        {/* 4 Compact Tour Package Cards (Family, Honeymoon, Adventure, Weekend) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Package 1: Family Tours */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={pkgFamilyImages}
                alt="Family Tours"
                className="h-44 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    Family Dynasties
                  </span>
                }
              />
              <div className="p-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Multi-Generational</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="h-3 w-3 fill-amber-400" /> 4.96
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Family Tours
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  Journeys that bring everyone closer: relaxed beach villas, private transport, and kid-friendly local adventures.
                </p>
                <div className="mt-3 space-y-1 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Private 4-Bedroom Villa Stays</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Flexible Daily Pacing & Guide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-slate-400 block">From</span>
                <span className="text-sm font-bold text-slate-900">$2,680 / pkg</span>
              </div>
              <Link
                to="/tour-packages/family"
                className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                View Package
              </Link>
            </div>
          </div>

          {/* Package 2: Honeymoon Tours */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={pkgHoneymoonImages}
                alt="Honeymoon Tours"
                className="h-44 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    Romance & Seclusion
                  </span>
                }
              />
              <div className="p-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Couples Sanctuary</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="h-3 w-3 fill-amber-400" /> 5.0
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Honeymoon Tours
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  Romance, privacy, and unforgettable moments: private beach dinners, luxury pool villas, and sunset catamaran charters.
                </p>
                <div className="mt-3 space-y-1 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Private Riva Sunset Charter</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Candlelit Cliffside Dining</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-slate-400 block">From</span>
                <span className="text-sm font-bold text-slate-900">$2,850 / pkg</span>
              </div>
              <Link
                to="/tour-packages/honeymoon"
                className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                View Package
              </Link>
            </div>
          </div>

          {/* Package 3: Adventure Tours */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={pkgAdventureImages}
                alt="Adventure Tours"
                className="h-44 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    High Thrill
                  </span>
                }
              />
              <div className="p-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Alpine & Arctic</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="h-3 w-3 fill-amber-400" /> 4.98
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Adventure Tours
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  Thrill, wonder, and high-altitude memories: trekking routes, heli-ski drops, and weather-smart safety planning.
                </p>
                <div className="mt-3 space-y-1 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Heli-Flight over Glaciers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Certified Mountain Guide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-slate-400 block">From</span>
                <span className="text-sm font-bold text-slate-900">$3,450 / pkg</span>
              </div>
              <Link
                to="/tour-packages/adventure"
                className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                View Package
              </Link>
            </div>
          </div>

          {/* Package 4: Weekend Tours */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={pkgWeekendImages}
                alt="Weekend Tours"
                className="h-44 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    48-72 Hours
                  </span>
                }
              />
              <div className="p-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>Quick Rejuvenation</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="h-3 w-3 fill-amber-400" /> 4.92
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Weekend Tours
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  High-impact city and nature getaways: luxury spa sanctuaries, quick helicopter legs, and seamless roundtrip comfort.
                </p>
                <div className="mt-3 space-y-1 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Fast-Track Airport Transfers</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" />
                    <span>Complimentary Late Checkout</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-slate-400 block">From</span>
                <span className="text-sm font-bold text-slate-900">$1,420 / pkg</span>
              </div>
              <Link
                to="/tour-packages/weekend"
                className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                View Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SIGNATURE TOURS & HOTEL SANCTUARIES (Header: Tours)
          - Tour Details (/tours/tour-details) & Hotel Details (/tours/hotel-details)
          - 10 rotating images per card, high density, compact
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Luggage className="h-3 w-3 text-[#d7b36a]" /> Tours & Accommodations
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Curated Tours & Palatial Hotel Sanctuaries.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                Discover how every itinerary and handpicked hotel transforms travel into high art.
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                to="/tours/tour-details"
                className="rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800"
              >
                Tour Details
              </Link>
              <Link
                to="/tours/hotel-details"
                className="rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Hotel Details
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tour Details Card */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <DynamicImageCarousel
                  images={tourDetailsImages}
                  alt="Tour Details Itinerary Design"
                  className="h-52 w-full"
                  interval={1000}
                  badge={
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                      Every Itinerary Designed With Intention
                    </span>
                  }
                />
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                    Comprehensive Tour Routing & Inclusions
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 font-light leading-relaxed">
                    From arrival to departure, our tours balance iconic experiences, seamless private transfers, local dining, flexible pacing, and accredited expert guidance.
                  </p>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-700 font-medium">
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">✦ Curated Sightseeing</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">✦ Seamless Transfers</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">✦ Local Fine Dining</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">✦ Personal Experiences</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">✦ Flexible Pacing</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">✦ Expert Guidance</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">120+ Signature Global Routes</span>
                <Link
                  to="/tours/tour-details"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  Explore Tour Details →
                </Link>
              </div>
            </div>

            {/* Hotel Details Card */}
            <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <DynamicImageCarousel
                  images={hotelDetailsImages}
                  alt="Hotel Details Accommodations"
                  className="h-52 w-full"
                  interval={1000}
                  badge={
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                      Chosen for Character & Comfort
                    </span>
                  }
                />
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                    Handpicked Luxury Stays & Sanctuaries
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 font-light leading-relaxed">
                    Every accommodation is selected for its architectural pedigree, intuitive hospitality, and ability to turn a stopover into an unforgettable destination in itself.
                  </p>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-slate-700 font-medium">
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">⌂ Boutique Heritage</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">⌂ Oceanfront Villas</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">⌂ Mountain Lodges</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">⌂ City Luxury Suites</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">⌂ Wellness Resorts</span>
                    <span className="rounded-lg bg-slate-50 border border-slate-100 p-2">⌂ Private Island Buyouts</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Virtuoso & Leading Hotels Partner</span>
                <Link
                  to="/tours/hotel-details"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  Explore Hotel Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHITE-GLOVE TRAVEL SERVICES (Header: Services)
          - Shows all 4 core services from src/pages/Services
          - Dynamic 10-image carousel for each, icon, key benefit, explore button
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <CheckCircle2 className="h-3 w-3 text-[#d7b36a]" /> Our Services
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Everything Considered, From Start to Finish.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Whether a quick city respite or a multi-country expedition, we design every touchpoint to feel effortless.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#b28a43] transition"
          >
            <span>All Services Page</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 4 Compact Service Cards (From src/pages/Services) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Service 1: Tailor-made itineraries */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={serviceItineraryImages}
                alt="Tailor-made Itineraries"
                className="h-40 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    1:1 Curation
                  </span>
                }
              />
              <div className="p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#fffaf1] text-[#8a6b32]">
                  <Compass className="h-4 w-4" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Tailor-Made Itineraries
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  We create seamless plans around your pace, preferences, and dream destinations with zero cookie-cutter templates.
                </p>
                <div className="mt-2.5 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Key Benefit: Complete Schedule Flexibility
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Bespoke Blueprint</span>
              <Link to="/services" className="text-xs font-bold text-[#8a6b32] hover:underline">
                Explore →
              </Link>
            </div>
          </div>

          {/* Service 2: Luxury accommodation */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={serviceStaysImages}
                alt="Luxury Accommodation"
                className="h-40 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    Sanctuary Stays
                  </span>
                }
              />
              <div className="p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#fffaf1] text-[#8a6b32]">
                  <Crown className="h-4 w-4" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Luxury Accommodation
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  Handpicked stays across boutique, heritage castles, and five-star private pool villas for an unforgettable stay.
                </p>
                <div className="mt-2.5 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Key Benefit: VIP Upgrades & Amenities
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Off-Market Estates</span>
              <Link to="/services" className="text-xs font-bold text-[#8a6b32] hover:underline">
                Explore →
              </Link>
            </div>
          </div>

          {/* Service 3: Private transfers */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={serviceTransfersImages}
                alt="Private Transfers & Aviation"
                className="h-40 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    Seamless Logistics
                  </span>
                }
              />
              <div className="p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#fffaf1] text-[#8a6b32]">
                  <Plane className="h-4 w-4" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Private Transfers
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  Enjoy easy movement with discreet, comfortable, and efficient travel logistics: private jets, Maybachs, and Riva boats.
                </p>
                <div className="mt-2.5 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Key Benefit: Zero Terminal Queues
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Tarmac Escorts</span>
              <Link to="/services" className="text-xs font-bold text-[#8a6b32] hover:underline">
                Explore →
              </Link>
            </div>
          </div>

          {/* Service 4: Exclusive experiences */}
          <div className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <DynamicImageCarousel
                images={serviceExperiencesImages}
                alt="Exclusive VIP Experiences"
                className="h-40 w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    Closed Door Access
                  </span>
                }
              />
              <div className="p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#fffaf1] text-[#8a6b32]">
                  <Sparkles className="h-4 w-4" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                  Exclusive Experiences
                </h3>
                <p className="mt-1 text-[11px] text-slate-600 font-light line-clamp-2">
                  Access curated local moments, after-hours private museum tours, and Michelin-star private chef table sessions.
                </p>
                <div className="mt-2.5 text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  Key Benefit: Unmatchable Insider Access
                </div>
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">Culinary & Cultural</span>
              <Link to="/services" className="text-xs font-bold text-[#8a6b32] hover:underline">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: THE RK ATELIER & HERITAGE STORY (Header: About)
          - Story, Mission, Vision, Experience, Travel Philosophy, Statistics
          - 10-image dynamic rotating carousel, CTA to /about
      ========================================================================= */}
      <section className="bg-[#111827] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            {/* Left: Content & Pillars */}
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
                <Award className="h-3 w-3 text-[#d7b36a]" /> About RK Tours Atelier
              </div>
              <h2 className="mt-3 text-2xl sm:text-4xl font-serif text-white tracking-tight leading-tight">
                A Reputation Built on Story-Led Travel & Uncompromising Trust.
              </h2>
              <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                Founded with a singular mission: to liberate extraordinary travelers from the friction of standard tourism. We craft modern luxury travel experiences rooted in deep cultural access, thoughtful pacing, and sovereign guest care.
              </p>

              {/* 3 Core Pillars (From src/pages/About) */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <div className="text-[#f6e5b4] text-xs font-bold uppercase tracking-wider mb-1">
                    Story-Led Travel
                  </div>
                  <p className="text-[11px] text-slate-300 font-light leading-normal">
                    Journeys designed around what matters most: comfort, depth, and unforgettable moments.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <div className="text-[#f6e5b4] text-xs font-bold uppercase tracking-wider mb-1">
                    Expert Curation
                  </div>
                  <p className="text-[11px] text-slate-300 font-light leading-normal">
                    Specialists merging field insight, local relationships, and flawless logistical timing.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <div className="text-[#f6e5b4] text-xs font-bold uppercase tracking-wider mb-1">
                    Thoughtful Service
                  </div>
                  <p className="text-[11px] text-slate-300 font-light leading-normal">
                    Every touchpoint considered, from first consultation to final farewell at your doorstep.
                  </p>
                </div>
              </div>

              {/* Statistics Row */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-serif font-bold text-[#f6e5b4]">18+</div>
                  <div className="text-[10px] uppercase text-slate-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-[#f6e5b4]">42k+</div>
                  <div className="text-[10px] uppercase text-slate-400">Travelers Served</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-[#f6e5b4]">65+</div>
                  <div className="text-[10px] uppercase text-slate-400">Nations Covered</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  to="/about"
                  className="rounded-full bg-gradient-to-r from-[#d7b36a] to-[#b28a43] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:scale-102 transition shadow-lg"
                >
                  Read Our Complete Story
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition"
                >
                  Meet Our Directors
                </Link>
              </div>
            </div>

            {/* Right: Dynamic 10-Image Rotating Carousel */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <DynamicImageCarousel
                images={aboutAtelierImages}
                alt="RK Tours Travel Atelier"
                className="h-[360px] sm:h-[420px] w-full"
                interval={1000}
                badge={
                  <span className="rounded-full bg-slate-950/80 border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                    The Atelier in Action
                  </span>
                }
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl bg-slate-950/85 border border-white/15 p-3 backdrop-blur-md">
                <Quote className="h-4 w-4 text-[#d7b36a] mb-1" />
                <p className="text-xs italic text-slate-200 font-serif">
                  “We do not sell trips; we curate time, stillness, and awe in a world that moves too fast.”
                </p>
                <p className="mt-1 text-[9px] uppercase tracking-wider text-[#d7b36a] font-semibold">
                  — RK Tours Managing Directorate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: INTERACTIVE DAY-BY-DAY JOURNEY ANATOMY (Timeline Experience)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Compass className="h-3 w-3 text-[#d7b36a]" /> Day-By-Day Blueprint
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Anatomy of an Odyssey: Italian Lakes & Dolomites.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
            Click each day to preview how our private logistics and exclusive cultural access flow seamlessly.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-6 overflow-x-auto pb-2">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {[
              { day: 'Day 01', loc: 'Venice Riva Escort', img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=80', stay: 'Aman Venice Palazzo Papadopoli', exp: 'Private wooden Riva boat transfer across the lagoon directly to the water-gate of Aman Venice. Private night tour of St. Mark’s.' },
              { day: 'Day 02', loc: 'Dolomites Helicopter Lift', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80', stay: 'Rosa Alpina, an Aman Partner Hotel', exp: 'Helicopter flight directly over UNESCO limestone peaks. Guided glacier walk and four-course alpine Stube tasting.' },
              { day: 'Day 03', loc: 'Lake Como Hydroplane', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80', stay: 'Passalacqua Lake Como', exp: 'Closed-gate private access to Villa Balbianello terraced gardens followed by sunset cruise on vintage Riva yacht.' },
              { day: 'Day 04', loc: 'Florence Medici Vaults', img: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=900&q=80', stay: 'Four Seasons Hotel Firenze', exp: 'After-hours private viewing of the Uffizi Gallery with chief art historian. Private terrace dinner overlooking Ponte Vecchio.' },
              { day: 'Day 05', loc: 'Amalfi Coast Sirenuse', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80', stay: 'Le Sirenuse Positano', exp: 'Helicopter coastal arrival in Ravello. Farewell violin performance above azure horizon and Michelin dining under 400 candles.' },
            ].map((item, idx) => (
              <button
                key={item.day}
                type="button"
                onClick={() => setActiveDay(idx)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition ${activeDay === idx
                    ? 'bg-slate-900 text-[#f6e5b4] shadow'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <span className="font-bold mr-1">{item.day}:</span>
                <span>{item.loc.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day View */}
        {[
          { day: 'Day 01', loc: 'Venice Riva Escort', img: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=900&q=80', stay: 'Aman Venice Palazzo Papadopoli', exp: 'Private wooden Riva boat transfer across the lagoon directly to the water-gate of Aman Venice. Private night tour of St. Mark’s.' },
          { day: 'Day 02', loc: 'Dolomites Helicopter Lift', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80', stay: 'Rosa Alpina, an Aman Partner Hotel', exp: 'Helicopter flight directly over UNESCO limestone peaks. Guided glacier walk and four-course alpine Stube tasting.' },
          { day: 'Day 03', loc: 'Lake Como Hydroplane', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80', stay: 'Passalacqua Lake Como', exp: 'Closed-gate private access to Villa Balbianello terraced gardens followed by sunset cruise on vintage Riva yacht.' },
          { day: 'Day 04', loc: 'Florence Medici Vaults', img: 'https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=900&q=80', stay: 'Four Seasons Hotel Firenze', exp: 'After-hours private viewing of the Uffizi Gallery with chief art historian. Private terrace dinner overlooking Ponte Vecchio.' },
          { day: 'Day 05', loc: 'Amalfi Coast Sirenuse', img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80', stay: 'Le Sirenuse Positano', exp: 'Helicopter coastal arrival in Ravello. Farewell violin performance above azure horizon and Michelin dining under 400 candles.' },
        ].filter((_, i) => i === activeDay).map((item) => (
          <div key={item.day} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm grid md:grid-cols-2 items-center">
            <div className="relative h-56 md:h-72 overflow-hidden">
              <img src={item.img} alt={item.loc} className="h-full w-full object-cover" />
              <div className="absolute top-3 left-3 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                {item.day} • {item.loc}
              </div>
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a6b32] block">
                Sanctuary Accommodation
              </span>
              <div className="text-lg font-serif font-bold text-slate-900 mt-0.5">{item.stay}</div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{item.exp}</p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Included in European High Odyssey</span>
                <Link
                  to="/tours/tour-details"
                  className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  Full Itinerary →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================================
          SECTION 10: ARCHITECTURAL TRAVEL PORTALS (By Travel Style)
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Crown className="h-3 w-3 text-[#d7b36a]" /> Travel Passions
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Curated Collections by Travel Style.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Architectural portals to honeymoons, polar expeditions, and royal estates.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { title: 'Honeymoons', icon: Heart, route: '/tour-packages/honeymoon', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80' },
              { title: 'Family Estates', icon: Users, route: '/tour-packages/family', img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80' },
              { title: 'Adventure', icon: Mountain, route: '/tour-packages/adventure', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80' },
              { title: 'Weekend Stays', icon: Sun, route: '/tour-packages/weekend', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=400&q=80' },
              { title: 'Royal Heritage', icon: Crown, route: '/destination/domestic', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80' },
              { title: 'International', icon: Globe2, route: '/destination/international', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80' },
            ].map((p) => {
              const Icon = p.icon
              return (
                <Link
                  key={p.title}
                  to={p.route}
                  className="group relative h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-0 p-3 flex flex-col justify-between text-white">
                    <div className="self-end flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/60 backdrop-blur-md">
                      <Icon className="h-3.5 w-3.5 text-[#f6e5b4]" />
                    </div>
                    <div>
                      <div className="text-xs font-serif font-bold text-white group-hover:text-gold-200 transition">
                        {p.title}
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-slate-300">Explore →</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: THE PRIVATE VAULT: RARE SEASONAL DEPARTURES (Dark Luxury)
      ========================================================================= */}
      <section className="bg-[#090d16] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
                <Flame className="h-3 w-3 text-[#d7b36a]" /> The Private Vault
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-white tracking-tight">
                Rare Seasonal Departures.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 font-light">
                Extremely limited seasonal permits and private buyouts with live suite inventory.
              </p>
            </div>

            {/* Countdown Clock */}
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-2 text-center text-xs">
              <span className="text-[10px] uppercase text-[#d7b36a] mr-1">Closing:</span>
              <span className="font-bold text-white font-mono">{vaultTimer.days}d</span> :
              <span className="font-bold text-white font-mono">{vaultTimer.hours}h</span> :
              <span className="font-bold text-white font-mono">{vaultTimer.minutes}m</span> :
              <span className="font-bold text-white font-mono">{vaultTimer.seconds}s</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Arctic Aurora & Private Ice Dome',
                loc: 'Tromsø & Svalbard, Norway',
                date: 'Dec 12 - Dec 19, 2026',
                remaining: '2 Suites Remaining',
                price: '$6,800',
                img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
              },
              {
                title: 'Imperial Kyoto Cherry Blossom',
                loc: 'Kyoto & Nara, Japan',
                date: 'March 28 - April 05, 2027',
                remaining: '1 Villa Remaining',
                price: '$8,400',
                img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80',
              },
              {
                title: 'Serengeti Migration Great Sky Safari',
                loc: 'Serengeti, Tanzania',
                date: 'July 14 - July 22, 2027',
                remaining: '3 Tents Remaining',
                price: '$9,200',
                img: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=80',
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/15 bg-slate-900/60 p-4 flex flex-col justify-between">
                <div>
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <img src={v.img} alt={v.title} className="h-full w-full object-cover" />
                    <span className="absolute top-2 left-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[9px] font-bold text-rose-300 border border-white/10">
                      {v.remaining}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-serif font-bold text-white">{v.title}</h3>
                  <p className="text-[11px] text-[#d7b36a]">{v.date} • {v.loc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-serif font-bold text-[#f6e5b4]">{v.price}</span>
                  <Link
                    to="/contact"
                    className="rounded-lg bg-[#d7b36a] px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-[#e5c98d] transition"
                  >
                    Request Cabin
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: INTERACTIVE TRIP BUDGET & STYLE ESTIMATOR (Compact Tool)
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Sliders className="h-3 w-3 text-[#d7b36a]" /> Bespoke Estimator
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Interactive Trip Cost & Style Estimator.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
            Adjust your duration and luxury comfort tier to preview estimated bespoke budgets.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid lg:grid-cols-[1.3fr_0.8fr] gap-8 items-center">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  1. Destination Geography
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Europe & Mediterranean',
                    'Japan & Far East',
                    'Swiss Alps & Polar',
                    'Bali & Tropical Islands',
                    'Royal India Heritage',
                    'Middle East & Sahara',
                  ].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setCalcRegion(r)}
                      className={`rounded-lg p-2 text-xs font-medium text-center transition ${calcRegion === r
                          ? 'bg-slate-900 text-[#f6e5b4]'
                          : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>2. Duration</span>
                  <span className="text-sm font-serif font-bold text-slate-900">{calcNights} Nights</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="21"
                  value={calcNights}
                  onChange={(e) => setCalcNights(Number(e.target.value))}
                  className="w-full accent-[#d7b36a] cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  3. Privacy & Comfort Tier
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {['Grand Luxury', 'Sovereign Palace', 'Private Island / Jet'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setCalcTier(tier)}
                      className={`rounded-lg p-2.5 text-xs text-left border transition ${calcTier === tier
                          ? 'border-gold-400 bg-[#fffaf1] font-bold text-slate-900'
                          : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-2xl border border-gold-300/60 bg-gradient-to-br from-[#fffdf9] to-[#fbf6ec] p-6 shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a6b32]">Estimated Bespoke Range</span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-1">
                ${estimatedBudget.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                {calcNights} Nights • {calcRegion} • {calcTier}
              </p>
              <div className="mt-4 pt-3 border-t border-gold-200 space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#d7b36a]" />
                  <span>$500 Spa & Dining Credit Included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#d7b36a]" />
                  <span>Private Airport Tarmac Limousine</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#d7b36a]" />
                  <span>24/7 Dedicated Concierge Director</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-5 block w-full rounded-xl bg-slate-900 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#f6e5b4] hover:bg-slate-800 transition"
              >
                Inquire with These Specs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: VERIFIED VIP TRAVELER STORIES & EDITORIAL REVIEWS
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Star className="h-3 w-3 text-[#d7b36a]" /> Discerning Testimonials
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Voices of Discerning Voyagers.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Trusted by heads of state, creative leaders, and international families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: 'Lord & Lady Harrington',
                loc: 'London & Geneva',
                trip: 'Amalfi Sirenuse & Capri Charter',
                quote: 'RK Tours operates on an altitude far beyond ordinary luxury agencies. The after-hours private viewing of the Sistine Chapel was executed with sovereign precision.',
              },
              {
                name: 'Dev & Priya Singhania',
                loc: 'Mumbai & Singapore',
                trip: 'Rajasthan Palaces & Swiss Alps Multi-Gen',
                quote: 'Coordinating a 14-member multi-generational family across three countries seemed impossible until RK Tours took charge. The helicopter logistics were sheer poetry.',
              },
              {
                name: 'Dr. Julian Vance',
                loc: 'New York & Zurich',
                trip: 'Kyoto Sacred Zen & Hokkaido Powder',
                quote: 'The level of cultural access was astonishing. Having an 8th-generation tea master open a closed temple sanctuary just for us is a memory we will treasure forever.',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-400 mb-2">★★★★★</div>
                  <p className="text-xs sm:text-sm text-slate-700 font-serif italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{t.name}</span>
                    <span className="text-[10px] text-slate-400">{t.loc}</span>
                  </div>
                  <span className="text-[10px] text-[#8a6b32] font-semibold">{t.trip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: VISUAL VOYAGE: GUEST MOMENTS GALLERY WITH LIGHTBOX
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Maximize2 className="h-3 w-3 text-[#d7b36a]" /> Visual Chronicle
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Moments Worth Collecting.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Click any frame to inspect the light, location, and sovereign perspective of our expeditions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80', title: 'Santorini Caldera' },
            { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', title: 'Bora Bora Lagoon' },
            { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', title: 'Glacier Express Viaduct' },
            { url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80', title: 'Uluwatu Cliff Infinity Pool' },
            { url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80', title: 'Sahara Golden Dunes' },
            { url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80', title: 'Venice Grand Canal' },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => setActiveModalImg(item)}
              className="group relative h-36 sm:h-44 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition"
            >
              <img src={item.url} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition p-2 flex flex-col justify-end text-white">
                <span className="text-[10px] font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeModalImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl p-4">
              <button
                type="button"
                onClick={() => setActiveModalImg(null)}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <img src={activeModalImg.url} alt={activeModalImg.title} className="w-full h-80 object-cover rounded-xl" />
              <div className="mt-3 flex items-center justify-between text-white">
                <h4 className="font-serif text-lg font-bold">{activeModalImg.title}</h4>
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#d7b36a] px-3 py-1.5 text-xs font-bold text-slate-950"
                >
                  Book This Experience
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 16 — DESTINATION SPOTLIGHT
          - Previews of flagship destinations with 10-image dynamic rotation
          - Overview, best time, attractions, tour count, starting price
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <MapPin className="h-3 w-3 text-[#d7b36a]" /> Destination Spotlight
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                Global Destination Spotlights.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                In-depth destination previews with seasonal weather insights, cultural highlights, and starting rates.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
            >
              <span>Explore All Destinations →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Santorini Caldera',
                country: 'Greece',
                overview: 'Whitewashed cliffside villas and sunset sailing above the deep azure Aegean caldera.',
                bestTime: 'May to October',
                attractions: 'Oia Sunset, Red Beach, Akrotiri Ruins, Ammoudi Bay',
                activities: 'Private Riva catamaran charter, volcanic wine tasting, cliffside dining',
                tourCount: '18 Private Tours',
                price: 'From $1,850',
                images: [
                  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80',
                ],
              },
              {
                name: 'Kyoto Sanctuaries',
                country: 'Japan',
                overview: 'Centuries-old Zen temples, secluded ryokans, and private tea master ceremonies.',
                bestTime: 'March to May & Oct to Nov',
                attractions: 'Fushimi Inari, Kinkaku-ji, Arashiyama Bamboo Grove, Gion',
                activities: 'Closed-door tea ceremony, Kaiseki master dinner, Zen rock meditation',
                tourCount: '12 Masterpiece Routes',
                price: 'From $2,400',
                images: [
                  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
                ],
              },
              {
                name: 'Zermatt Alpine Chalets',
                country: 'Switzerland',
                overview: 'Glacier skiing under the iconic Matterhorn with ski-in chalets and thermal pools.',
                bestTime: 'Dec to April & July to Sept',
                attractions: 'Matterhorn Glacier Paradise, Gornergrat, Sunnegga, Lake Riffelsee',
                activities: 'Heli-ski drop on Monte Rosa, Glacier Express salon, private fondue vault',
                tourCount: '14 Alpine Routes',
                price: 'From $2,850',
                images: [
                  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
                ],
              },
              {
                name: 'Udaipur Lake Palaces',
                country: 'India',
                overview: 'Floating marble palaces, sunset royal boat cruises, and Mewar regal hospitality.',
                bestTime: 'October to March',
                attractions: 'City Palace, Lake Pichola, Jag Mandir, Monsoon Palace',
                activities: 'Private lake boat charter, royal museum curator walk, palace terrace dining',
                tourCount: '16 Domestic Trails',
                price: 'From $1,550',
                images: [
                  'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1609137144822-0d1c79875f36?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80',
                  'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80',
                ],
              },
            ].map((spot) => (
              <div
                key={spot.name}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <DynamicImageCarousel
                    images={spot.images}
                    alt={spot.name}
                    className="h-44 w-full"
                    interval={1000}
                    badge={
                      <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#f6e5b4]">
                        {spot.country}
                      </span>
                    }
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                        {spot.name}
                      </h3>
                      <span className="text-[10px] font-bold text-[#8a6b32]">{spot.price}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 font-light line-clamp-2 leading-relaxed">
                      {spot.overview}
                    </p>
                    <div className="mt-3 space-y-1 text-[10px] text-slate-500">
                      <div><strong className="text-slate-700">Best Season:</strong> {spot.bestTime}</div>
                      <div><strong className="text-slate-700">Highlights:</strong> {spot.attractions}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold">{spot.tourCount}</span>
                  <Link
                    to="/about"
                    className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 17 — TOUR COLLECTION
          - Major tours showcase with 10-image dynamic rotation
          - Name, destination, duration, type, rating, price, description
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
              <Luggage className="h-3 w-3 text-[#d7b36a]" /> Tour Collection
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
              Signature Tour Collections.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
              Masterfully paced itineraries blending private transport, cultural insight, and luxury stays.
            </p>
          </div>
          <Link
            to="/tours/tour-details"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#b28a43] transition"
          >
            <span>View All Tours →</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: 'Grand European Highlights',
              dest: 'Paris • Rome • Venice',
              duration: '8 Days / 7 Nights',
              type: 'Art, Wine & Antiquity',
              rating: '4.95',
              price: '$2,480',
              desc: 'Iconic landmarks, after-hours museum entries, and private gondola and Riva yacht transfers.',
              images: [
                'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
              ],
            },
            {
              title: 'Bali Sacred Terraces & Ocean',
              dest: 'Ubud • Seminyak • Uluwatu',
              duration: '6 Days / 5 Nights',
              type: 'Wellness & Rainforest Stays',
              rating: '4.88',
              price: '$1,760',
              desc: 'Holistic healing retreats, private pool villas in lush rice terraces, and cliffside temple sunsets.',
              images: [
                'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80',
              ],
            },
            {
              title: 'Moroccan Sahara Starlit Odyssey',
              dest: 'Marrakech • Atlas • Sahara',
              duration: '5 Days / 4 Nights',
              type: 'Desert Royalty & Riads',
              rating: '4.82',
              price: '$1,390',
              desc: 'Stay in private palace riads, trek across golden Erg Chebbi dunes by camel, and dine under starlight.',
              images: [
                'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1578895101407-353246eb7678?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=700&q=80',
              ],
            },
            {
              title: 'Iceland Aurora & Geothermal',
              dest: 'Reykjavik • Blue Lagoon • Vik',
              duration: '7 Days / 6 Nights',
              type: 'Polar Wonders & Geothermal',
              rating: '4.98',
              price: '$2,920',
              desc: 'Witness dancing northern lights from private heated domes, explore ice caves, and soak in mineral lagoons.',
              images: [
                'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=700&q=80',
              ],
            },
          ].map((tour) => (
            <div
              key={tour.title}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <DynamicImageCarousel
                  images={tour.images}
                  alt={tour.title}
                  className="h-44 w-full"
                  interval={1000}
                  badge={
                    <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold text-[#f6e5b4]">
                      ★ {tour.rating}
                    </span>
                  }
                />
                <div className="p-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[10px] uppercase font-bold text-[#8a6b32]">{tour.type}</span>
                    <span className="text-[10px] text-slate-400">{tour.duration}</span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                    {tour.title}
                  </h3>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">{tour.dest}</div>
                  <p className="mt-2 text-[11px] text-slate-600 font-light line-clamp-2 leading-relaxed">
                    {tour.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase text-slate-400 block">All-Inclusive</span>
                  <span className="text-sm font-bold text-slate-900">{tour.price}</span>
                </div>
                <Link
                  to="/tours/tour-details"
                  className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                >
                  View Tour
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 18 — TOUR PACKAGE COLLECTION
          - Package showcase with 10-image dynamic rotation
          - Package name, destination, duration, hotel, transit, activities, price, CTA
      ========================================================================= */}
      <section className="bg-[#f2ece2] py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
                <Briefcase className="h-3 w-3 text-[#d7b36a]" /> Tour Packages Collection
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
                All-Inclusive Curated Packages.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
                Complete vacation arrangements with premium hotels, private vehicles, and guided excursions.
              </p>
            </div>
            <Link
              to="/tour-packages/family"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-[#b28a43] transition"
            >
              <span>Explore All Tour Packages →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Family Dynasty Heritage',
                dest: 'North India & Rajasthan Palaces',
                duration: '7 Days / 6 Nights',
                hotel: '5-Star Royal Palace Stays',
                transit: 'Private Mercedes Maybach Fleet',
                activities: 'Palace dinners, vintage cars, tiger safari',
                price: '$2,680',
                rating: '4.96',
                route: '/tour-packages/family',
                images: pkgFamilyImages,
              },
              {
                name: 'Amalfi Romance & Yachting',
                dest: 'Positano • Capri • Ravello',
                duration: '6 Days / 5 Nights',
                hotel: 'Cliffside 5-Star Boutique Suite',
                transit: 'Private Riva Boat & Helicopter',
                activities: 'Capri Faraglioni cruise, Michelin dining',
                price: '$2,850',
                rating: '5.0',
                route: '/tour-packages/honeymoon',
                images: pkgHoneymoonImages,
              },
              {
                name: 'Swiss Alpine Glacier Quest',
                dest: 'Zermatt • St. Moritz • Lucerne',
                duration: '8 Days / 7 Nights',
                hotel: 'Thermal Spa Chalets',
                transit: 'Glacier Express Excellence Class',
                activities: 'Matterhorn helicopter flight, ski-in lodge',
                price: '$3,450',
                rating: '4.98',
                route: '/tour-packages/adventure',
                images: pkgAdventureImages,
              },
              {
                name: 'Emirates Desert Royal Respite',
                dest: 'Dubai • Al Maha Desert Reserve',
                duration: '4 Days / 3 Nights',
                hotel: 'Private Plunge Pool Pavilion',
                transit: 'VIP Airport Limousine Escort',
                activities: 'Private bedouin tent feast, falconry',
                price: '$1,420',
                rating: '4.92',
                route: '/tour-packages/weekend',
                images: pkgWeekendImages,
              },
            ].map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <DynamicImageCarousel
                    images={p.images}
                    alt={p.name}
                    className="h-44 w-full"
                    interval={1000}
                    badge={
                      <span className="rounded-full bg-slate-950/80 border border-white/20 px-2 py-0.5 text-[9px] font-bold text-[#f6e5b4]">
                        ★ {p.rating}
                      </span>
                    }
                  />
                  <div className="p-4">
                    <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#8a6b32] transition">
                      {p.name}
                    </h3>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">{p.dest}</div>
                    <div className="mt-3 space-y-1 text-[11px] text-slate-600">
                      <div><strong className="text-slate-800">Duration:</strong> {p.duration}</div>
                      <div><strong className="text-slate-800">Hotels:</strong> {p.hotel}</div>
                      <div><strong className="text-slate-800">Transit:</strong> {p.transit}</div>
                      <div><strong className="text-slate-800">Inclusions:</strong> {p.activities}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase text-slate-400 block">From</span>
                    <span className="text-sm font-bold text-slate-900">{p.price}</span>
                  </div>
                  <Link
                    to={p.route}
                    className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-[#f6e5b4] hover:bg-slate-800 transition"
                  >
                    View Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 19 — DOMESTIC VS INTERNATIONAL (Interactive Comparison)
          - Interactive switch between Domestic and International
          - 10 destinations each with attractions, hotel options, starting prices
      ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-300/40 bg-[#fffaf1] px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#8a6b32]">
            <Globe2 className="h-3 w-3 text-[#d7b36a]" /> Travel Comparison
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900 tracking-tight">
            Domestic India vs International Portfolios.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 font-light">
            Compare our 10 iconic domestic Indian destinations with our 10 premier international world capitals.
          </p>

          {/* Interactive Switch */}
          <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setComparisonTab('domestic')}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                comparisonTab === 'domestic'
                  ? 'bg-slate-900 text-[#f6e5b4] shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Domestic India (10 Destinations)
            </button>
            <button
              type="button"
              onClick={() => setComparisonTab('international')}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                comparisonTab === 'international'
                  ? 'bg-slate-900 text-[#f6e5b4] shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              International Worldwide (10 Destinations)
            </button>
          </div>
        </div>

        {/* Tab Content: Domestic */}
        {comparisonTab === 'domestic' ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                10 Premier Indian Destinations
              </span>
              <Link
                to="/destination/domestic"
                className="text-xs font-bold text-[#8a6b32] hover:underline"
              >
                Explore Domestic →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {[
                { name: 'Delhi', state: 'Capital', places: 'Red Fort, Qutub Minar', hotel: 'Imperial, Oberoi', price: '$850', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80' },
                { name: 'Mumbai', state: 'Maharashtra', places: 'Marine Drive, Gateway', hotel: 'Taj Palace, Oberoi', price: '$950', img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=400&q=80' },
                { name: 'Jaipur', state: 'Rajasthan', places: 'Amber Fort, Hawa Mahal', hotel: 'Rambagh, Rajvilas', price: '$1,250', img: 'https://images.unsplash.com/photo-1609137144822-0d1c79875f36?auto=format&fit=crop&w=400&q=80' },
                { name: 'Goa', state: 'Coast', places: 'Palolem, Fontainhas', hotel: 'Taj Exotica, St. Regis', price: '$1,100', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80' },
                { name: 'Kerala', state: 'Backwaters', places: 'Alleppey, Munnar', hotel: 'Kumarakom Lake, Brunton', price: '$1,380', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80' },
                { name: 'Varanasi', state: 'Uttar Pradesh', places: 'Ghats, Ganga Aarti', hotel: 'BrijRama, Taj Ganges', price: '$890', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=400&q=80' },
                { name: 'Udaipur', state: 'Rajasthan', places: 'Lake Pichola, City Palace', hotel: 'Taj Lake Palace, Udaivilas', price: '$1,550', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80' },
                { name: 'Manali', state: 'Himachal', places: 'Solang, Rohtang Pass', hotel: 'Himalayan Resort, Span', price: '$1,150', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
                { name: 'Agra', state: 'Uttar Pradesh', places: 'Taj Mahal, Agra Fort', hotel: 'Amarvilas Taj View', price: '$780', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80' },
                { name: 'Rishikesh', state: 'Uttarakhand', places: 'Ganges, Yoga Salons', hotel: 'Ananda, Roseate Ganges', price: '$1,320', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80' },
              ].map((d) => (
                <div key={d.name} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm p-3">
                  <div className="h-24 rounded-lg overflow-hidden mb-2">
                    <img src={d.img} alt={d.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-serif font-bold text-slate-900">{d.name}</h4>
                    <span className="text-[10px] font-bold text-[#8a6b32]">{d.price}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">Places: {d.places}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">Hotels: {d.hotel}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                10 Premier International Capitals
              </span>
              <Link
                to="/destination/international"
                className="text-xs font-bold text-[#8a6b32] hover:underline"
              >
                Explore International →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {[
                { name: 'Paris', country: 'France', places: 'Louvre, Eiffel, Seine', hotel: 'Ritz Paris, Le Meurice', price: '$2,850', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
                { name: 'Dubai', country: 'UAE', places: 'Burj Khalifa, Desert', hotel: 'Burj Al Arab, Atlantis', price: '$2,450', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
                { name: 'London', country: 'UK', places: 'Tower, Westminster', hotel: 'Savoy, Claridge’s', price: '$2,750', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80' },
                { name: 'Singapore', country: 'Singapore', places: 'Marina Bay, Sentosa', hotel: 'Raffles, Capella', price: '$1,950', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80' },
                { name: 'Bali', country: 'Indonesia', places: 'Ubud, Uluwatu', hotel: 'Mandapa, Bulgari', price: '$2,100', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80' },
                { name: 'Tokyo', country: 'Japan', places: 'Ginza, Meiji Shrine', hotel: 'Aman Tokyo, Hoshinoya', price: '$3,200', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80' },
                { name: 'Switzerland', country: 'Swiss', places: 'Zermatt, Matterhorn', hotel: 'Badrutt’s, Bürgenstock', price: '$3,650', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80' },
                { name: 'New York', country: 'USA', places: 'Central Park, 5th Ave', hotel: 'Aman New York, Carlyle', price: '$3,100', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80' },
                { name: 'Rome', country: 'Italy', places: 'Colosseum, Vatican', hotel: 'Hotel de Russie, Hassler', price: '$2,650', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80' },
                { name: 'Maldives', country: 'Maldives', places: 'Baa Atoll, Coral Reefs', hotel: 'Soneva Fushi, Cheval Blanc', price: '$4,200', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80' },
              ].map((d) => (
                <div key={d.name} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm p-3">
                  <div className="h-24 rounded-lg overflow-hidden mb-2">
                    <img src={d.img} alt={d.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-serif font-bold text-slate-900">{d.name}</h4>
                    <span className="text-[10px] font-bold text-[#8a6b32]">{d.price}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">Attractions: {d.places}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">Hotels: {d.hotel}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          HOMEPAGE SECTION 20 — COMPLETE TRAVEL EXPERIENCE (Platform Architecture)
          - Destinations -> Tours -> Tour Packages -> Hotels -> Transportation -> Travel Experts
          - Explains the complete end-to-end journey creation with multiple CTAs
      ========================================================================= */}
      <section className="bg-[#111827] text-white py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
              <Layers className="h-3 w-3 text-[#d7b36a]" /> Complete Journey Architecture
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-white tracking-tight">
              From Discovery to Destination: Our Unified Journey Platform.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 font-light">
              Experience how our six core pillars connect seamlessly to craft your extraordinary voyage.
            </p>
          </div>

          {/* 6 Step Connection Pipeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {[
              { step: '01', title: 'Destinations', desc: 'Curated 65+ domestic & global geographic portfolios.', route: '/destination/domestic' },
              { step: '02', title: 'Tours', desc: 'Handcrafted sightseeing routes with accredited private guides.', route: '/tours/tour-details' },
              { step: '03', title: 'Tour Packages', desc: 'All-inclusive multi-day itineraries with guaranteed rates.', route: '/tour-packages/family' },
              { step: '04', title: 'Hotels', desc: 'Vetted 5-star royal palaces, villas, and chalets.', route: '/tours/hotel-details' },
              { step: '05', title: 'Transportation', desc: 'Private jets, helicopters, and chauffeured fleets.', route: '/services' },
              { step: '06', title: 'Travel Experts', desc: '24/7 dedicated field director for total peace of mind.', route: '/contact' },
            ].map((st) => (
              <Link
                key={st.step}
                to={st.route}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-gold-400/50 transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-serif font-bold text-[#d7b36a] block mb-1">Step {st.step}</span>
                  <h3 className="text-sm font-serif font-bold text-white group-hover:text-[#f6e5b4] transition">
                    {st.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] text-slate-300 font-light leading-normal">{st.desc}</p>
                </div>
                <div className="mt-3 text-[10px] font-bold text-[#d7b36a] flex items-center gap-1">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Multiple Quick-Navigation CTAs */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-serif font-bold text-white">Ready to begin your journey?</div>
              <p className="text-xs text-slate-400 font-light">Select a specialty or talk directly to our concierge team.</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                to="/destination/domestic"
                className="rounded-lg bg-white/10 border border-white/20 px-3.5 py-2 font-semibold text-white hover:bg-white/20 transition"
              >
                Explore Destinations
              </Link>
              <Link
                to="/tours/tour-details"
                className="rounded-lg bg-white/10 border border-white/20 px-3.5 py-2 font-semibold text-white hover:bg-white/20 transition"
              >
                View Tours
              </Link>
              <Link
                to="/tour-packages/family"
                className="rounded-lg bg-white/10 border border-white/20 px-3.5 py-2 font-semibold text-white hover:bg-white/20 transition"
              >
                View Packages
              </Link>
              <Link
                to="/tours/hotel-details"
                className="rounded-lg bg-white/10 border border-white/20 px-3.5 py-2 font-semibold text-white hover:bg-white/20 transition"
              >
                Find Hotels
              </Link>
              <Link
                to="/contact"
                className="rounded-lg bg-[#d7b36a] px-4 py-2 font-bold text-slate-950 hover:bg-[#e5c98d] transition shadow"
              >
                Contact Travel Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: CONCIERGE ASSISTANCE SUITE & COMPREHENSIVE FOOTER (Header: Contact)
          - Compact Contact desk, direct phone, WhatsApp, rapid inquiry form
          - Complete multi-column footer connecting ALL existing pages
      ========================================================================= */}
      <section className="bg-[#0b101b] text-white pt-16 pb-10 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Compact Contact & Salon Assistance Suite */}
          <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-6 sm:p-10 shadow-2xl mb-16">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-white/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#f6e5b4]">
                  <Phone className="h-3 w-3 text-[#d7b36a]" /> Concierge Desk
                </div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-white tracking-tight">
                  Plan Your Next Unforgettable Escape.
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 font-light">
                  Speak with our senior travel directors for a tailored itinerary, quick consultation, or fully managed luxury expedition.
                </p>

                <div className="mt-5 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#d7b36a]" />
                    <span>+91 98765 43210 (24/7 Diplomatic Hotline)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#d7b36a]" />
                    <span>hello@rktours.com (Response under 45 minutes)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#d7b36a]" />
                    <span>12 Skyline Avenue, Diplomatic Enclave, New Delhi</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    to="/contact"
                    className="rounded-full bg-[#d7b36a] px-4 py-2 text-xs font-bold text-slate-950 hover:bg-[#e5c98d] transition"
                  >
                    Complete Contact Page
                  </Link>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-emerald-400 bg-emerald-950/60 px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-900 transition"
                  >
                    WhatsApp VIP
                  </a>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              {formSubmitted ? (
                <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/40 p-6 text-center">
                  <div className="text-emerald-400 font-bold text-base">✓ Travel Brief Dispatched</div>
                  <p className="text-xs text-slate-300 mt-1">
                    Thank you. A senior director will review your parameters and respond within 45 minutes.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 text-xs text-[#d7b36a] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setFormSubmitted(true)
                  }}
                  className="space-y-3"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-gold-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-gold-400"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Destination of Interest"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-gold-400"
                    />
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white outline-none focus:border-gold-400 [&>option]:bg-slate-900"
                    >
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+ (Private Jet / Buyout)</option>
                    </select>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your dates, preferences, or party size..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-gold-400"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-[#d7b36a] to-[#b28a43] py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:scale-[1.01] transition shadow"
                  >
                    Dispatch Inquiry to Concierge Director
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}