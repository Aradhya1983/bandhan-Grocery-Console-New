const express = require("express")
const router = express.Router();
const storeService = require('../services/storeService.js')

let storeControl = []
storeControl.getAllStores = getAllStores
storeControl.addStore = addStore
module.exports = storeControl;

//fetch all stores
async function getAllStores(){
    let stores = await storeService.getAllStores()
    return stores
}

async function addStore(params){
    console.log("Controll")
    let stores = await storeService.addStore(params)
    return stores
}