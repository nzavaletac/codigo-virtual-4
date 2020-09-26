/**
 * Crear un algoritmo para verificar
 * si un año ingresado por el usuario el bisiesto
 */

 let anio=2100;

 if(anio%4===0){
     if(anio%100!==0){
         console.log(`${anio} es bisiesto`);
     }else{
         console.log(`${anio} no es bisiesto`);
     }
 }else{
     if(anio%400===0){
         console.log(`${anio} es bisiesto`);
     }else{
         console.log(`${anio} no es bisiesto`);
     }
 }

 /** FORMA SIMPLIFICADA */

 if((anio%4 === 0&&anio%100!==0)||anio%400){
    console.log(`${anio} es bisiesto`);
 }else{
    console.log(`${anio} no es bisiesto`);
 }