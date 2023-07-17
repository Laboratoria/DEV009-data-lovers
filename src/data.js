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
//Función para calcular el cambio del valor de una propiedad un objeto en una unidad de tiempo 
//(La usamos para calcular el EPS y DPS de los ataques de pokemon)
export const change = (obj,val,time) => {
  const valNum = Number(obj[val]);
  const timeNum = Number(obj[time]);
  return (valNum/timeNum).toFixed(1);
}
//Función para calcular el promedio de un arreglo de numeros
export const mean = (arrayOfNumbers)=>{ 
  const sum=arrayOfNumbers.reduce((previous, current) => parseFloat(current) + parseFloat(previous),0);//Se calcula la suma de los numeros del arreglo
  return (sum/arrayOfNumbers.length).toFixed(1);//Regresa la suma de los valores entre el numero de valores.
  
}

