<template>
  <section class="anime">
      <div class="anime__wrapper">
        <div class="anime__itemWrapper"  v-for="thumb in animeThumbnails" :key="thumb.id">
          <router-link class="explore__item" :to="'/anime/' + thumb.anime">
            <img class="anime__img" :src="thumb.icon" alt="">
            <h3 class="anime__title">{{ thumb.abbr }}</h3>
          </router-link>
          </div>
        </div>
    </section>
</template>

<script>
import json from '../assets/wiki.json'
export default {
  data() {
    return {
      apiLocal: json,
      thumbnails: {}
    }
  },

  created() {
    this.thumbnails = this.apiLocal.thumbnails
  },

  computed: {
    animeThumbnails() {
      // return an array of thumbnails that have the tag 'anime'
      return this.apiLocal.thumbnails.filter(thumb => thumb.tag == 'anime')
    }
  }
}
</script>

<style>

</style>