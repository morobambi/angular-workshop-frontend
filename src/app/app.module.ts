import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyPipe } from './my.pipe';
import { TitulekComponent } from './titulek/titulek.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipe,
    TitulekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
