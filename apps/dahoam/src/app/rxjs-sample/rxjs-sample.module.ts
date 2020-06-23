import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSampleRoutingModule } from './rxjs-sample-routing.module';
import { RxjsSampleComponent } from './rxjs-sample.component';


@NgModule({
  declarations: [RxjsSampleComponent],
  imports: [
    CommonModule,
    RxjsSampleRoutingModule
  ]
})
export class RxjsSampleModule { }
