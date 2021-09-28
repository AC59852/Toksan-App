<template>
  <section>
      {{ content.title }}
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
        }
    }
}
</script>

<style>

</style>