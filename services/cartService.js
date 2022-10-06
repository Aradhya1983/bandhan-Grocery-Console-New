const firestore = require('firebase/firestore')
const db = require('../Firebase/firebase-config.js')
const _ = require('underscore')
//collection ref
const colRef = firestore.collection(db, 'bandhan_cart')

let cartService = {}
cartService.getCart = getCart;
cartService.addToCart = addToCart
cartService.updateCart = updateCart
cartService.updateCartForExistingUser = updateCartForExistingUser


module.exports = cartService ;

//fetch cart details for logged in user
async function getCart(userId){
    let cart=[]
    const q = firestore.query(colRef, firestore.where("user_id", "==", userId));
    let snapshot = await firestore.getDocs(q)
    snapshot.docs.forEach((doc)=>{
        cart.push({...doc.data(), doc_id: doc.id})
    })
    return cart;
}

//add cart Details
async function addToCart(userId, item){
    console.log("Success")
    // console.log(userId)
    console.log("ADD",item)
    
    const docRef = await firestore.addDoc(colRef, {
        user_id: userId,
        products: item
      });
      console.log("Document written with ID: ", docRef.id);
}

//add cart Details
async function updateCart(userId, item, doc_id){
    console.log("Success")
    // console.log(userId)
    console.log("Serer", item)
    // const docRef = await firestore.updateDoc(firestore.doc(colRef, doc_id), {
    //     products: item
    //   }, {merge: true});
    //   console.log("Document written with ID: ", docRef);
      try {
        const response = firestore.query(colRef, firestore.where("user_id", "==", userId));
        let snapshot = await firestore.getDocs(response)
        // console.log(snapshot.docs)
        const batch = firestore.writeBatch(db);
        snapshot.docs.forEach((doc) => {
            let data = (doc.data());
            data.products.forEach((eachData, index, array) => {
                if(eachData.prod_id == item[0].prod_id && eachData.size == item[0].size){
                    eachData.orderQty = item[0].orderQty
                }
            })
            batch.update(doc.ref, {"products": data.products});
        });
        await batch.commit();  //Done
        } catch (err) {
            console.error(err);
        }
}

//add cart Details
async function updateCartForExistingUser(userId, item, doc_id){
    console.log("SuccessNew")
    // console.log(userId)
    console.log("SererNew", item)
      try {
        const response = firestore.query(colRef, firestore.where("user_id", "==", userId));
        // let snapshot = await firestore.getDocs(response)
        const docRef = await firestore.updateDoc(firestore.doc(colRef, doc_id), {
                products: firestore.arrayUnion(item[0])
              }, {merge: true});
        } catch (err) {
            console.error(err);
        }
}