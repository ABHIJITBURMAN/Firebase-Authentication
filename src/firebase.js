import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBK1dC3G-eBWqfW1flESrGoOjkBtHDnFqc",
    authDomain: "auth-development-9b894.firebaseapp.com",
    projectId: "auth-development-9b894",
    storageBucket: "auth-development-9b894.appspot.com",
    messagingSenderId: "68142194351",
    appId: "1:68142194351:web:09668fb387771114c27e5a"
})


export const auth = app.auth()
export default app;