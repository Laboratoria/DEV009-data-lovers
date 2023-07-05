// importa una entidad llamada example desde el archivo data.js
import { searchPokemon } from './data.js';


//importa un objeto llamado data desde el archivo pokemon.js ubicado en el directorio ./data/pokemon/
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// El objeto data contendrá información sobre los Pokémon.


const menu = {
  "menu": [
  {
    "title": "Home",
    "class": "menu__link",
    "href": "#"
  },
  {
    "title": "All Pokémon",
    "class": "menu__link",
    "href": "#"
  },
    {
    "title": "TYPE",
    "class": "menu__item menu__item--show",
    "href": "#",
    "subMenu":["Normal","Roca"]
  },
  
  {
    "title": "Contact",
    "class": "menu__link",
    "href": "#"
  }
]
}
// MENU
const body = document.querySelector('body');
const tagFirst = body.firstChild;
// nav

const nav = document.createElement('nav');
nav.classList.add("menu");

const section = document.createElement('section');
section.classList.add("menu__container");

const logo = document.createElement('img');
logo.src ="./img/logopokemon.png" ;
logo.classList.add("logo");
logo.width = 150; 
logo.height = 80; 
logo.alt = "Logo Pokémon Lab Go";

const ul = document.createElement('ul');
ul.classList.add("menu__links");

menu.menu.forEach((opciones) => {
  const liTitle = document.createElement('li');
  liTitle.classList.add(...opciones.class.split(' '));

  const aTitle = document.createElement('a');
  aTitle.classList.add("menu__link");
  aTitle.href =  opciones.href;
  aTitle.innerHTML = opciones.title; 

  if (opciones.subMenu)
  {
    const ulSubMenu = document.createElement('ul');
    ulSubMenu.classList.add("menu__nesting");

    opciones.subMenu.forEach((submenu) => {
      const liSubMenu = document.createElement('li');
      liSubMenu.classList.add("menu__inside");

      const aTitleSub = document.createElement('a');
      aTitleSub.classList.add("menu__link", "menu__link--inside");
      aTitleSub.href =  submenu;
      aTitleSub.innerHTML = submenu; 
      
      liSubMenu.appendChild(aTitleSub);
      ulSubMenu.appendChild(liSubMenu);
      });

      liTitle.appendChild(ulSubMenu);
  }

  liTitle.appendChild(aTitle);
  ul.appendChild(liTitle);

});

section.appendChild(ul);
section.appendChild(logo);
nav.appendChild(section);


body.insertBefore(nav, tagFirst);

//// FIN MENU ////


const randomPokemon = data.pokemon.slice().sort(() => 0.5 - Math.random()).slice(0, 6);


//busca y devuelve el primer elemento con el id root.
const root = document.getElementById("root");

// asigna el arreglo de Pokémon contenido en el objeto data a la constante allPokemon



const displayPokemon = (dataPokemon) => {
  root.innerHTML = '';
  dataPokemon.forEach((pokemon) => {



    const type = pokemon.type;


    const card = document.createElement("div");
    card.classList.add("card");
    if (type.length > 1) {
      const color1 = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-' + type[0]);
      const color2 = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-' + type[1]);
      card.style.background = "linear-gradient(to right, " + color1 + " 30%, " + color2 + ")";
    }
    else {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-' + type[0]);
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

//const cardResult = document.createElement("div");


buscarPokemon.addEventListener('input', () => {

  //esta línea de código obtiene el valor del campo de entrada de texto representado por buscarPokemon, lo convierte a minúsculas utilizando .toLowerCase(), y lo almacena en la constante inputText.
  const inputText = buscarPokemon.value.toLowerCase(); //es un método que se utiliza en las cadenas de texto en JavaScript para convertir todos los caracteres de la cadena a minúsculas.



  const result = searchPokemon(data.pokemon, inputText);
  if (inputText.length > 0 && result.length > 0) {
    displayPokemon(result);
  } else if (inputText.length > 0 && result.length === 0) {
    root.innerHTML = '';
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
