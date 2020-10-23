const buscarXDni = (dni) => {
    let miPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            let persona={
                nombre: "Juanita",
                apellido: "Carpio",
            }
            resolve(persona);
        }, 3000);
    });
    return miPromesa;
};

let resultado=buscarXDni("48211314");
resultado.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
});