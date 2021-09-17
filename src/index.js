import './style.css';
import displayShows from './displayElements';
import getData from './getData';
import modalBody from './modal';

const allShowsContainer = document.querySelector('.movies-list');

window.addEventListener('load', async () => {
  const shows = await getData();
  const displayedShows = shows.slice(0, 20);

  displayShows(displayedShows, allShowsContainer, displayedShows);

  const commentPopup = [...document.querySelectorAll('.comments')];
  modalBody(commentPopup, displayedShows);

  const showsCount = (shows) => shows.length;

  showsCount(shows);

  const showsCounts = document.querySelector('.show-list');
  const showsCountss = (shows) => {
    showsCounts.innerHTML = `Shows ${shows.length}`;
  };
  showsCountss(shows.slice(0, 20));
});
