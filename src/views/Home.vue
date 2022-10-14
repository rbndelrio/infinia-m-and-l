<template>
  <div>
    <Hero :collections="collections">
      <i class="font-serif font-extralight">M&L</i>

      <template slot="subtitle">
        <p>by Infinia</p>
      </template>
    </Hero>

    <Trending :products="trendingProducts" />
  </div>
</template>

<script setup>
import Hero from '../components/home/Hero.vue';
import Trending from '../components/home/Trending.vue';
import { COLLECTIONS } from '../data';

const collections = [COLLECTIONS.mens, COLLECTIONS.womens, COLLECTIONS.accessories]

const trendingProducts = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  {
    id: 2,
    name: 'Another Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
]
</script>