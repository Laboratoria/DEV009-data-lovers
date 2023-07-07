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
      "href": "index.html"
    },
    {
      "title": "All Pokémon",
      "class": "menu__link",
      "href": "#",
      "action": () => displayPokemon(data.pokemon)
    },
    {
      "title": "TYPE",
      "class": "menu__item menu__item--show",
      "href": "#",
      "subMenu": ["Normal", "Rock", "Fairy", "Ghost"]
    },

    {
      "title": "Ranking",
      "class": "menu__link",
      "href": "#"
    }
  ]
}
// MENU
const body = document.querySelector('body');
const tagFirst = body.firstChild;
// nav
const header = document.createElement('header');
header.classList.add("header");

const nav = document.createElement('nav');
nav.classList.add("menu");

const section = document.createElement('section');
section.classList.add("menu__container");

const logo = document.createElement('img');
logo.src = "./img/logopokemon.png";
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
  aTitle.href = opciones.href;
  aTitle.innerHTML = opciones.title;


  if (opciones.subMenu) {
    const ulSubMenu = document.createElement('ul');
    ulSubMenu.classList.add("menu__nesting");

    opciones.subMenu.forEach((submenu) => {
      const liSubMenu = document.createElement('li');
      liSubMenu.classList.add("menu__inside");

      const aTitleSub = document.createElement('a');
      aTitleSub.classList.add("menu__link", "menu__link--inside");
      aTitleSub.href = submenu;
      aTitleSub.innerHTML = submenu;

      liSubMenu.appendChild(aTitleSub);
      ulSubMenu.appendChild(liSubMenu);
    });

    liTitle.appendChild(ulSubMenu);
  }
  if (opciones.title === "All Pokémon") {
    aTitle.addEventListener('click', () => displayPokemon(data.pokemon));
  }


  liTitle.appendChild(aTitle);
  ul.appendChild(liTitle);

});

const search = document.createElement('input')
search.setAttribute("type", "text");
search.classList.add("buscarPokemon");
search.placeholder = "Search Pokémon for name or num";

section.appendChild(logo);
section.appendChild(ul);
section.appendChild(search);
nav.appendChild(section);
header.appendChild(nav)

body.insertBefore(header, tagFirst);

//// FIN MENU ////

// Muestra data Random de Pokemon //
const randomPokemon = data.pokemon.slice().sort(() => 0.5 - Math.random()).slice(0, 5);


//busca y devuelve el primer elemento con el id root.
const root = document.getElementById("root");

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
    numPokemon.classList.add("numPokemon");

    const namePokemon = document.createElement("h1");
    namePokemon.textContent = pokemon.name;
    infoContainer.appendChild(namePokemon);

    const typePokemon = document.createElement("p");
    typePokemon.textContent = `Type: ${pokemon.type.join(", ")}`;
    infoContainer.appendChild(typePokemon);

    card.appendChild(infoContainer);
    card.appendChild(imgContainer);

//Prueba MODAL 
card.addEventListener('click', () => {
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.classList.add("modal");
  

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modal.style.display = "block";

  // Agrega el contenido deseado dentro de la modal (por ejemplo, información del Pokémon)
  const pokemonId = document.createElement("p");
  pokemonId.textContent = `N.º ${pokemon.num}`;
  modalContent.appendChild(pokemonId);

  const pokemonName = document.createElement("h1");
  pokemonName.textContent = pokemon.name;
  modalContent.appendChild(pokemonName);

  const pokemonImg = document.createElement("img");
  pokemonImg.src = pokemon.img;
  modalContent.appendChild(pokemonImg);

  const close = document.createElement("span");
  close.classList.add("close");
  close.textContent = "×";

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modalContent.appendChild(close);
  modal.appendChild(modalContent);

  root.appendChild(modal);
});


    root.appendChild(card);


    ////// M O D A L     P O K E M O N /////////
    //abrir modal
    card.addEventListener('click', () => {

      const modal = document.createElement("div");
      modal.classList.add("modalPokemon");
      modal.style.display = 'block';
      if (type.length > 1) {
        const color1 = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-' + type[0]);
        const color2 = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-' + type[1]);
        modal.style.background = "linear-gradient(to right, " + color1 + " 30%, " + color2 + ")";
      }
      else {
        const color = getComputedStyle(document.documentElement).getPropertyValue('--pokemon-type-' + type[0]);
        modal.style.background = color;
      }

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const numAname = document.createElement("div");
      numAname.classList.add("numAname")
      const pokemonId = document.createElement("p");
      pokemonId.textContent = `N.º ${pokemon.num}`;
      numAname.appendChild(pokemonId);

      const pokemonName = document.createElement("h1");
      pokemonName.textContent = pokemon.name;
      numAname.appendChild(pokemonName);

      const imgPokemonModal = document.createElement("div");
      imgPokemonModal.classList.add("imgPokemonModal");
      const imgPokemonMod = document.createElement("img");
      imgPokemonMod.src = pokemon.img;
      imgPokemonModal.appendChild(imgPokemonMod);

      //cerar modal
      const close = document.createElement("span");
      close.classList.add("close");
      close.textContent = "×";

      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      modalContent.appendChild(numAname);
      modalContent.appendChild(imgPokemonModal);
      modal.appendChild(close);
      modal.appendChild(modalContent);
      root.appendChild(modal);

    });
  });

}
displayPokemon(randomPokemon);



//////////   B U S C A D O R     P O K E M O N ////////
search.addEventListener('input', () => {

  //esta línea de código obtiene el valor del campo de entrada de texto representado por buscarPokemon, lo convierte a minúsculas utilizando .toLowerCase(), y lo almacena en la constante inputText.
  const inputText = search.value.toLowerCase(); //es un método que se utiliza en las cadenas de texto en JavaScript para convertir todos los caracteres de la cadena a minúsculas.

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




