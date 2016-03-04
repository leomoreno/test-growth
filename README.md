# Front-end test – Growth Acceleration Partners


## Ejecutar localmente App

### Clonar repositorio:

```sh
$ git clone https://github.com/leomoreno/test-growth.git
```
### Instalar dependencias npm:

```sh
$ npm install
```

###  Instalar dependencias Front-end:

```sh
$ bower install
```

### Usar Gulp para ejecutar

* `gulp` or `gulp build` para hacer build de una versión optimozada de la applicación en `/dist`
* `gulp serve` para lanzar un browser sync server a partir de los archivos fuente
* `gulp serve:dist` para lanzar un server a partir de la versión optimizada
* `gulp test` para lanzar los unit tests con Karma
* `gulp test:auto` para lanzar los unit tests con Karma en watch mode
* `gulp protractor` para lanzar los e2e tests con Protractor
* `gulp protractor:dist` para lanzar los e2e tests con Protractor en la versión optimizada `/dist`
