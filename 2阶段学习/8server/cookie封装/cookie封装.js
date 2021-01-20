// cookie获取	
	function getcookie(key){
		let strCookie = document.cookie.split('; ')
		for(let i=0; i<strCookie.length; i++){
			let item = strCookie[i].split('=')
			if(item[0] == key){
				return item[1]
			}
		}
		return ''
	}

// 设置cookie

	function setCookie(key,value,date){
		let d = new Date()
		d.setDate(d.getDate()+date)
		document.cookie = key+'='+value+';expires='+d
	}
	
// 删除cookie (此方法只能删除当前页面设置的cookie，不能删除之前的cookie)
	function delateCookie(key){
		setCookie(key,'',-1)
	}

// 获取cookie
function getcookie(key){
	let strCookie = document.cookie.split('; ')
	for(let i=0; i<strCookie.length;i++){
		let item = strCookie[i].split('=')
		if(item[0]=key){
			return item[1]
		}	
	}
}
// 设置getcookie
function setCookie(key,value,date){
	let d =new Date()
	d.setDate(d.getDate()+date)
	let cookie = key+':'+value+"; "+date
	document.cookie = key+'='+value+';expires='+d
}