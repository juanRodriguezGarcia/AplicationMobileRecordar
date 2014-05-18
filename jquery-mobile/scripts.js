// JavaScript Document
$(document).ready(function () {
	$('#formulario').submit(function() {
		// recolecta los valores que inserto el usuario
		var datosUsuario = $("#nombredeusuario").val()
		var datosPassword = $("#clave").val()
		archivoValidacion = "http://juanrodriguezg.site90.com/webservices/server2.php?jsoncallback=?"
		 //alert(datosPassword)
		$.getJSON(archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
		.done(function(respuestaServer) {
		//alert("\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador+ "\n" +respuestaServer.respuesta+ "\n" +respuestaServer.validacion)
				if(respuestaServer.validacion == "OK"){
				var nombreUsuario= respuestaServer.nombre;
				/// si la validacion es correcta, muestra la pantalla "home"
				alert('DATOS VALIDOS');
				$.mobile.changePage("#home");
				document.getElementById("nombre_usuario").innerHTML=nombreUsuario;
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
		$('#botton_agregar').click(function() {
		//$.mobile.changePage("#inicio")
		var ciudad = $("#select11").val();
		alert(ciudad);
		});
	});	