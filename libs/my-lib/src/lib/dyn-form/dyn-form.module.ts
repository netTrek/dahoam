import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynFormComponent } from './dyn-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DynFormComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [DynFormComponent]
})
export class DynFormModule { }
