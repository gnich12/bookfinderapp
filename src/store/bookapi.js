import axios from 'axios'
import config from '../../config.js'

const APIKEY = config.GOOGLE_API_KEY // 'AIzaSyCYXQaI1f3e7WnlVReYy8871nAvDMB06qQ'

const state = {
  books: ''
}
const mutations = {
  setData (state, payload) {
    state.books = payload
  },
  resetData (state) {
    state.books = ''
  }
}
const getters = {
  getBooks (state) {
    return state.books
  }
}
const actions = {
  queryApi ({ commit }, payload) {
    var url =
      'https://www.googleapis.com/books/v1/volumes?q=' +
      payload +
      '&key=' +
      APIKEY
    commit('resetData')
    axios.get(url).then(response => {
      commit('setData', response.data)
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
