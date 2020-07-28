const express = require('express')
const login = express()

login.get('/login',(req,res)=>{
    console.log('login');
})


module.exports = login