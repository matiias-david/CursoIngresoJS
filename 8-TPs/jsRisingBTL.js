/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
    
   {var edad = document.getElementById("Edad").value;
    var sexo = document.getElementById("Sexo").value;
    var estadoCivil = document.getElementById("EstadoCivil").value;
    var sueldo = document.getElementById("Sueldo").value;
    var legajo = document.getElementById("Legajo").value;
    var nacionalidad = document.getElementById("Nacionalidad").value;

    // edad 
    edad = prompt ("Ingrese su edad. (Entre 18 y 90)")
    edad = parseInt(edad)
    while  (edad < 18 || edad > 90 || isNaN (edad))
{ 
    edad = prompt ("Ingrese su edad nuevamente")

} 

    document.getElementById("Edad").value=edad;
    //sexo
    sexo = prompt("ingrese f para femenino ó m para masculino .");
    while (sexo != "f" && sexo != "m" && sexo != null)
{
    sexo = prompt ("error");
}
    document.getElementById('Sexo').value=sexo;

//estado civil
    estadoCivil = prompt ("Ingrese su estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
    switch (estadoCivil)
{
    case "1" : document.getElementById("EstadoCivil").value = "Soltero"
    break;
    case "2" : document.getElementById("EstadoCivil").value = "Casado"
    break;
    case "3" : document.getElementById("EstadoCivil").value = "Divorciado"
    break;
    case "4" : document.getElementById("EstadoCivil").value = "Viudo"
    break;
}
//Sueldo
    sueldo = prompt ("Ingrese su sueldo (no menor a 8000)")
    while ( sueldo < 8000 || isNaN (sueldo))
    {
    sueldo = prompt ("Error. Ingrese un sueldo no menor a 8000")
    }
        document.getElementById("Sueldo").value = sueldo
//legajo
    legajo = prompt ("Ingrese su numero de legajo")
    while (legajo < 1000 || legajo > 9999 || isNaN (legajo))
{
    legajo = prompt ("Error. Ingrese su numero de legajo nuevamente")
}
    document.getElementById("Legajo").value = legajo

//Nacionalidad
    nacionalidad = prompt ("Ingrese su nacionalidad. “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
    switch(nacionalidad)
    {
        case "a": document.getElementById("Nacionalidad").value = "Argentino"
        break
        case "e" : document.getElementById("Nacionalidad").value = "Extranjero"
        break
        case "n" : document.getElementById("Nacionalidad").value = "Nacionalizado"
        break
    }
}
