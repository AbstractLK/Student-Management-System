<script>
  export default {
    name:"MyFooter",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<template>
  <v-footer class="bg-blue-grey-lighten-3 d-flex flex-column justify-end text-center">
    <div >

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-blue-grey text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<style scoped>

</style>
