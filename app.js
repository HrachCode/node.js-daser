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
  app.set('view engine', 'hbs');
  app.engine('hbs',hbss.engine )

app.use('/register',(req,res)=>{

    res.render('home.hbs', {
        title: "home.hbs",
        name: req.body.userName,
        userAge:req.body.userAge
    });
    
}) 
app.use("/contact", function(request, response){
     
    response.render("index.hbs", {
        title: "Мои контакты",
        email: "gavgav@mycorp.com",
        phone: "+1234567890"
    });
});
app.use("/", function(request, response){
     
    response.render('home.hbs', {
        title: "home.hbs",
        name: "Hrach",
        userAge: ""
    });
});
app.listen(3030,console.log(3030)
);