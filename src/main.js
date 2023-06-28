// importa una entidad llamada example desde el archivo data.js
import { Muestra } from './data.js';
import pokemon from './data/pokemon/pokemon.js';

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


    const imgPokemon = document.createElement("img");
    imgPokemon.src = pokemon.img;
    imgContainer.appendChild(imgPokemon);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    const numPokemon = document.createElement("p");
    numPokemon.textContent = `N.º ${pokemon.num}`;
    infoContainer.appendChild(numPokemon);

    const namePokemon = document.createElement("h1");
    namePokemon.textContent = pokemon.name;
    infoContainer.appendChild(namePokemon);

    const typePokemon = document.createElement("p");
    typePokemon.textContent = `Type: ${pokemon.type.join(", ")}`;
    infoContainer.appendChild(typePokemon);

    card.appendChild(imgContainer);
    card.appendChild(infoContainer);

    root.appendChild(card);
});