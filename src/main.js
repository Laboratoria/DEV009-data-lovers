import { example } from './data.js';


console.log(example, data);

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