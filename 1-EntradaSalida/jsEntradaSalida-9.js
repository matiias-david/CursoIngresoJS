/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo = document.getElementById("sueldo").value
    var resultado = document.getElementById("resultado").value
    var cuenta
    sueldo = parseInt (sueldo)
    resultado = parseInt (resultado)
    cuenta = 0.1* sueldo
    cuenta = sueldo + resultado 
    alert ("el aumento de su sueldo es " + cuenta)


	
}
