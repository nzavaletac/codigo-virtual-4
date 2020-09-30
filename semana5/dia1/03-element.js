/**
 * Objeto element y sus propiedades
 */

const titulo = document.getElementById("title");

console.log(titulo);
/**
 * Propiedades
 * element.style.[propiedadCSS];
 */
titulo.style.color = "tomato";
titulo.style.fontSize = "2rem";
titulo.style.backgroundColor = "yellow";

const seccion1 = document.getElementById("seccion1");
console.log(seccion1);
/**
 * elemento.offsetWidth
 * Devuelve el ancho de un elemento
 * elemento.offsetHeight
 * Devuelve el alto de un elemento
 */

const anchoSeccion1 = seccion1.offsetWidth;
const altoSeccion1 = seccion1.offsetHeight;
console.log("Ancho de sección 1:" +anchoSeccion1);
console.log("Alto de sección 1:" +altoSeccion1);

/**
 * element.innerHTML: Setea o retorna el contenido HTML de un elemento
 * Es decir, si colocamos etiquetas, estas serán renderizadas
 * element.innerText: Retorna el el contenido a nivel de texto de un elemento
 */

 const parrafo=document.getElementById("parrafo");
 console.log("Contenido HTML del párrafo");
 console.log(parrafo.innerHTML);
 console.log("Contenido textual del párrafo");
 console.log(parrafo.innerText);

const parrafo2=document.getElementById("parrafo2");
const parrafo3=document.getElementById("parrafo3");

parrafo2.innerHTML="<strong>CodiGo</strong> <a href='#'>Link1</a>";
parrafo3.innerText="<strong>CodiGo</strong> <a href='#'>Link1</a>";