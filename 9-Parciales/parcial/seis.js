function Mostrar()
{
    var rep;
    var Max=0;
    var Min=0;
    var cont; 
    var numero =true; 
    var Bandera;
    var i ; 
    
    while(numero==true)
    {
    for(rep=0 ; rep < 25 ; rep++)
    {
        numero=prompt("Ingrese importe");
        console.log(numero)
    }  
    if(numero  > Max)
    {
        numero = Max
    }
    if(numero < Min)
    {
        numero = Min
    }  

    alert("el valor mayor es" +Max+ "y el valor menor es" +Min);
}
}
