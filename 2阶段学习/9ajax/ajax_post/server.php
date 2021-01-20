<?php
	header('Content-type:text/html;charset=utf-8');//支持中文
	// php比较严谨，每个语句后都必须有分号
	// 变量的定义
	// 以$开头
	$name = $_POST['username'];
	// 字符串拼接用.
	echo $name;
	
?>