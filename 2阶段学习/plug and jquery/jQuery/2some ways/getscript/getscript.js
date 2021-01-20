function RoundColor(obj){
	let color = "#"
	let str = "0123456789abcdefg"
	for(let i=0; i<6;i++){
		color +=str[Math.floor(Math.random()*16)]
	}
	console.log(color)
	$("body").css({backgroundColor:color})
}