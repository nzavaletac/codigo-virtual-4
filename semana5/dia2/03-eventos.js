/**
 * Los eventos son sucesos que ocurren cuando un elemento
 * es afectado por una acción, Ejemplo:
 * Click, pasar el mouse por encima, presionar una tecla
 * mantener el click presionado, escribir algo sobre el elemento (input)
 * etc
 */

/**
 * ¿Cómo se configura un evento?
 * Forma 1
 * elemento.on[evento]=()=>{}
 * Forma 2
 * elemento.addEventListener("[evento]",()=>{})
 */
let contador = 0;
const textoContador=document.getElementById("textoContador");
//Forma 1
const btn1 = document.getElementById("btn1");
btn1.onclick = () => {
    // alert("Ups! Me hicieron click");
    contador++;
    textoContador.innerText=contador;
    console.log("Ups! Me hicieron click");
}

/**
 * Información que trae un evento
 */

 const btn2=document.getElementById("btn2");
 btn2.onclick=(evento)=>{
    // console.log(evento);
    /**
     * Información que produce un evento
     */
    /**
     * evento.target=Retorna el elemento en el que sucede el evento
     */
    console.log(`**evento.target**`);
    console.log(evento.target);
    /**
     * evento.clientX=Coordenada en X respecto del viewport en PX  en donde
     * se hizo clik
     * evento.clienty=Coordenada en Y respecto del viewport en PX  en donde
     * se hizo clik
     */
    console.log(`**evento.clientX**`);
    console.log(evento.clientX);
    console.log(`**evento.clientY**`);
    console.log(evento.clientY);
    /**
     * evento.offsetX= Coordenada en X respecto del elemento en px 
     * en donde se hizo click
     * evento.offsetY= Coordenada en x respecto del elemento en px 
     * en donde se hizo click
     */
    console.log(`**evento.offsetX**`);
    console.log(evento.offsetX);
    console.log(`**evento.offsetY**`);
    console.log(evento.offsetY);

    /**
     * evento.altkey= Retorna true si el evento ha sido ejecutado con
     * la ayuda de la tecla Alt, caso contrario, retorna false
     */
    console.log(`**evento.altkey**`);
    console.log(evento.altkey);
 };