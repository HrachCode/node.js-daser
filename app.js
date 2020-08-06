const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')


const mongoURI = 'mongodb+srv://hrach:hrach@cluster0.impfb.mongodb.net/mydb?retryWrites=true&w=majority'

  mongoose
  .connect(
    mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

  app.use(express.json())
  app.use(express.urlencoded({extended:false}))
  


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/react',(req,res)=>{
    console.log(req.body)
})
app.listen(port, () => console.log(`Example app listening on port ${5000}!`))