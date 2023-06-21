import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const button = document.getElementById("comenzar");
button.addEventListener("click", function () {
  window.location.href= 'filtrado.html';
});




console.log(example, data);
