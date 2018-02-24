function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numero;

	while (respuesta == 'si')
	{ 
		numero = prompt ("Ingrese un numero");
	numero = parseInt();
	while (IsNaN (num) )
	{
		numero = prompt ();
		numero = parseInt ()
	}
	contador++; 

	if (numero > 0 )
	{
		positivo += numero;	
	}
	else 
	{
		if (numero !=0) {
			negativo *= numero;
			contador--;
		}
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN