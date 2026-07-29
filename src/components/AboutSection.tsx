import React, { useRef, useState } from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Compass, CheckCircle2, Play, Volume2 } from 'lucide-react';
import { RESORT_STATS } from '../data/resortData';
import resortVideo from "../assets/videos/spa.mp4";

export const AboutSection: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideoModal(false);
  };

  return (
    <section id="about" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Decorative Floral/Lotus Background Watermark */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1B3B2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C5A059] mb-3 block">
            Welcome to AYU BO PARADISE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1B3B2B] font-normal leading-tight">
            An Oceanfront Haven of Ancient Wisdom & Contemporary Opulence
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Composite & Video Trigger */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="AYU BO PARADISE Oceanfront Wellness Pavilion"
                className="w-full h-[450px] sm:h-[520px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Play Video Trigger Overlay */}
              <button
                onClick={() => setShowVideoModal(true)}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full gold-gradient text-[#1B3B2B] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
                aria-label="Play Resort Experience Preview Video"
              >
                <Play className="w-8 h-8 text-[#1B3B2B] fill-[#1B3B2B] ml-1 group-hover:scale-110 transition-transform" />
              </button>

              {/* Bottom Card Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-white/40 shadow-xl flex items-center gap-4">
                <div className="p-3 rounded-full bg-[#1B3B2B] text-[#D4AF37]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#1B3B2B] font-bold">
                    Sri Lanka’s Premier Coastal Sanctuary
                  </h4>
                  <p className="text-xs text-gray-600">
                    Combining 5,000-year-old Ayurvedic healing traditions with uncompromised 5-star beachfront hospitality.
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping Small Detail Photo */}
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
                alt="Ayurvedic Treatment Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1B3B2B] leading-snug">
              "Ayubowan" — May You Be Blessed with Long Life, Health, and Absolute Tranquility.
            </h3>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
              Situated on the sun-drenched southern shore of Mirissa, <strong className="font-semibold text-[#1B3B2B]">AYU BO PARADISE</strong> was crafted as a sanctuary for those seeking restorative peace. Here, the soothing melody of Indian Ocean waves harmonies with endemic herbal gardens and ancient healing practices.
            </p>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
              Under the resident direction of certified Ayurvedic BAMS doctors, every guest experiences personalized pulse diagnostics, bespoke herbal therapies, organic culinary art, and barrier-free luxury designed for guests of all physical abilities.
            </p>

            {/* Key Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-[#1B3B2B] text-sm">30 Bespoke Guest Rooms</h4>
                  <p className="text-xs text-gray-500">Sea-view balconies & zen garden pavilions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-[#1B3B2B] text-sm">Authentic Ayurvedic Spa</h4>
                  <p className="text-xs text-gray-500">Doctor consultations & pure organic herbs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-[#1B3B2B] text-sm">Inclusive Caregiver Service</h4>
                  <p className="text-xs text-gray-500">5 barrier-free suites with 24/7 skilled support.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-[#1B3B2B] text-sm">Ocean-to-Table Dining</h4>
                  <p className="text-xs text-gray-500">Fresh seafood, traditional claypot & vegan menus.</p>
                </div>
              </div>
            </div>

            {/* Signature Quote / Founder Note */}
            <div className="pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-lg text-[#1B3B2B]">
                  "We do not merely offer a room by the sea; we restore the harmony of mind, body, and spirit."
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mt-1">
                  Dr. K. Jayasuriya • Chief Ayurvedic Physician
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Resort Stats Bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-[#1B3B2B] text-white p-8 rounded-2xl shadow-xl border border-[#D4AF37]/30">
          {RESORT_STATS.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif gold-text-gradient font-bold block">
                {stat.value}
              </span>
              <span className="text-sm font-medium tracking-wide text-gray-200 block">
                {stat.label}
              </span>
              <span className="text-xs text-gray-400 font-light block">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Preview */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#1B3B2B] border border-[#D4AF37] rounded-2xl max-w-3xl w-full p-6 text-white relative shadow-2xl">
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-gray-400 hover:text-white font-bold text-xl"
            >
              ✕
            </button>
            <h3 className="font-serif text-2xl text-[#D4AF37] mb-2">
              AYU BO PARADISE — Sanctuary Experience
            </h3>
            <p className="text-xs text-gray-300 mb-6">
              Immerse yourself in the sounds of waves, morning yoga in botanical gardens, and authentic Ayurvedic oil therapies.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source src={resortVideo} type="video/mp4" />
                {/* or */}
                {/* <source src={resortVideo} type="video/mp4" /> */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
