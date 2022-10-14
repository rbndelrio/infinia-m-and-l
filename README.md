# M&L, an Infinia company

Hosted on Vercel

## Pages
* [home page](https://m-and-l.vercel.app/)
* [products listing page](https://m-and-l.vercel.app/products)
* [product page](https://m-and-l.vercel.app/product/1)
* [cart](https://m-and-l.vercel.app/cart)
* [checkout form](https://m-and-l.vercel.app/checkout)
* [confirmation page](https://m-and-l.vercel.app/thank-you)

## Technical Notes

The release of Vue 2.7 came with a port of Vue 3's Composition API. It still has the same limitations as Vue 2 when it comes to object tracking but the ergonomics are just as wonderful. I'll use a mix of them to demonstrate that I have working knowledge of both.

**HOWEVER**, I couldn't use `@heroicons` or `@headlessui` due to incompatibility with Vue 2.

The Vuex store architecture is appropriate for the tiny scope of the app but any larger and I would split each piece into separate modules.

## Highlights

For deadline's sake, it wasn't possible to maintain consistently clean code but here's some notable bits:

* pinned node environments for CI and local development
* upgraded necessary dependencies (Vite and its vue plugin were outdated) and purged a few packages
* using typescript annotations via jsdoc comments in [`@/router/index.js](./src/router/index.js)
* When RouterLinks are used, prefer using the `:to="{ name, params }"` syntax instead of path matching
* folder structure for page sections (see [`@/components/home`](./src/components/home))
* occasional use of `<slot>`s
* all global state mutations happen through actions