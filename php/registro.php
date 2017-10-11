<!DOCTYPE html>
<html lang="es-la">

<head>
 
  <title>Registro</title>
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="../css/sb-admin.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
</head>

<body class="bg-dark">
  <div class="container">
    <div class="card card-register mx-auto mt-5">
      <div class="card-header">Nueva Cuenta</div>
      <div class="card-body">
        <form method="POST" id="formnUser" enctype = "multipart / form-data">
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputName">Nombres</label>
                <input class="form-control required"  type="text" id="nUser" name="nUser"  placeholder="Nombres"  autofocus >
              </div>
              <div class="col-md-6">
                <label for="exampleInputLastName">Apellidos</label>
                <input class="form-control required"  type="text" id="aUser" name="aUser"  placeholder="Apellidos"  >
              </div>
            </div>  
            <div class="form-row"> 
              <div class="col-md-6">
                <label for="exampleInputName">Departamento</label>
                <select class="form-control required " id="dUser" name="dUser" placeholder="Departamento"  >
                  <option>Departamento</option>
                </select>               
              </div>
              <div class="col-md-6">
                <label for="exampleInputLastName">Ciudad</label>
                 <select class="form-control required" id="cUser" name="cUser" placeholder="Departamento"  >
                  <option>Ciudad</option>
                </select> 
              </div>
            </div>
            <div class="form-row"> 
              <div class="col-md-6">
                <label for="exampleInputName">Telefono</label>
                <input class="form-control required"  type="number" id="tUser" name="tUser"  placeholder="Telefono" >
                 <label for="tUser" id="errortUser">Maximo 10 caracteres</label>
              </div>
              <div class="col-md-6">
                <label for="eUser">Correo</label>
                <input class="form-control required email"  type="email"  id="eUser" name="eUser"  placeholder="Email" >
                <label for="eUser" id="erroeUser" >Correo ya registrado</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="Foto">Imagen</label>
           <input type="file" class="form-control-file required" id="Foto" name="Foto" >
           <label for="Foto" id="erroImage">Solo es permitido archivos .jpg y .png</label>
          </div>


          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="cpUser">Contraseña</label>
                <input class="form-control "  type="password" id="cpUser" name="cpUser"  placeholder="Contraseña" >
                <label for="cpUser" id="erropass1">Debe contener minimo 8 caracteres</label>
                <label for="cpUser" id="erropass2">La contraseña no coincide</label>
              </div>
              <div class="col-md-6">
                <label for="pUser">Confirme Contraseña</label>
                <input class="form-control"  type="password" id="pUser" name="pUser"  placeholder="Confirme Contraseña" >
                <label for="pUser" id="errorpas1">Contraseña muy debil</label>
                <label for="pUser" id="errorpas2">La contraseña no coincide</label>
              </div>
            </div>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="button" id="enviar">Crear</button>
        </form>
        <div class="text-center">
          <a class="d-block small mt-3" href="../index.php">Atras</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Bootstrap core JavaScript-->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/popper/popper.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
 
  
  <script type="text/javascript" src="../js/nuser.js"></script>
</body>

</html>

