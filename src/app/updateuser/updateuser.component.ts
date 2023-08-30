import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  service: UserserviceService;
  user: User;
  userid: number;

  constructor(service: UserserviceService, private router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.user = new User();
    this.userid = this.route.snapshot.params['userid'];
  }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid'];
    this.user = new User();
    // this.userid = this.route.snapshot.params['username'];
    // this.userid = this.route.snapshot.params['mailid'];
    // this.userid = this.route.snapshot.params['mobilenumber'];
    // this.userid = this.route.snapshot.params['password'];
    this.service.getUserById(this.userid).subscribe(data => {
      this.user = data;
    });
  }
  getUpdateUserDetails() {
    this.service.UpdateUser(this.userid, this.user).subscribe(data => {
      //this.redirectToUser();
    });
    // this.redirectToUser();
  }
  // redirectToUser() {
  //   this.router.navigate(['viewSingleUser']).then(() => {
  //     window.location.reload();
  //   });
  // }


}
