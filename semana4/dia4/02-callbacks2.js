/**
 * Callbacks
 */

const nombres = ["Jorge", "Luis", "Ximena"];
const dnis = ["48211314", "12345678", "87654321"];

const buscarXDni = (dni, funcion) => {
    for (let i = 0; i < dnis.length; i++) {
        if (dnis[i] === dni) {
            funcion(nombres[i]);
            return;
        }
    }
    funcion(null);
}

buscarXDni("48211314", (rpta) => {
    if(rpta!==null){
        console.log(`Encontrado: ${rpta}`);
    }else{
        console.log(`NO existen coincidencias 😥`);
    }
});