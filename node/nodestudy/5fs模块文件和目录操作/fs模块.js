let fs = require("fs")
//1 fs.stat 检测是文件还是目录
fs.stat('dir',(err,stat)=>{
    // err 文件路径问题
    if(err){
        console.log('文件路径错误')
    }else{
        console.log('文件路径正确')
    }

    // if(stat.isFile()){
    //     console.log('我是文件')
    // }else{
    //     console.log('我是mulu')
    // }
    console.log(stat.isDirectory()) //目录为true
    console.log(stat.isFile())      // 文件为false
})

//2 fs.mkdir 创建目录
// fs.mkdir('myfs',(err,stat)=>{
//     //当目录名重名时会创建失败
//     if(err){
//         console.log('创建目录失败')
//     }else{
//         console.log('创建成功')
//     }
// })
// fs.mkdir('myfs\\dir1',(err,stat)=>{ //此处回调没什么用
//     if(err){
//         console.log('创建目录失败')
//     }else{
//         console.log('创建成功')
//     }
// })

// 3.fs.writeFile 创建写入文件 （慎用，会把之前的内容删除，如果里面有代码。凉凉）
// fs.writeFile("myfs\\dir.txt","小佳同学",function(err,stat){}) 

//4 fs.readFile 读取文件，目前没有案例，打印会是乙编码形式出现
// fs.readFile('myfs\\dir.txt',function(err,data){
//     console.log(data)
// })

// 4.fs.rmdir 删除目录
fs.rmdir('dir',function(){})
// 5.删除文件
fs.unlink('myfs\\dir.html',function(){})