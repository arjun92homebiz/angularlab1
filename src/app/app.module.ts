import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { Angularlab1Component } from './angularlab1/angularlab1.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Angularlab1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
