const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.get('/',(req,res) =>{
    res.send("<h1>Hellow World</h1>")
})

const PORT = process.env.port || 8080;
app.listen(PORT,(req,res) => {
    console.log("Server is Running on Port: 8080")
})