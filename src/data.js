// This will be used for global constants

export const COLLECTIONS = {
  mens: {
    slug: 'mens',
    name: "Men's",
    categories: [
      'mens-shirts',
      'mens-shoes',
      'mens-watches',
      'tops',
    ],
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  womens: {
    slug: 'womens',
    name: "Women's",
    categories: [
      'womens-dresses',
      'womens-shoes',
      'womens-watches',
      'womens-bags',
      'womens-jewellery',
      'tops'
    ],
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  accessories: {
    slug: 'accessories',
    name: "Accessories",
    categories: [
      'smartphones',
      'laptops',
      'fragrances',
      'skincare',
      'groceries',
      'home-decoration',
      'furniture',
      'sunglasses',
      'automotive',
      'motorcycle',
      'lighting',
    ],
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
}

export const CATEGORIES = {
  'tops': { name: 'Tops', collections: ['mens', 'womens'] },

  'mens-shirts': { name: 'Men\'s shirts', collections: ['mens'] },
  'mens-shoes': { name: 'Men\'s shoes', collections: ['mens'] },
  'mens-watches': { name: 'Men\'s watches', collections: ['mens'] },

  'womens-dresses': { name: 'Women\'s dresses', collections: ['womens']},
  'womens-shoes': { name: 'Women\'s shoes', collections: ['womens'] },
  'womens-watches': { name: 'Women\'s watches', collections: ['womens']},
  'womens-bags': { name: 'Women\'s bags', collections: ['womens']},
  'womens-jewellery': { name: 'Women\'s jewellery', collections: ['womens'] },

  'smartphones': { name: 'Smartphones', collections: ['accessories'] },
  'laptops': { name: 'Laptops', collections: ['accessories'] },
  'fragrances': { name: 'Fragrances', collections: ['accessories'] },
  'skincare': { name: 'Skincare', collections: ['accessories'] },
  'groceries': { name: 'Groceries', collections: ['accessories'] },
  'home-decoration': { name: 'Home decoration', collections: ['accessories'] },
  'furniture': { name: 'Furniture', collections: ['accessories'] },
  'sunglasses': { name: 'Sunglasses', collections: ['accessories'] },
  'automotive': { name: 'Automotive', collections: ['accessories'] },
  'motorcycle': { name: 'Motorcycle', collections: ['accessories'] },
  'lighting': { name: 'Lighting', collections: ['accessories'] },
}