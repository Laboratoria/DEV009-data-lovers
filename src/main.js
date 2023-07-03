//en este archivo se importar data y funciones desde diferentes archivos. También se hacen impresiones en la cónsola
//se importa un objeto que llamaremos data desde el archivo './data/ghibli/ghibli.js' - el objeto tiene una exportación default
import data from './data/ghibli/ghibli.js';


//Método map() es una función de los arreglos en JS que ITERA sobre cada elemento del arreglo y crea un nuevo arreglo
const people = data.films.flatMap(film => film.people.map(person => ({
  name: person.name,
  image: person.img
})));
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(data, data.films, people);

//export { people }; aún no se sabe cómo usarlo efectivame en data.js


const peopleList = document.getElementById('people-list');
peopleList.innerHTML = '';

// Recorrer el arreglo ordenado y crear elementos HTML para cada persona
people.forEach(person => {
  const personItem = document.createElement('div');
  const personImage = document.createElement('img');
  const personName = document.createElement('p');

  personImage.src = person.image;
  personName.textContent = person.name;

  personItem.appendChild(personImage);
  personItem.appendChild(personName);

  peopleList.appendChild(personItem);
});




