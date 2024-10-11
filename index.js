const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const multer=require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// eshop
// uuT3AjOLVyhZLFQX
// mongodb+srv://<db_username>:<db_password>@cluster0.mefi6.mongodb.net/

mongoose.connect("mongodb+srv://eshop:uuT3AjOLVyhZLFQX@cluster0.mefi6.mongodb.net/eshop")

app.get("/",async(req, res)=>{
   res.send("Express app is running") 
})

app.listen(port,(error)=>{
    if(!error){
        console.log(`Server is running on port ${port}`)
    }
    else{
        console.log("Error: "+error)
    }
})