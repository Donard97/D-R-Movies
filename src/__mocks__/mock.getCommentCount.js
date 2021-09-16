const getCommentCount = (section, lists) => {
  section.textContent = '';
  // eslint-disable-next-line no-unused-expressions
  lists.length >= 1 ? (section.textContent = `Comments (${lists.length})`) : (section.textContent = 'Comments (0)');
};

export default getCommentCount;
