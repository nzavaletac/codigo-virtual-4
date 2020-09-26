/**
 * Problema 2.2 pagina 30
 */
// Antigua forma de convertir strings a number
//  let c1=parseInt(prompt("Ingrese C1: "));
//  let c2=parseInt(prompt("Ingrese C2: "));
//  let c3=parseInt(prompt("Ingrese C3: "));
//  let c4=parseInt(prompt("Ingrese C4: "));
// Nueva forma de convertir de string a number
let c1=+prompt("Ingrese C1: ");
let c2=+prompt("Ingrese C2: ");
let c3=+prompt("Ingrese C3: ");
let c4=+prompt("Ingrese C4: ");
 let suma=0;
 let promedio=0;
 suma=c1+c2+c3+c4;
 promedio=suma/4;
//  console.log(`Joven su promedio es: ${promedio}`);
 alert(`Joven su promedio es: ${promedio}`);