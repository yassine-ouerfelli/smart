const ProductModel=require('../models/product.model')


exports.getAllProductsController=(req,res,next)=>{
    ProductModel.getAllProducts().then(products=>{
        res.render('products',{products:products})
    })
}