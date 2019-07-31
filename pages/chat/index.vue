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
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          let info = firebase.auth().currentUser
          localStorage.setItem("email", info.email)
        }else{
          console.log("your not login yet")
        }
      })
  }
}
</script>