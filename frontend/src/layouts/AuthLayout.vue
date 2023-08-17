<script>

import MyFooter from "@/layouts/default/MyFooter.vue";

export default {
  components: {MyFooter}
}
</script>

<template>
  <v-layout>
    <v-main >
      <router-view style="height: 75vh" />
      <MyFooter />
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>
