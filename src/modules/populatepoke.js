const pokemonsDiv = document.querySelector('.pokemons');

const populatePoke = (pokemon) => {
  pokemonsDiv.innerHTML += `
    <div class="poke-card">
      <div class="poke-img">
        <img src="${pokemon.sprites.other.dream_world.front_default}">
      </div>
      <div class="poke-content">
        <h4 class="poke-name">${pokemon.name}</h4>
        <div class="poke-likes">
          <i class="fa-regular fa-heart"></i>
          <span class="n-likes">${pokemon.height} likes</span>
        </div>
      </div>
      <button class="comment-button">Comment</button>
    </div>
  `;
};

export default populatePoke;