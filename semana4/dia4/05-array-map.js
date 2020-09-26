/**
 * map
 */

/**
 * map es una función propia de losa arreglos 
 * y el comportamiento es muy similar a la función filter
 * sin embargo, en la función  map, se retornan sempre, todos
 * los elementos del arreglo porque su objetivo principal es armar 
 * un nuevo arreglo con algunos o todos los elementos moficados
 */


const numeros = [1, 0, 5, 6, 3, 4, -5, -42];
let respuesta = numeros.map((elemento, i) => {
    if (elemento > 0) {
        return elemento * 2;
    }
    return elemento;
})
console.log(respuesta);