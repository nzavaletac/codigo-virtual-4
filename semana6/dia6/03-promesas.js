/**
 * Una promes es un objeto que sirve para esperar
 * a que termine un proceso asíncrono, ye depende de la respuesta
 * del proceso asíncrono de cómom se resuelva la promesa
 */

// Creando una promesa
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let x=100;
        //Yo necesito retornar el valor de x
        // resolve(x);
        // Resolve sirve para transmitir un valor a traves de la promesa
        // Luego de que un proceso asíncrono se haya ejecutado
        reject("Ocurrió un error");
    }, 3000);
});

// Ejecutando una promesa
// then se ejecuta cuando la promesa invoca a la función resolve
// y en un callback recibo la respuesta
miPromesa.then((rerspuesta)=>{
    console.log(rerspuesta);
}).catch((error)=>{
    console.log(error);
});

