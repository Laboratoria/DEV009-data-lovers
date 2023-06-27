// estas funciones son de ejemplo

export const contAmerica = (countries) => {
  return countries.filter((item) => item.continents[0] === 'America');
};

export const contCaribe = (countries) => {
  return countries.filter((item) => item.continents[0] === 'caribe');
};
export const anotherExample = () => {
  return 'OMG';
};
