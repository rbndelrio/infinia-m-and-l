<template>
  <main>
    <Navigation />
      <router-view class="w-full" />
    <Footer />
  </main>
</template>

<script setup>
import Footer from './layout/Footer.vue';
</script>