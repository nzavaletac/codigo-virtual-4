/**
 * Creando una función exportable individualmente
 */
export const saludar = () => {
  console.log("Hola bienvenidos a todos");
};

const despedida = () => {
  console.log("Este es un mensaje de despedida");
};

/**
 * export default: exorta un elemento (Ejm. Variable, clase, función, ect)
 * Que cuando sea imprtado en otro archivo, puede ser renombrado
 * NOTA: Solo puede haber un "export default" por cada archivo
 */

export default despedida;
