<script >

  export default {
    name:"TutorLayout",
    data () {
      return {
        tab: null,
      }
    },
    methods:{
      route(){
      }
    }
  }
</script>

<template>
<!--  <v-card>-->
<!--    <v-toolbar color="primary">-->
<!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

<!--      <v-toolbar-title >Teacher Dashboard</v-toolbar-title>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn icon>-->
<!--        <v-icon>mdi-magnify</v-icon>-->
<!--      </v-btn>-->

<!--      <v-btn icon>-->
<!--        <v-icon>mdi-dots-vertical</v-icon>-->
<!--      </v-btn>-->

<!--      <template v-slot:extension>-->
<!--        <v-tabs-->
<!--          v-model="tab"-->
<!--          align-tabs="title"-->
<!--        >-->
<!--          <v-tab to="/tutor">Dashboard</v-tab>-->
<!--          <v-tab to="/tutor/classes">Classes</v-tab>-->
<!--          <v-tab to="/tutor/calender">Calender</v-tab>-->
<!--          <v-tab to="/tutor/students">Students</v-tab>-->
<!--          <v-tab to="/tutor/messages">Messages</v-tab>-->
<!--          <v-tab to="/tutor/reports">Reports</v-tab>-->
<!--        </v-tabs>-->
<!--      </template>-->
<!--    </v-toolbar>-->

<!--    <v-window v-model="tab">-->
<!--      <v-window-item-->
<!--        v-for="item in 5"-->
<!--        :key="item"-->
<!--        :value="item"-->
<!--      >-->
<!--        <v-card >-->
<!--          <router-view></router-view>-->
<!--        </v-card>-->
<!--      </v-window-item>-->
<!--    </v-window>-->
<!--  </v-card>-->

  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        class="bg-blue-grey"
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
          <v-list-item prepend-icon="mdi mdi-monitor-dashboard" title="Dashboard" value="Dashboard" to="/tutor/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-message-text" title="Messages" value="Messages" to="/tutor/messages"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-notebook-edit-outline" title="Reports" value="Reports" to="/tutor/reports"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Classes" value="Classes" to="/tutor/classes"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Students" value="Students" to="/tutor/students"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Calender" value="Calender" to="/tutor/calender"></v-list-item>
          <v-list-item prepend-icon="mdi mdi-logout" title="Logout" value="Logout" to="/auth/"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main >
        <router-view/>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style>
</style>
