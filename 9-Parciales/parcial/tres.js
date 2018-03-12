function Mostrar()
{
    // declaro variables y asigno valor
    var largo = document.getElementById("alrgo").value;
    var ancho = document.getElementById("ancho").value;
    //hago la cuenta para sacar el perimetro
    perimetro = (largo * 2 + ancho * 2) * 3;

    alert ("se necesitan " + perimetro + " hilos de alambre");
}
