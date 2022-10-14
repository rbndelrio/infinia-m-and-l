<template>
  <main>
    <Navigation />
    <transition>
      <router-view class="w-full" />
    </transition>
    <Footer />
  </main>
</template>

<script setup>
import Navigation from './layout/Navigation.vue';

import Footer from './layout/Footer.vue';
</script>