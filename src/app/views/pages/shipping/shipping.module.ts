import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ShippingRoutes } from "./shipping.routing";
import { IndexComponent } from './index/index.component';
import { ActionComponent } from './action/action.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    IndexComponent,
    ActionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ShippingRoutes)
  ],
  exports: [],
})
export class ShippingModule { }
