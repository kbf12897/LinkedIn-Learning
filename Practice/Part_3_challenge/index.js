class Book {
    constructor(title, author, numOfPages, genre) {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.genre = genre;
    };

    setTitle(title) {
        this.title = title;
        return title;
    };

    setAuthor(author) {
        this.author = author;
        return this.author;
    };

    setNumOfPages(pages) {
        this.numOfPages = pages;
        return this.numOfPages;
    };

    setGenre(genre) {
        this.genre = genre;
        return this.genre;
    };
}

const book1 = new Book('Fear and Loathing in Las Vegas', 'Hunter S. Thompson', 256, 'fiction');
const book2 = new Book('THe Stand', 'Stephen King', 1100, 'Thriller');
const book3 = new Book('Kafka on the Shore', 'Haruki Murakami', 424, 'Fiction');
const book4 = new Book('Fear and Loathing in La Liga', 'Sid Lowe', 500, 'Non-Fiction');
const book5 = new Book('Dune', 'Frank Herbert', 700, 'Fiction');

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
