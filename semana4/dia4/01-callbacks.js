/**
 * Callbacks
 */

const nombres = ["Jorge", "Luis", "Ximena"];
const dnis = ["48211314", "12345678", "87654321"];

const buscarXDni = (dni, callback) => {
    for (let i = 0; i < dnis.length; i++) {
        if (dnis[i] === dni) {
            callback(nombres[i]);
        }
    }
}

buscarXDni("48211314", (encontrado) => {
    console.log("Llegó el resultado!");
    console.log(encontrado);
});