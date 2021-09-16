import getLikes from './getLikes';
import postLikes from './postLikes';

const displayShows = (shows, moviesList) => {
  for (let i = 0; i <= shows.length - 1; i += 1) {
    // Create li for each show
    const item = document.createElement('li');
    item.id = `movie_${shows[i].id}`;
    item.className = 'item';

    // Create img for display the show
    const img = document.createElement('img');
    img.setAttribute('src', shows[i].image.medium);
    item.appendChild(img);

    // Create div for title, likes
    const info = document.createElement('div');
    const title = document.createElement('p');
    const likeDiv = document.createElement('div');
    const like = document.createElement('ion-icon');
    const likeDisplay = document.createElement('span');

    info.className = 'info';
    title.className = 'title';
    likeDiv.className = 'like-div';
    like.className = 'like';
    title.textContent = `${shows[i].name}`;
    like.setAttribute('name', 'heart');

    window.addEventListener('load', async (e) => {
      await postLikes(e.target.id);
      const getReq = await getLikes();
      for (let i = 0; i <= getReq.length - 1; i += 1) {
        if (getReq[i].item_id === e.target.id) {
          likeDisplay.innerHTML = `${getReq[i].likes}`;
        }
      }
    });

    like.id = `${item.id}`;
    item.appendChild(info);
    info.appendChild(title);
    likeDiv.appendChild(like);
    info.appendChild(likeDiv);
    info.appendChild(likeDisplay);

    // Create comments and reservations buttons
    const commentsBtn = document.createElement('button');
    commentsBtn.className = 'btn btn-dark comments';
    commentsBtn.innerHTML = 'Comments';

    // const reservationsBtn = document.createElement('button');
    // reservationsBtn.className = 'btn btn-dark reservation';
    // reservationsBtn.innerHTML = 'Reservations';
    // item.appendChild(commentsBtn);
    // item.appendChild(reservationsBtn);

    // Make elements child of the movie container
    moviesList.appendChild(item);

    like.addEventListener('click', async (e) => {
      await postLikes(e.target.id);
      const getReq = await getLikes();
      for (let i = 0; i <= getReq.length - 1; i += 1) {
        if (getReq[i].item_id === e.target.id) {
          likeDisplay.innerHTML = `${getReq[i].likes}`;
        }
      }
    });
  }
};

export default displayShows;
