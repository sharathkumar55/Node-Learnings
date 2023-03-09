
//const products = [];

//instead of saving data into products,we save into file
const fs = require('fs');
const rootDir = require('../util/path')

const path = require('path')

// const getProductsFromFile = cb =>{

// }

module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save() {
        //products.push(this);
        this.id = Math.random().toString();
        const p = path.join(rootDir,'data','products.json');
        fs.readFile(p,(err,filecontent)=>{
            let products = [];
            if(!err){
                products = JSON.parse(filecontent);
            }
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log('error is ',err)
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(rootDir,'data','products.json');
        fs.readFile(p,(err,filecontent)=>{
            if(err){
                 cb([]);
            }
             cb(JSON.parse(filecontent));
        })
        //return products;
    }

    static findById  (id,cb){
        this.fetchAll(products=>{
            const product = products.find(p=>p.id === id)
            cb(product);
        })
    }
}