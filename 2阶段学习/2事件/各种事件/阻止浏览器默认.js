var prevent=function(){
    document.oncontextmenu=function(evt){   //右键点击
        var e= evt || event
        box.style.top=e.pageY+'px'
        box.style.left=e.pageX-box.offsetWidth+'px'

        // 阻止右键点击默认事件
        // e.preventDefault() //非ie
        // e.returnValue=false  ie写法

        // 兼容写法(2种写法)
        e.preventDefault?e.preventDefault():e.returnValue=false 
        return false

    }   
}