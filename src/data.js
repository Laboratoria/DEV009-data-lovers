

//manera ascedente
export const sortNameasc = (arr) => {
  arr.sort((a, b) => {
    if (a.name < b.name ) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return arr;
};
 //manera descendente
 export const sortNameDes = (arr) => {
  arr.sort((a, b) => {
    if (a.name > b.name ) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });

  return arr;
};

