function Mostrar()
{
    var contador = 0;
    var respuesta = "continuar";
    var temperatura;
    var nombre;
        while(respuesta != "no")//este es el inicio de la llave while
        {
            temperatura = prompt ("Ingrese temperatura: ")
            temperatura = parseInt(temperatura);
        while(temperatura < -100 || temperatura > 100 || isNaN(temperatura) )
        {
            temperatura = prompt ("Ingrese temperatura: ");
            temperatura = parseInt(temperatura);
            } 
            nombre = prompt ("Ingrese un nombre: ")            
        while ( ! isNaN(nombre))
        {
                    nombre = prompt ("Ingrese un nombre: ");
            }
            
            
            
            
            
            
            
            respuesta = prompt ("Ingrese no para salir ");
        }//termina la llave while (respuesta != "no")
}
