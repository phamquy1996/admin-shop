
import { Routes } from "@angular/router";
import { IndexComponent } from './index/index.component'
import { ActionComponent } from './action/action.component'
export const ProductRoutes: Routes = [
  {
    path: "cate",
    children: [
      {
        path: "index",
        component: IndexComponent,
      },
      {
        path: "action",
        component: ActionComponent,
      },
    ],
  },
];