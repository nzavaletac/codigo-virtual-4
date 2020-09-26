/**
 * filter
 * 
 * filter es una función propia de los arreglos, 
 * recibe un callback con los mismos parametros
 * que la función forEach
 * La diferencia es que filter retorna un nuevo arreglo
 * con los elementos filtrados 
 */

const numeros = [1, 0, 5, 6, 3, 4, -5, -42];
let resultado = numeros.filter((elemento, i) => {
    if (elemento <= 0) {
        return elemento;
    }
})
console.log(resultado);