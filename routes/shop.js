const express = require('express')

const path = require('path')


const rootDir = require('../util/path')

const adminData = require('./admin')



const router = express.Router();

router.get('/',(req,res,next)=>{
    //  console.log('In another Middleware')
    //res.send('<h1>This is Home Page</h1>')
  //  res.sendFile(path.join(__dirname,'..','views','shop.html'))
  console.log('adminData ',adminData.products)

  //res.sendFile(path.join(rootDir,'views','shop.html'))
  //now sending pug template engine
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });

  

})

module.exports = router;