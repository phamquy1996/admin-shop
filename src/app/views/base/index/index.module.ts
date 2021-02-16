import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { FooterComponent } from './../footer/footer.component'
import { HeaderComponent } from './../header/header.component'
import { NavbarComponent } from './../navbar/navbar.component'
import { IndexRoutes } from './index.routing'
import { Routes, RouterModule } from '@angular/router';
import { StudentModule } from './../../../student/student.module'
import { LoginComponent } from './../login/login.component'
@NgModule({
  declarations: [
      IndexComponent,
      FooterComponent,
      NavbarComponent,
      HeaderComponent,
     
    ],
  imports: [
    CommonModule,
    StudentModule,
    RouterModule.forChild(IndexRoutes)
  ],
  exports:[
      FooterComponent,
      NavbarComponent,
      HeaderComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class IndexModule { }
