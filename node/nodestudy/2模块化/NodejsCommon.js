let str = "heihie";
// 把需要导出的属性和方法暴露
//exports暴露属性
exports.str = str;

function fun(a,b){
    console.log(a+b)
}
// module.exports暴露方法
module.exports.fun = fun

let arr = "haha"
exports.arr = arr
