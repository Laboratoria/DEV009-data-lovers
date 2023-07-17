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

  orderPokemonAz: (arrayPokemon) => {
    const pokemonOrdenadosAz = arrayPokemon.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return pokemonOrdenadosAz;
  },

  orderPokemonZa: (arrayPokemon) => {
    const pokemonOrdenadosZa = arrayPokemon.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return pokemonOrdenadosZa;
  },


  //FUNCION PARA OBTENER RANKING TOP TEN DE APARICION
  getTopPokemon: (data) => {
    const sortedPokemon = data.sort((a, b) => parseFloat(b['spawn-chance']) - parseFloat(a['spawn-chance']));
    const topPokemon = sortedPokemon.slice(0, 10);
    return topPokemon;
    
  }

};


export default funcionesPokemon;