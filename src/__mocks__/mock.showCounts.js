const showsCounts = document.querySelector('.show-list');
const showsCount = (shows) => {
showsCounts.innerHTML = `Shows ${shows.length}`;
}
showsCount(commentPopup);

export default showsCounts;