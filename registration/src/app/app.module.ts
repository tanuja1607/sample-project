import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {AppService} from './app.service'
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MyOwnCustomMaterialModule} from './MyOwnCustomMaterialModule.module';

import { MaterialModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
   // MyOwnCustomMaterialModule


  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
