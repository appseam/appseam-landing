import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConf = {
    apiKey: "AIzaSyBTDYd5GBaUVyokfqZUU9XezIT2umIG2_w",
    authDomain: "appseam-firebase.firebaseapp.com",
    projectId: "appseam-firebase",
    storageBucket: "appseam-firebase.appspot.com",
    messagingSenderId: "708729414928",
    appId: "1:708729414928:web:72af35522a8e788dd23195"
}

const firebaseApp = firebase.initializeApp(firebaseConf)

export default firebaseApp