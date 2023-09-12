//todo import 'express'
const express = require('express');
// todo create parameter Router
const router = express.Router();
const path = require('path');

//todo reference position file
const indexPage = path.join(__dirname, '../templates/index.html')
const productPgae1 = path.join(__dirname, '../templates/product1.html')
const productPgae2 = path.join(__dirname, '../templates/product2.html')
//todo must to be create app.use before app.listen 
router.get("/", (req, res) => {
    // res.send("<h1>Hello express.js | 2023</h1>")
    //todo status code succress.
    res.status(200);
    //todo specify type html
    res.type('text/html');
    res.sendFile(indexPage);
});
//todo create pathName 
router.get("/product/:id", (req, res) => {
    // res.status(200);
    // res.type('text/html');
    // res.sendFile(productPgae1)
    const productID = req.params.id
    if (productID === "1") {
         res.sendFile(productPgae1)
    } else if (productID === "2") {
        res.sendFile(productPgae2)
    } else {
        // const error = res.status(404)
        // res.send(`404 Page Not Found`)
        res.redirect('/')
    }
    // res.send(`phong Or products all in the 2023 ${productID}`);
});

module.exports = router