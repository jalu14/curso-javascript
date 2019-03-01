# Clase 9 - Funciones

## Statement vs Expresions
*first class citizen

###Statement:
Compuesto por una directiva y expresiones, las directivas son palabras reservadas por el lenguaje (var, if, return, for) y las expresiones asignaciones.

###Expresions:
Son una entidad que se puede pasar a una función, devolver de la misma o asignar a una variable.

Ejemplos:
```javascript
var a = 2;
if (a > 1) {console.log('x');}
...
return 3;
...
for (var i = 0; i < 10; i++) {...}
```

## Scope

### Block scope y function scope



tail-cut para optimizar bucles

Limitaciones dle typeof, hay muchos objetos que el typeof no devuelve el tipo de objeto adecuado, por ejemplo, si pasamos una array nos dice que es un objeto.

## Global scope (window, global, this)

