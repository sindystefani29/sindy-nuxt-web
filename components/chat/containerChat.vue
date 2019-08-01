<template>
    <div class="chat-container">
        <v-flex xs12 sm6 class="ma-auto chat-container--height">
            <v-card
                color="white lighten-4"
                flat
                height="200px"
                tile
            >
                <v-toolbar dense>            
                    <v-toolbar-title>Chat Me</v-toolbar-title>
            
                    <v-spacer></v-spacer>
            
                    <v-btn icon dark @click="logout">
                        <v-icon>logout</v-icon>
                    </v-btn>
                </v-toolbar>
                <div class="chat-container--mt">
                    <div class="chat-container--box mt-2 mb-2" v-for="(chat, index) in result" :key="index">
                        <div class="chat-container--content" :class="{'chat-container--sender': getEmail == chat.user}">
                            {{chat.message}}
                        </div>
                    </div>
                </div>
                <v-toolbar class="nav-fixed">            
                    <v-input
                        append-icon="send"
                        @click:append="sendMessage()"
                        class="mt-3 mb-3 ma-auto"
                    >
                        <v-text-field
                            placeholder="Enter Message"
                            solo
                            v-model="chatContent"
                        >
                        </v-text-field>
                    </v-input>
                </v-toolbar>
            </v-card>
        </v-flex>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data () {
        return {
        result: [],
        db: '',
        chatContent: ''
        }
    },
    created () {
        firebase.auth().onAuthStateChanged((user) => {
            if(!user){
                this.$router.push({path: '/chat/login'})
            }
        })
    },
    computed:{
        getEmail () {
            return localStorage.getItem('email')
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
    },
    methods: {
        sendMessage() {
            let info = firebase.auth().currentUser
            this.db = firebase.firestore();
            this.db.collection("message").add({
                message: this.chatContent,
                user: info.email
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            this.chatContent = ''
        },
        logout () {
            firebase.auth().signOut().then(result => {
                alert("logout succesfuly")
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
</script>