
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/pages/index/index.component';
import { IndexModule } from './../app/views/base/index/index.module';
import { LoginModule } from './../app/views/base/login/login.module';
import { LoginComponent } from './views/base/login/login.component'
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module' 
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    AppRoutingModule,
    IndexModule,
    LoginModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }