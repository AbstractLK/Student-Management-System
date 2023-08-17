<script>
//import login from '@/services/AuthService';
import axios from "axios";
import router from "@/router";


export default {
  name: "Login",

  data: () => ({

    credential: {
      email: '',
      pass:""
    }

  }),
  methods: {
    async logicAct() {
      await axios.post('http://localhost:3001/auth', this.credential)
        .then(async response => {
          //console.log(response);
          if (response.data=="Invalid Email or Password!") {
            alert(response.data);
          } else if (response.data=="All inputs are required!") {
            alert(response.data);
          }else {
            await this.addToCookie(response.data.accessToken);
            //console.log(response);
            // alert("Successfully login");
            if (response.data.role=="teacher") await router.push('/tutor');
            if (response.data.role=="student") await router.push('/student');
          }

        })
        .catch(error => {
          console.error(error + '');
        });

      // const payload = {email:this.email, pass:this.password};
      //console.log(this.credential);
    },

    addToCookie(jwtToken){
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + (1000));
      const cookieValue = `jwt=${jwtToken};
            HttpOnly;
            Secure;
            SameSite=Strict;
            Expires=${expirationTime.toUTCString()}`;
      document.cookie = cookieValue;
    }

  }


}
</script>

<template>
  <div class="mb-16">
    <v-container>
      <v-sheet class="pt-6" rounded >
        <v-card elevation="12" rounded="lg" class="mx-auto pa-12 pt-8 " max-width="450" >
          <div class="mb-12 text-center" style="color: #525252; ">
            <h2 class="text-blue-grey">Information Management System </h2>
            <h5>Sign in to Continue</h5>
          </div>

          <v-form
          >
            <v-text-field
              v-model="credential.email"
              density="comfortable"
              class="mb-2"
              clearable
              label="Email"
              variant="outlined"
            ></v-text-field>

            <v-text-field
              v-model="credential.pass"
              density="comfortable"
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
              color="blue-grey"
              size="large"
              variant="elevated"
              @click="logicAct"
            >
              Sign In
            </v-btn>
<!--            <div class="text-center">-->
<!--              <v-btn variant="plain" size="small" class="text-none mt-3" to="/auth/register">-->
<!--                <span class="text-black ">Create Account</span>-->
<!--              </v-btn>-->
<!--            </div>-->
          </v-form>
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>



<style scoped>

</style>
