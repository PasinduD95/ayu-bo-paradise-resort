import React from 'react';
import { X, ShieldCheck, HeartPulse, CheckCircle2, UserCheck, Accessibility, PhoneCall, Sparkles } from 'lucide-react';

interface AccessibilityAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAccessibleSuite: () => void;
}

export const AccessibilityAuditModal: React.FC<AccessibilityAuditModalProps> = ({
  isOpen,
  onClose,
  onBookAccessibleSuite
}) => {
  if (!isOpen) return null;

  const specifications = [
    {
      title: 'Ground-Level & Ramp Pathways',
      desc: '100% barrier-free smooth pathways connecting lobby, dining pavilions, Ayurvedic spa, infinity pool ramp, and ocean beachfront deck.'
    },
    {
      title: 'Zero-Threshold Suite Entry',
      desc: 'Flush threshold transitions between bedroom, private patio deck, and bathroom. Clear 36-inch (91cm) door openings throughout.'
    },
    {
      title: 'Marble Bathroom Ergonomics',
      desc: 'Roll-in zero-barrier rainfall shower with foldable teak bench, dual stainless steel grab rails (tested to 250kg), and lowered marble vanity counter.'
    },
    {
      title: 'High-Skilled Caregiver Service (24/7)',
      desc: 'Professional certified nursing assistants and mobility therapists available on request for medication support, daily living, or therapy assistance.'
    },
    {
      title: 'Sensory & Emergency Enhancements',
      desc: 'Tactile floor orientation lines, Braille room door numbers, visual emergency strobe alarms, and bedside emergency call buttons linked directly to front desk & medical staff.'
    },
    {
      title: 'Inclusive Dining & Spa Services',
      desc: 'Adjustable height tables at dining pavilions, wide-aisle seating, and customized spa therapy benches for easy transfer.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full border border-[#D4AF37] shadow-2xl overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="bg-[#1B3B2B] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
            <Accessibility className="w-4 h-4" />
            <span>Inclusive Care Guarantee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
            Full Accessibility & Caregiver Audit
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light mt-2 max-w-2xl">
            AYU BO PARADISE is committed to offering world-class luxury without compromise for guests with physical, sensory, or mobility needs.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Caregiver Spotlight Card */}
          <div className="p-5 rounded-2xl bg-[#12281D] text-white border border-[#D4AF37] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-full bg-[#D4AF37] text-[#1B3B2B]">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#D4AF37] font-bold">
                  24/7 Dedicated Caregiver Service
                </h3>
                <p className="text-xs text-gray-300 font-light">
                  Request a certified nurse or personal assistant when booking your suite or contacting our concierge.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1B3B2B] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Ask Concierge</span>
            </a>
          </div>

          {/* Specifications Grid */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-[#1B3B2B] font-bold">
              Engineering & Care Standards
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm space-y-1">
                  <div className="flex items-center gap-2 text-[#1B3B2B] font-serif font-bold text-base">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-light leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-light">
            Need custom accessibility arrangements? Email us directly at <strong className="text-[#1B3B2B]">care@ayuboparadise.lk</strong>
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto py-3 px-5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookAccessibleSuite();
              }}
              className="w-1/2 sm:w-auto py-3 px-6 rounded-xl gold-gradient text-[#1B3B2B] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#1B3B2B]" />
              <span>Book Accessible Suite</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
