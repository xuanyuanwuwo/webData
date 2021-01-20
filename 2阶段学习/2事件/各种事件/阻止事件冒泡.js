var stop=function(obj){
    obj.onclick=(evt)=>{
        var e = evt || event
        // e.stopPropagation()     //阻止事件冒泡，阻止事件从子向父传递
        // e.cancelBubble=true  IE阻止事件冒泡写法

        // 兼容写法
        e.stopPropagation?e.stopPropagation():e.cancelBubble=true
        alert('sun')
    }
}