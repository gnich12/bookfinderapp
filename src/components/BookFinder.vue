<template>
  <v-container>
    <v-layout align-center justify-center row>
      <v-flex xs12 sm6>
        <h1 class="green--text lighten-1">{{title}} <v-icon color="green">fas fa-book</v-icon></h1>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5" row>
      <v-flex xs10 offset-xs1 sm10>
        <v-text-field
        label="Search by book title or author..."
        v-model="bookquery"
        append-icon="fas fa-search"
        @click:append="callApi"
         color="green"
         @keyup.enter="callApi"
         hint="press enter or click search to submit query">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
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
