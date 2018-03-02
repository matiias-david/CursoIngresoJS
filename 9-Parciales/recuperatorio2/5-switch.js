//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesDelAño = prompt ("Ingrese algun mes del año ")
	switch (mesDelAño)
	{	
		case "enero":
		case "febrero":
			alert ("Veranito!!!")
		break;
		
		default:
			alert ("extraño enero y febrero!!!")

	}
	
}

