/**
 * El localstorage es una memoria que tiene nuestro navegador
 * a  nivel local.
 * En el, podemos guardar algunos datos del usuario que no sean reelevantes,
 * sensibles, o criticos.
 * En el, podemos guardar por ejemplo, preferencias (color, tema,
 * ultimo texto copiado, etc)
 * El localstorage es diferente para cada dominio en el mismo equipo
 * Ejemplo:
 * Para www.google.com nuestro ordenador tiene un localstorage 
 * Para www.facebook.com nuestro ordenador tiene un localstorage
 */


const formulario = document.getElementById("formulario")
const inputColor = document.getElementById("inputColor")
const body = document.querySelector("body")
const btnEliminar = document.getElementById("btnEliminar")

btnEliminar.onclick = () => {
    /**
     * Eliminar un item del localstorage
     * window.localstorage.removeItem("clave")
     */
    window.localStorage.removeItem("color")
    body.style.backgroundColor = "#fff"
    //Para actualizar la página
    // window.location.reload();
}

formulario.onsubmit = (e) => {
    e.preventDefault()
    console.log(inputColor.value)
    //Guardar el color favorito en el localstorage
    //window.localstorage.setItem("clave","valor")
    /**
     * "valor" siempre tiene que ser un string
     */
    const colorFavorito = inputColor.value
    window.localStorage.setItem("color", colorFavorito)
    body.style.backgroundColor = colorFavorito
}

const verificarStorage = () => {
    /**
     * Función que obtendrá el color favorito del localstorage
     * y lo colocará como background del body, en caso no exista 
     * el local storage, no sucderá nada.
     * window.localstorage.getItem("clave")=Retorna el valor en string
     * de la clave proporcionada
     */
    const colorFavorito = window.localStorage.getItem("color")
    if (colorFavorito) {
        body.style.backgroundColor = colorFavorito;
    }
}
verificarStorage();