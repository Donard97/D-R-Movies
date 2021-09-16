import './style.css';
import displayShows from './displayElements';
import getData from './getData';
import modalBody from './modal';

const allShowsContainer = document.querySelector('.movies-list');

window.addEventListener('load', async () => {
  const shows = await getData();
  const displayedShows = shows.slice(0, 20);

  await displayShows(displayedShows, allShowsContainer);

  const commentPopup = [...document.querySelectorAll('.comments')];
  modalBody(commentPopup, displayedShows);

  const showsCount = document.querySelector('.show-list');
  showsCount.innerHTML = `Shows ${commentPopup.length}`;
});
