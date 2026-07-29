import React, { useState } from 'react';
import { SPA_TREATMENTS } from '../data/resortData';
import { SpaTreatment } from '../types';
import { X, HeartPulse, Calendar, Clock, Stethoscope, CheckCircle2, Leaf, Sparkles } from 'lucide-react';

interface SpaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: SpaTreatment | null;
  onSuccessToast: (msg: string) => void;
}

export const SpaBookingModal: React.FC<SpaBookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
  onSuccessToast
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    initialTreatment?.id || SPA_TREATMENTS[0].id
  );
  const [date, setDate] = useState<string>(today);
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM');
  const [includeDoctorConsult, setIncludeDoctorConsult] = useState<boolean>(true);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [healthNotes, setHealthNotes] = useState<string>('');

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [spaRef, setSpaRef] = useState<string>('');

  const treatment = SPA_TREATMENTS.find(t => t.id === selectedTreatmentId) || SPA_TREATMENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'SPA-' + Math.floor(10000 + Math.random() * 90000);
    setSpaRef(ref);
    setIsConfirmed(true);
    onSuccessToast(`Spa session booked! Ref: ${ref} for ${treatment.title}`);
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
            <HeartPulse className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Ayurvedic Holistic Sanctuary</span>
          </div>

          <h2 className="font-serif text-3xl font-bold">
            {isConfirmed ? 'Spa Session Reserved' : 'Book Ayurvedic Spa Treatment'}
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
            {isConfirmed
              ? 'Your treatment appointment has been scheduled with our resident Ayurvedic doctor.'
              : 'Rejuvenate your body and spirit with doctor-prescribed organic herbs and oil therapies.'}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {!isConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                  Select Ayurvedic Treatment
                </label>
                <select
                  value={selectedTreatmentId}
                  onChange={(e) => setSelectedTreatmentId(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                >
                  {SPA_TREATMENTS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title} ({t.durationMinutes} mins - ${t.priceUSD} / {t.priceLKR.toLocaleString()} LKR)
                    </option>
                  ))}
                </select>
              </div>

              {/* Treatment Selected Detail Pill */}
              <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs space-y-1">
                <p className="font-bold text-[#1B3B2B] text-sm">{treatment.title}</p>
                <p className="text-gray-600 font-light">{treatment.description}</p>
                <p className="text-[#C5A059] font-mono pt-1">
                  Duration: {treatment.durationMinutes} mins • Price: ${treatment.priceUSD} (≈ LKR {treatment.priceLKR.toLocaleString()})
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Preferred Date
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
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                  >
                    <option value="09:00 AM">09:00 AM (Morning Healing)</option>
                    <option value="11:00 AM">11:00 AM (Midday Rest)</option>
                    <option value="02:30 PM">02:30 PM (Afternoon Detox)</option>
                    <option value="04:30 PM">04:30 PM (Sunset Serenity)</option>
                    <option value="06:30 PM">06:30 PM (Evening Relaxation)</option>
                  </select>
                </div>
              </div>

              {/* Doctor Consultation Toggle */}
              <div className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/50 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="doctor-consult-toggle"
                  checked={includeDoctorConsult}
                  onChange={(e) => setIncludeDoctorConsult(e.target.checked)}
                  className="w-4 h-4 text-[#D4AF37] rounded"
                />
                <label htmlFor="doctor-consult-toggle" className="text-xs cursor-pointer">
                  <span className="font-bold text-[#1B3B2B] block">Include Doctor Pulse Diagnosis Consultation</span>
                  <span className="text-gray-500 font-light">Resident Ayurvedic BAMS Doctor will assess your Dosha profile prior to treatment.</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] mb-1 block">
                    Email / Phone
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
                  Health Notes or Specific Tension Areas
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Back tension, stress, insomnia, joint stiffness, skin sensitivities..."
                  value={healthNotes}
                  onChange={(e) => setHealthNotes(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 bg-white text-sm focus:ring-2 focus:ring-[#D4AF37] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl gold-gradient text-[#1B3B2B] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Spa Appointment</span>
              </button>

            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full gold-gradient text-[#1B3B2B] flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1B3B2B]">
                Spa Session Reserved!
              </h3>

              <div className="bg-white p-4 rounded-2xl border border-gray-200 text-left text-xs space-y-1">
                <p><strong>Appointment Code:</strong> <span className="font-mono text-[#1B3B2B] font-bold">{spaRef}</span></p>
                <p><strong>Treatment:</strong> {treatment.title}</p>
                <p><strong>Date & Time:</strong> {date} at {timeSlot}</p>
                <p><strong>Doctor Consultation:</strong> {includeDoctorConsult ? 'Included' : 'None'}</p>
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
