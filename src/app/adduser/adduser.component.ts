import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router'
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  service: UserserviceService;
  user: User;

  constructor(service: UserserviceService, private router: Router) {
    this.service = service;
    this.user = new User();
  }
  getUserDetails() {
    this.service.addUser(this.user).subscribe();
    this.user = new User();
    this.reDirectToView();
  }
  reDirectToView() {
    this.router.navigate(['userLogin']).then(() => window.location.reload());
  }

}



