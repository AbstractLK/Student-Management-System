<script>
//const apiURL = "localhost:3000/auth"
import axios from 'axios'
import router from "@/router";

export default {
    name: "Registration",
  components: {},
    data: () => ({
        tab: null,
        terms: false,

        user: {
          name: '',
          email:"",
          pass: '',
          age: null,
          address:'',
          contact:null,
          role:""
        }

    }),
  methods:{
     async callRestAPI(role) {
       this.user.role = role;
       // console.log(this.user);
       await axios.post('http://localhost:3001/auth/registration', this.user)
         .then( response => {
           console.log(response.data);
           if (response.data) {
             alert("Registration successfully");
           } else
             alert("Already registered");

         })
         .catch(error => {
           console.error(error+'');
           // Handle error response
         });
       //location.reload();
       await router.push('/tutor/students');
     }

  }
}
</script>

<template>

  <v-app-bar flat title=" " class="bg-blue-grey-lighten-3 mb-10">
    <h1 class="ml-16 pl-4">Create Account</h1>
    <v-spacer></v-spacer>
    <v-btn
      class="text-none"
      color="medium-emphasis"
      min-width="92"
      rounded
      variant="outlined"
      to="/auth"
    >
      Login
    </v-btn>
  </v-app-bar>

  <div class="bg-blue-grey pa-1 mb-10">
    <div class="text-center">
      <span>It's quick and easy.</span>
    </div>
  </div>



  <v-card>
    <v-sheet max-width="500px" class="mx-auto">
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        fixed-tabs
        >
        <v-tab value="one">Student</v-tab>
        <v-tab value="two">Teacher</v-tab>
      </v-tabs>
    </v-sheet>
    <v-window v-model="tab" >
      <v-container  class="mx-auto my-16">
        <v-window-item value="one">
          <v-card
            elevation="5"
            rounded="lg"
            class="mx-auto px-10 pt-5"
            max-width="480"
          >
            <div class="py-4 text-center text-h6">Student Registration</div>
            <v-container >
              <v-text-field
                v-model="user.name"
                color="primary"
                label="Name"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.email"
                color="primary"
                label="Email"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.pass"
                color="primary"
                label="Password"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.age"
                color="primary"
                label="Age"
                placeholder="Enter your password"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.address"
                color="primary"
                label="Address"
                placeholder="Enter your password"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.contact"
                color="primary"
                label="Contact"
                placeholder="Enter your password"
                variant="underlined"
              ></v-text-field>

              <v-checkbox
                v-model="terms"
                color="secondary"
                label="I agree to site terms and conditions"
              ></v-checkbox>

            <v-divider></v-divider>

            <v-card-actions >
              <v-spacer></v-spacer>

              <v-btn @click="callRestAPI('student')" color="success">
                Complete Registration

                <v-icon icon="mdi-chevron-right" end></v-icon>
              </v-btn>
            </v-card-actions>
            </v-container>
          </v-card>
        </v-window-item>

        <v-window-item value="two">
          <v-card
            elevation="5"
            rounded="lg"
            class="mx-auto px-10 pt-5"
            max-width="480"
          >
            <div class="py-4 text-center text-h6">Teacher Registration</div>
            <v-container >
              <v-text-field
                v-model="user.name"
                color="primary"
                label="Name"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.pass"
                color="primary"
                label="Password"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.age"
                color="primary"
                label="Age"
                placeholder="Enter your password"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.address"
                color="primary"
                label="Address"
                placeholder="Enter your password"
                variant="underlined"
              ></v-text-field>

              <v-text-field
                v-model="user.contact"
                color="primary"
                label="Contact"
                placeholder="Enter your password"
                variant="underlined"
              ></v-text-field>

              <v-checkbox
                v-model="terms"
                color="secondary"
                label="I agree to site terms and conditions"
              ></v-checkbox>

              <v-divider></v-divider>

              <v-card-actions >
                <v-spacer></v-spacer>

                <v-btn color="success">
                  Complete Registration

                  <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-window-item>
      </v-container>
    </v-window>
  </v-card>
</template>

<style scoped>

</style>
