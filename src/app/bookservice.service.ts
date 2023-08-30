import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  viewUrl: string;
  addUrl: string;
  updateUrl: string;
  deleteUrl: string;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.viewUrl = 'http://localhost:8080/admin/viewBooks';
    this.addUrl = 'http://localhost:8080/admin/addBook';
    this.updateUrl = 'http://localhost:8080/admin/updateBook';
    this.deleteUrl = 'http://localhost:8080/admin/deleteBook';
  }
  public viewBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.viewUrl);
  }

  public addBook(book: Book) {
    return this.http.post<Book>(this.addUrl, book);
  }

  public updateBook(book: Book) {
    return this.http.put<Book>(this.updateUrl, book);
  }

  public deleteBook(book: Book) {
    return this.http.delete<Book>(this.deleteUrl + "/" + book.bookid);
  }
}
