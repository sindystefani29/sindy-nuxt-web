<template>
<div class="auth0">
  <v-container>
    <v-layout
      row
      justify-center
      align-center
    >
      <v-flex xs12 sm6>
        <div class="auth0--box">
          Authenticating...
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
import AuthService from "../utils/authService";
const { handleAuthentication } = AuthService;
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted(){
    handleAuthentication()
    if(handleAuthentication){
      this.$router.push({path: '/logged-in'})
    }
  }
}
</script>