import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routing';
import { RouterModule} from '@angular/router'
import { LoginComponent } from './login.component'
@NgModule({
  declarations: [
     
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes)
  ],
  exports:[
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule { }
