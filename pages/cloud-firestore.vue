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
          <v-btn outline @click="addCollection" color="#4285F4">Tambah Message</v-btn>
        </div>
        {{result}}
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
      result: [],
      db: ''
    }
  },
  mounted(){
      this.db = firebase.firestore();
      this.db.collection("message").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            this.result.push(doc.data())
        });
      });
  },
  methods: {
      addCollection () {
        let info = firebase.auth().currentUser
        this.db = firebase.firestore();
        this.db.collection("message").add({
            message: "kali ini punya borul",
            user: info.email
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      }
  }
}
</script>