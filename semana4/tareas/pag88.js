/**El banco “Pueblo desconocido” ha decidido aumentar el límite de crédito de
las tarjetas de crédito de sus clientes, para esto considera que si su cliente
tiene tarjeta tipo 1, el aumento será de 25 %; si tiene tipo 2, será de 35 %;
si tiene tipo 3, de 40 %, y para cualquier otro tipo, de 50 %. Ahora bien, si la
persona cuenta con más de una tarjeta, sólo se considera la de tipo mayor
o la que el cliente indique. Realice un algoritmo y represente su diagrama
de flujo y el pseudocódigo para determinar el nuevo límite de crédito que
tendrá una persona en su tarjeta.
Nombre de la variable Descripción Tipo
TT Tipo de tarjeta Entero
LA Límite actual de crédito Real
AC Aumento de crédito Real
NC Nuevo límite de crédito Real */

/**
 * 1. Inicio
2. Leer TT, LA
Si NC Igual a
1: Hacer AC = LA * 0.25
2: Hacer AC = LA * 0.35
3: Hacer AC = LA * 0.40
Si no
Hacer AC = LA * 0.50
Fin de comparación
3. Hacer NC = LA + AC
4. Escribir “El aumento de crédito”, AC
5. Escribir “Nuevo límite de crédito”, NC
6. Fin
 */
let tipoTarjeta =10;
let tipoTarjeta2=0;
let limiteActual1= 2500;
let limiteActual2=3500;
let nuevaLinea = 0;
let aumentoCredito = 0;

if(tipoTarjeta>tipoTarjeta2){
    switch (tipoTarjeta) {
        case 1:
            aumentoCredito = limiteActual1 * 0.25;
            break;
        case 2:
            aumentoCredito = limiteActual1 * 0.35;
            break;
        case 3:
            aumentoCredito = limiteActual1 * 0.40;
            break;
        default:
            aumentoCredito = limiteActual1 * 0.50;
    }
}else{
    switch (tipoTarjeta2) {
        case 1:
            aumentoCredito = limiteActual2 * 0.25;
            break;
        case 2:
            aumentoCredito = limiteActual2 * 0.35;
            break;
        case 3:
            aumentoCredito = limiteActual2 * 0.40;
            break;
        default:
            aumentoCredito = limiteActual2 * 0.50;
    }
}

// Nueva aumento de credito y nueva linea
nuevaLinea1= limiteActual1 + aumentoCredito;
nuevaLinea2= limiteActual2 + aumentoCredito;
console.log(`Límite actual 1: ${limiteActual1}`);
console.log(`Límite actual 2: ${limiteActual2}`);
console.log(`El aumento de crédito es: ${aumentoCredito}`);
console.log(`Nuevo límite de crédito es: ${nuevaLinea1} ${nuevaLinea2}`);