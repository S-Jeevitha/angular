import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UpdateBookComponent } from './update-book/update-book.component';

import { ViewborrowbookComponent } from './viewborrowbook/viewborrowbook.component';
import { AddborrowbookComponent } from './addborrowbook/addborrowbook.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { DeleteborrowbookComponent } from './deleteborrowbook/deleteborrowbook.component';
import { UserviewbooksComponent } from './userviewbooks/userviewbooks.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { UserloginpageComponent } from './userloginpage/userloginpage.component';
import { HomeComponent } from './home/home.component';
import { AdminupdatepasswordComponent } from './adminupdatepassword/adminupdatepassword.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ViewsingleuserComponent } from './viewsingleuser/viewsingleuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { BorrowbookpageComponent } from './borrowbookpage/borrowbookpage.component';
import { BorrowbooksingleComponent } from './borrowbooksingle/borrowbooksingle.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    AddbooksComponent,
    UpdateBookComponent,
 
    ViewborrowbookComponent,
    AddborrowbookComponent,
    ViewuserComponent,
    AdduserComponent,
    DeletebookComponent,
    DeleteuserComponent,
    DeleteborrowbookComponent,
    UserviewbooksComponent,
    AdminloginpageComponent,
    UserloginpageComponent,
    HomeComponent,
    AdminupdatepasswordComponent,
    UserpageComponent,
    ViewsingleuserComponent,
    UpdateuserComponent,
    BorrowbookpageComponent,
    BorrowbooksingleComponent,
    AboutusComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
