<template>
  <section class="skills">
    <div class="skills__data" v-if="currentSkills.length != 0">
      <div class="skills__wrapper" v-for="info in currentSkills" :key="info.id">
        <h2 class="skills__title">{{ info.title }}</h2>
        <div class="skills__info">
          <p v-for="para in info.details" :key="para.id" class="skills__details">{{ para.content }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>This is the skills component</h1>
    </div>
  </section>
</template>
<script>
export default {
    props: ["currentTab"],

    data() {
      return {
        currentSkills: {}
      }
    },

    mounted() {
      this.currentSkills = this.currentTab
      console.log(this.currentSkills)
    },

    methods: {
      displayInfo(charId, e) {
        this.currentSkills = this.currentTab.find(char => char.id === charId)
        console.log(this.currentSkills)

        const selected = e.target

        const relationChars = document.querySelectorAll(".skills__char")
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