import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "./product.component";
import { RouterModule } from "@angular/router";
import { ProductRoutes } from "./product.routing";
@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes)
  ],
  exports: [ProductComponent],
})
export class ProductModule { }
