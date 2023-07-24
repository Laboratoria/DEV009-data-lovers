import funcionesPokemon from './data.js';

//importa un objeto llamado data desde el archivo pokemon.js ubicado en el directorio ./data/pokemon/
// El objeto data contendrá información sobre los Pokémon.
import data from './data/pokemon/pokemon.js';



const tiposUnicos = data.pokemon.filter(pokemon => pokemon.type).flatMap(pokemon => pokemon.type).filter((type, index, self) => self.indexOf(type) === index);

const subMenu = tiposUnicos.map(tipo => ({
  type: tipo,
  img: `./assets/${tipo.toLowerCase()}.svg`,
  href: '#'
}));

const menu = {
  "menu": [
    {
      "title": "HOME",
      "class": "menu__link",
      "href": "index.html"
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
      "subMenu": subMenu
    },
    {
      "title": "Top Spawn Chance",
      "class": "menu__link",
      "href": "#ranking-section"
    }
  ]
}

const body = document.querySelector('body');
const tagFirst = body.firstChild;

const header = document.createElement('header');
header.classList.add("header", "item");
const nav = document.createElement('nav');
nav.classList.add("menu");
const section = document.createElement('section');
section.classList.add("menu__container");

const logo = document.createElement('img');
logo.src = "./img/logopokemon.png";
logo.classList.add("logo");
logo.width = 180;
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
    ulSubMenu.classList.add("menu__nesting", 'menu__nesting--columns');

    opciones.subMenu.forEach((submenu) => {
      const liSubMenu = document.createElement('li');
      liSubMenu.classList.add("menu__inside");

      const aTitleSub = document.createElement('a');
      aTitleSub.classList.add("menu__link", "menu__link--inside");
      aTitleSub.href = submenu.href;

      const spanSpace = document.createElement('span');
      spanSpace.innerHTML = '&nbsp;';

      const spanName = document.createElement('span');
      spanName.textContent = submenu.type;
      aTitleSub.append(spanSpace, spanName);

      const img = document.createElement('img');
      img.src = submenu.img;
      aTitleSub.insertBefore(img, aTitleSub.firstChild);

      //--------------- evento que al dar click en type pokemon llamara a la funcion displayPokemonByType
      aTitleSub.addEventListener('click', () => {
        const selectedType = submenu.type;
        const filteredPokemon = funcionesPokemon.displayPokemonByType(data.pokemon, selectedType);
        displayPokemon(filteredPokemon)
      });

      liSubMenu.appendChild(aTitleSub);
      ulSubMenu.appendChild(liSubMenu)
    });

    liTitle.appendChild(ulSubMenu);
  }
  if (opciones.title === "All Pokémon") {
    aTitle.addEventListener('click', () => displayPokemon(data.pokemon, null));
  }

  liTitle.appendChild(aTitle);
  ul.appendChild(liTitle);

});

const search = document.createElement('input')
search.setAttribute("type", "text");
search.classList.add("buscarPokemon");
search.placeholder = "Search Pokémon for name or num";


const orderaz = document.querySelector(".az");
const orderza = document.querySelector(".za");

section.append(logo, ul, search, orderaz, orderza);
nav.appendChild(section);
header.appendChild(nav)

body.insertBefore(header, tagFirst);

//// FIN MENU ////

// Muestra data Random de Pokemon //
const randomPokemon = data.pokemon.slice().sort(() => 0.5 - Math.random()).slice(0, 5);


//busca y devuelve el primer elemento con el id root.
const root = document.getElementById("root");



const displayPokemon = (dataPokemon, filter) => {
  root.innerHTML = '';
  if (filter) {
    dataPokemon = dataPokemon.filter(pokemon => pokemon.type && pokemon.type.includes(filter));
  }



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


    card.append(infoContainer, imgContainer);
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

      const pokemonId = document.createElement("div");
      pokemonId.classList.add("IdPokemon");
      pokemonId.textContent = `N.º ${pokemon.num}`;
      modalContent.appendChild(pokemonId);

      const pokemonName = document.createElement("div");
      pokemonName.classList.add("PokemonName");
      pokemonName.textContent = pokemon.name.toUpperCase();
      modalContent.appendChild(pokemonName);

      const imgPokemonModal = document.createElement("div");
      imgPokemonModal.classList.add("imgPokemonModal");
      const imgPokemonMod = document.createElement("img");
      imgPokemonMod.src = pokemon.img;
      imgPokemonModal.appendChild(imgPokemonMod);

      const datosPoke = document.createElement("div");
      datosPoke.classList.add("datosPoke");

      const typeModal = document.createElement("div");
      typeModal.classList.add("typeModal");
      typeModal.innerHTML = `Type: ${pokemon.type} <br>`;
      datosPoke.appendChild(typeModal);

      const resistantModal = document.createElement("div");
      resistantModal.innerHTML = `Resistant: ${pokemon.resistant.join(", ")}`;
      datosPoke.appendChild(resistantModal);

      const weaknessesModal = document.createElement("div");
      weaknessesModal.textContent = `Weaknesses: ${pokemon.weaknesses.join(", ")}`;
      datosPoke.appendChild(weaknessesModal);

      const quickMoveModal = document.createElement("div");
      const quickMove = pokemon["quick-move"];
      const quickData = [];
      for (let i = 0; i < quickMove.length; i++) {
        quickData.push(quickMove[i].name);
      }
      quickMoveModal.textContent = `Quick Move: ${quickData.join(", ")}`;
      datosPoke.appendChild(quickMoveModal);

      const attack = document.createElement("div");
      const specialAttackData = pokemon["special-attack"];
      const attackName = [];
      for (let i = 0; i < specialAttackData.length; i++) {
        attackName.push(specialAttackData[i].name)
      }
      attack.textContent = `Special Attack: ${attackName.join(", ")}`;
      datosPoke.appendChild(attack)

      const imgEgg = document.createElement("img");
      imgEgg.src = "./assets/egg.svg";
      imgEgg.alt = "Eggs";

      const eggs = document.createElement("p");
      eggs.innerHTML = pokemon.egg;
      eggs.insertBefore(imgEgg, eggs.firstChild);
      datosPoke.appendChild(eggs);



      //cerar modal
      const close = document.createElement("span");
      close.classList.add("close");
      close.textContent = "X";

      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      modal.appendChild(close);
      modalContent.append(pokemonId, pokemonName, imgPokemonModal, datosPoke);
      modal.appendChild(modalContent);
      root.appendChild(modal);
    });
  });

}

displayPokemon(randomPokemon);

/// ordena data
orderaz.addEventListener('click', () => {
  const pokemonOrdenadosAz = funcionesPokemon.orderPokemonAz(data.pokemon);
  displayPokemon(pokemonOrdenadosAz);
});
orderza.addEventListener('click', () => {
  const pokemonOrdenadosZa = funcionesPokemon.orderPokemonZa(data.pokemon);
  displayPokemon(pokemonOrdenadosZa);
});


//////////   B U S C A D O R     P O K E M O N ////////
search.addEventListener('input', () => {

  //esta línea de código obtiene el valor del campo de entrada de texto representado por buscarPokemon, lo convierte a minúsculas utilizando .toLowerCase(), y lo almacena en la constante inputText.
  const inputText = search.value.toLowerCase(); //es un método que se utiliza en las cadenas de texto en JavaScript para convertir todos los caracteres de la cadena a minúsculas.


  const result = funcionesPokemon.searchPokemon(data.pokemon, inputText);
  if (inputText.length > 0 && result.length > 0) {
    displayPokemon(result);
  } else if (inputText.length > 0 && result.length === 0) {
    root.innerHTML = '';
    root.textContent = 'Pokemon not found :(';
  } else {
    displayPokemon(data.pokemon);
  }
});

///////// Section RANKING de aparicion  /////
const sectionRanking = document.createElement('section');
sectionRanking.setAttribute("id", "ranking-section");
sectionRanking.classList.add('sectionRanking');

const picture = document.createElement('img');
picture.classList.add('picture');
picture.src = './img/ladyRanking.png';
picture.width = 460;
picture.height = 600;

const ranking = document.createElement('div');
ranking.classList.add('ranking');

const table = document.createElement('table');
//primera fila
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const positionHeader = document.createElement('th');
positionHeader.textContent = '# Position';

const pokemonHeader = document.createElement('th');
pokemonHeader.textContent = 'Pokémon';

const spawnChanceHeader = document.createElement('th');
spawnChanceHeader.textContent = 'Spawn Chance';

headerRow.appendChild(positionHeader);
headerRow.appendChild(pokemonHeader);
headerRow.appendChild(spawnChanceHeader);
thead.appendChild(headerRow);

const tbody = document.createElement('tbody');

const topPokemon = funcionesPokemon.getTopPokemon(data.pokemon);

topPokemon.forEach((pokemon, index) => {
  const rank = index + 1;

  const row = document.createElement('tr');

  const position = document.createElement('td');
  position.textContent = `# ${rank}`;

  const pokemonImg = document.createElement('img');
  pokemonImg.src = pokemon.img;
  pokemonImg.width = 50;
  pokemonImg.height = 50;

  const pokemonName = document.createElement('td');
  pokemonName.textContent = pokemon.name;

  const spawnChance = document.createElement('td');
  spawnChance.textContent = pokemon['spawn-chance'];

  row.appendChild(position);
  row.appendChild(pokemonImg);
  row.appendChild(pokemonName);
  row.appendChild(spawnChance);

  tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

ranking.appendChild(table);

sectionRanking.appendChild(picture);
sectionRanking.appendChild(ranking);


root.appendChild(sectionRanking);