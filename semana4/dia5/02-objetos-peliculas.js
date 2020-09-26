/**
 * Función para crear un segundo arreglo de peliculas 
 * que contenga solamente el título, la fecha de lanzamiento
 * y la sinopsis.
 * Al final, imprimir el arreglo
 */

const peliculasResumen = () => {
    const resumenes = peliculas.map((pelicula) => {
        return {
            tituto: pelicula.title,
            estreno: pelicula.release_date,
            sinopsis: pelicula.overview,
        }
    });
    console.log(resumenes);
};
peliculasResumen();

/**
 * Función para filtrar y mostrar en un nuevo arreglo
 * todas las peliculas en idioma español (castellano)
 */

const peliculasLatinas = () => {
    const castellano = peliculas.filter((pelicula, i) => {
        if (pelicula.original_language === "es") {
            return pelicula;
        }
    })
    console.log(castellano);
}
peliculasLatinas();

// const numeros = [1, 0, 5, 6, 3, 4, -5, -42];
// let resultado = numeros.filter((elemento, i) => {
//     if (elemento <= 0) {
//         return elemento;
//     }
// })
// console.log(resultado);
/**
 * Función que retorne un género dado el id del género
 */

const searchGenreById = (id) => {
    /**
     * find
     * arreglo.find(()=>{})
     * La función find retorn el primer elemento que coincida 
     * con la condición o el patron de 
     * búsqueda (hablamso del if)
     * Si hubiera mas de una coincidencia, de todas formas
     * la función dinf, solo retorna la primera coincidencia
     * Si no existen coincidencias, se retorna "undefined"
     */
    const generoEncotrado = generos.find((genero) => {
        if (genero.id === id) {
            return genero.name;
        }
    });
    // Si el género encontrado existe, será diferente de undefined
    // console.log(generoEncotrado);
    if (generoEncotrado) {
        return generoEncotrado.name;
    } else {
        return null;
    }
}
console.log(searchGenreById(1));

// const generoEncotrado = generos.filter((genero) => {
//     if (genero.id === id) {
//         return genero.name;
//     }
// });
// console.log(generoEncotrado);
// }

// searchGenreById(12);

/**
 * Función que imprima un nuevo arreglo de pelidculas, donde cada
 * pelicula tendrá
 * {
 * titulo:"",
 * sinopsis:"",
 * estreno:"",
 * generos["","",""]
 * }
 * HINT: Usar la función searchGenreById();
 */

const resumenPeliculasConGeneros = () => {
    const peliculasResumen = peliculas.map((peli) => {
        //Crear un arreglo de generos de acuerdo
        //a la pelicula en la que me encuentre iterando
        const generosStrings = peli.genre_ids.map((idDelGenero) => {
            let nombre = searchGenreById(idDelGenero);
            return nombre;
        });
        let objPeliResumen = {
            titulo: peli.title,
            sinopsis: peli.overview,
            estreno: peli.release_date,
            generos: generosStrings,
        };
        return objPeliResumen;
    });
    console.log(peliculasResumen);
}
resumenPeliculasConGeneros();