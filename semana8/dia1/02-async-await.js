/**
 * Las funciones async (asíncronas) tiene la posibilidad
 * de hacer síncronas varias tareas asíncronas en su interior
 */
/**
 * Toda función async (asíncrona) en su apartado "return", retorna 
 * promesa
 */
/**
 * SI deseamos usar la palabra reservada "await", la función contenedora
 * debe ser "asyn" (asíncrona)
 */
const getUsuarios = async () => {
    const peticion = await fetch("https://reqres.in/api/users?page=2");
    const data = await peticion.json();
    return data;
}
getUsuarios().then((rpta) => {
    console.log(rpta);
})

/**
 * Función asícrona que retorna la información de los 
 * N primeros pokemones de la API de POKEMON
 * @param {number} n Es el número de pokemones a consumir
 */
const getPokemones = async (n) => {
    let URL_BACKEND = "https://pokeapi.co/api/v2/pokemon";
    let pokemones = [];
    for (let i = 1; i <= n; i++) {
        const peticion = await fetch(`${URL_BACKEND}/${i}`);
        const data = await peticion.json();
        pokemones.push(data.name);
    }
    return pokemones;
}
getPokemones(15).then((rpta) => {
    console.log(rpta);
});