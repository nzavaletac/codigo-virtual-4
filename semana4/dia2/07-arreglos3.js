// let arreglo = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// console.log(arreglo[2][0]);

/**Algoritmo para calcular la cantidad de números 
 * positivos, negativos e iguales a cero
 */

let arreglo = [1, -140, 4, 0, 7, -9, 0, -6];
let p=0;
let n=0;
let z=0;
for(let c=0; c<arreglo.length; c++){
    if(arreglo[c]>0){
        p++;
    }else{
        if(arreglo[0]<0){
            n++;
        }else{
            z++;
        }
    }
}
console.log("Positivos: "+p);
console.log("Negativos"+n);
console.log("Iguales a 0"+z);