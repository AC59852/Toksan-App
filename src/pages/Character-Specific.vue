<template>
  <section id="character" class="character">
    <div class="character__hero">
      <div class="character__heroImgCon" :style="{ backgroundImage: 'url(' + content.imgs.hero_img + ')' }">
      </div>
      <img class="character__profileImg" :src="content.imgs.profile_img" :alt="'Profile Image for ' + content.full_name">
      <div class="character__nameContainer">
        <h2 v-resize-text="{ratio: content.firstName_FR}" class="character__name character__name--first">
          {{ content.first_name }}
        </h2>
        <h2 v-resize-text="{ratio: content.lastName_FR}" class="character__name character__name--last">
          {{ content.last_name }}
        </h2>
      </div>
    </div>
    <section class="character__basicContainer">
      <div v-for="basic in content.basic_info" :key="basic.id" class="character__basic">
        <h3 :class="'character__basicTitle character__' + basic.title">{{ basic.title }}</h3>
        <span class="character__value">{{ basic.value }}</span>
      </div>
    </section>
    <section class="character__data">
      <div class="character__dataSelector">
        <button @click.prevent="testAdd($event)" class="character__btn active">timeline</button>
        <button @click.prevent="testAdd($event)" class="character__btn">relationships</button>
        <button @click.prevent="testAdd($event)" class="character__btn">key moments</button>
        <button @click.prevent="testAdd($event)" class="character__btn">skills</button>
        <button @click.prevent="testAdd($event)" class="character__btn">more</button>
      </div>
      <component :is="currentComponent" :currentTab="currentTab"></component>
    </section>
  </section>
</template>

<script>
import characterData from '../assets/wiki.json'
import timelineComponent from 'components/timelineComponent.vue'
import relationshipsComponent from 'components/relationshipsComponent.vue'
import keyMomentsComponent from 'components/keyMomentsComponent.vue'
import skillsComponent from 'components/skillsComponent.vue'
import moreComponent from 'components/moreComponent.vue'
import VueResizeText from 'vue3-resize-text'

export default {
    name: "character",

    directives: {
      ResizeText: VueResizeText.ResizeText
    },

    data() {
      return {
        content: {},
        currentTab: {},
        currentComponent: 'timelineComponent', 
      }
    },

    created() {
      this.apiPopulate(
        this.$route.params.name,
        this.$route.params.character
      )

      this.currentTab = this.content.details['timeline']

      console.log(this.currentComponent)
      console.log(this.$route.params)
    },

    mounted() {
      if(this.content.firstName_FR >= 0.59) {
        document.querySelector(".character__name--first").style.marginTop = "30px"
      }
    },

    methods: {
      async apiPopulate(route, character) {
        this.content = characterData.anime[route].characters[character]
      },

      testAdd(e) {
        const newData = e.target.textContent
        this.currentTab = this.content.details[newData]
        console.log(this.currentTab)

        // if newData = key moments remove space between words and set currentComponent to result
        if (newData === 'key moments') {
          this.currentComponent = 'keyMomentsComponent'
        } else { this.currentComponent = newData + 'Component'}

        document.querySelectorAll(".character__dataSelector button").forEach(btn => {
          if(btn == e.target) {
            btn.classList.add("active")
          } else { btn.classList.remove("active") }
        })
      }
    },

    components: {
      'timelineComponent': timelineComponent,
      'relationshipsComponent': relationshipsComponent,
      'keyMomentsComponent': keyMomentsComponent,
      'skillsComponent': skillsComponent,
      'moreComponent': moreComponent,
    }
}
</script>

<style>

</style>