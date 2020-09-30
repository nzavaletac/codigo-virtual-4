const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
let usuarios = [];


const reDibujarTbody=()=>{
    /**
     * 1. Limpiar el tbody (borrar todo el innerHtml de l tbody)
     * tbody.innerHtml="";
     * 2. Crear una variable string vacía 
     * 3. Recorrer el arreglo de usuarios
     * 4. En el forEach ir agregando al string vacío la estructura
     * de la fila por cada usuario (concatenar strings)
     * 5. Luego del forEach ó for, settear el innerHTML del tbody
     * con el string creado.
     * 6. Reto: Darle estilos a las tablas
     */
};



/**
 * formulario.onsubmit= Evento que se desencadena cuando queremos
 * procesar o enviar el formulario
 */
formulario.addEventListener("submit", (evento) => {
    /**
     * ¿Por qué se actualiza la página con el submit?
     * Porque es el comportamiento de defecto de dicho evento
     * ¿Cómo detener el comportamiento por defecto de un evento?
     * evento.preventDefault();
     */
    evento.preventDefault();
    console.log("Procesando el formulario...");
    console.log(inputNombre.value);
    let objUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
    }
    usuarios.push(objUsuario);
    console.log(objUsuario);
    console.log(usuarios);
    /**
     * RETO
     * Llamar a una función que redibuje el tbody, cada vez que nuestro
     * arreglo de usuarios es alterado ()
     */
});

link.onclick = (evento) => {
    evento.preventDefault();
    console.log("Dieron click al hipervinculo");
}