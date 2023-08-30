import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  viewUrl: string;
  addUrl: string;
  deleteUrl: string;
  userLoginUrl: string;
  viewSingleUserUrl: string;
  getUserUrl: string;
  UpdateUrl: string;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.viewUrl = 'http://localhost:8080/admin/viewUser';
    this.addUrl = 'http://localhost:8080/user/addUser';
    this.deleteUrl = 'http://localhost:8080/admin/deleteUser';
    this.userLoginUrl = 'http://localhost:8080/userLogin';
    this.viewSingleUserUrl = 'http://localhost:8080/user/viewDetail';
    this.getUserUrl = 'http://localhost:8080/searchUser';
    this.UpdateUrl = 'http://localhost:8080/user/updateDetail';
  }
  public viewUser(): Observable<User[]> {
    return this.http.get<User[]>(this.viewUrl);
  }

  public addUser(user: User) {
    return this.http.post<User>(this.addUrl, user);
  }

  public deleteUser(user: User) {
    return this.http.delete<User>(this.deleteUrl + "/" + user.userid);
  }

  public userLogin(user: User) {
    return this.http.post<boolean>(this.userLoginUrl, user);
  }

  public viewSingleUser(): Observable<User> {
    return this.http.get<User>(this.viewSingleUserUrl);
  }

  public getUserById(userid: number): Observable<User> {
    return this.http.get<User>(this.getUserUrl + "/" + userid);
  }
  UpdateUser(userid: number, user: User): Observable<User> {
    return this.http.put<User>(this.UpdateUrl + "/" + userid, user)
  }


}
