 class Banner{
        constructor(newOimg,newOli){
            this.img=newOimg;
            this.li=newOli;
            this.index=0;
            this.img.style.backgroundImage="url(./img/"+this.index+".jpg)"
            this.li[this.index].style.backgroundColor='red'
        }
        // 设置背景图
        steImg(){
            this.img.style.backgroundImage="url(./img/"+this.index+".jpg)"
        }
        // 设置li背景颜色
        setli(){
            for(let i=0; i<this.li.length; i++){
                if(i==this.index){
                    this.li[i].style.backgroundColor='red'
                }else{
                    this.li[i].style.backgroundColor='black'
                }
            }
        }
        // 下一个
        nextImg(){
            this.index++;
            if(this.index==this.li.length){
                this.index=0
            }
            this.steImg()
            this.setli()
        }
        // 上一个
        previouImg(){
            this.index--;
            if(this.index==-1){
                this.index=this.li.length-1
            }
            this.steImg()
            this.setli()
        }
        // li点击事件
        oliclick(){
            let that=this
            for(let i=0; i<this.li.length; i++){
                this.li[i].onclick=function(){
                    that.index=i
                    that.steImg()
                    that.setli()
                }
            }
        }
        // 左右点解事件
        eventBind(){
            let previou=document.getElementById('previou')
            let next=document.getElementById('next')
            let that=this
            previou.onclick=function(){
                that.previouImg()
            }
            next.onclick=function(){
                that.nextImg()
            }
        }
    }