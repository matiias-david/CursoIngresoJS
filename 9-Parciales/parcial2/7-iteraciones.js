//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota = prompt ("Ingrese la nota del alumno")
	var contador = 0;
	var acumulador = 0;
	var contadorV = 0;
	var sexo = prompt ("Ingrese el sexo del alumno")
	var promedio
	var min

	{
		while (nota <= 0 || nota > 10)
		{
			nota = prompt ("Ingrese el sexo del alumno")
			nota = parseInt (nota)
		}
		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt ("Ingrese el sexo del alumno")
		}
		
		if (contador ==1)
		{
			min = nota;
		} else{
			if (nota < min)
			min = nota;
		}
		}
		
	}
	


