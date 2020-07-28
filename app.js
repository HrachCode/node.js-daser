const express = require('express');
const app = express()
const favicon = require('express-favicon');
const fs = require('fs')
const morgan = require('morgan')

const port = 3000;
app.use(morgan('dev'))
app.use(favicon(__dirname + '/public/favicon.png'));
app.use(express.static(__dirname + '/public'))
app.use(function(req,res,next){

    console.log('another midlwere')
    next()
})

app.use('/',require('./routs/rout'))


app.get('/test',(req,res)=>{

    res.sendFile(__dirname + '/demofile1.html')
})

function data(req,res,next){
    let data  = new Date();
    fs.appendFile('serv.log',data + '\n',function(){} )
    next()
}

app.listen(port,console.log(`server is runing on port ${port}`))