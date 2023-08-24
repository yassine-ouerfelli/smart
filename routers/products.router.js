const Product  = require("../models/product.model")
const router=require('express').Router()


router.get('/products', async (req, res) => {
  try {
     
    const products = await Product.find();

    res.render('products', { products: products });
      
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Internal Server Error');
    }
});


module.exports=router    