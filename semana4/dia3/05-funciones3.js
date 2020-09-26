/**
 * Funciones que retornan parámetros
 * Función que retorna el factorial de un número
 * @param {*} numero parametro de entrada al que se le va a calcular
 * el factorial
 */

function factorial(numero) {
    let rpta = 1;
    for (let i = numero; i > 0; i--) {
        rpta = rpta * i;
    }
    return rpta;
}

let resultado = factorial(6);
console.log(resultado);