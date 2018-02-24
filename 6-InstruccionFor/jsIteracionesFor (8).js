function Mostrar()
{   
    var numero = prompt ("Ingrese un numero");
    var respuesta = "Es primo"; 
    var contador = 0; 
    
    for (var i = 1 ; i <= numero ; i++ ){
        if ( numero % i == 0 )
        {
            console.log(i);
             contador ++;
             }
    }
    if ( contador >= 3){
        alert ("no es primo");}
        else 
            alert ("es primo")




}//FIN DE LA FUNCIÓN