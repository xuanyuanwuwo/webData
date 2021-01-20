// 1.引入node自带的http模块
let http = require('http')  //等同于<script src = "http"></script>

//2 创建服务器
//使用httt.creatServer()创建,并用listen(端口号)绑定端口，函数通过request，response发送请求和接受响应
http.createServer(function(req,res){
    //3 设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // 响应
    res.write("hello node.js")
    //关闭
    res.end('结束') //参数可有可无

    //设置端口号
}).listen(8888); //端口号一般在8千以上，已经注册的无法使用

