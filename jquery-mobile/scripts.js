// JavaScript Document
$(document).ready(function () {
	$('.ui-page').css('background-color', '#ECF2FE');
	$('#botonLogin').click(function() {
	$("#div_ajax_loader").html("<img  src='./img/default-loader.gif'  width='35px'>");
    	// recolecta los valores que inserto el usuario
		var datosUsuario = $("#nombredeusuario").val()
		var datosPassword = "";
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/server2.php?jsoncallback=?"
		 //alert(datosPassword)
		$.getJSON(archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				var nombreUsuario= respuestaServer.nombre;
				/// si la validacion es correcta, muestra la pantalla "home"
				//alert('DATOS VALIDOS');
				$.mobile.changePage("#inicio");
				document.getElementById("nombre_usuario22").innerHTML=nombreUsuario;
				var valor_select=respuestaServer.select1;
				var valor_select_value=respuestaServer.select_value;
				var valor_select_value_array=valor_select_value.split("-");
				//alert(valor_select_value);
				var array_select1=valor_select.split("-");
				   select = document.getElementById("select11");
					for ( i = 0; i < array_select1.length-1; i ++ ) {
						option = document.createElement( 'option' );
						option.text = array_select1[i];
						option.value = valor_select_value_array[i];
						select.add( option );
					}
				//alert(respuestaServer.select1);
				}else{
				/// ejecutar una conducta cuando la validacion falla
				alert("datos invalidos");
				}
		})
		return false;
	})
});
$(document).ready(function () {
		$('#botonLogin_validar').click(function() {
		var identificacion_usuario = $("#identificacion_validar").val()
		//alert("hola")
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/validate.php?jsoncallback=?"
		$.getJSON(archivoValidacion, {ident:identificacion_usuario})		
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				alert("BIENVENIDO \n"+respuestaServer.nombre)
				$.mobile.changePage("#inicio");
				$("#nombre_cliente").val(respuestaServer.nombre);
				$("#direccion_cliente").val(respuestaServer.direccion);
				$("#telefono_cliente").val(respuestaServer.telefono);
				$("#identicacion_cliente").val(identificacion_usuario);
				}
				if(respuestaServer.validacion == "NO"){
				alert("CLIENTE NO EXISTE\nPOR FAVOR INGRESA A LA APLICACION \nY REGISTRESE");	
				}
				if(respuestaServer.validacion == "error"){
				alert("ERROR ESTRUCTURA DATOS");	
				}
				if(respuestaServer.validacion == "OKUSER"){
				alert("USUARIO  MOTORIZADO");
				$.mobile.changePage("#inicio_motorizado");	
				}
				
				
		});
		return false;
			})
	});
$(document).ready(function () {
		$('#botton_volver').click(function() {
		$.mobile.changePage("#inicio")
		});
		$('#botton_guardar').click(function() {
			alert("MOVILE");
		$.mobile.changePage("#menu_guardar")
		});
	    /////////////////////////////////////////////////////////
		$('#botton_buscar').click(function() {
		$.mobile.changePage("#menu_consultar")
		});
	    ////////////////////////////////////////////////////////	
		$('#botton_subir_foto').click(function() {
		$.mobile.changePage("#menu_subir_foto")
		});
	    ////////////////////////////////////////////////////
		$('#botton_ver_mapa').click(function() {
		$.mobile.changePage("#menu_maapa")
		});
	    ////////////////////////////////////////////////////
		$('#boton_ver_menu').click(function() {
		$.mobile.changePage("#menu_cuenta")
		});
	    ////////////////////////////////////////////////////
	    $('#botton_agregar').click(function() {
		//$.mobile.changePage("#inicio")
		////////////////////////////////////////OPTENER COORDENADAS CLIENTE/////////////////////////
		OptenerCoordenadas();
		});
		$('#registrar_usuario').click(function() {
		$.mobile.changePage( "#solicitar_pedido", { role: "dialog" } );
		});
		$('#registrar_pedido').click(function() {
		$.mobile.changePage($('#menu_cuenta'), 'pop', false, true);
		var coordenadas=OptenerCoordenadas_cliente();
		});	
		///////CIERRA UN DIALOGO ////////
		$('#close_dialog').click(function() {
		 $.mobile.changePage($('#menu_cuenta'), 'pop', false, true); 
		});
		$('#cancelar_pedido').click(function() {
		 $.mobile.changePage($('#menu_cuenta'), 'pop', false, true); 
		});
	    
		$('#abrir_dialogo').click(function() {
			alert("abrir");
		$.mobile.changePage( "#dialogPage", { role: "dialog" } );
		});
	   //////FIN DIALOGO////
	   //////INICIO  DEPLIEGUE LISTAS ////
	$('#lista_bebidas').click(function() {
	var lista="<li><a href='#'>Badajoz</a></li> <li><a href='#'>Badajoz</a></li><li><a href='#'>Caceres</a></li><li><a href='#'>Caceres</a></li><li><a href='#'>Caceres</a></li>";
	$("#prueba_lista_automatica").html(lista);	
	$("#prueba_lista_automatica").listview();
	$("#prueba_lista_automatica").listview('refresh');
	});
	$('#lista_postres').click(function() {
		var datosUsuario = "asell";
		var datosPassword = "asell";
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/consulta1.php?jsoncallback=?"
		 //alert(datosPassword)
		$.getJSON(archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				var valor_select=respuestaServer.select1;
				var valor_select_value=respuestaServer.select_value;
				var valor_select_value_array=valor_select_value.split("-");
				//alert(valor_select_value);
				var array_select1=valor_select.split("-");
				var cadena_lista="";   
					for ( i = 0; i < array_select1.length-1; i ++ ) {
						cadena_lista=cadena_lista+"<li><a href='#'>"+valor_select_value_array[i]+"  Valor$ "+" "+array_select1[i]+"</a></li>";
					}
				$("#div_lista_postres").html(cadena_lista);	
				$("#div_lista_postres").listview();
				$("#div_lista_postres").listview('refresh');
				//alert(respuestaServer.select1);
				}else{
				/// ejecutar una conducta cuando la validacion falla
				alert("datos invalidos");
				}
		})
		return true;	
	});
	////FIN DELPLIEGUE  LISTAS////

	
});  ////end  FUNCTION READY
	
	
			function OptenerCoordenadas_cliente(){
				if(navigator.geolocation){
					//alert("COORDENADAS ");
					navigator.geolocation.getCurrentPosition(showGPS_cliente,errores_);
					}else{
					alert("No funciona  el gps");
					var coordenadas="4.728180000000001,-74.05041";
					var identicacion_cliente = $("#identicacion_cliente").val();
		var nombre_cliente= $("#nombre_cliente").val();
		var direccion_cliente = $("#direccion_cliente").val();
		var telefono_cliente = $("#telefono_cliente").val();
		//alert(nombre_cliente+"-"+direccion_cliente+"-"+telefono_cliente)
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/guardar_ubicacion.php?jsoncallback=?"
		$.getJSON(archivoValidacion, { identicacion_cliente:identicacion_cliente ,nombre_cliente:nombre_cliente,direccion_cliente:		    
		direccion_cliente,telefono_cliente:telefono_cliente,coordenadas:coordenadas})		
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				alert(respuestaServer.datoUno)
				alert("DATOS INGRESADOS OK");
				}else{
				/// ejecutar una conducta cuando la validacion falla
				alert("ERROR INGRESO DE DATOS");
				}
		});
		return false;
	    }
			}
			function showGPS_cliente(position){
					var lat=position.coords.latitude;
					var long=position.coords.longitude;
					var coordenadas_cli=lat+","+long;
					alert(coordenadas_cli)
					var identicacion_cliente = $("#identicacion_cliente").val();
		var nombre_cliente= $("#nombre_cliente").val();
		var direccion_cliente = $("#direccion_cliente").val();
		var telefono_cliente = $("#telefono_cliente").val();
		//alert(nombre_cliente+"-"+direccion_cliente+"-"+telefono_cliente)
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/guardar_ubicacion.php?jsoncallback=?"
		$.getJSON(archivoValidacion, { identicacion_cliente:identicacion_cliente ,nombre_cliente:nombre_cliente,direccion_cliente:		    
		direccion_cliente,telefono_cliente:telefono_cliente,coordenadas:lat,longitud:long})		
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				alert(respuestaServer.datoUno)
				alert("DATOS INGRESADOS OK");
				}else{
				/// ejecutar una conducta cuando la validacion falla
				alert("ERROR INGRESO DE DATOS");
				}
		});
		return false;	
		}
	
	
	$(document).ready(function () {
		$('#botton_buscar').click(function() {
		var dato1 = $("#dato1").val();
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/buscar.php?jsoncallback=?"
		$.getJSON(archivoValidacion, {dato1:dato1})		
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				//alert("DATOS DEVUELTOS OK");
				document.getElementById("tabla_busqueda").innerHTML=respuestaServer.tabla;
				//alert(respuestaServer.tabla);
				}else{
				/// ejecutar una conducta cuando la validacion falla
				alert("ERROR INGRESO DE DATOS");
				}
		});
		return false;
		});
	});	
	
	
	

				function OptenerCoordenadas(){
					if(navigator.geolocation){
						alert("COORDENADAS ");
						navigator.geolocation.getCurrentPosition(showGPS_,errores_);
						}else{
					    alert("No funciona  el gps");
						Optener_coordenadas_direccion(4.728180000000001,-74.05041);
						}
					}
				function gpsError_(error){
						alert("Error  con el gps");
					    lat='4.7214847';
	                    long='-74.0567932';
						
					}
		function errores_(err) {
            if (err.code == 0) {
              alert("Oops! Algo ha salido mal");
            }
            if (err.code == 1) {
              alert("Oops! No has aceptado compartir tu posición");
            }
            if (err.code == 2) {
              alert("Oops! No se puede obtener la posición actual");
			  			lat='4.7214847';
	                    long='-74.0567932';
            }
            if (err.code == 3) {
              alert("Oops! Hemos superado el tiempo de espera");
            }
        }
				
				
function showGPS_(position){
		var lat=position.coords.latitude;
		var long=position.coords.longitude;
		var ciudad = $("#select11").val();
		var sexo= $("#sexo").val();
		var dato1 = $("#dato1").val();
		var dato2 = $("#dato2").val();
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/guardar.php?jsoncallback=?"
		$.getJSON(archivoValidacion, { dato1:dato1 ,dato2:dato2,ciudad:ciudad,sexo:sexo})		
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				alert("DATOS INGRESADOS OK");
				}else{
				/// ejecutar una conducta cuando la validacion falla
				alert("ERROR INGRESO DE DATOS");
				}
		});
		return false;
}

function Optener_coordenadas_direccion(latitud,longitud){
	alert(latitud+"-"+longitud)
		var ciudad = $("#select11").val();
		var sexo= $("#sexo").val();
		var dato1 = $("#dato1").val();
		var dato2 = $("#dato2").val();
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/guardar.php?jsoncallback=?"
		$.getJSON(archivoValidacion, { dato1:dato1 ,dato2:dato2,ciudad:ciudad,sexo:sexo,latitud:latitud,longitud:longitud})		
		.done(function(respuestaServer) {
				if(respuestaServer.validacion == "OK"){
				alert("DATOS INGRESADOS OK");
				}else{
				/// ejecutar una conducta cuando la validacion falla
				alert("ERROR INGRESO DE DATOS");
				}
		});
		return false;
}		
		
		///////////////////////////////////////FIN COORDENADAS CLIENTE/////////////////////////////////

	
		
		