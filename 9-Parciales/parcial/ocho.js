function Mostrar()
{
    var contador = 0;
    var respuesta = "continuar";
    var temperatura;
    var nombre;
    var tempMinima;
    var tempMaxima;
    var tempPAr = 0;
    var tempImpar = 0;
    var tempMaximaNombre;
    var tempMinimaNombre; 
        while(respuesta != "no" )//este es el inicio de la llave while
        {
            temperatura = prompt ("Ingrese temperatura: ");
            temperatura = parseInt(temperatura);
            contador++;
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
            if(contador==1)
            {
                tempMinima= temperatura;
                tempMinimaNombre=nombre;
                tempMaxima= temperatura;
                tempMaximaNombre=nombre;
            }
            else{

                if(temperatura< tempMinima)
                {
                    tempMinima= temperatura;
                    tempMinimaNombre=nombre;
                }
                if(temperatura> tempMaxima)
                {
                    tempMaxima= temperatura;
                    tempMaximaNombre=nombre;
                }


            }

            if(temperatura%2==0 && temperatura!=0)
            {
                tempPAr++;
            }else{
                  if( temperatura!=0)
                tempImpar++;
            
            
            
            
            
            
            
            respuesta = prompt ("Ingrese no para salir ");
        }//termina la llave while (respuesta != "no")
    } alert ( "La temperatura maxima y el nombre del lugar es: " + tempMaxima + tempMaximaNombre +  "\n La temperatura minima y el nombre del lugar es " + tempMinima + tempMinimaNombre + "\n Hubo " + tempPAr + "pares y " + tempImpar + "de impares")
} 
