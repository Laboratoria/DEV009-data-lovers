
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



// FUNCION MOSTRAR MODAL AL DAR CLICK SOBRE LA CARD
/* export const modalPokemon = (event){
  const modal =  event.target.getAttribute('nombre');
}; */


