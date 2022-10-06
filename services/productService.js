const firestore = require('firebase/firestore')
const db = require('../Firebase/firebase-config.js')

//collection ref
const colRef = firestore.collection(db, 'bandhan_products')

let productService = {}
productService.getAllProducts = getAllProducts
productService.addProduct = addProduct
productService.addProductTypes = addProductTypes

module.exports = productService

//collection data
async function getAllProducts(){
    let stores=[]
    let snapshot = await firestore.getDocs(colRef)
    snapshot.docs.forEach((doc)=>{
        stores.push({...doc.data()})
    })
    return stores;
}

//add Prod Details
async function addProduct(params){
    params = params.item
    console.log("Success",)
    try{
        const docRef = await firestore.addDoc(colRef, {
            category: params.category,
            prod_code: params.prod_code,
            prod_discount: params.prod_discount,
            prod_id: params.prod_id,
            prod_img: params.prod_img,
            prod_name: params.prod_name,
            store_id: params.store_id,
            types: []
          });

        return {message: `Document written with ID: ${docRef.id}`}
    }catch (err) {
        console.log(err)
    }
}

//add cart Details
async function addProductTypes(params){
    // console.log("SuccessNew")
    params = params.item
      try {
        let currProd = [];
        const q = firestore.query(colRef, firestore.where("prod_code", "==", params.prod_code),
        firestore.where("prod_id", "==", params.prod_id),
        firestore.where("store_id", "==", params.store_id));
        let snapshot = await firestore.getDocs(q)
        snapshot.docs.forEach((doc)=>{
        currProd.push({...doc.data(), doc_id: doc.id})
        })
        let prodId = currProd[0].doc_id
        let typesNew = {
            price: params.type.price,
            qty: params.type.qty,
            size: params.type.size
        }
        const docRef = await firestore.updateDoc(firestore.doc(colRef, prodId), {
                types: firestore.arrayUnion(typesNew)
              }, {merge: true});
        return {message: `Added product type successfully with Doc ID: ${docRef.id}`}   
        } catch (err) {
            console.error(err);
        }
}

async function deleteProducts(){
    await firestore.deleteDoc(colRef);
}
