<script>
export default {
  name: "Titles",
  props:{
    title:null,
    subtitle:null
  }
}
</script>

<template>
  <h1 class="ma-5">{{title}}</h1>
  <h2 class="mx-5">{{subtitle}}</h2>
</template>

<style scoped>

</style>
