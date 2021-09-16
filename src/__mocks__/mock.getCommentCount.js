const getCommentCount = (section, lists) => {
  section.textContent = '';
  lists.length >= 1 ? (section.textContent = `Comments (${lists.length})`) : (section.textContent = 'Comments (0)');
};

export default getCommentCount; 