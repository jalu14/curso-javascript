/**
 * Dada una array y una edad devuelve una array con todos los elementos
 * de la primera cuya edad supera la especificada.
 * @param {any[]} array 
 * @param {number} minAge
 * @returns {any[]}
 */
const getEldersFor = function (array, minAge) {
    if (!Array.isArray(array) || isNaN(minAge)) throw new Error('Params must be an array and a number');
    const returnArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.age && element.age >= minAge) returnArray.push(element.name);
    }
    return returnArray;
};

/**
 * Dada una array y una edad devuelve una array con todos los elementos
 * de la primera cuya edad supera la especificada.
 * @param {any[]} array 
 * @param {number} minAge
 * @returns {any[]}
 */
const getEldersForEach = function (array, minAge) {
    if (!Array.isArray(array) || isNaN(minAge)) throw new Error('Params must be an array and a number');
    const returnArray = [];
    array.forEach((value, idx, originalArray) => {
        if (value.age >= minAge) returnArray.push(value.name);
    });
    return returnArray;
};

const getNamesForEach = function (array) {
    if (!Array.isArray(array)) throw new Error('Params must be an array and a number');
    const returnArray = [];
    array.forEach((value) => {
        returnArray.push(getName(value));
    });
    return returnArray;
};

function getName(element) {
    return element.name;
}

const getNamesMap = function (array) {
    if (!Array.isArray(array)) throw new Error('Params must be an array');
    return array.map(function (value) { return getName(value) });
};

const filterElders = function (array) {
    if (!Array.isArray(array)) throw new Error('Params must be an array');
    const returnArray = [];
    array.forEach((value) => {
        returnArray.push(value);
    });
    return returnArray;
};

module.exports = {
    getEldersFor: getEldersFor,
    getEldersForEach: getEldersForEach,
    getNamesForEach: getNamesForEach,
    getNamesMap: getNamesMap,
    filterElders: filterElders
}