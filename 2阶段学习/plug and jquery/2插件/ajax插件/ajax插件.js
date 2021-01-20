class Ajax{
		constructor(ajaxobj) {
		   this.obj = ajaxobj
		}
		ajax(){
			let xhr
			// 兼容
			if(window.ActiveXObject){
				// ie
				xhr = new ActiveXObject("Microsoft XMLHttp")
			}else{
				// 非ie
				xhr  = new XMLHttpRequest()
			}
			this.obj.type = this.obj.type.toLowerCase()
			if(this.obj.type=='get'){
				let urllink = this.obj.url
				if(this.obj.data !=''){
					urllink += "?"+this.obj.data
				}
				console.log('11')
				xhr.open(this.obj.type,urllink,this.obj.isAsyn)
				xhr.send()
			}else{
				xhr.open(this.obj.type,this.obj.url,this.obj.isAsyn)
				xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
				xhr.send(this.obj.data)
			}
			let that = this
			xhr.onreadystatechange = ()=>{
				if(xhr.status == 200 && xhr.readyState == 4){
					that.obj.callback(xhr.responseText)
				}
			}
		}
		
	}