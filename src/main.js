import {
  filtroLuchador,
  filtroTirador,
  filtroMago,
  filtroAsesino,
  filtroTanque,
  filtroApoyo,
  OrdenarAZ,
  OrdenarZA,
} from "./data.js";

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
document.addEventListener("DOMContentLoaded", function () {
  // Ocultar section2 al cargar la página
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";

  // Comandos para hacer la función de desaparecer la página principal y aparecer la página dos
  const botonAbajo = document.getElementById("botonAbajo");
  botonAbajo.addEventListener("click", Continuar);

  function Continuar() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "block";
    document.getElementById("section4").style.display = "none";
  }

  const botonArriba = document.getElementById("botonArriba");
  botonArriba.addEventListener("click", Subir);

  function Subir() {
    document.getElementById("section3").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section1").style.display = "block";
    document.getElementById("section4").style.display = "none";
  }

  const botonHome = document.getElementById("homeLink");
  botonHome.addEventListener("click", homePasar);

  function homePasar() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "block";
    document.getElementById("section4").style.display = "none";
  }

  const botonTips = document.getElementById("tipsLink");
  botonTips.addEventListener("click", tipsPasar);

  function tipsPasar() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "block";
  }
});

import Data from "./data/lol/lol.js";

let champions = Object.values(Data.data); //Object.values() es una funcion q se utiliza para extraer los valores de championDat.data
const championFilter = Object.values(Data.data);

document.addEventListener("DOMContentLoaded", () => {
  todos();
});

const luchadorLink = document.getElementById("luchador-link");
luchadorLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = filtroLuchador(championFilter);
  championContainer.innerHTML = "";
  todos();
});

const tiradorLink = document.getElementById("tirador-link");
tiradorLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = filtroTirador(championFilter);
  championContainer.innerHTML = "";
  todos();
});

const magoLink = document.getElementById("mago-link");
magoLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = filtroMago(championFilter);
  championContainer.innerHTML = "";
  todos();
});

const asesinoLink = document.getElementById("asesino-link");
asesinoLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = filtroAsesino(championFilter);
  championContainer.innerHTML = "";
  todos();
});

const tanqueLink = document.getElementById("tanque-link");
tanqueLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = filtroTanque(championFilter);
  championContainer.innerHTML = "";
  todos();
});

const apoyoLink = document.getElementById("apoyo-link");
apoyoLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = filtroApoyo(championFilter);
  championContainer.innerHTML = "";
  todos();
});

const todosLink = document.getElementById("todos-link");
todosLink.addEventListener("click", (event) => {
  event.preventDefault();
  champions = Object.values(Data.data); //Object.values() es una funcion q se utiliza para extraer los valores de championDat.data
  championContainer.innerHTML = "";
  todos();
});

// Ordenar A - Z
const ordenarAZLink = document.getElementById("a-z-ordenarlink");
ordenarAZLink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = OrdenarAZ(champions);
  championContainer.innerHTML = "";
  todos();
});

// Ordenar Z - A
const ordenarZALink = document.getElementById("z-a-ordenarlink");
ordenarZALink.addEventListener("click", function (event) {
  event.preventDefault();
  champions = OrdenarZA(champions);
  championContainer.innerHTML = "";
  todos();
});

const championContainer = document.getElementById("container_img");
function todos() {
  championContainer.innerHTML = "";
  for (const championKey in champions) {
    const champion = champions[championKey];
    const championImageURL = champion.img;
    const championElement = document.createElement("div");
    championElement.classList.add("champion-container");

    const imgElement = document.createElement("img");
    imgElement.src = championImageURL;
    imgElement.alt = championKey;
    imgElement.classList.add("champion-image");

    const nameElement = document.createElement("p");
    nameElement.classList.add("champion-name");
    nameElement.textContent = champion.name;

    championElement.appendChild(imgElement);
    championElement.appendChild(nameElement);
    championContainer.appendChild(championElement);
  }
}
