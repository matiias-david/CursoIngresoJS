//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var venta;
    var ventaMayor;
    var ventaMenor;
    var flag = 0;

    for(var i=1; i<=7;i++)
{
	venta = parseFloat(prompt("ingrese importe venta: "));
}
    if (venta > 0)
    {
        venta = parseFloat(prompt("Error. El importe de venta debe ser mayor a 0. Reingrese"));

    }
    if (venta > ventaMayor || flag ==0 )
    {
        ventaMayor = venta; }
    else
     { if (venta < ventaMenor || flag == 1 )
    {  ventaMenor = venta 
        flag = 1 }

    }
    

} alert("La mayor venta fue $ " + ventaMayor + "y la menor venta $ " + ventaMenor)