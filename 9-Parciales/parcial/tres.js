function Mostrar()
{
    var largo
    var ancho
    var cuenta
    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    cuenta = (largo * 2 + ancho * 2) *3
    alert ("se necesitan de alambre " + cuenta)
}
