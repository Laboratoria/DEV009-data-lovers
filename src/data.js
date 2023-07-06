// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filteredStatus = (array, option) => {
  console.log(option);
  return array.filter(result => result.status === option);
};


