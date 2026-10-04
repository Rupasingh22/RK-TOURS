import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Star,
  ArrowRight,
  ShieldCheck,
  Building,
  Key,
  Heart,
  Crown,
  Plane,
  Utensils,
  Navigation,
  Sun,
  Award,
  Globe2,
  Users,
} from 'lucide-react'

import DestinationGallery from './DestinationGallery'
import DestinationCard from './DestinationCard'
import HotelCard from './HotelCard'
import TravelInformation from './TravelInformation'

export default function CountrySection({
  country,
  index = 0,
  onExploreDestination = () => {},
  onViewHotel = () => {},
}) {
  const isEven = index % 2 === 0
  const layout = country.layoutVariant || (isEven ? 'split-hero' : 'editorial-asymmetric')

  // Icon selector for experiences
  const getExperienceIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'romance':
        return Heart
      case 'luxury':
      case 'crown':
        return Crown
      case 'food':
        return Utensils
      case 'adventure':
        return Compass
      case 'wildlife':
        return Sun
      case 'history':
      case 'heritage':
        return Building
      default:
        return Sparkles
    }
  }

  return (
    <article
      id={`country-${country.id}`}
      data-country-id={country.id}
      className="scroll-mt-24 pt-10 pb-20 border-b border-slate-200/90"
    >
      {/* ── Top Header Row with Index, Name, Tagline & Country CTA ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-xs font-mono font-bold text-[#aa732b] bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
              Country #{String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
              Region: {country.region.toUpperCase()}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d7b36a]" />
            <span className="text-xs text-slate-500 font-medium">{country.idealDuration}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-slate-900 leading-tight">
            {country.name}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-[#aa732b] mt-1">
            "{country.tagline}"
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-slate-950 hover:bg-[#aa732b] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-slate-950/15"
          >
            <Plane className="h-4 w-4" />
            <span>Book {country.name} Journey</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── SECTION A: LAYOUT VARIATIONS FOR HERO/EDITORIAL INTRODUCTION ── */}
      {layout === 'cinematic-full' ? (
        /* LAYOUT 3: Full Width Cinematic Gallery with Overlay Floating Dossier */
        <div className="mb-12 space-y-6">
          <DestinationGallery
            images={country.galleryImages}
            alt={country.name}
            className="h-[460px] sm:h-[540px] w-full"
            interval={1000}
            badge={
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
                <Crown className="h-3.5 w-3.5 text-[#d7b36a]" />
                <span className="font-semibold">{country.personality}</span>
              </div>
            }
          />

          <div className="grid lg:grid-cols-12 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="lg:col-span-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#aa732b] mb-2">
                Destination Narrative
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-light mb-4">
                {country.description}
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                <Users className="h-5 w-5 text-[#aa732b] flex-none mt-0.5" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7a5b2d] block">
                    Ideal Voyager Profile:
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700">{country.idealFor}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-slate-950 text-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d7b36a] block mb-1">
                  Voyager Snapshot
                </span>
                <div className="space-y-2 text-xs text-white/80">
                  <p>
                    <strong className="text-white">Best Season:</strong> {country.bestTime}
                  </p>
                  <p>
                    <strong className="text-white">Est. Daily Budget:</strong> {country.budget}
                  </p>
                  <p>
                    <strong className="text-white">Currency:</strong> {country.currency}
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 text-xs font-bold transition-colors"
              >
                Inquire For Custom Itinerary
              </Link>
            </div>
          </div>
        </div>
      ) : layout === 'editorial-asymmetric' ? (
        /* LAYOUT 2: Content Left, Large Gallery Right */
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Editorial Content (5 cols) */}
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#aa732b]">
                  Curator's Perspective
                </span>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-light mt-2">
                  {country.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Ideal Traveler Match:
                </span>
                <p className="text-xs text-slate-700 leading-snug">{country.idealFor}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a5b2d] block">
                    Ideal Duration
                  </span>
                  <span className="text-xs font-semibold text-slate-800">{country.idealDuration}</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a5b2d] block">
                    Daily Budget
                  </span>
                  <span className="text-xs font-semibold text-slate-800">{country.budget}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Carousel (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <DestinationGallery
              images={country.galleryImages}
              alt={country.name}
              className="h-[420px] sm:h-[480px] w-full"
              interval={1000}
              badge={
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
                  <Star className="h-3.5 w-3.5 fill-[#d7b36a] text-[#d7b36a]" />
                  <span className="font-semibold">Top Rated Experience</span>
                </div>
              }
            />
          </div>
        </div>
      ) : (
        /* LAYOUT 1: Split-Hero (Gallery Left, Content Right) */
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Gallery Carousel (7 cols) */}
          <div className="lg:col-span-7">
            <DestinationGallery
              images={country.galleryImages}
              alt={country.name}
              className="h-[420px] sm:h-[480px] w-full"
              interval={1000}
              badge={
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-white">
                  <Sparkles className="h-3.5 w-3.5 text-[#d7b36a]" />
                  <span className="font-semibold">{country.personality}</span>
                </div>
              }
            />
          </div>

          {/* Content (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#aa732b]">
                  Destination Profile
                </span>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-light mt-2">
                  {country.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Best Suited For:
                </span>
                <p className="text-xs text-slate-700 leading-snug">{country.idealFor}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a5b2d] block">
                    Best Season
                  </span>
                  <span className="text-xs font-semibold text-slate-800">{country.bestTime}</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a5b2d] block">
                    Visa Type
                  </span>
                  <span className="text-xs font-semibold text-slate-800 truncate block">
                    {country.visa.split('(')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── SECTION B: 8–12 FAMOUS TOURIST PLACES ── */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#aa732b]">
              <MapPin className="h-3.5 w-3.5" />
              <span>Must-Visit Landmarks</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Top Places in {country.name} ({country.destinations.length} Destinations)
            </h3>
          </div>
          <span className="text-xs text-slate-500 italic">
            Click on any card to explore full highlights
          </span>
        </div>

        {/* Responsive Grid for 8-12 Tourist Places */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {country.destinations.map((dest) => (
            <DestinationCard
              key={dest.name}
              destination={dest}
              countryName={country.name}
              onExplore={onExploreDestination}
            />
          ))}
        </div>
      </div>

      {/* ── SECTION C: SIGNATURE EXPERIENCES & CULINARY CULTURE ── */}
      <div className="grid lg:grid-cols-12 gap-8 mb-14">
        {/* Signature Experiences (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#aa732b] mb-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Curated Activities</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
              Popular Experiences in {country.name}
            </h3>

            <div className="space-y-3.5">
              {country.experiences?.map((exp) => {
                const Icon = getExperienceIcon(exp.type)
                return (
                  <div
                    key={exp.name}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-amber-50/70 border border-slate-100 hover:border-amber-200 transition-all duration-200 flex items-start gap-3.5 group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center flex-none group-hover:border-[#d7b36a] transition-colors">
                      <Icon className="h-5 w-5 text-[#aa732b]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h4 className="text-sm font-semibold text-slate-900 truncate">
                          {exp.name}
                        </h4>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7a5b2d] bg-amber-100/70 px-2 py-0.5 rounded-full flex-none">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Food & Culture Insight (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d7b36a] mb-2">
              <Utensils className="h-3.5 w-3.5" />
              <span>Gastronomy & Heritage</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              Flavors & Cultural Spirit
            </h3>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d7b36a] block mb-1">
                  Signature Dishes:
                </span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {country.cuisine}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d7b36a] block mb-1">
                  Getting Around & Transit:
                </span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {country.transportation}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d7b36a] block mb-1">
                  Language & Communication:
                </span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {country.language}
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#d7b36a] hover:bg-[#c89336] text-slate-950 font-semibold py-3 px-6 rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-[#d7b36a]/20"
          >
            <span>Request Tailored {country.name} Food & Culture Tour</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── SECTION D: HOTELS (Budget, Premium, Luxury) ── */}
      <div className="mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#aa732b]">
              <Building className="h-3.5 w-3.5" />
              <span>Accommodation Collections</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Curated Hotels in {country.name} (Budget, Premium & Luxury)
            </h3>
          </div>
          <span className="text-xs text-slate-500 italic">
            Estimated starting rates per room / night
          </span>
        </div>

        {/* 3 Tier Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {country.hotels?.map((hotel) => (
            <HotelCard
              key={hotel.name}
              hotel={hotel}
              countryName={country.name}
              onViewHotel={onViewHotel}
            />
          ))}
        </div>
      </div>

      {/* ── SECTION E: 12-FACTOR TRAVEL INFORMATION PANEL ── */}
      <TravelInformation country={country} />
    </article>
  )
}
