exports.get404 = (req,res,next)=>{
    //res.status(404).send('<h1>Page Not Found</h1>')
    //res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'))
    res.render('page-not-found',{pageTitle:"404 Page",path:null})
}