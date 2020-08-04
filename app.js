const express = require("express");
var handlebars  = require('express-handlebars');
const app = express();



const hbss = handlebars.create({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/',
  
    
  })
 
  app.use(express.json())
  app.use(express.urlencoded({extended:false}))
  app.use(express.static(__dirname + "/public"));
  app.set('view engine', 'hbs');
  app.engine('hbs',hbss.engine )

app.use('/register/:id',(req,res)=>{
        console.log(req.params);
        
    res.render('home.hbs', {
        title: "home.hbs",
        name: req.body.userName,
        userAge:req.body.userAge
    });
    
}) 
app.use("/contact", function(request, response){
     const { name,password } = request.query;
    response.render("home.hbs")
});

app.use("/", function(request, response){

    response.render('index.hbs')
});
app.listen(3030,console.log(3030)
);