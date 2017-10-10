<?php 

require('conexion.php');
sleep(2);
$passwor=$_POST['pass'];
$pass=md5($passwor);
$user = $mysqli->query("SELECT * FROM registro WHERE 
	Email = '".$_POST['email']."' AND
	Pass ='".$pass."'");

if ($user->num_rows == 1) {
	$datos = $user->fetch_assoc();
	session_start();
	$_SESSION['status'] = 'activa';
	$_SESSION['email'] = $_POST['email'];
	$_SESSION['time'] = time();
	echo json_encode(array('error' => false, 'tipo' => $datos['Estado']));
}else{
	echo json_encode(array('error' => true));
}

$mysqli->close();

?>


