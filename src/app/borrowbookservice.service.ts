import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Borrowbook } from './borrowbook';

@Injectable({
  providedIn: 'root'
})
export class BorrowbookserviceService {
  viewUrl: string;
  addUrl: string;
  deleteUrl: string;
  viewBorrowUrl: string;
  getUrl: string;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.viewUrl = 'http://localhost:8080/admin/viewBorrowBook';
    this.addUrl = 'http://localhost:8080/user/addBorrowBook';
    this.deleteUrl = 'http://localhost:8080/admin/deleteBorrowBook';
    this.getUrl = 'http://localhost:8080/BorrowBook/searchUser';
    this.viewBorrowUrl = 'http://localhost:8080/user/viewBorrowBook';
  }
  public viewBorrowBook(): Observable<Borrowbook[]> {
    return this.http.get<Borrowbook[]>(this.viewUrl);
  }

  public addBorrowBook(borrowbook: Borrowbook) {
    return this.http.post<Borrowbook>(this.addUrl, borrowbook);
  }
  public deleteBorrowBook(borrowbook: Borrowbook) {
    return this.http.delete<Borrowbook>(this.deleteUrl + "/" + borrowbook.borrowid);
  }

  public getUserById(userid: number): Observable<Borrowbook> {
    return this.http.get<Borrowbook>(this.getUrl + "/" + userid)
  }

  public viewSingleBook(): Observable<Borrowbook> {
    return this.http.get<Borrowbook>(this.viewBorrowUrl);
  }


}
