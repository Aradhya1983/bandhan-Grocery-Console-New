const express = require("express")
const router = express.Router();
const categoryControl = require('../controllers/categoryControl');

router.use((req,res,next)=>{
    next()
})

router.post("/getAllCategories", getAllCategories)

module.exports = router;

//fetch all stores
async function getAllCategories(req,res){
    if(req.body.length){
        res.json({message: "Invalid Request"})
    }
    let categories = await categoryControl.getAllCategories()
    res.json(categories);
}
