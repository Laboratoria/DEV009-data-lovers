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
  return data.filter((item)=>item.director === director);
};

export const filterByYear = (data, year) => {
  return data.filter((item) => item.release_date === year);
};

export const getCount=(dataGhibli, selectedOptionDirector, selectedOptionYear) => {
  return dataGhibli.reduce((count, film) => {
    if (
      (selectedOptionDirector === 'all' || film.director === selectedOptionDirector) &&
      (selectedOptionYear === 'all' || film.release_date === selectedOptionYear)
    ) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
};

export const getPercentage = (films, count) => {
  console.log(films, count)
  return ((count / films.length) * 100).toFixed(2);
};