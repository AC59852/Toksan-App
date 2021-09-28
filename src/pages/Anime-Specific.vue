<template>
  <section id="anime" :class="'anime' + content.abbr">
    <div class="anime_logoCon">
        <img class="anime_logo" :src="content.logo" :alt="content.title + ' Logo'">
    </div>
    <div class="anime_btnCon">
        <router-link class="anime_btn" :to=" '/' + this.$route.params.name + '/characters'">Characters</router-link>
        <router-link class="anime_btn" to="/">Episodes</router-link>
    </div>
    <section class="anime_card">
        <div class="anime_textWrapper">
            <p class="anime_text" v-for="para in content.landing_info" :key="para.id">{{ para.content }}</p>
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