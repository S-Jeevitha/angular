import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-userviewbooks',
  templateUrl: './userviewbooks.component.html',
  styleUrls: ['./userviewbooks.component.css']
})
export class UserviewbooksComponent implements OnInit {
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
