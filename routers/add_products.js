const Product  = require("../models/product.model")
const router=require('express').Router()
const mongoose=require('mongoose')
router.post('/addproduct', async (req, res) => {
    try {
      const { name, description, image, price } = req.body;
  
      const newProduct = new Product({
        name,
        description,
        image,
        price,
      });

      const savedProduct = await newProduct.save();
  
      res.status(201).send({savedProduct})
    } catch (error) {
      console.error(error);
      res.status(500).send('Error ');
    }
  });
  

module.exports = router;
