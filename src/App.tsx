import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { AyurvedicSpaSection } from './components/AyurvedicSpaSection';
import { DiningSection } from './components/DiningSection';
import { AccessibilityBanner } from './components/AccessibilityBanner';
import { ContactFooter } from './components/ContactFooter';

import { RoomAmenitiesModal } from './components/RoomAmenitiesModal';
import { AccessibilityAuditModal } from './components/AccessibilityAuditModal';
import { BookingModal } from './components/BookingModal';
import { TableReservationModal } from './components/TableReservationModal';
import { SpaBookingModal } from './components/SpaBookingModal';
import { NotificationToast } from './components/NotificationToast';

import { Room, RoomCategory, SpaTreatment } from './types';
import { ROOMS_DATA } from './data/resortData';

export default function App() {
  // Modal states
  const [selectedRoomForAmenities, setSelectedRoomForAmenities] = useState<Room | null>(null);
  const [isAccessibilityAuditOpen, setIsAccessibilityAuditOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);
  
  const [searchParams, setSearchParams] = useState<{
    checkIn: string;
    checkOut: string;
    guests: number;
  } | undefined>(undefined);

  const [isTableModalOpen, setIsTableModalOpen] = useState<boolean>(false);
  const [selectedDiningOption, setSelectedDiningOption] = useState<string | undefined>(undefined);

  const [isSpaModalOpen, setIsSpaModalOpen] = useState<boolean>(false);
  const [selectedSpaTreatment, setSelectedSpaTreatment] = useState<SpaTreatment | null>(null);

  const [roomCategoryFilter, setRoomCategoryFilter] = useState<RoomCategory>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Handlers
  const handleCheckAvailability = (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    category: RoomCategory;
  }) => {
    setSearchParams({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      guests: params.guests
    });
    setRoomCategoryFilter(params.category);
    
    // Scroll smoothly to accommodations section
    const element = document.getElementById('accommodations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setToastMessage(`Checked availability for ${params.checkIn} to ${params.checkOut}. Showing selected room sanctuaries.`);
  };

  const handleOpenBooking = (roomId?: string) => {
    setBookingRoomId(roomId);
    setIsBookingModalOpen(true);
  };

  const handleReserveTable = (diningOption?: string) => {
    setSelectedDiningOption(diningOption);
    setIsTableModalOpen(true);
  };

  const handleBookSpaTreatment = (treatment: SpaTreatment) => {
    setSelectedSpaTreatment(treatment);
    setIsSpaModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* Sticky Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenAccessibilityAudit={() => setIsAccessibilityAuditOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero onCheckAvailability={handleCheckAvailability} />

        {/* About & Welcome Section */}
        <AboutSection />

        {/* Section 1: Luxury Accommodations */}
        <AccommodationsSection
          onSelectRoomForAmenities={(room) => setSelectedRoomForAmenities(room)}
          onBookRoom={(roomId) => handleOpenBooking(roomId)}
          selectedFilter={roomCategoryFilter}
          onFilterChange={(cat) => setRoomCategoryFilter(cat)}
        />

        {/* Section 2: Authentic Ayurvedic Spa */}
        <AyurvedicSpaSection onBookSpa={handleBookSpaTreatment} />

        {/* Section 3: Dining & Culinary Journey */}
        <DiningSection onReserveTable={handleReserveTable} />

        {/* Inclusive Care & Accessibility Spotlight Banner */}
        <AccessibilityBanner
          onOpenAudit={() => setIsAccessibilityAuditOpen(true)}
          onBookAccessibleSuite={() => {
            setRoomCategoryFilter('accessible');
            handleOpenBooking('accessible-ocean-suite');
          }}
        />

      </main>

      {/* Footer & Direct Contact */}
      <ContactFooter
        onOpenBooking={() => handleOpenBooking()}
        onOpenAccessibilityAudit={() => setIsAccessibilityAuditOpen(true)}
      />

      {/* Modals */}
      <RoomAmenitiesModal
        room={selectedRoomForAmenities}
        onClose={() => setSelectedRoomForAmenities(null)}
        onBookRoom={(roomId) => handleOpenBooking(roomId)}
      />

      <AccessibilityAuditModal
        isOpen={isAccessibilityAuditOpen}
        onClose={() => setIsAccessibilityAuditOpen(false)}
        onBookAccessibleSuite={() => {
          setRoomCategoryFilter('accessible');
          handleOpenBooking('accessible-ocean-suite');
        }}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialRoomId={bookingRoomId}
        initialSearchParams={searchParams}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      <TableReservationModal
        isOpen={isTableModalOpen}
        onClose={() => setIsTableModalOpen(false)}
        initialOption={selectedDiningOption}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      <SpaBookingModal
        isOpen={isSpaModalOpen}
        onClose={() => setIsSpaModalOpen(false)}
        initialTreatment={selectedSpaTreatment}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      {/* Toast Notification */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
