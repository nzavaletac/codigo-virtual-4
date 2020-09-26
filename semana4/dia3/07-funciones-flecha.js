/**
 * Funciones de flecha
 */
// const tablaDeMultiplicar = function (numero) {
//     for (let i = 0; i <= 10; i++) {
//         console.log(`${i} x ${numero} = ${i*numero}`);
//     }
// }

// Una funcion de flecha es una función anónima 
// solo que está escrito en sintaxis moderna de JavaScript

let tablaDeMultiplicar = (numero) => {
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${i*numero}`);
    }
}
