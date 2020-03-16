import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
