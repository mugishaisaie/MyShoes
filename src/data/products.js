// 12 sample Rwanda-friendly products
const products = [
  {
    id: 'p1',
    slug: 'kigali-runner-black',
    name: 'Kigali Runner',
    brand: 'RwandaFit',
    category: 'Running',
    gender: 'Unisex',
    priceRWF: 45000,
    oldPriceRWF: 55000,
    rating: 4.6,
    reviewCount: 124,
    stock: 20,
    sizes: [37, 38, 39, 40, 41, 42, 43],
    colors: ['Black', 'White'],
    images: [
      'https://picsum.photos/seed/shoe1/800/800',
      'https://picsum.photos/seed/shoe1b/800/800',
      'https://picsum.photos/seed/shoe1c/800/800'
    ],
    description: 'Comfortable everyday running shoe designed for urban runners in Rwanda.',
    features: ['Breathable mesh', 'Lightweight foam', 'Non-slip rubber sole'],
    isFeatured: true,
    createdAt: '2025-08-01T10:00:00.000Z'
  },
  {
    id: 'p2',
    slug: 'rwanda-walk-olive',
    name: 'Rwanda Walk',
    brand: 'Umwana',
    category: 'Casual',
    gender: 'Women',
    priceRWF: 30000,
    rating: 4.2,
    reviewCount: 56,
    stock: 35,
    sizes: [36, 37, 38, 39, 40, 41],
    colors: ['Olive', 'Beige'],
    images: [
      'https://picsum.photos/seed/shoe2/800/800',
      'https://picsum.photos/seed/shoe2b/800/800'
    ],
    description: 'Stylish casual shoe built for all-day comfort.',
    features: ['Soft insole', 'Stitched upper'],
    isFeatured: false,
    createdAt: '2025-06-15T09:00:00.000Z'
  },
  {
    id: 'p3',
    slug: 'musanze-lightweight-blue',
    name: 'Musanze Lightweight',
    brand: 'KigaliSteps',
    category: 'Running',
    gender: 'Men',
    priceRWF: 52000,
    oldPriceRWF: 60000,
    rating: 4.7,
    reviewCount: 88,
    stock: 12,
    sizes: [40, 41, 42, 43, 44],
    colors: ['Blue'],
    images: [
      'https://picsum.photos/seed/shoe3/800/800',
      'https://picsum.photos/seed/shoe3b/800/800'
    ],
    description: 'Performance shoe for serious runners.',
    features: ['Cushioned midsole', 'Reinforced heel'],
    isFeatured: true,
    createdAt: '2025-09-05T12:30:00.000Z'
  },
  {
    id: 'p4',
    slug: 'nyungwe-hiker-brown',
    name: 'Nyungwe Hiker',
    brand: 'RwFoot',
    category: 'Hiking',
    gender: 'Unisex',
    priceRWF: 70000,
    rating: 4.5,
    reviewCount: 40,
    stock: 8,
    sizes: [39, 40, 41, 42, 43, 44],
    colors: ['Brown', 'Green'],
    images: [
      'https://picsum.photos/seed/shoe4/800/800',
      'https://picsum.photos/seed/shoe4b/800/800',
      'https://picsum.photos/seed/shoe4c/800/800'
    ],
    description: 'Rugged hiking shoe with excellent grip for trails.',
    features: ['Water-resistant', 'Grip outsole'],
    isFeatured: false,
    createdAt: '2025-04-20T08:15:00.000Z'
  },
  {
    id: 'p5',
    slug: 'kibuye-slip-on-white',
    name: 'Kibuye Slip-On',
    brand: 'Umwana',
    category: 'Casual',
    gender: 'Men',
    priceRWF: 28000,
    rating: 4.0,
    reviewCount: 32,
    stock: 15,
    sizes: [39, 40, 41, 42],
    colors: ['White', 'Black'],
    images: [
      'https://picsum.photos/seed/shoe5/800/800'
    ],
    description: 'Easy slip-on for quick outings and comfort.',
    features: ['Elastic side panels', 'Cushioned sole'],
    isFeatured: false,
    createdAt: '2025-03-11T15:00:00.000Z'
  },
  {
    id: 'p6',
    slug: 'rubavu-sports-teal',
    name: 'Rubavu Sports',
    brand: 'RwandaFit',
    category: 'Sports',
    gender: 'Unisex',
    priceRWF: 48000,
    rating: 4.3,
    reviewCount: 22,
    stock: 25,
    sizes: [36,37,38,39,40,41,42],
    colors: ['Teal', 'Black'],
    images: [
      'https://picsum.photos/seed/shoe6/800/800',
      'https://picsum.photos/seed/shoe6b/800/800'
    ],
    description: 'Versatile sports shoe for gym and court.',
    features: ['Breathable upper', 'Durable outsole'],
    isFeatured: true,
    createdAt: '2025-07-01T10:00:00.000Z'
  },
  {
    id: 'p7',
    slug: 'gisenyi-kids-fun',
    name: 'Gisenyi Kids',
    brand: 'TinySteps',
    category: 'Kids',
    gender: 'Kids',
    priceRWF: 22000,
    rating: 4.1,
    reviewCount: 15,
    stock: 40,
    sizes: [28,29,30,31,32,33],
    colors: ['Red', 'Blue'],
    images: [
      'https://picsum.photos/seed/shoe7/800/800'
    ],
    description: 'Colorful and sturdy kids shoe.',
    features: ['Velcro strap', 'Flexible sole'],
    isFeatured: false,
    createdAt: '2025-02-10T07:20:00.000Z'
  },
  {
    id: 'p8',
    slug: 'akagera-dress-brown',
    name: 'Akagera Dress',
    brand: 'Eleganza',
    category: 'Formal',
    gender: 'Women',
    priceRWF: 65000,
    rating: 4.4,
    reviewCount: 18,
    stock: 6,
    sizes: [36,37,38,39,40],
    colors: ['Brown', 'Black'],
    images: [
      'https://picsum.photos/seed/shoe8/800/800',
      'https://picsum.photos/seed/shoe8b/800/800'
    ],
    description: 'Elegant formal shoe for events.',
    features: ['Leather upper', 'Padded insole'],
    isFeatured: false,
    createdAt: '2025-05-22T11:00:00.000Z'
  },
  {
    id: 'p9',
    slug: 'karongi-sandal-beach',
    name: 'Karongi Sandal',
    brand: 'BeachWalk',
    category: 'Sandals',
    gender: 'Unisex',
    priceRWF: 20000,
    rating: 3.9,
    reviewCount: 9,
    stock: 50,
    sizes: [36,37,38,39,40,41,42],
    colors: ['Tan'],
    images: [
      'https://picsum.photos/seed/shoe9/800/800'
    ],
    description: 'Lightweight beach sandal.',
    features: ['Quick-dry', 'Textured sole'],
    isFeatured: false,
    createdAt: '2025-01-15T09:40:00.000Z'
  },
  {
    id: 'p10',
    slug: 'kigali-premium-leather',
    name: 'Kigali Premium',
    brand: 'Eleganza',
    category: 'Formal',
    gender: 'Men',
    priceRWF: 90000,
    rating: 4.8,
    reviewCount: 60,
    stock: 5,
    sizes: [40,41,42,43,44],
    colors: ['Black'],
    images: [
      'https://picsum.photos/seed/shoe10/800/800',
      'https://picsum.photos/seed/shoe10b/800/800'
    ],
    description: 'Handcrafted leather shoe with premium finish.',
    features: ['Full-grain leather', 'Stitched sole'],
    isFeatured: true,
    createdAt: '2025-10-10T09:00:00.000Z'
  },
  {
    id: 'p11',
    slug: 'rwamagana-trainer-orange',
    name: 'Rwamagana Trainer',
    brand: 'KigaliSteps',
    category: 'Training',
    gender: 'Men',
    priceRWF: 53000,
    rating: 4.2,
    reviewCount: 23,
    stock: 18,
    sizes: [39,40,41,42,43],
    colors: ['Orange', 'Grey'],
    images: [
      'https://picsum.photos/seed/shoe11/800/800'
    ],
    description: 'Trainer built for cross-training and gym sessions.',
    features: ['Stable sole', 'Supportive arch'],
    isFeatured: false,
    createdAt: '2025-08-20T14:10:00.000Z'
  },
  {
    id: 'p12',
    slug: 'nyarugenge-slip-sport',
    name: 'Nyarugenge Slip Sport',
    brand: 'RwFoot',
    category: 'Casual',
    gender: 'Unisex',
    priceRWF: 26000,
    rating: 3.8,
    reviewCount: 10,
    stock: 30,
    sizes: [37,38,39,40,41],
    colors: ['Grey', 'Black'],
    images: [
      'https://picsum.photos/seed/shoe12/800/800'
    ],
    description: 'Affordable slip-on sports casual shoe.',
    features: ['Slip-on', 'Foam insole'],
    isFeatured: false,
    createdAt: '2025-06-02T10:00:00.000Z'
  }
]

export default products
