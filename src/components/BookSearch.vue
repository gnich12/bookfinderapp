<template>
  <div class="col-12">
    <q-search
      v-model="bookquery"
      :debounce="600"
      placeholder="Search by book title or author"
      icon="book"
      class="searchbar justify-center"
    >
    </q-search>
    <q-btn label="search" color="secondary" @click="callApi"></q-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bookquery: ''
    }
  },
  methods: {
    callApi () {
      this.$store.dispatch('queryApi', this.bookquery)
    }
  }
}
</script>
<style scoped>
.searchbar {
  width: 500px;
}
</style>
