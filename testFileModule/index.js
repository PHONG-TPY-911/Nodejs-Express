const util = require('./module/myModule');
// todo we can require file module like this 
const getCurrentTime = require('./module/myModule').getCurrentTime
const number = require('./module/myModule').formatNumber

const num = 18753495600;
//todo function call
console.log(getCurrentTime());
console.log('$',number(num));

console.log(util.getCurrentTime());
console.log(util.add(12,30));