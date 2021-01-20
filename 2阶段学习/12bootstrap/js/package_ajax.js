function ajax(type,url,data,isAsyn,callback){
		let xhr
		// 兼容
		if(window.ActiveXObject){
			// ie
			xhr = new ActiveXObject("Microsoft XMLHttp")
		}else{
			// 非ie
			xhr  = new XMLHttpRequest()
		}
		
		// 将类型固定化(变小写)
		type = type.toLowerCase()
		
		if(type=='get'){
			let urllink = url
			if(data !=''){
				urllink += "?"+data
			}
			xhr.open(type,urllink,isAsyn)
			xhr.send()
		}else{
			xhr.open(type,url,isAsyn)
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
			xhr.send(data)
		}
		xhr.onreadystatechange = function(){
			if(xhr.status == 200 && xhr.readyState == 4){
				callback(xhr.responseText)
				// console.log(xhr.responseText)
				console.log(xhr.readyState)
			}	
		}
	}