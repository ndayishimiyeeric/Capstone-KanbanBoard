import GetPoke from './getpokemon.js';

export default class FetchMon {
  static fetchPoke = () => {
    const current = new Date();
    const min = current.getSeconds();
    for (let i = 1; i <= min; i += 1) {
      GetPoke.getPokemon(i);
    }
  };
}