const colors=require('colors')
const express = require('express') //bringing express in backend
const dotenv = require('dotenv').config() //dotenv for env variables
const{errorHandeler}=require('./middleware/errormiddleware')        //brings error handleler into main server by folder
const connectDB= require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app= express()

app.use(express.json())
app.use(express.urlencoded({ extended : false}))                                //adding middlewear

app.use('/api/goals', require('./routes/goalRoutes')) //calls api calls then route into route folder
app.use(errorHandeler)
app.listen(port,() => console.log('server started on port 5000')) //listen takes port no then second argument with text