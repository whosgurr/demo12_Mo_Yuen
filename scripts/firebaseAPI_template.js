//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDVbd7hzbveqaUwWWSmZfYiVhzw-REAYPo",
    authDomain: "fir-comp1800-bacee.firebaseapp.com",
    projectId: "fir-comp1800-bacee",
    storageBucket: "fir-comp1800-bacee.appspot.com",
    messagingSenderId: "686285816274",
    appId: "1:686285816274:web:2c27dec315ac68f77f080b"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();