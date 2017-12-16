import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyC4YAEGTACrwmhiUasTGcegJSOXsC6tPr0",
    authDomain: "csur-59867.firebaseapp.com",
    databaseURL: "https://csur-59867.firebaseio.com",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookprovider = new firebase.auth.FacebookAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;