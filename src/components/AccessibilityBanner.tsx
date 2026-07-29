import React from 'react';
import { ShieldCheck, HeartPulse, Check, Info, ArrowRight, UserCheck, Accessibility } from 'lucide-react';

interface AccessibilityBannerProps {
  onOpenAudit: () => void;
  onBookAccessibleSuite: () => void;
}

export const AccessibilityBanner: React.FC<AccessibilityBannerProps> = ({
  onOpenAudit,
  onBookAccessibleSuite
}) => {
  return (
    <section id="accessibility" className="py-20 bg-gradient-to-r from-[#1B3B2B] via-[#12281D] to-[#1B3B2B] text-white relative overflow-hidden border-y-2 border-[#D4AF37]/50 shadow-2xl">
      
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
              <Accessibility className="w-4 h-4 text-[#D4AF37]" />
              <span>Inclusive Hospitality & Universal Access</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif text-white font-normal leading-tight">
              5 Specially Designed Accessible Suites with Optional High-Skilled Caregiver Services for Absolute Peace of Mind.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
              At AYU BO PARADISE, true luxury knows no physical barriers. Our ground-level Accessible Suites feature zero-threshold floor transitions, wide door openings, roll-in rainfall showers, reinforced grab rails, and optional 24/7 certified nursing caregiver support.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#D4AF37] font-medium">
              <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> Barrier-Free Zero-Threshold Entry
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> Roll-In Shower & Grab Rails
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
                <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> High-Skilled Caregiver Service
              </span>
            </div>
          </div>

          {/* Right Column Action Buttons */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
            <button
              onClick={onBookAccessibleSuite}
              className="w-full py-4 px-6 rounded-full gold-gradient text-[#1B3B2B] font-bold text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#1B3B2B]" />
              <span>Book Accessible Suite</span>
            </button>

            <button
              onClick={onOpenAudit}
              className="w-full py-4 px-6 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Info className="w-4 h-4" />
              <span>Full Accessibility Audit</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
