<?php
	header('Content-type:text/html;charset=utf-8');
	$wd = $_GET["wd"];
	if($wd == "佳"){
		echo '{"1":"佳佳美女","2":"佳人有约"}';
	}else if($wd == "钱"){
		echo '{"1":"钱小佳同学","2":"钱方有你"}';
	}
	// else{
	// 	echo '{"name":""}';
	// }
?>