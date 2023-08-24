const Product  = require("../models/product.model")
const router=require('express').Router()


router.get('/', async (req, res) => {
  try {
     
    const products = await Product.find({}).limit(3);

    res.render('home', { products: products });
      
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Internal Server Error');
    }
});


module.exports=router 