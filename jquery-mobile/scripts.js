// JavaScript Document
$(document).ready(function () {
	$('#formulario').submit(function() {
		// recolecta los valores que inserto el usuario
		var datosUsuario = $("#nombredeusuario").val()
		var datosPassword = $("#clave").val()
		archivoValidacion = "http://teledial.com.co/webservice/server2.php?jsoncallback=?"
		 //alert(datosPassword)
		$.getJSON(archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
		.done(function(respuestaServer) {
		alert("\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador+ "\n" +respuestaServer.respuesta+ "\n" +respuestaServer.validacion)
				if(respuestaServer.validacion == "OK"){
				/// si la validacion es correcta, muestra la pantalla "home"
				alert("Datos validos");
				$.mobile.changePage("#home")
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