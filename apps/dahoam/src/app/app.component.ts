import { Component, ComponentFactoryResolver, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { DynForm, User } from '@dahoamviernull/my-lib';
import { takeUntil, takeWhile } from 'rxjs/operators';

@Component ( {
  selector   : 'dahoamviernull-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
} )
export class AppComponent implements OnInit {
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

  constructor (
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  selectedUser ( user: User ) {
    this.selectedUsr = user;
  }

  sendData ( data: any ) {
    console.log ( data );
  }

  extend () {
    this.dynFormData = [...this.dynFormData,
                        {
                          name      : 'ZIP',
                          type      : 'number',
                          validators: []
                        }
    ];
  }

  ngOnInit (): void {
    this.load ();
  }

  private async load () {
    const comp         = await import('../../../../libs/my-lib/src/lib/lazy/avatar/avatar.component')
      .then ( c => c.AvatarComponent );
    const compRef      = this.viewContainerRef.createComponent (
      this.componentFactoryResolver.resolveComponentFactory ( comp ),
      null,
      this.injector
    );
    const { instance } = compRef;
    instance.imgPath   = 'https://placekitten.com/408/287';
    const sub = instance.selectedCat
            .pipe(
              takeUntil ( instance.destroyed )
            )
            .subscribe (
              v => {
                instance.imgPath = 'https://placekitten.com/240/240';
              }
            );
  }
}
