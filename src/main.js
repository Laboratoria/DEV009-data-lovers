import { example } from "./data.js";
// script.js
import championsData from "./data/lol/lol.js";

const championContainer = document.getElementById("champion-container");

// Iterar sobre los campeones
for (let championKey in championsData.data) {
  const champion = championsData.data[championKey];
  const championImageURL = champion.img;

  // Crear elemento de imagen
  const imgElement = document.createElement("img");
  imgElement.src = championImageURL;
  imgElement.alt = championKey;
  imgElement.classList.add("champion-image");

  // Agregar imagen al contenedor
  championContainer.appendChild(imgElement);
}
