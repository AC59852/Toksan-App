<template>
  <section>
      <div v-for="character in content" :key="character.id">
          <h2>{{ character.first_name }}</h2>
      </div>
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
            fetch(this.api + name + '/characters.json')
              .then(res => res.json())
              .then(data => this.content = data)
        }
    }
}
</script>

<style>

</style>