import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    // MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
