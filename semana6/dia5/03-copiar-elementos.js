/**
 * Formas de copiar arreglos y objetos
 */

let edades = [50, 12, 36, 80, 20];
// ¿Cómo copiar un arreglo a otra variable?
//Error

let nuevasEdades=edades;
console.log(edades);
console.log(nuevasEdades);

console.log("Modificando...");
edades[0]=51;
console.log(edades);
console.log(nuevasEdades);

// CORRECTO
console.log("Forma Correcta");
let edadesCopiadas=[...edades];
console.log(edades);
console.log(edadesCopiadas);
console.log("MOdificando...");
edades[1]=2;
console.log(edades);
console.log(edadesCopiadas);