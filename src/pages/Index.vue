<template>
  <section id="home">
    <div class="logoCon">
      <img class="logo" src="~/assets/icons/toksan_wiki-logo.svg" alt="">
    </div>
    <section class="explore">
      <h2>Explore</h2>
      <div class="explore_wrapper">
        <div class="explore_itemWrapper"  v-for="thumb in thumbnails" :key="thumb.id">
        <router-link class="explore_item" v-if="thumb.tag == 'anime'" :to="'/anime/' + thumb.name">
          <img class="explore_img" :src="thumb.icon" alt="">
          <h3 class="explore_title">{{ thumb.abbr }}</h3>
        </router-link>
        <router-link class="explore_item" v-if="thumb.tag == 'character'" :to="'/characters/' + thumb.name">
          <img class="explore_img" :src="thumb.icon" alt="">
          <h3 class="explore_title">{{ thumb.abbr }}</h3>
        </router-link>
      </div>
      </div>
    </section>
  </section>
</template>

<script>
import json from '../assets/wiki.json'
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
      console.log(data)
      this.thumbnails = data.slice(0, 8)
    }
  }
}
</script>

<style>

</style>