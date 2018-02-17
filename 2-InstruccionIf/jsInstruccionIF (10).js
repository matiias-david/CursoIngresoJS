function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor((Math.random()*(11-1))) + 1
	if (nota >=9)
	{alert ("Excelente") }
	else 
	if (nota >=7)
	{alert ("aprobó")}
	else 
	if (nota>=4)
	{alert ("Vamos, la proxima se puede")}

}//FIN DE LA FUNCIÓN