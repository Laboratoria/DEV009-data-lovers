//import { films } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js'


document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector("#table-body");

    // Loop a través de los datos y crea las filas en la tabla
    data.forEach((item) => {
      // Crea una nueva fila
      const row = document.createElement("tr");

      // Crea las celdas y asigna los valores
      const titleCell = document.createElement("td");
      titleCell.textContent = item.title;
      row.appendChild(titleCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = item.description;
      row.appendChild(descriptionCell);

      const directorCell = document.createElement("td");
      directorCell.textContent = item.director;
      row.appendChild(directorCell);

      // Agrega la fila al tbody
      tableBody.appendChild(row);
    });
});