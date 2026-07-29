import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Youtube, HeartPulse, Send, Globe, ChevronRight } from 'lucide-react';
import hotelLogoImg from '../assets/images/logo.png';
import { FaTiktok } from "react-icons/fa6";


interface ContactFooterProps {
  onOpenBooking: () => void;
  onOpenAccessibilityAudit: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onOpenBooking,
  onOpenAccessibilityAudit
}) => {
  return (
    <footer id="contact" className="bg-[#12281D] text-white pt-20 pb-10 border-t-2 border-[#D4AF37]/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-24 h-auto overflow-hidden border-[#D4AF37]">
                <img
                  src={hotelLogoImg}
                  alt="AYU BO PARADISE Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block">
                  AYU BO PARADISE
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#D4AF37] block">
                  Luxury • Wellness • Hospitality
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              An oceanfront sanctuary on Mirissa coast where ancient Ayurvedic doctor-led healing meets modern luxury, gourmet culinary art, and inclusive caregiver-supported hospitality.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1B3B2B] text-white transition-all flex items-center justify-center border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1B3B2B] text-white transition-all flex items-center justify-center border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1B3B2B] text-white transition-all flex items-center justify-center border border-white/10"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1B3B2B] text-white transition-all flex items-center justify-center border border-white/10 text-xs font-bold"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Direct Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-xl text-[#D4AF37] font-bold tracking-wide">
              Direct Contact & Concierge
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">AYU BO PARADISE Resort</span>
                  <span>Mirissa Coastal Road, Weligama / Galle Coast, Southern Province, Sri Lanka</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <span className="text-gray-400 text-xs block">Resort Telephone:</span>
                  <a href="tel:+94412234567" className="hover:text-[#D4AF37] font-mono text-white">
                    +94 41 223 4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <span className="text-gray-400 text-xs block">WhatsApp Concierge (24/7):</span>
                  <a href="https://wa.me/94771234567" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] font-mono text-white">
                    +94 77 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <span className="text-gray-400 text-xs block">Direct Email Enquiries:</span>
                  <a href="mailto:reservations@ayuboparadise.lk" className="hover:text-[#D4AF37] font-mono text-white">
                    reservations@ayuboparadise.lk
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAccessibilityAudit}
                className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
              >
                <HeartPulse className="w-3.5 h-3.5" />
                <span>Caregiver & Accessible Suite Inquiries</span>
              </button>
            </div>
          </div>

          {/* Col 3: Interactive Location Map Placeholder */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-xl text-[#D4AF37] font-bold tracking-wide">
              Resort Location
            </h3>

            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-black/40 h-48 relative group">
              {/* Interactive iframe map placeholder for Mirissa, Sri Lanka */}
              <iframe
                title="AYU BO PARADISE Mirissa Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4111394101826!2d80.45423851532453!3d5.946761695692631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13ed3928ebaf7%3A0x6b0a1a0dbecb5523!2sMirissa%20Beach!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk"
                className="w-full h-full border-0 filter opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-md p-2 rounded-lg text-[10px] text-gray-300 flex items-center justify-between">
                <span>📍 Mirissa Oceanfront, Sri Lanka</span>
                <span className="text-[#D4AF37] font-bold">15 mins from Galle Highway</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-full gold-gradient text-[#1B3B2B] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Book Your Stay Now
            </button>
          </div>

        </div>

        {/* Sub-Footer Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-light gap-4">
          <p>© 2026 AYU BO PARADISE. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-[#D4AF37] transition-colors">Terms of Hospitality</a>
            <a href="#accessibility" className="hover:text-[#D4AF37] transition-colors">Accessibility Statement</a>
          </div>
        </div>

      </div>

    </footer>
  );
};
