require('dotenv').config() ;

const express = require('express') ;
const mongoose = require('mongoose') ;
const cors = require('cors') ;
const router = require('./routes/user-route') ;

const app = express() ;

app.use(express.json()) ;
app.use(cors()) ;

mongoose.connect('mongodb://0.0.0.0:27017/auth-0',{useNewUrlParser:true})
.then(() => console.log("Connected to db"))
.catch(err => console.log(err)) ;

app.use('/api/user',router) ;

app.listen(8000,() => {
    console.log("Server is running on port 8000 ") ;
}) ;