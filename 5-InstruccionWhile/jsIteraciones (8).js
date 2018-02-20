function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var num;

	while (respuesta == 'si')
	{ 
		num = prompt ("Ingrese un numero");
	num = parseInt();
	while (IsNaN (num) )
	{
		num = prompt ();
		num = parseInt ()
	}
	contador++; 

	if (num > 0 )
	{
		positivo += num;	
	}
	else 
	{
		if (num !=0) {
			negativo *= num;
			contador--;
		}
	} }
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN