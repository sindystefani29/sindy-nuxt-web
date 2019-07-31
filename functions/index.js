const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const { Nuxt } = require('nuxt')

const app = express()

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/'
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  nuxt.renderRoute('/').then(result => {
    res.send(result.html)
  }).catch(e => {
    res.send(e)
  })
}
app.get('*', handleRequest)
exports.nuxtApp = functions.https.onRequest(app)

//function for chat
admin.initializeApp()

exports.onMessageCreate = functions.firestore
  .document('messages/{userId}')
  .onCreate((snap, context) => {
    // Check if limit is reached
    const newValue = snap.data();
    console.log(newValue);
    const ref = admin.firestore().collection('messages').orderBy('timestamp');

    ref.onSnapshot(snapshot => {
      i = 0;
      size = snapshot.size;
      sizeToDelete = size - 10;
      console.log('Messages Count: ' + size);
            
      snapshot.forEach((doc) => {
        if (i < sizeToDelete) {
          doc.ref.delete().then(()=>{
            console.log("Document successfully deleted");
          }).catch((error) => {
            console.log("Error removing document: ", error);
          });
        }
        i++;  
      });
    });
  });