const Product  = require("../models/product.model")
const router=require('express').Router()
router.get('/products/:productId', async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).send('Product not found');
      }
  
      res.render('details', { product }); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  });
  
  module.exports = router;