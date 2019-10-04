# Apuntes

## Tipos de datos en JavaScript
- string
- number
- null / undefined
- boolean
- function
- array
- object

NaN = not a number pero typeof NaN ojo 

## Parádigmas de programación
- estructural
- funcional
- orientada a objetos

### Ciudadano de primera orden (first class citizen)

### Sentencias y expresiones

Un literal es 
```js
var a = 'abc';
```

Una expresión es
```js
a + 'de';
// a es la expresión
```

## Referéncia de variables

## Acceder a los argumentos de una función
```js
function argso() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') sum += arguments[i];
    }
    return sum;
}
```
