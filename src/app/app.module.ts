import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { UserManagementComponent } from './user-management/user-management.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
