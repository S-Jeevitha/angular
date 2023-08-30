import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Borrowbook } from '../borrowbook';
import { BorrowbookserviceService } from '../borrowbookservice.service';

@Component({
  selector: 'app-borrowbookpage',
  templateUrl: './borrowbookpage.component.html',
  styleUrls: ['./borrowbookpage.component.css']
})
export class BorrowbookpageComponent implements OnInit {
  borrowbook: Borrowbook;
  service: BorrowbookserviceService;

  constructor(private router: Router, service: BorrowbookserviceService) {
    this.service = service;
    this.borrowbook = new Borrowbook();
  }
  ngOnInit(): void {

  }
  viewSingleDetails() {
    this.service.getUserById(this.borrowbook.userid).subscribe((data) => {
      this.borrowbook = data;
      this.redirectToViewSingleBorrowBook();
    })
  }

  redirectToViewSingleBorrowBook() {
    this.router.navigate(['viewBorrowBook', this.borrowbook]).then(() => {
      window.location.reload();
    });
  }

}
