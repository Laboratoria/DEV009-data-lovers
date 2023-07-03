//import { people } from './main.js';

//Estamos usando JavaScript modular. Export e Import son declaraciones.
//El uso de export/import permite compartir elementos (variables, funciones, clases) entre diferentes archivos en un proyecto de JS
//Solo se agrega la declaración export antes de la declaración de la variable





/*people.sort();

console.log(people);*/

 

/*
//Ordenar alfabéticamente
export const orderByAlphabetical = (array, getter, order = 'asc') => {
  array.sort((a, b) => {
    const first = getter(a);
    const second = getter(b);
    //Compara los elementos
    const compare = first.localeCompare(second);
    //Devuelve la comparación en el orden que le pedimos
    return order === 'asc' ? compare : -compare;
  })
  return array;
}


const sortedPeople = orderByAlphabetical(people, person => person.name);
console.log(sortedPeople);


const peopleList = document.getElementById('people-list');


sortedPeople.forEach(({ name, img, gender }) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <img src="${img}" alt="${name}">
    <p>Name: ${name}</p>
    <p>Gender: ${gender}</p>
  `;
  peopleList.appendChild(li);
});*/