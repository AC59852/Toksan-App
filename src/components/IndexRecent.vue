<template>
  <section class="recent">
    <h2>Recently Added</h2>
    <div class="recent__wrapper">
      <div class="recent__itemWrapper" v-for="recent in recents.slice().reverse().slice(0,8)" :key="recent.id">
        <router-link class="recent__item" v-if="recent.tag == 'anime'" :to="'/anime/' + recent.anime">
          <img class="recent__img" :src="recent.icon" alt="">
          <h3 class="recent__title">{{ recent.abbr }}</h3>
        </router-link>
        <router-link class="recent__item" v-if="recent.tag == 'character'" :to="'/' + recent.anime + '/' + recent.character">
          <img class="recent__img" :src="recent.icon" alt="">
          <h3 class="recent__title">{{ recent.abbr }}</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: ['recents']
}
</script>

<style>

</style>