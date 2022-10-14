<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in $props.products" :key="product.id" class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="product.thumbnail" :alt="product.description" class="h-full w-full object-cover object-center lg:h-full lg:w-full" loading="lazy" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link :to="{ name: 'Product', params: { id: product.id } }">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </router-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500" v-if="product.brand">{{ product.brand }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900" v-if="product.price">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ products: { type: Array, default: [] } })

// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: '$35',
//     color: 'Black',
//   },
//   // More products...
// ]
</script>