const express = require('express')

const path = require('path')

const router = express.Router()

const rootDir = require('../util/path')

const products = [];



//middleware
// app.use((req,res,next)=>{
//     console.log('In the Middleware')
//     next()
// })

router.get('/add-product',(req,res,next)=>{
    // console.log('In another Middleware')
    // res.send('<h1>This is Product Page</h1>')
   // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit" >Product</button></form>')
   //res.sendFile(path.join(__dirname,'..','views','add-product.html'))
   //res.sendFile(path.join(rootDir,'views','add-product.html'))
   res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });

})
router.post('/add-product',(req,res,next)=>{
    console.log('request body is ',req.body)
    products.push({title:req.body.title})
    res.redirect('/');

})

//module.exports = router;
exports.routes = router;
exports.products = products;
