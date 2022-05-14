import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SecretKey from "./Secret"
import * as firebase from 'firebase'
import 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: SecretKey.FIREBASE_API_KEY,
  authDomain: SecretKey.FIREBASE_ATUH_DOMAIN,
  projectId: SecretKey.FIREBASE_PROJECT_ID ,
  storageBucket: SecretKey.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: SecretKey.FIREBASE_MESSAGING_SENDER_ID,
  appId: SecretKey.FIREBASE_APP_ID 
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
