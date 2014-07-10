// JavaScript Document
$(document).ready(function () {
	$('.ui-page').css('background-color', '#ECF2FE');
	$('#formulario').submit(function() {
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
		$('#botton_volver').click(function() {
		$.mobile.changePage("#inicio")
		});
	});
	
$(document).ready(function () {
		$('#botton_guardar').click(function() {
		$.mobile.changePage("#menu_guardar")
		});
	});	
	/////////////////////////////////////////////////////////
$(document).ready(function () {
		$('#botton_buscar').click(function() {
		$.mobile.changePage("#menu_consultar")
		});
	});	
	////////////////////////////////////////////////////////	
	$(document).ready(function () {
		$('#botton_subir_foto').click(function() {
		$.mobile.changePage("#menu_subir_foto")
		});
	});	
	////////////////////////////////////////////////////
		$(document).ready(function () {
		$('#botton_ver_mapa').click(function() {
		$.mobile.changePage("#menu_maapa")
		});
	});	
	////////////////////////////////////////////////////
		$(document).ready(function () {
		$('#botton_picada_mundial').click(function() {
		$.mobile.changePage("#menu_picada_mundial")
		});
	});	
	////////////////////////////////////////////////////
$(document).ready(function () {
		$('#botton_agregar').click(function() {
		//$.mobile.changePage("#inicio")
		////////////////////////////////////////OPTENER COORDENADAS CLIENTE/////////////////////////
		OptenerCoordenadas();
		});
	});	
	
	$(document).ready(function () {
		$('#registrar_usuario').click(function() {
		document.getElementById("tabla_identificacion_cliente").style.display="block";
		});
	});	
	
	$(document).ready(function () {
		$('#registrar_pedido').click(function() {
		document.getElementById("tabla_identificacion_cliente").style.display="none";
		var coordenadas=OptenerCoordenadas_cliente();
		//alert(coordenadas)
		var identicacion_cliente = $("#identicacion_cliente").val();
		var nombre_cliente= $("#nombre_cliente").val();
		var direccion_cliente = $("#direccion_cliente").val();
		var telefono_cliente = $("#telefono_cliente").val();
		//alert(nombre_cliente+"-"+direccion_cliente+"-"+telefono_cliente)
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/guardar_ubicacion.php?jsoncallback=?"
		$.getJSON(archivoValidacion, { identicacion_cliente:identicacion_cliente ,nombre_cliente:nombre_cliente,direccion_cliente:direccion_cliente,telefono_cliente:telefono_cliente,coordenadas:coordenadas})		
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
		});
	});	
	
			function OptenerCoordenadas_cliente(){
				if(navigator.geolocation){
					//alert("COORDENADAS ");
					navigator.geolocation.getCurrentPosition(showGPS_cliente,errores_);
					}else{
					alert("No funciona  el gps");
					var coordenadas="4.728180000000001,-74.05041";
					return  coordenadas;
					//Optener_coordenadas_direccion(4.728180000000001,-74.05041);
					}
			}
			function showGPS_cliente(position){
					var lat=position.coords.latitude;
					var long=position.coords.longitude;
					var coordenadas_cli=lat+","+long;
					return coordenadas_cli;
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
		