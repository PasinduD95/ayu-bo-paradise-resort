import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/resortData';
import { Room, RoomCategory } from '../types';
import { Users, Maximize2, ShieldCheck, Heart, Sparkles, Eye, Check, ChevronRight, BedDouble } from 'lucide-react';

interface AccommodationsSectionProps {
  onSelectRoomForAmenities: (room: Room) => void;
  onBookRoom: (roomId: string) => void;
  selectedFilter: RoomCategory;
  onFilterChange: (cat: RoomCategory) => void;
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({
  onSelectRoomForAmenities,
  onBookRoom,
  selectedFilter,
  onFilterChange
}) => {
  const filteredRooms = selectedFilter === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter(r => r.category === selectedFilter);

  return (
    <section id="accommodations" className="py-24 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-3 block">
            Bespoke Coastal Sanctuaries
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1B3B2B] font-normal leading-tight">
            30 Bespoke Oceanfront & Botanical Guest Rooms
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 font-light">
            Each room is an architectural masterwork engineered for absolute sensory calm, featuring handcrafted Sri Lankan teak furniture, organic textiles, and natural coastal ventilation.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Interactive Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
              selectedFilter === 'all'
                ? 'gold-gradient text-[#1B3B2B] font-bold shadow-lg scale-105'
                : 'bg-[#FAF8F5] text-gray-700 hover:bg-[#1B3B2B] hover:text-white border border-gray-200'
            }`}
          >
            {/* All Rooms (30) */}
            All Rooms
          </button>

          <button
            onClick={() => onFilterChange('sea-view')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
              selectedFilter === 'sea-view'
                ? 'gold-gradient text-[#1B3B2B] font-bold shadow-lg scale-105'
                : 'bg-[#FAF8F5] text-gray-700 hover:bg-[#1B3B2B] hover:text-white border border-gray-200'
            }`}
          >
            {/* Sea-View Rooms (15) */}
            Sea-View Rooms
          </button>

          <button
            onClick={() => onFilterChange('garden-view')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
              selectedFilter === 'garden-view'
                ? 'gold-gradient text-[#1B3B2B] font-bold shadow-lg scale-105'
                : 'bg-[#FAF8F5] text-gray-700 hover:bg-[#1B3B2B] hover:text-white border border-gray-200'
            }`}
          >
            {/* Garden-View Rooms (10) */}
            Garden-View Rooms
          </button>

          <button
            onClick={() => onFilterChange('accessible')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 ${
              selectedFilter === 'accessible'
                ? 'gold-gradient text-[#1B3B2B] font-bold shadow-lg scale-105'
                : 'bg-[#FAF8F5] text-[#1B3B2B] hover:bg-[#1B3B2B] hover:text-white border border-[#D4AF37]/50'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            {/* Accessible Suites (5) */}
            Accessible Suites 
          </button>
        </div>

        {/* Room Cards Layout (CSS Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#D4AF37] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between relative"
            >
              
              {/* Card Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/40 text-[10px] uppercase font-bold tracking-widest">
                    {room.categoryLabel}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-serif font-bold text-white">${room.priceUSD}</span>
                    <span className="text-xs text-gray-300 font-light">/ night</span>
                  </div>
                  <span className="text-[10px] text-[#D4AF37] block font-mono">
                    ≈ LKR {room.priceLKR.toLocaleString()}
                  </span>
                </div>

                {/* Caregiver Special Badge if Accessible */}
                {room.hasCaregiverOption && (
                  <div className="absolute top-4 right-4 bg-[#1B3B2B]/90 backdrop-blur-md text-[#D4AF37] px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border border-[#D4AF37] flex items-center gap-1 shadow-lg animate-pulse">
                    <ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> Caregiver On Request
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#1B3B2B] font-bold mb-2 group-hover:text-[#C5A059] transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm font-light mb-4 line-clamp-2 leading-relaxed">
                    {room.shortDesc}
                  </p>

                  {/* Room Key Specs Bar */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 py-3 border-y border-gray-200 mb-4">
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                      {room.sizeSqM} m²
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C5A059]" />
                      Up to {room.maxGuests} Guests
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <BedDouble className="w-3.5 h-3.5 text-[#C5A059]" />
                      {room.bedType}
                    </span>
                  </div>

                  {/* Highlight Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {room.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    onClick={() => onSelectRoomForAmenities(room)}
                    className="w-full sm:w-1/2 py-2.5 px-3 rounded-xl border border-[#1B3B2B] text-[#1B3B2B] hover:bg-[#1B3B2B] hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Amenities</span>
                  </button>

                  <button
                    onClick={() => onBookRoom(room.id)}
                    className="w-full sm:w-1/2 py-2.5 px-3 rounded-xl gold-gradient text-[#1B3B2B] font-bold text-xs tracking-wider uppercase hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1"
                  >
                    <span>Reserve Suite</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
