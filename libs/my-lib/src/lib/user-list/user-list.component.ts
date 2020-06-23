import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@dahoamviernull/my-lib';

@Component({
  selector: 'dahoamviernull-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userList: User[];
  @Output() selectedUsr: EventEmitter<User> = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  setAsSelected ( user: User ) {
    this.selectedUsr.emit( user );
  }
}
