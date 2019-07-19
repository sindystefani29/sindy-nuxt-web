<template>
<div class="auth0">
  <v-container>
    <v-layout
      row
      justify-center
      align-center
    >
      <v-flex xs12 sm6>
        <h3>Redirecting to Auth0 Login...</h3>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
import AuthService from "../utils/authService";
const { login } = AuthService;

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    login()
  }
}
</script>
