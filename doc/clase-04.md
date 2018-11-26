# Clase 4 Estructuras de retorno

### Apuntes
Typeof no es siempre preciso, no se recomienda su uso
Usamos commonJS para exportar módulos

Probamos a construir la misma función usando diferentes estructuras, en algunas tenemos bloqueos, en otras requisitos.

La base es crear una función que dada un integer devuelva una cadena de texto con el número en inglés.

Regex, usamos el /abc/
Sirve para hacer comprobaciones de cadenas de texto, es más lento que otras funciones y bastante más complejo pero puede ser mucho más preciso que las funciones con strings.
```javascript
var regex = /abc/; // Crea un object con propiedad de regex

regex.test('holabchola'); // True
```

1. Tenemos que usar **IF** / **ELSES**
2. Tenemos que usar **SWITCH**
3. No tenemos que usar **ELSE**, solo **IF**, podemos usar muchos **RETURN**



### Preguntas

- Porque === en lugar de ==

- Porque a David le sale el eslint en el console log y a lo demas no

- Cascade switch, porque poner el break, probar en unit test

- With args en un test que apunta a una class con constructor