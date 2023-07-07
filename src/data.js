export const sortBy = (data, option) => {
  if(option === 'opcion1' ){
    return data.sort((a, b) => b.rt_score - a.rt_score);
  } else if(option === 'opcion3'){
    return data.sort((a,b) => a.title.localeCompare(b.title));
  } else if(option === 'opcion2'){
    return data.sort((a,b) => b.title.localeCompare(a.title));
  }
};

export const filterByDirector = (data, director) => {
  function normalizeString(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  function compareStrings(a, b) {
    return normalizeString(a) === normalizeString(b);
  }
  return data.filter((item) => compareStrings(item.director, director));
};

export const filterByYear = (data, year) => {
  return data.filter((item) => item.release_date === year);
};