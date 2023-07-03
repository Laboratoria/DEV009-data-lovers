// INICIO NANCY
//export se utiliza para exportar esta función y hacerla accesible desde otros archivos o módulos.
//data es un parámetro que representa los datos en los que se realizará la búsqueda
//inputText es el texto de entrada que se utilizará para buscar en los datos.
export const searchPokemon = (data, inputText) => {
  const resultPokemon = data.filter((eachPokemon) => {
    const namePokemon = eachPokemon.name;
    const lengthText = inputText.length;
    return namePokemon.slice(0, lengthText) === inputText;
  });
  return resultPokemon;
}




  /// CON FOR 
/*   const resultPokemon = [];

  //BUSCANDO LOS POKEMON CON EL TEXTO INGRESADO
  //forEach() es un método disponible en los arrays de JavaScript que permite ejecutar una función para cada elemento del array
  //eachPokemon es el parámetro que representa cada elemento del array data. 

  data.forEach((eachPokemon) => {
    const namePokemon = eachPokemon.name;
    const lengthText = inputText.length;
    if (namePokemon.slice(0, lengthText) === inputText) {
      resultPokemon.push(eachPokemon);
    }
  });
  return resultPokemon;
}; */
////




//fin nancy


