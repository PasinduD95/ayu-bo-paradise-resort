import { Room, SpaTreatment, DiningHighlight } from '../types';

import heroResortImg from '../assets/images/hero_resort_1785334073036.jpg';
import room2 from '../assets/images/room-2.jpg';
import image1 from '../assets/images/image-1.avif';
import image2 from '../assets/images/image-2.avif';
import room3 from '../assets/images/room-3.jpg';
import room4 from '../assets/images/room-4.png';
import room5 from '../assets/images/room-5.avif';
import room6 from '../assets/images/room-6.avif';
import room7 from '../assets/images/room-7.avif';
import room8 from '../assets/images/room-8.avif';
import room9 from '../assets/images/room-9.avif';
import spa1 from '../assets/images/spa-1.avif';
import spa2 from '../assets/images/spa-2.avif';
import spa3 from '../assets/images/spa-3.avif';
import spa4 from '../assets/images/spa-4.avif';
import spa5 from '../assets/images/spa-5.jpg';
import spa7 from '../assets/images/spa-7.avif';
import spa8 from '../assets/images/spa-8.avif';
import spa6 from '../assets/images/sunset.webp';
import food1 from '../assets/images/food-1.avif';
import food2 from '../assets/images/food-2.avif';
import food3 from '../assets/images/food-3.avif';
import food4 from '../assets/images/food-4.avif';
import food5 from '../assets/images/food-5.avif';
import food6 from '../assets/images/food-6.jpg';
import food7 from '../assets/images/food-7.jpg';

export const RESORT_HERO_IMAGE = heroResortImg;

export const STANDARD_AMENITIES = [
  'Private oceanfront balcony or garden patio',
  'Direct beach access with private sun loungers',
  '24-Hour bespoke in-room dining service',
  'Individually controlled eco-climate AC & ceiling fans',
  '55-inch Ultra HD Smart TV with satellite channels',
  'High-speed fiber optic Wi-Fi & broadband internet',
  'Full-size executive teak writing desk',
  'IDD telephone (dual lines + private voicemail)',
  'Universal international power sockets & USB charge ports',
  'Organic Sri Lankan Ceylon tea & espresso coffee station',
  'Customized minibar stocked with organic herbal elixirs',
  'Iron & full-sized ironing board',
  'Marble-clad luxury bathroom with walk-in rainfall shower',
  'Deep-soaking freestanding bathtub with ocean views',
  'Handcrafted Ayurvedic botanical bath amenities',
  'Plush Egyptian cotton bathrobes & plush slippers',
  'In-room digital electronic safe with laptop capacity',
  'Nightly turndown service with soothing herbal pillow sprays'
];

export const ACCESSIBLE_AMENITIES = [
  ...STANDARD_AMENITIES,
  'Barrier-free zero-threshold room & patio entrance',
  'Spacious marble bathroom with reinforced stainless steel grab rails',
  'Roll-in zero-barrier rainfall shower with fold-down teak seat',
  'Lowered vanity sink, light switches, and wardrobe hanging rods',
  'High-skilled Caregiver Service available on request (24/7)',
  'Braille room numbers & tactile floor indicators',
  'Visual emergency alarm strobe lights & bed-side emergency call button',
  'Wide 36-inch clear door openings throughout'
];

export const ROOMS_DATA: Room[] = [
  {
    id: 'sea-view-presidential',
    name: 'Oceanfront Royal Suite',
    category: 'sea-view',
    categoryLabel: 'Sea-View Suite',
    shortDesc: 'Panoramic Indian Ocean views, private plunge pool, and direct powdery beach access.',
    longDesc: 'Perched right at the water’s edge in Mirissa, the Oceanfront Royal Suite offers panoramic sunset vistas over crashing turquoise waves. Features an expansive teak deck, private freshwater plunge pool, dual rain showers, and dedicated butler service.',
    priceUSD: 680,
    priceLKR: 204000,
    sizeSqM: 110,
    maxGuests: 3,
    bedType: 'King Canopy Bed',
    viewType: '180° Panoramic Ocean View',
    image: room2,
    gallery: [
      room2,
      image1,
      room3
    ],
    isAccessible: false,
    hasCaregiverOption: false,
    highlights: ['Private Freshwater Plunge Pool', 'Direct Beach Access', '24/7 Personal Butler'],
    amenities: STANDARD_AMENITIES
  },
  {
    id: 'sea-view-deluxe',
    name: 'Ocean Wave Balcony Sanctuary',
    category: 'sea-view',
    categoryLabel: 'Sea-View Room',
    shortDesc: 'Elevated luxury bedroom featuring a private sun deck overlooking breaking turquoise tides.',
    longDesc: 'Listen to the soothing rhythm of crashing Indian Ocean waves from your private daybed balcony. Crafted with locally sourced teak, hand-woven linens, and floor-to-ceiling glass doors framing endless blue horizons.',
    priceUSD: 450,
    priceLKR: 135000,
    sizeSqM: 75,
    maxGuests: 2,
    bedType: 'King Feather Bed',
    viewType: 'Direct Ocean & Sunset Vistas',
    image: room5,
    gallery: [
      room5,
      room4
    ],
    isAccessible: false,
    hasCaregiverOption: false,
    highlights: ['Crashing Wave Vistas', 'Private Teak Balcony', 'Freestanding Bathtub'],
    amenities: STANDARD_AMENITIES
  },
  {
    id: 'sea-view-junior',
    name: 'Coral Horizon Haven',
    category: 'sea-view',
    categoryLabel: 'Sea-View Room',
    shortDesc: 'Cozy coastal sanctuary featuring floor-to-ceiling ocean vistas and private beach pathway.',
    longDesc: 'Bathed in warm golden sunlight, this room merges indoor opulence with outdoor coastal splendor. Step straight out onto private golden sand trails surrounded by tropical palms.',
    priceUSD: 390,
    priceLKR: 117000,
    sizeSqM: 65,
    maxGuests: 2,
    bedType: 'King or Twin Beds',
    viewType: 'Ocean & Beach Garden View',
    image: room6,
    gallery: [
      room6
    ],
    isAccessible: false,
    hasCaregiverOption: false,
    highlights: ['Beachfront Access', 'Outdoor Rain Shower', 'Sunset Facing Deck'],
    amenities: STANDARD_AMENITIES
  },
  {
    id: 'garden-view-pavilion',
    name: 'Ayurvedic Garden Pavilion',
    category: 'garden-view',
    categoryLabel: 'Garden-View Villa',
    shortDesc: 'Nestled among lush native herbal flora, medicinal trees, and serene lotus ponds.',
    longDesc: 'Designed for deep peace and meditation, the Ayurvedic Garden Pavilion is enveloped by Sri Lanka’s endemic floral scents and birdsong. Features a private outdoor herbal soaking bathtub and meditation veranda.',
    priceUSD: 340,
    priceLKR: 102000,
    sizeSqM: 80,
    maxGuests: 2,
    bedType: 'Custom Hand-Carved Teak King Bed',
    viewType: 'Botanical Herbal Gardens & Lotus Ponds',
    image: room7,
    gallery: [
      room7,
      image2
    ],
    isAccessible: false,
    hasCaregiverOption: false,
    highlights: ['Outdoor Herbal Soaking Tub', 'Lotus Pond Courtyard', 'Zen Meditation Deck'],
    amenities: STANDARD_AMENITIES
  },
  {
    id: 'garden-view-retreat',
    name: 'Palm Grove Serenity Villa',
    category: 'garden-view',
    categoryLabel: 'Garden-View Room',
    shortDesc: 'Tranquil sanctuary amidst towering coconut palms with a secluded private garden patio.',
    longDesc: 'An idyllic retreat for yoga and holistic rejuvenation. Unwind on your shaded private lounge terrace while listening to gentle ocean breezes filtering through coconut fronds.',
    priceUSD: 290,
    priceLKR: 87000,
    sizeSqM: 60,
    maxGuests: 2,
    bedType: 'King Bed',
    viewType: 'Lush Palm Grove Gardens',
    image: image2,
    gallery: [
      image2
    ],
    isAccessible: false,
    hasCaregiverOption: false,
    highlights: ['Shaded Patio', 'Yoga Deck', 'Tranquil Ambiance'],
    amenities: STANDARD_AMENITIES
  },
  {
    id: 'accessible-ocean-suite',
    name: 'Inclusive Paradise Accessible Ocean Suite',
    category: 'accessible',
    categoryLabel: 'Accessible Suite (Caregiver Service Available)',
    shortDesc: 'Barrier-free oceanfront luxury with zero-threshold shower, grab bars & optional 24/7 caregiver service.',
    longDesc: 'Thoughtfully designed to provide complete physical accessibility without compromising on ultra-luxury elegance. Features extra-wide doorways, zero-threshold transitions from bedroom to private beach terrace, marble bathroom with ergonomically placed grab rails, roll-in rainfall shower with bench, and 24/7 dedicated caregiver service on request.',
    priceUSD: 420,
    priceLKR: 126000,
    sizeSqM: 85,
    maxGuests: 3,
    bedType: 'Motorized Adjustable Luxury King Bed',
    viewType: 'Unobstructed Oceanfront Vistas (Ground Level)',
    image: room8,
    gallery: [
      room8,
      room2
    ],
    isAccessible: true,
    hasCaregiverOption: true,
    highlights: [
      'Zero-Threshold Barrier-Free Access',
      'Marble Bathroom with Ergonomic Grab Rails',
      'Roll-In Shower with Teak Bench',
      'High-skilled Caregiver Service on Request (24/7)',
      'Ground-Level Direct Beach Terrace Ramp'
    ],
    amenities: ACCESSIBLE_AMENITIES
  },
  {
    id: 'accessible-garden-suite',
    name: 'Sanctuary Accessible Garden Suite',
    category: 'accessible',
    categoryLabel: 'Accessible Suite (Caregiver Service Available)',
    shortDesc: 'Serene ground-level villa surrounded by botanical gardens with full accessibility accommodations.',
    longDesc: 'A tranquil haven with seamless wide doors, lowered switches, emergency alert system, tactile path guidance, and a spacious accessible bathroom. Ideal for guests seeking ultimate rest with optional professional medical or personal care support.',
    priceUSD: 360,
    priceLKR: 108000,
    sizeSqM: 80,
    maxGuests: 3,
    bedType: 'Adjustable King Bed & Caregiver Daybed',
    viewType: 'Gentle Botanical Zen Garden Ramp Access',
    image: room9,
    gallery: [
      room9
    ],
    isAccessible: true,
    hasCaregiverOption: true,
    highlights: [
      'Adjustable Bed & Low Vanity',
      'Bed-Side Emergency Call System',
      'High-skilled Caregiver Service on Request',
      'Tactile & Braille Room Features'
    ],
    amenities: ACCESSIBLE_AMENITIES
  }
];

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'shirodhara-signature',
    title: 'Shirodhara Ritual (Signature)',
    tagline: 'Ancient Mind Calm & Neurological Deep Rest',
    durationMinutes: 90,
    priceUSD: 160,
    priceLKR: 48000,
    category: 'Signature',
    image: spa1,
    description: 'A continuous, rhythmic stream of warm, doctor-prescribed herbal oil poured softly onto the Third Eye chakra (forehead). Rejuvenates the nervous system, alleviates chronic stress, insomnia, and mental exhaustion.',
    benefits: ['Deep sleep enhancement', 'Relieves tension & migraine', 'Nervous system reset', 'Mental clarity'],
    herbsUsed: ['Gotu Kola', 'Sesame Oil', 'Brahmi', 'Sandalwood', 'Ashwagandha'],
    includesDoctorConsult: true
  },
  {
    id: 'full-body-abhyanga',
    title: 'Full Body Ayurvedic Massage (Abhyanga)',
    tagline: 'Synchronized Warm Herbal Oil Massage',
    durationMinutes: 75,
    priceUSD: 130,
    priceLKR: 39000,
    category: 'Massage',
    image: spa2,
    description: 'Performed by two synchronized Ayurvedic therapists using warm medicinal oils tailored to your unique Dosha (Vata, Pitta, or Kapha). Enhances lymphatic drainage, skin radiance, and muscle vitality.',
    benefits: ['Lymphatic circulation', 'Joint stiffness relief', 'Skin nourishment', 'Dosha balancing'],
    herbsUsed: ['Mahanarayana Oil', 'Bala', 'Sida Cordifolia', 'Mustard & Coconut Herbal Infusions'],
    includesDoctorConsult: true
  },
  {
    id: 'herbal-oil-swedana',
    title: 'Herbal Oil & Steam Therapy (Swedana)',
    tagline: 'Detoxifying Herbal Steam Bath & Compress',
    durationMinutes: 60,
    priceUSD: 110,
    priceLKR: 33000,
    category: 'Therapy',
    image: spa3,
    description: 'Warm herbal pouch compresses (Kizhi) packed with medicinal Sri Lankan leaves, followed by a aromatic cedarwood herbal steam canopy that opens pores and purges cellular toxins.',
    benefits: ['Deep tissue detox', 'Eases arthritis & joint pain', 'Cellular renewal', 'Pore purification'],
    herbsUsed: ['Nika (Vitex Negundo)', 'Eucalyptus', 'Lemongrass', 'Turmeric Roots'],
    includesDoctorConsult: false
  },
  {
    id: 'stress-relief-pinda',
    title: 'Pinda Sweda Stress Relief Therapy',
    tagline: 'Warm Herbal Rice Bolus Deep Muscle Relief',
    durationMinutes: 75,
    priceUSD: 140,
    priceLKR: 42000,
    category: 'Therapy',
    image: spa4,
    description: 'Cotton boluses filled with organic Navara rice cooked in herbal decoctions and cow milk are rhythmically massaged over aching joints, back, and shoulders.',
    benefits: ['Muscle atrophy recovery', 'Spinal decompression', 'Deep pain relief', 'Structural strengthening'],
    herbsUsed: ['Organic Red Rice', 'Bala Root Decoction', 'Cow Milk', 'Cardamom Pods'],
    includesDoctorConsult: true
  },
  {
    id: 'couples-ocean-spa',
    title: 'Oceanfront Couples Sunset Wellness Ritual',
    tagline: 'Side-by-side Holistic Bliss with Floral Bath',
    durationMinutes: 120,
    priceUSD: 290,
    priceLKR: 87000,
    category: 'Signature',
    image: spa6,
    description: 'A romantic dual treatment in a private ocean-facing pavilion, combining full-body Abhyanga, herbal facial polish, fresh coconut elixirs, and a private lotus petal bath.',
    benefits: ['Shared relaxation', 'Skin glow & hydration', 'Holistic bonding', 'Aromatherapy sensory bliss'],
    herbsUsed: ['Frangipani', 'Lotus Flowers', 'Sandalwood Paste', 'Virgin Coconut Oil'],
    includesDoctorConsult: false
  },
  {
    id: 'panchakarma-detox',
    title: '5-Day Panchakarma Detox & Rejuvenation',
    tagline: 'Comprehensive Physician-Led Body Purification',
    durationMinutes: 180,
    priceUSD: 520,
    priceLKR: 156000,
    category: 'Detox',
    image: spa5,
    description: 'A multi-day intensive detox program customized daily by resident Ayurvedic doctors. Includes internal cleansing, specialized diet plans, daily yoga, and body therapies.',
    benefits: ['Immune system reboot', 'Metabolic reset', 'Cellular longevity', 'Gut microbiome restoration'],
    herbsUsed: ['Triphala', 'Guggulu', 'Neem', 'Amla', 'Turmeric Decoctions'],
    includesDoctorConsult: true
  },
  {
    id: 'herbal-facial-radiance',
    title: 'Ceylon Gold & Lotus Radiance Facial',
    tagline: 'Natural Botanical Glow & Anti-Aging Polish',
    durationMinutes: 60,
    priceUSD: 95,
    priceLKR: 28500,
    category: 'Facial',
    image: spa7,
    description: 'Gentle facial exfoliation using finely ground Ceylon cinnamon, wild honey, pure sandalwood, and crushed pink lotus petals for luminous, radiant skin.',
    benefits: ['Complexion brightening', 'Fine line softening', 'Deep pore cleansing', 'Collagen stimulation'],
    herbsUsed: ['Ceylon Cinnamon', 'Wild Bee Honey', 'Sandalwood', 'Pink Lotus Extract'],
    includesDoctorConsult: false
  },
  {
    id: 'doctor-consultation-pulse',
    title: 'Personalized Doctor Pulse Diagnosis (Nadi Pariksha)',
    tagline: 'Deep Ayurvedic Assessment & Personal Care Plan',
    durationMinutes: 45,
    priceUSD: 70,
    priceLKR: 21000,
    category: 'Consultation',
    image: spa8,
    description: '1-on-1 consultation with our senior BAMS-certified Ayurvedic Physician. Uncovers your root Prakriti (constitution), mental balance, dietary requirements, and custom spa regimen.',
    benefits: ['Root-cause health insight', 'Customized herb prescriptions', 'Personalized meal guide', 'Lifestyle alignment'],
    herbsUsed: ['Custom Botanical Formulae'],
    includesDoctorConsult: true
  }
];

export const DINING_HIGHLIGHTS: DiningHighlight[] = [
  {
    id: 'sri-lankan-traditional',
    title: 'Authentic Sri Lankan Heritage Culinary Art',
    category: 'Heritage Cuisine',
    description: 'Traditional earthen-pot curries enriched with freshly pressed coconut milk, aromatic curry leaves, black pepper, and heirloom red rice sourced directly from local organic farmers.',
    image: food1,
    iconName: 'Utensils',
    specialties: ['Jaffna Crab Curry', 'Claypot Clay-Roasted Ambul Thiyal', 'Hoppers & String Hoppers', 'Heirloom Kalu Heenati Rice']
  },
  {
    id: 'ocean-seafood-delights',
    title: 'Ocean-to-Table Fresh Seafood Specialties',
    category: 'Fresh Seafood',
    description: 'Daily catches brought directly to our beachfront deck by local artisanal Mirissa fishermen. Enjoy giant jumbo prawns, yellowfin tuna steaks, mud crabs, and butter-grilled lobster.',
    image: food2,
    iconName: 'Fish',
    specialties: ['Mirissa Butter Lobster', 'Seared Yellowfin Tuna Steak', 'Garlic Chili Lagoon Crabs', 'Catch-of-the-Day Platter']
  },
  {
    id: 'international-fusion',
    title: 'World-Class International & Island Fusion',
    category: 'Global Fine Dining',
    description: 'Masterfully combining European culinary techniques with exotic tropical island ingredients. Fine wines, artisanal cheeses, and elegant modern plating.',
    image: food3,
    iconName: 'Globe',
    specialties: ['Passionfruit Glazed Lamb Rack', 'Coconut Lemongrass Sea Bass', 'Ceylon Cinnamon Panna Cotta']
  },
  {
    id: 'vegetarian-vegan-ayurveda',
    title: 'Ayurvedic Sattvic, Vegetarian & Vegan Offerings',
    category: 'Wellness Dining',
    description: 'Nourishing plant-based creations designed in harmony with your Ayurvedic body type. Pure, organic, gluten-free, and high-energy dishes cooked with cold-pressed oils.',
    image: food4,
    iconName: 'Leaf',
    specialties: ['Jackfruit (Polos) Tender Steak', 'Gotu Kola Herbal Salad', 'Ayurvedic Spiced Lentil Dhal', 'Moringa Leaf Nectar']
  },
  {
    id: 'childrens-tailored-plans',
    title: 'Customized Children’s Gourmet Meal Plans',
    category: 'Family Friendly',
    description: 'Tailored directly with our executive chefs to accommodate young palates, allergies, and nutritional balance using organic fruit purees, mild curries, and wholesome treats.',
    image: food5,
    iconName: 'Smile',
    specialties: ['Mild Organic Chicken Skewers', 'Fresh Fruit Parfaits', 'Handmade Coconut Pasta', 'Chef 1-on-1 Prep'],
    chefNote: 'Talk directly to Executive Chef Bandara upon check-in to customize daily kid menus!'
  },
  {
    id: 'candlelight-beachside',
    title: 'Private Candlelight Beachside Dinners',
    category: 'Romantic Escapes',
    description: 'Dine under the starry tropical night sky right on golden beach sand. Illuminated by flickering torchlight with private server and wave acoustic serenades.',
    image: food6,
    iconName: 'Flame',
    specialties: ['5-Course Private Tasting Menu', 'Champagne Pairing', 'Private Beach Lounge Setup']
  },
  {
    id: 'chefs-table-experience',
    title: 'Exclusive Chef’s Table & Cooking Masterclass',
    category: 'VIP Dining',
    description: 'An intimate 8-seat culinary journey guided by Executive Chef Bandara inside our state-of-the-art show kitchen. Learn the secrets of spice grinding and wine pairing.',
    image: food7,
    iconName: 'Award',
    specialties: ['Interactive Cooking Station', 'Spice Grinding Workshop', 'Sommelier Wine Tasting']
  }
];

export const RESORT_STATS = [
  { value: '30', label: 'Bespoke Sanctuaries', sub: 'Sea & Garden Vistas' },
  { value: '100%', label: 'Organic Ayurvedic', sub: 'BAMS Doctor Guided' },
  { value: '5', label: 'Accessible Suites', sub: 'With Caregiver Service' },
  { value: '5★', label: 'Oceanfront Luxury', sub: 'Mirissa Coast, Sri Lanka' }
];

export const TESTIMONIALS = [
  {
    quote: 'AYU BO PARADISE completely transformed my health. The combination of oceanfront luxury, daily Shirodhara treatments, and tailored seafood dining was absolute perfection.',
    author: 'Lady Eleanor Vance',
    location: 'London, United Kingdom',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'As a wheelchair user, traveling in luxury can be challenging. AYU BO PARADISE’s Accessible Ocean Suite and their highly skilled caregiver service made our stay effortless and deeply dignified.',
    author: 'Dr. Marcus Thorne',
    location: 'Zurich, Switzerland',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'The Chef’s Table experience and beachside lobster dinners under the stars were unforgettable. Authentic Sri Lankan hospitality at its highest pinnacle.',
    author: 'Sophia & Liam Dubois',
    location: 'Paris, France',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];
