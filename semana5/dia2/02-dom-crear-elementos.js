/**
 * Creacion de elementos en el DOM
 */
/**
 * document.createElement("nombre_de_la_etiqueta");
 * Retorna la referencia a un elemento que aún no está presente
 * en el DOM, pero será agreado en lo porsterior.
 */

const titulo = document.createElement("h1");
titulo.innerText = "Titulo de mi app";
console.log(titulo);
/**
 * elementappendChild(elemento);
 * Agrega a un element un elemento creado a un elemento padre
 * Si el elemento no existía en el DOM, ahora va a estar
 * como un hijo del element
 */ 

 const header=document.getElementById("header");
 header.appendChild(titulo);

 titulo.innerText="CodiGo - Bootcamp";