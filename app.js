//before express
// const http = require('http');
// const rqListener = require('./routes')

// const server = http.createServer(rqListener);

// server.listen(3000);

//after express

 const express = require('express')

 const bodyParser = require('body-parser')

 const adminRoutes = require('./routes/admin')

 const shopRoutes = require('./routes/shop')

 const errorController = require('./controllers/error')

 const path = require('path')

 const expressHbs = require('express-handlebars')


const app = express();

//saying that please use pug template engine for dynamic content
//app.set('view engine','pug');


//using express-handlebars
// app.engine(   'hbs',expressHbs({layoutsDir: 'views/layouts/',defaultLayout: 'main-layout',extname: 'hbs'
//     })
//   );
// app.set('view engine','hbs');

//setting ejs
app.set('view engine','ejs');




//setting folder to find where templates available
app.set("views","views")

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin",adminRoutes) //adminData.routes

app.use(shopRoutes)

//for error message if you use other paths which are not available
app.use(errorController.get404);
//     (req,res,next)=>{
//     //res.status(404).send('<h1>Page Not Found</h1>')
//     //res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'))
//     res.render('page-not-found',{pageTitle:"404 Page",path:null})
// })

//  const server = http.createServer(app);

//  server.listen(3000);

app.listen(3000)
