//Variables
let numeroSecreto = 2;

let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
//Imprimimos el número que el usuario ingresó
console.log("El valor del intento es" + numeroUsuario);	

/*
Este código realiza

la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    console.log("Acertaste, el número es: " + numeroUsuario);
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    console.log("Lo siento, no acertaste el número");
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}