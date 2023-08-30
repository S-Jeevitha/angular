import { Component ,OnInit} from '@angular/core';
import{Router,TitleStrategy} from '@angular/router'
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent  {
  service:BookserviceService;
  book:Book;

  constructor(service:BookserviceService,private router :Router){
    this.service=service;
    this.book=new Book();

  }

  getBookDetails(){
    this.service.addBook(this.book).subscribe();
    this.book=new Book();
    this.reDirectToView();
  }
  reDirectToView(){
    this.router.navigate(['viewBooks']).then(() => window.location.reload());
  }

}
