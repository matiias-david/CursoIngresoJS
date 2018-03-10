function Mostrar()
{
    // declaro variables y asigno valor
    var precio;
    var descuento;
    var valorDelDescuento;
    var precioDelDescuento;
    var iva;
    var precioConIva;

    precio = document.getElementById("alrgo").value;
    descuento = document.getElementById("ancho").value;
    //parseo
    precio = parseInt(precio)
    descuento = parseInt(descuento)
   //cuenta
    valorDelDescuento = ( precio * descuento)/100;
    precioConDescuento = precio - valorDelDescuento;
    iva = precioConDescuento * 0.21;
    precioConIva = precioConDescuento + iva;

    alert ( "precio con descuento " + precioConDescuento +"\n precio con iva " + precioConIva )

    
    
    
    
    //hago la cuenta para sacar el perimetro
    //perimetro = (precio * 2 + descuento * 2);
    //alert ("se necesitan " + perimetro + " hilos de alambre");
}
