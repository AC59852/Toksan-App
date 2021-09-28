<template>
  <header id="header">
    <nav class="bottomNav">
      <ul class="navList">
        <li class="navItem">
          <router-link to="/"><q-icon name="fas fa-home" alt="Link to Home Page"/></router-link>
        </li>
        <li class="navItem">
          <router-link to="/anime"><q-icon name="fas fa-desktop" alt="Link to Anime Page"/></router-link>
        </li>
        <li class="navItem">
          <router-link to="/manga"><q-icon name="fas fa-book" alt="Link to Manga Page"/></router-link>
        </li>
        <li class="navItem">
          <router-link to="/search"><q-icon name="fas fa-search" alt="Link to Search Page"/></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
})
</script>
