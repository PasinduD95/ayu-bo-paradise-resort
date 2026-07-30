import React, { useState } from 'react';
import { Calendar, Users, Home, Search, ShieldCheck, Sparkles, ChevronRight, Waves } from 'lucide-react';
import { RESORT_HERO_IMAGE } from '../data/resortData';
import { RoomCategory } from '../types';

interface HeroProps {
  onCheckAvailability: (searchParams: {
    checkIn: string;
    checkOut: string;
    guests: number;
    category: RoomCategory;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability }) => {
  // Default dates: tomorrow to 5 days later
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fiveDaysLater = new Date(tomorrow);
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 5);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(fiveDaysLater));
  const [guests, setGuests] = useState(2);
  const [category, setCategory] = useState<RoomCategory>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({ checkIn, checkOut, guests, category });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#1B3B2B] pt-20">
      
      {/* Background Hero Image with Deep Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESORT_HERO_IMAGE}
          alt="AYU BO PARADISE Oceanfront Sanctuary"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow transition-transform duration-10000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B] via-[#1B3B2B]/60 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 flex-1 flex flex-col justify-center text-center">
        
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/50 text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold mx-auto mb-6 shadow-xl animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Luxury • Wellness • Hospitality</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-normal tracking-tight leading-[1.08] mb-6 drop-shadow-2xl">
          Where Luxury Meets <br />
          <span className="italic font-light gold-text-gradient">Ancient Healing</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 font-light tracking-wide leading-relaxed mb-10 drop-shadow-md">
          An Oceanfront Sanctuary of Tranquility, Wellness, and Authentic Culinary Art on the Pristine Southern Coast of Sri Lanka.
        </p>

        {/* Hero Quick Highlights Badges */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-6 text-xs text-white/90 font-medium tracking-wider mb-10">
          <span className="flex items-center gap-1.5 bg-black/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <Waves className="w-3.5 h-3.5 text-[#D4AF37]" /> Private Oceanfront Beach
          </span>
          <span className="flex items-center gap-1.5 bg-black/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> 100% Doctor-Guided Ayurvedic Spa
          </span>
          <span className="flex items-center gap-1.5 bg-black/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Inclusive Caregiver Accessible Suites
          </span>
        </div>

      </div>

      {/* Floating Quick Booking Bar */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10">
        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#D4AF37]/30 text-[#2B2B2B] backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            {/* Check-In Input */}
            <div className="flex flex-col text-left min-w-0">
              <label className="text-xs uppercase tracking-widest text-[#1B3B2B] font-bold mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Check-In</span>
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  value={checkIn}
                  min={formatDate(today)}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full min-w-0 max-w-full appearance-none px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Check-Out Input */}
            <div className="flex flex-col text-left min-w-0">
              <label className="text-xs uppercase tracking-widest text-[#1B3B2B] font-bold mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Check-Out</span>
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full min-w-0 max-w-full appearance-none px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Guests Input */}
            <div className="flex flex-col text-left">
              <label className="text-xs uppercase tracking-widest text-[#1B3B2B] font-bold mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Guests</span>
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
              >
                <option value={1}>1 Guest (Solo Retreat)</option>
                <option value={2}>2 Guests (Couple / Friends)</option>
                <option value={3}>3 Guests (Family / Caregiver)</option>
                <option value={4}>4+ Guests (Group Sanctuary)</option>
              </select>
            </div>

            {/* Room Category Input */}
            <div className="flex flex-col text-left">
              <label className="text-xs uppercase tracking-widest text-[#1B3B2B] font-bold mb-1.5 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sanctuary Type</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as RoomCategory)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-sm font-medium focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all"
              >
                <option value="all">All Bespoke Rooms (30)</option>
                <option value="sea-view">Sea-View Rooms (15)</option>
                <option value="garden-view">Garden-View Rooms (10)</option>
                <option value="accessible">Accessible Suites (5)</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl gold-gradient text-[#1B3B2B] font-semibold text-sm tracking-wider uppercase shadow-lg hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Search className="w-4 h-4 text-[#1B3B2B]" />
                <span>Check Availability</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};
