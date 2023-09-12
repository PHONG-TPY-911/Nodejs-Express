// todo import http
const http = require('http');
const fs = require('fs');
const url = require('url');

// todo create __dirname is to be reference position file html
const indexpage = fs.readFileSync(`${__dirname}/templates/index.html`, `utf-8`)
const productPage1 = fs.readFileSync(`${__dirname}/templates/product1.html`, `utf-8`)
const productPage2 = fs.readFileSync(`${__dirname}/templates/product2.html`, `utf-8`)
const productPage3 = fs.readFileSync(`${__dirname}/templates/product3.html`, `utf-8`)


// todo create is to be allow function
const server = http.createServer((req, res) => {
    //todo Is to be get the data in sresch query to use
    const { pathname, query } = url.parse(req.url, true);
    // console.log(url.parse(req.url, true));
    //todo path is to be get the value in url on website = req
    // const pathName = req.url;
    //todo if we have tag html many 1 tag
    // todo check pathName
    if (pathname === "/" || pathname === "home") {
        // console.log(query.id);
        res.end(indexpage);
    } else if (pathname === "/product") {
        // todo data of product
        if (query.id === "1") {
            res.end(productPage1);
        } else if (query.id === "2") {
            res.end(productPage2);
        } else if (query.id === "3") {
            res.end(productPage3);
        } else {
            res.writeHead(404);
            res.end("<h2>Not Found</h2>");
        }
    } else {
        // todo tell status http in network
        res.writeHead(404);
        res.end("<h2>Not Found</h2>");
    }
});

// todo create listen router on website is to be localhost:name
server.listen(3000, 'localhost', () => {
    console.log("Start server on port 3000!");
});