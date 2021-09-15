// import { divide } from 'lodash';
import './style.css';
import showsList from './displayElements';
import getData from './getData';
import showComments from './showComments';
import getComments from './getComments';
import postComments from './postComments';

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
          <input class="comments-input" type="search" placeholder="Add name"/>
          <textarea type="search" placeholder="Add insights"></textarea>
          <button class="btn-comments" id="commentButton">Submit</button>
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

  const commentButton = document.getElementById('commentButton')
  const commentSection = document.createElement('div');
  commentSection.classList.add('list-item');
  console.log(commentSection);
  const comments = await getComments(commentButton.id)

  showComments(commentSection, comments)


  commentButton.addEventListener('click', async (e) => {
  e.preventDefault()
  await postComments(commentButton.id, userName, userMsg);
  const getComments1 = await getComments(commentButton.id)
  showComments(commentSection, getComments1)
  })
});
