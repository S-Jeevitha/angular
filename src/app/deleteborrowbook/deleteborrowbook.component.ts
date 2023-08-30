import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borrowbook } from '../borrowbook';
import { BorrowbookserviceService } from '../borrowbookservice.service';

@Component({
  selector: 'app-deleteborrowbook',
  templateUrl: './deleteborrowbook.component.html',
  styleUrls: ['./deleteborrowbook.component.css']
})
export class DeleteborrowbookComponent implements OnInit {
  service: BorrowbookserviceService;
  borrowbook: Borrowbook;

  constructor(service: BorrowbookserviceService, private router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.borrowbook = new Borrowbook();
  }
  reDirectToView() {
    this.router.navigate(['viewBorrowBook']).then(() => window.location.reload());

  }
  ngOnInit(): void {
    this.borrowbook.borrowid = this.route.snapshot.params['borrowid'];
    this.service.deleteBorrowBook(this.borrowbook).subscribe();
    this.reDirectToView();
  }

}
