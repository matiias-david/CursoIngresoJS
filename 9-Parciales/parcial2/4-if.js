//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2
	var cuenta;
	
	numero1 = prompt("ingrese un numero");
	numero2 = prompt ("ingrese un numero");
	numero1 = parseInt (numero1)
	mumero2 = parseInt (numero2)

	if (numero1 == numero2)
	{	
		cuenta = numero1 * numero2 
		document.write ("El resultado es " + cuenta);
	}
	else {
		if (numero1 > numero2)
		{	
			cuenta = numero1 - numero2
			document.write ("El resultado es " + cuenta);
		}
		else
		{
			if (numero1 < numero2)
			cuenta = numero1 + numero2;
			document.write ("El resultado es " + cuenta);
		}
	}
	
}

