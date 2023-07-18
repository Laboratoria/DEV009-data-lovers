
export const filteredStatus = (array, option) => {
  let outputStatus;
  if (option === "All"){
    outputStatus = array;
  } else {
    outputStatus = array.filter(result => result.status === option);
  }
  return outputStatus
};

export const filteredSpecies = (array, option) => {
  let outputSpecies;
  if (option === "All"){
    outputSpecies = array;
  } else {
    outputSpecies = array.filter(result => result.species === option);
  }
  return outputSpecies;
};

export const filteredGender = (array, option) => {
  if (array === undefined) {
    throw new Error ('La data es incorrecta');
  }
  let outputGender; 
  if (option === "All"){
    outputGender = array;
  } else {
    outputGender = array.filter(result => result.gender === option);
  }
  return  outputGender;
};

export const filteredOrder = (array, option) => {
  let sorted;
  if (option === "AZ"){
    sorted = array.sort((a, b) => {
      if(a.name !== undefined && b.name !== undefined){
        return  a.name.localeCompare(b.name)
      }
    });
  } else {
    sorted = array.sort((a, b) => {
      if(a.name !== undefined && b.name !== undefined){
        return b.name.localeCompare(a.name)
      }
    });
  }
  return sorted;
}


export const filteredSearch = (array, option) => {
  const searchLowercase = option.toLowerCase(); //convertir el input a minuscula
  return array.filter(result => {
    if (result.name !== undefined){
      const resultName = result.name.toLowerCase(); // convertir name a minusculas 
      return resultName.includes(searchLowercase); //buscar cualquier coincidencia en la data, respecto a lo introducido en el input
    }
    
  });
};


export const porcentajeCalculo = (array) => {
  const porcentajeOutput = (array.length * 100 / 493).toFixed(2);
  return porcentajeOutput;

};






