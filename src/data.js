export const example = {
paisAtlethes: (datos) => {
     const name = datos.filter( (i) => i.team==="Italy")
     console.log('italia',name)
     return name
    
}

}