const express = require("express")
const router = express.Router();
const reviewControl = require('../controllers/reviewControl')

router.use((req,res,next)=>{
    next()
})
router.post("/getAllReviews", getAllReviews)

module.exports = router;


//fetch all stores
async function getAllReviews(req,res){
    let reviews = await reviewControl.getAllReviews()
    res.json(reviews)
}