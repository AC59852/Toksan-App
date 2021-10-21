<template>
  <section>
    <h1>This is the Anime page</h1>
    <router-link :to="'/anime/' + thumb.anime" v-for="thumb in thumbnails" :key="thumb.id">
      <img :src="thumb.icon" :alt="'Link to ' + thumb.anime">
    </router-link>
  </section>
</template>

<script>
import animeJson from '../assets/wiki.json'
export default {
  data() {
    return {
      api: 'https://toksan-wi-default-rtdb.firebaseio.com/thumbnails.json?orderBy="tag"&startAt="a"&endAt="b"',
      apiLocal: animeJson,
      thumbnails: {}
    }
  },

  created() {
    this.apiPopulate()
  },

  mounted() {
  },

  methods: {
    async apiPopulate() {
    console.log(this.apiLocal.thumbnails)
    const filteredArr = this.apiLocal.thumbnails;

    const result = filteredArr.filter(thumb => thumb.tag != 'character')

    this.thumbnails = result
    
    }
  }
}
</script>

<style>

</style>