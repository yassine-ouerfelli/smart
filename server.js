const express = require('express')
const path=require('path')
const bodyParser = require('body-parser');
const productsrouter=require('./routers/products.router')
const homerouter=require('./routers/home.router')
const detailsrouter=require('./routers/details.router')
const addproducts = require('./routers/add_products.js')
const product_details = require('./routers/product_details.js')
const app = express()
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images/', express.static('./public/images'));
app.use( express.static( "public" ) );
app.set('view engine','ejs')
app.set('views','views')
app.use(addproducts)
app.use(product_details)
app.use(productsrouter)
app.use(homerouter)



app.get ('/contact', (req,res,next)=>{
  res.render('contact')
})

app.get ('/about', (req,res,next)=>{
  res.render('about')
})

app.get ('/solutions', (req,res,next)=>{
  res.render('solutions')
})

//solutions
app.get ('/01', (req,res,next)=>{
  res.render('01')
})
app.get ('/02', (req,res,next)=>{
  res.render('02')
})
app.get ('/03', (req,res,next)=>{
  res.render('03')
})
app.get ('/04', (req,res,next)=>{
  res.render('04')
})
app.get ('/05', (req,res,next)=>{
  res.render('05')
})
app.get ('/06', (req,res,next)=>{
  res.render('06')
})



app.listen(6001,()=>{console.log('server running in port 6001')})