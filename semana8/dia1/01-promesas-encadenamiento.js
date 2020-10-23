/**
 * Encadenar promesa con la finalidad de que el código,
 * no crezca identado a la derecha
 * NOTA: Ocurre cuna conumo más de una promesa a la vez
 */

const encadenarPromesas = () => {
    fetch("https://reqres.in/api/users?page=2").then((peticion) => {
        return peticion.json();
    }).then((data) => {
        console.log(data);
    });
};

encadenarPromesas();