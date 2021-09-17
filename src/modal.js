/* eslint-disable no-unused-expressions */

import getComments from './getComments';
import postComments from './postComments';
import showComments from './renderComments';

const getCommentCount = (section, lists) => {
  section.textContent = '';
  lists.length >= 1 ? (section.textContent = `Comments (${lists.length})`) : (section.textContent = 'Comments (0)');
};

const modalBody = async (buttons, showsList) => {
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', async () => {
      const popupMenu = document.querySelector('.popup-menu');

      popupMenu.classList.remove('hidden');

      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      while (popupMenu.firstChild) {
        popupMenu.removeChild(popupMenu.lastChild);
      }
      const modal = document.createElement('div');
      modal.classList.add('popup');

      const img = document.createElement('img');
      img.className = 'popup-img';
      img.setAttribute('src', showsList[i].image.original);

      const summary = document.createElement('div');
      summary.className = 'summary';

      const description = document.createElement('div');
      description.className = 'description';
      description.innerHTML = `${showsList[i].summary}`;

      const spec = document.createElement('div');
      spec.className = 'spec';
      spec.innerHTML = `<p class="resolution">HD</p>
                <p class="rating"><ion-icon name="star"></ion-icon>${showsList[i].rating.average}</p>
                <p class="runtime">${showsList[i].runtime} min</p>`;

      const details = document.createElement('ul');
      details.className = 'details';
      details.innerHTML = `<li class="country">Country: ${showsList[i].network.country.name}</li>
                  <li class="genres">Genres: ${showsList[i].genres}</li>
                  <li class="relese-data">Release: ${showsList[i].premiered}</li>
                  <li class="duration">Language: ${showsList[i].language}</li>`;

      const commentSection = document.createElement('h3');
      commentSection.classList.add('number');
      const addComment = document.createElement('h3');
      addComment.classList.add('commentH3');
      addComment.textContent = 'Add a comment';
      addComment.style.marginBottom = '1rem';
      const commentForm = document.createElement('form');
      commentForm.classList.add('form');
      const userName = document.createElement('input');
      userName.classList.add('name');
      userName.placeholder = 'Your name';
      const userMsg = document.createElement('textarea');
      userMsg.classList.add('message');
      userMsg.placeholder = 'Your insights';
      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-btn');
      commentButton.textContent = 'Submit';
      commentButton.id = `movie_cmt_${showsList[i].id}`;

      const errorMsg = document.createElement('p');
      errorMsg.className = 'error-msg';

      const commentDiv = document.createElement('div');
      commentDiv.classList.add('list-item');

      const comments = await getComments(commentButton.id);

      showComments(commentDiv, comments);
      comments.length >= 1 ? (commentSection.textContent = `Comments (${comments.length})`) : (commentSection.textContent = 'Comments (0)');

      commentButton.addEventListener('click', async (e) => {
        e.preventDefault();

        if (userName.value === '') {
          errorMsg.innerHTML = 'Please insert your name and message!';
        } else {
          await postComments(commentButton.id, userName, userMsg);
          const getCmts = await getComments(commentButton.id);
          getCommentCount(commentSection, getCmts);
          showComments(commentDiv, getCmts);
          userName.value = '';
          userMsg.value = '';
        }
      });

      const exit = document.createElement('div');
      exit.innerHTML = '<ion-icon class="exit" name="exit-outline"></ion-icon>';
      exit.addEventListener('click', () => {
        popupMenu.classList.add('hidden');
      });

      summary.append(description, spec, commentSection, commentDiv, addComment, commentForm);
      modal.append(img, summary);
      commentForm.append(userName, userMsg, commentButton, errorMsg);
      overlay.appendChild(modal);
      popupMenu.appendChild(overlay);
      popupMenu.appendChild(exit);
    });
  }
};

export default modalBody;
