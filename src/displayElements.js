const displayShows = (shows, moviesList) => {
  for (let i = 0; i < shows.length; i += 1) {
    // const moviesList = document.querySelector('.movies-list');
    // Create li for each show
    const item = document.createElement('li');
    item.id = `item${shows[i].id}`;
    item.className = 'item';

    // Create img for display the show
    const img = document.createElement('img');
    img.setAttribute('src', shows[i].image.medium);
    item.appendChild(img);

    // Create div for title, likes
    const info = document.createElement('div');
    const title = document.createElement('p');
    const like = document.createElement('p');
    info.className = 'info';
    title.className = 'title';
    like.className = 'like';
    title.textContent = `${shows[i].name}`;
    like.innerHTML = '<ion-icon class="like" name="heart-outline"></ion-icon>';
    item.appendChild(info);
    info.appendChild(title);
    info.appendChild(like);

    // Create comments and reservations buttons
    const commentsBtn = document.createElement('button');
    commentsBtn.className = 'btn btn-dark comments';
    commentsBtn.innerHTML = 'Comments';

    const reservationsBtn = document.createElement('button');
    reservationsBtn.className = 'btn btn-dark reservation';
    reservationsBtn.innerHTML = 'Reservations';
    item.appendChild(commentsBtn);
    item.appendChild(reservationsBtn);

    // Make elements child of the movie container
    moviesList.appendChild(item);
  }
};

export default displayShows;