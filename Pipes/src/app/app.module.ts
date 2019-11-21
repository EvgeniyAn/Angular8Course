import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MultiByPipe} from "./pipes/mult-by.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MultiByPipe,
    ExMarksPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
