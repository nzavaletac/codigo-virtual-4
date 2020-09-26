/**
 * objetos
 */
/**
 * Los objetos se crean a través de la abstracción
 * de los elementos que querramos crear o presentar
 */

/**
 * Abtraer, significa llevar caracteristicas de un entorno real
 * a un entorno virtual
 */

let mascota = {
    nombre: "Negrita",
    raza: "Bull Terrier",
    tipo: "Perro",
    edad: 1,
    vacuna: false,
}
console.log(mascota);
// Mostrando atributos
console.log(`Nombre: ${mascota.nombre}`);
// Modificando atributos
mascota.vacuna=true;
console.log(mascota);
console.log(mascota.vacuna);
// Crear nuevos atributos
mascota.comida="Ricocan";
console.log(mascota);