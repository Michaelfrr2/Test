<?php
	session_start();
require('conexion.php');

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
{


	$nombre=strip_tags($_POST['nUser']);
	$apellido=strip_tags($_POST['aUser']);
	$departamento=strip_tags($_POST['dUser']);
	$ciudad=strip_tags($_POST['cUser']);
	$telefono=strip_tags($_POST['tUser']);
	$email=strip_tags($_POST['eUser']);
	 $file = $_FILES['Foto']['name'];
	$pass=md5(strip_tags($_POST['pUser']));
	$estado = 1;
   

    // crear carpeta
    if(!is_dir("files/")) mkdir("files/", 0777);
     
    //comprobar si la Foto ha subido
    if ($file && move_uploaded_file($_FILES['Foto']['tmp_name'],"files/".$file))
    {

    	$newUser = $mysqli->query("INSERT INTO registro (Nombre, Apellido, Departamento, Ciudad, Telefono, Email, Foto, Pass, Estado) VALUES ('$nombre', '$apellido', '$departamento', '$ciudad', '$telefono', '$email', '$file', '$pass', '$estado')");

		if ($newUser == 1) {
				
			$_SESSION['status'] = 'activa';
			$_SESSION['email'] = $email;
			$_SESSION['time'] = time();

					
			echo json_encode(array('error' => false, 'tipo' => 1));
		}else{
			echo json_encode(array('error' => true));
		}
		$mysqli->close();
    }
}else{
    throw new Exception("Error Processing Request", 1);   
}

?>