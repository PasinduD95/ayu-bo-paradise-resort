import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, ShieldCheck, HeartPulse } from 'lucide-react';
import hotelLogoImg from '../assets/images/logo.png';

interface HeaderProps {
  onOpenBooking: (roomId?: string) => void;
  onOpenAccessibilityAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenAccessibilityAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Accommodations', href: '#accommodations' },
    { name: 'Ayurvedic Spa', href: '#spa' },
    { name: 'Dining', href: '#dining' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl border-b border-[#D4AF37]/20 text-white'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Hotel Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 flex flex-col items-center">
              <img
                src={hotelLogoImg}
                alt="AYU BO PARADISE Logo"
                className="w-30 h-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to stylized gold logo container if image loading fails
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              {/* <span className="text-[6px] text-center uppercase tracking-[0.25em] text-[#D4AF37]">
                Luxury • Wellness • Hospitality
              </span> */}
            </div>
            {/* <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-widest font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                AYU BO PARADISE
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37]">
                Beachfront & Ayurvedic Spa • Sri Lanka
              </span>
            </div> */}
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider text-gray-200 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Actions & Book CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenAccessibilityAudit}
              className="text-xs flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-[#D4AF37] border border-[#D4AF37]/40 transition-all duration-300 backdrop-blur-sm"
              title="Accessible Features & Caregiver Information"
            >
              <HeartPulse className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden md:inline font-medium">Caregiver & Accessibility</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              id="header-book-stay-btn"
              className="px-6 py-2.5 rounded-full gold-gradient text-[#1B3B2B] font-medium text-sm tracking-wider uppercase shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden text-xs px-3 py-2 rounded-full gold-gradient text-[#1B3B2B] font-semibold uppercase tracking-wider"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-[#D4AF37]/30 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-wide text-gray-100 hover:text-[#D4AF37] border-b border-white/10 pb-2 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccessibilityAudit();
                }}
                className="w-full text-center py-2.5 rounded-lg border border-[#D4AF37] text-[#D4AF37] text-sm font-medium flex items-center justify-center gap-2"
              >
                <HeartPulse className="w-4 h-4" />
                <span>Accessibility & Caregiver Details</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center py-3 rounded-full gold-gradient text-[#1B3B2B] font-semibold text-sm tracking-widest uppercase shadow-md"
              >
                Book Your Stay
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
