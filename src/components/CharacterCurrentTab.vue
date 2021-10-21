<template>
  <h1 v-for="dataBtns in currentTab" :key="dataBtns.id">{{ dataBtns }}</h1>
</template>

<script>
export default {
    props: ["currentTab"]
}
</script>

<style>

</style>