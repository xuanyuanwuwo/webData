var but=document.getElementById('but')
//关键字 变量名 = 赋值 
//标识符 只能由数字，字母，以及下划线组成，且首个不能是数字
//变量名命名规范：
//       1.永远不能出现拼音
//       2.驼峰命名法
//       3.见名知意
// 数据类型
//基本类型undefined,null,Boolean,String,Number
//引用类型 object
// 返回typeof（console.log）
but.onclick=function(){
    alert('你好帅哥')

    console.log(typeof but)
}