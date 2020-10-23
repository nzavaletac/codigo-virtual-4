let iconUrl = "http://openweathermap.org/img/wn/";
let endpoint = "https://api.openweathermap.org/data/2.5/weather?appid=e696bef097647365be30826ed4c732fe&units=metric&q="
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const infoCiudad = document.getElementById("infoCiudad");
const infoImagen = document.getElementById("infoImagen");
const infoTemp = document.getElementById("infoTemp");
const infoTempMin = document.getElementById("infoTempMin");
const infoTempMax = document.getElementById("infoTempMax");
const cargando = document.getElementById("cargando");

// const setInfo = ({main:{temp, temp_min, temp_max}, weather: [{icon}] }) => {
//     console.log(temp);
//     console.log(temp_min);
//     console.log(temp_max);
//     console.log(icon);
// }

const setInfo = (data) => {
    const icono = data.weather[0].icon;
    infoImagen.src = `${iconUrl}${icono}@4x.png`;
    infoTemp.innerText = data.main.temp;
    infoTempMin.innerText = data.main.temp_min;
    infoTempMax.innerText = data.main.temp_max;
    infoCiudad.innerText = data.name;
}

const getClima = () => {
    let busqueda = inputBusqueda.value.trim();
    //TO DO: Colocar pantalla cargando
    fetch(`${endpoint}${busqueda}`).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if (data.cod !== 200) {
                // Para el error utilizaremos una libreria
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Ups!',
                    text: "Ciudad no encontrada",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                setInfo(data);
            }
            cargando.setAttribute("hidden", true);
        });
    });
};

formBusqueda.onsubmit = (e) => {
    e.preventDefault();
    cargando.removeAttribute("hidden");
    // TO DO: Validar que el input de búsqueda tenga texto interno.
    getClima();
}