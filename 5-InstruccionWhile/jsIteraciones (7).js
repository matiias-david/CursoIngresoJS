function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si' ;
	var msjOk = "Ingrese un numero o cancelar para salir "
	var msjError
	msj = msjOk;

	while (true) {
		// Pido numero
		respuesta = prompt (msj);
		// Seteo Mensaje
		msj = msjOk
		// Verifico btn cancelar
		if (respuesta == null) break;

		respuesta = parseInt (respuesta );
		// verifico que sea un numero
		if (isNaN (respuesta) ) {
			msj = msjError;
			continue;
		}
		//Hago las operaciones
		acumulador +=respuesta;
		contador++;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN