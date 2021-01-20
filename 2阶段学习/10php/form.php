<?php
	header('Content-type:text/html;charset=utf-8');
	$name = $_GET['username'];
	$pwd = $_GET['userpwd'];
	echo $name.':'.$pwd
?>