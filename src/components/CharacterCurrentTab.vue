<template>
  <h2 v-for="dataBtns in currentTab" :key="dataBtns.id">{{ dataBtns }}</h2>
</template>

<script>
export default {
    props: ["currentTab"]
}
</script>

<style>

</style>