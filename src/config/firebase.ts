import React from 'react'
import firebase from 'firebase';

require('dotenv/config');


// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase

const fire = firebase;

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTH,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.MESSAGING,
    appId: process.env.APPID
  };

fire.initializeApp(firebaseConfig);


export default fire;