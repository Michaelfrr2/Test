<?php
if(!session_id()) session_start();
$tiempo = $_SESSION['time'];
$actual = time() - $tiempo;
if($actual >=1800){

	session_destroy();
		header("location: ../index.php");
}else{
	$_SESSION['time'] = time();
}
?>