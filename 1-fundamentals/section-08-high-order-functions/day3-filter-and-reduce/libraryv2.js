const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

const date = new Date().getFullYear();

  // Adicione o código do exercício aqui:

const bookGenreFilter = (array, genre) => array.filter((book) => book.genre === genre);

const bookAgeFilter = (array) => {
    const filteredBooks = array.filter((book) => 60 < date - book.releaseYear);
    return filteredBooks.sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}

const bookAuthorBirthYear = (array, year) => {
    const yearFilter = array.filter((book) => year === book.author.birthYear);
    const bookNames = [];
    yearFilter.forEach((book) => { bookNames.push(book.name) });
    return bookNames;
};

console.log(bookAuthorBirthYear(books, 1920))

module.exports = { bookGenreFilter, bookAgeFilter, bookAuthorBirthYear };