class PopCase{
		constructor(newbox) {
		    this.box = newbox
			this.obtn = null
		}
		// 设置弹出框的位置
		setPopPosition(){
			this.box.style.display = "block"
			//block必须写前面，因为offset是以block为前提，如果放在后面，则下面的减法，需要点击第二次才能执行
			this.box.style.left = window.innerWidth/2-this.box.offsetWidth/2+"px"
			this.box.style.top = window.innerHeight/2-this.box.offsetHeight/2+"px"
			this.setclosebtn()
		}
		// 设置关闭按钮
		setclosebtn(){
			this.obtn = document.createElement("button")
			this.obtn.style.position="absolute"
			this.obtn.style.width = 50+"px"
			this.obtn.style.height = 25+"px"
			this.obtn.innerHTML = "X"
			this.box.appendChild(this.obtn)
			this.obtn.style.left = this.box.offsetWidth-this.obtn.offsetWidth+"px"
			this.closebox()
		}
		closebox(){
			let that = this
			this.obtn.onclick = function(){
				that.box.style.display = 'none'
			}
		}
		
	}