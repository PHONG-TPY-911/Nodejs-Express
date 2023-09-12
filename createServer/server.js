//todo import 'express'
const express = require('express');
const path = require('path');
//todo create parameter
const app = express();

//todo reference position file
const indexPage = path.join(__dirname, 'templates/index.html')
const productPgae1 = path.join(__dirname, 'templates/product1.html')
//todo must to be create app.use before app.listen 
app.get("/",(rep,res) => {
    // res.send("<h1>Hello express.js | 2023</h1>")
    //todo status code succress.
    res.status(200);
    //todo specify type html
    res.type('text/html');
    res.sendFile(indexPage);
});
//todo create pathName 
app.get("/product",(rep,res) => {
    res.status(200);
    res.type('text/html');
    res.sendFile(productPgae1)
});

// todo specify port
app.listen(8000,() => {
    console.log('start file serveer on port 8000!');
});