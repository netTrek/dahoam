import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynForm } from '@dahoamviernull/my-lib';

@Component({
  selector: 'dahoamviernull-dyn-form',
  templateUrl: './dyn-form.component.html',
  styleUrls: ['./dyn-form.component.scss']
})
export class DynFormComponent implements OnInit, OnChanges {
  @Input()
  get formProvider (): DynForm[] {
    return this._formProvider;
  }
  set formProvider ( value: DynForm[] ) {
    this._formProvider = value;
    this.createFormGroup ();
  }

  @Input() title: string;

  myForm: FormGroup;
  @Output() submitData: EventEmitter<unknown> = new EventEmitter<unknown>();

  private _formProvider: DynForm[];

  constructor ( private fb: FormBuilder ) {
  }

  ngOnInit (): void {
  }

  private createFormGroup () {
    const groudDto = {};
    this.formProvider.forEach ( item => {
      groudDto[ item.name ] = ['',
                               item.validators.map ( value => {
                                 if ( value === 'email' ) {
                                   return Validators.email;
                                 } else if ( value === 'required' ) {
                                   return Validators.required;
                                 }
                                 return undefined;
                               } )
      ];
    } );
    const myFormGroup = this.fb.group ( groudDto );
    this.formProvider.forEach ( item => {
      item.control = myFormGroup.get ( [item.name] ) as FormControl;
    } );
    this.myForm = myFormGroup;
  }

  sendData () {
    this.submitData.emit ( this.myForm.value );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
  }
}
