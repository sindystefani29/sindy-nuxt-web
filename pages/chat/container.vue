<template>
    <div>
        <!-- here is authentication for chat-->
        {{result}}
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
  mounted() {
    this.db = firebase.firestore()
    this.db.collection("message")
    .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                this.result.push(change.doc.data())
            }
        })
    })
  }
}
</script>