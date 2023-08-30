export class Book {
    bookid: number;
    bookname: string;
    author: string;
    publisher: string;
    publishedyear: number;
    language: string;

    constructor() {
        this.bookid = 0;
        this.bookname = '';
        this.author = '';
        this.publisher = '';
        this.publishedyear = 0;
        this.language = '';
    }
}
