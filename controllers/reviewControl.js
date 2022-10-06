const express = require("express")
const reviewsService = require('../services/reviewService')

let reviewControl = []
reviewControl.getAllReviews = getAllReviews
module.exports = reviewControl;


//fetch all stores
async function getAllReviews(){
    let reviews = await reviewsService.getAllReviews()
    return reviews
}