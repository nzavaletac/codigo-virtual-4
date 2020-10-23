/**
 * Desttructuración de Objetos
 */

let mascota = {
    nombre: "Kyra",
    raza: "Bull Terrier",
    edad: 1,
}

// let nombre = mascota.nombre;

//Destructuración
//Es oblogatorio colocar el mismo nombre de la propiedad a la variable
//que destructura
let {
    nombre
} = mascota;
console.log(nombre);

/**
 * Destructurar un atributo modificando el nombre de la nueva variable
 */
let {
    raza: familia
} = mascota;
// console.log(raza); //Error, no existe la variable raza, solo "familia"
console.log(familia);

// Ejemplo
/**
 * Dado un objeto de tipo pelicula(estructura THE MOVIE DB)
 */

let pelicula = {
    popularity: 1578.677,
    vote_count: 1691,
    video: false,
    poster_path: "/8STWO9pUTqubPV04iXZ2R6SClME.jpg",
    id: 497582,
    adult: false,
    backdrop_path: "/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg",
    original_language: "en",
    original_title: "Enola Holmes",
    genre_ids: [80, 18, 9648],
    title: "Enola Holmes",
    vote_average: 7.7,
    overview: "Enola Holmes, una intrépida joven que busca a su madre, utiliza su brillante instinto investigador para superar a su hermano Sherlock y ayudar a un lord en su fuga.",
    release_date: "2020-09-23",
    pais: {
        lugar: "Estados Unidos",
        lat: -12.15321,
        lng: -54.353,
    }
};

const imprimirSinopsis = ({
    overview,
    title
}) => {
    /**
     * La función recibe el "overview" destructurado del
     * objeto de tipo pelicula
     * VENTAJA: Uso directamente la variable "overview"
     * DESVENTAJA: Pierdo acceso a los demás tributos
     */
    console.log(overview);
    console.log(title);
}
imprimirSinopsis(pelicula)

/**
 * Ejemplo: Destructurar pais y la longitud con una nueva variable de nombre 
 * "nuevaLongitud"
 */
let {pais, pais: {lng: nuevaLongitud}} = pelicula;
console.log("Longitud");
console.log(nuevaLongitud);