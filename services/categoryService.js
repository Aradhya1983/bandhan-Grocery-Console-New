const firestore = require('firebase/firestore')
const db = require('../Firebase/firebase-config.js')

//collection ref
const colRef = firestore.collection(db, 'bandhan_categories')

let categoryService = {}
categoryService.getAllCategories = getAllCategories


module.exports = categoryService;

//collection data
async function getAllCategories(){
    let stores=[]
    let snapshot = await firestore.getDocs(colRef)
    snapshot.docs.forEach((doc)=>{
        stores.push({...doc.data()})
    })
    // console.log(stores)
    return stores;
}
