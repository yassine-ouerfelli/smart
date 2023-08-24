const HomeModel=require('../models/product.model')


exports.getThreeProductsController=(req,res,next)=>{
    HomeModel.getThreeProducts().then(products=>{
        res.render('home',{products:products})
    })
}