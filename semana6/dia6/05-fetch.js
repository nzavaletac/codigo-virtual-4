/**
 * fetch es una función que consume datos de un endpoint
 * que es pasado como parámetro
 * La función fetch, retorna una promesa cuando el resultado
 * está listo para mostrar
 */

// const promesaFetch = fetch("https://reqres.in/api/users")
// promesaFetch.then((respuesta) => {
//     respuesta.json().then((data) => {
//         console.log(data);
//     });
// });

fetch("https://reqres.in/api/users").then((peticion)=>{
    peticion.json().then((data)=>{
        console.log(data);
    })
})