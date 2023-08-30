import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userloginpage',
  templateUrl: './userloginpage.component.html',
  styleUrls: ['./userloginpage.component.css']
})
export class UserloginpageComponent {
  service: UserserviceService;
  user: User;

  constructor(service: UserserviceService, private router: Router) {
    this.service = service;
    this.user = new User();
  }
  checkLogin() {
    this.service.userLogin(this.user).subscribe((data) => {
      if (data == true) {
        this.redirectToView();
      } else {
        alert('Invalid Credentials!');
        this.redirectToUserLogin();
      }
    });
  }
  redirectToView() {
    this.router.navigate(['userpage']).then(() => { window.location.reload() });
  }
  redirectToUserLogin() {
    this.router.navigate(['userLogin']).then(() => { window.location.reload() });
  }

}
