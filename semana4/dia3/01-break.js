/**
 * La sentencia "break" determina el fina de una 
 * esctructura iterativa (for, while, do-while, switch, etc)
 * ¿Cuándo? todo depende de la lógica que se utilice
 */

/**
 * Algoritmo que recorre hasta que encuentre
 * un número 0, entonces el algoritmo se detiene
 */

const edades = [20, 12, 2, 0, 58, 25, 95, 3];
for(let i=0; i<edades.length; i++){
    if(edades[i]===0){
        break;
    }
    console.log(edades[i]);
}