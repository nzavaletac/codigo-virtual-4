// debugger;
const formulario = document.getElementById("formulario")
const nombres = document.getElementById("nombres")
const ruc = document.getElementById("ruc")
const serie = document.getElementById("serie")
const nroFact = document.getElementById("nroFact")
const direccion = document.getElementById("direccion")
const fecha = document.getElementById("fecha")
const cantidad = document.getElementById("cantidad")
const descripcion = document.getElementById("descripcion")
const precioUnitario = document.getElementById("precioUnitario")
const precioTotal = document.getElementById("precioTotal")
const tbody = document.getElementById("tbody")

let facturas = []

generarError = () => {
    alert("Por complete todos los campos")
}

const calcularTotal=()=> {
    let a = parseFloat(cantidad.value) || 0,
        b = parseFloat(precioUnitario.value) || 0;
    precioTotal.value= a * b;
}

const fechaActual = () => {
    let fechaActual = new Date() //Fecha actual
    let mes = fechaActual.getMonth() + 1 //obteniendo mes
    let dia = fechaActual.getDate() //obteniendo dia
    let anio = fechaActual.getFullYear() //obteniendo año
    if (dia < 10)
        dia = '0' + dia //agrega cero si el menor de 10
    if (mes < 10)
        mes = '0' + mes //agrega cero si el menor de 10
    fecha.value = anio + "-" + mes + "-" + dia
}
fechaActual()

const eliminarProducto = (posicion) => {
    facturas = facturas.filter((pro, i) => {
        if (i !== posicion) {
            return pro
        }
    })
    redibujarTbody()
}


const redibujarTbody = () => {
    // Limpiando el tbody
    // tbody.innerHTML = ""
    tbody.innerHTML = ""
    let tbodyFalso = new DocumentFragment()
    // console.log(facturas)
    facturas.forEach((det) => {
        det.detalle.forEach((pro, i) => {
            let tr = document.createElement("tr")
            let tdNro = document.createElement("td")
            tdNro.innerHTML = i + 1
            let tdCantidad = document.createElement("td")
            tdCantidad.innerText = pro.cantidad
            let tdDescripcion = document.createElement("td")
            tdDescripcion.innerText = pro.descripcion
            let tdPrecioUnitario = document.createElement("td")
            tdPrecioUnitario.innerText = pro.precioUnitario
            let tdPrecioTotal = document.createElement("td")
            tdPrecioTotal.innerText = pro.precioTotal
            let tdAcciones = document.createElement("td")
            let btnEliminar = document.createElement("button")
            btnEliminar.innerText = "Eliminar"
            btnEliminar.classList.add("btn-outline-danger")
            btnEliminar.classList.add("btn")
            btnEliminar.style.border = "none"
            btnEliminar.style.cursor = "pointer"
            btnEliminar.onclick = () => {
                eliminarProducto(i)
                redibujarTbody()
            }
            tdAcciones.appendChild(btnEliminar)
            // tdAcciones.appendChild(btnVer)
            tr.appendChild(tdNro)
            tr.appendChild(tdCantidad)
            tr.appendChild(tdDescripcion)
            tr.appendChild(tdPrecioUnitario)
            tr.appendChild(tdPrecioTotal)
            tr.appendChild(tdAcciones)
            tbodyFalso.appendChild(tr)
        })
    })
    tbody.appendChild(tbodyFalso)
    // Guardando el detalle en el localStorage
    // 1. Convertimos el arreglo productos a string
    const detalleFactString = JSON.stringify(facturas)
    // 2. Guardamos en el localStorage
    localStorage.setItem("factura", detalleFactString)
}

formulario.addEventListener("submit", (evento) => {
    // Detener que la página se actualice por defecto
    evento.preventDefault()
    // Validando si las casilla están con datos
    // if (cantidad.value.trim() === "" || descripcion.value.trim() === "" || precioUnitario.value.trim() === "") {
    //     generarError()
    //     return
    // }
    let objetoFactura = {
        nombres: nombres.value,
        ruc: ruc.value,
        serie: serie.value,
        nroFact: nroFact.value,
        direccion: direccion.value,
        fecha: fecha.value,
        detalle: [{
            cantidad: cantidad.value,
            descripcion: descripcion.value,
            precioUnitario: precioUnitario.value,
            precioTotal: precioTotal.value,
        }],
    }

    facturas.push(objetoFactura);

    nombres.value = ""
    ruc.value = ""
    serie.value = ""
    nroFact.value = ""
    direccion.value = ""
    fecha.value = ""
    cantidad.value = ""
    descripcion.value = ""
    precioUnitario.value = ""
    precioTotal.value = ""


    if (cantidad >= 0 && precioUnitario >= 0) {
        total = cantidad * precioUnitario
        precioTotal.innerText = total
    } else {
        precioTotal.innerText = "Es cero"
    }
    redibujarTbody()
    fechaActual()
})

const verificarStorageFactura = () => {
    const FacturaStorage = localStorage.getItem("factura")
    if (FacturaStorage !== null) {
        facturas = JSON.parse(FacturaStorage)
        redibujarTbody()
    }
}
verificarStorageFactura()