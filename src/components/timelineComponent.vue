<template>
  <section class="timeline">
    <div class="timeline__yearWrapper">
      <span class="timeline__year" @click="displayInfo(year.id, $event)" v-for="year in currentTab" :key="year.id">{{ year.year }}</span>
    </div>
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

      // add class "active" to the first year
      this.$el.querySelector(".timeline__year").classList.add("active")
    },

    methods: {
      displayInfo(yearId, e) {
        console.log(yearId)
        this.currentYear = this.currentTab.find(year => year.id === yearId).events

        const selected = e.target

        const timelineYears = document.querySelectorAll(".timeline__year")
        timelineYears.forEach(year => {
          if (year === selected) { year.classList.add("active") } 
          else { year.classList.remove("active") }
        })
      }
    }
}
</script>

<style>

</style>