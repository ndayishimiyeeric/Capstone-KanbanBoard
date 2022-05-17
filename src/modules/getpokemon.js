import populatePoke from './populatepoke.js';

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  populatePoke(pokemon);
};

export default getPokemon;