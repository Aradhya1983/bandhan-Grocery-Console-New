const express = require("express")
const router = express.Router();
const productControl = require('../controllers/productControl');

router.use((req,res,next)=>{
    next()
})
router.post("/getAllProducts", getAllProducts)
router.post("/addProduct", addProduct)
router.post("/addProductTypes", addProductTypes)


module.exports = router;

//fetch all stores
async function getAllProducts(req,res){
    let products = await productControl.getAllProducts()
    res.json(products)
}

async function addProduct(req,res){
    let response = await productControl.addProduct(req.body)
    res.json(response);
} 

async function addProductTypes(req,res){
    let response = await productControl.addProductTypes(req.body)
    res.json(response)
} 