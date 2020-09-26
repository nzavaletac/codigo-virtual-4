/**
 * Una función es un conjunto de lineas de código
 * que se ejecutarán cuando sean invocados, no antes, no después
 */

function tablaDel5() {
    for (let i = 0; i < 10; i++) {
        console.log(`${i} x 5 = ${i*5}`);
    }
}
/**
 * OBS: Una función no se ejecuta hasta que se le invoque
 */
tablaDel5();
/**
 * La ventaja de una función es que puede ser invocada N veces
 */
console.log("--------------");
tablaDel5();
console.log("--------------");
tablaDel5();

/**
 * Otra ventaja de una función es que el código puede ser reutilizable
 */
