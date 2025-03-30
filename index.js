function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // Replace with the actual API URL
    .then(response => response.json())
    .then(books => renderBooks(books))
    .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
