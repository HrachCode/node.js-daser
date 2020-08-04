const express = require("express");
var handlebars  = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/usermodel')

const hbss = handlebars.create({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/',
  
    
  })
  const mongoURI = 'mongodb+srv://hrach:hrach@cluster0.impfb.mongodb.net/mydb?retryWrites=true&w=majority'
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(data=>{
        console.log('mongoDb is connected');
  }).catch(err=>{
      console.log(err);
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
     console.log(name,password);
    response.render("home.hbs",{
        name,
        password,
    })

    const user = new User({
           name,
           password
    })

    user.save(function(err){
        if(err) return console.log(err)
            console.log('data is saved');
    })
});



app.use("/", function(request, response){
     User.find({}).then(data=>{
         console.log(data);
     }).catch(err=>{
         console.log(err);
     })
    response.render('index.hbs')
});
app.listen(3030,console.log(3030)
);