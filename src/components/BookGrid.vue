<template>
  <v-container class="mt-5" grid-list-md>
    <template v-if="showError">
    <v-layout row wrap >
      <v-flex v-for="(items) in result.books.items" :key="items.id" xs12 sm6 mb-3>
        <v-card height="275px" width="500px">
          <v-container >
          <v-layout>
            <v-flex xs4>
              <template v-if="items.volumeInfo.imageLinks">
                <img :src="items.volumeInfo.imageLinks.thumbnail" >
              </template>
              <template v-else>
                <v-img src='https://via.placeholder.com/150?text=No+Image'></v-img>
              </template>
            </v-flex>
            <v-flex xs8>
              <v-card-title primary-title class="pa-0">
                <div class="volInfo">
                  <div class="title text-sm-left font-weight-bold">
                    {{items.volumeInfo.title}}
                  </div>
                  <div class="subheading text-sm-left">
                    <p class="author" v-for="key in Object.keys(items.volumeInfo)" :key="key">
                      <template v-if="key === 'authors'">
                        <span v-for="author in items.volumeInfo.authors" :key="author" >
                          {{author}}&nbsp;
                        </span>
                      </template>
                      <template v-if="key === 'publisher'">
                         <span class="text-sm-left">{{'Published by '+ items.volumeInfo.publisher}}</span>
                      </template>
                    </p>
                    </div>
                </div>
                <div>
                  <v-btn class="green lighten-1 white--text" :href="items.volumeInfo.previewLink" target="_blank">See This Book</v-btn>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </template>
    <template v-else>
      <v-icon color="green">{{icon}}</v-icon>
      <h2 class="green-text lighten-1">{{error}}</h2>
    </template>
  </v-container>
</template>
<script>
export default {
  props: {
    result: Object,
    error: String,
    showError: Boolean,
    icon: String
  },
  data () {
    return {
      data: ''
    }
  }
}
</script>
<style scoped>
.volInfo{
  height: 160px;
}
.author{
  margin-bottom: 0;
}
</style>
