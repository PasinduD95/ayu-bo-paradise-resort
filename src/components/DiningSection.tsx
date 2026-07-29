import React from 'react';
import { DINING_HIGHLIGHTS } from '../data/resortData';
import { DiningHighlight } from '../types';
import { Utensils, Fish, Globe, Leaf, Smile, Flame, Award, ChevronRight, Calendar, Sparkles, Heart } from 'lucide-react';

interface DiningSectionProps {
  onReserveTable: (diningOption?: string) => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onReserveTable }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      case 'Fish': return <Fish className="w-5 h-5 text-[#D4AF37]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#D4AF37]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#D4AF37]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-[#D4AF37]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="dining" className="py-24 bg-[#FAF8F5] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-3 block">
            Gastronomy & Coastal Elegance
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1B3B2B] font-normal leading-tight">
            A Feast for the Senses
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-4 font-light leading-relaxed">
            From ocean-to-table Mirissa lobster and organic claypot curries to candlelight dinners right on the golden sand beach — every bite is a celebration of tropical flavor.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {DINING_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.category}
                  </div>

                  {/* Icon floating badge */}
                  <div className="absolute bottom-4 right-4 p-3 rounded-full bg-[#1B3B2B] shadow-lg border border-[#D4AF37]/40">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#1B3B2B] font-bold mb-2 group-hover:text-[#C5A059] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm font-light mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Chef Note for Children's Meal Plan if present */}
                  {item.chefNote && (
                    <div className="p-3 bg-[#FAF8F5] border-l-2 border-[#D4AF37] rounded-r-lg mb-4 text-xs text-[#1B3B2B] font-medium italic">
                      💡 {item.chefNote}
                    </div>
                  )}

                  {/* Specialties List */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold block mb-2">
                      Featured Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.specialties.map((spec, i) => (
                        <span key={i} className="text-xs bg-[#FAF8F5] text-[#1B3B2B] px-2.5 py-1 rounded-full font-medium border border-gray-200">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Action CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onReserveTable(item.title)}
                  className="w-full py-2.5 rounded-xl border border-[#1B3B2B] text-[#1B3B2B] hover:bg-[#1B3B2B] hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Global Dining Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#1B3B2B] via-[#12281D] to-[#1B3B2B] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#D4AF37]/40 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <Sparkles className="w-10 h-10 text-[#D4AF37] mx-auto animate-pulse" />
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Indulge in an Unforgettable Culinary Memory
            </h3>
            <p className="text-gray-300 text-sm sm:text-base font-light">
              Whether celebrating an anniversary under beachside lanterns or enjoying a personalized Ayurvedic dietary tasting menu, our executive culinary team is dedicated to your absolute delight.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onReserveTable()}
                className="px-8 py-4 rounded-full gold-gradient text-[#1B3B2B] font-bold text-sm tracking-widest uppercase shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#1B3B2B]" />
                <span>Reserve a Culinary Table</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
