/**Realice un algoritmo para determinar el sueldo semanal de un trabajador
con base en las horas trabajadas y el pago por hora, considerando que 
después de las 40 horas cada hora se considera como
excedente y se paga el doble. Construya el diagrama de flujo, el
pseudocódigo y el diagrama N/S. */

let sueldoSemanal=0;
let horasTrabajadas=42;
let pagoXHora=35;

if(horasTrabajadas>40){
    sueldoSemanal=40*pagoXHora+(horasTrabajadas-40)*2*pagoXHora;
}else{
    sueldoSemanal=horasTrabajadas*pagoXHora;
}
console.log(`Total a pagar: ${sueldoSemanal} por la semana cumplida 👛`);