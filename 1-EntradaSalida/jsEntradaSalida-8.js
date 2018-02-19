/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var num1 = document.getElementById("numeroDividendo")
    var num2 = document.getElementById("numeroDivisor")
    var cuenta
    num1 = parseInt (num1)
    num2 = parseInt (num2)
    cuenta = num1 / num2
    alert ("el resto es 0")
    
}
