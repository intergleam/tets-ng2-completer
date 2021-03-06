import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Ng2CompleterModule} from "ng2-completer/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CompleterModule,

    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
