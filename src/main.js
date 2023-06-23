import data from './data/ghibli/ghibli.js';
// import data from './data/lol/lol.js';

console.log(data.films);

let peopleElement = document.getElementById('people');
data.films[10].people.forEach(person => {
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
