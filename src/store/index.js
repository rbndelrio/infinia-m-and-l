import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // User login and browser state
    user: {
      lang: 'en-US',
      currency: 'USD',
      loggedIn: false,
      name: '',
    },

    // Product data cache
    product: {/* [id]: { data: ...jsonData } */},

    // Product Cart
    cart: {
      status: null,
      items: [/* { id: 0, qty: 1 } */],
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

  mutations: {
    /**
     * Cart
     */
    setCartItem: (state, payload = {}) => {
      let idx = state.cart.items.findIndex(item => item.id === payload.id)
      if (idx) state.cart.items[idx] = payload
      else state.cart.items.push({ id: null, qty: 1, ...payload})
    },
    setCartItems: (state, { items = [] }) => {
      state.cart.items = items
    },
    setCartStatus: (state, status = null) => {
      state.cart.status = status
    }
  },

  actions: {
    /**
     * Cart
     */
    addToCart: ({ commit, state }, payload) => {
      commit('addCartItem', payload)
    },
    async checkout ({ commit, state }, products) {
      const savedCartItems = [...state.items]
      commit('setCartStatus', null)
      // empty cart
      commit('setCartItems', { items: [] })
      try {
        await new Promise(res => setTimeout(res, 500))
        commit('setCartStatus', 'successful')
      } catch (e) {
        console.error(e)
        commit('setCartStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    },
  },
});

export { store as default };
