import { sortData, filterTeam,filterSport,filterGen,filterMedal, estadistica } from '../src/data.js';

const data = [{"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
  {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
  {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
  {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
  {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
  {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"}]
 
const medals = {"gold": 20, "silver": 17, "bronze": 43}

describe('ordena por', () => {
  it('ordena los atletas de mayor a menor', () => {
    expect(sortData.sortbyAge1(data)).toEqual([
      {"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},
      {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
    ]);
  });

  it('ordena los atletas de menor a mayor', () => {
    expect(sortData.sortbyAge2(data)).toEqual([
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},
      {"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
    ]);
  });

  it('ordena los atletas por nombre (A-Z)', () => {
    expect(sortData.sortbyNameAtoZ(data)).toEqual([
      {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},
    ]);
  });

  it('ordena los atletas por nombre (Z-A)', () => {
    expect(sortData.sortbyNameZtoA(data)).toEqual([
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15}, 
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
      {"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
    ]);
  });

  it('ordena por país (A-Z)', () => {
    expect(sortData.sortbyCountryAtoZ(data)).toEqual([
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
      {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
    ]);
  });

  it('ordena por país (Z-A)', () => {
    expect(sortData.sortbyCountryZtoA(data)).toEqual([
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
      {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
      {"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},
    ]);
  });

  it ("Deberia devolver ERROR DATA INVALIDA cuando se le pasa un dato que no sea un arreglo", () => {
    const input = {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States"}
    const output = "ERROR DATA INVALIDA"
    expect (sortData.sortbyAge1(input)).toEqual(output);
  })

  it ("Deberia devolver ERROR DATA INVALIDA cuando se le pasa un dato que no sea un arreglo", () => {
    const input = {"name": "Patimat Abakarova","age": 34}
    const output = "ERROR DATA INVALIDA"
    expect (sortData.sortbyAge2(input)).toEqual(output);
  })

  it ("Deberia devolver ERROR DATA INVALIDA cuando se le pasa un dato que no sea un arreglo", () => {
    const input = {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States"}
    const output = "ERROR DATA INVALIDA"
    expect (sortData.sortbyNameAtoZ(input)).toEqual(output);
  })

  it ("Deberia devolver ERROR DATA INVALIDA cuando se le pasa un dato que no sea un arreglo", () => {
    const input = {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States"}
    const output = "ERROR DATA INVALIDA"
    expect (sortData.sortbyNameZtoA(input)).toEqual(output);
  })

  it ("Deberia devolver ERROR DATA INVALIDA cuando se le pasa un dato que no sea un arreglo", () => {
    const input = "United States"
    const output = "ERROR DATA INVALIDA"
    expect (sortData.sortbyCountryAtoZ(input)).toEqual(output);
  })

  it ("Deberia devolver ERROR DATA INVALIDA cuando se le pasa un dato que no sea un arreglo", () => {
    const input = "Colombia"
    const output = "ERROR DATA INVALIDA"
    expect (sortData.sortbyCountryZtoA(input)).toEqual(output);
  })
});

describe('filterTeam', () => {
  it('Pide mostrar el país Italia', () => {
    expect(filterTeam(data, 'Italy')).toEqual([{"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"}]);
  });
  it('Pide mostrar el país United States', () => {
    expect(filterTeam(data, "United States")).toEqual([{"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},]);
  });
  it('Pide mostrar el país Colombia', () => {
    expect(filterTeam(data, "Colombia")).toEqual([{"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},]);
  });
  it('Pide mostrar el país Russia', () => {
    expect(filterTeam(data, "Russia")).toEqual([{"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},]);
  });
  it('Pide mostrar el país France', () => {
    expect(filterTeam(data, "France")).toEqual([{"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},]);
  });
  it("Deberia devolver ERROR DATA INVALIDA cuando se le pasa un dato que no sea un arreglo",()=>{
    const input = 10
    const output = "ERROR DATA INVALIDA"
    expect(filterTeam(input,"Italy")).toBe(output)
  })
});

describe('filterSport',()=> {
  it("Pide filtrar por el deporte Volleyball",()=>{
    expect(filterSport(data,"Volleyball")).toEqual([{"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},])
  });
  it("Pide filtrar por el deporte Gymnastics",()=>{
    expect(filterSport(data,"Gymnastics")).toEqual([{"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},])
  });
  it("Pide filtrar por el deporte Football",()=>{
    expect(filterSport(data,"Football")).toEqual([{"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},])
  });
  it("Pide filtrar por el deporte Basketball",()=>{
    expect(filterSport(data, "Basketball")).toEqual([{"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},])
  });
  it("Pide filtrar por el deporte Swimming",()=>{
    expect(filterSport(data, "Swimming")).toEqual([{"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},])
  });
  it('Deberia devolder ERROR DATA INVALIDA cuando se le pase un dato que no sea un arreglo', ()=> {
    const input = 20
    const output = "ERROR DATA INVALIDA"
    expect(filterSport(input,"Football")).toBe(output)
  })
});

describe('filterGen',()=> {
  it("Pide filtrar por Genero Femenino",()=>{
    expect(filterGen(data,"F")).toEqual([
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"}
    ]);
  });

  it("Pide filtrar por Genero Masculino",()=>{
    expect(filterGen(data,"M")).toEqual([
      {"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},
      {"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
    ]);
  });
  it('Deberia devolder ERROR DATA INVALIDA cuando se le pase un dato que no sea un arreglo', ()=> {
    const input = 'A'
    const output = "ERROR DATA INVALIDA"
    expect(filterGen(input,"M")).toBe(output)
  })
});

describe('filterMedal',()=> {
  it("Pide filtrar por Medalla de Oro",()=>{
    expect(filterMedal(data,"Gold")).toEqual([{"name": "Ahmed Merritt","sport": "Football","team": "Russia","age": 30, "gender": "M", "medal": "Gold"},
      {"name": "emmalyn dunn","sport": "Swimming","team": "France","age": 22, "gender": "F", "medal": "Gold"},])
  });
  it("Pide filtrar por Medalla de Plata",()=>{
    expect(filterMedal(data,"Silver")).toEqual([{"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"},])
  });
  it("Pide filtrar por Medalla de bronze",()=>{
    expect(filterMedal(data,"Bronze")).toEqual([{"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "Patimat Abakarova","gender": "F","sport": "Volleyball","team": "United States","medal": "Bronze","age":15},
      {"name": "VIRGINIA ANTHONY","sport": "Swimming","team": "Colombia","age": 40, "gender": "F", "medal": "Bronze"},])
  });
  it('Deberia devolder ERROR DATA INVALIDA cuando se le pase un dato que no sea un arreglo', ()=> {
    const input = 123
    const output = "ERROR DATA INVALIDA"
    expect(filterMedal(input,"Bronze")).toBe(output)
  })
});

describe('estadistica', () => {
  it('calcula el % de atletas que ganó cada medalla', () => {
    expect(estadistica(medals).bronzePorcent).toEqual(53.75);
    expect(estadistica(medals).goldPorcent).toEqual(25.00);
    expect(estadistica(medals).silverPorcent).toEqual(21.25)})

  it ('Deberia devolder ERROR DATA INVALIDA cuando se le pase un dato que no sea un arreglo', () => {
    const input = 53
    const output = "ERROR DATA INVALIDA"
    expect(estadistica(input)).toEqual(output)
  })
});
