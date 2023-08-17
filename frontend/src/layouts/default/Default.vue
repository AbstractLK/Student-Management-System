<template>
  <v-app>
    <default-bar />
    <default-view />
    <MyFooter />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import MyFooter from "@/layouts/default/MyFooter.vue";
</script>
