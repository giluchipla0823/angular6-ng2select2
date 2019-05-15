import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Select2Module } from 'ng2-select2';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { OptionsComponent } from './components/options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    Select2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
