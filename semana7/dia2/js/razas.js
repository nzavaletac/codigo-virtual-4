import {
    URL_BACKEND
} from "./variables.js";
import {
    postRaza,
    putRaza,
    deleteRazaById
} from "./services/raza-service.js";

const tbodyRazas = document.getElementById("tbody-razas");
const formRaza = document.getElementById("formRaza");
const inputNombre = document.getElementById("inputNombre");
const btnAccion = document.getElementById("btnAccion");

let modo = "crear";
let razas = [];
let razaGlobal = {};

const getRazas = () => {
    fetch(`${URL_BACKEND}/raza`).then((peticion) => {
        peticion.json().then((data) => {
            razas = [...data];
            dibujarTabla();
        });
    });
};
getRazas();

formRaza.onsubmit = (e) => {
    e.preventDefault();
    if (inputNombre.value.trim() === "") {
        Swal.fire({
            title: "Error!",
            text: "Todos los campos deben estar llenos",
            icon: "error",
        });
        return;
    }
    if (modo === "crear") {
        Swal.fire({
            title: "¿Crear?",
            text: "¿Seguro que desea crear el registro?",
            icon: "info",
            showCancelButton: true,
            // TO DO: Validar el formulario
        }).then((rpta) => {
            if (rpta.isConfirmed) {
                // Si, crear de todos modos    
                let objRaza = {
                    raza_nombre: inputNombre.value.trim(),
                };
                postRaza(objRaza).then((peticion) => {
                    peticion.json().then((data) => {
                        if (data.raza_id) {
                            // Lanzar sweatalert de éxito
                            Swal.fire({
                                title: "Hecho!",
                                text: "Registro creado exitosamente",
                                icon: "success",
                                timer: 1500,
                            })
                            inputNombre.value = "";
                            getRazas();
                        }
                    });
                });
            }
        })
    } else {
        // entramos al modo editar
        let objRaza = {
            raza_id: razaGlobal.raza_id,
            raza_nombre: inputNombre.value.trim(),
        };
        putRaza(objRaza).then((peticion) => {
            peticion.json().then((data) => {
                getRazas();
                modoCrear();
            });
        });
    }
};

const modoCrear = () => {
    razaGlobal = {};
    modo = "crear";
    btnAccion.innerText = "Crear Raza";
    inputNombre.value = "";
};

const modoEditar = (raza) => {
    razaGlobal = {
        ...raza
    };
    modo = "editar";
    btnAccion.innerText = "Guardar Cambios";
    inputNombre.value = razaGlobal.raza_nombre;
};

const eliminar = (raza_id) => {
    Swal.fire({
        title: "¿Eliminar?",
        text: "¿Seguro que desea eliminar el registro?",
        icon: "warning",
        showCancelButton: true,
    }).then((rpta) => {
        if (rpta.isConfirmed) {
            deleteRazaById(raza_id).then((peticion) => {
                peticion.json().then((data) => {
                    if (data.raza_id) {
                        Swal.fire({
                            title: "Éxito!",
                            text: "Registro eliminado exitosamente",
                            icon: "success",
                            timer: 1500,
                        });
                        getRazas();
                    };
                });
            });
        };
    });
};

const dibujarTabla = () => {
    tbodyRazas.innerHTML = "";

    razas.forEach((raza) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${raza.raza_id}</td>
                    <td>${raza.raza_nombre}</td>`;
        let tdBotones = document.createElement("td");

        let btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-warning", "mr-2");
        btnEditar.innerText = "Editar";
        btnEditar.onclick = () => {
            modoEditar(raza);
        };

        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            eliminar(raza.raza_id);
        };

        tdBotones.appendChild(btnEditar);
        tdBotones.appendChild(btnEliminar);

        tr.appendChild(tdBotones);
        tbodyRazas.appendChild(tr);
    });
};