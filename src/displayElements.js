import getLikesCount from './counters';
import getLikes from './getLikes';
import postLikes from './postLikes';
import modalBody from './modal';


const displayShows = async (shows, moviesList, displayedShows) => {
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

    like.id = `${item.id}`;
    item.appendChild(info);
    info.appendChild(title);
    likeDiv.appendChild(like);
    info.appendChild(likeDiv);
    info.appendChild(likeDisplay);

    // Create comments button
    const commentsBtn = document.createElement('button');
    commentsBtn.className = 'btn btn-dark comments';
    commentsBtn.innerHTML = 'Comments';
    commentsBtn.addEventListener('click', ()=> {
      const commentPopup = [...document.querySelectorAll('.comments')];
      modalBody(commentPopup, displayedShows);
    })

    item.appendChild(commentsBtn);

    // Make elements child of the movie container
    moviesList.appendChild(item);

    // eslint-disable-next-line no-await-in-loop
    const listOfLikes = await getLikes();
    getLikesCount(like, listOfLikes, likeDisplay);

    like.addEventListener('click', async (e) => {
      await postLikes(e.target.id);
      const getReq = await getLikes();

      getLikesCount(e.target, getReq, likeDisplay);
    });
  }
};

export default displayShows;
