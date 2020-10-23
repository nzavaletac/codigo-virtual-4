/**
 * Destructuración de Arreglos
 * Una maneaa directa de obtener acceso a las posiciones y elementos
 * de los arreglos
 */

let nombres = ["Jorgito", "Carmencita", "Pepito", "Carlita", "Luisito"];
let [primero, segundo, , , ultimo] = nombres;
console.log(primero);
console.log(segundo);
console.log(ultimo);

/**
 * Ejemplo:
 * Función que retorn un arreglo de dos elementos [lat, lng]
 * dado el nombre de una ciudad a buscar
 * @param {*} ciudad
 */

 const getCoordsByCiudad=(ciudad)=>{
     //OJO Es una función Fake!!!!
     console.log(("BUscando....."));
     return [-16.4141, -70.43516];
 }

 let [latitud, longitud]=getCoordsByCiudad("puno");
 console.log(latitud);
 console.log(longitud);


 // El operado rest(...), devuelve  un arreglo de todos los elementos
 // de un arreglo
 /**
  * En el ejemplo, será un arreglo de todos los elementos
  * Menos el primer elemento
  * OJO
  * El operador rest(...) solo puede ser el último elemento
  * destructurador
  */
  let [nombre1, ...resto]=nombres;
  console.log(nombre1);
  console.log(resto);
  