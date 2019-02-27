import Vue from 'vue'
import Vuex from 'vuex'
import bookapi from './bookapi'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    bookapi
  }
})
