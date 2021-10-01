<template>
  <header id="header">
    <div class="headerCon">
      <div @click="goBack()" class="header_imgCon">
        <img src="~assets/icons/back_btn.svg" alt="Back to Previous Page">
      </div>
      <h1 v-if="this.$route.name !== ''">{{ this.$route.name }}</h1>
      <h1 v-if="this.$route.name == '' && this.$route.params.character == null">{{ this.$route.params.name }}</h1>
      <h1 v-if="this.$route.params.character !== '' || null || undefined">{{ this.$route.params.character }}</h1>
      <div @click="showNav()" class="header_imgCon">
        <img src="~assets/icons/nav_icon.svg" alt="Navigation Menu Icon">
      </div>
    </div>
    <nav class="nav">
      <span @click="hideNav()" class="close">X</span>
      <ul class="navList">
        <li class="navItem">
          <router-link @click="hideNav()" to="/">Home</router-link>
        </li>
        <li class="navItem">
          <router-link @click="hideNav()" to="/anime">Anime</router-link>
        </li>
        <li class="navItem">
          <router-link @click="hideNav()" to="/search">Search</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  methods: {
    showNav() {
      document.querySelector(".nav").classList.add("show")
    },

    hideNav() {
      document.querySelector(".nav").classList.remove("show")
    },

    goBack() {
      return this.$router.go(-1)
    }
  }
})
</script>
