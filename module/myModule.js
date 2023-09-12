// todo servoice about to do work in the project others
// todo dateTime
function getCurrentTime() {
    return new Date()
}
// todo calculator
function add(x,y) {
    return x*y
}
// todo format number
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
// todo send order to use
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber