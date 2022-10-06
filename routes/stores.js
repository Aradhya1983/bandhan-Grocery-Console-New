const express = require("express")
const router = express.Router();
const storeControl = require('../controllers/storeControl')

router.use((req,res,next)=>{
    next()
})
router.post("/getAllStores", getAllStores)
router.post("/addStore", addStore)

module.exports = router;

//fetch all stores
async function getAllStores(req,res){
    let stores = await storeControl.getAllStores()
    res.json(stores)
}

async function addStore(req,res){
    console.log(req.body)
    let stores = await storeControl.addStore(req.body)
    res.json(stores)
}