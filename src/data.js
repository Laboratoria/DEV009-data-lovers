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
//Función para calcular EPS de un solo movimiento
export const epsCal = (rapido) => {
  const energy = Number(rapido.energy);
  const time = Number(rapido["move-duration-seg"]);
  return (energy/time).toFixed(1);
}
//Función para calcular el promedio de EPS de todos los ataques
export const promEps = (quickMove)=>{
  let epsArray =quickMove.map(i => epsCal(i));//se guarda los eps de los ataques
  let sum=epsArray.reduce((previous, current) => parseFloat(current) + parseFloat(previous),0);//Se calcula la suma de los ataques
  return (Number(sum)/quickMove.length).toFixed(1);//Regresa la suma de moviemientos entre la cantidad de ataques
  
}
