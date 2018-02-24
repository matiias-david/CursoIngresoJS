function Mostrar()
{
    var repeticiones = prompt ("Ingrese un numero");
    var contadorDivisores = 0;
    var mensaje = "Los divisores son ";
    for ( var i = repeticiones ; i > 0 ; i--){
        if (repeticiones % i == 0)
        {
            console.log(i);
            contadorDivisores++;
        mensaje = mensaje + i + " "}

        }
alert (mensaje)
}//FIN DE LA FUNCIÓN