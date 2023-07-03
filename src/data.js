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
 return data.filter((item) => item.director === director
 );
};
