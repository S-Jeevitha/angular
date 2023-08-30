import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  service: UserserviceService;
  user: User;

  constructor(service: UserserviceService, private router: Router) {
    this.service = service;
    this.user = new User();
  }

  viewSingleUserDetails() {
    this.service.getUserById(this.user.userid).subscribe((data) => {
      this.user = data;
      this.redirectToViewSingleUser();
    })
  }
  redirectToViewSingleUser() {
    this.router.navigate(['viewSingleUser', this.user]).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {

  }

}
