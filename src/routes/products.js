const express = require('express');

const router = express.Router()

const productsController=require('../controllers/products');

//Get Product
router.get('/product', productsController.getAllProduct)

//Create Product
router.post('/product', productsController.createProduct);

module.exports = router;