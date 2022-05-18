import populatePoke from './populatepoke.js';

const popUp = document.getElementById('pop-up');
const popTitle = document.querySelector('.pop-title');
const popTop = document.querySelector('.pop-top');
const desc1 = document.querySelector('.desc-1');
const desc2 = document.querySelector('.desc-2');
const shadow = document.querySelector('#shadow');
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  populatePoke(pokemon);
  const commentButtons = document.querySelectorAll('.comment-button');
  commentButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      popUp.classList.add('active');
      shadow.classList.add('active');
      if (e.target.parentElement.id === e.target.id) {
        popTop.innerHTML = `
        <img class="top-img" src="${e.target.parentElement.firstElementChild.firstElementChild.src}">
        `;
        popTitle.innerHTML = `${e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML}`;
        desc1.innerHTML = `Experience: ${e.target.previousElementSibling.id}`;
        desc2.innerHTML = `Height: ${e.target.parentElement.firstElementChild.nextElementSibling.children[1].id}`;
      }
    });
    const closeButtons = document.querySelector('.close-pop');
    closeButtons.addEventListener('click', () => {
      popUp.classList.remove('active');
      shadow.classList.remove('active');
    });
  });
};

export default getPokemon;
