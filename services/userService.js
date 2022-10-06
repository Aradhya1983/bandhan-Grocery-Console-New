// const firestore = require('firebase/firestore')
// const db = require('../Firebase/firebase-config.js')

// //collection ref
// const colRef = firestore.collection(db, 'bandhan_users')

// let userService = {}
// userService.getUser = getUser;

// module.exports = userService ;

// //fetch logged in user
// async function getUser(userId, email){
//     let user=[]
//     const q = firestore.query(colRef, firestore.where("user_id", "==", userId), firestore.where("user_email", "==", email));
//     let snapshot = await firestore.getDocs(q)
//     snapshot.docs.forEach((doc)=>{
//         user.push({...doc.data()})
//     })
//     return user;
// }
