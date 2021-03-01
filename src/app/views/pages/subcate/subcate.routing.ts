
import { Routes } from "@angular/router";
import { IndexComponent } from './index/index.component'
import { ActionComponent } from './action/action.component'
export const SubcateRouter: Routes = [
  {
    path: "subcate",
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