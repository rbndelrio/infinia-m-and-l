<template>
  <nav class="space-x-3">
    <RouterLink
      v-for="link in LINKS"
      :to="link.to"
      :key="link.name"
    >{{ link.name }}</RouterLink>
  </nav>
</template>

<script setup>
const LINKS = [
  { to: { name: 'Home' }, name: 'Home' },
  { to: { name: 'Products' }, name: 'Products' },
  { to: { name: 'ProductPage', params: { id: 1 } }, name: 'Product' },
  { to: { name: 'Cart' }, name: 'Cart' },
  { to: { name: 'Checkout' }, name: 'Checkout' },
  { to: { name: 'Confirmation' }, name: 'Confirmation' },
  { to: "/asldkfjasflkj", name: '404' },
]
</script>