function Mostrar()
{
    var importe;
    var impfinal;
    importe = prompt("Ingrese el importe")
    
    importe = parseInt (importe)
    impfinal = importe + importe*0,21;
    document.getElementById("importeFinal").value = impfinal

}
