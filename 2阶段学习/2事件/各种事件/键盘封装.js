var key=function(){
    document.onkeypress=function(evt){
        var e = evt || event

        // console.log(e.keyCode)
        // 兼容写法
        var key = e.keyCode||e.which||e.charCode
        console.log(key)
        console.log(e.ctrlKey)
        if(key = 13 || key && e.ctrlKey){
            console.log(key)
        }
    
    }
}