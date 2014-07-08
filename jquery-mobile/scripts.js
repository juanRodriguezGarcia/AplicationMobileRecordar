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
		getGPS();
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
		});
	});	
	
	
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
	
	