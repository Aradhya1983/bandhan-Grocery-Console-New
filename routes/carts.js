const express = require("express")
const router = express.Router();
const cartControl = require('../controllers/cartControl')

router.use((req,res,next)=>{
    next()
})
router.post("/getCart", getCart)
router.post("/addToCart", addToCart)

module.exports = router;
//fetch all stores
async function getCart(req,res){
    let userId = (req.body.userId)
    if(userId.length == 0){
        res.json({message: "UserId is INVALID"})
    }
    else{
        let carts = await cartControl.getCart(userId)
        res.json(carts)
    }
    // return cartsuser
 }
 
 async function addToCart(req,res){
    // console.log("recahed to cunt", req.body)
     let {userId, item} = req.body;
     let carts = await cartControl.addToCart(userId, item)
     res.json(carts)
 }