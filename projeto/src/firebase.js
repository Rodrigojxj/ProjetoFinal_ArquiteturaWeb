import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDtiAE_UdO0qbuIUBs-iKRhNV2lNz_oxLY",
    authDomain: "auth-development-21133.firebaseapp.com",
    projectId: "auth-development-21133",
    storageBucket: "auth-development-21133.appspot.com",
    messagingSenderId: "987340277258",
    appId: "1:987340277258:web:626a246fef052347f781f3"
})

export const auth = app.auth();

export default app;