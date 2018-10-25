# Clase 1

    Apuntes de la primera clase de JS

## Git, github

    Aprendemos como organizar nuestro repositorio para llevar un control del avance, hemos creado una cuenta y un repositorio en github para subir los resúmenes de estas clases y poder unirlos con los compañeros.
    
Comando para iniciar nuestro repositorio, más info [aquí](https://git-scm.com/docs/git-init)
```bash
git init -y
```
## Node, NPM, .gitignore

* Instalación de NODE
    * Descargar NodeJS desde [aquí](https://nodejs.org/es/).
    * Instalar el ejecutable y comprobar que en consola el comando **node -v** devuelve un mensaje.
* Instalación de NPM
    * NPM se instala con NODE, podemos usar el comando **npm -v** para ver la versión

* .gitignore
    * Creamos el archivo .gitignore en la raíz del proyecto
    * Añadimos **ejercicios/node_modules/** a la primera línea para ignorar la carpeta node_modules

    Esto se hace para evitar mover paquetes externos en el repositorio, la idea es que cada usuario que descargue el repositorio pueda obtener el 100% de esta carpeta con el comando **npm install** y poder seguir con el desarrollo sin problemas.

## package.json

* Instalamos los paquetes de expect.js y mocha con:
``` bash
npm install --save-dev expect.js mocha
```

## Tests

    Más adelante aprenderemos a desarrollar con tests utilizando chai y expect.js