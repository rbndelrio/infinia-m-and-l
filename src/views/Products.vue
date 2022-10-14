<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900">{{ title || '' }}</h1>
      <transition>
        <Grid :products="filteredProducts" />
      </transition>
    </div>
  </div>
</template>

<script>
import { CATEGORIES, COLLECTIONS } from '../data';

const ALL_CATEGORIES = Object.keys(CATEGORIES)
const collectionCats = (key = '') =>  COLLECTIONS[key].categories

import Grid from '../components/products/Grid.vue';
export default {
  components: {
    Grid
  },
  beforeMount() {
    // const ctx = this
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    productList() { return this.$store.state.page.products?.data },

    // FIXME: Should be a vuex getter
    productData() { return this.productList?.map(id => this.$store.state.product[id]?.data) },

    routeCollection() { return this.$route.params.collection },
    categories() { return this.routeCollection ? collectionCats(this.routeCollection) : [] },
    routeQuery() { return this.$route.query.s || '' },
    title() {
      switch (this.$route.name) {
        case 'Products': return 'Products';
        case 'ProductCollection': return (COLLECTIONS[this.routeCollection]?.name || '') + ' Collection';
        default: return ''
      }
    },

    filteredProducts() {
      return this.productData
        // Remove missing content just in case
        .filter(Boolean)

        // Category filter
        .filter(product => this.categories.length
          ? this.categories.includes(product.category)
          : true
        )

        // Search filter
        .filter(({ title, description, brand }) => this.routeQuery
          ? `${title} ${brand} ${description}`.toLowerCase().includes(this.routeQuery.toLowerCase())
          : true
        )
    }
  },
}
</script>