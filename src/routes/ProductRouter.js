const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

//delete product
router.delete('/removeproduct/:id', ProductController.deleteProduct)
//add a new product
router.post('/addproduct', ProductController.addProduct);
//get all products
router.get('/get-all', ProductController.getAllProducts);


module.exports = router