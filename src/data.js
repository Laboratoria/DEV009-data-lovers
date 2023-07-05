//manera ascedente
export const sortNameasc = (arr) => {
  arr.sort((a, b) => {
    if (a.name < b.name) {
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
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });
  return arr;
};
//de mayor a menor
export const sortNumYouger = (arr) => {
  arr.sort((a, b) => {
    if (a.num > b.num) {
      return -1;
    }
    if (a.num < b.num) {
      return 1;
    }
    return 0;
  });
  return arr;
}
//de menor a mayor
export const sortNumLower = (arr) => {
  arr.sort((a, b) => {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  });

  return arr;
};
