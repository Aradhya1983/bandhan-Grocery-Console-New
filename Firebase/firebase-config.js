const firebaseApp = require('firebase/app')
const firebaseAuth = require('firebase/auth')
const firestore = require('firebase/firestore')


// import { initializeApp } from 'firebase/app';
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDTQfM-_uRNF_StRmC5u_YRH56YxE-02YI',
  authDomain: 'bandhangrocery.firebaseapp.com',
  databaseURL: 'https://bandhangrocery.firebaseio.com',
  projectId: 'bandhangrocery',
  storageBucket: 'bandhangrocery.appspot.com',
  messagingSenderId: '721987419214',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

let app = firebaseApp.initializeApp(firebaseConfig);
const auth=firebaseAuth.getAuth(app);
const db = firestore.getFirestore(app)
module.exports = db
// console.log(db);