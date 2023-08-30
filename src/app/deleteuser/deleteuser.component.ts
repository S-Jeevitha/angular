import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  service: UserserviceService;
  user: User;

  constructor(service: UserserviceService, private router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.user = new User();

  }

  // getDeleteUserDetails() {
  //   this.service.deleteUser(this.user).subscribe();
  //   this.reDirectToView();
  //}
  reDirectToView() {
    this.router.navigate(['viewUser']).then(() => window.location.reload());
  }

  ngOnInit(): void {
    this.user.userid = this.route.snapshot.params['userid'];
    this.service.deleteUser(this.user).subscribe();
    this.reDirectToView();

  }


}
