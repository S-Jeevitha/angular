import { Component, OnInit } from '@angular/core';
import { Borrowbook } from '../borrowbook';
import { BorrowbookserviceService } from '../borrowbookservice.service';

@Component({
  selector: 'app-viewborrowbook',
  templateUrl: './viewborrowbook.component.html',
  styleUrls: ['./viewborrowbook.component.css']
})
export class ViewborrowbookComponent implements OnInit {
  service: BorrowbookserviceService;
  borrowbook: Borrowbook[];

  constructor(service: BorrowbookserviceService) {
    this.service = service;
    this.borrowbook = [];

  }
  ngOnInit(): void {
    this.service.viewBorrowBook().subscribe((data) => (this.borrowbook = data));
  }

}
