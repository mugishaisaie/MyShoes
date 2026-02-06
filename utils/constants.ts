// utils/constants.ts

export const SHOE_SIZES = [
  '35', '36', '37', '38', '39', '40',
  '41', '42', '43', '44', '45', '46',
];

export const KIDS_SIZES = [
  '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
];

export const PRICE_RANGES = [
  { label: 'Under 30,000 RWF', min: 0, max: 30000 },
  { label: '30,000 - 60,000 RWF', min: 30000, max: 60000 },
  { label: '60,000 - 100,000 RWF', min: 60000, max: 100000 },
  { label: 'Over 100,000 RWF', min: 100000, max: Infinity },
];

export const GENDERS = [
  { label: 'Men', value: 'men' },
  { label: 'Women', value: 'women' },
  { label: 'Kids', value: 'kids' },
  { label: 'Unisex', value: 'unisex' },
];

export const TAGS = [
  { label: 'New', value: 'new' },
  { label: 'Sale', value: 'sale' },
  { label: 'Popular', value: 'popular' },
];

export const SORT_OPTIONS = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Popularity', value: 'popularity' },
];
