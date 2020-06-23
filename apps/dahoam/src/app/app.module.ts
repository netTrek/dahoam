import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownModule, DynFormModule, UserListModule } from '@dahoamviernull/my-lib';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            CountdownModule,
            UserListModule,
            DynFormModule,
            AppRoutingModule,
            HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
