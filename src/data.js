export const filterData = (data,condition,filterBy) => {
  
  const result = data.filter (index => index[filterBy].includes(condition));
  return result;
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = data.map(x => x);

  switch(sortOrder){
 
  case 'ascendente':
    dataCopy.sort((a,b) => {
      if (a[sortBy] > b[sortBy]){
        return 1;
      }
      if (a[sortBy] < b[sortBy]){
        return -1;
      }
      return 0;
    });
    break;
  case 'descendente':
    dataCopy.sort((a,b) => {
      if (a[sortBy] > b[sortBy]){
        return -1;
      }
      if (a[sortBy] < b[sortBy]){
        return 1;
      }
      return 0;
    });
    break;
  }

  return dataCopy;
};
