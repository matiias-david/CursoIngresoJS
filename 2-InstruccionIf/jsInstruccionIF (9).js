function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random = document.getElementById("FormIngreso").value
	random = Math.floor((Math.random()*(11 - 1)))+1
		alert ("el numero es " + random)

}//FIN DE LA FUNCIÓN