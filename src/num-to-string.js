/**
 * Dado un número nos devuelve su nombre en inglés.
 * @param {number} num - Número a transformar
 * @returns {string} Nombre del número en inglés
 */
var numToStringIfElse = function (num) {
    // Solo aceptamos números
    if (isNaN(num)) throw new Error('not a number');

    // No aceptamos números menores a 1
    if (num < 0) throw new Error('must be equal or greater than 0');

    // Ni mayores a 10
    if (num > 10) throw new Error('must be lower or equal than 10');

    var numString = '';
    if (num === 0) numString = 'zero';
    else if (num === 1) numString = 'one';
    else if (num === 2) numString = 'two';
    else if (num === 3) numString = 'three';
    else if (num === 4) numString = 'four';
    else if (num === 5) numString = 'five';
    else if (num === 6) numString = 'six';
    else if (num === 7) numString = 'seven';
    else if (num === 8) numString = 'eight';
    else if (num === 9) numString = 'nine';
    else if (num === 10) numString = 'ten';
    else throw new Error('tiene que ser un entero');

    return numString;
};

/**
 * Dado un número nos devuelve su nombre en inglés.
 * @param {number} num - Número a transformar
 * @returns {string} Nombre del número en inglés
 */
var numToStringSwitch = function (num) {
    // Solo aceptamos números
    if (isNaN(num)) throw new Error('not a number');

    // No aceptamos números menores a 1
    if (num < 0) throw new Error('must be equal or greater than 0');

    // Ni mayores a 10
    if (num > 10) throw new Error('must be lower or equal than 10');

    var numString = '';

    switch (num) {
        case 0:
            numString = 'zero';
            break;
        case 1:
            numString = 'one';
            break;
        case 2:
            numString = 'two';
            break;
        case 3:
            numString = 'three';
            break;
        case 4:
            numString = 'four';
            break;
        case 5:
            numString = 'five';
            break;
        case 6:
            numString = 'six';
            break;
        case 7:
            numString = 'seven';
            break;
        case 8:
            numString = 'eight';
            break;
        case 9:
            numString = 'nine';
            break;
        case 10:
            numString = 'ten';
            break;
        default:
            throw new Error('tiene que ser un entero');
    }

    return numString;
};

/**
 * Dado un número nos devuelve su nombre en inglés.
 * @param {number} num - Número a transformar
 * @returns {string} Nombre del número en inglés
 */
var numToStringIfMultipleReturn = function (num) {
    // Solo aceptamos números
    if (isNaN(num)) throw new Error('not a number');

    // No aceptamos números menores a 1
    if (num < 0) throw new Error('must be equal or greater than 0');

    // Ni mayores a 10
    if (num > 10) throw new Error('must be lower or equal than 10');

    if (num === 0) return 'zero';
    if (num === 1) return 'one';
    if (num === 2) return 'two';
    if (num === 3) return 'three';
    if (num === 4) return 'four';
    if (num === 5) return 'five';
    if (num === 6) return 'six';
    if (num === 7) return 'seven';
    if (num === 8) return 'eight';
    if (num === 9) return 'nine';
    if (num === 10) return 'ten';
    throw new Error('tiene que ser un entero');
};

module.exports = {
    numToStringIfElse: numToStringIfElse,
    numToStringSwitch: numToStringSwitch,
    numToStringIfMultipleReturn: numToStringIfMultipleReturn
};