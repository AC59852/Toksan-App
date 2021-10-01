<template>
  <Header />
  <router-view class="wrapper" />
</template>

<script>
import Header from 'components/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header
  },

  setup () {
  }
})
</script>
