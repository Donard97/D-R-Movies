const showComments = (commentContainer, list) => {
  if (list.length >= 1) {
    commentContainer.innerHTML = '';
    for (let i = 0; i <= list.length - 1; i += 1) {
      const commentsParagraph = document.createElement('p');
      commentsParagraph.innerHTML = `${list[i].creation_date} ${list[i].username} ${list[i].comment}`;
      commentContainer.appendChild(commentsParagraph);
    }
  }
};

export default showComments;
