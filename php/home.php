<?php
  include("seguridad.php");
  require('conexion.php');
?>

<!DOCTYPE html>
<html lang="es-la">

<head>
 
  <title>Bienvenido</title>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="../css/sb-admin.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
</head>

<body class="bg-dark">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div class=" navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto"> 
          <li class="nav-item">
            <a class="nav-link" id="salir" href="logout.php">
              <i class="fa fa-fw fa-sign-out"></i>Salir</a>
          </li>
        </ul>
      </div>
    </nav>
    <br>paginador
  </div>

      <div id="wrapper">
            
      
    <div id="paginador" class="container">
        <h2 class="titlle">Galeria</h2>
      <div class="page_navigation"></div>
        <div class="content row">

        <?php
          $img = $mysqli->query("SELECT * FROM registro WHERE Estado = 1");


          while ($row = mysqli_fetch_array($img)) {

            echo '<p class="col-md-3">
                 <button id="user" name="user"  type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#'.$row['Nombre'].$row['Apellido'].'">
                  <img src="files/'.$row['Foto'].'" alt="'.$row['Foto'].'" class="img-thumbnail" width="211px" height=" 211px ">  
                  </button>                
              </p>';
          }

          $mysqli->close();
        ?>
          
        </div> 
      </div>  
    </div>
    
    <?php
    require('conexion.php');
    
     $conn = $mysqli->query("SELECT * FROM registro WHERE Estado = 1");
       while ($mod = mysqli_fetch_array($conn)) {

        echo '<div class="modal fade" id="'.$mod['Nombre'].$mod['Apellido'].'" role="dialog">
                        <div class="modal-dialog">
                        
                          <!-- Modal content-->
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">'.$mod['Foto'].'</h4>
                            </div>
                            <div class="modal-body">
                              <img src="files/'.$mod['Foto'].'" alt="'.$mod['Foto'].'" class="" width="450px" height="450px"> 
                            </div>
                            <div class="modal-footer">
                            <h4 class="modal-title"> Autor: '.$mod['Nombre'].'&nbsp;'.$mod['Apellido'].'&nbsp;&nbsp;&nbsp;</h4>
                              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                          
                        </div>
                      </div>';
        }
     $mysqli->close();
?> 
 
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/popper/popper.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.min.js"></script> 
  <script src="../js/home.js"></script>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script> 
  <script type="text/javascript" src="../js/jquery.pajinate.js"></script>

</body>

</html>
