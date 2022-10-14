<template>
  <div>
    <transition>
      <Grid :products="productList" />
    </transition>
  </div>
</template>

<script>

import Grid from '../components/products/Grid.vue';
export default {
  components: {
    Grid
  },
  beforeMount() {
    const ctx = this
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    productsCache() { console.log('products!', this.$store.state.product); return this.$store.state.product },
    productList() { return this.$store.state.page.products?.data }
  },
}
</script>