const express = require("express")
const productService = require('../services/productService.js')

let productControl = []
productControl.getAllProducts = getAllProducts
productControl.addProduct = addProduct
productControl.addProductTypes = addProductTypes

module.exports = productControl;

//fetch all stores
async function getAllProducts(){
    let products = await productService.getAllProducts()
    return products
}
async function addProduct(params){
    if(params.item){
        let response = await productService.addProduct(params)
        return response;
    }
}
async function addProductTypes(params){
    if(params.item){
        let response = await productService.addProductTypes(params)
        return response;
    }
}