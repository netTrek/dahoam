import { Component } from '@angular/core';
import { DynForm, User } from '@dahoamviernull/my-lib';

@Component ( {
  selector   : 'dahoamviernull-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent {
  title                  = 'dahoam';
  userList: User[]       = [
    { firstName: 'Peter', lastName: 'Müller' },
    { firstName: 'Hase', lastName: 'Meyer' }
  ];
  selectedUsr: User;
  dynFormData: DynForm[] = [
    {
      name      : 'Name',
      type      : 'text',
      validators: ['required']
    },
    {
      name      : 'EMail',
      type      : 'email',
      validators: ['email',
                   'required'
      ]
    },
    {
      name      : 'Passwort',
      type      : 'password',
      validators: ['required']
    },
    {
      name      : 'City',
      type      : 'text',
      validators: []
    }
  ];

  selectedUser ( user: User ) {
    this.selectedUsr = user;
  }

  sendData ( data: any ) {
    console.log ( data );
  }
}
