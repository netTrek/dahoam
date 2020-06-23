import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashComponent } from './dash.component';

const routes: Routes = [{ path: '', component: DashComponent },
                        { path: 'detail', loadChildren: () => import('./detail/detail.module').then ( m => m.DetailModule ) }
];

@NgModule ( {
  imports: [RouterModule.forChild ( routes )],
  exports: [RouterModule]
} )
export class DashRoutingModule {
}
