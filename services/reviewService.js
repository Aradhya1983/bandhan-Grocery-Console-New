// const firestore = require('firebase/firestore')
// const db = require('../Firebase/firebase-config.js')

// //collection ref
// const colRef = firestore.collection(db, 'bandhan_reviews')

// let reviewsService = {}
// reviewsService.getAllReviews = getAllReviews

// module.exports = reviewsService ;

// //collection data
// async function getAllReviews(){
//     let reviews=[]
//     let snapshot = await firestore.getDocs(colRef)
//     snapshot.docs.forEach((doc)=>{
//         reviews.push({...doc.data()})
//     })
//     return reviews;
// }
