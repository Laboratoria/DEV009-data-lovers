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

// import Chart from "chart.js";

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
const ordenarAZLink = document.getElementById("a-z-ordenarlink"); //llama al ID a-z-ordenarlink y  lo asigna a la variable ordenafAZLink
ordenarAZLink.addEventListener("click", function (event) {
  //cuando se hace click se cumple la funcion
  event.preventDefault(); // previene el comportamiento predeterminado del evento, en este caso, sirve para evitar que el enlace recargue la página.
  champions = OrdenarAZ(champions); //Llama a la función OrdenarAZ pasando champions como argumento
  championContainer.innerHTML = ""; // se utiliza para borrar cualquier contenido anterior antes de mostrar los datos ordenados.
  todos(); //llama a la funcion todos
});

// Ordenar Z - A
const ordenarZALink = document.getElementById("z-a-ordenarlink"); //llama al ID z-a-ordenarlink y  lo asigna a la variable ordenafAZLink
ordenarZALink.addEventListener("click", function (event) {
  //cuando se hace click se cumple la funcion
  event.preventDefault(); // previene el comportamiento predeterminado del evento, en este caso, sirve para evitar que el enlace recargue la página.
  champions = OrdenarZA(champions); //Llama a la función OrdenarZA pasando champions como argumento
  championContainer.innerHTML = ""; // se utiliza para borrar cualquier contenido anterior antes de mostrar los datos ordenados.
  todos(); //llama a la funcion todos
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
    //pasar a la informacion del campeon al darle click al nombre o a la imagen
    championElement.addEventListener("click", function () {
      // Obtener los datos del campeón
      const championSplash = champion.splash;
      const championTitle = champion.title;
      const championBlurb = champion.blurb;
      // Mostrar la sección 6
      document.getElementById("section6").style.display = "block";
      // Establecer el contenido del splash, el título y el blurb
      //se pone la informacon extraida en html
      document.getElementById("splashImage").src = championSplash;
      document.getElementById("championTitle").textContent = championTitle;
      document.getElementById("championBlurb").textContent = championBlurb;
      // Ocultar todas las demás secciones
      document.getElementById("section1").style.display = "none";
      document.getElementById("section2").style.display = "none";
      document.getElementById("section3").style.display = "none";
      document.getElementById("section4").style.display = "none";
      document.getElementById("section5").style.display = "none";
    });
    document
      .getElementById("close-button")
      .addEventListener("click", function () {
        // cuando se da click a close-button se cierra la section6
        document.getElementById("section6").style.display = "none";
        // y se muestra la section2 y 3
        document.getElementById("section1").style.display = "none";
        document.getElementById("section2").style.display = "block";
        document.getElementById("section3").style.display = "block";
        document.getElementById("section4").style.display = "none";
        document.getElementById("section5").style.display = "none";
      });
  }
}

//funciones para que el buscador funcione

const searchInput = document.getElementById("searchInput"); //se selecciona un elemento HTML con el ID "searchInput" y se almacena en la variable searchInput
searchInput.addEventListener("input", function () {
  //se agrega un "escuchador de eventos" al elemento searchInputque se activará cada vez q se detecte un cambio en su valor.
  //El evento "input" se dispara cuando el usuario escribe o elimina texto en el campo de búsqueda.
  const searchTerm = searchInput.value.toLowerCase(); //Esta línea de código obtiene el valor del campo de entrada con el ID "searchInput" y lo
  //convierte a minúsculas, almacenándolo en la variable searchTerm
  const filteredChampions = championFilter.filter((champion) => {
    //El método filter()se utiliza en championFilter para crear un nuevo arreglo
    //( filteredChampions) que contiene solo los elementos que cumplen con una condición específica.(champion)=>se pasa como
    //argumento a filter y se ejecuta para cada elemento de championFilter y toma a champion q representa cada campeon del arreglo
    return champion.name.toLowerCase().includes(searchTerm); //se accede a la propiedad name de champion, se convierte en minuscula
    //y se verifica si el nombre del campeón convertido a minúsculas incluye el término de búsqueda ( searchTerm). y se retorna
  });
  championContainer.innerHTML = ""; //se borra cualquier contenido anterior que pudiera estar presente en el contenedor.
  if (filteredChampions.length > 0) {
    //Si la longitud del arreglo es mayor que 0, significa que hay campeones que coinciden con el término de búsqueda.
    champions = filteredChampions; //asigna el arreglo filteredChampions a la variable champions, esto actualiza la lista de campeones
    todos(); //se cumple la funcion todos pero con el nuevo arreglo
  } else {
    championContainer.innerHTML =
      '<p class="error-message">No se encontraron campeones con ese nombre.</p>';
    //sino se cumple todo lo de arriba nos da ese error
  }
});

///////////////////////////////ESTADISTICAS/////////////////////////////////////
// Obtener estadísticas de roles
const roles = calcularRoles(champions); //se llama a la funcion calcularRole pasando el objeto champion como argumento
//esto debe devolver un objeto q contiene las estadisticas de los roles y todo se almacena en roles
// Crear arreglo de datos para el gráfico de torta
const rolesData = Object.values(roles); //rolesData contiene los valores del abj roles(ejm: roles es { mid: 5, top: 3, adc: 2 }, entonces rolesDataserá [5, 3, 2])
const rolesLabels = Object.keys(roles); //rolesLabaels contiene las claves del obj roles(ejm:roles es { mid: 5, top: 3, adc: 2 }, entonces rolesLabelsserá ['mid', 'top', 'adc'].)
// Crear elemento canvas para el gráfico
const chartCanvas = document.createElement("canvas"); //se crea un elemento canvas, este elemento se reafirmo para mostrar el grafico
chartCanvas.id = "roles-chart"; //se le crea un ID a canvas
chartCanvas.width = 300; //se le crea un ancho a canvas
chartCanvas.height = 300; //se le crea un alto a canvas
document.querySelector(".info-estadistica-izquierda").appendChild(chartCanvas);
//se llama a la clase info.estadisticas-izquieras y se le agrega dentro de el el elemento canvas creado
// Obtener contexto del canvas
const chartContext = chartCanvas.getContext("2d"); //chartCanvas representa el lienzo de dibujo en el cual se creará el gráfico.
/*.getContext("2d")es un método del elemento <canvas>que se utiliza para obtener el contexto de dibujo en 2D. El contexto de dibujo es una
interfaz de programación que proporciona métodos y propiedades para dibujar y manipular gráficos en el <canvas>.*/
// Crear gráfico de torta
new Chart(chartContext, {
  //se crea una instancia de la clase chart del paquete chart.js, pasando el contexto del canvas
  type: "pie", //se especifica el tipo de grafico en este caso el de pie
  data: {
    labels: rolesLabels, //se refuerzan las etiquetas del grafico como los nombres de los roles
    datasets: [
      //se proporciona un arreglo de conjunto de datos(en este caso solo hay un conjunto de datos)
      {
        data: rolesData, //se fortalecen los valores del grafico
        backgroundColor: [
          "#FF6384", // Color para el primer rol
          "#36A2EB", // Color para el segundo rol
          "#97E49B", // Color para el tercer rol
          "#8D4E8F", // Color para el cuarto rol
          "#DB4936", // Color para el quinto rol
          "#F1EF6E", // Color para el sexto rol
          "#000", // Color para el setimo rol
        ],
      },
    ],
  },
  options: {
    //se proporcionan opciones adificionales al grafico
    responsive: true, //permite que el grafico de adapte al tamaño del contenedor
    maintainAspectRatio: false, //deshabilita el mantenimiento del aspecto original del grafico
  },
});
