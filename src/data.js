// estas funciones son de ejemplo

import data from './data/pokemon/pokemon.js';

export const anotherExample = () => {
  return 'OMG';
};

export const Muestra = () => {
  const listExample = data.pokemon.slice().sort(() => 0.5 - Math.random()).slice(0, 5);
  return listExample
};