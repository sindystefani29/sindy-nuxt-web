<template>
    <div class="chat-container">
        <v-flex xs12 sm6 class="ma-auto chat-container--height">
            <v-toolbar dense>            
                    <v-toolbar-title>Chat Me</v-toolbar-title>
            
                    <v-spacer></v-spacer>
            
                    <v-btn icon dark @click="logout">
                        <v-icon>logout</v-icon>
                    </v-btn>
                </v-toolbar>
            <v-card
                color="white lighten-4"
                flat
                height="200px"
                tile
                id="getToBottom"
            >
                <div>
                    <div class="chat-container--box mt-2 mb-2" v-for="(chat, index) in result" :key="index">
                        <div class="chat-container--content" :class="{'chat-container--sender': getEmail == chat.user}">
                            {{chat.message}}
                        </div>
                    </div>
                </div>
            </v-card>
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
                            @keyup.enter="sendMessage()"
                        >
                        </v-text-field>
                    </v-input>
                </v-toolbar>
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
        this.db.collection("message").orderBy("timestamp")
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    this.result.push(change.doc.data())
                }
                this.toBottom()
            })
        })
    },
    methods: {
        toBottom(){
            let a = document.getElementById('getToBottom')
            let b = a.scrollHeight
            a.scrollTo(0, b)
        },
        sendMessage() {
            let info = firebase.auth().currentUser
            this.db = firebase.firestore();
            this.db.collection("message").add({
                message: this.chatContent,
                user: info.email,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then((docRef) => {
                this.toBottom()
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