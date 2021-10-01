<template>
  <section>
    <h1>This is the Anime page</h1>
    <router-link :to="'/anime/' + thumb.name" v-for="thumb in thumbnails" :key="thumb.id">
      <img :src="thumb.icon" :alt="'Link to ' + thumb.name">
    </router-link>
  </section>
</template>

<script>

export default {
  data() {
    return {
      api: 'https://toksan-wi-default-rtdb.firebaseio.com/thumbnails.json?orderBy="tag"&startAt="a"&endAt="b"',
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
    await fetch(this.api)
     .then(res => res.json())
     .then(data => this.thumbnails = data)
    }
  }
}
</script>

<style>

</style>