import {
  filtroLuchador,
  filtroTirador,
  filtroMago,
  filtroAsesino,
  filtroTanque,
  filtroApoyo,
  OrdenarAZ,
  OrdenarZA,
  calcularRoles,
} from "./data.js";

import Chart from "chart.js";
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

// Ocultar section2 al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
  document.getElementById("section5").style.display = "none";

  // Comandos para hacer la función de desaparecer la página principal y aparecer la página dos
  const botonAbajo = document.getElementById("botonAbajo");
  botonAbajo.addEventListener("click", Continuar);

  function Continuar() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "block";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "none";
  }

  const botonArriba = document.getElementById("botonArriba");
  botonArriba.addEventListener("click", Subir);

  function Subir() {
    document.getElementById("section3").style.display = "none";
    document.getElementById("section2").style.display = "none";
    document.getElementById("section1").style.display = "block";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "none";
  }

  const botonHome = document.getElementById("homeLink");
  botonHome.addEventListener("click", homePasar);

  function homePasar() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "block";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "none";
  }

  const botonTips = document.getElementById("tipsLink");
  botonTips.addEventListener("click", tipsPasar);

  function tipsPasar() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "block";
    document.getElementById("section5").style.display = "none";
  }

  const botonEstadisticas = document.getElementById("estadisticasLink");
  botonEstadisticas.addEventListener("click", estadisticasPasar);

  function estadisticasPasar() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "block";
  }
});

import Data from "./data/lol/lol.js";

let champions = Object.values(Data.data); //Object.values()para extraer los valores del objeto Data.data y convertirlos en una matriz.
const championFilter = Object.values(Data.data); //championFilter:utiliza cm una referencia para restaurar la listade campeones cuando sea necesario.

document.addEventListener("DOMContentLoaded", () => {
  todos();
});

const luchadorLink = document.getElementById("luchador-link");
luchadorLink.addEventListener("click", function (event) {
  event.preventDefault(); //addEventListener sirve para q no se valla a otra navegacion o parte del cogido, Esto es necesario para que los
  //enlaces actúen como botones de filtro en lugar de enlaces tradicionales.
  champions = filtroLuchador(championFilter); //filtra los campeones por luchador y da un nuevo array con los campeones filtrados y lo guarda en champions
  championContainer.innerHTML = "";
  todos();
  //Estas líneas sirven para vaciar el contenido del contenedor de campeones y luego llamar a la función todos() para mostrar los nuevos
  //campeones filtrados en la interfaz.
});

const tiradorLink = document.getElementById("tirador-link");
tiradorLink.addEventListener("click", function (event) {
  event.preventDefault(); //addEventListener sirve para q no se valla a otra navegacion o parte del cogido, Esto es necesario para que los
  //enlaces actúen como botones de filtro en lugar de enlaces tradicionales.
  champions = filtroTirador(championFilter); //filtra los campeones según por tirador y da un nuevo array con los campeones filtrados y lo guarda en champions
  championContainer.innerHTML = "";
  todos();
  //Estas líneas sirven para vaciar el contenido del contenedor de campeones y luego llamar a la función todos() para mostrar los nuevos
  //campeones filtrados en la interfaz.
});

const magoLink = document.getElementById("mago-link");
magoLink.addEventListener("click", function (event) {
  event.preventDefault(); //addEventListener sirve para q no se valla a otra navegacion o parte del cogido, Esto es necesario para que los
  //enlaces actúen como botones de filtro en lugar de enlaces tradicionales.
  champions = filtroMago(championFilter); //filtra los campeones según por magoy da un nuevo array con los campeones filtrados y lo guarda en champions
  championContainer.innerHTML = "";
  todos();
  //Estas líneas sirven para vaciar el contenido del contenedor de campeones y luego llamar a la función todos() para mostrar los nuevos
  //campeones filtrados en la interfaz.
});

const asesinoLink = document.getElementById("asesino-link");
asesinoLink.addEventListener("click", function (event) {
  event.preventDefault(); //addEventListener sirve para q no se valla a otra navegacion o parte del cogido, Esto es necesario para que los
  //enlaces actúen como botones de filtro en lugar de enlaces tradicionales.
  champions = filtroAsesino(championFilter); //filtra los campeones según por asesino y da un nuevo array con los campeones filtrados y lo guarda en champions
  championContainer.innerHTML = "";
  todos();
  //Estas líneas sirven para vaciar el contenido del contenedor de campeones y luego llamar a la función todos() para mostrar los nuevos
  //campeones filtrados en la interfaz.
});

const tanqueLink = document.getElementById("tanque-link");
tanqueLink.addEventListener("click", function (event) {
  event.preventDefault(); //addEventListener sirve para q no se valla a otra navegacion o parte del cogido, Esto es necesario para que los
  //enlaces actúen como botones de filtro en lugar de enlaces tradicionales.
  champions = filtroTanque(championFilter); //filtra los campeones según por tanque y da un nuevo array con los campeones filtrados y lo guarda en champions
  championContainer.innerHTML = "";
  todos();
  //Estas líneas sirven para vaciar el contenido del contenedor de campeones y luego llamar a la función todos() para mostrar los nuevos
  //campeones filtrados en la interfaz.
});

const apoyoLink = document.getElementById("apoyo-link");
apoyoLink.addEventListener("click", function (event) {
  event.preventDefault(); //addEventListener sirve para q no se valla a otra navegacion o parte del cogido, Esto es necesario para que los
  //enlaces actúen como botones de filtro en lugar de enlaces tradicionales.
  champions = filtroApoyo(championFilter); //filtra los campeones según por apoyo y da un nuevo array con los campeones filtrados y lo guarda en champions
  championContainer.innerHTML = "";
  todos();
  //Estas líneas sirven para vaciar el contenido del contenedor de campeones y luego llamar a la función todos() para mostrar los nuevos
  //campeones filtrados en la interfaz.
});

const todosLink = document.getElementById("todos-link");
todosLink.addEventListener("click", (event) => {
  event.preventDefault(); //addEventListener sirve para q no se valla a otra navegacion o parte del cogido, Esto es necesario para que los
  //enlaces actúen como botones de filtro en lugar de enlaces tradicionales.
  champions = Object.values(Data.data); //aca vuelve a extraer todo la data y la guarda en champion
  todos();
  //la función todos() para mostrar los nuevos campeones filtrados en la interfaz q en este caso ya muestra todos los campeones
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
  //todos() se encarga de mostrar los campeones en la pagina
  championContainer.innerHTML = ""; //se hace para asegurarse de que el contenedor esté vacío antes de agregar los campeones.
  for (const championKey in champions) {
    /*el For es algo q se repite varias veces, lo q esta entre parentecis () significa que estaremos accediendo a la data q tiene champions y se 
  obtiene el campeón correspondiente utilizando championKey  */
    const champion = champions[championKey];
    /*Aca se obtiene el campeon correspondiente utilizando championKey como índice para acceder al arreglo champions y el o los campeones 
    se le asignan a champion*/
    const championImageURL = champion.img; //se extrae la url de la imagem y se guarda en championImageURL
    const championElement = document.createElement("div"); //se crea un nuevo elemento HTML <div> y se asigna a la variable championElement.
    //Este elemento se reforzará para contener la imagen y el nombre del campeón.
    championElement.classList.add("champion-container"); //se le agrega una clase al div creado

    const imgElement = document.createElement("img"); //se crea un nuevo elemento HTML <img> y se y se asigna a la variable imgElement.
    imgElement.src = championImageURL; //src con la URL de la imagen del campeón, de modo que la imagen se carga y se muestra en la pagina
    imgElement.alt = championKey; //alt con el valor de championKey, esto da un texto alternativo para la img, que se muestra si la imagen no se puede cargar correctamente.
    imgElement.classList.add("champion-image"); //se le agrega una clase a la img creada

    const nameElement = document.createElement("p"); //Se crea un nuevo elemento HTML <p> y se asigna a la variable nameElement.
    nameElement.classList.add("champion-name"); //se le agrega una clase a la p creada
    nameElement.textContent = champion.name; //Se establece el contenido de texto del elemento nameElement como el nombre del campeón, que se obtiene de champion.name

    championElement.appendChild(imgElement); //Se agrega el elemento imgElement como hijo del elemento championElement. Esto coloca la imagen del campeón dentro del contenedor del campeón.
    championElement.appendChild(nameElement); //Se agrega el elemento nameElement como hijo del elemento championElement. Esto coloca el nombre del campeón debajo de la imagen del campeón dentro del contenedor del campeón.
    championContainer.appendChild(championElement); //Se agrega el elemento championElementcomo hijo del contenedor de campeones ( championContainer). Esto inserta el contenedor del campeón, con la imagen y el nombre del campeón, dentro del contenedor principal de la interfaz.
  }
}

//funciones para que el buscador funcione

const botonBusqueda = document.querySelector(".boton");
botonBusqueda.addEventListener("click", function () {
  const textoBusqueda = document.querySelector("input").value;
  buscarCampeon(textoBusqueda);
});

function buscarCampeon(textoBusqueda) {
  const campeonesEncontrados = champions.filter((champion) =>
    champion.name.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  if (campeonesEncontrados.length > 0) {
    mostrarCampeones(campeonesEncontrados);
  } else {
    mostrarError();
  }
  campoBusqueda.value = "";
}

function mostrarCampeones(campeones) {
  championContainer.innerHTML = "";
  for (const champion of campeones) {
    const championImageURL = champion.img;
    const championElement = document.createElement("div");
    championElement.classList.add("champion-container");

    const imgElement = document.createElement("img");
    imgElement.src = championImageURL;
    imgElement.alt = champion.name;
    imgElement.classList.add("champion-image");

    const nameElement = document.createElement("p");
    nameElement.classList.add("champion-name");
    nameElement.textContent = champion.name;

    championElement.appendChild(imgElement);
    championElement.appendChild(nameElement);
    championContainer.appendChild(championElement);
  }
}

function mostrarError() {
  championContainer.innerHTML = "No se encontraron campeones con ese nombre.";
}

const campoBusqueda = document.querySelector("input");
campoBusqueda.addEventListener("input", function () {
  const textoBusqueda = campoBusqueda.value;
  if (textoBusqueda === "") {
    mostrarCampeones(champions);
  }
});

///////////////////////////////ESTADISTICAS/////////////////////////////////////
// Obtener estadísticas de roles
const roles = calcularRoles(champions);

// Crear arreglo de datos para el gráfico de torta
const rolesData = Object.values(roles);
const rolesLabels = Object.keys(roles);

// Crear elemento canvas para el gráfico
const chartCanvas = document.createElement("canvas");
chartCanvas.id = "roles-chart";
chartCanvas.width = 300;
chartCanvas.height = 300;
document.querySelector(".info-estadistica-izquierda").appendChild(chartCanvas);

// Obtener contexto del canvas
const chartContext = chartCanvas.getContext("2d");

// Crear gráfico de torta
new Chart(chartContext, {
  type: "pie",
  data: {
    labels: rolesLabels,
    datasets: [
      {
        data: rolesData,
        backgroundColor: [
          "#FF6384", // Color para el primer rol
          "#36A2EB", // Color para el segundo rol
          "#97e49b",
          "#8d4e8f",
          "#db4936",
          "#f1ef6e",
          "#000",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});



