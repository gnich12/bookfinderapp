<template>
  <v-container>
    <v-layout align-center row>
      <v-flex>
        <h1 class="green--text lighten-1">{{title}} <v-icon color="green">fas fa-book</v-icon></h1>
      </v-flex>
    </v-layout>
    <v-layout align-center fill-height row class="mt-5">
      <v-flex xs7 offset-xs2>
        <v-text-field
        label="Search by book title or author..."
        v-model="bookquery"></v-text-field>
      </v-flex>
      <v-flex xs1 offset-xs0>
        <v-btn class="green lighten-1 white--text" @click="callApi">Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center row>
      <v-flex>
        <book-grid :result="getQueryResults" :error="msg" :showError="error" :icon="emoji"></book-grid>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BookGrid from './BookGrid'
export default {
  name: 'BookFinder',
  props: {
    title: String
  },
  components: {
    BookGrid
  },
  data () {
    return {
      bookquery: '',
      queryData: '',
      msg: 'Waiting for your search term....',
      error: false,
      emoji: 'fas fa-smile'
    }
  },
  computed: {
    getQueryResults () {
      return this.$store.state.bookapi
    }
  },
  methods: {
    callApi () {
      if (this.bookquery !== '') {
        this.$store.dispatch('queryApi', this.bookquery)
        this.error = true
      } else {
        this.msg = 'Ups.. Try Again!'
        this.emoji = 'fas fa-exclamation-triangle'
        this.error = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbar {
  width: 500px;
  text-align: center;
}
</style>
