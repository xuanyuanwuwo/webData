let sd = require('silly-datetime')
// let jquery = require('../../node_modules/jquery/dist/jquery.js')
function date(a,b){
    a.innerHTML = sd.format(new Date(),'YYYY-MM-DD HH:mm')
    b.innerHTML=sd.fromNow(+new Date() - 2000)
    // console.log(sd.format(new Date(),'YYYY-MM-DD HH:mm'))
}
module.exports.date = date
console.log(sd.format(new Date(),'YYYY-MM-DD HH:mm'))
