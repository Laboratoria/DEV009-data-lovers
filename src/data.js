//import { people } from './main.js';

//Estamos usando JavaScript modular. Export e Import son declaraciones.
//El uso de export/import permite compartir elementos (variables, funciones, clases) entre diferentes archivos en un proyecto de JS
//Solo se agrega la declaración export antes de la declaración de la variable

function orderByAlphabetical (array) {
  const arrayOrdered = array.sort((a, b) => a.name.localeCompare(b.name));
  return arrayOrdered;
}

function prom(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    const score = parseInt(array[i].score, 10);
    suma = suma + score;
  }
  return suma / array.length;
}


export {orderByAlphabetical, prom}

