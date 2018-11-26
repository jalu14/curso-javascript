function pyramid(num) {
    var forever = true; // Pal bucle infinito
    var numActual = 0; // Número actual de la pirámide
    while (forever) {
        if (numActual === num) { break; }

        console.log(repeatNumber(numActual + 1));

        numActual = numActual + 1;
    }
}
pyramid(6);

function repeatNumber(num) {
    var forever = true; // Pal bucle infinito
    var iteracion = 0;
    var printeo = '';
    while (forever) {
        if (iteracion === num) { break; }
        printeo += num + ' ';
        iteracion = iteracion + 1;
    }
    return printeo;
}
// repeatNumber(7);

module.exports = {
    pyramid: pyramid,
    repeatNumber: repeatNumber
};