<template>
  <section id="animeSpecific" :class="'animeSpecific animeSpecific_' + content.abbr" :style="{ background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${content.bck}')`}">
    <div class="animeSpecific_logoCon">
        <img class="animeSpecific_logo" :src="content.logo" :alt="content.title + ' Logo'">
    </div>
    <div class="animeSpecific_btnCon">
        <router-link class="animeSpecific_btn" :to=" '/' + this.$route.params.name + '/characters'">Characters</router-link>
        <router-link class="animeSpecific_btn" to="/">Episodes</router-link>
    </div>
    <section class="animeSpecific_card">
        <div class="animeSpecific_textWrapper">
            <p class="animeSpecific_text" v-for="para in content.landing_info" :key="para.id">{{ para.content }}</p>
        </div>
    </section>
  </section>
</template>

<script>
export default {

    data() {
        return {
            api: 'https://toksan-wi-default-rtdb.firebaseio.com/anime/',
            content: {}
        }
    },

    created() {
        this.getContent(this.$route.params.name)
    },

    beforeRouteUpdate(to, from, next) {
        this.getContent(to.params.name)
        next()
    },

    methods: {
        getContent(name) {
            fetch(this.api + name + '.json')
              .then(res => res.json())
              .then(data => this.content = data)
              .then(data => console.log(data))
        }
    }
}
</script>

<style>

</style>