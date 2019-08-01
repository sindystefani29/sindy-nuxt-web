<template>
    <div class="chat-login mt-5">
        <v-flex xs12 sm6 class="ma-auto chat--box">
            <h2>Welcome</h2>
            <v-flex xs12 class="chat-login--button mt-3">
                <v-btn @click="facebookSignIn">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" class="mr-2 svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg>
                    <span>Login with Facebook</span>
                </v-btn>
                <v-btn @click="googleSignIn">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-g" class="mr-2 svg-inline--fa fa-google-plus-g fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path></svg>
                    <span>Login with Google</span>
                </v-btn>
            </v-flex>
        </v-flex>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            provider: ''
        }
    },
    created () {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                let info = firebase.auth().currentUser
                localStorage.setItem("email", info.email)
                this.$router.push({path: '/chat/container'})
            }
        })
    },
    methods : {
        googleSignIn () {
            this.provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(this.provider).then(result => {
                this.$router.push({path: '/chat/container'})
            }).catch(e => {
                console.log(e)
            })
        },
        facebookSignIn () {
            this.provider = new firebase.auth.FacebookAuthProvider()
            firebase.auth().signInWithPopup(this.provider).then(result => {
                this.$router.push({path: '/chat/container'})
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
</script>