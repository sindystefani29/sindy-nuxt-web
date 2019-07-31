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
          <v-btn outline fab @click="addCollection" color="#4285F4"><v-icon>fab fa-google</v-icon></v-btn>
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
      result: '',
      db: ''
    }
  },
  mounted(){
      this.db = firebase.firestore();
      this.db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            this.result = doc.data()
        });
      });
  },
  methods: {
      addCollection () {
        this.db = firebase.firestore();
        this.db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
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