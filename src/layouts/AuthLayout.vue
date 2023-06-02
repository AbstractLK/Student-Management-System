<script>

import MyFooter from "@/layouts/default/MyFooter.vue";

export default {
  components: {MyFooter}
}
</script>

<template>
  <v-layout>
    <v-main>
      <router-view  style="height: 91%"/>
      <MyFooter/>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>
