$(document).ready(function(){
   $(".messages").hide();

    var fileExtension = "";
   
    $(':file').change(function()
    {

        var file = $("#Foto")[0].files[0];
        
        var fileName = file.name;
        
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        
        var fileSize = file.size;
        
        var fileType = file.type;
       
       if ((fileType != "image/jpeg")&&(fileType != "image/png")) {
            $('#erroImage').css('display','block');
            $('#enviar').attr("disabled", true);
            console.log(fileType);
        }else{$('#enviar').attr("disabled", false);$('#erroImage').css('display','none');};
       
    	
    });


    $("body").on("change","#eUser",function(){
    
        var eUser = $('#eUser').val();
         
        jQuery.ajax({
                        url: '../php/duplicate.php',
                        type: 'POST',
                        data: $('#formnUser').serialize(),
                         beforeSend: function() {
                            $('#enviar').val('Espere');
                         }
                    })
                    .done(function(data) {
                        console.log(data);
                       
                        var flag =  data.indexOf("true");

                        switch(flag) {
                            case 11:
                                $('#erroeUser').css('display','block');
                                $('#enviar').attr("disabled", true);
                                                                
                                break;
                            case -1:
                                $('#erroeUser').css('display','none');
                                $('#enviar').attr("disabled", false);
                                break;
                        }
                    });
    });



    $("body").on("change","#pUser",function(){
    
        var cpUser = $('#cpUser').val();
        var pUser = $('#pUser').val();
        if(pUser != cpUser) {
                $('#erropass2').css('display','block');
                $('#errorpas2').css('display','block');
                $('#enviar').attr("disabled", true);
                        // alert("Los campos contraseña no son iguales");
            };
        if(pUser == cpUser){
                $('#erropass2').css('display','none');
                $('#errorpas2').css('display','none');
                $('#enviar').attr("disabled", false);
            };
    });

    $("body").on("change","#cpUser",function(){
    
        var cpUser = $('#cpUser').val();
        var pUser = $('#pUser').val();
        if(pUser != cpUser) {
                $('#erropass2').css('display','block');
                $('#errorpas2').css('display','block');
                $('#enviar').attr("disabled", true);
                        // alert("Los campos contraseña no son iguales");
            };
        if(pUser == cpUser){
                $('#erropass2').css('display','none');
                $('#errorpas2').css('display','none');
                $('#enviar').attr("disabled", false);
            };
    });


    $(':button').click(function(){
        var nUser = $("#nUser").val();
        var aUser = $("#aUser").val();
        var dUser = $("#dUser").val();
        var cUser = $("#cUser").val();
        var tUser = $("#tUser").val();
        var eUser = $("#eUser").val();
        var Foto = $("#Foto").val();
        var cpUser = $('#cpUser').val();
        var pUser = $('#pUser').val();


        if ((nUser=='')||(aUser=='')||(dUser=='')||(cUser=='')||(tUser=='')||(eUser=='')||(Foto=='') ||(pUser=='')||(cpUser=='')) {
            alert("Tiene Campos vacios");
        }else{
            if(pUser != cpUser) {
            
                $('#erropass2').css('display','block');
                $('#errorpas2').css('display','block');
                        // alert("Los campos contraseña no son iguales");
            }else{

                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(eUser)){


                    jQuery.ajax({
                        url: '../php/duplicate.php',
                        type: 'POST',
                        data: $('#formnUser').serialize(),
                         beforeSend: function() {
                            $('.btn-lg').val('Espere');
                         }
                    })
                    .done(function(data) {
                        console.log(data);
                       
                        var flag =  data.indexOf("true");

                        switch(flag) {
                            case 11:
                                $('#erroeUser').css('display','block');
                                $('#enviar').attr("disabled", true);
                                                                
                                break;
                            case -1:
                                $('#erroeUser').css('display','none');
                                $('#enviar').attr("disabled", false);
                                                                
                                var formData = new FormData($("#formnUser")[0]);
                                
                             
                                $.ajax({
                                    url: 'newUser.php',  
                                    type: 'POST',
                                            
                                    data: formData,
                                    //necesario para subir archivos via ajax
                                    cache: false,
                                    contentType: false,
                                    processData: false,
                                    beforeSend: function(){
                                        $('#enviar').attr("disabled", true);
                                        console.log('en proceso');
                                    },
                                    success: function(data){
                                       
                                        console.log('La imagen ha subido correctamente');
                                        location.href = '../php/home.php';                
                                    },
                                    
                                    error: function(){

                                        console.log('error');
                                        location.href = '../php/registro.php';
                                        
                                    }
                                })

                            
                                // fin funcion
                                break;
                        }                       
                        
                 })
                    
                }else{
                    alert("correo no valido");
                }
            }

        }
        
        
 


    });






    var Departamentos=[
        "AMAZONAS",
        "ANTIOQUIA",
        "ARAUCA",
        "ATLANTICO",
        "BOLIVAR",
        "BOYACA",
        "CALDAS",
        "CAQUETA",
        "CASANARE",
        "CAUCA",
        "CESAR",
        "CHOCO",
        "CORDOBA",
        "CUNDINAMARCA",
        "GUAINIA",
        "GUAJIRA",
        "GUAVIARE",
        "HUILA",
        "MAGDALENA",
        "META",
        "N_SANTANDER",
        "NARINO",
        "PUTUMAYO",
        "QUINDIO",
        "RISARALDA",
        "SAN ANDRES",
        "SANTANDER",
        "SUCRE",
        "TOLIMA",
        "VALLE DEL CAUCA",
        "VAUPES",
        "VICHADA"
    ];

    for (var i = 0; i<Departamentos.length; i++) {
        
            $('#dUser').append("<option value="+Departamentos[i]+">"+Departamentos[i]+"</option>");           
        
        
    };

    var Ciudades = [ 
        ['LETICIA', 'EL ENCANTO','LA CHORRERA','LA PEDRERA','LA VICTORIA','MIRITI-PARANA','PUERTO ALEGRIA','PUERTO ARICA','PUERTO NARINO', 'SANTANDER', 'TARAPACA' ], 
        ['ABEJORRAL', 'ABRIAQUI','ALEJANDRIA','AMAGA','AMALFI','ANDES','ANGELOPOLIS','ANGOSTURA','ANORI', 'ANZA', 'APARTADO', 'ARBOLETES', 'ARGELIA', 'ARMENIA', 'BARBOSA', 'BELLO', 'BELMIRA', 'BETANIA', 'BETULIA', 'BRICENO', 'BURITICA', 'CACERES', 'CAICEDO', 'CALDAS', 'CAMPAMENTO', 'CANASGORDAS', 'CARACOLI', 'CARAMANTA', 'CAREPA', 'CARMEN DE VIBORAL', 'CAROLINA', 'CAUCASIA', 'CHIGORODO', 'CISNEROS', 'CIUDAD BOLIVAR', 'COCORNA', 'CONCEPCION', 'CONCORDIA', 'COPACABANA', 'DABEIBA', 'DON MATIAS', 'EBEJICO', 'EL BAGRE', 'ENTRERRIOS', 'ENVIGADO', 'FREDONIA', 'FRONTINO', 'GIRALDO', 'GIRARDOTA', 'GOMEZ PLATA', 'GRANADA', 'GUADALUPE', 'GUARNE', 'GUATAPE', 'HELICONIA', 'HISPANIA', 'ITAG&Uuml;I', 'ITUANGO', 'JARDIN', 'JERICO', 'LA CEJA', 'LA ESTRELLA', 'LA PINTADA', 'LA UNION', 'LIBORINA', 'MACEO', 'MARINILLA', 'MEDELLIN', 'MONTEBELLO', 'MURINDO', 'MUTATA', 'NARINO', 'NECHI', 'NECOCLI', 'OLAYA', 'PENOL', 'PEQUE', 'PUEBLORRICO', 'PUERTO BERRIO', 'PUERTO NARE', 'PUERTO TRIUNFO', 'REMEDIOS', 'RETIRO', 'RIONEGRO', 'SABANALARGA', 'SABANETA', 'SALGAR', 'SAN ANDRES', 'SAN CARLOS', 'SAN FRANCISCO', 'SAN JERONIMO', 'SAN JOSE DE LA MONTANA', 'SAN JUAN DE URABA', 'SAN LUIS', 'SAN PEDRO', 'SAN PEDRO DE URABA', 'SAN RAFAEL', 'SAN ROQUE', 'SAN VICENTE', 'SANTA BARBARA', 'SANTA FE DE ANTIOQUIA', 'SANTA ROSA DE OSOS', 'SANTO DOMINGO', 'SANTUARIO', 'SEGOVIA', 'SONSON', 'SOPETRAN', 'TAMESIS', 'TARAZA', 'TARSO', 'TITIRIBI', 'TOLEDO', 'TURBO', 'URAMITA', 'URRAO', 'VALDIVIA', 'VALPARAISO', 'VEGACHI', 'VENECIA', 'VIGIA DEL FUERTE', 'YALI', 'YARUMAL', 'YOLOMBO', 'YONDO', 'ZARAGOZA' ], 
        ['ARAUCA', 'ARAUQUITA','CRAVO NORTE','FORTUL','PUERTO RONDON','SARAVENA','TAME'], 
        ['BARANOA', 'BARRANQUILLA','CAMPO DE LA CRUZ','CANDELARIA','GALAPA','JUAN DE ACOSTA','LURUACO','MALAMBO','MANATI', 'PALMAR DE VARELA', 'PIOJO', 'POLONUEVO', 'PONEDERA', 'PUERTO COLOMBIA', 'REPELON', 'SABANAGRANDE', 'SABANALARGA', 'SANTA LUCIA', 'SANTO TOMAS', 'SOLEDAD', 'SUAN', 'TUBARA', 'USIACURI'], 
        ['ACHI', 'ALTOS DEL ROSARIO','ARENAL','ARJONA','ARROYOHONDO','BARRANCO DE LOBA','CALAMAR','CANTAGALLO','CARTAGENA DE INDIAS', 'CICUCO', 'CLEMENCIA', 'CORDOBA', 'EL CARMEN DE BOLIVAR', 'EL GUAMO', 'EL PENON', 'HATILLO DE LOBA', 'MAGANGUE', 'MAHATES', 'MARGARITA', 'MARIA LA BAJA', 'MOMPOS', 'MONTECRISTO', 'MORALES', 'PINILLOS', 'REGIDOR', 'RIOVIEJO', 'SAN CRISTOBAL', 'SAN ESTANISLAO', 'SAN FERNANDO', 'SAN JACINTO', 'SAN JACINTO DEL CAUCA', 'SAN JUAN NEPOMUCENO', 'SAN MARTIN DE LOBA', 'SAN PABLO', 'SANTA CATALINA', 'SANTA ROSA', 'SANTA ROSA DEL SUR', 'SIMITI', 'SOPLAVIENTO', 'TALAIGUA NUEVO', 'TIQUISIO', 'TURBACO', 'TURBANA', 'VILLANUEVA', 'ZAMBRANO'], 
        ['ALMEIDA', 'AQUITANIA','ARCABUCO','BELEN','BERBEO','BETEITIVA','BOAVITA','BOYACA','BRICENO', 'BUENAVISTA', 'BUSBANZA', 'CALDAS', 'CAMPOHERMOSO', 'CERINZA', 'CHINAVITA', 'CHIQUINQUIRA', 'CHIQUIZA', 'CHISCAS', 'CHITA', 'CHITARAQUE', 'CHIVATA', 'CHIVOR', 'CIENEGA', 'COMBITA', 'COPER', 'CORRALES', 'COVARACHIA', 'CUBARA', 'CUCAITA', 'CUITIVA', 'DUITAMA', 'EL COCUY', 'EL ESPINO', 'FIRAVITOBA', 'FLORESTA', 'GACHANTIVA', 'GAMEZA', 'GARAGOA', 'GUACAMAYAS', 'GUATEQUE', 'GUAYATA', 'GUICAN', 'IZA', 'JENESANO', 'JERICO', 'LA CAPILLA', 'LA UVITA', 'LA VICTORIA', 'LABRANZAGRANDE', 'MACANAL', 'MARIPI', 'MIRAFLORES', 'MONGUA', 'MONGUI', 'MONIQUIRA', 'MOTAVITA', 'MUZO', 'NOBSA', 'NUEVO COLON', 'OICATA', 'OTANCHE', 'PACHAVITA', 'PAEZ', 'PAIPA', 'PAJARITO', 'PANQUEBA', 'PAUNA', 'PAYA', 'PAZ DE RIO', 'PESCA', 'PISVA', 'PUERTO BOYACA', 'QUIPAMA', 'RAMIRIQUI', 'RAQUIRA', 'RONDON', 'SABOYA', 'SACHICA', 'SAMACA', 'SAN EDUARDO', 'SAN JOSEDE PARE', 'SAN LUIS DE GACENO', 'SAN MATEO', 'SAN MIGUEL DE SEMA', 'SAN PABLO DE BORBUR', 'SANTA MARIA', 'SANTA ROSA DE VITERBO', 'SANTA SOFIA', 'SANTANA', 'SATIVANORTE', 'SATIVASUR', 'SIACHOQUE', 'SOATA', 'SOCHA', 'SOCOTA', 'SOGAMOSO', 'SOMONDOCO', 'SORA', 'SORACA', 'SOTAQUIRA', 'SUSACON', 'SUTAMARCHAN', 'SUTATENZA', 'TASCO', 'TENZA', 'TIBANA', 'TIBASOSA', 'TINJACA', 'TIPACOQUE', 'TOCA', 'TOG&Uuml;I', 'TOPAGA', 'TOTA', 'TUNJA', 'TUNUNGUA', 'TURMEQUE', 'TUTA', 'TUTAZA', 'UMBITA', 'VENTAQUEMADA', 'VILLA DE LEIVA', 'VIRACACHA', 'ZETAQUIRA'], 
        ['AGUADAS', 'ANSERMA','ARANZAZU','BELALCAZAR','CHINCHINA','FILADELFIA','LA DORADA','LA MERCED','MANIZALES', 'MANZANARES', 'MARMATO', 'MARQUETALIA', 'MARULANDA', 'NEIRA', 'NORCASIA', 'PACORA', 'PALESTINA', 'PENSILVANIA', 'RIOSUCIO', 'RISARALDA', 'SALAMINA', 'SAMANA', 'SAN JOSE', 'SUPIA', 'VICTORIA', 'VILLAMARIA', 'VITERBO'], 
        ['ALBANIA', 'BELEN DE LOS ANDAQUIES','CARTAGENA DEL CHAIRA','CURILLO','EL DONCELLO','EL PAUJIL','FLORENCIA','MILAN','MONTANITA', 'MORELIA', 'PUERTO RICO', 'SAN JOSE DEL FRAGUA', 'SAN VICENTE DEL CAGUAN', 'SOLANO', 'SOLITA', 'VALPARAISO'], 
        ['AGUAZUL', 'CHAMEZA','HATO COROZAL','LA SALINA','MANI','MONTERREY','NUNCHIA','OROCUE','PAZ DE ARIPORO', 'PORE', 'RECETOR', 'SABANALARGA', 'SACAMA', 'SAN LUIS DE PALENQUE', 'TAMARA', 'TAURAMENA', 'TRINIDAD', 'VILLANUEVA', 'YOPAL'],  
        ['ALMAGUER', 'ARGELIA','BALBOA','BOLIVAR','BUENOS AIRES','CAJIBIO','CALDONO','CALOTO','CORINTO', 'EL TAMBO', 'FLORENCIA', 'GUAPI', 'INZA', 'JAMBALO', 'LA SIERRA', 'LA VEGA', 'LOPEZ', 'MERCADERES', 'MIRANDA', 'MORALES', 'PADILLA', 'PAEZ', 'PATIA', 'PIAMONTE', 'PIENDAMO', 'POPAYAN', 'PUERTO TEJADA', 'PURACE', 'ROSAS', 'SAN SEBASTIAN', 'SANTA ROSA', 'SANTANDER DE QUILICHAO', 'SILVIA', 'SOTARA', 'SUAREZ', 'SUCRE', 'TIMBIO', 'TIMBIQUI', 'TORIBIO', 'TOTORO', 'VILLA RICA'],  
        ['AGUACHICA', 'AGUSTIN CODAZZI','ASTREA','BECERRIL','BOSCONIA','CHIMI HAGUA','CHIRIGUANA','CURUMANI','EL COPEY', 'EL PASO', 'GAMARRA', 'GONZALEZ', 'LA GLORIA', 'LA JAGUA DE IBIRICO', 'LA PAZ', 'MANAURE BALCON DEL CESAR', 'PAILITAS', 'PELAYA', 'PUEBLO BELLO', 'RIO DE ORO', 'SAN ALBERTO', 'SAN DIEGO', 'SAN MARTIN', 'TAMALAMEQUE', 'VALLEDUPAR'],  
        ['ACANDI', 'ALTO BAUDO','ATRATO','BAGADO','BAHIA SOLANO','BAJO BAUDO','BOJAYA','CARMEN DEL DARIEN','CERTEGUI', 'CONDOTO', 'EL CANTON DEL SAN PABLO', 'EL CARMEN', 'EL LITORAL DEL SAN JUAN', 'ITSMINA', 'JURADO', 'LLORO', 'MEDIO ATRATO', 'MEDIO BAUDO', 'MEDIO SAN JUAN', 'NOVITA', 'NUQUI', 'QUIBDO', 'RIO IRO', 'RIO QUITO', 'RIOSUCIO', 'SAN JOSE DEL PALMAR', 'SIPI', 'TADO', 'UNGUIA', 'UNION PANAMERICANA'],  
        ['AYAPEL', 'BUENAVISTA','CANALETE','CERETE','CHIMA','CHINU','CIENAGA DE ORO','COTORRA','LA APARTADA', 'LORICA', 'LOS CORDOBAS', 'MOMIL', 'MONITOS', 'MONTELIBANO', 'MONTERIA', 'PLANETA RICA', 'PUEBLO NUEVO', 'PUERTO ESCONDIDO', 'PUERTO LIBERTADOR', 'PURISIMA', 'SAHAGUN', 'SAN ANDRES DE SOTAVENTO', 'SAN ANTERO', 'SAN BERNARDO DEL VIENTO', 'SAN CARLOS', 'SAN PELAYO', 'TIERRALTA', 'VALENCIA'],  
        ['AGUA DE DIOS', 'ALBAN','ANAPOIMA','ANOLAIMA','APULO','ARBELAEZ','BELTRAN','BITUIMA','BOGOTA','BOJACA', 'CABRERA', 'CACHIPAY', 'CAJICA', 'CAPARRAPI', 'CAQUEZA', 'CARMEN DE CARUPA', 'CHAGUANI', 'CHIA', 'CHIPAQUE', 'CHOACHI', 'CHOCONTA', 'COGUA', 'COTA', 'CUCUNUBA', 'EL COLEGIO', 'EL PENON', 'EL ROSAL', 'FACATATIVA', 'FOMEQUE', 'FOSCA', 'FUNZA', 'FUQUENE', 'FUSAGASUGA', 'GACHALA', 'GACHANCIPA', 'GACHETA', 'GAMA', 'GIRARDOT', 'GRANADA', 'GUACHETA', 'GUADUAS', 'GUASCA', 'GUATAQUI', 'GUATAVITA', 'GUAYABAL DE SIQUIMA', 'GUAYABETAL', 'GUTIERREZ', 'JERUSALEN', 'JUNIN', 'LA CALERA', 'LA MESA', 'LA PALMA', 'LA PENA', 'LA VEGA', 'LENGUAZAQUE', 'MACHETA', 'MADRID', 'MANTA', 'MEDINA', 'MOSQUERA', 'NARINO', 'NEMOCON', 'NILO', 'NIMAIMA', 'NOCAIMA', 'PACHO', 'PAIME', 'PANDI', 'PARATEBUENO', 'PASCA', 'PUERTO SALGAR', 'PULI', 'QUEBRADANEGRA', 'QUETAME', 'QUIPILE', 'RICAURTE', 'SAN ANTONIO DE TEQUENDAMA', 'SAN BERNARDO', 'SAN CAYETANO', 'SAN FRANCISCO', 'SAN JUAN DE RIOSECO', 'SASAIMA', 'SESQUILE', 'SIBATE', 'SILVANIA', 'SIMIJACA', 'SOACHA', 'SOPO', 'SUBACHOQUE', 'SUESCA', 'SUPATA', 'SUSA', 'SUTATAUSA', 'TABIO', 'TAUSA', 'TENA', 'TENJO', 'TIBACUY', 'TIBIRITA', 'TOCAIMA', 'TOCANCIPA', 'TOPAIPI', 'UBALA', 'UBAQUE', 'UBATE', 'UNE', 'UTICA', 'VENECIA', 'VERGARA', 'VIANI', 'VILLAGOMEZ', 'VILLAPINZON', 'VILLETA', 'VIOTA', 'YACOPI', 'ZIPACON', 'ZIPAQUIRA'],  
        ['BARRANCO MINA', 'CACAHUAL','INIRIDA','LA GUADALUPE','MAPIRIPANA','MORICHAL','PANA-PANA','PUERTO COLOMBIA','SAN FELIPE'],  
        ['ALBANIA', 'BARRANCAS','DIBULLA','DISTRACCION','EL MOLINO','FONSECA','HATO NUEVO','LA JAGUA DEL PILAR','MAICAO', 'MANAURE', 'RIOHACHA', 'SAN JUAN DEL CESAR', 'URIBIA', 'URUMITA', 'VILLANUEVA'],  
        ['CALAMAR', 'EL RETORNO','MIRAFLORES','SAN JOSE DEL GUAVIARE'],  
        ['ACEVEDO', 'AGRADO','AIPE','ALGECIRAS','ALTAMIRA','BARAYA','CAMPOALEGRE','COLOMBIA','ELIAS', 'GARZON', 'GIGANTE', 'GUADALUPE', 'HOBO', 'IQUIRA', 'ISNOS', 'LA ARGENTINA', 'LA PLATA', 'NATAGA', 'NEIVA', 'OPORAPA', 'PAICOL', 'PALERMO', 'PALESTINA', 'PITAL', 'PITALITO', 'RIVERA', 'SALADOBLANCO', 'SAN AGUSTIN', 'SANTA MARIA', 'SUAZA', 'TARQUI', 'TELLO', 'TERUEL', 'TESALIA', 'TIMANA', 'VILLAVIEJA', 'YAGUARA'],  
        ['ALGARROBO', 'ARACATACA','ARIGUANI','CERRO DE SAN ANTONIO','CHIVOLO','CIENAGA','CONCORDIA','EL BANCO','EL PINON', 'EL RETEN', 'FUNDACION', 'GUAMAL', 'NUEVA GRANADA', 'PEDRAZA', 'PIJINO DEL CARMEN', 'PIVIJAY', 'PLATO', 'PUEBLOVIEJO', 'REMOLINO', 'SABANAS DE SAN ANGEL', 'SALAMINA', 'SAN SEBASTIAN DE BUENAVISTA', 'SAN ZENON', 'SANTA ANA', 'SANTA BARBARA DE PINTO', 'SANTA MARTA', 'SITIONUEVO', 'TENERIFE', 'ZAPAYAN', 'ZONA BANANERA'],  
        ['ACACIAS', 'BARRANCA DE UPIA','CABUYARO','CASTILLA LA NUEVA','CUBARRAL','CUMARAL','EL CALVARIO','EL CASTILLO','EL DORADO', 'FUENTE DE ORO', 'GRANADA', 'GUAMAL', 'LA MACARENA', 'LEJANIAS', 'MAPIRIPAN', 'MESETAS', 'PUERTO CONCORDIA', 'PUERTO GAITAN', 'PUERTO LLERAS', 'PUERTO LOPEZ', 'PUERTO RICO', 'RESTREPO', 'SAN CARLOS DE GUAROA', 'SAN JUAN DE ARAMA', 'SAN JUANITO', 'SAN MARTIN', 'URIBE', 'VILLAVICENCIO', 'VISTAHERMOSA'],  
        ['ABREGO', 'ARBOLEDAS','BOCHALEMA','BUCARASICA','CACHIRA','CACOTA','CHINACOTA','CHITAGA','CONVENCION', 'CUCUTA', 'CUCUTILLA', 'DURANIA', 'EL CARMEN', 'EL TARRA', 'EL ZULIA', 'GRAMALOTE', 'HACARI', 'HERRAN', 'LA ESPERANZA', 'LA PLAYA', 'LABATECA', 'LOS PATIOS', 'LOURDES', 'MUTISCUA', 'OCANA', 'PAMPLONA', 'PAMPLONITA', 'PUERTO SANTANDER', 'RAGONVALIA', 'SALAZAR', 'SAN CALIXTO', 'SAN CAYETANO', 'SANTIAGO', 'SARDINATA', 'SILOS', 'TEORAMA', 'TIBU', 'TOLEDO', 'VILLA CARO', 'VILLA DEL ROSARIO' ],  
        ['ALBAN', 'ALDANA','ANCUYA','ARBOLEDA','BARBACOAS','BELEN','BUESACO','CHACHAGUI','COLON [GEnova]', 'CONSACA', 'CONTADERO', 'CORDOBA', 'CUASPUD', 'CUMBAL', 'CUMBITARA', 'EL CHARCO', 'EL PENOL', 'EL ROSARIO', 'EL TABLON', 'EL TAMBO', 'FRANCISCO PIZARRO', 'FUNES', 'GUACHUCAL', 'GUAITARILLA', 'GUALMATAN', 'ILES', 'IMUES', 'IPIALES', 'LA CRUZ', 'LA FLORIDA', 'LA LLANADA', 'LA TOLA', 'LA UNION', 'LEIVA', 'LINARES', 'LOS ANDES', 'MAG&Uuml;I', 'MALLAMA', 'MOSQUERA', 'NARINO', 'OLAYA HERRERA', 'OSPINA', 'PASTO', 'POLICARPA', 'POTOSI', 'PROVIDENCIA', 'PUERRES', 'PUPIALES', 'RICAURTE', 'ROBERTO PAYAN', 'SAMANIEGO', 'SAN BERNARDO', 'SAN LORENZO', 'SAN PABLO', 'SAN PEDRO DE CARTAGO', 'SANDONA', 'SANTA BARBARA', 'SANTA CRUZ', 'SAPUYES', 'TAMINANGO', 'TANGUA', 'TUMACO', 'TUQUERRES', 'YACUANQUER' ],  
        ['COLON', 'MOCOA','ORITO','PUERTO ASIS','PUERTO CAICEDO','PUERTO GUZMAN','PUERTO LEGUIZAMO','SAN FRANCISCO','SAN MIGUEL', 'SANTIAGO', 'SIBUNDOY', 'VALLE DEL GUAMUEZ', 'VILLAGARZON' ],  
        ['ARMENIA', 'BUENAVISTA','CALARCA','CIRCASIA','CORDOBA','FILANDIA','GENOVA','LA TEBAIDA','MONTENEGRO', 'PIJAO', 'QUIMBAYA', 'SALENTO'],  
        ['APIA', 'BALBOA','BELEN DE UMBRIA','DOSQUEBRADAS','GUATICA','LA CELIA','LA VIRGINIA','MARSELLA','MISTRATO', 'PEREIRA', 'PUEBLO RICO', 'QUINCHIA', 'SANTA ROSA DE CABAL', 'SANTUARIO'],  
        ['PROVIDENCIA Y SANTA CATALINA', 'SAN ANDRES'],  
        ['AGUADA', 'ALBANIA','ARATOCA','BARBOSA','BARICHARA','BARRANCABERMEJA','BETULIA','BOLIVAR','BUCARAMANGA', 'CABRERA', 'CALIFORNIA', 'CAPITANEJO', 'CARCASI', 'CEPITA', 'CERRITO', 'CHARALA', 'CHARTA', 'CHIMA', 'CHIPATA', 'CIMITARRA', 'CONCEPCION', 'CONFINES', 'CONTRATACION', 'COROMORO', 'CURITI', 'EL CARMEN', 'EL GUACAMAYO', 'EL PENON', 'EL PLAYON', 'ENCINO', 'ENCISO', 'FLORIAN', 'FLORIDABLANCA', 'GALAN', 'GAMBITA', 'GIRON', 'GUACA', 'GUADALUPE', 'GUAPOTA', 'GUAVATA', 'G&Uuml;EPSA', 'HATO', 'JESUS MARIA', 'JORDAN', 'LA BELLEZA', 'LA PAZ', 'LANDAZURI', 'LEBRIJA', 'LOS SANTOS', 'MACARAVITA', 'MALAGA', 'MATANZA', 'MOGOTES', 'MOLAGAVITA', 'OCAMONTE', 'OIBA', 'ONZAGA', 'PALMAR', 'PALMAS DEL SOCORRO', 'PARAMO', 'PIEDECUESTA', 'PINCHOTE', 'PUENTE NACIONAL', 'PUERTO PARRA', 'PUERTO WILCHES', 'RIONEGRO', 'SABANA DE TORRES', 'SAN ANDRES', 'SAN BENITO', 'SAN GIL', 'SAN JOAQUIN', 'SAN JOSE DE MIRANDA', 'SAN MIGUEL', 'SAN VICENTE DE CHUCURI', 'SANTA BARBARA', 'SANTA HELENA DEL OPON', 'SIMACOTA', 'SOCORRO', 'SUAITA', 'SUCRE', 'SURATA', 'TONA', 'VALLE DE SAN JOSE', 'VELEZ', 'VETAS', 'VILLANUEVA', 'ZAPATOCA'],  
        ['BUENAVISTA', 'CAIMITO','CHALAN','COLOSO','COROZAL','COVENAS','EL ROBLE','GALERAS','GUARANDA', 'LA UNION', 'LOS PALMITOS', 'MAJAGUAL', 'MORROA', 'OVEJAS', 'PALMITO', 'SAMPUES', 'SAN BENITO ABAD', 'SAN JUAN DE BETULIA', 'SAN MARCOS', 'SAN ONOFRE', 'SAN PEDRO', 'SINCE', 'SINCELEJO', 'SUCRE', 'TOLU', 'TOLUVIEJO', ],  
        ['ALPUJARRA', 'ALVARADO','AMBALEMA','ANZOATEGUI','ARMERO','ATACO','CAJAMARCA','CARMEN DE APICALA','CASABIANCA', 'CHAPARRAL', 'COELLO', 'COYAIMA', 'CUNDAY', 'DOLORES', 'ESPINAL', 'FALAN', 'FLANDES', 'FRESNO', 'GUAMO', 'HERVEO', 'HONDA', 'IBAGUE', 'ICONONZO', 'LERIDA', 'LIBANO', 'MARIQUITA', 'MELGAR', 'MURILLO', 'NATAGAIMA', 'ORTEGA', 'PALOCABILDO', 'PIEDRAS', 'PLANADAS', 'PRADO', 'PURIFICACION', 'RIOBLANCO', 'RONCESVALLES', 'ROVIRA', 'SALDANA', 'SAN ANTONIO', 'SAN LUIS', 'SANTA ISABEL', 'SUAREZ', 'VALLE DE SAN JUAN', 'VENADILLO', 'VILLAHERMOSA', 'VILLARRICA'],  
        ['ALCALA', 'ANDALUCIA','ANSERMANUEVO','ARGELIA','BOLIVAR','BUENAVENTURA','BUGA','BUGALAGRANDE','CAICEDONIA', 'CALI', 'CALIMA', 'CANDELARIA', 'CARTAGO', 'DAGUA', 'EL AGUILA', 'EL CAIRO', 'EL CERRITO', 'EL DOVIO', 'FLORIDA', 'GINEBRA', 'GUACARI', 'JAMUNDI', 'LA CUMBRE', 'LA UNION', 'LA VICTORIA', 'OBANDO', 'PALMIRA', 'PRADERA', 'RESTREPO', 'RIOFRIO', 'ROLDANILLO', 'SAN PEDRO', 'SEVILLA', 'TORO', 'TRUJILLO', 'TULUA', 'ULLOA', 'VERSALLES', 'VIJES', 'YOTOCO', 'YUMBO', 'ZARZAL'],  
        ['CARURU', 'MITU','PACOA','PAPUNAUA','TARAIRA','YAVARATE'],  
        ['CUMARIBO', 'LA PRIMAVERA','PUERTO CARRENO','SANTA ROSALIA'], 
    ]; 


    $("body").on("change","#dUser",function(){
            $valor = $("#dUser").val();
            $posicion = Departamentos.indexOf($valor);      
            $("#cUser").children().remove();
            $('#cUser').append('<option value="">Seleccione Ciudad</option>');   
        re($posicion);
    });

    function re($posicion){
        for (var c = 0; c < Ciudades[$posicion].length; c++) {
                $('#cUser').append("<option value="+Ciudades[$posicion][c]+">"+Ciudades[$posicion][c]+"</option>");  
        };
    };










});


















