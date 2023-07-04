//import { people } from './main.js';

//Estamos usando JavaScript modular. Export e Import son declaraciones.
//El uso de export/import permite compartir elementos (variables, funciones, clases) entre diferentes archivos en un proyecto de JS
//Solo se agrega la declaración export antes de la declaración de la variable

function orderByAlphabetical (array) {
  const arrayOrdered = array.sort((a, b) => a.name.localeCompare(b.name));
  return arrayOrdered;
}

export {orderByAlphabetical}

