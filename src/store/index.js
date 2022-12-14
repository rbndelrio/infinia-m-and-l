import Vue from "vue";
import Vuex from "vuex";
import { $get } from '../api';

Vue.use(Vuex);

const defaultFilter = () => ({
  price_max: null,
  price_min: null,
  rating_min: null,
  brand: [],
  category: [],
})

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
        data: [],
      },
    },
  },

  getters: {
    /**
     * Cart
     */
    cartProducts: (state) => {
      return state.cart.items?.map?.(({ id, qty }) => {
        const product = state.product[id]?.data || {}
        return {
          ...product,
          // id: product.id,
          // title: product.title,
          // price: product.price,
          qty,
        }
      })
    },

    cartPrice: (_state, getters) => {
      const price = getters.cartProducts?.reduce?.((total, product) => {
        return total + product.price * product.qty
      }, 0)
      return price
    }
  },

  mutations: {
    /**
     * Product
     */
    setPartialProduct: (state, product) => {
      if (!product.id) return

      // Merge partial data if it already exists
      if (state.product[product.id]) {
        if (!state.product[product.id].partial) return

        state.product[product.id] = {
          ...state.product[product.id],
          data: {
            ...state.product[product.id].data,
            ...product,
          }
        }

      // Otherwise just set the data and mark it as partial
      } else {
        state.product[product.id] = {
          partial: true,
          data: product
        }
      }
    },
    setFullProduct: (state, product) => {
      if (!product.id) return false
      state.product[product.id] = {
        partial: false,
        data: product
      };
    },


    /**
     * Cart
     */
    setCartItem: (state, payload = {}) => {
      let idx = state.cart.items.findIndex(item => item.id === payload.id)
      if (idx > -1) state.cart.items[idx] = payload
      else state.cart.items.push({ id: null, qty: 1, ...payload})
    },
    setCartItems: (state, { items = [] }) => {
      state.cart.items = items
    },
    setCartStatus: (state, status = null) => {
      state.cart.status = status
    },


    /**
     * Search + Filter
     */
    setSearchQuery: (state, query = '') => {
      state.search.query = query || ''
    },
    setSearchFilters: (state, filters = {}) => {
      state.search.filter = {...defaultFilter(), ...filters}
    },


    /**
     * Search + Filter
     */
    setPageData: (state, { page, ...payload }) => {
      if (page && payload) state.page[page] = payload
    },
  },

  actions: {
    /**
     * Product
     */
    fetchProduct: async ({ commit, state }, id) => {
      console.log(id)
      // If it's not already cached
      if (!state.product[~~id] || !!state.product[~~id]?.partial) {
        const product = await $get(`products/${id}`)
        commit('setFullProduct', product)
      }

      return state.product[~~id]?.data || {}
    },
    fetchProducts: async ({ commit }, params) => {
      const response = await $get('products', params || { limit: 100 })
      if (response?.products && Array.isArray(response?.products)) {
        response.products.forEach(product => {
          commit('setPartialProduct', product)
        })

        if (!params) {
          commit('setPageData', {
            page: 'products',
            data: response.products.map(product => product.id)
          })
        }
      }
    },


    /**
     * Cart
     */
    addToCart: ({ commit, state }, productObjOrId) => {
      const product = Number.isInteger(productObjOrId)
        ? { id: productObjOrId, qty: 1 }
        : productObjOrId

      const item = state.cart.items.find(item => item.id === product.id)

      if (item) commit('setCartItem', {
        id: product.id,
        qty: item.qty + Math.min(product.qty, 1)
      })
      else commit('setCartItem', product)

      console.log('added to cart', product)
    },
    removeFromCart: ({ commit, state }, productObjOrId) => {
      const  product = Number.isInteger(productObjOrId)
        ? { id: productObjOrId, qty: 1 }
        : productObjOrId
      const cartItems = [...state.cart.items]
      commit('setCartItems', cartItems.filter(item => item.id !== product.id))

      console.log('removed from cart', cartItems)
    },
    async checkout ({ commit, state }, products) {
      const savedCartItems = [...state.cart.items]
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


    /**
     * Search + Filter
     */
    searchProducts: ({ commit }, { query = '', filter}) => {
      commit('setSearchQuery', query)
      if (filter) commit('setSearchFilter', filter)
    },
    filterProducts: (state, filters = {}) => {
      commit('setSearchFilter', filter)
    }
  },
});

export { store as default };
