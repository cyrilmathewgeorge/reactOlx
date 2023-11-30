import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1HXosVMlx3ydswiPmfdylZnoCHGGrmWE",
    authDomain: "olxreact-91e8c.firebaseapp.com",
    projectId: "olxreact-91e8c",
    storageBucket: "olxreact-91e8c.appspot.com",
    messagingSenderId: "670719435604",
    appId: "1:670719435604:web:3f8ddd7555e689e3f39ec1",
    measurementId: "G-ZPMLXHJ5R6"
};


export default firebase.initializeApp(firebaseConfig)