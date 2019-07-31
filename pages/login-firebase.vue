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
          <v-btn outline @click="googleSignIn" color="#4285F4">Login Google</v-btn>
          <v-btn outline @click="facebookSignIn" color="#d71149">Login Facebook</v-btn>
          <v-btn outline @click="logout" color="#d71149">Logout</v-btn>
        </div>
        {{user}}
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
export default {
  data () {
    return {
      user: '',
      provider: ''
    }
  },
  methods: {
      googleSignIn () {
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          this.user = result.user
        }).catch(e => {
          console.log(e)
        })
      },
      facebookSignIn () {
        this.provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          this.user = result.user
        }).catch(e => {
          console.log(e)
        })
      },
      logout () {
        this.provider = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signOut().then(result => {
          alert("logout succesfuly")
        }).catch(e => {
          console.log(e)
        })
      }
  }
}
</script>