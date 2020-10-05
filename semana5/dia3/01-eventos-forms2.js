const mensaje = document.getElementById("mensaje")
const pais = document.getElementById("pais")
const helper = document.getElementById("helper")

/**
 * Todos estos eventos se dan con el uso del teclado
 * onkeyup= Evento que se dispara cuando una tecla es soltada luego de presionarla
 * onkeydown= Evento que se dispara cuando una tecla está presionada
 * onkeypress= La unión de ambos eventos
 */


mensaje.onkeyup = (evento) => {
    // console.log(evento);
    // console.log(mensaje.value.length)
    
    const cantidad=130-mensaje.value.length
    helper.innerText=`${cantidad} caracteres`
    if(mensaje.value.length>=130){
        mensaje.value=mensaje.value.substr(0,130)
        helper.innerText="Solo permite 130 caracteres"
    }
}

/**
 * onchange
 * Función que se ejecuta cada vez que un elemento cambia de valor
 */

 pais.onchange=(evento)=>{
    //  console.log(evento);
    console.log(pais.value);
 }