import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
//console.log(data.pokemon)
const root = document.getElementById("root");
const allPokemon = data.pokemon;
//root.innerHTML = `<h1>${data.pokemon[0].name}</h1>'`;
//const titulo= document.createElement ('h1');
//titulo.innerText = data.pokemon[1].name;

//root.appendChild(titulo);

for (let i = 0; i < allPokemon.length; i++); {
    root.innerHTML = root.innerHTML +`<h1>${allPokemon[i].name}</h1>'`
    //const titulo = documente.createElement('h1');
    //titulo.innerText = allPokemon[i].name;
    //root.appendChild(titulo);
}