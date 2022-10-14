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
import Footer from './layout/Footer.vue';
</script>