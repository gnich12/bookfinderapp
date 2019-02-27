<template>
  <v-app>
    <v-content>
      <v-container>
        <book-finder title="BOOK FINDER"></book-finder>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import BookFinder from './components/BookFinder.vue'
export default {
  name: 'app',
  components: {
    BookFinder
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white
}
</style>
