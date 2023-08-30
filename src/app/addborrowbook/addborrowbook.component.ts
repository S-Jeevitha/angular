import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router'
import { Borrowbook } from '../borrowbook';
import { BorrowbookserviceService } from '../borrowbookservice.service';

@Component({
  selector: 'app-addborrowbook',
  templateUrl: './addborrowbook.component.html',
  styleUrls: ['./addborrowbook.component.css']
})
export class AddborrowbookComponent {
  service: BorrowbookserviceService;
  borrowbook: Borrowbook;

  constructor(service: BorrowbookserviceService, private router: Router) {
    this.service = service;
    this.borrowbook = new Borrowbook();
  }
  getBorrowDetails() {
    this.service.addBorrowBook(this.borrowbook).subscribe();
    this.borrowbook = new Borrowbook();
   // this.reDirectToView();
  }
  // reDirectToView() {
  //   this.router.navigate(['viewBorrowBook']).then(() => window.location.reload());
  // }

}
