const express = require('express');
const dotenv=require('dotenv').config()
const PORT = process.env.PORT || 8000 

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT,()=>console.log(`server started on port ${PORT}`))