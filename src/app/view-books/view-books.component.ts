import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  service: BookserviceService;
  book: Book[];

  constructor(service: BookserviceService) {
    this.service = service;
    this.book = [];

  }
  ngOnInit(): void {
    this.service.viewBooks().subscribe((data) => (this.book = data));
  }

}
