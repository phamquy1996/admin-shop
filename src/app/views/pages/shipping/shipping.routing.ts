
import { Routes } from "@angular/router";
import { IndexComponent } from './index/index.component'
import { ActionComponent } from './action/action.component'
export const ShippingRoutes: Routes = [
  {
    path: "shipping",
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