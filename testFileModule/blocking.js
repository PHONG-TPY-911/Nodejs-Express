// todo Blocking synachonous
const fs = require('fs'); //todo is to be call module 

// todo read files input.text
const data = fs.readFileSync('./module/input.text', 'utf-8');
// console.log('date in the file module',data);

// todo write file
const outputText = `Hello Node JS/n ${data}/n file to write ${new Date()}`;
// todo create file output.text
fs.writeFileSync("./module/output.text", outputText);
// console.log("write file succress!");


// todo create function read and write the file Asynchonous(Non-Blocking) 
// todo read file input.text to have the callback function
fs.readFile("./module/input.text", 'utf-8', (err, data) => {
    // todo How to check error
    if (err) return console.log("Error", err);
    // console.log('File in input.text =',data);
    const todoWork = `Hello Node.js\n ${data} \n file to write ${new Date()}`;
    fs.writeFile("./module/todoDay.text", todoWork, err => {
        if (err) return console.log("Error", err);
        console.log("Write to file sccuress!");
    });
});
console.log("Exsit work!");