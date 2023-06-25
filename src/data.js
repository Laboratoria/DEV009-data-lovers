// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';
//};

//export const anotherExample = () => {
  //return 'OMG';
//};

let dataPokemon = [
  {
    numero: "650",
    nombre: "chespin",
    tipo: "planta",
    habilidad:"espesura",
    evolucion:"de ninguno a Quilladin" 

  },
  {
    numero: "651",
    nombre: "Quilladin",
    tipo: "planta",
    habilidad:"espesura",
    evolucion:"de Chespin a Chesnaught"

  },
  {
    numero: "652",
    nombre: "Chesnaught",
    tipo: "planta y lucha",
    habilidad:"ataque especial",
    evolucion:"de Quilladin a ninguno"

  },
  {
    numero: "653",
    nombre: "Fennekin",
    tipo: " Fuego",
    habilidad:"expulsa aire caliente",
    evolucion:"de Ninguno a  Braixen"
  },
  {
    numero: "654",
    nombre: "Braixen",
    tipo: " Fuego",
    habilidad:"Mar Llamas",
    evolucion:"de Braixende a Ninguno"
  },
  {
    numero: "655",
    nombre: "Delphox",
    tipo: "  Fuego y Psíquico",
    evolucion:"de ninguno a Frogadier"
  },
  {
    numero: "656",
    nombre: "Froakie",
    tipo: "agua",
    habilidad:"Mar Llamas",
    evolucion:"de  Frogadier a ninguno"
  },
  {
    numero: "657",
    nombre: "Frogadier",
    tipo: "agua",
    habilidad:"Ataque Defensa y Ataque Especial",
    evolucion:"de  Froakie a Greninja"
  },
  {
    numero: "658",
    nombre: "Greninja",
    tipo: "agua y siniestro",
    habilidad:"Torrente",
    evolucion:"de Frogadier a Greninja-Ash"
  },
  {
    numero: "659",
    nombre: "Bunnelby",
    tipo: " Normal",
    habilidad:"alerta permanente",
    evolucion:"de  conejo feliz a Diggersby"
  },
  {
    numero: "660",
    nombre: "Diggersby",
    tipo: " Normal y tierra",
    habilidad:"Recogida Carrillo",
    evolucion:"no evoluciona"
  },
  {
    numero: "661",
    nombre: "Fletchling",
    tipo: " Normal y volador",
    habilidad:"Sacapecho" ,
    evolucion:"de Fletchinder a ninguno"
  },
  {
    numero: "662",
    nombre: "Fletchinder",
    tipo: " fuego y volador",
    habilidad:"Sacapecho" ,
    evolucion:"de Fletchling a Talonflame"
  },
  {
    numero: "663",
    nombre: "Talonflame",
    tipo: " fuego y volador",
    habilidad:"Cuerpo Llama" ,
    evolucion:"de Fletchinder a ninguno"
  },
  {
    numero: "664",
    nombre: "Scatterbug",
    tipo: "Bicho",
    habilidad:"Cuerpo Llama" ,
    evolucion:"de ninguno a  Spewpa"
  },
  {
    numero: "665",
    nombre: "Spewpa",
    tipo: "Bicho",
    habilidad:"Mudar" ,
    evolucion:"de Scatterbug a Vivillon"
  },
  {
    numero: "666",
    nombre: "Vivillon",
    tipo: "Bicho y volador",
    habilidad:"Polvo Escudo" ,
    evolucion:"de Spewpa a ninguno"
  },
  {
    numero: "667",
    nombre: "Litleo",
    tipo: "fuego y normal",
    habilidad:"Rivalidad Nerviosismo" ,
    evolucion:"no evoluciona"
  },
  {
    numero: "668",
    nombre: "Pyroar",
    tipo: "fuego y normal",
    habilidad:"Rivalidad Nerviosismo" ,
    evolucion:" de Litleo a normal"
  },
  {
    numero: "669",
    nombre: "Flabébé",
    tipo: "hada",
    habilidad:"Velo Flor" ,
    evolucion:" de Ninguno	a  Floette"
  },
  {
    numero: "670",
    nombre: "Floette",
    tipo: "hada",
    habilidad: "Ataque Especial" ,
    evolucion:" de Flabébé	a Florges"
  },
  {
    numero: "671",
    nombre: "Florges",
    tipo: "hada",
    habilidad:"Velo Flor" ,
    evolucion:" de Floette	a  ninguno"
  },
  {
    numero: "672",
    nombre: "Skiddo",
    tipo: "planta",
    habilidad:"Herbívoro" ,
    evolucion:" de ninguno a Gogoat"
  },
  {
    numero: "673",
    nombre: "Gogoat",
    tipo: "planta",
    habilidad:"Herbívoro" ,
    evolucion:" de  Skiddo	a ninguno"
  },
  {
    numero: "674",
    nombre: "Pancham",
    tipo: "Lucha",
    habilidad:"Puño Férreo" ,
    evolucion:" de ninguno a Pangoro"
  },
  {
    numero: "675",
    nombre: "Pangoro",
    tipo: "Lucha y siniestro",
    habilidad:"furia" ,
    evolucion:" de Pancham a ninguno"
  },
  {
    numero: "676",
    nombre: "Furfrou",
    tipo: "normal",
    habilidad:"Ataque Especial" ,
    evolucion:"no evoluciona"
  },
  {
    numero: "677",
    nombre: "Espurr",
    tipo: " Psíquico",
    habilidad:"inexpresividad" ,
    evolucion:"de ninguno a  Meowstic"
  },
  {
    numero: "678",
    nombre: "Meowstic",
    tipo: " Psíquico",
    habilidad:"Velocidad" ,
    evolucion:"de Espurr  a ninguno"
  },
  {
    numero: "679",
    nombre: "Honedge",
    tipo: "acero y fantasma",
    habilidad:"Ataque Especial" ,
    evolucion:"de ninguno a Doublade"
  },
  {
    numero: "680",
    nombre: "Doublade",
    tipo: "acero y fantasma",
    habilidad:"Indefenso" ,
    evolucion:"de Honedge a Aegislash"
  },
  {
    numero: "681",
    nombre: "Aegislash",
    tipo: "acero y fantasma",
    habilidad:"Cambio Táctico" ,
    evolucion:"de Doublade a ninguno"
  },
  {
    numero: "682",
    nombre: "Spritzee",
    tipo: "hada",
    habilidad:"fragancia" ,
    evolucion:"de ninguno a Aromatisse"
  },
  {
    numero: "683",
    nombre: "Aromatisse",
    tipo: "hada",
    habilidad:"Alma Cura" ,
    evolucion:"de Spritzee a ninguno"
  },
  {
    numero: "684",
    nombre: "Swirlix",
    tipo: "hada",
    habilidad:"Velo Dulce" ,
    evolucion:"de ninguno a Slurpuff"
  },
  {
    numero: "685",
    nombre: "Slurpuff",
    tipo: "hada",
    habilidad:"Velo Dulce" ,
    evolucion:"de Swirlix a ninguno"
  },
  {
    numero: "686",
    nombre: "Inkay",
    tipo: "Siniestro y psiquico",
    habilidad:" Ataque Especial " ,
    evolucion:"de  ninguno a Malamar"
  },
  {
    numero: "687",
    nombre: "Malamar",
    tipo: "Siniestro y psiquico",
    habilidad:" Ventosas Respondón  " ,
    evolucion:"de Inkay	a ninguno"
  },
  {
    numero: "688",
    nombre: "Binacle",
    tipo: "roca y agua",
    habilidad:"Francotirador" ,
    evolucion:"de ninguno a Barbaracle"
  },
  {
    numero: "689",
    nombre: "Barbaracle",
    tipo: "roca y agua",
    habilidad:"Francotirador" ,
    evolucion:"de Binacle a ninguno"
  },
  {
    numero: "690",
    nombre: "Skrelp",
    tipo: "veneno y agua",
    habilidad:"Punto Tóxico" ,
    evolucion:"de ninguno a Dragalge"
  },

]