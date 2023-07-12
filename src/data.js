
//export se utiliza para exportar esta función y hacerla accesible desde otros archivos o módulos.
//data es un parámetro que representa los datos en los que se realizará la búsqueda
//inputText es el texto de entrada que se utilizará para buscar en los datos.


//FUNCION SEARCH POKEMON POR NUM Y NOMBRE 
export const searchPokemon = (data, inputText) => {
  const resultPokemon = data.filter((eachPokemon) => {
    const namePokemon = eachPokemon.name;
    const numPokemon = eachPokemon.num;
    const lengthText = inputText.length;
    return namePokemon.slice(0, lengthText) === inputText || numPokemon.slice(0, lengthText) === inputText;
    
  });
  return resultPokemon;
}



// FUNCION ORDENAR DATA POR NOMBRE

/*  export const orderData = ( a, b) => {
  if(a.pokemon.name < b.pokemon.name){
    return -1;
  }
  if(a.pokemon.name > b.pokemon.name){
    return 1;
  }
  return 0;
}  */


export function hola() {
  console.log("hola");
}


