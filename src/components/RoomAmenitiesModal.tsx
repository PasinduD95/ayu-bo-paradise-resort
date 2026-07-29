import React from 'react';
import { Room } from '../types';
import { X, Check, Calendar, ShieldCheck, Maximize2, Users, BedDouble, ChevronRight } from 'lucide-react';

interface RoomAmenitiesModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomAmenitiesModal: React.FC<RoomAmenitiesModalProps> = ({
  room,
  onClose,
  onBookRoom
}) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-[#D4AF37]/40 shadow-2xl overflow-hidden relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-[#1B3B2B] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#1B3B2B] font-bold text-[10px] uppercase tracking-widest inline-block mb-2">
              {room.categoryLabel}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              {room.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 font-light mt-1">
              {room.viewType} • {room.sizeSqM} m² • {room.bedType}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Description */}
          <div>
            <h3 className="font-serif text-xl text-[#1B3B2B] font-bold mb-2">
              Sanctuary Experience
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-light">
              {room.longDesc}
            </p>
          </div>

          {/* Caregiver Notice if Accessible */}
          {room.hasCaregiverOption && (
            <div className="p-4 rounded-2xl bg-[#1B3B2B] text-white border border-[#D4AF37] flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base text-[#D4AF37] font-bold">
                  Inclusive Caregiver Service Available
                </h4>
                <p className="text-xs text-gray-200 font-light mt-0.5">
                  This suite includes barrier-free access and optional 24/7 high-skilled nursing caregiver support upon request during booking.
                </p>
              </div>
            </div>
          )}

          {/* Full Amenities Checklist */}
          <div>
            <h3 className="font-serif text-xl text-[#1B3B2B] font-bold mb-3 flex items-center justify-between">
              <span>Comprehensive Room Amenities</span>
              <span className="text-xs text-[#C5A059] font-sans font-normal">
                ({room.amenities.length} Specifications)
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FAF8F5] p-5 rounded-2xl border border-gray-200">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-800">
                  <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#FAF8F5] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-500 block">Nightly Rate</span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-[#1B3B2B]">
                ${room.priceUSD}
              </span>
              <span className="text-xs text-[#C5A059] font-mono">
                (≈ LKR {room.priceLKR.toLocaleString()})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto py-3 px-5 rounded-xl border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-100"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-1/2 sm:w-auto py-3 px-6 rounded-xl gold-gradient text-[#1B3B2B] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#1B3B2B]" />
              <span>Reserve Suite</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
