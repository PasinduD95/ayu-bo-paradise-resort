import React, { useState } from 'react';
import { X, Utensils, Calendar, Clock, Users, CheckCircle2, Sparkles } from 'lucide-react';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOption?: string;
  onSuccessToast: (msg: string) => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
  initialOption,
  onSuccessToast
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const [diningOption, setDiningOption] = useState<string>(
    initialOption || 'Authentic Sri Lankan Heritage Culinary Art'
  );
  const [date, setDate] = useState<string>(today);
  const [time, setTime] = useState<string>('19:30');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [tableRef, setTableRef] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'TBL-' + Math.floor(10000 + Math.random() * 90000);
    setTableRef(ref);
    setIsConfirmed(true);
    onSuccessToast(`Table reserved! Ref: ${ref} for ${diningOption}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full border border-[#D4AF37] shadow-2xl overflow-hidden relative my-8 text-[#2B2B2B]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-[#1B3B2B] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner */}
        <div className="bg-[#1B3B2B] text-white p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>Gastronomy Reservation</span>
          </div>

          <h2 className="font-serif text-3xl font-bold">
            {isConfirmed ? 'Culinary Table Reserved' : 'Reserve a Culinary Table'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
            {isConfirmed
              ? 'Your dining experience is confirmed with Executive Chef Bandara.'
              : 'Experience oceanfront fine dining, private beach candlelight, or Chef’s Table.'}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {!isConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                  Dining Experience
                </label>
                <select
                  value={diningOption}
                  onChange={(e) => setDiningOption(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                >
                  <option value="Authentic Sri Lankan Heritage Culinary Art">Authentic Sri Lankan Heritage Culinary Art</option>
                  <option value="Ocean-to-Table Fresh Seafood Specialties">Ocean-to-Table Fresh Seafood Specialties</option>
                  <option value="Private Candlelight Beachside Dinners">Private Candlelight Beachside Dinners</option>
                  <option value="Exclusive Chef’s Table Experience">Exclusive Chef’s Table Experience</option>
                  <option value="Ayurvedic Sattvic, Vegetarian & Vegan">Ayurvedic Sattvic, Vegetarian & Vegan</option>
                  <option value="Customized Children’s Gourmet Meal Plans">Customized Children’s Gourmet Meal Plans</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="18:30">06:30 PM (Sunset Dinner)</option>
                    <option value="19:30">07:30 PM (Candlelight Dinner)</option>
                    <option value="20:30">08:30 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={6}>6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Guest Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    WhatsApp or Email
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Info"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                  Dietary Notes or Special Occasion
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Seafood allergy, anniversary, children menu customization..."
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl gold-gradient text-[#1B3B2B] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Culinary Reservation</span>
              </button>

            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full gold-gradient text-[#1B3B2B] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1B3B2B]">
                Table Reserved!
              </h3>

              <div className="bg-white p-4 rounded-2xl border border-gray-200 text-left text-xs space-y-1">
                <p><strong>Table Code:</strong> <span className="font-mono text-[#1B3B2B] font-bold">{tableRef}</span></p>
                <p><strong>Experience:</strong> {diningOption}</p>
                <p><strong>Date & Time:</strong> {date} at {time}</p>
                <p><strong>Party:</strong> {guests} Guests</p>
              </div>

              <button
                onClick={() => {
                  setIsConfirmed(false);
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-bold text-xs uppercase tracking-widest"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
