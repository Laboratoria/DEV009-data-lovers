// importa una entidad llamada example desde el archivo data.js
import { searchPokemon  } from './data.js';


//importa un objeto llamado data desde el archivo pokemon.js ubicado en el directorio ./data/pokemon/
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// El objeto data contendrá información sobre los Pokémon.

  const randomPokemon = data.pokemon.slice().sort(() => 0.5 - Math.random()).slice(0, 7);


//busca y devuelve el primer elemento con el id root.
const root = document.getElementById("root");

// asigna el arreglo de Pokémon contenido en el objeto data a la constante allPokemon



const displayPokemon = (dataPokemon)=>{ 
  root.innerHTML = '';
dataPokemon.forEach((pokemon) => {


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
    numPokemon.classList.add("numPokemon");// aqui quedamos para modicar stilo css con Nancy

    const namePokemon = document.createElement("h1");
    namePokemon.textContent = pokemon.name;
    infoContainer.appendChild(namePokemon);

    const typePokemon = document.createElement("p");
    typePokemon.textContent = `Type: ${pokemon.type.join(", ")}`;
    infoContainer.appendChild(typePokemon);

    card.appendChild(infoContainer);
    card.appendChild(imgContainer);
    


    root.appendChild(card);

});
}
displayPokemon(randomPokemon);


///////////// INICIO NANCY

//////////   B U S C A D O R     P O K E M O N ////////
//obtener el el text que el usuario escriba en el input
const buscarPokemon = document.getElementById("buscarPokemon");

buscarPokemon.addEventListener('input', () => {

  //esta línea de código obtiene el valor del campo de entrada de texto representado por buscarPokemon, lo convierte a minúsculas utilizando .toLowerCase(), y lo almacena en la constante inputText.
  const inputText = buscarPokemon.value.toLowerCase(); //es un método que se utiliza en las cadenas de texto en JavaScript para convertir todos los caracteres de la cadena a minúsculas.
  
  const result = searchPokemon(data.pokemon, inputText);
  if (inputText.length > 0 && result.length > 0) {
    displayPokemon(result);
  } else if (inputText.length > 0 && result.length === 0) {
    root.innerHTML='';
    root.textContent = 'Pokemon not found :(';
  } else {
    displayPokemon(data.pokemon);
  }
});


//// S O R T   P O K E M O N ///

const sortPokemon = document.getElementById('sortPoke');







////// M O D A L     P O K E M O N /////////
/* const cardResult = document.createElement("div");
cardResult.classList.add('modal')

cardResult.addEventListener('click', ()=>{
  const divConteiner = document.createElement("div");
    divConteiner.classList.add("pokemon");
    divConteiner.innerHTML = `
    <p class="pokemonId">${pokemon.num}</p>
    <div class="nombrePokemon">${pokemon.name}</div>
    <div class = img>
        <img src = "${pokemon.img}" alt="${pokemon.name}">
    </div>
 `
}); */

/////////////FIN NANCY






//console.log(example, data);
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