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


console.log("🚀 ~ file: main.js:12 ~ muestraPokemon.forEach ~ pokemon:", pokemon.type[0])
    const type = pokemon.type;
    

    const card = document.createElement("div");
    card.classList.add("card");
    if (type.length>1)
    {
        const color1 = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-'+type[0]);
        const color2 = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-'+type[1]);
        card.style.background = "linear-gradient(to right, " + color1 + " 30%, "+ color2 + ")"; 
    }
    else
    {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-'+type[0]);
        card.style.background = color;
    }
    
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

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
