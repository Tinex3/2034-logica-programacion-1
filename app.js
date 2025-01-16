// Autor: Benjamin Riquelme
//creacion: 16/01/2025

// creacion de alerta de bienvenida
alert("¡Bienvenida y bienvenido a nuestro sitio web!");

// Creacion y asignacion de variables 
let Nombre = "Lua";
let edad = 25;
let numerDeVentas = 50;
let SaldoDisponible = 1000;

//Alerta de mensaje de error
alert( "¡Error! Completa todos los campos");

//Variable con alerta dentro de una variable
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

//Guardar nombre de usuario con promp
let nombreUsuario = prompt("Ingrese su nombre");
edad = prompt("Ingrese su edad");

//comprobacion de mayoria de edad
if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}

