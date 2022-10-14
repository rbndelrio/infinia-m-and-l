<template>
  <div class="bg-white">
    <div class="pt-6">
      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <div
          class="hidden overflow-hidden rounded-lg lg:block aspect-w-1 aspect-h-1"
        >
          <img
            :src="mainImage"
            class="h-full w-full object-cover object-center"
            v-if="mainImage"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-2 lg:gap-y-8">
          <div
            class="hidden overflow-hidden rounded-lg lg:block aspect-w-4 aspect-h-3"
            v-for="(image, i) in otherImages"
            v-if="otherImages && otherImages.length"
            :key="image"
          >
            <img
              :src="image"
              :alt="`Photo #${i}`"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <!-- Product info -->
      <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-lg font-medium tracking-tight text-gray-600 sm:text-xl">{{ product.brand }}</h1>
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.title }}</h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">${{ product.price }}</p>

          <button @click="addToCart(product.id)" class="flex mt-4 items-center justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Add to Cart</button>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { return { productData: {} } },
  created() {
    const ctx = this
    this.$store.dispatch('fetchProduct', this.$route.params.id)
      .then((data) => { ctx.productData = data })
  },
  computed: {
    product() {
      return this.productData || this.$store.state.product?.[~~this.$route.params.id]?.data || {}
    },
    mainImage() { return this.product.images?.[0] },
    otherImages() { return this.product.images?.slice(1) },
    inCart() { return !!this.$store.state.cart.items.find(({ id }) => id === ~~this.$route.params.id) }
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id)
    }
  }
}
</script>