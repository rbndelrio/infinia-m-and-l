import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // User login and browser state
    user: {
      lang: 'en-US',
      loggedIn: false,
      name: '',
    },

    // Product data cache
    product: {},

    // Product Cart
    cart: {
      currency: 'USD',
      products: [],
    },

    // Search + Filter state
    search: {
      query: '',
      filter: {
        price_max: null,
        price_min: null,
        rating_min: null,
        brand: [],
        category: [],
      },
    },

    // Page content cache
    page: {
      products: {
        order: [],
      },
    },
  },

  getters: {},

  mutations: {},

  actions: {},
});

export { store as default };
