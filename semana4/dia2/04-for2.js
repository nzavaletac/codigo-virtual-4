/**
 * Hacer un algoritmo para
 * calcular el factorial de un numero
 * ¿Cómo es?
 * Ejemplo: Factorial de 5=5x4x3x2x1=120
 * Ejemplo: Factorial de 4=4x3x2xx1=24
 */

 let productoTotal=1;
 const nro=20;
 for(let i=nro;i>0;i--){
     productoTotal=productoTotal*i;
 }
 console.log(`Rpta: ${productoTotal}`);