<?php 

require('conexion.php');
$eUser = $_POST['eUser'];

$user = $mysqli->query("SELECT * FROM registro WHERE Email ='".$eUser."'");
$mysqli->close();

	switch ($user->num_rows) {
		case TRUE:
			echo json_encode(array('request' => true));
			break;
		case FALSE:
			echo json_encode(array('request' => false));
			break;	

	}
?>