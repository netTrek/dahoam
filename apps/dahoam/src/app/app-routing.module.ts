import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {path: '', redirectTo: 'rxjs', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  { path: 'contact', loadChildren: () => import('./../../../../libs/my-lib/src/lib/contact/contact.module').then(m => m.ContactModule) },
  { path: 'rxjs', loadChildren: () => import('./rxjs-sample/rxjs-sample.module').then(m => m.RxjsSampleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
