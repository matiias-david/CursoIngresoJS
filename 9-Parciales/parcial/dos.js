function Mostrar()
{
  var importe;
  var impfinal;
  importe = prompt("Ingrese el importe")
   document.getElementById("importeFinal").value = impfinal
  importe = parseInt (importe)
  impfinal = importe + importe*0,21;
  alert (impfinal)
  

}
