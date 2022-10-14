<template>
  <div>
    <transition>
      <Grid :products="filteredProducts" />
    </transition>
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
    const ctx = this
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    productList() { return this.$store.state.page.products?.data },

    // FIXME: Should be a vuex getter
    productData() { return this.productList?.map(id => this.$store.state.product[id]?.data) },

    routeCollection() { return this.$route.params.collection },
    categories() { return this.routeCollection ? collectionCats(this.routeCollection) : [] },
    routeQuery() { return this.$route.query.s || '' },

    filteredProducts() {
      return this.productData
        .filter(Boolean)
        .filter(product => this.categories.length
          ? this.categories.includes(product.category)
          : true
        )
        .filter(({ title, description, brand }) => this.routeQuery
          ? `${title} ${brand} ${description}`.toLowerCase().includes(this.routeQuery.toLowerCase())
          : true
        )
    }
  },
}
</script>