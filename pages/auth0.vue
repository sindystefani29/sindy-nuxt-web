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
          <h3 class="mb-2">Login</h3>
          <v-text-field 
            label="Username" 
            v-model="username"
          />
          <v-text-field 
            label="Password" 
            v-model="password"
            type="password"
          />
        </div>
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
