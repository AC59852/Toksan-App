<template>
  <section class="timeline">
    <span class="timeline__year" @click="displayInfo(year.id)" v-for="year in currentTab" :key="year.id">{{ year.year }}</span>
    <div class="timeline__events">
      <div class="timeline__event" v-for="event in currentYear" :key="event.id">
        <p class="timeline__details">{{ event.details }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: ["currentTab"],

    data() {
      return {
        currentYear: null
      }
    },

    mounted() {
      this.currentYear = this.currentTab[0].events
    },

    methods: {
      displayInfo(yearId) {
        console.log(yearId)
        this.currentYear = this.currentTab.find(year => year.id === yearId).events
      }
    }
}
</script>

<style>

</style>