import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListItemComponent } from './student-list-item/student-list-item.component';
import { StudentComponent } from './student/student.component';
import { Routes, RouterModule } from '@angular/router';
import { UserRoutes } from './student.routing'
import { StudentProComponent } from './student-pro/student-pro.component';
@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentListItemComponent, StudentProComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
  ],
  exports: [StudentProComponent, StudentComponent],
})
export class StudentModule { }