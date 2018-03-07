//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	
	
	var largo
	var ancho
	var cuenta;
	
	largo = document.getElementById("largo").value;
	ancho = document.getElementById("ancho").value;
	ancho = parseInt (ancho)
	largo = parseInt (largo)
	
	cuenta = (ancho*2 + largo*2) * 6 
	alert ("se necesitan " + cuenta + (" de alambre"))
    
}

