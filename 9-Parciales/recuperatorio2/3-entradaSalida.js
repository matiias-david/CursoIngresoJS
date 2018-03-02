//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho = document.getElementById("ancho").value;
	var largo = document.getElementById("largo").value;
	var cuenta;
	var cuenta = (ancho*2 + largo*2) + 6;
	alert ("se necesitan de alambre" + cuenta + "metros" );	
	
}

