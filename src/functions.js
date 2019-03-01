// // 1. Scope
// for (var i = 0; i < 10; i++) { }
// console.log(i); // 10, el scope del for no retiene la variable i
// for (let j = 0; j < 10; j++) { }
// console.log(); // undefined, con let si se retiene, pero hay que tener cuidad con navegadores antiguos
// //

/**
 * 
 * @param {number} total 
 * @param {*} current 
 */
const recursividad = function (total, current) {
    if (typeof current === 'undefined') { current = 0; }
    if (current >= total) { return; }
    console.log(current + 1);
    recursividad(total, current + 1);
};

// recursividad(10);

const logArgs = function () {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
};

const logArgsFor = function () {
    for (const llave in arguments) {
        if (arguments.hasOwnProperty(llave)) {
            console.log(llave);
        }
    }
};

const logArgsSlice = function () {
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(arg) {
        console.log(arg);
    });
};

// logArgsSlice(1, 2, 2, 2, 2, 2, 2);

// let objeto = {
//     nombre: "Javi",
//     edad: 10
// }

// array.forEach(element => {

// });

// for (const key in objeto) {
//     if (objeto.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

const typeOf = function(x) {
    var cadena_objeto = Object.prototype.toString.call(x);
    var cadena_editada = cadena_objeto.split(' ')[1].split(']')[0];
    console.log(cadena_editada.toLowerCase());
};

typeOf([1]);