
export const filteredStatus = (array, option) => {
  return array.filter(result => result.status === option);
};

export const filteredSpecies = (array, option) => {
  return array.filter(result => result.species === option);
};

export const filteredGender = (array, option) => {
  return array.filter(result => result.gender === option);
};

export const filteredSearch = (array, option) => {
  const searchLowercase = option.toLowerCase(); //convertir el input a minuscula
  return array.filter(result => {
    const resultName = result.name.toLowerCase(); // convertir name a minusculas 
    return resultName.includes(searchLowercase); //buscar cualquier coincidencia en la data, respecto a lo introducido en el input
    });
  };

    




