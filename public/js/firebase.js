const firebaseConfig = {
    apiKey: "AIzaSyDJE4LjMmLonQ-XZL8QYrn4ECKSMqaVdOk",
    authDomain: "itirod-proj.firebaseapp.com",
    projectId: "itirod-proj",
    storageBucket: "itirod-proj.appspot.com",
    messagingSenderId: "525717536343",
    appId: "1:525717536343:web:be1545287307734e68ed12"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
