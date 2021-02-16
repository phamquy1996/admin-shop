import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import("./../app/views/base/index/index.module").then((m) => m.IndexModule),
      },
      {
        path: "student",
        loadChildren: () => import("./../app/student/student.module").then((m) => m.StudentModule),
      },
      {
        path: "login",
        loadChildren: () => import("./../app/views/base/login/login.module").then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
