// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// Crear un arreglo con elementos de la opción seleccionada
//hacer un arreglo que tenga los que esten Alive 


export const filter = (array, option) => {
  
  const filteredAlive = array.filter(value => value.status === option);
  return filteredAlive;

}