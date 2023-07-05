const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

//Comandos para hacer la funcion de desaparecer la página principal y aparecer la pagina dos.

const botonAbajo = document.getElementById("botonAbajo");
botonAbajo.addEventListener("click", Continuar);

function Continuar() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "block";
}

const botonArriba = document.getElementById("botonArriba");
botonArriba.addEventListener("click", Subir);

function Subir() {
  document.getElementById("section2").style.display = "none";
  document.getElementById("section1").style.display = "block";
}

//Comandos para el manejo de base de datos
import { example } from "./data.js";
import championsData from "./data/lol/lol.js"; //  Importamos los datos de lolsito
const championContainer = document.getElementById("container_img"); // Llamamos al id del html
// Iterar sobre los campeones
//for=para     let=dejar       in=en
for (let championKey in championsData.data) {
  //comienza la declaracion del bucle con for, luego tenemos un let el cual nos servira para
  //que los datos que se estan llamando de championsData.data sean guardados con el nombre championkey por el momento
  // Accede a cada campeon y lo almacena en championKey
  const champion = championsData.data[championKey]; // Seleccionamos el campeon y lo almacena en champion
  const championImageURL = champion.img; // Obtenemos la imagen del campeon y se almacena en championImageUrl
  const championElement = document.createElement("div"); // Crea un div en html
  championElement.classList.add("champion-container"); //le agrega una class al div
  // Crear elemento de imagen
  const imgElement = document.createElement("img"); // Crea un img en html
  imgElement.src = championImageURL; //en html para poner una img nos piden un "src" pues aca tambien y este es championImageURL porque es
  //donde se almacena las imagenes de los campeones
  imgElement.alt = championKey; //el código está utilizando el valor de "championKey"como el texto alternativo para la imagen
  imgElement.classList.add("champion-image"); // Pone un class a todas las imagenes.
  const nameElement = document.createElement("p"); // Crea un parrafo en html
  nameElement.classList.add("champion-name"); //se le asigna una clase al parrafo creado
  nameElement.textContent = champion.name; // Obtenemos el nombre del campeon de la data y se guarda
  imgElement.addEventListener("click", function () {
    window.location.href = "index2.html"; //cuando se haga click en la imagen nos llevara al html con nombre ="index2.html".
  });
  nameElement.addEventListener("click", function () {
    window.location.href = "index2.html"; //cuando se haga click en el nombre nos llevara al html con nombre ="index2.html".
  });
  championElement.appendChild(imgElement); // Sirve para meter las imagenes en el div .
  championElement.appendChild(nameElement); //sirve para poner el nombre de los campeones en el div
  championContainer.appendChild(championElement); //aca estamos guardando todo lo de championElement en championContainer y se visualiza en el div
}

///////////////////FILTRAR LA DATA POR LOS ROLES DE LOS CAMPEONES/////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const campeonesData = [
    { nombre: "Campeón 1", imagen: "imagen1.png", rol: "Luchador" },
    { nombre: "Campeón 2", imagen: "imagen2.png", rol: "Luchador" },
    { nombre: "Campeón 3", imagen: "imagen3.png", rol: "Otro Rol" },
    // Resto de los campeones con sus datos
  ];

  // Función para mostrar los campeones del rol Luchador
  function mostrarCampeonesLuchador() {
    const luchadorLink = document.getElementById("luchador-link");
    luchadorLink.addEventListener("click", function (event) {
      event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace

      const luchadorCampeones = campeonesData.filter(
        (campeon) => campeon.rol === "Luchador"
      );

      const championContainer = document.getElementById("container_img");
      championContainer.innerHTML = ""; // Limpiamos el contenedor antes de agregar los campeones

      luchadorCampeones.forEach((campeon) => {
        const championElement = document.createElement("div");
        championElement.classList.add("champion-container");

        const imgElement = document.createElement("img");
        imgElement.src = campeon.imagen;
        imgElement.alt = campeon.nombre;
        imgElement.classList.add("champion-image");

        const nameElement = document.createElement("p");
        nameElement.classList.add("champion-name");
        nameElement.textContent = campeon.nombre;

        championElement.appendChild(imgElement);
        championElement.appendChild(nameElement);
        championContainer.appendChild(championElement);
      });
    });
  }

  // Llamamos a la función para mostrar los campeones del rol Luchador
  mostrarCampeonesLuchador();
});
