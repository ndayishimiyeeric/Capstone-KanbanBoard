const pokemonsDiv = document.querySelector('.pokemons');

export default class Populate {
  static populatePoke = (pokemon) => {
    pokemonsDiv.innerHTML += `
    <div id="${pokemon.name}" class="poke-card">
      <div class="poke-img">
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.id}">
      </div>
      <div id="${pokemon.base_experience}" class="poke-content">
        <h4 class="poke-name">${pokemon.name}</h4>
        <div id="${pokemon.is_default}" class="poke-likes">
          <i class="fa-regular fa-heart"></i>
          <span id="${pokemon.id}" class="n-likes"> likes</span>
        </div>
      </div>
      <button id="${pokemon.name}" class="comment-button">Comment</button>
    </div>
  `;
  };
}