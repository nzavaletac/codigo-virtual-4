/**
 * Crear un algoritmo donde exista una funcion
 * que reciba un arreglo de edades y retorne 
 * a todos los mayores de edad en un nuevo arreglo
 */


const filtroMayores = (edades) => {
    let mayores = [];
    for (let i = 0; i < edades.length; i++) {
        if(edades[i]>=18){
            mayores.push(edades[i]);
        }
    }
    // return mayores;
    return mayores;
}
let arreglo=[18,25,30,25,48,17];
// console.log(filtroMayores(arreglo));
let losMayores=filtroMayores(arreglo);
console.log(losMayores);

// console.log([12,19,25,30,80,45].filter((x)=>x>=18));