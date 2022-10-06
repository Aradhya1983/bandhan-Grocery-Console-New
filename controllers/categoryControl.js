const express = require("express")
const categoryService = require('../services/categoryService.js');

let categoryControl = []
categoryControl.getAllCategories = getAllCategories

module.exports = categoryControl;

//fetch all stores
async function getAllCategories(){
    let categories = await categoryService.getAllCategories()
    return categories;
}
