/**
 * Importando variables que han sido exportadas
 * individualmente
 * NOTA: Se usa {} cuando las variables son exportadas individualmente
 */
import {URL_BACKEND, API_KEY} from "./variables.js";

/**
 * Importando un elemento por defecto de un archivo funciones.js
 * NOTA: Los elementos exportados como default no llevan {}
 * NOTA: Pueden ser recibidos con cualquier nombre
 */
import funcionDespedida, {saludar} from "./funciones.js";
/**
 * Importando un función exportada individualmente asignandole un nuevo nomhre
 */

import {Persona as construirPersona} from "./Persona.js";

let objPersona = construirPersona();
console.log(objPersona);

objPersona.asignarEdad(19);
console.log(objPersona);

console.log(URL_BACKEND);
console.log(API_KEY);
saludar();
funcionDespedida();
