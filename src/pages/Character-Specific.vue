<template>
  <section id="character" class="character">
    <img :src="content.imgs.profile_img" alt="">
    <div class="character__nameContainer">
      <h2 class="character_name">{{ content.first_name }}</h2>
      <h2 class="character_name">{{ content.last_name }}</h2>
    </div>
    <section class="character__basicContainer">
      <div v-for="basic in content.basic_info" :key="basic.id" class="character__basic">
        <h3 :class="'character__' + basic.title">{{ basic.title }}</h3>
        <span class="character__value">{{ basic.value }}</span>
      </div>
    </section>
    <section class="character__data">
      <div class="character__dataSelector">
        <button @click.prevent="testAdd($event)">timeline</button>
        <button @click.prevent="testAdd($event)">relationships</button>
        <button @click.prevent="testAdd($event)">key moments</button>
        <button @click.prevent="testAdd($event)">skills</button>
        <button @click.prevent="testAdd($event)">more</button>
      </div>
      <CharacterCurrentTab :currentTab="currentTab"/>
    </section>
  </section>
</template>

<script>
import CharacterCurrentTab from 'components/CharacterCurrentTab.vue'
import characterData from '../assets/wiki.json'
export default {
    name: "character",

    data() {
      return {
        content: {},
        currentTab: {}
      }
    },

    created() {
      this.apiPopulate(
        this.$route.params.name,
        this.$route.params.character
      )

      console.log(this.$route.params)
    },

    methods: {
      async apiPopulate(route, character) {
        this.content = characterData.anime[route].characters[character]
      },

      testAdd(e) {
        const newData = e.target.textContent
        this.currentTab = this.content.details[newData]
        console.log(this.currentTab)

        document.querySelectorAll(".character__dataSelector button").forEach(btn => {
          if(btn == e.target) {
            btn.classList.add("active")
          } else { 
            btn.classList.remove("active")
           }
        })
      }
    },

    components: {
      CharacterCurrentTab
    }
}
</script>

<style>

</style>