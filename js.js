let nombre1 = prompt ("Ingrese el nombre de la primera persona");
let apellido1 = prompt ("Ingrese el apellido de la primera persona");
let edad1 = prompt ("Ingrese la edad de la primera persona");

let nombre2 = prompt ("Ingrese el nombre de la segunda persona");
let apellido2 = prompt ("Ingrese el apellido de la segunda persona");
let edad2 = prompt ("Ingrese la edad de la segunda persona");

var respuesta = document.getElementById("respuesta");

if(nombre1 == nombre2 && apellido1 == apellido2 && edad1 == edad2){
    respuesta.innerHTML= "Son la misma persona."
}else if(edad1 == edad2){
    respuesta.innerHTML= "Tienen la misma edad."
}else if(apellido1 == apellido2){
    respuesta.innerHTML= "Podrían ser parientes"
}