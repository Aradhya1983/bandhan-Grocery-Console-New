const express = require("express")
const cartService = require('../services/cartService') 
const _ = require("underscore")

let cartControl = []
cartControl.getCart = getCart
cartControl.addToCart = addToCart
module.exports = cartControl;

//fetch all stores
async function getCart(userId){
   let carts = await cartService.getCart(userId)
   return carts
}

async function addToCart(userId, item){
    console.log(userId, item)
    let existsAlready = false;
    let existingCart = await getCart(userId);
    _.filter(existingCart, each=>{
        each.prod_id==item.prod_id && each.size==item.size
    })
    console.log(existingCart);
    let cartArray = []
    if (item.prod_code != undefined) {
        if (existingCart.length > 0) {
            existingCart = existingCart[0]
            if (userId == existingCart.user_id) {
                existsAlready = true
                if ((existingCart.products.filter(i =>{ return  i.prod_id == item.prod_id && i.size == item.size })).length == 1) {
                    _.forEach(existingCart.products, (eachProd) => {
                        if (eachProd.prod_id == item.prod_id && eachProd.size == item.size) {
                            eachProd.orderQty += item.orderQty
                            cartArray.push(eachProd)
                            console.log("ALready", cartArray)
                            cartService.updateCart(userId, cartArray, existingCart.doc_id)
                        }

                    })
                } else {
                    cartArray.push(item)
                    console.log("New", cartArray)
                    cartService.updateCartForExistingUser(userId, cartArray, existingCart.doc_id)
                }
            }
        }
        if (!existsAlready) {
            cartArray.push(item)
            cartService.addToCart(userId, cartArray)
        }
    }

    // let products = []
    // item.forEach((each)=>{
    //     products.push(each)
    // }
    // )
    // console.log(products)
    // let carts = await cartService.addToCart(userId, products)
    // return carts
}