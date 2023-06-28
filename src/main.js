// importa una entidad llamada example desde el archivo data.js
import { Muestra } from './data.js';


//importa un objeto llamado data desde el archivo pokemon.js ubicado en el directorio ./data/pokemon/
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// El objeto data contendrá información sobre los Pokémon.


//busca y devuelve el primer elemento con el id root.
const root = document.getElementById("root");

// asigna el arreglo de Pokémon contenido en el objeto data a la constante allPokemon


const muestraPokemon = Muestra(); 

muestraPokemon.forEach((pokemon) => {

    const namePokemon = document.createElement("h1");
    namePokemon.textContent = pokemon.name;

    const numPokemon = document.createElement("p");
    numPokemon.textContent = pokemon.num;

    const imgPokemon = document.createElement("img");
    imgPokemon.src = pokemon.img;

    const pokemonConteiner = document.createElement("div");
    pokemonConteiner.appendChild(namePokemon);
    pokemonConteiner.appendChild(numPokemon);
    pokemonConteiner.appendChild(imgPokemon);

    root.appendChild(pokemonConteiner);

  });










console.log(example, data);
/* function mostrarListaPokemon(){
for (let i = 0; i < allPokemon.length; i++) {
    const pokemon = allPokemon[i];
  
    const divConteiner = document.createElement("div");
    divConteiner.classList.add("pokemon");
    divConteiner.innerHTML = ` 
    <p class="pokemonId">${pokemon.num}</p>
    <div class="nombrePokemon">${pokemon.name}</div>
    <div class = img> 
        <img src = "${pokemon.img}" alt="${pokemon.name}"> 
    </div>
 `;
   root.appendChild(divConteiner);
  }
}
mostrarListaPokemon(); */
