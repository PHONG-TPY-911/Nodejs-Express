// todo import http
const http = require('http');
const fs = require('fs');

// todo create __dirname is to be reference position file html
const indexpage = fs.readFileSync(`${__dirname}/templates/index.html`)
const product = fs.readFileSync(`${__dirname}/templates/product1.html`)


// todo create server http is to be callback function
// const server = http.createServer(function(req,res) {
//     //todo create text
//     res.write("Hello Node.JS\n");
//     // todo we can set tag html
//     res.write("<h1>Hello Mr Phonsavath!!!</h1>");
//     res.end();

// });

// todo create is to be allow function
const server = http.createServer((req, res) => {
    console.log('dir',__dirname);
    //todo path is to be get the value in url on website = req
    const pathName = req.url;
    console.log("url = ",pathName);
    //todo if we have tag html many 1 tag
    // todo check pathName
    if (pathName === "/" || pathName === "home") {
    //     const myhtml=`
    //     <h2>Hello Home Page</h2>
    // <p>Hello Mr Phonsavath || 2023</p>
    // `;
    // res.end(myhtml);
    res.end(indexpage);
    // res.end("<h2>Hello Home Page</h2>");
    }else if (pathName === "/product"){
        res.end(product);
        // res.end("<h2>Hello Product Page</h2>");
    }else {
        // todo tell status http in network
        res.writeHead(404);
        res.end("<h2>Not Found</h2>");
    }
    // res.write(myhtml);
    // //todo create text
    // res.write("Hello Node.JS\n");
    // // todo we can set tag html
    // res.write("<h1>Hello Mr Phonsavath!!!</h1>");
    // todo we can set myhtml in end()
    // res.end(myhtml);

});

// todo create listen router on website is to be localhost:3000
// server.listen(3000, () => {
//     console.log("Start server on port 3000!");
// });

// todo create listen router on website is to be localhost:name
server.listen(3000, 'localhost', () => {
    console.log("Start server on port 3000!");
});