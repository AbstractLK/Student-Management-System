<script>
import login from "@/services/AuthService";

export default {
  name: "Login",
  components: {},
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
     async loginAct() {
       const payload = {email: this.email, pass: this.password};
       await login(payload);
     }
  }
}
</script>

<template>
  <v-container>
    <v-sheet class="pt-12" rounded >
      <v-card elevation="12" rounded="lg" class="mx-auto pa-12 pt-8 " max-width="450" >
        <div class="mb-10 text-center" style="color: #525252; ">
          <h2>Student Management System </h2>
          <h5>Sign in to Continue</h5>
        </div>

        <v-form
        >
          <v-text-field
            v-model="email"
            class="mb-2"
            clearable
            label="Email"
            variant="outlined"
          ></v-text-field>

          <v-text-field
            v-model="password"
            variant="outlined"
            type="password"
            clearable
            label="Password"
            placeholder="Enter your password"
          ></v-text-field>

          <v-btn variant="plain" size="small" class="mb-4 text-none" to="/auth/reset">
            <span class="text-amber-darken-4 ">Forget password?</span>
          </v-btn>

          <br>

          <v-btn
            block
            color="green-darken-1"
            size="large"
            type="submit"
            variant="elevated"
            @click="loginAct"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<style scoped>

</style>
