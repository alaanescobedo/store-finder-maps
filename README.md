## Generation - Google Maps

Code-Challenge realizado por parte el programa de Generation.

<div>
Tecnologias utilizadas:
<code><span>React</span><img height="14" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" align="center"/></code>
<code><span>Typescript</span><img height="14"src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" align="center"/></code>
</div>


#### Proyecto realizado sin dependencias adicionales a react.
- Se implemento un wrapper propio basado en la liberia [@googlemaps/react-wrapper](https://www.npmjs.com/package/@googlemaps/react-wrapper)
- Tests con Jest y React Testing Library

#### API'S utilizadas:
- Maps Javascript API from Google

### Historias de usuario
- As a student, I want to see a map of Mexico City
- As a student, I want to see a map that has all the stores represented as markers/pins on the map.
- As a student, I want to be able to click on a store and add it to a list of 'My Favorite Stores'.

### Preview
https://user-images.githubusercontent.com/70691126/205399674-ff7ccd4e-90b8-4bc4-9755-008ace8069d5.mp4

### Uso
Este proyecto es totalmente libre, para ejecutarlo realiza un clone de este repositorio y agrega tu API KEY en la siguiente variable de entorno, despues simplemente remueve la extension ".template" del nombre del archivo.
```ts
// .env.template
GOOGLE_MAPS_API_KEY=yours_api_key
```

### Guias utilizadas
https://developers.google.com/maps/documentation/javascript/react-map
