# Clase 2 Tests unitarios

    Los tests unitarios se utilizan para probar un función totalmente aislada del entorno, son fáciles de crear y tienen mucha utilidad.

## TDD
El TDD (Test driven development o desarrollo guiado por tests) es una forma o hábito de desarrollo, nos incita a plantear funcionalidades y antes de desarrollarlas crear tests, luego enfocar el desarrollo a que esos tests unitarios se cumplan. Si al acabar un funcionalidad nos damos cuenta de nuevos tests estos se añaden.

· La ventaja, una vez realizados los tests y el desarrollo, si hacemos modificaciones podemos saber si estamos rompiendo algo.

· El punto negativo es el aprender la syntaxis, como integrar los tests en tu desarrollo y plantearlos bien.

## Mocha
Es un framework para realizar tests asyncronos, lo tenemos que combinar con otra herramienta para utilizarlo (chai, expect.js, sinon, etc.)

### Instalación

    npm install --save-dev mocha

Usamos el --save-dev para ponerlo en las dependencias de desarrollo, esto significa que al llevar nuestra aplicación a un entorno de producción esta dependencia no se descargará.

Ahora tenemos que añadir a nuestro *package.json* una entrada para ejecutar tests con comandos.

```json
scrips: {
    "test": "mocha --colors --watch **/*.spec.js"
}
```

Esto hace que al ejecutar el comando **npm test** se hagan todos los tests que sigan el patrón indicado (prueba **.spec.js**), y con el --watch, cuando hay cambios vuelve a ejecutar los tests.

## Expect.js
Nos da acceso a la API de vuelta ?  de funciones y pruebas, lo usamos para crear tests unitarios.

### Instalación

    npm install --save-dev expect.js

No tenemos que hacer configuración extra

## Ejemplos

Creamos un archivo js con una función básica para probarla.

**sum.js**
```javascript
function sum (x, y) {
    if (isNaN(x) || isNaN(y)) throw new Error('Solo se pueden usar números.');
    return x + y;
}

module.exports = sum;
```

Ahora vamos a crear un archivo **sum.spec.js** para hacer las pruebas unitarias.

```javascript
const expect = require('expect.js');
const sum = require('./sum');

describe('sum.js', function () {
    describe('sum', function () {
        it('tiene que sumar correctamente', function () {
            var resultado = sum(2, 3);
            expect(resultado).to.be(5);
        });

        it('acepta numeros negativos', function () {
            var resultado = sum(2, -3);
            expect(resultado).to.be(-1);
        });

        it('solo acepta números', function () {
            try {
            var resultado = sum(2, 'a');
            } catch (e) {
                expect(e).to.be.an(Error);
            }
        });
    });
});
```