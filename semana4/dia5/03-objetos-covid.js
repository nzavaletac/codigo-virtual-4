/**
 * Función para recibir el nombre de un país introducido
 * por el usuario y mostrar:
 * Total de caso
 * Tota de recuperados
 * Total de fallecidos
 */

// const mostrarDataPorPais=(pais)=>{
//     for(let i=0; i<pais.length; i++){
//         if(covid[i].country===pais){
//             console.log(`Total de casos: ${covid[i].cases}`);
//             console.log(covid[i].recovered);
//             console.log(covid[i].deaths);
//             return;
//         }else{
//             console.log("No se encontró en la posicón"+i);
//         }
//     }
//     console.log("Fin de la función");
//  };

//  mostrarDataPorPais("Brazil");

const mostrarDataPorPais = (pais) => {
    for (let i = 0; i < pais.length; i++) {
        if (covid[i].country === pais) {
            // console.log(`Total de casos: ${covid[i].cases}`);
            // console.log(`Total de recuperados: ${covid[i].recovered}`);
            // console.log(`Total de muertos 😥: ${covid[i].deaths}`);
            let econtrado = {
                // nombrePais: covid[i].country,
                nombrePais: pais,
                totalCasos: covid[i].cases,
                totalRecuperados: covid[i].recovered,
                totalMuertos: covid[i].deaths,
            };
            console.log(econtrado);
            return;
        }
    }
    // console.log("Fin de la función");
};

mostrarDataPorPais("Brazil");

/**
 * La misma función con find()
 */
const mostrarDataXPaisV2 = (pais) => {
    const paisEncontrado = covid.find((estadistica) => {
        if (estadistica.country === pais) {
            return estadistica;
        }
    });
    let encontrado = {
        nombrePais: pais,
        totalCasos: paisEncontrado.cases,
        totalRecuperados: paisEncontrado.recovered,
        totalMuertos: paisEncontrado.deaths,
    };
    console.log(encontrado);
};

mostrarDataXPaisV2("Peru");