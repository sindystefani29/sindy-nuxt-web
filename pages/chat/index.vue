<template>
    <div>
        <!-- here is authentication for chat-->
    </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
export default {
  mounted () {
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          let info = firebase.auth().currentUser
          localStorage.setItem("email", info.email)
          this.$router.push({path: '/chat/container'})
        }else{
          this.$router.push({path: '/chat/login'})
        }
      })
  }
}
</script>