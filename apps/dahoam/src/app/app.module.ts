import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownModule, DynFormModule, UserListModule } from '@dahoamviernull/my-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            CountdownModule,
            UserListModule,
            DynFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
