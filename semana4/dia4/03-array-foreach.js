/**
 * forEach
 */

/**  
 * forEach es una función propia de los arreglos
 * y sirve para recorrer un arreglo sin necesidad
 * de usar un ciclo for
 * */

const nombres = ["Juliana", "Carlos", "Monica", "Abel", "Pepillo"];
/**
 * forEach recibe una función anónima la cual ejecutará
 * tantas veces como elementos tenga mi arreglo
 * puede recibir los siguientes parámetros
 * (elementos, iterador, arreglo)=>{}
 */
nombres.forEach((elemento, i) => {
    // console.log("Ejecutando...");
    console.log(`Elemento ${elemento}, I=${i}`);
    console.log(nombres);
})