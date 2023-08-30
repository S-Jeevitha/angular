import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router'
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  service: BookserviceService;
  book: Book;

  constructor(service: BookserviceService, private router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.book = new Book();
  }

  getUpdateDetails() {
    this.service.updateBook(this.book).subscribe();
    this.book = new Book();
    this.reDirectToView();
  }
  reDirectToView() {
    this.router.navigate(['viewBooks']).then(() => window.location.reload());
  }
  ngOnInit(): void {
    this.book.bookid = this.route.snapshot.params['bookid'];
    this.book.bookname = this.route.snapshot.params['bookname'];
    this.book.author = this.route.snapshot.params['author'];
    this.book.publisher = this.route.snapshot.params['publisher'];
    this.book.publishedyear = this.route.snapshot.params['publishedyear'];
    this.book.language = this.route.snapshot.params['language'];


  }

}
