class Maigflter{
	constructor(newSmall,newMask,newBig){
		this.small=newSmall
		this.mask=newMask
		this.big=newBig
	}
	mouseover(){
		let that=this
		this.small.onmouseover=function(){
			that.mask.style.display='block'
			that.big.style.display='block'
		}
	}
	mouseout(){
		let that=this
		this.small.onmouseout=function(){
			that.mask.style.display='none'
			that.big.style.display='none'
		}
	}
	mousemove(){
		let that = this
		this.small.onmousemove = function(evt){
			let e = evt || event ;
			// 鼠标坐标是相对于页面，而mask坐标是相对于父元素定位，所以必须减去父元素相对页面的坐标，才是mask在页面的坐标
			let left = e.pageX - that.small.offsetLeft - that.mask.offsetWidth/2;
			let top = e.pageY - that.small.offsetTop - that.mask.offsetHeight/2;
			

			if(left < 0){
				left = 0
				console.log('hhh')
			}
			let maxLeft = that.small.offsetWidth - that.mask.offsetWidth
			if(left > maxLeft){
				left = maxLeft
			}
			let maxTop = that.small.offsetHeight - that.mask.offsetHeight
			if(top < 0){
				top = 0
			}
			if(top > maxTop){
				top = maxTop
			}
			that.mask.style.left = left + 'px'
			that.mask.style.top = top + 'px'
			// 比例尺
			// 小图片mask的图片：大图片big图片=小窗口mask宽高：大窗口big宽高
			// 算法
			// a/b=left/x （left是mask移动的距离，x是big的背景图移动距离）
			// that.mask.offsetWidth*x = that.big.offsetWidth*left
			let x = that.big.offsetWidth  *left / that.mask.offsetWidth
			let y = that.big.offsetHeight * top / that.mask.offsetHeight

			that.big.style.backgroundPositionX = -x + 'px'
			that.big.style.backgroundPositionY = -y + 'px'

		}
	}

}