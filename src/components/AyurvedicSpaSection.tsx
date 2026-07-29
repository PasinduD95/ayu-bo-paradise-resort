import React from 'react';
import { SPA_TREATMENTS } from '../data/resortData';
import { SpaTreatment } from '../types';
import { Sparkles, Clock, ShieldCheck, HeartPulse, Stethoscope, Leaf, Calendar, ArrowRight } from 'lucide-react';

interface AyurvedicSpaSectionProps {
  onBookSpa: (treatment: SpaTreatment) => void;
}

export const AyurvedicSpaSection: React.FC<AyurvedicSpaSectionProps> = ({ onBookSpa }) => {
  return (
    <section id="spa" className="py-24 bg-[#1B3B2B] text-white relative overflow-hidden">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <HeartPulse className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>5,000-Year-Old Ceylon Healing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal leading-tight">
            Traditional Sri Lankan Wellness & Holistic Healing
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 font-light leading-relaxed">
            Personalized treatments using natural plants, endemic herbs, and pure oils under the direct supervision of resident Ayurvedic BAMS doctors and master therapists.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Doctor Consultation Spotlight Banner */}
        <div className="mb-16 bg-gradient-to-r from-black/60 via-[#12281D] to-black/60 p-6 sm:p-8 rounded-2xl border border-[#D4AF37]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="p-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex-shrink-0">
              <Stethoscope className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-white font-bold mb-1">
                Resident Ayurvedic Physician Diagnostic Consultation
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl">
                Every spa journey at AYU BO PARADISE begins with a complimentary 15-minute Pulse Diagnosis (Nadi Pariksha) by our resident Ayurvedic doctors to customize your specific herbal oils and treatments according to your Dosha profile.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => onBookSpa(SPA_TREATMENTS[7])}
              className="px-6 py-3 rounded-full gold-gradient text-[#1B3B2B] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              Book Doctor Consultation
            </button>
          </div>
        </div>

        {/* 8 Spa Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPA_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="group bg-[#12281D] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12281D] via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 text-[#D4AF37] text-[10px] uppercase font-semibold tracking-wider border border-[#D4AF37]/30">
                      {treatment.category}
                    </span>
                  </div>

                  {treatment.includesDoctorConsult && (
                    <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#1B3B2B] px-2 py-0.5 rounded-full text-[9px] uppercase font-bold flex items-center gap-1">
                      <Stethoscope className="w-2.5 h-2.5" /> Doctor Prescribed
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {treatment.durationMinutes} mins
                    </span>
                    <span className="font-serif font-bold text-base text-[#D4AF37]">
                      ${treatment.priceUSD} <span className="text-[10px] font-mono text-gray-400">({treatment.priceLKR.toLocaleString()} LKR)</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {treatment.title}
                  </h3>

                  <p className="text-[11px] text-[#C5A059] italic mb-3">
                    {treatment.tagline}
                  </p>

                  <p className="text-gray-300 text-xs font-light line-clamp-3 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Herbs Pill List */}
                  <div className="pt-2 border-t border-white/10 mb-4">
                    <span className="text-[10px] uppercase text-gray-400 font-semibold block mb-1.5 flex items-center gap-1">
                      <Leaf className="w-3 h-3 text-[#D4AF37]" /> Key Botanical Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {treatment.herbsUsed.slice(0, 3).map((herb, i) => (
                        <span key={i} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded border border-white/5">
                          {herb}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookSpa(treatment)}
                  className="w-full py-2.5 rounded-xl border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1B3B2B] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Treatment</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
