import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Borrowbook } from '../borrowbook';
import { BorrowbookserviceService } from '../borrowbookservice.service';

@Component({
  selector: 'app-borrowbooksingle',
  templateUrl: './borrowbooksingle.component.html',
  styleUrls: ['./borrowbooksingle.component.css']
})
export class BorrowbooksingleComponent implements OnInit{
  userid:number;
  borrowbook:Borrowbook;
  service:BorrowbookserviceService;

  constructor(private route:ActivatedRoute,service:BorrowbookserviceService){
    this.userid=this.route.snapshot.params['userid'];
    this.service=service;
    this.borrowbook=new Borrowbook();

  }
  ngOnInit(): void {
    this.userid=this.route.snapshot.params['userid'];
    this.borrowbook=new Borrowbook();
    this.service.getUserById(this.userid).subscribe(data =>{
      this.borrowbook=data;
    });
  }

}
