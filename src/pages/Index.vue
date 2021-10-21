<template>
  <section id="home">
    <div class="logoCon">
      <img class="logo" src="~/assets/icons/toksan_wiki-logo.svg" alt="">
    </div>
    <IndexExplore class="explore" :thumbnails="thumbnails" />
    <IndexRecent class="recent" :recents="apiLocal.thumbnails" />
  </section>
</template>

<script>
import json from '../assets/wiki.json'
import IndexExplore from 'components/IndexExplore.vue'
import IndexRecent from 'components/IndexRecent.vue'
export default {
  name: "Home",
  
  data() {
    return {
      api: 'https://toksan-wi-default-rtdb.firebaseio.com/thumbnails.json',
      apiLocal: json,
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
      const res = this.apiLocal.thumbnails.slice()
      await this.shuffleArray(res)
    },

    shuffleArray(data) {
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
      this.thumbnails = data.slice(0, 8)
    }
  },

  components: {
    IndexExplore,
    IndexRecent
  }
}
</script>

<style>

</style>