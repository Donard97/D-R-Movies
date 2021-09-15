// import { divide } from 'lodash';
import './style.css';
import showsList from './displayElements';
import getData from './getData';

const showsContainer = document.querySelector('.movies-list');

window.addEventListener('load', async () => {
  // Launch showsList
  const movies = await getData();
  const loadedShows = movies.slice(0, 18);

  showsList(loadedShows, showsContainer);

  // const commnetsMenu = document.querySelector('.comments');
  const commnetsMenu = document.querySelectorAll('.comments');
  for (let i = 0; i < commnetsMenu.length; i += 1) {
    commnetsMenu[i].addEventListener('click', () => {
      const popupMenu = document.querySelector('.popup-menu');
      while (popupMenu.firstChild) {
        popupMenu.removeChild(popupMenu.lastChild);
      }
      popupMenu.classList.remove('hidden');
      const popup = document.createElement('div');
      popup.className = 'overlay';
      popup.innerHTML = `<div class="popup">
        <img class="popup-img" src="${loadedShows[i].image.original}" alt="movie" />
        <div class="summary">
          <div class="summary-info">
          ${loadedShows[i].summary}
          </div>
          <div class="spec">
          <p class="resolution">HD</p>
          <p class="rating"><ion-icon name="star"></ion-icon>${loadedShows[i].rating.average}</p>
          <p class="runtime">${loadedShows[i].runtime} min</p>
          </div>
          <ul class="details">
            <li class="country">Country: ${loadedShows[i].network.country.name}</li>
            <li class="genres">Genres: ${loadedShows[i].genres}</li>
            <li class="relese-data">Release: ${loadedShows[i].premiered}</li>
            <li class="duration">Language: ${loadedShows[i].language}</li>
          </ul>
          <div class="popup-comments">
          <h2>Add comment</h2>
          <input class="comments-input" type="search" placeholder="Add comment"/>
          <textarea type="search" placeholder="Add insights"></textarea>
          </div>
          </div>
        </div>
      </div>`;
      popupMenu.appendChild(popup);
      // Exit from popup menu
      const exit = document.createElement('div');
      exit.innerHTML = '<ion-icon class="exit" name="exit-outline"></ion-icon>';
      exit.addEventListener('click', () => {
        popupMenu.classList.add('hidden');
      });
      popupMenu.appendChild(exit);
    });
  }
});
