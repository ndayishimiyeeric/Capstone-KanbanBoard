const pokemonsDiv = document.querySelector('.pokemons');

const populatePoke = (pokemon) => {
  pokemonsDiv.innerHTML += `
    <div id="${pokemon.id}" class="poke-card">
      <div class="poke-img">
        <img src="${pokemon.sprites.other.dream_world.front_default}">
      </div>
      <div id="${pokemon.base_experience}" class="poke-content">
        <h4 class="poke-name">${pokemon.name}</h4>
        <div id="${pokemon.height}" class="poke-likes">
          <i class="fa-regular fa-heart"></i>
          <span class="n-likes">${pokemon.height} likes</span>
        </div>
      </div>
      <button id="${pokemon.id}" class="comment-button">Comment</button>
    </div>
  `;
};
export default populatePoke;