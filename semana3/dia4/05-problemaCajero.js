/**
 * Dado un monto ingresado por el usuario
 * calcular:
 * - Billetes de 200
 * - Billetes de 100
 * - Billetes de 50
 * - Billetes de 20
 * Que el cajero debe entregar
 */
let monto=1980;
let b200=0;
let b100=0;
let b50=0;
let b20=0;

b200=(monto-(monto%200))/200;
console.log(b200);
b100=(b200-(b200%100))/100;
console.log(b100);
