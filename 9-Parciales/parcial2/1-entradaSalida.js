//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var perimetro = document.getElementById("lado").value;
	perimetro = parseInt (perimetro)
	perimetro = perimetro * 3;

	alert( "el perimetro es  "  +  perimetro);
	
}

