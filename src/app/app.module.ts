import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{FormsModule}from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { HideDirective } from './hide.directive'

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    HideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
