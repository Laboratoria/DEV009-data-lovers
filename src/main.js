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
import championsData from "./data/lol/lol.js";

const championContainer = document.getElementById("container_img");
function todos() {
  // Borra todos los elementos hijos del contenedor
  championContainer.innerHTML = "";
  // Itera sobre los campeones y agrega los elementos al contenedor
  Object.values(championsData.data).forEach((champion) => {
    const { img: championImageURL, name: championName } = champion;

    champion.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    });
    console.log(champion);

    const championElement = document.createElement("div");
    championElement.classList.add("champion-container");
    const imgElement = document.createElement("img");
    imgElement.src = championImageURL;
    imgElement.alt = championName;
    imgElement.classList.add("champion-image");

    const nameElement = document.createElement("p");
    nameElement.classList.add("champion-name");
    nameElement.textContent = championName;

    championElement.appendChild(imgElement);
    championElement.appendChild(nameElement);
    championContainer.appendChild(championElement);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const todosLink = document.querySelector('a[href="#TODOS"]');
  todosLink.addEventListener("click", (event) => {
    event.preventDefault();
    todos();
  });
  todos(); // Llama a la función por defecto al cargar la página
});

/////////////////////////////////////FILTRAR LA DATA POR LOS ROLES DE LOS CAMPEONES//////////////////////////////////77///////////////////

//7777777777777777777777777777777777           LUCHADOR          7777777777777777777777777777777777777777777777777777777777//

const luchadorLink = document.getElementById("luchador-link");
luchadorLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace
  const championF = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Fighter")
  );
  championContainer.innerHTML = "";
  // Iterar sobre los campeones
  //for=para     let=dejar       in=en
  for (let championKey in championF) {
    //comienza la declaracion del bucle con for, luego tenemos un let el cual nos servira para
    //que los datos que se estan llamando de championsData.data sean guardados con el nombre championkey por el momento
    // Accede a cada campeon y lo almacena en championKey
    const champion = championF[championKey]; // Seleccionamos el campeon y lo almacena en champion
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

    championElement.appendChild(imgElement); // Sirve para meter las imagenes en el div .
    championElement.appendChild(nameElement); //sirve para poner el nombre de los campeones en el div
    championContainer.appendChild(championElement); //aca estamos guardando todo lo de championElement en championContainer y se visualiza en el div
  }
});

//7777777777777777777777777777777777             TIDADOR         7777777777777777777777777777777777777777777777777777777777//

const tiradorLink = document.getElementById("tirador-link");
tiradorLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace
  const championM = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Marksman")
  );
  championContainer.innerHTML = "";
  // Iterar sobre los campeones
  //for=para     let=dejar       in=en
  for (let championKey in championM) {
    //comienza la declaracion del bucle con for, luego tenemos un let el cual nos servira para
    //que los datos que se estan llamando de championsData.data sean guardados con el nombre championkey por el momento
    // Accede a cada campeon y lo almacena en championKey
    const champion = championM[championKey]; // Seleccionamos el campeon y lo almacena en champion
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

    championElement.appendChild(imgElement); // Sirve para meter las imagenes en el div .
    championElement.appendChild(nameElement); //sirve para poner el nombre de los campeones en el div
    championContainer.appendChild(championElement); //aca estamos guardando todo lo de championElement en championContainer y se visualiza en el div
  }
});

//7777777777777777777777777777777777               MAGO          7777777777777777777777777777777777777777777777777777777777//

const magoLink = document.getElementById("mago-link");
magoLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace
  const championMg = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Mage")
  );
  championContainer.innerHTML = "";
  // Iterar sobre los campeones
  //for=para     let=dejar       in=en
  for (let championKey in championMg) {
    //comienza la declaracion del bucle con for, luego tenemos un let el cual nos servira para
    //que los datos que se estan llamando de championsData.data sean guardados con el nombre championkey por el momento
    // Accede a cada campeon y lo almacena en championKey
    const champion = championMg[championKey]; // Seleccionamos el campeon y lo almacena en champion
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

    championElement.appendChild(imgElement); // Sirve para meter las imagenes en el div .
    championElement.appendChild(nameElement); //sirve para poner el nombre de los campeones en el div
    championContainer.appendChild(championElement); //aca estamos guardando todo lo de championElement en championContainer y se visualiza en el div
  }
});

//7777777777777777777777777777777777              ASESINO          7777777777777777777777777777777777777777777777777777777777//

const asesinoLink = document.getElementById("asesino-link");
asesinoLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace
  const championA = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Assassin")
  );
  championContainer.innerHTML = "";
  // Iterar sobre los campeones
  //for=para     let=dejar       in=en
  for (let championKey in championA) {
    //comienza la declaracion del bucle con for, luego tenemos un let el cual nos servira para
    //que los datos que se estan llamando de championsData.data sean guardados con el nombre championkey por el momento
    // Accede a cada campeon y lo almacena en championKey
    const champion = championA[championKey]; // Seleccionamos el campeon y lo almacena en champion
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

    championElement.appendChild(imgElement); // Sirve para meter las imagenes en el div .
    championElement.appendChild(nameElement); //sirve para poner el nombre de los campeones en el div
    championContainer.appendChild(championElement); //aca estamos guardando todo lo de championElement en championContainer y se visualiza en el div
  }
});

//7777777777777777777777777777777777             TANQUE          7777777777777777777777777777777777777777777777777777777777//

const tanqueLink = document.getElementById("tanque-link");
tanqueLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace
  const championT = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Tank")
  );
  championContainer.innerHTML = "";
  // Iterar sobre los campeones
  //for=para     let=dejar       in=en
  for (let championKey in championT) {
    //comienza la declaracion del bucle con for, luego tenemos un let el cual nos servira para
    //que los datos que se estan llamando de championsData.data sean guardados con el nombre championkey por el momento
    // Accede a cada campeon y lo almacena en championKey
    const champion = championT[championKey]; // Seleccionamos el campeon y lo almacena en champion
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

    championElement.appendChild(imgElement); // Sirve para meter las imagenes en el div .
    championElement.appendChild(nameElement); //sirve para poner el nombre de los campeones en el div
    championContainer.appendChild(championElement); //aca estamos guardando todo lo de championElement en championContainer y se visualiza en el div
  }
});

//7777777777777777777777777777777777             APOYO         7777777777777777777777777777777777777777777777777777777777//

const apoyoLink = document.getElementById("apoyo-link");
apoyoLink.addEventListener("click", function (event) {
  event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace
  const championS = Object.values(championsData.data).filter((champion) =>
    champion.tags.includes("Support")
  );
  championContainer.innerHTML = "";
  // Iterar sobre los campeones
  //for=para     let=dejar       in=en
  for (let championKey in championS) {
    //comienza la declaracion del bucle con for, luego tenemos un let el cual nos servira para
    //que los datos que se estan llamando de championsData.data sean guardados con el nombre championkey por el momento
    // Accede a cada campeon y lo almacena en championKey
    const champion = championS[championKey]; // Seleccionamos el campeon y lo almacena en champion
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

    championElement.appendChild(imgElement); // Sirve para meter las imagenes en el div .
    championElement.appendChild(nameElement); //sirve para poner el nombre de los campeones en el div
    championContainer.appendChild(championElement); //aca estamos guardando todo lo de championElement en championContainer y se visualiza en el div
  }
});
