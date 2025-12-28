import { Product } from './types';

// Image pools for different categories to ensure variety
const IMAGES = {
  Mobiles: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', // Sleek dark
    'https://images.unsplash.com/photo-1592750436467-98c04d5b958d?q=80&w=800&auto=format&fit=crop', // White/clean
    'https://images.unsplash.com/photo-1598327105666-5b89351aff70?q=80&w=800&auto=format&fit=crop', // Dark modern
    'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=800&auto=format&fit=crop', // Colorful
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop', // Hand holding
  ],
  Audio: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', // Over ear
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', // TWS buds
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop', // Dark headphones
    'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?q=80&w=800&auto=format&fit=crop', // White buds
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop', // Studio style
  ],
  TV: [
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop', // Wall mount
    'https://images.unsplash.com/photo-1552975084-6e027cd345c2?q=80&w=800&auto=format&fit=crop', // Living room
    'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=800&auto=format&fit=crop', // Angled
    'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=800&auto=format&fit=crop', // Gaming setup
  ],
  Smartwatches: [
    'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop', // Round face
    'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop', // Square face
    'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop', // Classic
    'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?q=80&w=800&auto=format&fit=crop', // Sport
  ],
  Accessories: [
    'https://images.unsplash.com/photo-1625772452859-1c03d5bf7f2f?q=80&w=800&auto=format&fit=crop', // Powerbank
    'https://images.unsplash.com/photo-1587829741301-dc798b91a603?q=80&w=800&auto=format&fit=crop', // Keyboard
    'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop', // Mouse
    'https://images.unsplash.com/photo-1586215622370-cc339571e169?q=80&w=800&auto=format&fit=crop', // Charger
    'https://images.unsplash.com/photo-1588872657578-95d2b474133c?q=80&w=800&auto=format&fit=crop', // Cables
  ]
};

const BASE_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Indus Edge 5G',
    manufacturer: 'Noida Tech Park Unit 4',
    category: 'Mobiles',
    description: 'A premium 5G smartphone assembled in Uttar Pradesh. Features a stunning 6.7" OLED display, 108MP Sony sensor, and the latest Dimensity chipset. Fully BIS certified with local warranty.',
    specs: ['12GB RAM', '256GB Storage', '120Hz OLED', '67W Turbo Charge'],
    price: 18999,
    marketPrice: 32999,
    imageUrl: IMAGES.Mobiles[0],
    verified: true,
    breakdown: {
      manufacturing: 14500,
      logistics: 250,
      tax: 3420,
      platformFee: 829,
      retailMarkup: 14000,
    },
  },
  {
    id: 'p2',
    name: 'Aura Studio ANC',
    manufacturer: 'Gurugram Audio Labs',
    category: 'Audio',
    description: 'Studio-grade over-ear headphones with 45dB Active Noise Cancellation. Tuned by Indian audiophiles for deep bass and clear vocals. 40-hour battery life.',
    specs: ['45dB ANC', '50h Playtime', 'Transparency Mode', 'Multipoint Connect'],
    price: 2499,
    marketPrice: 6999,
    imageUrl: IMAGES.Audio[0],
    verified: true,
    currentBatchCount: 120,
    minBatchSize: 200,
    breakdown: {
      manufacturing: 1600,
      logistics: 100,
      tax: 450,
      platformFee: 349,
      retailMarkup: 4500,
    },
  },
  {
    id: 'p3',
    name: 'Vision 65" QLED Pro',
    manufacturer: 'Chennai Panel Factory',
    category: 'TV',
    description: 'Experience cinematic visuals with this 65-inch QLED TV. Manufactured in Chennai with a Samsung-grade panel. Supports Dolby Vision and Atmos.',
    specs: ['4K QLED', 'Dolby Vision IQ', '40W Soundbar', 'Google TV'],
    price: 38999,
    marketPrice: 65000,
    imageUrl: IMAGES.TV[0],
    verified: true,
    breakdown: {
      manufacturing: 28000,
      logistics: 2000,
      tax: 7020,
      platformFee: 1979,
      retailMarkup: 26000,
    },
  },
  {
    id: 'p4',
    name: 'Titanium X Watch',
    manufacturer: 'Bengaluru Wearables',
    category: 'Smartwatches',
    description: 'Rugged smartwatch with titanium alloy casing. Built for Indian outdoors with accurate GPS mapping and SpO2 tracking.',
    specs: ['1.9" AMOLED', 'GPS + GLONASS', '10ATM Waterproof', '15-Day Battery'],
    price: 3499,
    marketPrice: 8999,
    imageUrl: IMAGES.Smartwatches[0],
    verified: true,
    currentBatchCount: 450,
    minBatchSize: 500,
    breakdown: {
      manufacturing: 2100,
      logistics: 80,
      tax: 630,
      platformFee: 689,
      retailMarkup: 5500,
    },
  },
  {
    id: 'p5',
    name: 'GigaPower 100W Bank',
    manufacturer: 'Pune Battery Solutions',
    category: 'Accessories',
    description: 'The ultimate power bank for laptops and phones. 27000mAh capacity with 100W PD output. Airline safe and BIS certified.',
    specs: ['27000mAh', '100W PD Output', 'Dual USB-C', 'Digital Display'],
    price: 2999,
    marketPrice: 5999,
    imageUrl: IMAGES.Accessories[0],
    verified: true,
    breakdown: {
      manufacturing: 1800,
      logistics: 100,
      tax: 540,
      platformFee: 559,
      retailMarkup: 3000,
    },
  },
  {
    id: 'p6',
    name: 'Zenith Mech Keyboard',
    manufacturer: 'Manesar Peripherals',
    category: 'Accessories',
    description: 'Hot-swappable mechanical keyboard with custom Indian-made switches. RGB backlight and PBT keycaps.',
    specs: ['Red Switches', 'Hot-Swappable', 'RGB', 'Aluminum Frame'],
    price: 2199,
    marketPrice: 4500,
    imageUrl: IMAGES.Accessories[1],
    verified: true,
    breakdown: {
      manufacturing: 1200,
      logistics: 150,
      tax: 396,
      platformFee: 453,
      retailMarkup: 2300,
    },
  },
];

// Helper to generate variations to reach ~30 products
const generateProducts = () => {
  const products: Product[] = [...BASE_PRODUCTS];
  const variations = ['Pro', 'Max', 'Lite', 'Ultra', 'S'];
  
  BASE_PRODUCTS.forEach((base, index) => {
    // Get the specific image pool for this category
    const categoryImages = IMAGES[base.category as keyof typeof IMAGES] || [];

    variations.forEach((suffix, vIndex) => {
      // Don't create too many variations for every product
      if (vIndex > 3) return; 

      // Select a unique image from the pool, looping if we run out
      const distinctImage = categoryImages[(vIndex + 1) % categoryImages.length] || base.imageUrl;

      const priceMultiplier = suffix === 'Lite' ? 0.8 : (suffix === 'Pro' ? 1.2 : (suffix === 'Max' ? 1.4 : 1.1));
      const newPrice = Math.floor(base.price * priceMultiplier / 100) * 100 + 99;
      const newMarketPrice = Math.floor(base.marketPrice * priceMultiplier / 100) * 100 + 99;
      
      products.push({
        ...base,
        id: `${base.id}_${suffix}_${vIndex}`,
        name: `${base.name.replace(' 5G', '').replace(' Pro', '')} ${suffix}`,
        price: newPrice,
        marketPrice: newMarketPrice,
        imageUrl: distinctImage, // Apply unique image
        description: `${base.description} This is the ${suffix} edition with enhanced features and a unique design.`,
        breakdown: {
          manufacturing: Math.floor(base.breakdown.manufacturing * priceMultiplier),
          logistics: base.breakdown.logistics,
          tax: Math.floor(base.breakdown.tax * priceMultiplier),
          platformFee: Math.floor(base.breakdown.platformFee * priceMultiplier),
          retailMarkup: Math.floor((base.breakdown.retailMarkup || 0) * priceMultiplier),
        }
      });
    });
  });

  return products;
};

export const MOCK_PRODUCTS = generateProducts();
export const CATEGORIES = ['All', 'Mobiles', 'Audio', 'TV', 'Smartwatches', 'Accessories'];