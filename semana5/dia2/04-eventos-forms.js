const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const tbody = document.getElementById("tbody");
const helper = document.getElementById("helper");
let usuarios = [];

const limpiarErrores = () => {
    //Quitar el estilo del borde rojo al formulario

    formulario.classList.remove("borde-rojo");
    //Ocultar el small (helper)
    helper.setAttribute("hidden", true);

    //OJO, si el helper ya estaba oculto, que lo oculte nuevamente
    //no va a generar ningún error en el sistema
}

const generarError = () => {
    // Va a mostrar el texto de error y le va a colocar
    // elemento.removeAttribute("atributo"), eliminar un atributo 
    // de un elemento
    helper.removeAttribute("hidden");
    // el borde rojo al formulario
    formulario.classList.add("borde-rojo");
}

const eliminarUsuario = (posicion) => {
    console.log("Eliminando " + posicion);
    usuarios = usuarios.filter((usu, i) => {
        if (i !== posicion) {
            return usu;
        }
    })
    reDibujarTbody();
}


const reDibujarTbody = () => {
    /**
     * 1. Limpiar el tbody (borrar todo el innerHtml del tbody)
     * tbody.innerHtml="";
     * 2. Crear una variable string vacía 
     * 3. Recorrer el arreglo de usuarios
     * 4. En el forEach ir agregando al string vacío la estructura
     * de la fila por cada usuario (concatenar strings)
     * 5. Luego del forEach ó for, settear el innerHTML del tbody
     * con el string creado.
     * 6. Reto: Darle estilos a las tablas
     */
    tbody.innerHTML = "";
    usuarios.forEach((usu, i) => {
        let tr = document.createElement("tr");
        let tdNro = document.createElement("td");
        tdNro.innerText = i + 1;
        let tdNombre = document.createElement("td");
        tdNombre.innerText = usu.nombre;
        let tdApellido = document.createElement("td");
        tdApellido.innerText = usu.apellido;
        let tdAcciones = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            console.log("Se hizo click en eliminar");
            console.log(`Eliminando el registro de : ${usu.nombre}`);
            eliminarUsuario(i);
        }

        tdAcciones.appendChild(btnEliminar);

        tr.appendChild(tdNro);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    })
    // Colocarel cursor nuevamente en el campo del nombre para que 
    inputNombre.focus();
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
    // Validar si los campos están llenos
    if (inputNombre.value.trim() === "" || inputApellido.value.trim() === "") {
        //Indicar el error de ingreso de datos
        generarError();
        return;
    }


    // console.log(inputNombre.value);
    let objUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
    }
    usuarios.push(objUsuario);
    // Limpiar los campos del formulario
    inputNombre.value = ""
    inputApellido.value = ""
    /**
     * Limpiar los errores
     * OJO, si no tenian errores previamente, no importa, igual no afecta
     * los estilos de la aplicacion
     */

    limpiarErrores();


    // console.log(objUsuario);
    console.log(usuarios);
    /**
     * RETO
     * Llamar a una función que redibuje el tbody, cada vez que nuestro
     * arreglo de usuarios es alterado ()
     */
    reDibujarTbody();
});

link.onclick = (evento) => {
    evento.preventDefault();
    console.log("Dieron click al hipervinculo");
}