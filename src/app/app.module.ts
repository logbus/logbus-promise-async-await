import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ BrowserModule, CommonModule, MaterialModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
