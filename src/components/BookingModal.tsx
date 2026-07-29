import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/resortData';
import { Room } from '../types';
import { X, Calendar, Users, Home, ShieldCheck, CheckCircle2, Sparkles, CreditCard, DollarSign, HeartPulse, ChevronRight, Download } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
  initialSearchParams?: {
    checkIn: string;
    checkOut: string;
    guests: number;
  };
  onSuccessToast: (msg: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
  initialSearchParams,
  onSuccessToast
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const fiveDaysDate = new Date();
  fiveDaysDate.setDate(fiveDaysDate.getDate() + 6);

  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoomId || ROOMS_DATA[0].id
  );

  const [checkIn, setCheckIn] = useState<string>(
    initialSearchParams?.checkIn || tomorrowDate.toISOString().split('T')[0]
  );
  const [checkOut, setCheckOut] = useState<string>(
    initialSearchParams?.checkOut || fiveDaysDate.toISOString().split('T')[0]
  );
  const [guests, setGuests] = useState<number>(
    initialSearchParams?.guests || 2
  );

  const [needsCaregiver, setNeedsCaregiver] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>('');

  const selectedRoom = ROOMS_DATA.find(r => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const dateIn = new Date(checkIn);
  const dateOut = new Date(checkOut);
  const diffTime = Math.max(1, dateOut.getTime() - dateIn.getTime());
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

  const caregiverRateUSDPerNight = 50;
  const caregiverRateLKRPerNight = 15000;

  const totalRoomUSD = selectedRoom.priceUSD * nights;
  const totalCaregiverUSD = needsCaregiver ? caregiverRateUSDPerNight * nights : 0;
  const grandTotalUSD = totalRoomUSD + totalCaregiverUSD;

  const totalRoomLKR = selectedRoom.priceLKR * nights;
  const totalCaregiverLKR = needsCaregiver ? caregiverRateLKRPerNight * nights : 0;
  const grandTotalLKR = totalRoomLKR + totalCaregiverLKR;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'AYU-' + Math.floor(100000 + Math.random() * 900000);
    setBookingReference(randomRef);
    setIsConfirmed(true);
    onSuccessToast(`Reservation confirmed! Reference Code: ${randomRef}`);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full border border-[#D4AF37] shadow-2xl overflow-hidden relative my-8 text-[#2B2B2B]">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D4AF37] hover:text-[#1B3B2B] transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner */}
        <div className="bg-[#1B3B2B] text-white p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Oceanfront Reservation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
            {isConfirmed ? 'Reservation Confirmed' : 'Book Your Stay at AYU BO PARADISE'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
            {isConfirmed
              ? 'Thank you for choosing AYU BO PARADISE. A confirmation email has been sent to your address.'
              : 'Secure your oceanfront sanctuary with no upfront deposit. Best rate guaranteed.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {!isConfirmed ? (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Room Selector Grid */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-2 block flex items-center gap-1.5">
                  <Home className="w-4 h-4 text-[#D4AF37]" /> Select Sanctuary Room
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ROOMS_DATA.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => {
                        setSelectedRoomId(r.id);
                        if (r.hasCaregiverOption) {
                          setNeedsCaregiver(true);
                        }
                      }}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                        selectedRoomId === r.id
                          ? 'bg-white border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]'
                          : 'bg-white/60 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-16 h-16 rounded-xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-sm text-[#1B3B2B] truncate">
                          {r.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 truncate">{r.categoryLabel}</p>
                        <p className="text-xs font-bold text-[#C5A059] mt-0.5">
                          ${r.priceUSD} / night
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Check In / Out / Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    min={checkIn}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Caregiver Service Checkbox */}
              <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-sm flex items-start gap-3">
                <input
                  type="checkbox"
                  id="caregiver-toggle"
                  checked={needsCaregiver}
                  onChange={(e) => setNeedsCaregiver(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
                />
                <label htmlFor="caregiver-toggle" className="cursor-pointer flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-[#1B3B2B] text-sm sm:text-base">
                      Request High-Skilled Caregiver Service
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#1B3B2B] text-[#D4AF37] font-mono font-bold">
                      +$50 / night
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-light mt-0.5">
                    Includes 24/7 dedicated certified nursing assistant support for medication, daily mobility assistance, and personalized care.
                  </p>
                </label>
              </div>

              {/* Guest Details Input Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Lord Alexander Wright"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    placeholder="alexander@domain.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 7911 123456"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                  Special Dietary or Accessibility Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Dietary allergies, arrival transfer from Colombo Airport, specific Ayurvedic herbal preferences..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                />
              </div>

              {/* Live Price Estimation Receipt Summary */}
              <div className="p-5 rounded-2xl bg-[#1B3B2B] text-white space-y-2 border border-[#D4AF37]">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Room: {selectedRoom.name} ({nights} {nights === 1 ? 'Night' : 'Nights'})</span>
                  <span className="font-mono">${totalRoomUSD} (≈ LKR {totalRoomLKR.toLocaleString()})</span>
                </div>

                {needsCaregiver && (
                  <div className="flex justify-between text-xs text-[#D4AF37]">
                    <span>High-Skilled Caregiver Service ({nights} Nights)</span>
                    <span className="font-mono">+${totalCaregiverUSD} (≈ LKR {totalCaregiverLKR.toLocaleString()})</span>
                  </div>
                )}

                <div className="pt-2 border-t border-white/20 flex justify-between items-baseline">
                  <span className="font-serif text-lg font-bold text-white">Estimated Total</span>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-[#D4AF37] block">
                      ${grandTotalUSD} USD
                    </span>
                    <span className="text-xs text-gray-300 font-mono">
                      ≈ LKR {grandTotalLKR.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl gold-gradient text-[#1B3B2B] font-bold text-sm tracking-widest uppercase shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Confirm Reservation Request</span>
              </button>

            </form>
          ) : (
            /* Confirmation Receipt View */
            <div className="space-y-6 text-center">
              <div className="w-20 h-20 rounded-full gold-gradient text-[#1B3B2B] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 text-left">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-xs uppercase text-gray-500 font-bold">Booking Reference</span>
                  <span className="font-mono font-bold text-lg text-[#1B3B2B] bg-[#FAF8F5] px-3 py-1 rounded border border-[#D4AF37]">
                    {bookingReference}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-gray-700">
                  <p><strong>Guest Name:</strong> {guestName || 'Valued Guest'}</p>
                  <p><strong>Email:</strong> {guestEmail || 'concierge@ayuboparadise.lk'}</p>
                  <p><strong>Room Sanctuary:</strong> {selectedRoom.name}</p>
                  <p><strong>Dates:</strong> {checkIn} to {checkOut} ({nights} Nights)</p>
                  <p><strong>Guests:</strong> {guests} Guests</p>
                  <p><strong>Caregiver Service:</strong> {needsCaregiver ? 'Yes (Requested)' : 'No'}</p>
                  <p><strong>Total Amount:</strong> ${grandTotalUSD} USD (≈ LKR {grandTotalLKR.toLocaleString()})</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 font-light">
                Our reservation manager will contact you via WhatsApp or Email within 2 hours to confirm your airport pickup and dietary preferences.
              </p>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-[#1B3B2B] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#12281D]"
              >
                Return to Website
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
