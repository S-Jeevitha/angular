export class Borrowbook {
    borrowid: number;
    userid: number;
    username: string;
    bookid: number;
    issuedate: string;
    duedate: string;

    constructor() {
        this.borrowid = 0;
        this.userid = 0;
        this.username = '';
        this.bookid = 0;
        this.issuedate = '';
        this.duedate = '';
    }
}
