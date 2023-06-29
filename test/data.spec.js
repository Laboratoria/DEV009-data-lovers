import { sortData, filterTeam, estadistica } from '../src/data.js';

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
});


describe('filterTeam', () => {
  it('Pide mostrar el país Italia', () => {
    expect(filterTeam(data, 'Italy')).toEqual([{"name": "Giovanni Abagnale","gender": "M","sport": "Gymnastics","team": "Italy","medal": "Bronze","age":42},
      {"name": "Josue Glover","sport": "Basketball","team": "Italy","age": 19, "gender": "M", "medal": "Silver"}]);
  });
});

describe('estadistica', () => {
  it('calcula el % de atletas que ganó cada medalla', () => {
    expect(estadistica(medals).bronzePorcent).toEqual(53.75);
    expect(estadistica(medals).goldPorcent).toEqual(25.00);
    expect(estadistica(medals).silverPorcent).toEqual(21.25)})
});
