// import { divide } from 'lodash';
import './style.css';

const getItems = async () => {
  const response = await fetch(' https://api.tvmaze.com/shows');
  return response.json();
};

getItems();
// console.log(getItems());

const buildShows = async () => {
  const show = await getItems();

  for (let i = 0; i < 20; i += 1) {
    const moviesList = document.querySelector('.movies-list');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const commentsBtn = document.createElement('button');
    const reservationsBtn = document.createElement('button');
    const info = document.createElement('div');
    const title = document.createElement('p');
    const like = document.createElement('span');
    li.className = 'item';
    commentsBtn.className = 'btn btn-dark comments';
    reservationsBtn.className = 'btn btn-dark comments';
    info.className = 'info';
    title.className = 'title';
    like.className = 'like';
    img.setAttribute('src', show[i].image.medium);
    commentsBtn.innerHTML = 'Comments';
    reservationsBtn.innerHTML = 'Reservations';
    title.textContent = `${show[i].name}`;
    like.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    li.appendChild(img);
    li.appendChild(info);
    li.appendChild(commentsBtn);
    li.appendChild(reservationsBtn);
    info.appendChild(title);
    info.appendChild(like);
    moviesList.appendChild(li);
  }
};

buildShows();
