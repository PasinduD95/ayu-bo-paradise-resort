export type RoomCategory = 'all' | 'sea-view' | 'garden-view' | 'accessible';

export interface Room {
  id: string;
  name: string;
  category: RoomCategory;
  categoryLabel: string;
  shortDesc: string;
  longDesc: string;
  priceUSD: number;
  priceLKR: number;
  sizeSqM: number;
  maxGuests: number;
  bedType: string;
  viewType: string;
  image: string;
  gallery: string[];
  isAccessible: boolean;
  hasCaregiverOption: boolean;
  highlights: string[];
  amenities: string[];
}

export interface SpaTreatment {
  id: string;
  title: string;
  tagline: string;
  durationMinutes: number;
  priceUSD: number;
  priceLKR: number;
  category: 'Massage' | 'Therapy' | 'Signature' | 'Facial' | 'Detox' | 'Consultation';
  image: string;
  description: string;
  benefits: string[];
  herbsUsed: string[];
  includesDoctorConsult: boolean;
}

export interface DiningHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  iconName: string;
  specialties: string[];
  chefNote?: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomCategory: RoomCategory;
  selectedRoomId?: string;
  needsCaregiver: boolean;
  specialRequests: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
}

export interface TableReservationData {
  date: string;
  time: string;
  guests: number;
  diningOption: string;
  dietaryNotes: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
}

export interface SpaBookingData {
  treatmentId: string;
  date: string;
  timeSlot: string;
  doctorConsultation: boolean;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  healthNotes: string;
}
