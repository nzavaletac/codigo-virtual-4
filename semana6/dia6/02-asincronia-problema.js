const buscarPorDniProblema = (dni) => {
    let respuesta = {};
    setTimeout(() => {
      respuesta = {
        nombre: "Jorge Garnica Blanco",
        fechaNac: "08-09-1991",
      };
    }, 2000);
    return respuesta;
  };
  /**
   * La variable resultado siempre será un objeto vacío{}
   * Dado que la funcion buscarPorDniProblema, espera 2 segundos en settear
   * dicha variable
   * Pero por asincroní, el retorno de la variable respuesta, es inmediato
   */
  let resutlado = buscarPorDniProblema("47548520");
  console.log(resutlado);

  /**
   * Posible solución a la asincronía
   * Enviar un callback para recibir en él, el resultado de la búsqueda
   */
const buscarXDni = (dni, callback) => {
    let respuesta = {};
    setTimeout(() => {
        respuesta = {
            nombre: "Jorge Garnica Blanco",
            fechNac: "08-09-1991",
        };
        callback(respuesta);
    }, 1000);
};

const resultado = buscarXDni("48211314", (res) => {
    console.log(res);
});