<template>
  <main>
    <Navigation />
    <transition>
      <router-view class="w-full pt-[70px]" />
    </transition>
    <transition appear>
      <Footer />
    </transition>
  </main>
</template>

<script setup>
import Navigation from './layout/Navigation.vue';

import Footer from './layout/Footer.vue';
</script>