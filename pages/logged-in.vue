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
          You are logged in...
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>