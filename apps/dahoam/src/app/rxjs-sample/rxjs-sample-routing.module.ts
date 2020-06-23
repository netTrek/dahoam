import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsSampleComponent } from './rxjs-sample.component';

const routes: Routes = [{ path: '', component: RxjsSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsSampleRoutingModule { }
