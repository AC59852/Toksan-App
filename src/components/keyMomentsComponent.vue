<template>
  <section class="moments">
    <div class="moments__data">
      <div class="moments__info" v-for="info in currentMoments" :key="info.id">
        <img v-if="info.img" :src="info.img" :alt="'Image of ' + info.title" class="moments__img">
        <h2 class="moments__title">{{ info.title }}</h2>
        <p v-for="para in info.details" :key="para.id" class="moments__details">{{ para.content }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    props: ["currentTab"],

    data() {
      return {
        currentMoments: {}
      }
    },

    mounted() {
      this.currentMoments = this.currentTab
      console.log(this.currentMoments)
    },

    methods: {
      displayInfo(charId, e) {
        this.currentMoments = this.currentTab.find(char => char.id === charId)
        console.log(this.currentMoments)

        const selected = e.target

        const relationChars = document.querySelectorAll(".moments__char")
        relationChars.forEach(char => {
          if (char === selected) { char.classList.add("active") } 
          else { char.classList.remove("active") }
        })
      }
    }
}
</script>

<style>

</style>