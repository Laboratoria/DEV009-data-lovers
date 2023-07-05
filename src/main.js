
import data from './data.js';
import peliculas from './data/ghibli/ghibli.js';// Se importa la data de studio ghibli

const botonVolverPrincipal = document.getElementById("principal");// Se declara la variable botonVolverPrincipal, y se llama al elemento del DOM por su Id.
if (botonVolverPrincipal !== null) {
  botonVolverPrincipal.addEventListener("click", data.paginaPrincipal);// Se crea un evento al dar click se dirige a la funcion pagina principal
  window.addEventListener("load", mostrarPeliculas(peliculas.films));// Se agrega el evento escucha para que cuando se cargue la pagina films se muestren las cards
}


const selectElement = document.querySelector('#ordenaPor');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector
if (selectElement !== null) {
  selectElement.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor del elemento
    let peliculasOrdenadas;
    switch (opcionSeleccionada) {
    case "0":
      peliculasOrdenadas = peliculas.films.slice();
      break;
    case "1":
      peliculasOrdenadas = data.OrdenaPeliculasAz(peliculas.films.slice());
      break;
    case "2":
      peliculasOrdenadas = data.OrdenaPeliculasZa(peliculas.films.slice());
      break;
    case "3":
      peliculasOrdenadas = data.OrdenaPeliculasAñoReciente(peliculas.films.slice());
      break;
    case "4":
      peliculasOrdenadas = data.OrdenaPeliculasAñoViejo(peliculas.films.slice());
      break;
    case "5":
      peliculasOrdenadas = data.OrdenaPeliculasScoreAlto(peliculas.films.slice());
      break;
    case "6":
      peliculasOrdenadas = data.OrdenaPeliculasScoreBajo(peliculas.films.slice());
      break;
    }
    mostrarPeliculas(peliculasOrdenadas);
  });
}

const selectProductor = document.querySelector('#Producers');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector
if (selectProductor !== null) {
  selectProductor.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor del elemento
    const peliculasProductor = data.OrdenaPeliculasProductor(peliculas.films, opcionSeleccionada);
    mostrarPeliculas(peliculasProductor);
  });
}


const selectDirector = document.querySelector('#Directors');//Se crea una constante y se le asigna el elemento que se obtiene con queryselector
if (selectDirector !== null) {
  selectDirector.addEventListener('change', (event) => {// A la constante se le agrega un elemento, que cuando cambia crea un evento
    const opcionSeleccionada = event.target.value;// Se declara una constante y le asigna el valor del elemento
    const peliculasDirector = data.OrdenaPeliculasDirector(peliculas.films, opcionSeleccionada);
    mostrarPeliculas(peliculasDirector);
  });
}

function mostrarPeliculas(peliculas) {
  const carSeccion = document.querySelector(".cards");// Se usa querySelector para encontrar la primera coincidencia de cards
  let cards = "";
  let colorFondo = 1;
  peliculas.forEach(pelicula => {// Se recorre el array que contien las peliculas pormedio de forEach
    let card = '<article class="card">';// declara la variable card y se le asigna una etiqueta article como texto
    card += '<picture class="imagen">';// a la variable card se le concatena etiqueta picture
    card += '<img class="category__' + colorFondo++ + '" src="' + pelicula.poster + '" alt="" />';
    card += '</picture>';
    card += '<div class="card-content">';
    card += '<p class="category category__' + colorFondo + '">' + pelicula.title + '</p><br><br>';
    card += '<p>' + pelicula.description + '</p>';
    card += '</div><!-- .card-content -->';
    card += '<footer>';
    card += '<div class="post-meta">';
    card += '<span class="timestamp">Score: ' + pelicula.rt_score + '</span><br>';
    card += '<span class="comments">Año: ' + pelicula.release_date + '</span><br>';
    card += '<span class="comments">Productor: ' + pelicula.producer + '</span><br>';
    card += '<span class="comments">Director: ' + pelicula.director + '</span><br>';
    card += '</div>';
    card += '</footer>';
    card += '</article>';
    //console.log("esto hace el forEach en card: "+card);
    cards += card;
  });
  carSeccion.innerHTML = cards;
}