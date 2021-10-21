<template>
  <section>
      <h2>Explore</h2>
      <div class="explore__wrapper">
        <div class="explore__itemWrapper"  v-for="thumb in thumbnails" :key="thumb.id">
          <router-link class="explore__item" v-if="thumb.tag == 'anime'" :to="'/anime/' + thumb.anime">
            <img class="explore__img" :src="thumb.icon" alt="">
            <h3 class="explore__title">{{ thumb.abbr }}</h3>
          </router-link>
          <router-link class="explore__item" v-if="thumb.tag == 'character'" :to="'/' + thumb.anime + '/' + thumb.character">
            <img class="explore__img" :src="thumb.icon" alt="">
            <h3 class="explore__title">{{ thumb.abbr }}</h3>
          </router-link>
          </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['thumbnails']

}
</script>

<style>

</style>