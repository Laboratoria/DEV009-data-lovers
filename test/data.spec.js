import { searchPokemon } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

const namePokemon = 'pikachu';
const pokemonExample = {
  "pokemon": [{
    "num": "025",
    "name": "pikachu",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    "img": "https://www.serebii.net/pokemongo/pokemon/025.png",
    "size": {
      "height": "0.41 m",
      "weight": "6.0 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "electric"
    ],
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.2"
    },
    "spawn-chance": "0.21",
    "stats": {
      "base-attack": "112",
      "base-defense": "96",
      "base-stamina": "111",
      "max-cp": "938",
      "max-hp": "99"
    },
    "resistant": [
      "electric",
      "flying",
      "steel"
    ],
    "weaknesses": [
      "ground"
    ],
    "quick-move": [
      {
        "name": "thunder shock",
        "type": "electric",
        "base-damage": "5",
        "energy": "8",
        "move-duration-seg": "0.6"
      },
      {
        "name": "quick attack",
        "type": "normal",
        "base-damage": "8",
        "energy": "10",
        "move-duration-seg": "0.8"
      }
    ],
    "special-attack": [
      {
        "name": "discharge",
        "type": "electric",
        "base-damage": "65",
        "energy": "-33",
        "move-duration-seg": "2.5"
      },
      {
        "name": "thunderbolt",
        "type": "electric",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.5"
      },
      {
        "name": "wild charge",
        "type": "electric",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.6"
      },
      {
        "name": "thunder",
        "type": "electric",
        "base-damage": "100",
        "energy": "-100",
        "move-duration-seg": "2.4"
      }
    ],
    "egg": "2 km",
    "buddy-distance-km": "1",
    "evolution": {
      "candy": "pikachu candy",
      "next-evolution": [{
        "num": "026",
        "name": "raichu",
        "candy-cost": "50"
      }],
      "prev-evolution": [{
        "num": "172",
        "name": "pichu",
        "candy-cost": "25"
      }]
    }
  },
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "size": {
      "height": "0.71 m",
      "weight": "6.9 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    "encounter": {
      "base-flee-rate": "0.1",
      "base-capture-rate": "0.2"
    },
    "spawn-chance": "0.69",
    "stats": {
      "base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113"
    },
    "resistant": [
      "water",
      "electric",
      "grass",
      "fighting",
      "fairy"
    ],
    "weaknesses": [
      "fire",
      "ice",
      "flying",
      "psychic"
    ],
    "quick-move": [
      {
        "name": "vine whip",
        "type": "grass",
        "base-damage": "7",
        "energy": "6",
        "move-duration-seg": "0.6"
      },
      {
        "name": "tackle",
        "type": "normal",
        "base-damage": "5",
        "energy": "5",
        "move-duration-seg": "0.5"
      }
    ],
    "special-attack": [
      {
        "name": "sludge bomb",
        "type": "poison",
        "base-damage": "80",
        "energy": "-50",
        "move-duration-seg": "2.3"
      },
      {
        "name": "seed bomb",
        "type": "grass",
        "base-damage": "55",
        "energy": "-33",
        "move-duration-seg": "2.1"
      },
      {
        "name": "power whip",
        "type": "grass",
        "base-damage": "90",
        "energy": "-50",
        "move-duration-seg": "2.6"
      }
    ],
    "egg": "2 km",
    "buddy-distance-km": "3",
    "evolution": {
      "candy": "bulbasaur candy",
      "next-evolution": [{
        "num": "002",
        "name": "ivysaur",
        "candy-cost": "25",
        "next-evolution": [{
          "num": "003",
          "name": "venusaur",
          "candy-cost": "100"
        }]
      }]
    }
  },
]

}

describe('searchPokemon', () => {
  it('debería retornar pikachu "' + namePokemon + '"', () => {
    expect(searchPokemon(data.pokemon, namePokemon)).toEqual(pokemonExample);
  });
});



// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
