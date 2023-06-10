import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEfp-raM8Qqc_Al8xFRNgwqVyu2suT8HY",
    authDomain: "tech-incubator-new.firebaseapp.com",
    projectId: "tech-incubator-new",
    storageBucket: "tech-incubator-new.appspot.com",
    messagingSenderId: "822233257343",
    appId: "1:822233257343:web:03394d13533340f1ecb64a",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
