// estas funciones son de ejemplo

export const contAmerica = (countries) => {
  return countries.filter((item) => item.continents[0] === 'America');
};

export const busqueda = (countries,valor) => {

  return countries.filter((item) => item.name.common.toLowerCase().startsWith(valor));
};

export const contCaribe = (countries) => {
  return countries.filter((item) => item.continents[0] === 'caribe');
};
export const anotherExample = () => {
  return 'OMG';
};

