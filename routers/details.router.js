const Product  = require("../models/product.model")
const router=require('express').Router()


router.get('/details', async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId);
  
      res.render('details', { product: product });
    } catch (error) {
      console.error('Error fetching product details:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  


module.exports=router 