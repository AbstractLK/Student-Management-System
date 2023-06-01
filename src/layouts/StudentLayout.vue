<script>
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi mdi-monitor-dashboard" title="Dashboard" value="Dashboard" to="/student/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-message-text" title="Messages" value="Messages" to="/student/messages"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-notebook-edit-outline" title="Reports" value="Reports" to="/student/reports"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Classes" value="Classes" to="/student/classes"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px">
        <router-view/>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>
