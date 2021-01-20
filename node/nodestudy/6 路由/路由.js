let http = require("http")

let s = http.createServer(function(request,response){
    response.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //判断路由
    console.log(request.url) 
    if(request.url=='/login'){
        console.log('登录')
    }else if(request.url=='/res'){
        console.log('注册')
    }

    response.end()
})
s.listen(8899)