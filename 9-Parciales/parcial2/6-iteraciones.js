//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe = prompt ("Ingrese el dia de la semana que desee. ")
	var bandera
	while ( importe < 0 )
	{
		importe = prompt ("")
		importe = parseInt (importe)
	}
	
}

