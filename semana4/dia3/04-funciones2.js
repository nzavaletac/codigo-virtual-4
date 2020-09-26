/**
 * Funciones que reciben parámetros
 */
function tablaDeMultiplicar(numero){
    for(let i=0; i<=10; i++){
        console.log(`${i} x ${numero} = ${i*numero}`);
    }
}

tablaDeMultiplicar(1);
console.log("=============");
tablaDeMultiplicar(80);
console.log("=============");
tablaDeMultiplicar(100);

let arreglo=[5,8,4,7,2,3];
/**
 * Imprimir la tabla de multiplicar de todos los elementos del
 * arreglo llamado "arreglo"
 */

 for(let c=0; c<arreglo.length; c++){
     console.log(`Tabla del ${arreglo[c]}`);
     tablaDeMultiplicar(arreglo[c]);
 }