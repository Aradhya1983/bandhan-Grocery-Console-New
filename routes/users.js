// const express = require("express")
// const router = express.Router();
// const userControl = require('../controllers/userControl')

// router.use((req,res,next)=>{
//     next()
// })
// router.post("/getUser", getUser)

// module.exports = router;

// //fetch all stores
// async function getUser(req,res){
//     if(req.body.userId && req.body.email){
//         let {userId, email} = req.body;
//         let user =await userControl.getUser(userId, email)
//         res.json(user)
//     }else{
//         res.json({messsage: "Invalid Request"})
//     }
// }