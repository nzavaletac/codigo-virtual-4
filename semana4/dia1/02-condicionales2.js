/**
 * CALCULAR EL INDICE DE MASA CORPORAL E INDICAR SI UNA PERSONA 
 * SE ENCUENTRA CON SOBREPESO DE ACUERDO A LA SIGUIENTE TABLA
 * 15 O MENOS= DELGADEZ
 * 15 Y 25 PESO IDEAL
 * 25 A MAS SOBREPESO
 * FORMULA DE IMC
 * IMC=PES(KG) / ALTURA AL CUADRADO (M)
 */

 let peso=+prompt("Ingrese su peso en Kg: ");
 let altura=+prompt("Ingrese su altura en Metros: ");
 const imc=peso/(altura*altura);

 console.log(`Su IMC es de: ${imc}`);
 console.log(imc);
 if(imc<=15){
     console.log("El paciente peresenta delgadez")
 }else{
     if(imc>25){
         console.log("El paciente presenta sobrepeso");
     }else{
         console.log("El paciente presenta un peso ideal")
     }
 }