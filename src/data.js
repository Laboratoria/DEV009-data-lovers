// estas funciones son de ejemplo

export const sortBy = (data, option) => {
    const result= data.sort((a, b) =>{
        if(option === "opcion1" ){
            return b.rt_score - a.rt_score;
        } else if(option === "opcion2"){
            
        }
        
    });
    return result;
};

//export const anotherExample = () => {
//  return 'OMG';
//};
