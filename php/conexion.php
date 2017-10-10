<?php	
	$mysqli = new mysqli('127.0.0.1','ddb','7sojFmNvE3ePslJ9','test');
	if($mysqli->connect_errno) {
		printf("Falló la conexión: ".$mysqli->connect_error);
		exit();
	}
?>