import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  service: BookserviceService;
  book: Book;

  constructor(service: BookserviceService, private router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.book = new Book();

  }
  // getDeleteDetails() {
  //   this.service.deleteBook(this.book).subscribe();
  //   this.reDirectToView();

  // }
  reDirectToView() {
    this.router.navigate(['viewBooks']).then(() => window.location.reload());
  }
  ngOnInit(): void {
    this.book.bookid = this.route.snapshot.params['bookid'];
    this.service.deleteBook(this.book).subscribe();
    this.reDirectToView();

  }

}
