import { pokemon } from './data.js';

import data from './data/pokemon/pokemon.js';


//console.log(example, data);


const root = document.getElementById('root');
root.innerHTML=`<h1>${data.pokemon[0].name}</h1>`;