function Mostrar()
{
    var repeticiones = prompt ("Ingrese un numero");
    var contadorPares = 0;
    var mensaje = "Los numero pares son "
    for ( var i = repeticiones ; i > 0 ; i--){
        if ( i % 2 == 0){
            console.log(i);
            contadorPares++;
            mensaje = mensaje + i + " "
        }

    }
alert (mensaje)


}//FIN DE LA FUNCIÓN