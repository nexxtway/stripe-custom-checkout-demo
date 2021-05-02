import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const instance = firebase.initializeApp(firebaseConfig);

instance.analytics();

export default instance;
