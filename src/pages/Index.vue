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
          <h2 class="explore_title">{{ thumb.abbr }}</h2>
        </router-link>
        <router-link v-if="thumb.tag == 'character'" :to="'/characters/' + thumb.name">
          <img :src="thumb.icon" alt="">
        </router-link>
      </div>
      </div>
    </section>
  </section>
</template>

<script>

export default {
  name: "Home",
  
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