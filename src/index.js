import './style/main.css';
import './style/pop.css';
import './style/myreset.css';
import FetchMon from './modules/pokefetchfunction.js';
import GetPoke from './modules/getpokemon.js';
import pokemonlogo from './assets/pokemonlogo.png';

document.getElementById('poke-logo').src = pokemonlogo;

FetchMon.fetchPoke();
GetPoke.commentFn();
