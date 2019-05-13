import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MydemoComponent } from './mydemo/mydemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MydemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,MydemoComponent]
})
export class AppModule { }
