const express = require('express');
const axios = require('axios');
const dotenv=require('dotenv').config()
const PORT = process.env.PORT || 8000 
const accessToken=process.env.ACCESS_TOKEN

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.send("hi")
})
app.use('/product',require('./routes/product'))

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))