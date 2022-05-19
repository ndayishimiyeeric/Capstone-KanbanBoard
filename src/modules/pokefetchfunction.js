import GetPoke from './getpokemon.js';

export default class FetchMon {
  static fetchPoke = () => {
    for (let i = 1; i <= 20; i += 1) {
      GetPoke.getPokemon(i);
    }
  };
}