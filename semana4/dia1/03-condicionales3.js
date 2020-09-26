/**
 * Calcular el mayor de 3 numeros (asumiendo que son dieferentes todos)
 * Y mostrarlo en la consola
 * Los numeros pueden ser ingresados por el usuario o declarados al inicio del programa
 */

 const nro1=100;
 const nro2=23;
 const nro3=60;

 if(nro1>nro2 && nro1>nro3){
     console.log("El numero mayor es: "+nro1);
 }else{
     if(nro2>nro1 && nro2>nro3){
         console.log("El numero mayor es: "+nro2);
     }else{
         console.log("El numero mayor es: "+nro3);
     }
 }
 