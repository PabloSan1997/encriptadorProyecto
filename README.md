# Proyecto Encriptador

En este proyecto del programa Oracle One #challengeonecodificador5 se desarrolló el ejercicio de hacer una pagina que encripte y desencripte un mensaje.

## Comenzando 

Esta aplicación web se elaboró en node con auyda de Vite para poder facilitar el desarrollo y generar los archivos estaticos con una mejor optimización.

### Prerrequisitos

Para este proyecto se requiere tener instalado una version estable de [Node.js](https://nodejs.org/es "Node.js")

### Instalación

Clone o descargue el repositorio con `git clone` e instale las dependencias de este proyecto `npm install`.

Para ejecutar este proyecto se cuentan con estos tres scripts en el package.json:

```json
 "scripts": {
    "dev": "vite --port 3000 --open",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  }
```
- Con `npm run dev` de ejecuta el modo desarrollador en el puerto 3000 para ver en tiempo real el funcionamiento de la aplicación y sus cambios al momento de editar el código
- Con `npm run build` se generan los archivos estaticos y optimizados para producción en una carpeta llamada "dist"
- Con `npm run preview` se ejecuta en un puerto libre el funcionamiento de los archivos estaticos generados para comprobas su funcionamiento
- Con `npm run deploy` los archivos generados en la carpeta dist se publicaran en gh-pages del repositorio

## Tecnologias

- Lenguajes: Html, Css, Javascript
- Dependencias: [Vite](https://vitejs.dev/ "Vite") , gh-pages
- Entorno: Node.js

## Gh-pages

[Encriptador-pagina](https://pablosan1997.github.io/encriptadorProyecto/ "Encriptador-pagina")

## Autor
- [Pablo Santillana](https://github.com/PabloSan1997 "Pablo Santillana")