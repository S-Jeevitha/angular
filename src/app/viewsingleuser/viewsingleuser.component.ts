import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewsingleuser',
  templateUrl: './viewsingleuser.component.html',
  styleUrls: ['./viewsingleuser.component.css']
})
export class ViewsingleuserComponent implements OnInit {
  userid: number;
  user: User;
  service: UserserviceService;

  constructor(service: UserserviceService, private route: ActivatedRoute) {
    this.userid = this.route.snapshot.params['userid'];
    this.service = service;
    this.user = new User();

  }
  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid'];
    this.user = new User();
    this.service.getUserById(this.userid).subscribe(data => {
      this.user = data;
    });
  }

}
