
import data from './data.js';
import peliculas from './data/ghibli/ghibli.js';// Se importa la data de studio ghibli


const botonVolverPrincipal = document.getElementById("principal");// Se declara la variable botonVolverPrincipal, y se llama al elemento del DOM por su Id.
botonVolverPrincipal.addEventListener("click", paginaPrincipal);// Se crea un evento al dar click se dirige a la funcion pagina principal

function paginaPrincipal() {
    location.href = "index.html";// Se agrega a la funcion principal la localizacion para direccionar 
}

window.addEventListener("load", mostrarPeliculas(peliculas.films));// Se agrega el evento escucha para que cuando se cargue la pagina films se muestren las cards
function mostrarPeliculas(peliculas) {
    let carSeccion = document.querySelector(".cards");// Se usa querySelector para encontrar la primera coincidencia de cards
    let cards = "";
    let colorFondo = 1;
    peliculas.forEach(pelicula => {// Se recorre el array que contien las peliculas pormedio de forEach
        let card = '<article class="card">';// declara la variable card y se le asigna una etiqueta article como texto
        card += '<picture class="thumbnail">';// a la variable card se le concatena etiqueta picture
        card += '<img class="category__' + colorFondo++ + '" src="' + pelicula.poster + '" alt="" />';
        card += '</picture>';
        card += '<div class="card-content">';
        card += '<p class="category category__' + colorFondo + '">' + pelicula.title + '</p><br><br>';
        card += '<p>' + pelicula.description + '</p>';
        card += '</div><!-- .card-content -->';
        card += '<footer>';
        card += '<div class="post-meta">';
        card += '<span class="timestamp"><i class="fa fa-clock-o"></i>Score: ' + pelicula.rt_score + '</span>';
        card += '<span class="comments"><i class="fa fa-comments"></i>Año: ' + pelicula.release_date + '</span>';
        card += '<span class="comments"><i class="fa fa-comments"></i>Productor: ' + pelicula.producer + '</span>';
        card += '<span class="comments"><i class="fa fa-comments"></i>Director: ' + pelicula.director + '</span>';
        card += '</div>';
        card += '</footer>';
        card += '</article>';
        console.log("esto hace el forEach en card: "+card);
        cards += card;
    });
    carSeccion.innerHTML = cards;
}


let peopleElement = document.getElementById('people');
peliculas.films[10].people.forEach(person => {
  // Crear un nuevo elemento para contener el nombre del personaje
  let personElement = document.createElement('div');
  personElement.classList.add('card'); // Agregamos una clase para dar estilo

  let imagePeopleElement = document.createElement('img');
  imagePeopleElement.classList.add('imagen'); // Clase para el estilo de las imágenes
  imagePeopleElement.setAttribute('src', person.img);
  imagePeopleElement.setAttribute('alt', person.name);
  imagePeopleElement.setAttribute('id', person.name + '-img');

  // crear un título para el nombre del personaje
  let nameHeading = document.createElement('h2');
  nameHeading.textContent = person.name;
  personElement.appendChild(nameHeading);

  // agregar la tarjeta al elemento #people
  peopleElement.appendChild(personElement); 
  personElement.appendChild(imagePeopleElement);
});


