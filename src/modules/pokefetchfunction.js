import getPokemon from './getpokemon.js';

const fetchPoke = () => {
  for (let i = 1; i <= 20; i += 1) {
    getPokemon(i);
  }
};

export default fetchPoke;