const firestore = require('firebase/firestore')
const db = require('../Firebase/firebase-config.js')

//collection ref
const colRef = firestore.collection(db, 'bandhan_stores')

let storeService = {}
storeService.getAllStores = getAllStores
storeService.addStore = addStore

module.exports= storeService;

//collection data
async function getAllStores(){
    let stores=[]
    let snapshot = await firestore.getDocs(colRef)
    snapshot.docs.forEach((doc)=>{
        stores.push({...doc.data()})
    })
    return stores;
}
async function addStore(params){
    try{
        // console.log("Success", params)
        params = params.item.Store
        // console.log(userId)
        // console.log("ADD",item)
        let coordinatesVar = {lat: params.coordinates.Latitude,
                              long: params.coordinates.Longitude}
                              
        const docRef = await firestore.addDoc(colRef, {
            average_reviews: params.average_reviews,
            business_address: params.business_address,
            collect_times: params.collect_times,
            coordinates: coordinatesVar,
            delivery_time: params.delivery_time,
            discount: params.discount,
            no_of_reviews: params.no_of_reviews,
            store_id: params.store_id,
            store_img: params.store_img,
            store_name: params.store_name
          });
          return {message: `Added Store successfully with ID: ${docRef.id}`}
    }catch (err) {
        console.log(err)
    }
}

