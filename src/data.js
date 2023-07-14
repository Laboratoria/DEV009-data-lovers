
const funcionesPokemon = {

  //FUNCION SEARCH POKEMON POR NUM Y NOMBRE
  searchPokemon: (data, inputText) => {
    const resultPokemon = data.filter((eachPokemon) => {
      const namePokemon = eachPokemon.name;
      const numPokemon = eachPokemon.num;
      const lengthText = inputText.length;
      return namePokemon.slice(0, lengthText) === inputText || numPokemon.slice(0, lengthText) === inputText;
    });
    return resultPokemon
  },

  //SELECION DE TIPO POKEMON
  displayPokemonByType: (data, filter) => {
    return data.filter(pokemon => pokemon.type && pokemon.type.includes(filter));
  },

  // FUNCION ORDENAR DATA POR NOMBRE

  orderPokemonByName: (a, b) => { //a y b se van a comparar para ordenar
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  }

};

export default funcionesPokemon;