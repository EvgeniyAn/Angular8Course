import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ViewformsComponent } from './viewforms/viewforms.component';
import { NumberpannelComponent } from './numberpannel/numberpannel.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewformsComponent,
    NumberpannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
