const express = require('express');
// todo import file Router
const router = require('./Router/myRoter');

//todo create parameter
const app = express();
//todo it's a set od commands 
app.use(router);
// todo specify port
app.listen(8000,() => {
    console.log('start file serveer on port 8000!');
});