// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const filterData = (data,condition,filterBy) => {
  
  const result = data.filter (index => index[filterBy].includes(condition) );

  return result;
};


/*
export const sortData = (data, sortBy, sortOrder) => {

  switch(sortOrder,sortBy){
  case 'A-Z':
    result = data.sort();
    break;
  case 'Z-A':
    result = data.sort();
    result.reverse();
    break;
  case 'ascendente':
    result = data.sort((a,b) => a-b);
    break;
  case 'desendente':
    result = data.sort((a,b) => a-b);
    result.reverse();
    break;
  }

  return result;
};
*/