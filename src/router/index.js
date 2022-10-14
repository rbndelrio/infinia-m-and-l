import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Let's import TypeScript definitions for VS Code assistance
/** @ts-check */
/** @typedef { import('vue-router').RouteConfig } RouteConfig */
/** @type {RouteConfig[]} */
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue"),
    children: [
      {
        path: ':collection',
        name: "ProductCollection",
        component: () => import("../views/Products.vue"),
      }
    ]
  },
  {
    path: "/product",
    children: [
      {
        path: ':id',
        name: 'Product',
        children: [
          {
            path: '',
            name: 'ProductPage',
            component: () => import("../views/Product.vue"),
          }
        ]
      }
    ],

    // Redirect when no product is specified
    redirect: { name: 'Products' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import("../views/Cart.vue"),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import("../views/Checkout.vue"),
  },
  {
    path: '/thank-you',
    name: 'Confirmation',
    component: () => import("../views/Confirmation.vue"),
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
