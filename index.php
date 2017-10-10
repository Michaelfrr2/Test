

<!DOCTYPE html>
<html lang="es-la">

<head>
 
  <title>inicio sesion</title>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="css/sb-admin.css" rel="stylesheet">
</head>

<body class="bg-dark">
  <div class="container">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">Iniciar Sesion</div>
      <div class="error" >Datos Incorrectos</div>
      <div class="card-body">

        <form  method="POST" id="login">
          <div class="form-group">
            <label for="email">Correo electronico</label>
            <input class="form-control" id="email" name="email" type="email" placeholder="Email" required autofocus>
          </div>
          <div class="form-group">
            <label for="pass">Contrase&ntilde;a</label>
            <input class="form-control" id="pass" name="pass" type="password" placeholder="Contrase&ntilde;a" required>
          </div>
           <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
        </form>
        <div class="text-center">
          <a class="d-block small mt-3" href="#">Ingresar con Facebook</a>
          <a class="d-block small" href="php/registro.php">Crear Cuenta</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/popper/popper.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>


  <script src="js/funciones.js"></script>
</body>

</html>




