<template>
  <section class="relationship">
    <div class="relationship__charWrapper">
      <span class="relationship__char" @click="displayInfo(character.id, $event)" v-for="character in currentTab" :key="character.id">{{ character.character }}</span>
    </div>
    <div class="relationship__data">
      <div class="relationship__info" v-for="info in currentRelationship.content" :key="info.id">
        <img v-if="info.img" :src="info.img" :alt="'Image of ' + currentRelationship.character + `'s relationship with ` + this.$route.params.character" class="relationship__img">
        <p :class="{'has-img': info.img}" class="relationship__details">{{ info.details }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    props: ["currentTab"],

    data() {
      return {
        currentRelationship: {
          id: "",
          content: []
        }
      }
    },

    mounted() {
      console.log(this.currentTab)

      this.currentRelationship = this.currentTab[0]
      this.$el.querySelector(".relationship__char").classList.add("active")
    },

    methods: {
      displayInfo(charId, e) {
        this.currentRelationship = this.currentTab.find(char => char.id === charId)
        console.log(this.currentRelationship)

        const selected = e.target

        const relationChars = document.querySelectorAll(".relationship__char")
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