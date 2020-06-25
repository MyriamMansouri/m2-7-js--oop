// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

const book1 = new Book(
  "24 heures de la vie d'une femme",
  "Drama",
  "Stefan Zweig",
  true
);
const book2 = new Book(
  "Naissance de la tragédie",
  "Philosophy",
  "Friedrich Nietzsche",
  false
);
const book3 = new Book(
  "The dispossessed",
  "Science-Fiction",
  "Ursula Le Guin",
  false
);
const book4 = new Book(
  "Caliban and the witch",
  "Social History",
  "Silvia Federicci",
  true
);
const book5 = new Book(
  "Les Origines du totalitarisme",
  "Politics",
  "Hannah Arendt",
  false
);

console.log(book1, book2, book3, book4, book5);
