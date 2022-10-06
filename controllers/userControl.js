const express = require("express")
const router = express.Router();
const userService = require('../services/userService')

let userControl = []
userControl.getUser = getUser

module.exports = userControl;

//fetch all stores
async function getUser(userId, email){
    let user =await userService.getUser(userId, email)
    return user
}