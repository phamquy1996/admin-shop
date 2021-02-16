
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from './student/student.component';
import { StudentProComponent } from './student-pro/student-pro.component';
export const UserRoutes: Routes = [
  {
    path: "student",
    children: [
      {
        path: "",
        component: StudentComponent,
      },
      {
        path: "favourite-products",
        component: StudentProComponent,
      },
    ],
  },
];
