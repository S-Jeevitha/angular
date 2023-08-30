import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AddborrowbookComponent } from './addborrowbook/addborrowbook.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { AdminupdatepasswordComponent } from './adminupdatepassword/adminupdatepassword.component';
import { BorrowbookpageComponent } from './borrowbookpage/borrowbookpage.component';
import { BorrowbooksingleComponent } from './borrowbooksingle/borrowbooksingle.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { DeleteborrowbookComponent } from './deleteborrowbook/deleteborrowbook.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { HomeComponent } from './home/home.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserloginpageComponent } from './userloginpage/userloginpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserviewbooksComponent } from './userviewbooks/userviewbooks.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { ViewborrowbookComponent } from './viewborrowbook/viewborrowbook.component';
import { ViewsingleuserComponent } from './viewsingleuser/viewsingleuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'viewBooks', component: ViewBooksComponent },
  { path: 'addBook', component: AddbooksComponent },
  { path: 'updateBook/:bookid/:bookname/:author/:publisher/:publishedyear/:language', component: UpdateBookComponent },
  { path: 'viewBorrowBook', component: ViewborrowbookComponent },
  { path: 'addBorrowBook', component: AddborrowbookComponent },
  { path: 'viewUser', component: ViewuserComponent },
  { path: 'addUser', component: AdduserComponent },
  { path: 'deleteBook/:bookid', component: DeletebookComponent },
  { path: 'deleteUser/:userid', component: DeleteuserComponent },
  { path: 'deleteBorrowBook/:borrowid', component: DeleteborrowbookComponent },
  { path: 'userViewBooks', component: UserviewbooksComponent },
  { path: 'adminLogin', component: AdminloginpageComponent },
  { path: 'userLogin', component: UserloginpageComponent },
  { path: 'adminUpdatePassword', component: AdminupdatepasswordComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'viewSingleUser', component: ViewsingleuserComponent },
  { path: 'updateUser/:userid', component: UpdateuserComponent },
  { path: 'viewBorrowBook', component: BorrowbooksingleComponent },
  { path: 'BorrowBook', component: BorrowbookpageComponent },
  { path: 'aboutus', component: AboutusComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
