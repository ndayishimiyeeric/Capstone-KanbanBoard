import GetPoke from './getpokemon.js';

export default class FetchMon {
  static fetchPoke = () => {
    let current = new Date(); //eslint-disable-line
    let min = current.getSeconds(); //eslint-disable-line
    for (let i = 1; i <= 10; i += 1) {
      GetPoke.getPokemon(i);
    }
  };
}