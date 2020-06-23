import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MyLibModule } from '../my-lib.module';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    MyLibModule
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
