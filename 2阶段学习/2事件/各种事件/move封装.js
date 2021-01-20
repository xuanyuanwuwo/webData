let fun=function(box){
    box.onmousedown=function(evt){
        var e= evt || event
        var ofl=e.offsetX
        var oft=e.offsetY
        document.onmousemove=(evt)=>{
            var e= evt || event
            var x=e.pageX-ofl
            if(x<0){
                x=0
            }
            var maxleft=window.innerWidth-box.offsetWidth
            if(x>maxleft){
                x=maxleft
            }
            var y=e.pageY-oft
            if(y<0){
                y=0
            }
            var maxtop=window.innerHeight-box.offsetHeight
            if(y>maxtop){
                y=maxtop
            }
            box.style.top=y+'px'
            box.style.left=x+'px'
        }
        document.onmouseup=()=>{
            document.onmousemove=null
        }
    }
}